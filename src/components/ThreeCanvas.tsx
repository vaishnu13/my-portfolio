import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  scrollProgress: number; // 0 to 1
}

export function ThreeCanvas({ scrollProgress }: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    stars: THREE.Points;
    glowStars: THREE.Points;
    animId: number;
    mouseX: number;
    mouseY: number;
    targetMouseX: number;
    targetMouseY: number;
  } | null>(null);

  const scrollRef = useRef(scrollProgress);
  scrollRef.current = scrollProgress;

  const initScene = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x121010, 0.0008);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 0, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x121010, 1);
    container.appendChild(renderer.domElement);

    // === STAR FIELD — distributed along a deep Z corridor ===
    const starCount = 3000;
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3]     = (Math.random() - 0.5) * 400;     // X spread
      starPositions[i3 + 1] = (Math.random() - 0.5) * 400;     // Y spread
      starPositions[i3 + 2] = 150 - Math.random() * 1200;       // Z: from +150 to -1050

      starSizes[i] = Math.random() * 2.5 + 0.5;

      // Warm white with occasional cyan/purple tint
      const tint = Math.random();
      if (tint > 0.92) {
        // Cyan star
        starColors[i3] = 0.22; starColors[i3+1] = 0.74; starColors[i3+2] = 0.97;
      } else if (tint > 0.85) {
        // Purple star
        starColors[i3] = 0.66; starColors[i3+1] = 0.33; starColors[i3+2] = 0.97;
      } else {
        // Warm white
        const brightness = 0.7 + Math.random() * 0.3;
        starColors[i3] = brightness * 0.95;
        starColors[i3+1] = brightness * 0.92;
        starColors[i3+2] = brightness * 0.88;
      }
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    // Circle texture for smooth points
    const canvas = document.createElement('canvas');
    canvas.width = 32; canvas.height = 32;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.3, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    const starTexture = new THREE.CanvasTexture(canvas);

    const starMat = new THREE.PointsMaterial({
      size: 1.8,
      map: starTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // === GLOW STARS — larger, fewer, brighter nebula-like points ===
    const glowCount = 200;
    const glowPositions = new Float32Array(glowCount * 3);

    for (let i = 0; i < glowCount; i++) {
      const i3 = i * 3;
      glowPositions[i3]     = (Math.random() - 0.5) * 300;
      glowPositions[i3 + 1] = (Math.random() - 0.5) * 300;
      glowPositions[i3 + 2] = 100 - Math.random() * 1100;
    }

    const glowGeo = new THREE.BufferGeometry();
    glowGeo.setAttribute('position', new THREE.BufferAttribute(glowPositions, 3));

    const glowMat = new THREE.PointsMaterial({
      size: 6,
      map: starTexture,
      transparent: true,
      opacity: 0.25,
      color: 0xe6e1df,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const glowStars = new THREE.Points(glowGeo, glowMat);
    scene.add(glowStars);

    // Mouse tracking
    let mouseX = 0, mouseY = 0, targetMouseX = 0, targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      const animId = requestAnimationFrame(animate);
      
      // Lerp mouse
      targetMouseX += (mouseX - targetMouseX) * 0.04;
      targetMouseY += (mouseY - targetMouseY) * 0.04;

      // Camera flies forward based on scroll (z: 100 to -900)
      const progress = scrollRef.current;
      const targetZ = 100 - progress * 1000;
      camera.position.z = targetZ;
      camera.position.x = targetMouseX * 15;
      camera.position.y = -targetMouseY * 15;
      camera.lookAt(camera.position.x * 0.5, -camera.position.y * 0.3, targetZ - 100);

      // Subtle star field rotation for life
      stars.rotation.z = progress * 0.1;

      renderer.render(scene, camera);

      if (sceneRef.current) sceneRef.current.animId = animId;
    };

    const animId = requestAnimationFrame(animate);

    sceneRef.current = {
      renderer, scene, camera, stars, glowStars, animId,
      mouseX, mouseY, targetMouseX, targetMouseY,
    };

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(sceneRef.current?.animId || 0);
      starGeo.dispose(); starMat.dispose(); starTexture.dispose();
      glowGeo.dispose(); glowMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    const cleanup = initScene();
    return cleanup;
  }, [initScene]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}

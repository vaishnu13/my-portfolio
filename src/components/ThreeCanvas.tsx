import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // 1. Central 3D Geometry — Wireframe Icosahedron & Ring
    const geometry = new THREE.IcosahedronGeometry(4, 2);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const mainMesh = new THREE.Mesh(geometry, wireframeMaterial);
    scene.add(mainMesh);

    // Inner glowing core mesh
    const innerGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Outer orbital ring
    const ringGeo = new THREE.TorusGeometry(6, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xe6e1df,
      transparent: true,
      opacity: 0.2,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    scene.add(ringMesh);

    // 2. Interactive Star/Nebula Particle Field
    const particlesCount = 700;
    const posArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 60;
      posArray[i + 1] = (Math.random() - 0.5) * 60;
      posArray[i + 2] = (Math.random() - 0.5) * 60;
      scaleArray[i / 3] = Math.random();
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    // Custom circle canvas texture for smooth particle points
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.arc(8, 8, 7, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.12,
      map: particleTexture,
      transparent: true,
      opacity: 0.45,
      color: 0x8c8684,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 2, 50);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 2, 50);
    purpleLight.position.set(-10, -10, -10);
    scene.add(purpleLight);

    // Mouse Tracking & Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    // Scroll progress Tracking
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Scroll progress
      const maxScroll = Math.max(
        document.body.scrollHeight - window.innerHeight,
        1
      );
      const scrollFraction = scrollY / maxScroll;

      // Rotate Meshes
      mainMesh.rotation.y = elapsedTime * 0.15 + targetX * 0.5;
      mainMesh.rotation.x = elapsedTime * 0.1 + targetY * 0.5;

      innerMesh.rotation.y = -elapsedTime * 0.25 + targetX * 0.3;
      innerMesh.rotation.z = elapsedTime * 0.15;

      ringMesh.rotation.z = elapsedTime * 0.1;
      ringMesh.rotation.y = targetX * 0.4;

      particlesMesh.rotation.y = elapsedTime * 0.03 + targetX * 0.2;
      particlesMesh.rotation.x = -elapsedTime * 0.02 + targetY * 0.2;

      // Camera motion based on scroll & mouse
      camera.position.x = targetX * 1.5;
      camera.position.y = -targetY * 1.5 - scrollFraction * 4;
      camera.position.z = 15 + Math.sin(scrollFraction * Math.PI) * 3;
      camera.lookAt(0, -scrollFraction * 3, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      wireframeMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}

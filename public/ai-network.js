/**
 * Neural Atlas - Network Visualization
 * Handles HTML5 Canvas drawing, node physics, and interactivity.
 */

const canvas = document.getElementById('network-canvas');
const ctx = canvas.getContext('2d');

// -- Configuration --
const config = {
    nodeSize: 6,
    activeNodeSize: 12,
    connectionDistance: 200,
    repulsion: 100,
    colors: {
        primary: '#64ffda',
        secondary: '#ffffff',
        accent: '#ff0055',
        line: 'rgba(100, 255, 218, 0.15)'
    }
};

// -- Data --
const nodes = [
    // Core Projects
    {
        id: 1, label: "NVIDIA NIM", type: "primary", x: 0, y: 0,
        details: { title: "NVIDIA NIM", desc: "Optimized Llama 3 on GKE", stat1: "95% Eff", stat2: "12ms", tags: ["GKE", "Llama 3"] }
    },
    {
        id: 2, label: "YOLOv8 Vision", type: "primary", x: 0, y: 0,
        details: { title: "Vision System", desc: "Real-time object detection pipeline", stat1: "60 FPS", stat2: "99% Acc", tags: ["PyTorch", "OpenCV"] }
    },
    {
        id: 3, label: "Market Predict", type: "primary", x: 0, y: 0,
        details: { title: "Market LSTM", desc: "Financial forecasting model", stat1: "$1.2M Vol", stat2: "85% Acc", tags: ["TensorFlow", "Pandas"] }
    },

    // Tech Stack
    { id: 4, label: "PyTorch", type: "secondary", x: 0, y: 0 },
    { id: 5, label: "TensorFlow", type: "secondary", x: 0, y: 0 },
    { id: 6, label: "Docker", type: "secondary", x: 0, y: 0 },
    { id: 7, label: "Kubernetes", type: "secondary", x: 0, y: 0 },
    { id: 8, label: "OpenCV", type: "secondary", x: 0, y: 0 },

    // Data/Concepts
    { id: 9, label: "Data Pipeline", type: "accent", x: 0, y: 0 },
    { id: 10, label: "Inference", type: "accent", x: 0, y: 0 },
    { id: 11, label: "Training", type: "accent", x: 0, y: 0 },
    { id: 12, label: "Optimization", type: "accent", x: 0, y: 0 }
];

// -- State --
let mouse = { x: -1000, y: -1000 };
let activeNode = null;
let animationId;

// -- Initialization --
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function initNodes() {
    nodes.forEach(node => {
        // Random layout but centered
        node.x = Math.random() * canvas.width;
        node.y = Math.random() * canvas.height;
        // Random velocity
        node.vx = (Math.random() - 0.5) * 0.5;
        node.vy = (Math.random() - 0.5) * 0.5;
    });
}

// -- Animation Loop --
function update() {
    // 1. Move nodes
    nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Mouse interaction (Repulsion)
        let dx = mouse.x - node.x;
        let dy = mouse.y - node.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
            let force = (150 - dist) / 150;
            node.x -= dx * force * 0.05;
            node.y -= dy * force * 0.05;
        }
    });

    // 2. Draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Connections
    ctx.lineWidth = 1;
    nodes.forEach((nodeA, i) => {
        nodes.forEach((nodeB, j) => {
            if (i >= j) return; // distinct pairs

            let dx = nodeA.x - nodeB.x;
            let dy = nodeA.y - nodeB.y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < config.connectionDistance) {
                // Opacity based on distance
                let opacity = 1 - (dist / config.connectionDistance);
                ctx.strokeStyle = config.colors.line.replace('0.15', opacity * 0.3);

                ctx.beginPath();
                ctx.moveTo(nodeA.x, nodeA.y);
                ctx.lineTo(nodeB.x, nodeB.y);
                ctx.stroke();
            }
        });
    });

    // Draw Nodes
    nodes.forEach(node => {
        let size = node === activeNode ? config.activeNodeSize : config.nodeSize;

        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);

        // Color based on type
        if (node.type === 'primary') ctx.fillStyle = config.colors.primary;
        else if (node.type === 'accent') ctx.fillStyle = config.colors.accent;
        else ctx.fillStyle = config.colors.secondary;

        ctx.fill();

        // Glow if primary or active
        if (node.type === 'primary' || node === activeNode) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = ctx.fillStyle;
        } else {
            ctx.shadowBlur = 0;
        }

        // Labels
        ctx.shadowBlur = 0; // Reset for text
        ctx.fillStyle = "#fff";
        ctx.font = "10px Inter";
        ctx.fillText(node.label, node.x + 12, node.y + 3);
    });

    animationId = requestAnimationFrame(update);
}

// -- Interaction Logic --
canvas.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    // Find hovered node
    let closestDist = 999;
    let closestNode = null;

    nodes.forEach(node => {
        let dx = node.x - mouse.x;
        let dy = node.y - mouse.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 20) { // Hover radius
            closestNode = node;
            closestDist = dist;
        }
    });

    if (closestNode !== activeNode) {
        activeNode = closestNode;
        updateUI(activeNode);
    }
});

function updateUI(node) {
    const detailsPanel = document.getElementById('details-panel');
    const emptyState = detailsPanel.querySelector('.empty-state');
    const nodeDetails = detailsPanel.querySelector('.node-details');

    if (node && node.details) { // Only show details for primary nodes
        emptyState.style.display = 'none';
        nodeDetails.classList.remove('hidden');

        // Populate Data
        document.getElementById('node-title').textContent = node.details.title;
        document.getElementById('node-desc').textContent = node.details.desc;
        document.getElementById('node-stat1').textContent = node.details.stat1;
        document.getElementById('node-stat2').textContent = node.details.stat2;

        // Tags
        const tagsContainer = document.getElementById('node-tags');
        tagsContainer.innerHTML = '';
        node.details.tags.forEach(tag => {
            const span = document.createElement('span');
            span.textContent = tag;
            tagsContainer.appendChild(span);
        });

    } else if (node) {
        // Hovering a secondary node - maybe show basic info or keep previous?
        // For now, let's just keep the last primary node view or show empty if we want strictness.
        // Let's stick to showing active primary, or empty if hovering nothing important.
    } else {
        // No node hovered, optional: revert to empty or keep last state
        // Keeping last state is usually better UX than flashing empty
    }
}

// -- Boot --
window.addEventListener('resize', resize);
resize();
initNodes();
update();

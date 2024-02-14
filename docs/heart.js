import * as THREE from 'three';
import { ParametricGeometry } from 'https://unpkg.com/three@0.161.0/examples/jsm/geometries/ParametricGeometry.js';

document.addEventListener('DOMContentLoaded', () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const heartColor = '#ff0000'

    const heartShape = (u, v, target) => {
        u = 2 * Math.PI * u;
        v = 2 * v - 1;

        let x = 16 * Math.sin(u) ** 3;
        let y = 13 * Math.cos(u) - 5 * Math.cos(2 * u) - 2 * Math.cos(3 * u) - Math.cos(4 * u);
        let z = Math.abs(v);

        target.set(x, y, z).multiplyScalar(0.15);
    };

    const pointLight = new THREE.PointLight(0xffffff, 1000, 100);
    pointLight.position.set(5, 5, 10); // Position the light

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
    scene.add(ambientLight);

    
    const geometry = new ParametricGeometry(heartShape, 50, 50);
    const material = new THREE.MeshPhongMaterial({ color: heartColor, side: THREE.DoubleSide});
    const heart = new THREE.Mesh(geometry, material);
    geometry.computeVertexNormals();

    const textSprite = createTextSprite("Happy Valentine's Day!", heartColor);
    textSprite.position.set(0,3.5,0);

    const textSprite1 = createTextSprite("I love you Keylee!", heartColor);
    textSprite1.position.set(0,0,0);

    scene.add(textSprite1);
    scene.add(textSprite);

    scene.add(heart);
    scene.add(pointLight);

    camera.position.z = 5;

    const animate = function () {
        requestAnimationFrame(animate);

        
        heart.rotation.y += 0.01;

        renderer.render(scene, camera);
    };

    animate();
});

function createTextCanvas(text, color, font = '24px Arial') {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;
    const textWidth = context.measureText(text).width;
    canvas.width = textWidth + 20; // Padding
    canvas.height = 30; // Assuming single line text, adjust as needed

    // Set text color
    context.fillStyle = color; // Use the color parameter

    // Re-apply text settings after resizing canvas
    context.font = font;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    return canvas;
}

function createTextSprite(text, color = 'rgba(255, 255, 255, 1.0)') { // Default: white
    const canvas = createTextCanvas(text, color);
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(canvas.width * 0.01, canvas.height * 0.01, 1); // Scale sprite
    return sprite;
}
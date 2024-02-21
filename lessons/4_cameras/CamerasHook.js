import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Cursor
const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener('mousemove', (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);
});

// Canvas
const canvas = document.querySelector('canvas.webgl');

// scene

const scene = new THREE.Scene();

// Object

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes

const sizes = {
  width: 800,
  height: 600,
};

// Camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// const aspectRatio = sizes.width / sizes.height;
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   -1,
//   1,
//   0.1,
//   100
// );
camera.position.z = 3;
scene.add(camera);

// Renderer

const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animations

const clock = new THREE.Clock();
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

function tick() {
  // Clock
  // Measure the time in seconds
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  // mesh.rotation.y = (Math.PI / 180) * elapsedTime * 60;
  // camera.position.x = -1 * cursor.x * 3;
  // camera.position.y = -1 * cursor.y * 3;

  function useCustomController() {
    camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
    camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
    camera.position.y = cursor.y * 5;
    camera.lookAt(mesh.position);
  }

  function useOrbitController() {
    controls.update();
  }

  useOrbitController();

  // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
}

tick();

import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// scene

const scene = new THREE.Scene();

// Axis Helper
const axisHelper = new THREE.AxesHelper();
scene.add(axisHelper);

// Object

const group = new THREE.Group();
scene.add(group);

function cubeGenerator(color, position) {
  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color })
  );
  return cube;
}

const cube1 = cubeGenerator(0xff0000);
const cube2 = cubeGenerator(0x00ff00);
const cube3 = cubeGenerator(0x0000ff);

cube1.position.set(-1.5, 0, 0);
group.add(cube1);

group.add(cube2);

cube3.position.set(1.5, 0, 0);
group.add(cube3);

group.position.set(0, 1, 0);

// Scale
// mesh.scale.set(2, 0.5, 0.5);

// Rotation

// function rotateMesh(mesh, x, y, z) {
//   mesh.rotation.reorder('YXZ');
//   const [dx, dy, dz] = [x, y, z].map((deg) => (Math.PI / 180) * deg);
//   mesh.rotation.set(dx, dy, dz);
// }

// rotateMesh(mesh, 45, 45, 0);

// Sizes

const sizes = {
  width: 800,
  height: 600,
};

// Camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0, 0, 3);
scene.add(camera);

// camera.lookAt(mesh.position);

// Renderer

const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

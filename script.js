const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  .1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 1);
document.body.appendChild(renderer.domElement);

camera.position.z = 8;
var zloc = camera.position.z;
camera.position.x = 0;
var xloc = camera.position.x;;
camera.position.y = 1;
var yloc = camera.position.y;
camera.lookAt(new THREE.Vector3(0,0,1));




const cube = {
  geometry: new THREE.BoxGeometry(1, .2, 1),
  material: new THREE.MeshBasicMaterial({ color: 0x00ff00})
};
cube.mesh = new THREE.Mesh(cube.geometry, cube.material);

const wireFrame = {
  geometry: new THREE.EdgesGeometry(cube.geometry),
  material: new THREE.LineBasicMaterial( {color: 0x000000 
  })
}
wireFrame.mesh = new THREE.LineSegments(wireFrame.geometry, wireFrame.material);




var newMesh = cube.mesh.clone();
newMesh.position.set(0,0,-1);
var newFrame = wireFrame.mesh.clone();
newFrame.position.set(0,0,-1);



const group = new THREE.Object3D();
group.add(cube.mesh);
group.add(wireFrame.mesh);
group.add(newMesh);
group.add(newFrame);
group.rotation.x = Math.PI/12;

var pivot = new THREE.Object3D();
scene.add(pivot);
pivot.add(group)
group.position.set(0, 0, 2/4); // the negative of the average of all the objects positions per axis 


var req;

function zoomIn() {
  if (camera.position.z > 4) {
    camera.position.z -= (4)/60;
 } else {
   zloc = camera.position.z;
 }
 
 if (camera.position.x > -1) {
    camera.position.x -= (1)/60;
 } else {
   xloc = camera.position.x;
   cancelAnimationFrame(req);
 }
 camera.lookAt(new THREE.Vector3(0,0,0));
  req = requestAnimationFrame(zoomIn);
}

function zoomOut() {
  if (camera.position.z < 8) {
    camera.position.z += (4)/60;
 } else {
   zloc = camera.position.z;
 }
 
 if (camera.position.x < 0) {
    camera.position.x += (1)/60;
 } else {
   xloc = camera.position.x;
   cancelAnimationFrame(req);
 }
 camera.lookAt(new THREE.Vector3(0,0,0));
  req = requestAnimationFrame(zoomOut);
}

var counter = -1;
function updateCameraPosition() {
  counter *= -1;
  if (counter > 0) {
    zoomIn();
  } else {
    console.log("jit");
    zoomOut();
  }
}

function render() {
  renderer.render(scene, camera);
  pivot.rotation.y += 0.01;
  requestAnimationFrame(render);
}
render();
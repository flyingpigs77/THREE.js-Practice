const scene = new THREE.Scene();

//REMINDER: FIGURE OUT WHY WORKS ON REPLIT AND NOT GITHUB
//^^^^^^^^^^^^

// The camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  .1,
  1000
);

// Make the camera further from the cube

camera.position.z = 8;
var zloc = 8;
camera.position.x = 0;
var xloc = 0;
camera.position.y = 1;
var yloc = 1;

camera.lookAt(new THREE.Vector3(0,0,0));

// The renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 1);
document.body.appendChild(renderer.domElement);

// cube
const cube = {
  // geometry: cubes shape and size
  geometry: new THREE.BoxGeometry(1, 1, 1),
  // material: color/appearance
  material: new THREE.MeshBasicMaterial({ color: 0x00ff00})
};

const wireFrame = {
  geometry: new THREE.EdgesGeometry( cube.geometry ),
  material: new THREE.LineBasicMaterial( { color: 0x000000 })
}


// mesh: combines the geometry and material so you can add them to the scene as one
// cube.mesh = new THREE.Mesh(cube.geometry, cube.material);
cube.mesh = new THREE.Mesh(cube.geometry, cube.material);

wireFrame.mesh = new THREE.LineSegments(wireFrame.geometry, wireFrame.material);

var newMesh = cube.mesh.clone();
newMesh.position.set(0,0,-2);

var newFrame = wireFrame.mesh.clone();
newFrame.position.set(0,0,-2);

const group = new THREE.Group();
group.add(cube.mesh);
group.add(wireFrame.mesh);
group.add(newMesh);
group.add(newFrame);
group.rotation.x = Math.PI/8;

scene.add(group);

group.position.x = 0;
group.position.y = 0;
group.position.z = 0;

var bgCube = cube.mesh.clone();
var bgFrame = wireFrame.mesh.clone();

const bgGroup = new THREE.Group();
bgGroup.add(bgCube);
bgGroup.add(bgFrame);
// bgGroup.geometry.set(1,1,1);
bgGroup.position.set(3,0,-5);

scene.add(bgGroup);


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
  // Renders scene and camera
  renderer.render(scene, camera);

  //Rotate the cube every frame
  group.rotation.y += 0.05;

  // calls every 1/60 of secoind
  requestAnimationFrame(render);
}
render();

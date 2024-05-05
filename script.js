const scene = new THREE.Scene();

// The camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  .1,
  1000
);

// Make the camera further from the cube
s
camera.position.z = 8;
var zloc = camera.position.z;
camera.position.x = 0;
var xloc = camera.position.x;;
camera.position.y = 1;
var yloc = camera.position.y;

camera.lookAt(new THREE.Vector3(0,0,0));

// The renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 1);
// Append the renderer canvas into <body>
document.body.appendChild(renderer.domElement);

// cube
const cube = {
  // geometry: cubes shape and size
  geometry: new THREE.BoxGeometry(1, .1, 2),
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
function updateCameraPosition() {
  if (camera.position.z > 4) {
     camera.position.z -= (zloc-4)/60;
  } else {
    zloc = camera.position.z;
  }
  
  if (camera.position.x > -1) {
     camera.position.x -= (xloc+1)/60;
  } else {
    xloc = camera.position.x;
    cancelAnimationFrame(req);
  }
  camera.lookAt(new THREE.Vector3(0,0,0));
  req = requestAnimationFrame(updateCameraPosition);
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

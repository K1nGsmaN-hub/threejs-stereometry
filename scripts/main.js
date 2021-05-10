let scene, camera, renderer;

function init(path, fov=20) {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xabdfff);
  camera = new THREE.PerspectiveCamera(fov,window.innerWidth/window.innerHeight,1);
  camera.rotation.y = 45/180*Math.PI;
  camera.position.x = 1000;
  camera.position.y = 0;
  camera.position.z = 1000;
  controls = new THREE.OrbitControls(camera);
  controls.addEventListener('change', renderer);
  directionalLight = new THREE.DirectionalLight(0xffffff,2);
  directionalLight.position.set(0,1,0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
  light = new THREE.PointLight(0xc4c4c4,2);
  light.position.set(0,300,500);
  scene.add(light);
  light2 = new THREE.PointLight(0xc4c4c4,2);
  light2.position.set(500,100,0);
  scene.add(light2);
  light3 = new THREE.PointLight(0xc4c4c4,2);
  light3.position.set(0,100,-500);
  scene.add(light3);
  light4 = new THREE.PointLight(0xc4c4c4,2);
  light4.position.set(-500,300,500);
  scene.add(light4);
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
  let loader = new THREE.GLTFLoader();
  loader.load(path, function(gltf){
    car = gltf.scene.children[0];
    car.scale.set(0.5,0.5,0.5);
    scene.add(gltf.scene);
    animate();
  });
}
function animate() {
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}
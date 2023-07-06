import * as THREE from "three";

const Lights = () => (
  <>
    <ambientLight intensity={0.3} />
    <directionalLight position={new THREE.Vector3(10, 10, 5)} intensity={1} />
  </>
);

export default Lights;

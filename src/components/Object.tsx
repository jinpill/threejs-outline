import * as THREE from "three";
import { Select } from "@react-three/postprocessing";

interface ObjectProps {
  uuid: string;
  position: THREE.Vector3;
  isSelected: boolean;
}

const Object = (props: ObjectProps) => (
  <Select enabled={props.isSelected}>
    <mesh uuid={props.uuid} position={props.position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial />
    </mesh>
  </Select>
);

export default Object;

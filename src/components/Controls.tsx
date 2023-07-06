import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

interface ControlsProps {
  onChange: (uuid: string | null) => void;
}

const Controls = (props: ControlsProps) => {
  const { onChange } = props;
  const { gl, scene, camera } = useThree();
  const raycaster = useRef(new THREE.Raycaster());

  useEffect(() => {
    const $$dom = gl.domElement;

    const handlePointerDown = (event: PointerEvent) => {
      const mouse = new THREE.Vector2();

      mouse.x = (event.clientX / $$dom.clientWidth) * 2 - 1;
      mouse.y = -(event.clientY / $$dom.clientHeight) * 2 + 1;

      raycaster.current.setFromCamera(mouse, camera);
      const intersects = raycaster.current.intersectObjects(scene.children, true);

      if (intersects.length === 0) {
        onChange(null);
        return;
      }

      const object = intersects[0].object as THREE.Mesh;
      onChange(object.uuid);
    };

    $$dom.addEventListener("pointerdown", handlePointerDown);

    return () => {
      $$dom.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [gl, scene, camera, onChange]);

  return null;
};

export default Controls;

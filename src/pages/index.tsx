import { useState, useMemo } from "react";
import * as THREE from "three";
import Lights from "@/components/Lights";
import Controls from "@/components/Controls";
import Object from "@/components/Object";
import { Selection, EffectComposer, Outline } from "@react-three/postprocessing";

const Home = () => {
  const [selection, setSelection] = useState<string | null>(null);
  const objects = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => ({
      uuid: THREE.MathUtils.generateUUID(),
      position: new THREE.Vector3(i * 2.5 - 2.5, 0, 0),
    }));
  }, []);

  return (
    <>
      <Lights />
      <Controls onChange={setSelection} />
      <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
          {/* #FD8F00 */}
          <Outline blur visibleEdgeColor={0x0000ff} edgeStrength={100} width={1000} />
        </EffectComposer>
        {objects.map((object) => (
          <Object
            key={object.uuid}
            uuid={object.uuid}
            position={object.position}
            isSelected={object.uuid === selection}
          />
        ))}
      </Selection>
    </>
  );
};

export default Home;

import { Canvas } from "@react-three/fiber";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <Canvas>
    <Component {...pageProps} />
  </Canvas>
);

export default App;

import React, {useRef, useEffect} from 'react';

import {Engine, Scene, MeshBuilder, HemisphericLight, ArcRotateCamera, Vector3} from '@babylonjs/core';


const mystyle = {
  width: "100%",
  height: "100%"
}

const ReactCanvas = props => {

    var canvasRef = useRef(null)

    useEffect(() => {

    const canvas = canvasRef.current
    const engine = new Engine(canvas, true);

    const createScene = function () {

      const scene = new Scene(engine);

      MeshBuilder.CreateBox("box", {})

      const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new Vector3(0, 0, 0));
      camera.attachControl(canvas, true);
      const light = new HemisphericLight("light", new Vector3(1, 1, 0));

      return scene;
    };

    const scene = createScene();

    engine.runRenderLoop(function () {
      scene.render();
    });

    window.addEventListener("resize", function () {
      engine.resize();
    });

  },[])
  
return <canvas style={mystyle} ref={canvasRef} {...props}></canvas> 

}

export default ReactCanvas
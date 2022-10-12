import React from "react";
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader } from "@babylonjs/core";
import SceneComponent from "./SceneComponent";
import '@babylonjs/loaders'

// let box;

const onSceneReady = (scene) => {
  var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  const canvas = scene.getEngine().getRenderingCanvas();
  camera.attachControl(canvas, true);
  var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  light.intensity = 0.7;

  // Our built-in 'box' shape.
  // box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
  // box.position.y = 1;

  // Our built-in 'ground' shape.
    // MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
      SceneLoader.ImportMesh("", "assets/toyota_gr_supra/", "scene.gltf", scene, function(meshes){
      scene.createDefaultCameraOrLight(true, true, true);
      scene.createDefaultEnvironment();
});
};

export default () => (
  <div>
    <SceneComponent antialias onSceneReady={onSceneReady}  id="my-canvas" />
  </div>
);
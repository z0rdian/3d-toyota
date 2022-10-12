// import logo from './logo.svg';
import './App.css';
// import ReactCanvas from './components/babylontest';
// import ReactCanvasSceneComponent from './components/UsingBabylonReact'
import UsingBabylonReact from './components/UsingBabylonReact';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        {/* <SceneComponent /> */}
        <UsingBabylonReact className='canvas' />
      {/* <ReactCanvas /> */}
      {/* <ReactCanvasSceneComponent /> */}
      </header>
    </div>
  );
}

export default App;

import {ReactComponent as Logo} from './logo.svg';
import Posts from "./components/Posts";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-logo'>
        <Logo style={{height:200}} />
        </div>
        <h1>React Posts Sharer</h1>
      </header>
      <Posts/>
    </div>
  );
}

export default App;

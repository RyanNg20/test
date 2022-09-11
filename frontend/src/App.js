import logo from './logo.svg';
import './App.css';
import { Hello } from './style';

function App() {
  return (
    <div className="App">
      <img src={require("./thlogo.png")}/>
      <Hello/>
    </div>
  );
}

export default App;

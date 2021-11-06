import './App.css';
import Submit from './components/Submit.js';
import Logo from './components/Logo.js';
import Results from './components/Results.js';
import TextField from './components/TextField.js';

function App() {
  return (
    <div className="App">
      <Logo></Logo>
      <TextField></TextField>
      <Submit></Submit>
      <Results></Results>
    </div>
  );
}

export default App;

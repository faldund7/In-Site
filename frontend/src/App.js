import './css/styles.css';

import Submit from './components/Submit.js';
import Logo from './components/Logo.js';
import Results from './components/Results.js';
import TextField from './components/TextField.js';
import MisinformationLink from './components/MisinformationLink.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Logo></Logo>
      <TextField></TextField>
      <MisinformationLink></MisinformationLink>
      <Results></Results>
      <Footer />
    </div>
  );
}

export default App;

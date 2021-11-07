
import Logo from './components/Logo.js';
import Results from './components/Results.js';
import TextField from './components/TextField.js';
import MisinformationLink from './components/MisinformationLink.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import SimpleCard from './components/Card.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Logo></Logo>
      <TextField></TextField>
      <MisinformationLink></MisinformationLink>
      <Results></Results>
      <Footer />
      <SimpleCard></SimpleCard>
    </div>
  );
}

export default App;

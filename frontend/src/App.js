
import Logo from './components/Logo.js';
import TextField from './components/TextField.js';
import MisinformationLink from './components/MisinformationLink.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Dashboard from './components/Dashboard.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Logo></Logo>
      <TextField></TextField>
      <MisinformationLink></MisinformationLink>
      <Dashboard></Dashboard>
      <Footer />
    </div>
  );
}

export default App;

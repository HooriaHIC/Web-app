import './App.css';
import Container from "./components/container";
import Layout from './components/layout';
import LocationInput from './components/locationInput';
import ServiceCard from './components/serviceCard';

function App() {
  return (
    <Layout>
      <div className="banner">
        <Container>
          <div className="hero-heading">
            <h1>Roof inspection made remote and easy</h1>
            <p>Get your roof inspected remotely and connect with our trusted roofers</p>
          </div>
          <LocationInput text="its really funny" />
        </Container>
      </div>
      <Container>
        <div className="overlaped">
          <ServiceCard />
        </div>
      </Container>

      {/* The section below is just there to add more space on the page so user can scroll*/}
      <div className="extra-space"></div>
    </Layout>
  );
}

export default App;

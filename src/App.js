import Header from './Layout/Header/Header';
import Features from "./Layout/Features/Features";
import Plan from "./Layout/Plan/Plan";
import Network from "./Layout/Network/Network";
import Reviews from "./Layout/Reviews/Reviews";
import Subscribe from "./Layout/Subscribe/Subscribe";
import Footer from './Layout/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Features />
        <Plan />
        <Network />
        <Reviews />
        <Subscribe />
      <Footer />
    </div>
  );
}

export default App;

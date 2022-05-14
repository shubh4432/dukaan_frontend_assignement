import './App.css';
import Header from './components/header';
import Overview from './components/sloganOverview';
import Features from './components/features';
import ProductCards from './components/productCards';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Overview />
      <Features />
      <ProductCards />
      <Footer />
    </div>
  );
}

export default App;

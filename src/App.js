
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header />
      {/* Main */}
      <Main accountAddress="" currentPhaseNumber="2" unitCost="1BNB" unit="3000 Meld" current="2500000" target="12500000" sale="1,233,943.453689" totalSale="3,733,943.453689" />
      {/* Footer */}
      <Footer />
    </div >
  );
}

export default App;

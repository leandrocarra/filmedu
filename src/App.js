import Home from './Pages/Home'
import Header from './components/Header'
import Tags from './components/Tags'

function App() {
  return (
    <div className="App">
      <Header />
      <Tags />
      <section className="wrapper">
        <Home />
      </section>
    </div>
  );
}

export default App;

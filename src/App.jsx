import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Slide from './components/Slide';
import { slides } from './data/slides';

function App() {
  const [index, setIndex] = useState(0);

  const proximo = () => {
    if (index < slides.length - 1) setIndex(index + 1);
  };

  const anterior = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="App">
      <Header />
      <Slide slide={slides[index]} />
      <div className="botoes">
        <button onClick={anterior} disabled={index === 0}>Anterior</button>
        <button onClick={proximo} disabled={index === slides.length - 1}>Próximo</button>
      </div>
    </div>
  );
}

export default App;

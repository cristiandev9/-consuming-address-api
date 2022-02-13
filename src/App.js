import { useState } from 'react';
import './index.css';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');

  function CalcularImc() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    if (imc < 18.6) {
      setMensagem('Abaixo do Peso. Imc: ' + imc.toFixed(2));
    } else if (imc >= 18.7 && imc <= 24.9) {
      setMensagem('Peso ideal. Imc: ' + imc.toFixed(2));
    } else if (imc >= 25 && imc <= 34.9) {
      setMensagem('Levemente acima do peso. Imc: ' + imc.toFixed(2));
    } else {
      setMensagem('Acima do peso. Imc: ' + imc.toFixed(2));
    }
  }
  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span className='span-phrase'>Vamos Calcular Seu IMC</span>
      <div className="areaInput">
        <input type="text" placeholder="Peso em KG"
          value={peso}
          onChange={(e) => setPeso(e.target.value)} />

        <input type="text" placeholder="Altura em CM"
          value={altura}
          onChange={(e) => setAltura(e.target.value)} />
        <button className='btn-calcular' onClick={CalcularImc}>Calcular</button>
      </div>
      <div id='result-imc' className='result-imc'>{mensagem}</div>

    </div>
  )
}
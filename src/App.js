import { useState } from "react";
import "./app.css";

export default function App(){

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('');

  function calcularImc(){
    const alt = altura / 100;
    
    const imc = peso / (alt * alt);
    
    if(imc <= 16.9){
      setMensagem("Muito abaixo do peso! Seu imc foi: " + imc.toFixed(2));
    
    } else if (imc <= 18.4) {
      setMensagem("Abaixo do peso! Seu imc foi: " + imc.toFixed(2));
    
    } else if (imc <= 24.9) {
      setMensagem("Peso normal! Seu imc foi: " + imc.toFixed(2));
    
    } else if (imc <= 29.9) {
      setMensagem("Acima do peso! Seu imc foi: " + imc.toFixed(2));
    
    } else if (imc <= 34.9) {
      setMensagem("Obesidade Grau I! Seu imc foi: " + imc.toFixed(2));

    } else if (imc <= 40) {
      setMensagem("Obesidade Grau II! Seu imc foi: " + imc.toFixed(2));

    } else {
      setMensagem("Obesidade Grau III! Seu imc foi: " + imc.toFixed(2));
    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>
      <div className="area-input">
        <input 
          type="text" 
          placeholder="Peso em (kg)"
          required
          value={peso}
          onChange={(e) => setPeso(e.target.value)} 
          />
        <input 
          type="text" 
          placeholder="Altura em (cm)" 
          required
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          />

        <button 
          className="app-button"
          onClick={calcularImc}
        >
          Calcular
        </button>
      </div>  
      <h2>{mensagem}</h2> 
    </div>
  )
}
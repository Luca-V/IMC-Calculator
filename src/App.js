import { useState } from "react";

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [IMCResult, setIMCResult] = useState(null);

  const calculateIMC = () => {
    if (weight && height) {
      const heightInM = parseFloat(height);
      const IMC = weight / (heightInM ** 2);
      setIMCResult(IMC.toFixed(2));
    }
  };

  return (
    <main className="bg-slate-800 flex min-h-screen flex-col items-center justify-center">
      <div className="p-8 rounded-lg w-full max-w-md shadow-2xl">
        <h1 className="text-3xl font-semibold mb-4 text-gray-300 text-center">Calculadora de IMC</h1>
        <div>
          <label htmlFor="height" className="block mb-1 text-sm font-medium text-gray-600">Altura (cm)</label>
          <input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none text-slate-800"
            placeholder="Ingresa tu altura"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="weight" className="block mb-1 text-sm font-medium text-gray-600">Peso (kg)</label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none text-slate-800"
            placeholder="Ingresa tu peso"
          />
        </div>

        <button onClick={calculateIMC} className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none">
          Calcular IMC
        </button>

        {IMCResult != null && <p className="pt-6 text-center text-gray-500">Tu IMC: {IMCResult}</p>}
        {IMCResult != null && IMCResult <= 18.5 && <p className="pt-2 text-center text-gray-500">Tu Nivel de Peso es muy bueno</p>}
        {IMCResult != null && IMCResult >= 18.5 && IMCResult <= 24.9 && <p className="pt-2 text-center text-gray-500">Tu Nivel de Peso se iguala a Normal</p>}
        {IMCResult != null && IMCResult >= 25 && IMCResult <= 29.9 && <p className="pt-2 text-center text-gray-500">Tu Nivel de Peso se iguala a Sobrepeso</p>}
        {IMCResult != null && IMCResult >= 30 && <p className="pt-2 text-center text-gray-500">Tu Nivel de Peso se iguala a Obesidad</p>}
      </div>
    </main>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  const [calc, setCalcBMI] = useState('');

  const calculateBmi = () => {

    if(height && weight){

    
    const heightInMeter = height / 100;
    const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);
    setCalcBMI(bmi);

      let message = '';
      if(bmi < 18.5){
        message = 'You are Underweight'; 
      }else if(bmi >= 18.5 && bmi < 25){
        message = 'You are Normal weight'; 
      }else if(bmi >= 25 && bmi < 30){
        message = 'You are Overweight'; 
      }else{
        message = 'You are Obese'; 
      }
      setResult(message);

    }else{
      setResult('');
      setCalcBMI('');
    }
  }

  return (
    <div className="max-w-md mx-auto my-8">
      <h1 className="text-3xl font-semibold text-center mb-4">BMI Calculator</h1> 
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Enter Your Height (cm):</label>
        <input 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type='number'  
          value={height} 
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Enter Your Weight (kg):</label>
        <input 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type='number'  
          value={weight} 
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <button 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={calculateBmi}
      >
        Calc your BMI
      </button>

      <div className="mt-4">
        {calc && <p className="text-lg">Your BMI: {calc}</p>}
        {result && <p className="text-lg">Result: {result}</p>}
      </div>
      
    </div>

    
  );
}

export default App;

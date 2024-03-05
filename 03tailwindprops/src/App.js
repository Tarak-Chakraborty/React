
import './App.css';
import Card from './components/Card';
function App(props) {
  
  return (
   <>
    <h1 className = 'bg-green-400 p-4 rounded-xl mb-4'>Hellow World</h1>
    <Card username="chaiaurcode"/>
    <Card username="Tarak"/>
   </>
  );
}

export default App;

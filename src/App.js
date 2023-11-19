import './App.css';
import CardFolder from './Components/CardFolder/CardFolder';
import CardStat from './Components/CardStat/CardStat';

function App() {
  return (
    <div className="App">
      <img 
      className='absolute w-full  z-0 bottom-[-3.5rem]'
      alt='bg'
      src={process.env.PUBLIC_URL+"assets/bg-desktop.png"} />
      <CardFolder />
      <CardStat />
    </div>
  );
}

export default App;

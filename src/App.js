import './App.css';
import CardFolder from './Components/CardFolder/CardFolder';
import CardStat from './Components/CardStat/CardStat';

function App() {
  return (
    <div className="App">
      <img 
      className=' w-full  z-0 bottom-0 fixed xl:hidden'
      alt='bg'
      src={process.env.PUBLIC_URL+"assets/bg-desktop.png"} />
          <img 
      className=' w-full  z-0 bottom-0 fixed hidden xl:flex xl:left-0 xl:top-0 xl:h-full '
      alt='bg'
      src={process.env.PUBLIC_URL+"assets/bg-mobile.png"} />
      <CardFolder />
      <CardStat />
    </div>
  );
}

export default App;

import logo from './f1.png';
import './App.css';
import proverb from './proverbs';

function App() {
  const randomIndex = length => {
    return parseInt(Math.random() * length);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{proverb[randomIndex(proverb.length)]}</p>
      </header>
    </div>
  );
}

export default App;

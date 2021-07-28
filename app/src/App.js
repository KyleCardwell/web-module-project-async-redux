import './App.css';
import Joke from './components/Joke';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Joke />
      </header>
    </div>
  );
}

export default App;

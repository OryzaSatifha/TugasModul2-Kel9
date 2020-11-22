import './App.css';
import Header from './header/header';
import Card from './components/card'

function App() {
  return (
    <div>
      <header className="App-header">
      <div>
          <Header/>
      </div>
      <div>
        <Card/>
      </div>
    </header>
    </div>
    
  );
}

export default App;

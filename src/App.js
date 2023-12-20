import './App.css';
import DateTimeSelector from './components/DateTimeSelector/DateTimeSelector';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Date Time Selector
        </p>
      </header>
      <div className="App-body">
        <DateTimeSelector />
      </div>
    </div>
  );
}

export default App;

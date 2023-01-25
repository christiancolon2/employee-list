
import './App.css';
import EmployeePage from './component/EmployeePage';
import HomePage from './component/HomePage';

function App() {
  return (
    <div className="App">
      <div className='first-div'>
      <HomePage />
      </div>
      <div className='second-div'>
      <EmployeePage />
      </div>
       
       
    </div>
  );
}

export default App;

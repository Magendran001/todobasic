import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';
import Login from './login/login';



function App() {



  return (
    <div className="App">
      <Login />
      <Todo></Todo>


    </div>
  );
}

export default App;

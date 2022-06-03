import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';
import Login from './login/login';
import { Routes, Route } from "react-router-dom"
import Eachtodo from './components/Eachtodo';
import Completedtodo from './components/Completedtodo';



function App() {



  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<> <Login />
          <Todo></Todo>
           
          </>}></Route>
        <Route path='/todo/:id' element={<Eachtodo />}></Route>
        <Route path='/completedtodo' element={<Completedtodo />}></Route>
      </Routes>


    </div>
  );
}

export default App;

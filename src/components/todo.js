import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Gettodo, Storetodo, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODOS_SUCCESS, POST_TODOS_REQUEST } from '../redux/todofunction';
import { useState } from 'react';
function Todo() {
  let Dispatch = useDispatch();
  let selector = useSelector((state) => { return state.todo });
  let Loading = useSelector((state) => { return state.loading });
  console.log(Loading)

  let [data, setdata] = useState([]);
  let [input, setinput] = useState();

  let [obj, setobj] = useState({})

  useEffect(() => {

    Dispatch(GET_TODOS_REQUEST())



    async function get() {
      let x = await fetch("http://localhost:3000/todo");
      let y = await x.json();


      Dispatch(Gettodo(y))

      Dispatch(GET_TODOS_SUCCESS())
    }


    get()

  }, [obj])



  async function postTodo() {

    try {


      Dispatch(POST_TODOS_REQUEST())

      let x = await fetch("http://localhost:3000/todo", {

        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ todo: input })


      },

      );



      let y = await x.json();




      Dispatch(Storetodo(y))
      Dispatch(POST_TODOS_SUCCESS())


    }
    catch (e) {
      console.log(e)

    }


  }




  return (<div>

    <div> <input type="text" placeholder='Entertodo' onChange={(e) => { setinput(e.target.value) }} />
      <button onClick={() => { postTodo() }}>Add</button>
    </div>
    <div>
      {Loading ? "...loading" : selector.map((e) => { return <div key={e.id}>{`Todo:  ${e.todo}`}</div> })}
    </div>
  </div>)
}
export default Todo
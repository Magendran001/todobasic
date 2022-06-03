import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom"
function Displaytodo()
{
    let selector = useSelector((state) => { return state.todoreducer.todo });
    console.log(selector,"selector")
    let Loading = useSelector((state) => { return state.todoreducer.loading });
    return ( <div>
        {Loading ? "...loading" : selector.map((e) => { return<div>{<Link to={`todo/${e.id}`} key={e.id}>{`Todo:  ${e.id}`}</Link> }</div> })}
      </div>)
}
export default Displaytodo
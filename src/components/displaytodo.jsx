import { useDispatch, useSelector } from 'react-redux';
function Displaytodo()
{
    let selector = useSelector((state) => { return state.todoreducer.todo });
    console.log(selector,"selector")
    let Loading = useSelector((state) => { return state.todoreducer.loading });
    return ( <div>
        {Loading ? "...loading" : selector.map((e) => { return <div key={e.id}>{`Todo:  ${e.todo}`}</div> })}
      </div>)
}
export default Displaytodo
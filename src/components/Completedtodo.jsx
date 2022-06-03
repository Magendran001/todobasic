import { useSelector } from "react-redux";
import { useNavigate } from "react-router"
function Completedtodo()
{

    let completedtodo = useSelector((store)=>{ return store.completereducer.completetodo});
    console.log(completedtodo,"completedtodo")

    let nav = useNavigate();
    return (<div>
        <div>

            <button onClick={()=>{nav("/")}}>Back</button>
        </div>

        <div>{completedtodo.map((e)=>{return <div>{e.id}</div>})}</div>
    </div>)
}

export default Completedtodo
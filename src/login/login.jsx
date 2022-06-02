
import {useDispatch,useSelector} from "react-redux";

function Login()
{
    let dispatch = useDispatch();
    let isAuth = useSelector((state) => { return state.authenticatereducer.isAuth });
    

    return (<div>{isAuth?<button onClick={()=>{dispatch({type:"logout"})}}>Logout</button>:<button onClick={()=>{dispatch({type:"login"})}}>Login</button>}</div>)
}
export default Login
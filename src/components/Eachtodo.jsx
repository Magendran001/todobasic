import { useState } from "react";
import { useEffect } from "react";
 import axios from "axios";
 import { useDispatch } from "react-redux";
 import { Navigate, useNavigate } from "react-router";
 import { ADDCOMPLETETODO } from "../redux/completetodo/action";
import { useParams } from "react-router"

function Eachtodo()
{
    let nav = useNavigate();
      let Dispatch = useDispatch();

    let [data,setdata] = useState({});
    console.log(data,"data")

    let {id} = useParams();
          useEffect(()=>{
                   
            async function geteachtodo()
            {

                let x = await fetch(`http://localhost:3000/todo/${id}`);
              let y = await x.json();
              setdata(y)

            }
            geteachtodo()
              

          },[])

           
      function Remove()
     {
      
        
        axios.delete(`http://localhost:3000/todo/${id}`)
        .then(function (response) {
          // handle success
          nav("/")
          console.log(response);

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
      
     }
const updatetodo =()=>{

    axios.patch(`http://localhost:3000/todo/${id}`,{status:"done"})
        .then(function (response) {
          // handle success

          setdata(response.data)

          Dispatch(ADDCOMPLETETODO(response.data))
          
         
          console.log(response);

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });


}
 
   
    return (<div>  <div>{id}:{data.todo} <button onClick={()=>{Remove()}}>Remove</button></div> 
     <div>{data.status} </div>
     <button disabled={data.status=="done"?true:false} onClick={()=>{updatetodo()}}  >Complete</button>
     <div><button onClick={()=>{nav("/")}}>Back</button></div>
    </div>)
}
export default Eachtodo
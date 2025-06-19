import { useDispatch, UseDispatch } from "react-redux"
import Authservice from "../../Appwrite/auth"
import {logout} from '../../store/authslice'


export default function Logoutbutton(){

    const dispatch=useDispatch()
    const logouthandler=()=>{
        Authservice.logout().then(()=>{
            dispatch(logout())
        })
    }

    return(
        <button>Logout</button>
    )
}
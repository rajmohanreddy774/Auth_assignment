import { useContext } from "react";
import { LogContext } from "../context/logContext";
import "./Toggle.css"


export const Navbar = ()=>{
    const {isAuth , handleAuth} = useContext(LogContext)
    
     return (
			<div>

				<button onClick={()=>handleAuth()}>{isAuth ? "Logout" : "Login"}</button>
			
				<button>Users</button>
				<hr></hr>
                <h4>Status : {isAuth ? "Login" : "Loggedout"}</h4>
			</div>
		);
}
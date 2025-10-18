//Function components
import { UserContext } from "../App";
import { useContext } from "react";
function Header(){
    
 const {user} = useContext(UserContext)
 let uname = user.name;
//  console.log(det);
 

    return (
    <header>
        <h1>To-Do list</h1>
    </header>
    )
}
export default Header;
import {  useState } from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartcontext";


export const Header = () => {
    const [isLogged,setIsLogged] = useState(true);
    const {cartItems} = useContext(CartContext);
    return(
        <div className="header">
            <Link to = "/"><img src = "https://tse2.mm.bing.net/th?id=OIP.ozjDVpc_zk86CCU00X4QPgAAAA&pid=Api&P=0" /></Link>
            <nav>
                <ul>
                    <li className="score"><Link to = "/Body">Home</Link></li>
                    <li>Contacts</li>
                    <li>About</li>
                    <li className="score">
                        <Link to = "/cart"><span className="cart">Cart</span></Link>
                        <span className= "cart_score">{cartItems.length}</span>
                        </li>
                </ul>
            </nav>
            {isLogged ? <button className = "log"onClick = {() => setIsLogged(false)}>Log Out</button> : <button className = "log" onClick = {() => setIsLogged(true)}>Log In</button>}
        </div>
    )
  };

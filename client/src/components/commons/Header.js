import { Link } from "react-router-dom";

function Header(){
    return(
        <Link to={ '/' }>
            <h1> YouReseller </h1>
        </Link>

    ); 
}

export default Header; 
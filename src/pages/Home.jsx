import { Link } from "react-router-dom";

export function Home(){
    return(
    <div>
        <h1 className="text-8xl text-indigo-500">Home</h1>
        <Link to="/About">About</Link>
    </div>
    );
}
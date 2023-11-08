import { Link } from "react-router-dom";

export function About(){
    return (
        <div>
            <h1 className="text-8xl text-indigo-800">About</h1>
            <Link to="/Contact">Contact</Link>
        </div>
    );
}
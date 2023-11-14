import { useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContext } from "../context/CounterContext";

export function About(){
    const counter = useContext(CounterContext)
    return (
        <div>
            <h1 className="text-8xl text-indigo-800">About</h1>
            <Link to="/Contact">Contact</Link>
            <p>Counter: {counter}</p>
        </div>
    );
}
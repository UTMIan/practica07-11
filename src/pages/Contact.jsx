import { Link } from "react-router-dom";
import { CounterContext } from "../context/CounterContext";
import { useContext } from "react";

export function Contact(){
    const counter = useContext(CounterContext)
    return(
        <div>
            <h1 className="text-8xl text-indigo-700">Contact</h1>
            <Link to="/">Home</Link>
            <p>Counter: {counter}</p>
        </div>
        );
}
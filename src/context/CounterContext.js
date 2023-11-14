// Un contexto es algo que se proyecta y se puede ver desde cualquer parte de nuestro proyecto
import { createContext } from "react";

const CounterContext = createContext(0);

export { CounterContext };
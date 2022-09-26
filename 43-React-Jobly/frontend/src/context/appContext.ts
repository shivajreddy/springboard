import { createContext } from "react";
import { TokenType } from "../@types/token";

const TokenContext = createContext<TokenType | null>(null);

export { TokenContext };

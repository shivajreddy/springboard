import "./App.css";
import AppRoutes from "./AppRoutes";
import useLocalStorage from "./hooks/useLocalStorage";
import { TokenContext } from "./context/appContext";
import { TokenType } from "./@types/token";

function App() {
  const [token, setToken] = useLocalStorage("jobly-user-token", null);
  // TODO usercontext also here
  // const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="App">
      <TokenContext.Provider value={{ token, setToken }}>
        <AppRoutes />
      </TokenContext.Provider>
    </div>
  );
}

export default App;

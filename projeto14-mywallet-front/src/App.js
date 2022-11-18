import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import LoginPage from "./pages/LoginPage";
import CadastroPage from "./pages/CadastroPage";
import FulanoPage from "./pages/FulanoPage";
import NewEnterPage from "./pages/NewEnterPage";
import NewExitPage from "./pages/NewExitPage";

function App() {
  return (
    <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/cadastro" element={<CadastroPage/>}/>
            <Route path="/fulano" element={<FulanoPage/>}/>
            <Route path="/newenter" element={<NewEnterPage/>}/>
            <Route path="/newexit" element={<NewExitPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

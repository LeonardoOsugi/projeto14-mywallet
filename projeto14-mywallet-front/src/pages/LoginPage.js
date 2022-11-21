import styled from "styled-components";
import {Tudo} from "../constants/Xtudo"
import Logo from "../components/LogoMyWallet";
import {Inputs} from "../constants/styleInputs";
import { ButtonSave } from "../constants/buttonSave";
import { Link, useNavigate } from "react-router-dom";
import { LinkTo } from "../constants/linkTo";
import { useState } from "react";
import { BASE_URL } from "../constants/urls";
import axios from "axios";

export default function LoginPage(){
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    const navegate = useNavigate();

    function addInfo(e){
        e.preventDefault();

        const url = `${BASE_URL}login`;

        const body ={
            email: email,
            senha: senha,
        };

        axios.post(url, body).then((res) =>{
            localStorage.setItem("token", JSON.stringify(res.data.token));
            localStorage.setItem("name", JSON.stringify(res.data.nome));

            navegate("/fulano");
        }).catch((err) =>{
            alert(err.response.data.message);
        });
    };
    return(
        <Tudo>
            <PrimeiraPage>
                <ImgLogo>
                    <Logo />
                </ImgLogo>
                <form onSubmit={addInfo}>
                    <Inputs>
                        <input name="email" value={email} type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                        <input name="senha" value={senha} type="password" placeholder="senha" onChange={(e) => setSenha(e.target.value)}/>
                    </Inputs> 
                    <ButtonSave>
                        <button type="submit">Entrar</button>
                    </ButtonSave>  
                </form>
                <Link to="/cadastro">
                    <LinkTo>
                        <p>Primeira vez? Cadastre-se!</p>
                    </LinkTo>
                </Link>
            </PrimeiraPage>
        </Tudo>
    )
}

const PrimeiraPage = styled.div`
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
`;

const ImgLogo = styled.div`
        margin-top: 15%;
        margin-bottom: 20px;
`

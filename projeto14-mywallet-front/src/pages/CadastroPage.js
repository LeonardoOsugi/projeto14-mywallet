import styled from "styled-components";
import { Tudo } from "../constants/Xtudo";
import Logo from "../components/LogoMyWallet";
import { Inputs } from "../constants/styleInputs";
import { ButtonSave } from "../constants/buttonSave";
import { Link } from "react-router-dom";
import { LinkTo } from "../constants/linkTo";
import { useState } from "react";
import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function CadastroPage(){
    const[nome, setNome] = useState("");
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");
    const[confirmSenha, setConfirmSenha] = useState("");
    const navegate = useNavigate();

    function addCadastro(e){
    e.preventDefault();

    const url = `${BASE_URL}cadastro`;

    const body = {
        nome: nome,
        email: email,
        senha: senha,
        confirmSenha: confirmSenha,
    };

    axios.post(url,body).then(() => {
        alert("Cadastro realizado");
        navegate("/");
      }).catch((err) => {
        alert(err.response.data.message);
      });
    };

    return(
        <Tudo>
            <SegundaPage>
                <ImgLogoCadastro>
                    <Logo/>
                </ImgLogoCadastro>
                <form onSubmit={addCadastro}>
                    <Inputs>
                        <input name="name" value={nome} type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)}/>
                        <input name="email" value={email} type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                        <input name="senha" value={senha} type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
                        <input name="confirmSenha" value={confirmSenha} type="password" placeholder="Confirme a senha" onChange={(e) => setConfirmSenha(e.target.value)}/>
                    </Inputs>
                    <ButtonSave>
                        <button type="submit">Cadastrar</button>
                    </ButtonSave>
                </form>
                <Link to="/">
                    <LinkTo>
                        <p>Já tem uma conta? Entre agora!</p>
                    </LinkTo>
                </Link>
            </SegundaPage>
        </Tudo>
    )
};

const SegundaPage = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`;

const ImgLogoCadastro = styled.div`
        margin-top: 10%;
        margin-bottom: 20px;
`;



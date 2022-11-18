import styled from "styled-components";
import { Tudo } from "../constants/Xtudo";
import Logo from "../components/LogoMyWallet";
import { Inputs } from "../constants/styleInputs";
import { ButtonSave } from "../constants/buttonSave";
import { Link } from "react-router-dom";
import { LinkTo } from "../constants/linkTo";

export default function CadastroPage(){
    return(
        <Tudo>
            <SegundaPage>
                <ImgLogoCadastro>
                    <Logo/>
                </ImgLogoCadastro>
                <form onSubmit="">
                    <Inputs>
                        <input name="name" type="text" placeholder="Nome"/>
                        <input name="email" type="email" placeholder="E-mail"/>
                        <input name="senha" type="password" placeholder="Senha"/>
                        <input name="confirmSenha" type="password" placeholder="Confirme a senha"/>
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



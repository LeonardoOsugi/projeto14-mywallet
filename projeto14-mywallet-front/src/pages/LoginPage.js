import styled from "styled-components";
import {Tudo} from "../constants/Xtudo"
import Logo from "../components/LogoMyWallet";
import {Inputs} from "../constants/styleInputs";
import { ButtonSave } from "../constants/buttonSave";
import { Link } from "react-router-dom";
import { LinkTo } from "../constants/linkTo";

export default function LoginPage(){
    return(
        <Tudo>
            <PrimeiraPage>
                <ImgLogo>
                    <Logo />
                </ImgLogo>
                <form onSubmit="">
                    <Inputs>
                        <input name="email" type="email" placeholder="E-mail" />
                        <input name="senha" type="password" placeholder="senha"/>
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

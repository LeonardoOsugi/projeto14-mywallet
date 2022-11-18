import styled from "styled-components"
import { Tudo } from "../constants/Xtudo";
import VoltaLogin from "../assets/img/VoltaLogin.svg";
import plus from "../assets/img/ant-design_plus-circle-outlined.svg";
import mine from "../assets/img/ant-design_minus-circle-outlined.svg";
import { Link } from "react-router-dom";

export default function FulanoPage(){
    return(
        <Tudo>
            <TerceiraPage>
                <Corpo>
                    <Titulo>
                        <h1>Olá, Fulano</h1>
                        <Link to="/">
                            <img src={VoltaLogin} alt="Volta-Login"/>
                        </Link>
                    </Titulo>
                    <Lista></Lista>
                    <CaixaSomaSubtrai>
                        <Link to="/newenter">
                            <Entrada>
                                <img src={plus} alt="plus"/>
                                <p>Nova<br/>Entrada</p>
                            </Entrada>
                        </Link>
                        <Link to="newexit">
                            <Saida>
                                <img src={mine} alt="mine"/>
                                <p>Nova<br/>Saída</p>
                            </Saida>
                        </Link>
                    </CaixaSomaSubtrai>
                </Corpo>
            </TerceiraPage>
        </Tudo>
    )
};

const TerceiraPage = styled.div`
        padding: 30px;
        display: flex;
        justify-content: center;
`;

const Corpo = styled.div`
    display: flex;
    flex-direction: column;
    width: 326px;
`;

const Lista = styled.div`
    width: 326px;
    height: 426px;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 10px;
`;

const Titulo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    h1{
        font-family: 'Raleway';
        font-size:26px;
        color: #ffffff;
    }
`;

const CaixaSomaSubtrai = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
`;

const Entrada = styled.div`
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 155px;
        height: 144px;
        background-color: #A328D6;
        border-radius: 10px;
        img{
            width: 25px;
            height: 25px;
        }

        p{
            font-family: 'Raleway';
            font-size: 17px;
            color: #ffffff;
        }
`;

const Saida = styled.div`
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 155px;
        height: 144px;
        background-color: #A328D6;
        border-radius: 10px;
        img{
            width: 25px;
            height: 25px;
        }
        p{
            font-family: 'Raleway';
            font-size: 17px;
            color: #ffffff;
        }
`;
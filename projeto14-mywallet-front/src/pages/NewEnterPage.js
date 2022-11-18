import styled from "styled-components";
import { Tudo } from "../constants/Xtudo";
import { Inputs } from "../constants/styleInputs";
import { ButtonSave } from "../constants/buttonSave";

export default function NewEnterPage(){
    return(
        <Tudo>
            <QuartaPagina>
                <Corpo>
                    <CaixaTitulo>
                        <h1>Nova Entrada</h1>
                    </CaixaTitulo>
                    <form onSubmit="">
                        <Inputs>
                            <input name="valor" type="text" placeholder="Valor"/>
                            <input name="descricao" type="text" placeholder="Descrição"/>
                        </Inputs>
                        <ButtonSave>
                            <button type="submit">Salvar Entrada</button>
                        </ButtonSave>
                    </form>
                </Corpo>
            </QuartaPagina>
        </Tudo>
    )
};

const QuartaPagina = styled.div`
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`;

const Corpo = styled.div`
        width: 326px;
`;

const CaixaTitulo = styled.div`
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 50px;
        h1{
            font-family: 'Raleway';
            font-size: 26px;
            color: #ffffff;
        }
`;
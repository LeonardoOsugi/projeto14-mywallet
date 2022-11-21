import styled from "styled-components";
import { Tudo } from "../constants/Xtudo";
import { Inputs } from "../constants/styleInputs";
import { ButtonSave } from "../constants/buttonSave";
import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewExitPage(){
    const[valor, setValor] = useState("");
    const[descricao, setDescricao] = useState("");

    const navegate  = useNavigate();

    function addInfo(e){
        e.preventDefault();

        const url = `${BASE_URL}saida`;

        const body = {
            valor: valor,
            descricao: descricao,
        };

        axios.post(url, body).then(() =>{
            alert("saída insirida");
            navegate("/fulano");
        }).catch((err) => {
            alert(err.response.data.message);
        });
    };
    return(
        <Tudo>
            <QuartaPagina>
                <Corpo>
                    <CaixaTitulo>
                        <h1>Nova Saída</h1>
                    </CaixaTitulo>
                    <form onSubmit={addInfo}>
                        <Inputs>
                            <input name="valor" value={valor} type="text" placeholder="Valor" onChange={e => setValor(e.target.value)}/>
                            <input name="descricao" value={descricao} type="text" placeholder="Descrição" onChange={e => setDescricao(e.target.value)}/>
                        </Inputs>
                        <ButtonSave>
                            <button type="submit">Salvar Saída</button>
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
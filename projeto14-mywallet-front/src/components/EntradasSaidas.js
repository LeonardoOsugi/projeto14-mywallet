import styled from "styled-components";
import dayjs from "dayjs";
import { useEffect } from "react";

export default function EntradasSaidas(status, valor, descricao, setSaldoInit, saldoInit){
    const date = dayjs().locale("pt").format("DD/MM");

    useEffect(() =>{
        if(status === "entrada"){
            setSaldoInit(saldoInit + parseFloat(valor));
        }else{
            setSaldoInit(saldoInit - parseFloat(valor));
        }
    })
    return(
        <LadoALadoDeCaboARabo>
            <Data>
                <p>{date}</p>
            </Data>
            <p>{descricao}</p>
            <Altera entsai={status === "entrada"?"#03AC00":"#C70000"}>
                <p>{valor}</p>
            </Altera>
        </LadoALadoDeCaboARabo>
    )
}

const LadoALadoDeCaboARabo = styled.div`
        flex-direction: row;
        justify-content: space-around;
        p{
            font-family: "Raleway";
            font-size: 16px;
        };
`;

const Altera = styled.div`
        p{
            color: ${props => props.entsai};
        }
`;

const Data = styled.div`
    p{
        color: "#C6C6C6";
    }
`;
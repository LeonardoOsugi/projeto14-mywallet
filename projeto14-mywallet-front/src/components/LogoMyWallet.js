import styled from "styled-components";
import myWallet from "../assets/img/MyWallet.svg";


export default function LogoMyWallet(){
    return(
        <Logo>
            <img src={myWallet} alt="Logo"/>
        </Logo>
    )
}

const Logo = styled.div`
        img{
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 147px;
            height: 50px;
        }
`
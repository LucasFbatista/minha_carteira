import styled from 'styled-components';

export const Container = styled.div`

    grid-area: CT;
     //AI AQUI CONSEGUIMOS ACESSO AS CORES DOS NOSSOS TEMAS CRIADO EM THEMES 
    //DARK E LIGHT PELA SOBRE ESCRITA EM STYLED.D INTERFACE, VIA PROPS ACESSAMOS.
    background-color: ${props => props.theme.colors.primary};
    color:${props => props.theme.colors.white};
    padding: 25px;

    //DIFINIÇÃO DE HEADER FIXO 
    height: calc(100vh - 70px);
    overflow-y:scroll;

    //CSS SCROLL BAR
    ::-webkit-scrollbar{
        width:20px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        border-radius:10px;
    }
    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.tertiary};
    }

`;
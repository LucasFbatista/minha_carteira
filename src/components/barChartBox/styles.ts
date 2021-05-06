import styled, { keyframes} from 'styled-components';

interface ILegendProps {
    color: string;
}


const animate = keyframes`

    0%{
        transform: translateX(100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;

    }
`;

export const Container = styled.div` 

    width:45%;
    min-height:260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius:7px;

    display:flex;

    @media(max-width: 1024px){

        display: flex;
        flex-direction: column;
        width: 100%;
        height: 450px;
    }

    animation: ${animate} .5s;

`;

export const SideLeft = styled.aside`
    
    flex:1;
    padding:30px 20px;

    > h2 {
        padding-left:18px;
        margin-bottom:50px;
    }

`;
export const SideRight = styled.main`

    flex:1;
    justify-content:center;
    display:flex;
    padding-top: 35px;

`;

export const LegendContainer = styled.ul`

    list-style: none;
    height: 175px;
    overflow-y:scroll;


    //CSS SCROLL BAR
    ::-webkit-scrollbar{
        width:10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        border-radius:10px;
    }
    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.tertiary};
    }
    

    @media(max-width: 1024px){

        display: flex;
        width: 100%;
        height: auto;
    }

`;


export const Legend = styled.li<ILegendProps>`


    display: flex;
    align-items: center;
    margin-bottom:30px;
    padding-left:18px;

    > div {
        background-color: ${props => props.color};
        width:40px;
        height:40px;
        border-radius:5px;
        font-weight:bold;
        font-size:13px;
        line-height:40px;
        text-align:center;
    }

    > span{
        margin-left: 5px;
    }
    

`;
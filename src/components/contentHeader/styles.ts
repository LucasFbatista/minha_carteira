import styled from 'styled-components';


//AQUI ESTAMOS CRIANDO UMA INTERFACE PARA RECEBER 
//UMA PROPRIEDADE LINE COLOR 
interface ITitleContainerProps {
    lineColor: string;
}


export const Container = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    margin-bottom: 25px;



    @media(max-width: 350px){
      flex-direction: column;
    }
`;


//ASSIM CONSEGUIMOS USAR A PROPS LINECOLOR QUE FOI PASSADA PARA O COMPONENT
export const TitleContainer = styled.div<ITitleContainerProps>`

    //USANDO A SETA INFORMAMOS QUE QUEREMOS SOMENTO
    //O H1 QUE ESTA DENTRO DO NOSSO CONTAINER
    > h1 {
        color: ${props => props.theme.colors.white};
        &::after {
            content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid ${ props => props.lineColor};
        }
    }

    @media(max-width: 420px){
        > h1 {
            font-size:22px;
            color: ${props => props.theme.colors.white};
            &::after {
                content: '';
                display: block;
                width: 55px;
                border-bottom: 5px solid ${ props => props.lineColor};
            }
        }
    }

`; 
export const Controllers = styled.div`
    display:flex;


    @media(max-width: 350px){
      width:100%;
      justify-content: space-around;
      margin-top:20px;

    }
`;




import styled from 'styled-components'


interface IContainerProps {
    color: string;
}

export const Container = styled.div<IContainerProps>`

    width: 32%;
    height:150px;
    margin: 10px 0;
    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    padding: 10px 20px;
    overflow:hidden;
    position: relative;

    >img {
        height:110%;
        position: absolute;
        top: -10px;
        right: -30px;

        opacity: .3;
    }

    > span{
        font-size: 18px;
        font-weight:500px;
    }
    > small {

        font-size:12px;
        position: absolute;
        bottom:10px;
    }


    //WALLETBOX MEDIA
    @media(max-width:770px){

        > span {
            font-size:14px;
        }

        // O WORD-WRAP ELE QUEBRA A LINHA PARA ALINHA DE BAIXO
        > h1 {
            word-wrap: break-word;
            font-size: 22px;

            > strong {
                //ESTAMOS FAZENDO ISSO PARA O CIFRAO OCUPAR UM LINHA INTEIRA
                //CASO NAO COUBER EM UMA LINHA O CONTEUDO POR INTEIRO.
                display: inline-block;
                width:100%;
                font-size:18px;
            }

            > strong::after {
                display: inline-block;
                content: '';
                width: 3px;
            }
        }

    }


    @media(max-width:420px){

        width: 100%;

        > h1 {

            display: flex;
        
            strong {
                position:initial;
                width: auto;
                font-size: 22px;
                margin-right: 5px;
            }
        }
    }
`;


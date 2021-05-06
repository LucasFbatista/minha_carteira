import styled from 'styled-components';

export const Grid = styled.div`

    display: grid;
    grid-template-columns:250px auto;
    grid-template-rows:70px auto;

    grid-template-areas: 
    'AS MH'
    'AS CT';

    height: 100vh;

    //APARTI DESSA RESOLUCAO SERA ACOMPANHADO POR ZOOM
    min-width: 315px;

    //AQUI NO NOSSO LAYOUT IREMOS CRIAR UM SISTEMA DE GRID RESPONSIVO
    //IREMO URILIZAR GRID PARA A QUEBRA DE PAGINAS
    @media(max-width: 600px){
        grid-template-columns:100%;
        grid-template-rows:70px auto;

        grid-template-areas: 
        'MH'
        'CT';

    }
    

`;
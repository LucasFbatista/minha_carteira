import styled, { keyframes } from 'styled-components';



interface ILegendProps {
  color: string;
}

const animate = keyframes`

    0%{
        transform: translateX(-100px);
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
  
  width:100%;
  /* display:flex; */
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};
  border-radius: 7px;

  margin: 10px 0;
  padding: 0px 20px;

  animation: ${animate} .5s;

`;

export const ChartContainer = styled.div`
  flex:1;
  height:380px;

`;

export const Header = styled.header`
  margin-top:20px;
  display:flex;
  width:100%;
  justify-content: space-between;

  > h2{
    margin-bottom: 20px;
    padding-left:18px;
  }

  @media(max-width: 1024px){
    flex-direction: column;
  }
`;

export const LegendContainer = styled.ul`
  list-style:none;
  display:flex;
  padding-right:18px;
`;

export const Legend = styled.li<ILegendProps>`

  display: flex;
  align-items: center;
  margin-bottom:7px;

  > div {
      background-color: ${props => props.color};
      width:40px;
      height:40px;
      margin-left:18px;
      border-radius:7px;
      font-weight:bold;
      font-size:13.5px;
      line-height:40px;
      text-align:center;
  }

  > span{
      margin-left: 5px;
  }

  @media(max-width: 1024px){

    div{
      width:30px;
      height:30px;
    }
  }
`;
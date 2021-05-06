import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';


//AQUI ESTAMOS CRIANDO UMA INTERFACE ONDE DIZEMOS QUE ELA IRA RECEBER TODAS
//AS PROPRIEDADES DE UM BUTTON  HTML. POR ISSO NAO DEFINIMOS OS TIPOS NA INTERFACE.
type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

//USANDO O REST EU FALO PRA MEU COMPONENT QUE QUERO PEGAR TUDO O QUE VIER DE ATRIBUTOS BUTTON
const Button: React.FC<IButtonProps> = ({ children, ...rest }) => (
    <Container { ...rest }>
        {children}
    </Container>
)

export default Button;
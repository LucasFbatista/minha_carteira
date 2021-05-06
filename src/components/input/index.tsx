import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

//AQUI ESTAMOS CRIANDO UMA INTERFACE ONDE DIZEMOS QUE ELA IRA RECEBER TODAS
//AS PROPRIEDADES DE UM INPUT  HTML. POR ISSO NAO DEFINIMOS OS TIPOS NA INTERFACE.
type IInputProps = InputHTMLAttributes<HTMLInputElement>;

//USANDO O REST EU FALO PRA MEU COMPONENT QUE QUERO PEGAR TUDO O QUE VIER DE ATRIBUTOS INPUTS
const Input: React.FC<IInputProps> = ({ ...rest }) => (
    
    <Container { ...rest } />
)

export default Input;
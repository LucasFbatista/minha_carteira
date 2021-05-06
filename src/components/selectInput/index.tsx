import React from 'react';

import { Container } from './styles';

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
    //ESSE ONCHANGE IRA CAPTURAR OS EVENTOS DO SELECT MES E ANO
    inputSelectChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
    //Quando usamos o ponto de ? na frente do defaultvalue queremos dizer que ele é um valor opcional
    defaultValue?: string | number;
}

const SelectInput: React.FC<ISelectInputProps> = ({ options, inputSelectChange, defaultValue }) => (
    <Container>
        <select onChange={inputSelectChange} defaultValue={defaultValue}>
            {
                options.map(option => (
                    <option value={option.value} key={option.value}>{option.label}</option>
                ))
            }
        </select>
    </Container>
)

export default SelectInput;
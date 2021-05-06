import React from 'react';

import { Container, ToggleLabel, ToogleSelector } from './style';


interface IToggleProps {
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({ labelLeft, labelRight, checked, onChange}) => (
    <Container>
        <ToggleLabel>{labelLeft}</ToggleLabel>
            <ToogleSelector
                 checked={checked}
                 uncheckedIcon={false}
                 checkedIcon={false}
                 onChange={onChange}
            />
        <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>
)

export default Toggle;
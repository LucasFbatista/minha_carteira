import styled from 'styled-components';

//AQUI IMPORTAMOS O TOOGLE PARA CONFIGURAR DE ACORDO COM
// OS NOSSO ESTILOS
import ToggleSwitch, { ReactSwitchProps } from 'react-switch'

export const Container = styled.div`
    display:flex;
    align-items:center;
`;

export const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.white};
    margin: 0 7px;
`;

export const ToogleSelector = styled(ToggleSwitch).attrs<ReactSwitchProps>(
    ({theme}) => ({
        onColor: theme.colors.info,
        offColor: theme.colors.warning
    }))<ReactSwitchProps>``;
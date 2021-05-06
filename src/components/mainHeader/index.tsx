import React, { useMemo, useState } from 'react';

//LIST EMOJIS ARRAY
import emojis from '../../utils/emoji'

//STYLES
import { Container, Profile, Welcome, UserName } from './styles';

//HOOCK
import { useTheme } from '../../hooks/theme';

//COMPONENTS IMPORTS
import Toggle from '../toggle'


const MainHeader: React.FC = () => {

    const { toggleTheme, theme } = useTheme();

    const [ darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);


    const handleChangeTheme = () => {

        //AQUI ESTAMOS VERIFICANDO SE O DARKTHEME FOR VERDADEIRO INVERTEMOS ELE PARA FALSO
        //CASO SEJA FALSO MUDAMOS PARA VERDADEIRO.
        setDarkTheme(!darkTheme);
        toggleTheme();

    }

    //AQUI IREMOS USAR O useMemo PARA DECORAR NOSSOS VALORES DE EMOJI
    //ASSIM FAZEMOS UM SORTEIO E TODA NOVA ATUALIZACAO ALTERAMOS O EMOJI
    const emoji = useMemo(()=> {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice]
    },[]);

    return(
        <Container>
            <Toggle
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Lucas Ferreira</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;
import React, { useState } from 'react';

import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp, MdClose, MdMenu} from 'react-icons/md';
import logoImg from '../../assets/logo.svg'

import { Container, Header, LogImg, Title, MenuContainer, MenuItemLink, MenuItemButton, ToggleMenu, ThemeToggleFooter} from './styles';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme'

//COMPONENTS IMPORTS
import Toggle from '../toggle';

const Aside: React.FC = () => {

    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [ darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
    const [ toggleMenuIsOpened, setToggleMenuIsOpened ] = useState(false);
    
    

    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    return(
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                {/* Botao Toggle Menu */}
                <ToggleMenu onClick={handleToggleMenu}>
                    { toggleMenuIsOpened ? <MdClose/> : <MdMenu/> }
                </ToggleMenu>
                <LogImg src={logoImg} alt="Logo Mina Carteira" />
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward/>
                    Saidas
                </MenuItemLink>
                <MenuItemButton onClick={signOut}>
                    <MdExitToApp/>
                    Sair
                </MenuItemButton>
            </MenuContainer>
            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                <Toggle
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
        </Container>
    );
}

export default Aside;
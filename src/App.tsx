import React from 'react';

//AQUI USAMOS O THEME PROVIDER PARA PODE ALTERAR ENTRE OS MEUS TEMAS EM THEMES
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/globalStyle';


import { useTheme } from './hooks/theme';


import Routes from './routes';


const App: React.FC = () => {

    const { theme } = useTheme();

    return(
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Routes/>
        </ThemeProvider>
    );
}

export default App;


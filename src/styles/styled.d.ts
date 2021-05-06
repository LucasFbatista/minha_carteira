import 'styled-components';

//AQUI EESTAMOS CRIANDO UMA TIPAGEM COM TYPESCRIPT SOBRESCREVENDO
//O styled-components ASSIM CONSEGUIMOS CRIAR UMA INTERFACE
//ONDE SERA ACESSADA EM QUALQUER LUGAR DA NOSSA APLICAÇÃO.

declare module 'styled-components' {
    export interface DefaultTheme {

        title: string,

        colors: {
    
            primary: string,
            secondary: string,
            tertiary: string,
    
            white: string,
            black: string,
            gray: string,
    
            success: string,
            info: string,
            warning: string,
        },
    }
}
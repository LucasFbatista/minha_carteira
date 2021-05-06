
//FORMATACAO MOEDA PARA APRESENTACAO NO CARD
const formatCurrency = ( current: number): string => {

    return current.toLocaleString(
        'pt-br', 
        {
            style:'currency',
            currency:'BRL'   
        });
};

export default formatCurrency
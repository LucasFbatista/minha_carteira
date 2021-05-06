const formatDate = (date: string): string => {

    const dateFormatted = new Date(date);

    const day = dateFormatted.getDate() > 9 ? dateFormatted.getDate() : `0${dateFormatted.getDate()}`;
    //ACRESCENTAMOS + 1 PORQUE JANEIRO COMEÇA NA POSIÇÃO ZERO
    //SERIA PARA CORRIGIR O MES DE FORMA CERTA
    const month = dateFormatted.getMonth() + 1 > 9 ? dateFormatted.getMonth() + 1 : `0${dateFormatted.getMonth() + 1}`;
    const year = dateFormatted.getFullYear();
    return `${day}/${month}/${year}`;

} 

export default formatDate;
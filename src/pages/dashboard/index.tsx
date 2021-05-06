import React, { useMemo, useState, useEffect } from 'react';

import ContentHeader from '../../components/contentHeader';
import SelectInput from '../../components/selectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/messageBox';
import PieChartBox from '../../components/pieChartBox';
import HistoryBox from '../../components/historyBox';
import BarChartBox from '../../components/barChartBox';



import gains from '../../repository/gains';
import expenses from '../../repository/expenses';
import listOfMonths from '../../utils/months';


import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import embarrasedImg from '../../assets/grinning.svg';
import OopsImg from '../../assets/Oops.svg';

import { Container, Content } from './styles'

const DashBoard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());


    //MESES DO ANO
    const months = useMemo(() => {

        return listOfMonths.map((month, index) => {
            return {

                value: index + 1,
                label: month
            }
        })

    }, [])


    //LIST COM OS ANOS ONDE POSSUE DESPESAS
    const years = useMemo(() => {

        let uniqueYears: number[] = [];


        // USANDO O OPERADOR SPRED EU CRIO UMA NOVA LISTA JUNTANDO O CONTEUDO 
        //DOS 2 ARQUIVOS
        [...expenses, ...gains].forEach(item => {

            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }

        });

        return uniqueYears.map(year => {

            return {
                value: year,
                label: year
            }
        })

    }, []);


    //AQUI ESTAMOS FILTRANDO OS VALORES DO CARD DE ACORDO COM O MES E ANO SELECIONADO
    const totalExpenses = useMemo(() => {

        let total: number = 0;

        expenses.forEach(item => {

            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    //AQUI ESTAMOS FAZENDO UM INCREMENT DO VALOR DE ITEM.AMOUNT DENTRO DO TOTAL
                    total += Number(item.amount);
                }
                catch {
                    throw new Error('Invalid Amount! Amount must be number.')
                }
            }
        });

        return total;
    }, [monthSelected, yearSelected]);


    //AQUI ESTAMOS FILTRANDO OS VALORES DO CARD DE ACORDO COM O MES E ANO SELECIONADO
    const totalGains = useMemo(() => {

        let total: number = 0;

        gains.forEach(item => {

            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    //AQUI ESTAMOS FAZENDO UM INCREMENT DO VALOR DE ITEM.AMOUNT DENTRO DO TOTAL
                    total += Number(item.amount);
                }
                catch {
                    throw new Error('Invalid Amount! Amount must be number.')
                }
            }
        });

        return total;
    }, [monthSelected, yearSelected]);


    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    }, [totalGains, totalExpenses]);


    const message = useMemo(() => {
        if (totalBalance < 0) {
            return {

                title:"Que triste!",
                description:"Neste mês, você gastou mais do que deveria.",
                footerText:"Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
                icon: sadImg
            }
        }else if(totalBalance === 0 && totalExpenses === 0){
            return {

                title:"Oops!",
                description:"Neste mês, não há registros de entradas ou saídas.",
                footerText:"Parece que você não fez nenhum registro no mês e ano selecionado.",
                icon: OopsImg
            
            }
        }
        else if(totalBalance === 0){
            return {
                title:"Ufaa!",
                description:"Neste mês, você gastou exatamente o que ganhou.",
                footerText:"Tenha cuidado. No próximo tente poupar o seu dinheiro.",
                icon: embarrasedImg
            }
        }
        else{
            return {

                title:"Muito bem!",
                description:"Sua carteira está positiva.",
                footerText:"Continue assim. Considere investir o seu saldo",
                icon: happyImg
            
            }
        }
    }, [totalBalance, totalGains, totalExpenses]);


    const relactionExpensesVersusGains = useMemo(() => {

        const total = totalGains + totalExpenses;

        const percentGains = Number(((totalGains / total) * 100).toFixed(1));

        const percentExpense = Number(((totalExpenses / total) * 100).toFixed(1));

        const data = [

            {
                name:"Entradas",
                value: totalGains,
                percent: percentGains ? percentGains : 0,
                color:"#F7931B"
            },
            {
                name:"Saídas",
                value: totalExpenses,
                percent: percentExpense ? percentExpense : 0,
                color:"#E44C4E"
            }
        ];

        return data;

    },[totalGains, totalExpenses])


    const historyData = useMemo(() => {

        //QUANDO USAMOS _ DENTRO DO MAP IGNORAMOS O VALUE DENTRO DO MAP E PEGAMOS SOMENTE O SEGUNDO
        //VALOR QUE NO NOSSO CASO E O INDEX
        return listOfMonths.map(( _, month) => {


            //AQUI ESTAMOS FAZENDO UM MAP PERCORRENDO MES A MES E ACRESCENTANDO DE ACORDO
            //O MES SELECIONADO NO INPUT

            let amountEntry = 0;
            gains.forEach(gain => {

                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if(gainMonth === month && gainYear === yearSelected){

                    try {
                        //AQUI ESTAMOS FAZENDO UM INCREMENT DO VALOR DE ITEM.AMOUNT DENTRO DO amountEntry
                        amountEntry += Number(gain.amount)
                    }
                    catch {
                        throw new Error('Invalid Amount! Amount must be number.')
                    }
                }
            })


            let amountOutput = 0;
            expenses.forEach(expense => {

                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if(expenseMonth === month && expenseYear === yearSelected){

                    try {
                        //AQUI ESTAMOS FAZENDO UM INCREMENT DO VALOR DE ITEM.AMOUNT DENTRO DO amountEntry
                        amountOutput += Number(expense.amount)
                    }
                    catch {
                        throw new Error('Invalid Amount! Amount must be number.')
                    }
                }
            })

            return{

                monthNumber: month,
                month: listOfMonths[month].substr(0,3),
                amountEntry,
                amountOutput
            }

            //AQUI IREMOS FAZER UM FILTRO PARA RETORNA OS REGISTROS SO ATE A MES QUE ESTAMOS
            //CASO SEJA UM ANO ANTIGO ELE IRA TRAZER TODOS OS MESES
        }).filter(item => {

            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();

            return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear);

        });
    },[yearSelected]);

    const relationExpensevesRecurrentVersusEventual = useMemo(() => {

        let amountRecurrent = 0;
        let amountEvent = 0;

        expenses.filter((expense) => {

            const date = new Date(expense.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        }).forEach((expense) => {

            if(expense.frequency === 'recorrente'){
                return amountRecurrent += Number(expense.amount)
            }

            if(expense.frequency === 'eventual'){
                return amountEvent += Number(expense.amount)
            }
        });

        const total = amountRecurrent + amountEvent;

        const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const percentEventual = Number(((amountEvent / total) * 100).toFixed(1));

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color:'#F7931B'
            },
            {
                name: 'Eventuais',
                amount: amountEvent,
                percent: percentEventual ? percentEventual : 0,
                color:'#E44C4E',
            }
        ];

    },[yearSelected, monthSelected]);



    const relationGainsRecurrentVersusEventual = useMemo(() => {

        let amountRecurrent = 0;
        let amountEvent = 0;

        gains.filter((gain) => {

            const date = new Date(gain.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        }).forEach((gain) => {

            if(gain.frequency === 'recorrente'){
                return amountRecurrent += Number(gain.amount)
            }

            if(gain.frequency === 'eventual'){
                return amountEvent += Number(gain.amount)
            }
        });

        const total = amountRecurrent + amountEvent;

        const recurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const eventualPercent = Number(((amountEvent / total) * 100).toFixed(1));


        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: recurrentPercent ? recurrentPercent : 0,
                color:'#F7931B'
            },
            {
                name: 'Eventuais',
                amount: amountEvent,
                percent: eventualPercent ? eventualPercent : 0,
                color:'#E44C4E',
            }
        ];

    },[yearSelected, monthSelected]);

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#f7931b">
                <SelectInput
                    options={months}
                    //O SINAL DE + EM FRENTE AO e.target.value CONVERT O VALOR DE TEXTO EM NUMERO
                    inputSelectChange={(e) => setMonthSelected(+e.target.value)}
                    defaultValue={monthSelected}
                />
                <SelectInput
                    options={years}
                    //O SINAL DE + EM FRENTE AO e.target.value CONVERT O VALOR DE TEXTO EM NUMERO
                    inputSelectChange={(e) => setYearSelected(+e.target.value)}
                    defaultValue={yearSelected}
                />
            </ContentHeader>

            <Content>
                <WalletBox
                    title="Saldo"
                    color="#4E41F0"
                    amount={totalBalance}
                    footerLabel="Atualizado com base nas entradas e saidas"
                    icon="dollar"
                />
                <WalletBox
                    title="Entradas"
                    color="#F7931B"
                    amount={totalGains}
                    footerLabel="Atualizado com base nas entradas e saidas"
                    icon="arrowUp"
                />
                <WalletBox
                    title="Saídas"
                    color="#E44C4E"
                    amount={totalExpenses}
                    footerLabel="Atualizado com base nas entradas e saidas"
                    icon="arrowDown"
                />
                <MessageBox
                  title={message.title}
                  description={message.description}
                  footerText={message.footerText}
                  icon={message.icon}
                />
                <PieChartBox data={relactionExpensesVersusGains}/>
                <HistoryBox data={historyData} lineColorAmountEntry="#F7931B" lineColorAmountOutput="#E44C4E"/>
                <BarChartBox data={relationExpensevesRecurrentVersusEventual} title="Saidas"/>
                <BarChartBox data={relationGainsRecurrentVersusEventual} title="Entradas"/>
            </Content>
        </Container>
    );
}

export default DashBoard;
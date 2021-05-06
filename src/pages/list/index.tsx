import React, { useMemo, useState, useEffect } from 'react';

import ContentHeader from '../../components/contentHeader';
import SelectInput from '../../components/selectInput';
import HistoryFinanceCard from '../../components/historyFinanceCard';

import gains from '../../repository/gains';
import expense from '../../repository/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';


import { Container, Content, Filters } from './styles';

//AQUI ESTAMOS ACESSO A NOSSA URL COM UMA VARIAVEL MATCH DO BROWSERROUTER
//E ACESSO NOSSA URL PARAMS
interface IRouteParams {
  match: {
    params: {
      type: string;
    }
  }
}

//AQUI ESTAMOS CRIANDO UM ID QUE BAO EXISTE NOS ARQUIVOS gains e expense PARA CONSEGUIR
//UTILIZAR UM MAP NO DATALIST
interface IData {

  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string
}

const List: React.FC<IRouteParams> = ({ match }) => {

  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const [frequencySelected, setfrequencySelected] = useState(['recorrente', 'eventual']);


  const movimentType = match.params.type;

  const description = useMemo(() => {
    return movimentType === 'entry-balance' ? {
      title: 'Entradas',
      lineColor: '#4E42F0'
    } : {
      title: 'Saidas',
      lineColor: '#E44C4E'
    };

  }, [movimentType]);

  const listData = useMemo(() => {

    return movimentType === 'entry-balance' ? gains : expense;

  }, []);


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

    listData.forEach(item => {

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

  }, [listData])

  const generateIdRandom = (length: number) => {

    let chars: string[] = '0123456789'.split('');

    if (!length) {
      length = Math.floor(Math.random() * chars.length);
    }

    let str: string = '';
    for (var i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }

  const handleFrequencyClick = (frequency: string) => {

    const alreadySelected = frequencySelected.findIndex(item => item === frequency);

    if (alreadySelected >= 0) {

      //AQUI ELE IRA RETORNA TODOS OS FILTROS MENOS O QUE ESTA EM FREQUENCY
      const filtered = frequencySelected.filter(item => item != frequency)
      setfrequencySelected(filtered);

    } else {
      setfrequencySelected((prev) => [...prev, frequency])
    }

  }

  useEffect(() => {

    const FilteredDate = listData.filter(item => {

      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return month === monthSelected && year === yearSelected && frequencySelected.includes(item.frequency);

    });

    const formattedData = FilteredDate.map(item => {

      return {

        id: String(generateIdRandom(9)),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E42F0' : '#E44C4E'
      }

    });

    setData(formattedData)
  }, [listData, monthSelected, yearSelected, data.length, frequencySelected]);

  return (

    <Container>
      <ContentHeader title={description.title} lineColor={description.lineColor}>
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
      <Filters>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent ${frequencySelected.includes('recorrente') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`tag-filter tag-filter-eventual ${frequencySelected.includes('eventual') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventuais
        </button>
      </Filters>
      <Content>
        {
          data.map(item => (

            <HistoryFinanceCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.dateFormatted}
              amount={item.amountFormatted}
            />
          ))
        }
      </Content>
    </Container>
  );
}

export default List;
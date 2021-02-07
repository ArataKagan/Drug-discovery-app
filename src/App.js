import React, {useState, useEffect} from 'react';
import {Styles} from './Style.js';
import './App.css';
import Table from './components/Table';
import axios from 'axios';


function App() {
  const [drug, setDrug] = useState('');
  const url = 'https://api.fda.gov/drug/drugsfda.json?limit=5';

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    axios.get(url)
    .then((response) => {
      const allData = response.data.results;
      setDrug(allData);
      console.log(drug);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  const data = React.useMemo(() =>
  [
    {
        name: 'Kim Parrish',
        address: '4420 Valley Street, Garnerville, NY 10923',
        date: '07/11/2020',
        order: '87349585892118',
    },
    {
        name: 'Michele Castillo',
        address: '637 Kyle Street, Fullerton, NE 68638',
        date: '07/11/2020',
        order: '58418278790810',
    },
    {
        name: 'Eric Ferris',
        address: '906 Hart Country Lane, Toccoa, GA 30577',
        date: '07/10/2020',
        order: '81534454080477',
    },
    {
        name: 'Gloria Noble',
        address: '2403 Edgewood Avenue, Fresno, CA 93721',
        date: '07/09/2020',
        order: '20452221703743',
    },
    {
        name: 'Darren Daniels',
        address: '882 Hide A Way Road, Anaktuvuk Pass, AK 99721',
        date: '07/07/2020',
        order: '22906126785176',
    },
    {
        name: 'Ted McDonald',
        address: '796 Bryan Avenue, Minneapolis, MN 55406',
        date: '07/07/2020',
        order: '87574505851064',
    },
 ],
 []
); 



const columns = React.useMemo(
  () => [
     {
        Header: 'User Info',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
        {
            Header: 'Address',
            accessor: 'address',
        },
        ],
     },
    {
      Header: 'Order Info',
        columns: [
        {
          Header: 'Date',
          accessor: 'date',
        },
       {
          Header: 'Order #',
          accessor: 'order',
       },
      ],
    },
  ],
  []
 );


  return (
    <div className="App">
      <header className="App-header">
         <p>Drug discovery app</p>
         <Styles>
          <Table columns={columns} data={data} />
         </Styles>
      </header>
    </div>
  );
}

export default App;

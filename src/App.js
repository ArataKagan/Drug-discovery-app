import React, {useState, useEffect} from 'react';
import {Styles} from './Style.js';
import './App.css';
import Table from './components/Table';
import axios from 'axios';


function App() {
  const [drug, setDrug] = useState([]);
  const url = 'https://api.fda.gov/drug/drugsfda.json?limit=10';

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    axios.get(url)
    .then((response) => {
      const allData = response.data.results;
      console.log(allData);
      setDrug(allData);
      console.log(drug);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

 
const columns = React.useMemo(
  () => [
     {
        Header: 'FDA Info',
        columns: [
          {
            Header: 'Brand',
            accessor: 'products[0].brand_name',
          },
        {
            Header: 'Marketing Status',
            accessor: 'products[0].marketing_status',
        },
        {
          Header: 'Dosage Form',
          accessor: 'products[0].dosage_form',
        },
        {
          Header: 'Route',
          accessor: 'products[0].route',
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
          <Table columns={columns} data={drug} />
         </Styles>
      </header>
    </div>
  );
}

export default App;

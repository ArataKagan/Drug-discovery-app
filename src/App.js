import React, {useState, useEffect} from 'react';
import {Styles} from './Style.js';
import './App.css';
import Table from './components/Table';
import CssBaseline from '@material-ui/core/CssBaseline'
import axios from 'axios';


function App() {
  const [drug, setDrug] = useState([]);
  const url = 'https://api.fda.gov/drug/drugsfda.json?limit=50';

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
        Header: 'OpenFDA Info',
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
    <div>
     {/* <div className="App"> */}
       <header className="App-header"> 
         <h1>Medicine discovery app</h1>
          <Styles> 
          <CssBaseline />
          <Table columns={columns} data={drug} />
          </Styles> 
       </header> 
     {/* </div> */}
    </div>
  );
}

export default App;

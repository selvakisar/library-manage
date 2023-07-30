// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Dashboard from './page/Dashboard';

function App() {
  const BookData=[

    {id: 1,
    name:"Nation First",
  Author:"V.P.Malik",
  Language: "English",
Pages:"240",
published:"2019"
},
{id: 2,
  name:"A Nation of Idiots",
Author:"Daksh tyagi",
Language: "English",
Pages:"300",
published:"2021"
},
  ]
  const [data,setData]=useState(BookData)
  return (
    <div className="App">

      <Dashboard
      data={data}
      setData={setData}
      />
    </div>
  );
}

export default App;






































      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
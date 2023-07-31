/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Booklist from "./components/Booklist";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import User from "./page/User";
import AddBooks from "./components/AddBook";
function App() {
  const BookData = [
    {
      id: 1,
      name: "Nation First",
      Author: "V.P.Malik",
      Language: "English",
      Pages: "240",
      Published: "2019",
    },
    {
      id: 2,
      name: " A Nation of Idiots",
      Author: "Daksh tyagi",
      Language: "English",
      Pages: "300",
      published: "2021",
    },
  ];

  const [data, setData] = useState(BookData);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />

          <Route path="/users" element={<User/>}
          />
          <Route
          />
        <Route
          path="/book/all"
          element={<Booklist BookData={data} setData={setData} />}
        />

<Route
          path="/addbook"
          element={<AddBooks/>}
        />
      </Routes>
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

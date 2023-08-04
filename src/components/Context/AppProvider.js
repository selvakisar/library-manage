import { createContext, useState, useContext } from "react";
const BookCtx = createContext();

function AppProvider({ children }) {
  const datastore = [
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
      Published: "2021",
    },
  ];

  const [BookData, setData] = useState(datastore);

  return (
    <BookCtx.Provider value={{ BookData, setData }}>
      {children}
    </BookCtx.Provider>
  );
}
export const Appstate = () => {
  return useContext(BookCtx);
};
export default AppProvider;

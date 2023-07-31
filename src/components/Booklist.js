import React from "react";
import Base from "../page/Base";
import BookCard from "./BookCard";

function Booklist({ BookData,setData }) {
  return (
    <Base>
    {BookData.map((boo,idx)=>(
        <BookCard
        book={boo}
        BookData={BookData}
        setData={setData}
        key={boo.id}
        />
      ))}
    
    
    
    </Base>
  );
}

export default Booklist;


// {/* <h1> ss</h1>
// {BookData.map((boo, idx) => (
//   <BookCard
//     book={boo}
//     BookData={BookData}
//     setData={setData}
//     key={boo.id}
//   />
// ))} */}
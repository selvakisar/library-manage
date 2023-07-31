import React from "react";

export default function BookCard({ book ,BookData,setData}) {

const delBook = (id)=>{
  const newBooklist = BookData.filter((boo,idx)=>boo.id!==id)
setData (newBooklist);
}

  return (
    <div>
      <div className="card card-compact w-96 m-2 p-1 bg-accent
      shadow-xl">
        <div className="card-body">
          <h1 className="card-title ">{book.name}</h1>
          <p>Author:{book.Author}</p>
          <p>Language:{book.Language} </p>
          <p> Pages:{book.Pages} </p>
          <p>Published:{book.Published} </p>

          <div className="card-actions justify-end">
            <button onClick= {()=>delBook(book.id)} className="btn btn-danger m-2">Delete</button>
            <button className="btn btn-primary m-2">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
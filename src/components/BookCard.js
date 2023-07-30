export default function BookCard({ data, setData }) {
  return (
    <div>
      {data.map((bookd, index) => (
        <div key={index}>
          <div className="card card-compact w-96 bg-dark shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Name:{bookd.name}</h2>
              <h4>Author:{bookd.Author}</h4>
              <h5>Published:{bookd.published}</h5>
              <h5>Lan:{bookd.Language}</h5>
              <h6>Pages:{bookd.Pages}</h6>
              <div className="card-actions justify-end">
                <button className="btn btn-danger m-2">Delete</button>
                <button className="btn btn-primary m-2">Edit</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// export default function BookCard({book,bookData,setData}) {
//     // const navigate =useNavigate();
//     const Dbook=(id)=>{
//       const  NbookData=bookData.filter((boo)=>boo.id !==id);
//       setData(NbookData)
//     }

//     return(
// {/* <div className="bookcard">/</div>; */}
//     )
// };

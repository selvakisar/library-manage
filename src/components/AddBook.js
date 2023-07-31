import { useState } from "react";
import Base from "../page/Base";
import { useNavigate } from "react-router-dom";


export default function AddBooks({BookData, setData}) {

    const navigate=useNavigate();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [Author, setAuthor] = useState("");
    const [Language, setLanguage] = useState("");
    const [Pages, setPages] = useState("");
    const [Published, setPublished] = useState("");
    //setId(value) => id

    function addnewBook(){
      const newBookObj = {
        id, 
        name, 
        Author, 
        Language, 
        Pages,
        Published
      }
      console.log(newBookObj)
      // add new data
    setData([...BookData,newBookObj]);
    setId("");
    setName("");
    setAuthor("");
    setPages("");
    setPublished("");
    setLanguage("");
    }
    return (
        <Base>
            <div className="p-5">Please Fill the form to add new Book</div>
            <div className="form-control">
                <label className="input-group input-group-md  m-2">
                    <span>ID     </span>
                    <input
                        type="number"
                        placeholder="Enter Book ID"
                        className="input input-bordered input-md w-96" 
                        value={id}
                        onChange={(e)=>setId(e.target.value)}
                        />
                </label>

                <label className="input-group input-group-md m-2">
                    <span>Name</span>
                    <input 
                    type="text" 
                    placeholder="Enter Book Name" 
                    className="input input-bordered input-md w-96"
                    value ={name}
                    onChange={(e)=>setName(e.target.value)}
                     />
                </label>

                <label className="input-group input-group-md  m-2">
                    <span>Author</span>
                    <input 
                    type="text" 
                    placeholder="Enter Author Name" 
                    className="input input-bordered input-md w-96"
                    value={Author}
                    onChange={(e)=>setAuthor(e.target.value)}
                     />
                </label>

                <label className="input-group input-group-md  m-2">
                    <span>Language</span>
                    <input type="text"
                     placeholder="Enter Language " 
                     className="input input-bordered input-md w-96" 
                     value={Language}
                     onChange={(e)=>setLanguage(e.target.value)}
                     />
                </label>
                <label className="input-group input-group-md  m-2">
                    <span>Pages</span>
                    <input 
                    type="text" 
                    placeholder="Enter the pages count" 
                    className="input input-bordered input-md w-96" 
                    value ={Pages}
                    onChange={(e)=>setPages(e.target.value)}
                    />
                </label>
                <label className="input-group input-group-md m-2">
                    <span>Published</span>
                    <input
                     type="text"
                      placeholder="Enter Published Year "
                       className="input input-bordered input-md w-96" 
                       value={Published}
                       onChange={(e)=>setPublished(e.target.value)}
                       />
                </label>
               

                <button className="rounded-full bg-base-200 p-2 m-5"
                onClick={()=>navigate("/book/all")}
                >
                    Add Book
                </button>
            </div>
        </Base>
    )
}
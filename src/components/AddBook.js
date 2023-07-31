import { useState } from "react";
import Base from "../page/Base";


export default function AddBooks({BookData, setData}) {
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
            <div className="p-5">Please Fill the form to add new Teacher</div>
            <div className="form-control">
                <label className="input-group input-group-md  m-2">
                    <span>ID </span>
                    <input
                        type="number"
                        placeholder="Enter Teacher ID"
                        className="input input-bordered input-md w-96" 
                        value={id}
                        onChange={(e)=>setId(e.target.value)}
                        />
                </label>

                <label className="input-group input-group-md m-2">
                    <span>Name</span>
                    <input 
                    type="text" 
                    placeholder="Enter Teacher Name" 
                    className="input input-bordered input-md w-96"
                    value ={name}
                    onChange={(e)=>setName(e.target.value)}
                     />
                </label>

                <label className="input-group input-group-md  m-2">
                    <span>Education</span>
                    <input 
                    type="text" 
                    placeholder="Enter Teacher Education" 
                    className="input input-bordered input-md w-96"
                    value={Author}
                    onChange={(e)=>setAuthor(e.target.value)}
                     />
                </label>

                <label className="input-group input-group-md  m-2">
                    <span>Subject</span>
                    <input type="text"
                     placeholder="Enter Teacher Batch" 
                     className="input input-bordered input-md w-96" 
                     value={Language}
                     onChange={(e)=>setLanguage(e.target.value)}
                     />
                </label>
                <label className="input-group input-group-md  m-2">
                    <span>Email</span>
                    <input 
                    type="text" 
                    placeholder="Enter Teacher Email" 
                    className="input input-bordered input-md w-96" 
                    value ={Pages}
                    onChange={(e)=>setPages(e.target.value)}
                    />
                </label>
                <label className="input-group input-group-md m-2">
                    <span>Phone</span>
                    <input
                     type="text"
                      placeholder="Enter Teacher Phone"
                       className="input input-bordered input-md w-96" 
                       value={Published}
                       onChange={(e)=>setPublished(e.target.value)}
                       />
                </label>
               

                <button className="rounded-full bg-base-200 p-2 m-5"
                onClick={addnewBook}
                >
                    Add Book
                </button>
            </div>
        </Base>
    )
}
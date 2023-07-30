import React from "react";

export default function Sidebar() {
  return (
    
      <div className="sbody ">
        <div className="flex-col ">
          <ul>
            <li className="side-bar-styles p-7">
              <button className="btn btn-success w-40">Dashboard</button>
            </li>
            <li className="side-bar-styles p-7">
              <button className="btn btn-success w-40">Books List</button>
            </li>

            <li className="side-bar-styles p-7">
              <button className="btn btn-success w-40 ">Users</button>
            </li>

            <li className="side-bar-styles p-7">
              <button className="btn btn-success w-40 ">Add Books</button>
            </li>
            <li className="side-bar-styles p-7">
              <button className="btn btn-success w-40"></button>
            </li>
          </ul>
        </div>
      </div>
  );
}


// <div className="side-bar-styles p-7">
// <div>
//   <ul className="actions">
//     <li className="rounded-full p-9 hover:bg-accent ">
//         <button

//         >Dashboard</button>
//     </li>
//     <li className="rounded-full p-9 hover:bg-accent">
//         <button

//          >Profile</button>
//     </li>
//     <li className="rounded-full p-9 hover:bg-accent">
//         <button

//         >Student list</button>
//     </li>

//     <li className="rounded-full p- w-4 hover:bg-accent">
//         <button

//         >Teacher list</button>
//     </li>

//     <li className="rounded-full p-9 hover:bg-accent">
//         <button

//         >Interview notes</button>
//     </li>
//     </ul>
// </div>
// <div className="logout-btn rounded-full hover:bg-accent p-2" >
//         <button>logout</button>
// </div>
// </div>

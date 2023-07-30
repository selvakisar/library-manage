import {  useEffect, useState } from 'react'
import Base from './Base'
import BookCard from '../components/BookCard'

function Dashboard({data,setData}) {

function action(){
    setData(!data)
    console.log("updation happened")
}
useEffect(()=>{
    console.log("am mounted")
},[])
  return (
   
        <Base> 
        
     <BookCard
     data={data}
     setData={setData}/>
    
        </Base>


   
    
  )
}

export default Dashboard
import { useState } from 'react'
import { Button } from 'reactstrap'
import './App.css'
import {Card} from './fetch'

function AddToFav({data}){
console.log("data: ",data)
  return(
  data.map((item)=>{

    return(
      <h1 key={item.id} >{item.name}</h1>
    )
  })

  )
}

function App() {
  return (  
      <div className="card">
        <h1>Raw List</h1>
        <Card />
      </div>
  )
}

export {App, AddToFav}

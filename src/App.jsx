import { useState } from 'react'
import { Button } from 'reactstrap'
import './App.css'
import {Card} from './fetch'

function AddToFav({favname, favusername}){
return(
  <>
    <div className='container'>
    <div >
       <h4 > Name : {favname} + {favusername}</h4>
     </div>
     </div>
  </>
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

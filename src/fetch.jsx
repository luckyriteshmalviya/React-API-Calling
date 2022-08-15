import React ,{useState,useEffect} from 'react'
import { useSyncExternalStore } from 'react';
import { Button } from 'reactstrap';
import {AddToFav} from './App'
function Card() {
    const [user,setUser] = useState([]);
    const [favCard, setfavCard] = useState([]);

    const fetchData =()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            // console.log(data);
            setUser(data)
        })
    }

    useEffect(()=>{
        fetchData();
    },[])

    function favCards(index){

    user.filter((item,indexfilter)=>{
         if(indexfilter===index){
          console.log(item);

          document.write(item)
          // <AddToFav favname={item.name} favusername={item.username}  />
          // setfavCard(...favCard, item)
          // console.log(favCard)
         }
    })
    }

    return (
        <>{user.map((data,index) => (
                <>
                <div className='container'>
                <div >
                    <h4 > Name : {data.name +" " + data.username}</h4>
                  <p><b>Website : </b>{data.website}
                    <br />
                  <span><b>Phone :</b>{data.phone}</span>
                    <br />
                  <span> <b>Email : </b>{data.email}</span>
                    </p>
                </div>   
                <div>
                  <Button style={{ backgroundColor: "rgb(194 93 219)", margin: "10px" }} onClick={()=>{favCards(index)}} >Add to Fav</Button>
                  <br />
                </div>
                </div>
                </>
                ))}</>
    )
}

export {Card} 

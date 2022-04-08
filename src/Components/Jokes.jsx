import axios from 'axios';
import { useEffect,useState } from "react";

function Jokes(){
   const [jokes,setJokes]= useState([]);

   useEffect(()=>{
   
    axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10')
   
    .then(res =>{
       console.log(res.data);
       setJokes(res.data)
   })
   },[]);
   
return(
       <ul>
           {
           jokes.map(j=> <li key={j.id}>{j.setup}{j.delivery}</li>)
           }
      </ul>
    )
    }
       export default Jokes;
        
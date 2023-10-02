import React from 'react'
import axios from 'axios'

function FrontPage() {
   const data = axios
     .get(
       "https://api.spoonacular.com/recipes/random?apiKey=95313b2e972048dfbd95e1417bde05d0"
     )
     .then((e) => e);
   console.log("data",data);
  return (
    <div>FrontPage</div>
  )
}

export default FrontPage
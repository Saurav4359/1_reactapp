import { useState } from 'react'

import './App.css'

const Card=({title}) => {
  const [hasLiked,setHasLiked] = useState(false);
  return(
    <div className='card'>
      <h2>
        {title}
      </h2>
      <button onClick={()=> setHasLiked(true)}>
        {hasLiked?'❤️' : "🤍"}
          
      </button>
       
    </div>
  )
}
 const App=() =>{
 
   
  return(
    // react fragment <>
    <div className='card-container'>
      
    <Card title="The Lion King" />
    <Card title="Avatar"/>
    <Card title="Star Wars" />
    <Card title="Titanic" />
    <Card title="# Idiots"/>
    </div>
  )
 }

export default App
 
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  const [query, setQuery] = useState()

  useEffect(() => {
    getResults()
  })

  const getResults = async () => {
    const response = await axios
    .get(`https://api.chucknorris.io/jokes/search?query=${query}`)
    setJokes(response.data.result)
  }

   const handleSearch = (e) => {
    e.preventDefault()
    getResults();
   }
  return (
    <div className="App">
      <h1 className= "top">SELECT CATEGORY AND LAUGH</h1>
      <div className="Form">
      <form onSubmit={handleSearch}>
     <input type="button" className = "Inputs"
     onClick = {e => setQuery(e.target.value)}
        value = "science"
     />
     </form>
     <form onSubmit={handleSearch}>
     <input type="button" className = "Inputs"
        onClick = {e => setQuery(e.target.value)}
        value = "teeth"
     />
     </form>
     <form onSubmit={handleSearch}>
     <input type="button" className = "Inputs"
        onClick = {e => setQuery(e.target.value)}
        value = "food"
     />
     </form>
     <form onSubmit={handleSearch}>
     <input type="button" className = "Inputs"
        onClick = {e => setQuery(e.target.value)}
        value = "drink"
     />
     </form>
     <form onSubmit={handleSearch}>
     <input type="button" className = "Inputs"
        onClick = {e => setQuery(e.target.value)}
        value = "chief"
     />
     </form>
     <form onSubmit={handleSearch}>
     <input type="button" className = "Inputs"
        onClick = {e => setQuery(e.target.value)}
        value = "love"
     />
     </form>
     <form onSubmit={handleSearch}>
     <input type="button" className = "Inputs"
        onClick = {e => setQuery(e.target.value)}
        value = "stones"
     />
     </form>
     <form onSubmit={handleSearch}>
     <input type="button" className = "Inputs"
        onClick = {e => setQuery(e.target.value)}
        value = "onions"
     />
     </form>
     <form onSubmit={handleSearch}>
     <input type="button" className = "Inputs"
        onClick = {e => setQuery(e.target.value)}
        value = "hurricane"
     />
     </form>
     <form onSubmit={handleSearch}>
     <input type="button" className = "Inputs"
        onClick = {e => setQuery(e.target.value)}
        value = "sun"
     />
     </form>
     <form onSubmit={handleSearch}>
     <input type="button" className = "Inputs"
        onClick = {e => setQuery(e.target.value)}
        value = "skydiving"
     />
     </form>
     
     
     
      </div><br></br>
      <hr></hr>
     

     {jokes.map(joke => {
      return (
        <div className="Jokes">
          <p className="Joke">{joke.value}</p>
        </div>
      )
     })}
    </div>
    
  );
}


export default App;
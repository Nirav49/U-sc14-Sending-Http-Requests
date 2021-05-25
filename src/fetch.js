import React, { useState, useEffect, useCallback } from 'react'
import Listitems from './Listitems'
import Addfilm from './Addfilm'

const App = () => {
  const [films, setFilms] = useState([]);
  const [loads, setLoads] = useState(false);
  const [error, setError] = useState(null);

  const fetchsHandler = useCallback(async () => {
    setLoads(true);
    try {
      const responce = await fetch('https://react-http-67e33-default-rtdb.firebaseio.com/films.json')
      const data = await responce.json();
      if (!responce.ok) {
        throw new Error('something went wrong');
      }
      const loads = [];
      for (const keys in data) {
        loads.push({
          id: keys,
          title: data[keys].title,
          openingText: data[keys].openingText,
          releaseDate: data[keys].releaseDate

        })
      }
      setFilms(loads)
    } catch (error) {
      setError(error.message)
    }
    setLoads(false)
  }, [])

  async function addingfilmsHandler(films) {
    const responce = await fetch('https://react-http-67e33-default-rtdb.firebaseio.com/films.json', {
      method: 'POST',
      body: JSON.stringify(films),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await responce.json();
    console.log(data)
  }

  useEffect(() => {
    return fetchsHandler()
  }, [fetchsHandler])

  return (
    <React.Fragment>
      <section>
        <Addfilm onAddfilms={addingfilmsHandler} />
      </section>
      <section>
        <button onClick={fetchsHandler}
          style={{
            textAlign: 'center',
            marginLeft: '50%',
            padding: '10px',
            fontSize: 'medium',
            backgroundColor: 'purple',
            color: 'white',
            borderRadius: '5px',
            borderColor: 'red'
          }}>Fetch Data</button>
      </section>
      <section>
        {!loads && films.length != 0 && <Listitems dat={films} />}
        <section style={{
          boxSizing: 'border-box',
          height: '50%',
          width: '50%',
          backgroundColor: 'purple',
          color: 'white',
          textAlign: 'center',
          border: '5px solid red',
          marginLeft: '25%',
          marginTop: '5px',
          borderRadius: '10px'
        }}>
          {!loads && films.length === 0 && <center><h1 >currntly no data to show.</h1></center>}
          {loads && <center><p>your data is loading.</p></center>}</section>
        {!loads && error && <h1>{error}</h1>}
      </section>
    </React.Fragment>
  )
}

export default App;

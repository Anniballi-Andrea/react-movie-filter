import { useEffect, useState } from "react"
import MovieList from "./components/MovieList"



function App() {

  const film = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]
  const [category, setCategory] = useState('start')
  const [filtred, setFiltred] = useState(film)

  useEffect(() => {

    if (category === 'start') {
      setFiltred(film)

      console.log('start')

    } else {
      const filtredFilm = film.filter((el) => el.genre === category)
      setFiltred(filtredFilm)
      console.log("change")
    }
  }, [category])






  return (
    <>

      <div className="container mt-5">
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          <option value="start"
            onChange={(e) => setCategory(e.target.value)}>-</option>
          <option value="Fantascienza"
            onChange={(e) => setCategory(e.target.value)}>Fantascienza</option>
          <option value="Thriller"
            onChange={(e) => setCategory(e.target.value)}>Thriller</option>
          <option value="Romantico"
            onChange={(e) => setCategory(e.target.value)}>Romantico</option>
          <option value="Azione"
            onChange={(e) => setCategory(e.target.value)}>Azione</option>
        </select>

        <div className="card">
          <MovieList array={filtred} />
        </div>
      </div>

    </>
  )
}

export default App

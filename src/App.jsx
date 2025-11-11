import { useEffect, useState } from "react"
import MovieList from "./components/MovieList"
import Form from "./components/Form"



function App() {

  const [film, setFilm] = useState(
    [
      { title: 'Inception', genre: 'Fantascienza' },
      { title: 'Il Padrino', genre: 'Thriller' },
      { title: 'Titanic', genre: 'Romantico' },
      { title: 'Batman', genre: 'Azione' },
      { title: 'Interstellar', genre: 'Fantascienza' },
      { title: 'Pulp Fiction', genre: 'Thriller' },
    ])
  const [category, setCategory] = useState('All')
  const [title, setTitle] = useState('')
  const [filtred, setFiltred] = useState(film)

  useEffect(() => {

    if (category === 'All') {
      setFiltred(film)

      // console.log('start')

    } else {
      const filtredFilm = film.filter((el) => el.genre === category)
      setFiltred(filtredFilm)
      //console.log("change")
    }
  }, [category])

  useEffect(() => {
    if (title === '') {
      setFiltred(film)

    } else {
      const filtredFilm = film.filter((el) => el.title.toLowerCase() === title.toLowerCase())
      setFiltred(filtredFilm)

    }


  }, [title])






  return (
    <>

      <div className="container mt-5 ">
        <Form array={filtred} setArray={setFilm} />
        <div className="d-flex">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option value="All"
              onChange={(e) => setCategory(e.target.value)}>All</option>
            <option value="Fantascienza"
              onChange={(e) => setCategory(e.target.value)}>Fantascienza</option>
            <option value="Thriller"
              onChange={(e) => setCategory(e.target.value)}>Thriller</option>
            <option value="Romantico"
              onChange={(e) => setCategory(e.target.value)}>Romantico</option>
            <option value="Azione"
              onChange={(e) => setCategory(e.target.value)}>Azione</option>
          </select>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Cerca in base al titolo" />
        </div>

        <div className="card">
          <MovieList array={filtred} />
        </div>
      </div>

    </>
  )
}

export default App

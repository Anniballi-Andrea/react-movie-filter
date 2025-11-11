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

  return (
    <>
      <div className="container">
        <div className="card">
          <MovieList array={film} />
        </div>
      </div>

    </>
  )
}

export default App

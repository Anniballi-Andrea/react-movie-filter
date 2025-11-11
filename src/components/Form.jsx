import { useState } from "react"


export default function Form({ array, setArray }) {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')


    const handlePushFilm = event => {
        event.preventDefault()
        if (title !== '' || category !== '') {
            const newFilm = [...array, { title: { title }, genre: { category } }]
            setArray(newFilm)
            setTitle('')
            setCategory('')
            console.log(newFilm)
            console.log(array)

            /*} else if (category === '') {
                alert("please insert a category")*/
        } else {
            alert("please insert a title or category")
        }
    }



    return (

        <form onSubmit={handlePushFilm}>
            <div className="input-group mt-5">
                <input type="text"
                    value={title}
                    onChange={e => { setTitle(e.target.value) }} />

                <input type="text"
                    value={category}
                    onChange={e => { setCategory(e.target.value) }} />
                <button className="btn btn-outline-secondary" type="submit">Confirm</button>
            </div>
        </form>
    )
}
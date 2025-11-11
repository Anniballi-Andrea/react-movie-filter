export default function MovieList({ array }) {




    return (

        <ul className="list-group">
            {
                array.map((el, i) => (
                    <li key={i} className="list-group-item">{el.title}</li>
                ))
            }

        </ul>
    )


}
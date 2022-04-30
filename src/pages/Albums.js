
import { useEffect, useState } from "react";
import Album from "../componets/Album";
import '../css/Album.css'
export default function Albums() {
    const [albums, setAlbums] = useState(null);
    useEffect(() => {
        const id = sessionStorage.getItem('id');
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
            .then(res => res.json())
            .then(data => {
                setAlbums(data)
            })
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div class="col-md-12">
                    <div class="card card-white">
                        <div className="todo-list">
                            {albums && albums.map(album => <Album key={album.id} title={album.title} id={album.id} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
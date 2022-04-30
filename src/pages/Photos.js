
import { useEffect, useState } from "react";
import Photo from "../componets/Photo";
export default function Photos() {
    const [photos, setPhotos] = useState(null);
    useEffect(() => {
        const albumId = sessionStorage.getItem('albumId');
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(res => res.json())
            .then(data => {
                setPhotos(data)
            })
    }, [])

    return (
        <div class="container">
            <div class="row">
                {photos && photos.map(photo=><Photo key={photo.id} photo={photo}/>)}
            </div>
        </div>
    )
}
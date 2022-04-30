

export default function Album({ title,id }) {

    const saveAlbumId = ()=>{
        sessionStorage.setItem('albumId',id)
        window.location.href = '/photo'
    }

    return (
        <div className="todo-item">
            <div className="checker"><span className=""><input type="checkbox" onClick={saveAlbumId} /></span></div>
            <span>{title}</span>
        </div>
    )

}
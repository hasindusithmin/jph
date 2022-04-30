

export default function Posts({ post }) {
    const { id,title, body } = post;
    const savePostId = ()=>{
        sessionStorage.setItem('postid',id);
    }
    return (
        <>
            <div className="forum-item">
                <div className="row">
                    <div className="col-md-9">
                        <div className="forum-icon">
                            <i className="fa fa-star"></i>
                        </div>
                        <a href="/comment" onClick={savePostId} className="forum-item-title">{title}</a>
                        <div className="forum-sub-title">{body}</div>
                    </div>
                    <div className="col-md-1 forum-info">
                        <span className="views-number"> {Math.floor(Math.random() * (1000 - 100 + 1) + 100)} </span>
                        <div>
                            <small>Views</small>
                        </div>
                    </div>
                    <div className="col-md-1 forum-info">
                        <span className="views-number"> {Math.floor(Math.random() * (1000 - 100 + 1) + 100)} </span>
                        <div>
                            <small>Likes</small>
                        </div>
                    </div>
                    <div className="col-md-1 forum-info">
                        <span className="views-number"> 5 </span>
                        <div>
                            <small>Comments</small>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
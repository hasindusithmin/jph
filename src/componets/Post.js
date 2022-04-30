

export default function Posts({ post }) {

    const { title, body } = post;
    return (
        <>
            <div class="forum-item">
                <div class="row">
                    <div class="col-md-9">
                        <div class="forum-icon">
                            <i class="fa fa-star"></i>
                        </div>
                        <a href="#" class="forum-item-title">{title}</a>
                        <div class="forum-sub-title">{body}</div>
                    </div>
                    <div class="col-md-1 forum-info">
                        <span class="views-number"> {Math.floor(Math.random() * (1000 - 100 + 1) + 100)} </span>
                        <div>
                            <small>Views</small>
                        </div>
                    </div>
                    <div class="col-md-1 forum-info">
                        <span class="views-number"> {Math.floor(Math.random() * (1000 - 100 + 1) + 100)} </span>
                        <div>
                            <small>Likes</small>
                        </div>
                    </div>
                    <div class="col-md-1 forum-info">
                        <span class="views-number"> 5 </span>
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
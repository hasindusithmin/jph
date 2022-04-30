
import "../css/Comment.css"

export default function Comment({ comment }) {
    const { name, email, body } = comment;
    return (
        <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
            <div className="g-mb-15">
                <h5 className="h5 g-color-gray-dark-v1 mb-0">{name}</h5>
                <span className="g-color-gray-dark-v4 g-font-size-12">{Math.floor(Math.random() * (60 - 1 + 1) + 1)} days ago</span>
            </div>
            <p>{body}</p>
            <ul className="list-inline d-sm-flex my-0">
                <li className="list-inline-item g-mr-20">
                    <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                        <i className="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i> {Math.floor(Math.random() * (100 - 10 + 1) + 10)} </a>
                </li>
                <li className="list-inline-item g-mr-20">
                    <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                        <i className="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i> {Math.floor(Math.random() * (100 - 10 + 1) + 10)} </a>
                </li>
                <li className="list-inline-item ml-auto">
                    <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                        <i className="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i> Reply to {email} </a>
                </li>
            </ul>
        </div>
    )
}
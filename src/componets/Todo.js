

import '../css/Todo.css'

export default function Todo({ todo }) {

    const {title,completed} = todo;

    return (
        <li className="clearfix">
            <div className="name">
                <div className="checkbox-nice">
                    <input type="checkbox" />
                        <label > {title} <span className={completed ? "badge bg-success":"badge bg-danger"}>{completed ? 'Finished':'Pending'}</span>
                        </label>
                </div>
            </div>
        </li>
    )
}
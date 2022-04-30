
import {useEffect,useState} from "react"
import Todo from "../componets/Todo";
export default function Todos() {
    const id = sessionStorage.getItem('id');
    const [todos,setTodos] = useState(null);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
            .then(res=>res.json())
                .then(data=>{
                    setTodos(data)
                })
    },[])

    return (
        <div className="container">
            <div className="row">
                <ul className="widget-todo">
                    {todos &&  todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
                </ul>
            </div>
        </div>
    )

}
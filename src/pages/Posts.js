
import { useEffect, useState } from "react";
import Posts from "../componets/Post";
export default function Post() {

    const [posts, setPosts] = useState(null);
    const id = sessionStorage.getItem('id')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    }, [])

    return (
        <div class="container">
            <div class="row">
                {posts && posts.map(post => <Posts key={post.id} post={post} />)}
            </div>
        </div>

    )

}
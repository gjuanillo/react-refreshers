import { useEffect, useState } from "react";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string
}
function GetAPI() {
    const [data, setData] = useState<Post[] | null>(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    }, []);

    if (data === null) {
        return <p>Loading...</p>
    }

    return (
        <>
            <h2>API's</h2>
            <ul>
                {data.map((post: Post) => (
                    <li key={post.id}>
                        <p><strong>{post.title.toUpperCase()}</strong></p>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default GetAPI;

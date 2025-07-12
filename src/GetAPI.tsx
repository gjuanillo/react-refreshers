import { useEffect, useState } from "react";
import axios from "axios";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string
}
function GetAPI() {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                setData(res.data);
            }).catch(err => {
                console.error("Error fetching data:", err);
                setError("Failed to load data.");
            }).finally(() => setLoading(false))
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (data?.length === 0) return <p>No posts found</p>;
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



// const fetchData = async () => {
//     try {
//         setLoading(true);
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if (!res.ok) throw new Error(`Status ${res.status}`);
//         const json = await res.json();
//         setData(json);
//     } catch (err) {
//         console.error("Error fetching data:", err);
//         setError("Failed to load data.");
//     } finally {
//         setLoading(false);
//     }
// };
//
// fetchData();

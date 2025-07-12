import React from "react";
import api from "./api/api";
import { useState } from "react";

type Post = {
    title: string;
    body: string;
    userId: number
}


function APIPost() {
    const [data, setData] = useState<Post[]>([]);
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newPost : Post = {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
        api.post('/posts', newPost)
            .then(res => {
                console.log('New Post Added: ', res.data);
                setData([res.data, ...data]);
            })
    };
    return (

        <div>
            <h1>Test</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default APIPost;

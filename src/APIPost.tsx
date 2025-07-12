import React from "react";
import axios from "axios";
import { useState } from "react";

type Post = {
    title: string;
    body: string;
    userId: number
}

axios.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
});

axios.interceptors.response.use(response => {
    console.log('Response ', response)
    return response;
});

function APIPost() {
    const [data, setData] = useState<Post[]>([]);
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newPost : Post = {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
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

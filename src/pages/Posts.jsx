import React, { useEffect, useState } from 'react';
import { useParams, UseParams } from 'react-router-dom';
import axios from 'axios';

 const Posts = () => {
    const { id } =useParams();
    const [posts, setPosts] = useState([]);
    
    setPosts([{post: 1}])
    useEffect(() => {
        async function fetchPosts() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        setPosts(data);
    }
        fetchPosts();
     }, [] )
  return (
    <div>
        {posts.map(post => <div>{post.id}</div>)}
    </div>
  )
}

export default Posts; 


// USE CASE: CAPTURE ID: we import Use Params. what it gives us is the ID in console when we console log it. It knows it is id because we are calling it this way in App.jsx in Route path=":id"
//  so we can destrucure it and instead of writing: const params we do const { id } , we strip it and now we can directly console log the id 
//  and in order to print the id: <div>{id}</div>

// this is react useEffect syntax that we need to memorize that will run every time the page mounts, we also need to import it:  useEffect(() => { }, [] )  
// useEffect has a function that returns an object, 2nd argument is an empty array, so it knows you only need this coding running when it mounts 
// so if we console.log(mounted) we will actually see when it mounts 
// but instead of mounting we can fetch this code Json ... and lest const data at the beg 
// and with that we are getting a promise, and we add async function inside of useEffect: 
        //  async function fetchPosts() {
        // const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
// and then you call a function:         fetchPosts();
// and then you need to await data.json (await twice to get your data). and this is when axios comes, with axios we only need to await once 
// so instead of this: 
        // const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        // console.log(data)
        // const data2 = await data.json()
        // console.log(data2);
// we have this axios.get  so we are getting the json from here 
        // const data = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        // console.log(data)

// so how do we get the data from the object called "response" (previously "data"), you do the response.data: 
        // const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        // console.log(response.data)

        // OR 
        // you can destruct it, and just rip data from the response: 
        // const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        // console.log(data)


// make it a template string: `https://jsonplaceholder.typicode.com/posts?userId=1`  
// to make it dynamic: https://jsonplaceholder.typicode.com/posts?userId=${id} 

//  and to render these posts we need data.map and we need a post and for each post we need a div. 
// and for this you need to use useState:   const [post, setPosts] = useState([]);

// this is what we need to print id:    {posts.map(post => <div>{post.id}</div>)}
// and this is what we need to print title:     {posts.map(post => <div>{post.title}</div>)}

// you need an array to map, this is why you use empty array: [] here:  const [posts, setPosts] = useState([]);

// now we go to posts.html 
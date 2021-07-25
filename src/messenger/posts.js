import axios from 'axios';
import React from 'react'
import {useRecoilValue} from 'recoil';
import { access_token,pageid,uid } from '../GlobalState'
import { useEffect, useState } from 'react';
import Comments from './comments'

const Posts = () => {
    const accessid = useRecoilValue(access_token)
    const userid = useRecoilValue(uid)
    const page_id = useRecoilValue(pageid)
    const [item,setItem] = useState("")
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        axios.get(`https://graph.facebook.com/v11.0/${page_id}/posts?fields=full_picture,message&access_token=${accessid}`)
        .then(response =>{
          console.log(response.data.data)
          setPosts(response.data.data)
        })
        
    },[pageid,accessid])
    return (
        <div className="container">
            <div className="row posts-page">
                <div className="col col-md-6 posts">
                    <div className="post-head">
                        <h2>Posts</h2>
                    </div>
                    {
            posts.length ?
                  posts.map(post =>
                    <div className="myposts" key={post.id} onClick={()=>{setItem(post.id)}}>
                    {post.message}
                    {
                        post.full_picture ?
                        <div className="post-img" style={{backgroundImage: `url(${post.full_picture})`}}></div>: ""
                    }
                    
                    
                    </div>
                    //  <button className="btn btn-primary" key={post.id} onClick={()=>{setItem(post.id)}}> {post.message}</button>
                     ) : " "
        }
                    
                </div>
                <Comments data={item}></Comments> 
                 </div>
       
           
        </div>
    )
}
export default Posts

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useRecoilValue} from 'recoil';
import { access_token,pageid,uid } from '../GlobalState'


const Comments =(props)=>{
    const accessid = useRecoilValue(access_token)
    const userid = useRecoilValue(uid)
    const page_id = useRecoilValue(pageid)
    const [comments, setcomments] = useState([])
     
    useEffect(()=>{
        axios.get(`https://graph.facebook.com/v11.0/${props.data}/comments?fields=message,can_reply_privately,comments&access_token=${accessid}`)
        .then(response =>{
             setcomments(response.data.data)
             console.log("id of rec",response.data);
        })
    },[props.data])  

    return(
        <div className="col col-md-6 comments">
                    <div className="post-head">
                        <h2>Comments</h2>
                    </div>
                    <div className="mycomments">
                    {
                comments.length?
                    comments.map((comment, idx) =>
                    <ul key={idx}>
                            <li>
                                <div className="comment">{comment.message}</div>
                                { comment.comments.data.length?
                                        comment.comments.data.map((commenters, idx) =>
                                        <ul >
                                 
                                    
                    
                                    {/* <span className="reply-txt">Replies :</span> */}
                                    <li>
                                       <div className="replies">{commenters.message}</div> 
                                    </li>
                                    
                                </ul> 
                                        // <div>{commenters.message}</div>
                                        
                                        )   
                                        
                                        : " "
                                    }
                                
                            </li>
                        </ul>
                     ) : "Click on the post to view comments"
            }
                        
                    </div>
                </div>
           
        // <div>
            

        // </div>
    )
}

export default Comments
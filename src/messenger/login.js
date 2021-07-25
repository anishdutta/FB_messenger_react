import React, { Component, useState,useEffect } from 'react'
import FacebookLogin from 'react-facebook-login'
import { useRecoilState,useRecoilValue } from 'recoil'
import { access_token,uid,pageid } from '../GlobalState'
import axios from 'axios'

const Login = ()=> {
    const [user_accessToken,Setuseraccesstoken] = useRecoilState(access_token)
    const [isLoggedin,setisLoggedin] = useState(false)
    const [userData,setUserdata] = useState(null)
    const [user_uid,setUseruid] =  useRecoilState(uid)
    const [page_id,setpageid] =  useRecoilState(pageid)
    const  uidvalue = useRecoilValue(uid)

    useEffect(()=>{
        axios.get(`https://graph.facebook.com/${user_uid}/accounts?fields=name,access_token&access_token=${user_accessToken}`)
        .then(response =>{
          if( Array.isArray(response.data.data) && response.data.data.length){
          console.log("thanks" ,response.data.data[0].access_token);
          
          Setuseraccesstoken(response.data.data[0].access_token)
          setpageid(response.data.data[0].id)
          }
          else{
            console.log(response.data.length)
            alert("No page found");
            window.location.reload();
          }
          // console.log(response.data.length)
        })
        
    },[user_uid])
     
   

      return (
         
      isLoggedin ? '⚪ Online' : 
      (<div>
          {console.log(uidvalue,user_uid,user_accessToken,)}
            <FacebookLogin
                appId="198755418766865"
                autoLoad={false}
                fields="name,email,picture"
                
                // onClick={componentClicked}
                scope="pages_show_list,read_page_mailboxes,pages_messaging,pages_read_engagement, pages_manage_metadata, public_profile"
                callback={(response)=>{console.log(response);
                    setUserdata(response)
                    Setuseraccesstoken(response.accessToken)
                    setUseruid(response.userID)
                    setisLoggedin(true);
                    }} />
        </div>)
        
        )
}

export default Login
import React, { useEffect, useState } from 'react'
import { database } from '../firebase'
import { Avatar, CircularProgress } from '@mui/material'

function Comments({postData}) {
    const[comments,setComments]=useState(null)
    useEffect(()=>{
      async function fetchData(){
        let arr=[]
        for (let i = 0; i < postData.comments.length; i++) {
           let data = await database.comments.doc(postData.comments[i]).get()
           arr.push(data.data())
           
        }
        setComments(arr)
      }
      fetchData();
    },[postData])
  return (
    <div>
        {
           comments==null ? <CircularProgress/> :
           <>
           {
             comments.map((comment,index)=>(
                <div style={{display:'flex'}}>
                    <Avatar src={comment.uProfileImage}/>
                    <p>&nbsp;&nbsp;<span><strong>{comment.uName}</strong></span>&nbsp;&nbsp; {comment.text}</p>
                </div>
             ))
            
           }
           </>
        
        }
    </div>
  )
}

export default Comments
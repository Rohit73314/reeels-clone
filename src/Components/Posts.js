import React, { useState, useEffect } from 'react'
import { database } from '../firebase';
import { CircularProgress } from '@mui/material';
import Videos from './Videos';
import './Posts.css'
import Like from './Like';
import Avatar from '@mui/material/Avatar';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Like1 from "./Fav";
import Comments from './Comments';
import AddComment from './AddComment';
function Posts({ userData }) {
  const [posts, setPosts] = useState(null);
  const [open, setOpen] = React.useState(null);

  const handleClickOpen = (id) => {
    setOpen(id);
  };

  const handleClose = () => {
    setOpen(null);
  };
  useEffect(() => {
    let parr = [];
    const unsb = database.posts.orderBy('createdAt', 'desc').onSnapshot((querySnapshot) => {
      parr = []
      querySnapshot.forEach((doc) => {
        let data = { ...doc.data(), postId: doc.id }
        parr.push(data)
      })
      setPosts(parr)
    })
    return unsb
  }, [])
  const callback=(entries)=>{
    entries.forEach((entry)=>{
        let ele=entry.target.childNodes[0]
        console.log(ele);
        ele.play().then(()=>{
            if(!ele.paused&&!entry.isIntersecting){
                ele.pause();
            }
        })
    })
} 
  let observer = new IntersectionObserver(callback, {threshold:'0.6'});
  useEffect(()=>{
    const elements=document.querySelectorAll(".videos")
          elements.forEach((element)=>{
            observer.observe(element)
          })
  })
  return (
    <div>
      {
        posts == null || userData == null ? <CircularProgress /> :
          <div className='video-cont'>
            {
              posts.map((post, index) => (
                <React.Fragment key={index}>
                  {console.log(post)}
                  <div className="videos">
                    <Videos src={post.purl} id={post.pid}/>
                    <div className='fa' style={{ display: 'flex' }}>
                      <Avatar src={post.uprofile} />
                      <h4>{post.uName}</h4>
                    </div>
                    <Like userData={userData} postData={post} />
                    <ChatBubbleIcon className='chat-styling' onClick={() => handleClickOpen(post.pid)} />
                    <Dialog
                      open={open == post.pid}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                      fullWidth={true}
                      maxWidth='md'
                    >
                      <div className="modal-cont">
                        <div className="video-modal">
                          <video autoPlay={true} muted="muted" controls>
                            <source src={post.purl} />
                          </video>
                        </div>
                        <div className="comment-modal">
                          <Card className="card1" style={{ padding: '1rem' }}>
                            <Comments postData={post} />
                          </Card>
                          <Card variant="outlined" className="card2">
                            <Typography style={{ padding: '0.4rem' }}>{post.likes.length == 0 ? 'Liked by Nobody' : `Liked by ${post.likes.length} users`}</Typography>
                            <div style={{ display: 'flex' }}>
                              <Like1 postData={post} userData={userData} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                              <AddComment style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} userData={userData} postData={post} />
                            </div>
                          </Card>
                        </div>
                      </div>
                    </Dialog>
                  </div>
                </React.Fragment>
              ))

            }
          </div>

      }
    </div>
  )
}

export default Posts
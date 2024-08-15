import { useState } from 'react'

import './App.css'
import Mark from "../src/assets/images/avatar-mark-webber.webp"
import Angela from "../src/assets/images/avatar-angela-gray.webp"
import Jacob from "../src/assets/images/avatar-jacob-thompson.webp"
import Rizky from "../src/assets/images/avatar-rizky-hasanuddin.webp"
import kimberly from "../src/assets/images/avatar-kimberly-smith.webp"
import Nathan from "../src/assets/images/avatar-nathan-peterson.webp"
import Anna from "../src/assets/images/avatar-anna-kim.webp"
import ImageChess from "../src/assets/images/image-chess.webp"
function App() {
  const [notifications,setNotifications] = useState(
    [
    {id:1,
      author:{
        name:"Mark Webber",
        img: Mark ,
        href:"#"
      },
      text:"reacted to your recent post",
      link:{
        text:"My first tournament today!",
        href:"#"},
        time:"1m ago",
        isUnread:true
      },

     {
      id:2,
      author:{
        name:"Angela Gray",
        img:Angela ,
        href:"#"
      },
      text:"",
      link:{
        text:"followed you",
        href:"#"},
        time:"5m ago",
        isUnread:true
     } ,
    {
      id:3,
      author:{
        name:"Jacob Thompson",
        img: Jacob ,
        href:"#"
      },
      text:"has joined your group",
      link:{
        text:"Chess Club",
        href:"#"},
        time:"1 day ago",
        isUnread:true
    },
    {
      id:4,
      author:{
        name: "Rizky Hasanuddin",
        img:Rizky ,
        href:"#"
      },
      text:"send you a private message",
    
        privatemessage:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",

    
        time:"5 gays ago",
        isUnread:false
    },
    {
      id:5,
      author:{
        name:"Kimberly Smith",
        img: kimberly ,
        href:"#",
      },
      text:"connected on your picture",
      img:{
        img: ImageChess,
        href:"#"},
        time:"1 week ago",
        isUnread:false
    },
    {
      id:6,
      author:{
        name:"Nathan Peterson",
        img: Nathan ,
        href:"#"
      },
      text:"reacted to your recent post",
      link:{
        text:"5 end-game stategies to increase your win rate",
        href:"#"},
        time:"2weeks ago",
        isUnread: false
    },
    {
      id:7,
      author:{
        name:"Anna Kim",
        img:Anna,
        href:"#"
      },
      text:"left the group",
      link:{
        text:"Chess Club",
        href:"#"},
        time:"2 weeks ago",
        isUnread:false
    }
 ] )

function markAllUnread(){
  setNotifications((prev) => prev.map(n =>
 ( {...n, isUnread:false})
  ))
}




function handleNotificationClick(id){
  setNotifications((prev) => prev.map(n =>(
    n.id === id ? {...n,isUnread: false}:n
  )))
}



  return (

 <div className="App">
  <div className='container'>
    
    <header>
      <div className='title' >
      <h1>Notifications</h1>
      <span className='badge'> {notifications.filter(n => n.isUnread).length }</span>
      </div>
      <button id="mark" onClick={markAllUnread} >Mark all as read</button>
    </header>
   
    <div className='wrapper'>

  {
    notifications && notifications.map((n) =>(

<div key={n.id} onClick={()=>
  handleNotificationClick(n.id)} className='notification'
   data-unread ={n.isUnread}>

<div className='notification-content'>

  <img src={n.author.img} className='headshot'></img>
  <div className='post'>
<div>
<div className='post-text'>
<div>
<span>
    <a href={n.author.href} className='a'>{n.author.name} </a>
    
    {n.text}
    </span>
</div>
    {n.link && (

      <a href={n.link.href} className='a'>
        {n.link.text}
        </a>
    )}
{n.isUnread && (
    <span className= "isUnread"></span>
  )}
  </div>
<p className='time'> {n.time}</p>
</div>
{n.privatemessage && (<p className='privatemessage'>{n.privatemessage}</p>)}
</div>
</div>
{n.img && (<a href={n.img.img} className='a'>
  <img src={n.img.img}></img>
</a>)}
</div>

          ))
          
  }
  </div>
</div>
 </div>
   
)}


export default App

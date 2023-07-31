
import s from './MyFriend.module.css'
export const FriendList = (props)=>{
const {friends} = props
return <ul className="friend-list">

{friends.map((friend)=>{
    return <li className="item" key={friend.id}>
  <span   className={`status ${friend.isOnline ? s.online : s.offline}`}>{friend.isOnline ? 'Online' : 'Offline'}</span>
  <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
  <p className="name">{friend.name}</p>
</li>
})}


</ul>
}
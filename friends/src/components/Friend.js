import React from 'react';

const Friend = props => {

    return (
        <div className='friend-card'>
            <h2>{props.friend.name}</h2>
            <h3>age: {props.friend.age}</h3>
            <h3>{props.friend.email}</h3>
            <button className='remove-button' onClick={()=>props.removeFriends(props.friend.id)}>remove</button>
        </div>
    )
}

export default Friend;
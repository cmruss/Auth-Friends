import React from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from './FriendForm';
import img from './friends.png';
import Friend from './Friend';

class FriendsList extends React.Component {
    state = {
        friends: [],
        isFetching: false
    };

    componentDidMount() {
        this.getFriends();
    };

    conponentDidUpdate() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then(response => {
                this.setState({
                    friends: response.data
                })
            })
            .catch(error => console.log('No dice.', error));
    };

    removeFriends = (id) => {
        axiosWithAuth()
            .delete(`/friends/${id}`)
            .then(response =>
                console.log(response))
            .catch(error => console.log('No dice.', error))
        this.getFriends();
    };

    render() {
        return(
            <div className='friend-wrapper'>
                <img src={img} alt='F-R-I-E-N-D-S'/>
                <FriendForm getFriends={this.getFriends} />
                <div className='friends-list'>
                    {this.state.friends.map(friend => 
                        <Friend friend={friend} key={friend.id} removeFriends={this.removeFriends}/>
                   )}
                </div>
            </div>
        );
    };

};

export default FriendsList;
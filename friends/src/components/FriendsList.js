import React from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from './FriendForm';


class FriendsList extends React.Component {
    state = {
        friends: []
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

    render() {
        return(
            <div>
                <img src='../friends.png' alt='F-R-I-E-N-D-S'/>
                    <FriendForm getFriends={this.getFriends} />
                    {this.state.friends.map(friend => <div friend={friend} key={friend.id}>
                        <h2>{friend.name}</h2>
                        <h3>age: {friend.age}</h3>
                        <h3>{friend.email}</h3>
                    </div>)}
            </div>
        );
    };

};

export default FriendsList;
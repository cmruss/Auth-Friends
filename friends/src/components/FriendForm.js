import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendForm extends React.Component {
    
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        },
        isPosting: false
    };

    handleChange = event => {
        this.setState({
            friend: {
                ...this.state.friend,
                [event.target.name]: event.target.value
            }
        });
    };

    submit = event => {
        event.preventDefault();
        this.setState({ isPosting: true });

        axiosWithAuth()
            .post('/friends', this.state.friend)
            .then(response => console.log(response))
            .catch(error => console.log('No dice.', error));

        this.setState({ isPosting: false});
        this.props.getFriends();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input
                        type='text'
                        name='name'
                        value={this.state.friend.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type='number'
                        name='age'
                        value={this.state.friend.age}
                        onChange={this.handleChange}
                    />
                    <input
                        type='email'
                        name='email'
                        value={this.state.friend.email}
                        onChange={this.handleChange}
                    />
                    <button>add</button>
                </form>
            </div>
        );
    }
};

export default FriendForm;
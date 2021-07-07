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

        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            },
            isPosting: false
        });
        this.props.getFriends();
    };

    render() {
        return (
            <div className='friend-form'>
                <form onSubmit={this.submit}>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='name'
                        value={this.state.friend.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type='number'
                        name='age'
                        id='age'
                        placeholder='age'
                        value={this.state.friend.age}
                        onChange={this.handleChange}
                    />
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='email'
                        value={this.state.friend.email}
                        onChange={this.handleChange}
                    />
                    <button className='add-button'>add</button>
                </form>
            </div>
        );
    }
};

export default FriendForm;
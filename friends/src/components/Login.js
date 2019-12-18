import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        isFetching: false
    };

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
        console.log(this.state)
;    };

    login = event => {
        event.preventDefault();
        this.setState({ isFetching: true });

        axiosWithAuth()
            .post('/login', this.state.credentials)
            .then(response => {
                localStorage.setItem('token', response.data.payload);
                this.props.history.push('/friendslist')
            })
            .catch(error => console.log('No dice.', error))
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>log in</button>
                </form>
            </div>
        );
    }
};

export default Login;
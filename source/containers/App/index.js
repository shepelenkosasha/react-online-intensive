// Core
import React, { Component } from 'react';

// Components
import Feed from 'components/Feed';
import { Provider } from 'components/HOC/withProfile.js';

// Instruments
import avatar from 'theme/assets/lisa';

const options = {
    avatar,
    currentUserFirstName: 'Lisa',
    currentUserLastName:  'Simpson',
};

export default class App extends Component {
    render () {
        return (
            <Provider value = { options }>
                <Feed { ...options } />
            </Provider>
        );
    }
}

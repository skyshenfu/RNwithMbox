/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import {Router} from "./app/router";

export default class ReviewRN extends Component {
    render() {
        return (
            <Router/>
        );
    }
}

AppRegistry.registerComponent('ReviewRN', () => ReviewRN);

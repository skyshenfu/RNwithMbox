import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
} from 'react-native';
import {TabNavigator} from 'react-navigation'

import TabHomeComponent from './tabhome'
import TabNewsComponent from './tabnews'
import TabConcernComponent from './tabconcern'
import TabFindComponent from './tabfind'

export const MainTab=TabNavigator({
    Home: {
        screen : TabHomeComponent
    },
    News:{
        screen : TabNewsComponent
    },
    Concern:{
        screen : TabConcernComponent
    },
    Find:{
        screen : TabFindComponent
    }
},{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
})
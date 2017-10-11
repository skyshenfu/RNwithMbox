import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
} from 'react-native';
import {TabNavigator,TabBarBottom} from 'react-navigation'

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
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled:false,
    lazy:true,
    indicatorStyle: {
        height :0
    },
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#00aa63',
    },
})
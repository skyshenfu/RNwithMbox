import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
    Dimensions
} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
import CMapCustom  from '../customs/CustomMap'

const title='首页'
export default class TabHomeComponent extends Component{
    static navigationOptions={
        tabBarLabel: title
    }
    render(){
        return(
            <CMapCustom style={styles.container}/>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:ScreenWidth,
        height:ScreenHeight
    }
});
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
} from 'react-native';
const title='关注'
export default class TabConcernComponent extends Component{
    static navigationOptions={
        tabBarLabel: title
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>{title}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
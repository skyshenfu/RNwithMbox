/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
} from 'react-native';
import NewsItem from '../components/NewsItem'
import Store from '../stores/store';
import {observable,action}from 'mobx'
import {observer,Provider} from 'mobx-react/native'
import ListComponent from '../components/ListComponent'
const title='新闻'
@observer
export default class TabNewsComponent extends Component {
    dataM=new Store()

    press2=()=>{
        this.dataM.loadMore()
    };
    static navigationOptions = {
        header: null,
        tabBarLabel: title
    };
    press1=()=>{
        this.dataM.refresh()
    }
    render() {

        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.press1}>

                    <View  style={styles.buttons}>
                        <Text>{this.dataM.datas.length}</Text>
                    </View>

                </TouchableHighlight>
                <TouchableHighlight onPress={this.press2}>

                    <View  style={styles.buttons1}>
                        <Text>{this.dataM.datas.length}</Text>
                    </View>

                </TouchableHighlight>
                <ListComponent source={this.dataM.datas.slice()} nav={this.props.navigation} store={this.dataM}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:20
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    buttons: {
        width :50,
        height :50,
        backgroundColor: '#f96060'
    },
    buttons1: {
        width :50,
        height :50,
        backgroundColor: '#006060'
    }
});
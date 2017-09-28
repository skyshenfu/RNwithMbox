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
const title='新闻'
@observer
export default class TabNewsComponent extends Component {
    dataM=new Store()
    press1=()=>{
        this.dataM.fetchNewsList()
    };
    _renderItem=({item}) => (
        <NewsItem info={{item}} nav={this.props.navigation}/>
    );
    static navigationOptions = {
        header: null,
        tabBarLabel: title
    };
    render() {
        console.log(this.props)
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.press1}>

                    <View  style={styles.buttons}>
                        <Text>{this.dataM.datas.length}</Text>
                    </View>

                </TouchableHighlight>
                <FlatList data={this.dataM.datas.slice()} renderItem={this._renderItem} keyExtractor={(item,index)=>item.aid}/>
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
    buttonsgreen: {
        width :50,
        height :50,
        backgroundColor: '#00aa00'
    }
});
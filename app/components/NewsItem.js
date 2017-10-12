import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Dimensions
} from 'react-native';
import {observer,Provider,inject} from 'mobx-react/native'
import {observable,action}from 'mobx'
const ScreenWidth = Dimensions.get('window').width;

@observer
export default class NewsItem extends Component{

    render(){
        const {navigate}=this.props.nav
        console.log(this.props)
        return (
            <TouchableHighlight onPress={()=>{
                navigate('Web',{url:this.props.info.item.url+this.props.info.item.aid})
            }}>

                <View  style={styles.newsItemStyle}>
                    <Image style={styles.imageStyle} source={{uri : this.props.info.item.pic}}/>
                    <View style={styles.textContain}>
                        <Text>{this.props.info.item.title}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}
const styles = StyleSheet.create({
    newsItemStyle: {
        flex: 1,
        height:100,
        width:ScreenWidth,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F500FF',
    },
    imageStyle:{
        width:100,
        height:75
    },
    textContain:{
        flex:1,
        height:100,
        flexDirection:'column',
        justifyContent:'center',
    }
});
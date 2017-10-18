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
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

@observer
export default class FooterComponent extends Component {
    render() {
        console.log(this.props)
        return(
            <View style={this.props.store.headertype==1 ? stylesheets.footerNormal : stylesheets.footerRefreshing}/>
        )


    }
}
const stylesheets=StyleSheet.create({
    footerNormal :{
        width :ScreenWidth,
        height :0,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f96060'
    },
    footerRefreshing :{
        width :ScreenWidth,
        height :ScreenHeight/10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#60f'
    }
})
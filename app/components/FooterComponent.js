import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Dimensions
} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
export default class FooterComponent extends Component {
    render() {
        if (this.props.type.footertype==1){
            return (
                <View style={stylesheets.footerNormal}>
                    <Text>正常头</Text>
                </View>
            )
        }else {
            return (
                <View style={stylesheets.footerNormal}>
                    <Text>刷新头</Text>
                </View>
            )
        }


    }
}
const stylesheets=StyleSheet.create({
    footerNormal :{
        width :ScreenWidth
    }
})
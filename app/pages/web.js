import React, {Component} from 'react';
import {
    WebView,
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');
export default class WebComponent extends Component{

    componentWillMount(){
        console.log('WebComponent装载了')
    }
    componentWillUnmount(){
        console.log('WebComponent卸载了')
    }
   render(){
       const {params}=this.props.navigation.state;
       return(
           <WebView
           style={styles.container}
           ref="webViewRef"
           source={{uri: params.url}}
           javaScriptEnabled={true}
           domStorageEnabled={true}
           startInLoadingState={true}
           scalesPageToFit={true}
       />);
   }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:width,
        height:height,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
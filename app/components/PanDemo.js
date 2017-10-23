import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Dimensions,
    FlatList,
    Platform,
    PanResponder,
    RefreshControl
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import PullStore from '../stores/pullStore'
import NewsItem from '../components/NewsItem'
import {observer,Provider,inject} from 'mobx-react/native'
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

@observer
export default class PanDemo extends Component {
    _panResponder={};
    _panResponderChild={};
    isIos=false
    pullStore=new PullStore();
    _returnheader=()=>{
        return (
            <HeaderComponent store={this.props.store}/>
        )
    }
    _returnfooter=()=>{
        return(
            <FooterComponent store={this.props.store}/>
        )
    }
    componentWillMount(){
        var that=this
        this.isIos= Platform=='ios'? true :false;
        console.log(ScreenHeight)
        this._panResponder=PanResponder.create({
            onStartShouldSetPanResponder:(evt, gestureState)=>{
                console.log("********************start set************************")
                return true;
            },
            onStartShouldSetResponderCapture :(evt, gestureState)=>{
                console.log("********************start 拦截************************")
                return true;
            },
            onMoveShouldSetPanResponder:(evt, gestureState)=>{
                console.log("********************move set************************")
                return true;
            },
            onMoveShouldSetResponderCapture:(evt, gestureState)=> {
                console.log("********************move 拦截************************")
                return true;
            },
            onPanResponderGrant: (evt, gestureState) => {
                // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
                console.log("********************手势轮询************************")
                console.log(gestureState)

                // gestureState.{x,y}0 现在会被设置为0
            },
            onPanResponderStart:(evt, gestureState) => {
                console.log("********************手势开始************************")

            },
            onPanResponderMove: that._moveHandler,
            onPanResponderRelease: (evt, gestureState) => {
                // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
                // 一般来说这意味着一个手势操作已经成功完成。
                console.log("********************手势完成************************")
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,

            onPanResponderTerminate: (evt, gestureState) => {
                // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
                console.log("********************手势取消************************")
            },
            onPanResponderReject:(evt, gestureState)=>{
                //表示申请被拒绝
                console.log("********************你是个好人************************")

            }
        })
        //FlatList的事件处理
        this._panResponderChild=PanResponder.create({
            onStartShouldSetPanResponder:(evt, gestureState)=>{
                console.log("#########################child start set############################")
                return false;
            },
            onStartShouldSetResponderCapture :(evt, gestureState)=>{
                console.log("#########################child start拦截############################")
                return false;
            },
            onMoveShouldSetPanResponder:(evt, gestureState)=>{
                console.log("#########################child move set############################")
                return false;
            },
            onMoveShouldSetResponderCapture:(evt, gestureState)=> {
                console.log("#########################child move拦截############################")
                return false;
            },
            onPanResponderGrant: (evt, gestureState) => {
                // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
                console.log("#########################child手势轮询############################")
                console.log(gestureState)

                // gestureState.{x,y}0 现在会被设置为0
            },
            onPanResponderStart:(evt, gestureState) => {
                console.log("#########################child手势开始############################")

            },
            onPanResponderMove: that._moveHandler1,
            onPanResponderRelease: (evt, gestureState) => {
                // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
                // 一般来说这意味着一个手势操作已经成功完成。
                console.log("#########################child手势完成############################")
            },
             onPanResponderTerminationRequest: (evt, gestureState) => false,
            onPanResponderTerminate: (evt, gestureState) => {
                // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
                console.log("#########################child手势取消############################")
            },
            onPanResponderReject:(evt, gestureState)=>{
                //表示申请被拒绝
                console.log("#########################你是个好人############################")

            }
        })
    }
    _renderItem=({item}) => (
        <NewsItem info={{item}} nav={this.props.nav}/>
    );
    render() {
        return (

            <View style={stylesheets.container}  {...this._panResponder.panHandlers}>
              <FlatList data={this.props.store.datas}
                          renderItem={this._renderItem}
                          keyExtractor={(item,index)=>item.aid}
                          ListHeaderComponent={this._returnheader}
                            {...this._panResponderChild.panHandlers}

                />

{/*
                <View style={stylesheets.containersmall} {...this._panResponderChild.panHandlers} />
*/}

            </View>
      )


    }
    _moveHandler=(evt,gestureState)=>{

        var a=this.isIos ? -gestureState.dy : gestureState.dy
        console.log(a+"*")

    }
    _moveHandler1=(evt,gestureState)=>{

        var a=this.isIos ? -gestureState.dy : gestureState.dy
        console.log(a+"#")

    }
}

const stylesheets=StyleSheet.create({
    container :{
        flex :1,
        width :300,
        backgroundColor :'#43ff90'
    },
    containersmall :{
        flex :150,
        width :150,
        backgroundColor :'#f96060'
    }
})
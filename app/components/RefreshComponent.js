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
    RefreshControl,
    Animated
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import NewsItem from '../components/NewsItem'
import {observer,Provider,inject} from 'mobx-react/native'
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

@observer
export default class RefreshComponent extends Component {
    _panResponder={};
    isIos=false
    constructor(props){
        super(props);
        this.state={
                whichtoscroller :false
            }
    }
    _returnheader=()=>{
        return (
            <HeaderComponent store={this.props.store}/>
        )
    }
    _onScroll=(e)=>{
        console.log("here")
    }
    componentWillMount(){
        var that=this
        this.isIos= Platform=='ios'? true :false;
        console.log(ScreenHeight)
        this._panResponder=PanResponder.create({
            /**
             * 下面四个方法，判断手势开始 return true就响应事件，return false就不响应事件
             * @method _whereRespon:判断视图响应与否
             */
            onStartShouldSetPanResponder:that._whereRespon,
            onStartShouldSetResponderCapture :that._whereRespon,
            onMoveShouldSetPanResponder:that._whereRespon,
            onMoveShouldSetResponderCapture:that._whereRespon,
            onPanResponderGrant: (evt, gestureState) => {
                // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
                console.log("********************手势轮询************************")
                console.log(gestureState)

                // gestureState.{x,y}0 现在会被设置为0
            },
            onPanResponderStart:(evt, gestureState) => {
                console.log("********************手势开始************************")

            },
            /*
               如果作用视图为一个可滚动的视图，只有当 scrollEnabled为false时，取到的才是真正的滑动距离
             */
            onPanResponderMove: that._moveHandler,
            onPanResponderRelease: (evt, gestureState) => {
                // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
                // 一般来说这意味着一个手势操作已经成功完成。
                console.log("********************手势完成************************")
            },
            /**
             * 允许截断请求，作用场景如下
             * A为父B为子，B在A上，两者都有对视图进行请求相应的操作即A、B_whereRespon返回值都为true的情况下
             * 如果B子视图返回为true,则进入到B的onPanResponderMove方法，否则进入A
             */
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
    }
    _renderItem=({item}) => (
        <NewsItem info={{item}} nav={this.props.nav}/>
    );
    render() {
        return (
              <AnimatedFlatList data={this.props.store.datas}
                          renderItem={this._renderItem}
                                scrollEnabled={this.props.store.istop}
                                {...this._panResponder.panHandlers}
                          keyExtractor={(item,index)=>item.aid}
                />

      )

    }
    _moveHandler=(evt,gestureState)=>{

        var a=this.isIos ? -gestureState.dy : gestureState.dy
        console.log(a+"*")



    }
   /*
        todo:下拉刷新思路如下
      *1.判断是否处于顶部（用offset）
      *2.if处于顶部：可滑动视图的onScroller设置为false,拿到真实滑动距离然后和目标距离进行比较
      * else：可滑动视图的onScroller设置为true，不再监管下拉刷新事件
      *3.用动画让其过度平滑

    */
    _whereRespon=(evt,gestureState)=>{
        let a=this.props.store.istop;
        console.log(a)
        return a;
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
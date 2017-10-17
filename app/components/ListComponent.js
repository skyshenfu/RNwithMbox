import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Dimensions,
    FlatList,
    Platform
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import NewsItem from '../components/NewsItem'
const ScreenWidth = Dimensions.get('window').width;
export default class ListComponent extends Component {
    _returnheader=(headertype)=>{
        return (
            <HeaderComponent type={headertype}/>
        )
    }
    _returnfooter=(footertype)=>{
        return(
            <FooterComponent type={footertype}/>
        )
    }
    componentWillMount(){
      console.log(this.props.store)
    }
    _renderItem=({item}) => (
        <NewsItem info={{item}} nav={this.props.nav}/>
    );
    render() {
      return (
              <FlatList data={this.props.store.datas}
                        renderItem={this._renderItem}
                        keyExtractor={(item,index)=>item.aid}
                        ListHeaderComponent={this._returnheader(2)}
                        ListFooterComponent={this._returnfooter(1)}
                        onRefresh={()=>{
                            console.log("走刷新了")
                            setTimeout(this.props.store.refresh,500)
                        }
                        }
                        refreshing={this.props.store.refreshing}
                        onEndReachedThreshold={Platform.OS=='ios' ? -0.1:0.1}
                        onEndReached={()=>{
                                console.log("到达底部")
                            this.props.store.loadMore()
                            }
                        }/>
      )


    }
}
const stylesheets=StyleSheet.create({
    headerNormal :{
        width :ScreenWidth
    }
})
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
import {observer,Provider,inject} from 'mobx-react/native'
const ScreenWidth = Dimensions.get('window').width;
@observer
export default class ListComponent extends Component {
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
                        ListHeaderComponent={this._returnheader}
                        ListFooterComponent={this._returnfooter}
                        onRefresh={()=>{
                            console.log("走刷新了")
                            this.props.store.refresh()
                        }
                        }
                        refreshing={this.props.store.refreshing}
                        onEndReachedThreshold={Platform.OS=='ios' ? -0.1:0.1}
                        onEndReached={()=>{
                                console.log("到达底部")
                            this.props.store.loadMore()
                            }
                        }
                        extraData={this.props.store}
              />
      )


    }
}
const stylesheets=StyleSheet.create({
    headerNormal :{
        width :ScreenWidth
    }
})
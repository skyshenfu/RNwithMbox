import {observable,action}from 'mobx'
import {postTogainData,buidPostRequest,BASE_URL} from '../utlis/netUtils'
export default class Store{
    @observable
    datas=[];
    @observable
    footertype=0
    @observable
    headertype=0
    allpages=1;
    @observable
    refreshing=false
    @observable
    currentpage=1;
    loadPage=()=>{
        console.log("44444444"+this.currentpage)
            fetch("http://all-help.com/mobile/article/getArticleListByCid.json",buidPostRequest('classid=1&page='+this.currentpage))
                .then(response => response.json())
                .then(this._dealWithData)
                .catch((error) => {
                    console.error(error);
                    this.stopRefreshing();
                });
        }

    stopRefreshing() {
        if (this.refreshing) {
            this.refreshing = false
        }
    }

    _dealWithData=(rj)=>{
        this.currentpage=rj.data.page
        this.stopRefreshing()
        if (this.currentpage==1){
            this.datas=  rj.data.dataList
            this.allpages=rj.data.totalPage
        }else if(this.currentpage<=this.allpages){
            this.datas=this.datas.slice().concat(rj.data.dataList)
        }
    }
    @action
    refresh=()=>{
        this.refreshing=true
        console.log("3333333")
        this.currentpage=1
        this.loadPage()
    }
    @action
    loadMore=()=>{
        console.log("2222222")
        this.currentpage=this.currentpage+1;
        if (this.currentpage<=this.allpages){
            this.loadPage()

        }
    }

}
import {observable,action}from 'mobx'
import {postTogainData,buidPostRequest,BASE_URL} from '../utlis/netUtils'
export default class Store{
    @observable
    datas=[];


    @action
    replace=(items)=>{
        this.datas.splice(0,this.datas.length);
        this.datas=items
    }

    @action
    addItem=(item)=>{
        this.datas.push(item)
        console.log(this.datas)
    }
    clear=action(() => {
        this.datas.splice(0,this.datas.length);
    })
    @action
    fetchNewsList=()=>{
        fetch("http://all-help.com/mobile/article/getArticleListByCid.json",buidPostRequest('classid=1&page=2'))
            .then(response => response.json())
            .then((rj)=>{
               this.datas= rj.data.dataList
                console.log(rj.data.dataList)
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
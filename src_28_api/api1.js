import {
    Text,
    StyleSheet,
    View,
    Button,
    Alert,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Image,
    SafeAreaView
    } from 'react-native'
import React, { Component } from 'react'
import HTMLView from 'react-native-htmlview'
import {getnews,log} from './getnews'
// import {getoneday} from './getnews'

class Blink extends Component{
  constructor(props) {
    super(props);
    this.state = {date:''};
    setInterval(()=>{
      var date = new Date();
      var year = date.getFullYear().toString();
      var month = (date.getMonth()+1).toString();
      var day = date.getDate().toString();
      var hour =  date.getHours().toString();
      var minute = date.getMinutes().toString();
      var second =  date.getSeconds().toString();
      this.setState({date:year+'年'+month+'月'+day+'日'+' '+hour+':'+minute+':'+second})},1000);
  }
render(){
    return(
       <Text style={{fontSize:20,borderColor:'black'}}>{this.state.date}</Text>
    )
}
}

function getoneday(date){
  var url ='https://news-at.zhihu.com/api/3/news/before/'+date
  const response=fetch(url,{method:'get'}).then(res=>res.json())
  return response
}


export default class Api extends Component {
    constructor(props){
      super(props)
      this.state={
        list:[],
        date:'',
        otherlist:[],
        alllist:[]
      }
    }

   componentDidMount()
   {
        getnews().then(res=>{
        this.setState({
        list:res.stories,
        date:res.date})})
        .then(()=>{
          var url ='https://news-at.zhihu.com/api/3/news/before/'+this.state.date
          const response=fetch(url,{method:'get'}).then(res=>res.json())
          return response
        })
        .then(res=>{this.setState({otherlist:res.stories})})
        .then(()=>{this.setState({alllist:[this.state.list]+[this.state.otherlist]})})
    }
        

    nwesitem=({item})=>{
      return(
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('新闻详情',{uri:item.url,id:item.id})}>
        <View style={{flexDirection:'row'}}>
        <View style={[styles.h1]}>
          <Text style={styles.h3}>{item.title}</Text>
          <Text style={{color:'black'}}>{item.hint}</Text>
        </View> 
        <View style={{justifyContent:'flex-end'}}>
          <Image
          source={{uri:item.images[0]}}
          style={[styles.h2]}/>
        </View>
      </View>
      </TouchableOpacity>
      )
    }
    log=()=>{console.log(this.state.alllist)}
  render() {
    var agreeContent = '<p><a href="https://www.baidu.com" target="_blank">点击进入百度哦</a><br></p>';
    return ( 
        
        <ScrollView>
             {/* <View style={{alignItems:'center'}}><Blink /></View> */}
          <View>
            <FlatList
              data={this.state.list}
              renderItem={this.nwesitem}
              ItemSeparatorComponent={()=>{return(<View style={{borderBottomWidth:1,borderBottomColor:'#cc',marginVertical:10}}/>)}}
              ListHeaderComponent={()=>{
                var date = new Date();
                var year = date.getFullYear().toString();
                var month = (date.getMonth()+1).toString();
                var day = date.getDate().toString();
                var riqi={rq:year+'年'+month+'月'+day+'日'}
                return(<View>
                  <Text style={{fontSize:20,textAlign:'center'}}>---{riqi.rq}新闻---</Text>
                  <View style={{borderBottomWidth:1,borderBottomColor:'#cc',marginVertical:10}}/>
                </View>)
              }}
              />
          </View>
      
          <View style={{borderBottomWidth:1,borderBottomColor:'#cc',marginVertical:10}}/>
          <View>
            <FlatList
              data={this.state.otherlist}
              renderItem={this.nwesitem}
              ItemSeparatorComponent={()=>{return(<View style={{borderBottomWidth:1,borderBottomColor:'#cc',marginVertical:10}}/>)}}
              ListHeaderComponent={()=>{
                var date = new Date();
                var year = date.getFullYear().toString();
                var month = (date.getMonth()+1).toString();
                var day = date.getDate().toString()-1;
                var riqi={rq:year+'年'+month+'月'+day+'日'}
                return(<View>
                  <Text style={{fontSize:20,textAlign:'center'}}>---{riqi.rq}新闻---</Text>
                  <View style={{borderBottomWidth:1,borderBottomColor:'#cc',marginVertical:10}}/>
                </View>)
              }}
              />  
          </View>
        <Button
        onPress={this.log}
        title='点击获取'/>
          <View>
            <HTMLView
            value={agreeContent}/>
          </View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    container :{
        justifyContent:'center',
        alignItems:'center'
    },
    h1:{
      alignItems:'flex-start',
      width:300,
      height:70,
      borderColor:'black',
      marginHorizontal:10,
    },
    h2:{
      height:70,
      width:70,
    },
    h3:{
      fontWeight:'bold',
      color:'black'
    }
    
})
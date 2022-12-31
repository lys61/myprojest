import { Text, View ,FlatList} from 'react-native';
import React, { PureComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Sta from './src_22_stack/stack'
import Api from './src_28_api/api'
import Lxl from './src_28_api/api1'
import Web from './src_23_webview/web'
import Webs from './src_23_webview/webs'
export default class App extends PureComponent {
  render() {
    return (
      //  <View>
      //     <Text>TouchableOpacity</Text>
      //    <View>
      //      <Api/>
      //    </View>
      //    <View>
      //      <Lxl/>
      //    </View> 
      //  </View>
      <NavigationContainer>
        <Sta/>
      </NavigationContainer>
      //  <Web/>
      //  <Webs/>
    )
  }
}
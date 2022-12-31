// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '../src_23_webview/webview'
import LLL from '../src_28_api/api1'
import LL from '../src_28_api/dplun'
import L from '../src_28_api/cplun'
const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="知乎日报" component={LLL} />
        <Stack.Screen name="新闻详情" component={Detail}/>
        <Stack.Screen name="短评" component={LL}/>
        <Stack.Screen name="长评" component={L}/>
      </Stack.Navigator>
  );
}

export default App;
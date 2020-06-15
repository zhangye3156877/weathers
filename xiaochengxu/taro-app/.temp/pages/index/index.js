import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './index.less';

export default class Index extends Taro.Component {

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页'
  };

  render() {
    return <View className="index">
        <View>box1</View>  
        <View>box2</View>  
        <View>box3</View>  
        <View>box4</View>  
      </View>;
  }
}
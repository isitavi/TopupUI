import React from "react";
import { AppRegistry, View, Image } from "react-native";
import TopupScreen from "../Screens/Topup/Topup";
import HistoryScreen from "../Screens/History/History";
import BalanceScreen from "../Screens/Balance/Balance";
import PromotionScreen from "../Screens/Promotion/Promotion";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

// const MainComponent = createBottomTabNavigator({
//   Topup: TopupScreen,
//   History: HistoryScreen,
//   Balance: BalanceScreen,
//   Promotion: PromotionScreen
// });

const MainComponent = createBottomTabNavigator({
  Topup: {
    screen: TopupScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return <Image source={require("../Public/icon/ic_recharge.png")} />;
      }
    })
  },
  History: {
    screen: HistoryScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return <Image source={require("../Public/icon/ic_history.png")} />;
      }
    })
  },
  Balance: {
    screen: BalanceScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <Image
            source={require("../Public/icon/ic_taka.png")}
            color={tintColor}
            size={24}
          />
        );
      }
    })
  },
  Promotion: {
    screen: PromotionScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon name="rocket" color={tintColor} size={24} />
      )
    })
  }
});

export default createAppContainer(MainComponent);

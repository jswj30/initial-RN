import {Dimensions} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const entireScreenWidth = Dimensions.get('window').width;
const entireScreenHeight = Dimensions.get('window').height;

function rem() {
  EStyleSheet.build({ $rem: entireScreenWidth / 380 });
}

export {entireScreenWidth, entireScreenHeight, rem}
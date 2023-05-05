import React ,{Component}from "react";
import {
View,
Text,
StyleSheet,
SafeAreaView,    
Platform,
StatusBar,
ImageBackground,
Alert,
Image,
Touchable

} from "react-native";

import axios from "axios";
export default class IssLocationScreen extends Component {

constructor(props) {
super(props);
this.state={location: {}};

}
componentDidMount(){
this.getIssLocation()
try{
setInterval(async ()=> {
this.getIssLocation()    
},5000);
}
catch(e){
console.log(e);    
}

}


}
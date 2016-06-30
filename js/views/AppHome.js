import React from "react";
import axios from "axios";

console.log('test');

export default class AppHome extends React.Component {
   constructor() {
      super();
      this.state = {
         sauces: []
      }
   }

   componentDidMount() {
      var _this = this;
      axios.get("../hotsauces.json").then(function(result) {    
         _this.setState({ sauces: result.data.list });
      });
   }

   render() {
      // Is this proper way of transferring state to children?
      return React.cloneElement(
            this.props.children, 
            { sauces: this.state.sauces }
      );
   }
}
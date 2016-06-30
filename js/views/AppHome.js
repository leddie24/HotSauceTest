import React from "react";
import axios from "axios";

export default class AppHome extends React.Component {
   constructor() {
      super();
      this.getHotSauceData = this.getHotSauceData.bind(this);
      this.state = {
         sauces: []
      }
   }

   getHotSauceData() {
      axios.get("../hotsauces.json").then(function(result) {
         this.setState({ sauces: result.data.list });
         localStorage.clear();
         localStorage.setItem('sauceList', JSON.stringify(result.data.list));
      }.bind(this));
   }

   componentDidMount() {
      this.getHotSauceData();
   }

   render() {
      // Is this proper way of transferring state to children?
      return (
         React.cloneElement(this.props.children,
            {
               sauces: this.state.sauces
            }
         )
      );
   }
}
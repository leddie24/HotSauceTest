import React from "react";
import axios from "axios";

export default class AppHome extends React.Component {
   constructor(props) {
      super(props);
      this.getHotSauceData = this.getHotSauceData.bind(this);
      this.state = {
         sauces: []
      };
   }

   // Get initial hotsauce data and force update to re-render child component
   getHotSauceData() {
      axios.get("../hotsauces.json").then(function(result) {
         this.setState({
            sauces: result.data.list
         });
         this.forceUpdate();
      }.bind(this));
   }

   // Load initial data via ajax
   componentWillMount() {
      this.getHotSauceData();
   }

   // Render router child component with this.state.sauces as sauces prop
   render() {
      return React.cloneElement(this.props.children,
         {
            sauces: this.state.sauces
         });
   }
}
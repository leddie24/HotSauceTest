import React from "react";
import axios from "axios";

export default class AppHome extends React.Component {
   // Bind component functions and set initial state to undefined
   constructor(props) {
      super(props);
      this.state = {
         sauces: undefined
      };
      this.getHotSauceData = this.getHotSauceData.bind(this);
   }

   // Get initial hotsauce data
   getHotSauceData() {
      axios.get("../hotsauces.json").then(function(result) {
         this.setState({
            sauces: result.data.list
         });
      }.bind(this));
   }

   // Load initial data via ajax
   componentDidMount() {
      this.getHotSauceData();
   }

   // Render empty page if sauces state is undefined
   // Render router child component with this.state.sauces as sauces prop
   render() {
      if (!this.state.sauces) {
         return (<div></div>);
      } else {
         return React.cloneElement(this.props.children,
            {
               sauces: this.state.sauces
            });
      }
   }
}
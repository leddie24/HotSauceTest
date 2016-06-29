var React = require('react');
var axios = require('axios');

var HotSauceGallery = require('./HotSauceGallery');

var App = React.createClass({
   getInitialState: function() {
      return {
        sauces: []
      }
   },
   componentDidMount: function() {
      var _this = this;
      axios.get("../hotsauces.json").then(function(result) {    
         _this.setState({ sauces: result.data.list });
      });
   },
   render: function() {

      // Is this proper way of transferring state to children?
      return React.cloneElement(
            this.props.children, 
            { sauces: this.state.sauces }
      );
   }
});

module.exports = App;
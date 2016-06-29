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
      console.log('will mount app home');
      var _this = this;
      axios.get("../hotsauces.json").then(function(result) {    
         console.log('SAUCE LIST FROM APP HOME', result.data.list);
         _this.setState({ sauces: result.data.list });
      });
   },
   render: function() {
      return React.cloneElement(
            this.props.children, 
            { sauces: this.state.sauces }
      );
   }
});

module.exports = App;
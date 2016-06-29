var React = require('react');
var axios = require('axios');
var hashHistory = require('react-router').hashHistory;

var HotSauceStore = require('../stores/HotSauceStore');
var HotSauce = require('./HotSauce');


function getStateFromStore() {
  return {
    // hotSauces: HotSauceStore.getAll()
  };
}

var HotSauceGallery = React.createClass({
   getInitialState: function() {
      return {
        sauces: []
      }
   },
   componentDidMount: function() {
      var _this = this;
      this.serverRequest = 
        axios
        .get("../hotsauces.json")
        .then(function(result) {    
          console.log('test', result.data.list);
          _this.setState({
            sauces: result.data.list
          });
        });
   },
  viewDetails: function(idx) {
    alert(idx);
    hashHistory.push('details/0');
  },
   render: function() {
      var _this = this;
      var sauceList = this.state.sauces.map(function(sauce, idx) {
        return <HotSauce key={idx}
                      id={idx}
                      onClick={_this.viewDetails.bind(null, idx)}
                      info={sauce} />;
      });
      return (
         <div className='galleryContainer'>
          {sauceList}
         </div>
      );
   }
});

module.exports = HotSauceGallery;
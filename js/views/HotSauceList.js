var React = require('react');
var axios = require('axios');
var hashHistory = require('react-router').hashHistory;

var HotSauce = require('./HotSauce');


var HotSauceList = React.createClass({
   viewDetails: function(idx) {
      hashHistory.push('details/' + idx);
   },
   createHotSaucePanel: function(sauce, idx) {
      var _this = this;
      return <HotSauce key={idx}
                      id={idx}
                      onClick={_this.viewDetails.bind(null, idx)}
                      info={sauce} />;
   },
   render: function() {
      return (
         <div>
            <h1>Hot Sauce List</h1>
            <div className='galleryContainer'>
             {this.props.sauces.map(this.createHotSaucePanel)}
            </div>
         </div>
      );
   }
});

module.exports = HotSauceList;
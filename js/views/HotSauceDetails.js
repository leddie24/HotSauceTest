var React = require('react');
var Link = require('react-router').Link;


var HotSauceDetails = React.createClass({
   getInitialState: function() {
      var idx = this.props.params.id;
      var sauceInfo = this.props.sauces[idx];
      return {
         info: sauceInfo
      }
   },
   render: function() {
      return (
         <div className="sauceDetails">
            <div className="detailsLeft">
               <Link to="/">&lt; Back to Hot Sauce List</Link>
               <h1>{this.state.info.title}</h1>
               <div className="sauceImgContainer">
                  <img className="sauceImg tall" 
                        src={this.state.info.imageURL} 
                        />
               </div>
            </div>
            <div className="detailsRight">
               {this.state.info.description}
            </div>
         </div>
      );
   }
});

module.exports = HotSauceDetails;
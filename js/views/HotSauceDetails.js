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
   _onLoad: function(e) {
      console.log(e.target.offsetWidth);
   },
   render: function() {
      // var sauceInfo = this.state.info;
      // console.log('SAUCEINFO', sauceInfo);
      var sauceList = this.props.sauces[0];
      console.log('SAUCELIST', sauceList);
      console.log('STATE', this.state.info);

      var idx = this.props.params.id;
      console.log(idx, 'idx');
      return (
         <div className="sauceDetails">
            <div className="detailsLeft">
               <Link to="/">&lt; Back to Hot Sauce List</Link>
               <h1>{this.state.info.title}</h1>
               <div className="sauceImgContainer">
                  <img className="sauceImg" 
                        src={this.state.info.imageURL} 
                        onLoad={this._onLoad} />
               </div>
            </div>
            <div className="detailsRight">
               {this.state.info.description}
            </div>
         </div>
      );
   }
});

// <h1>{sauceInfo.title}</h1>
//             <img src={sauceInfo.imageURL} />
module.exports = HotSauceDetails;
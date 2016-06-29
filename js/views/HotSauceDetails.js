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
   _fixImage: function(e) {
      var target = e.currentTarget;
      var parent = target.parentElement;
      var pHeight = parent.offsetHeight;
      var pWidth = parent.offsetWidth;
      var factor;
      if (target.height >= target.width) {
         factor = pHeight / target.height;
         var height = target.height * factor;
         target.style.height = height + 'px';
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
                        onLoad={this._fixImage}/>
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
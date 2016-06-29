var React = require('react');
var Link = require('react-router').Link;

var HotSauce = React.createClass({
   // <Link className="test" to="/details" params={{id: this.props.id}}>
   viewDetails: function() {
      this.props.onClick();
   },
   render: function() {
      return (
         <div className="saucePanel"
               onClick={this.viewDetails}
               >
            <div className="sauceImgContainer">
               <img src={this.props.info.imageURL} 
                  alt={this.props.info.title} />
            </div>
            <div className="sauceTitle">
               <h2>{this.props.info.title}</h2>
               <p className="subtitle">{this.props.info.subtitle}</p>
            </div>
         </div>
      );
   }
});

module.exports = HotSauce;
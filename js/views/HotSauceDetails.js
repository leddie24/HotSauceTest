import React from "react";
import { Link } from "react-router";

export default class HotSauceDetails extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         imageClass: null
      };
      this.sauceInfo = null;
      this._getImageClass = this._getImageClass.bind(this);
      this._setImageClass = this._setImageClass.bind(this);
      this._setSauceInfo = this._setSauceInfo.bind(this);
   }

   // Update image class and global sauceInfo when the component receives props
   componentWillReceiveProps() {
      this._setSauceInfo();
   }

   // Sets the sauce info once props are passed
   _setSauceInfo() {
      this.sauceInfo = this.props.sauces[this.props.params.id];
      if (this.sauceInfo) {
         this._setImageClass(this.sauceInfo.imageURL);
      }
   }

   // Helper method to call getImageClass once component has props
   _setImageClass(url) {
      this._getImageClass(url, function(data) {
         this.setState({
            imageClass: data
         });
      }.bind(this));
   }

   // Helper method to set sauceImgContainer class to fit by width or height
   _getImageClass(url, callback) {
      let img = new Image();
      img.addEventListener("load", function(){
         let className = (this.naturalWidth >= this.naturalHeight) ? "wide" : "tall";
         callback(className);
      });
      img.src = url;
   }

   // Render empty div if sauceInfo or imageClass state is empty, otherwise render page
   render() {
      if (!this.sauceInfo || !this.state.imageClass) {
         return (<div></div>);
      } else {
         // Declare hot sauce background image url
         let imgStyle = { 
            backgroundImage: 'url(' + this.sauceInfo.imageURL + ')'
         };

         return (
            <div className="sauceDetails">
               <div className="detailsLeft">
                  <Link to="/">&lt; Back to Hot Sauce List</Link>
                  <h1>{this.sauceInfo.title}</h1>
                  <div className={"sauceImgContainer " + this.state.imageClass} style={imgStyle}>
                  </div>
               </div>
               <div className="detailsRight">
                  {this.sauceInfo.description}
               </div>
            </div>
         );
      }
   }
}

HotSauceDetails.propTypes = { sauces: React.PropTypes.array };
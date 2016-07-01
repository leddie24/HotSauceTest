import React from "react";
import { Link } from "react-router";

export default class HotSauceDetails extends React.Component {
   // Bind component functions and set state as sauces[:id]
   constructor(props) {
      super(props);
      this.state = {
         imageClass: null,
         sauceDetail: this.props.sauces[this.props.params.id]
      };
      this._getImageClass = this._getImageClass.bind(this);
      this._setImageClass = this._setImageClass.bind(this);
   }

   // If sauce details state is set, then set the image class
   componentWillMount() {
      if (this.state.sauceDetail) {
         this._setImageClass(this.state.sauceDetail.imageURL);
      }
   }

   // Helper method to call getImageClass if state.sauceDetails is set
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
      if (!this.state.sauceDetail || !this.state.imageClass) {
         return (<div></div>);
      } else {
         // Declare hot sauce background image url
         let imgStyle = { 
            backgroundImage: 'url(' + this.state.sauceDetail.imageURL + ')'
         };

         return (
            <div className="sauceDetails">
               <div className="detailsLeft">
                  <Link to="/">&lt; Back to Hot Sauce List</Link>
                  <h1>{this.state.sauceDetail.title}</h1>
                  <div className={"sauceImgContainer " + this.state.imageClass} style={imgStyle}>
                  </div>
               </div>
               <div className="detailsRight">
                  {this.state.sauceDetail.description}
               </div>
            </div>
         );
      }
   }
}

HotSauceDetails.propTypes = { sauces: React.PropTypes.array };
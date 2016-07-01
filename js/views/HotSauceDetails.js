import React from "react";
import { hashHistory } from "react-router";
import { Link } from "react-router";

export default class HotSauceDetails extends React.Component {
   // Bind component functions, set component sauceDetail property as sauces[:id]
   constructor(props) {
      super(props);
      this.state = {
         imageClass: null
      };
      this.sauceDetail = this.props.sauces[this.props.params.id];
      this._getImageClass = this._getImageClass.bind(this);
      this._setImageClass = this._setImageClass.bind(this);
   }

   // If sauce details state is set, then set the image class
   // Otherwise, route back to index page
   componentWillMount() {
      if (this.sauceDetail) {
         this._setImageClass(this.sauceDetail.imageURL);
      } else {
         hashHistory.push('/');
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
         let className = (this.naturalWidth > this.naturalHeight) ? "wide" : "tall";
         callback(className);
      });
      img.src = url;
   }

   // Render empty div if sauceInfo or imageClass state is empty, otherwise render page
   render() {
      if (!this.sauceDetail || !this.state.imageClass) {
         return (<div>
                     <div className="loader">Loading...</div>
                  </div>
               );
      } else {
         // Declare hot sauce background image url
         let imgStyle = { 
            backgroundImage: 'url(' + this.sauceDetail.imageURL + ')'
         };

         return (
            <div className="sauceDetails">
               <div className="detailsLeft">
                  <Link to="/">&lt; Back to Hot Sauce List</Link>
                  <h1>{this.sauceDetail.title}</h1>
                  <div className={"sauceImgContainer " + this.state.imageClass} style={imgStyle}>
                  </div>
               </div>
               <div className="detailsRight">
                  {this.sauceDetail.description}
               </div>
            </div>
         );
      }
   }
}

HotSauceDetails.propTypes = { sauces: React.PropTypes.array };
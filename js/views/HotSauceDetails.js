import React from "react";
import { Link } from "react-router";

export default class HotSauceDetails extends React.Component {
   constructor(props) {
      super(props);
      let idx = this.props.params.id;
      let sauceInfo = (this.props.sauces.length == 0) ? JSON.parse(localStorage.getItem('sauceList'))[idx] : this.props.sauces[idx];
      this.state = {
         info: sauceInfo,
         imageClass: null
      };
      this._getImageClass = this._getImageClass.bind(this);
   }

   // Set state to "wide" or "tall" for image height on component load
   componentWillMount() {
      this._getImageClass(this.state.info.imageURL, function(data){
         this.setState({
            imageClass: data
         });
      }.bind(this));
   }

   // Helper class to set sauceImgContainer class to fit by width or height
   _getImageClass(url, cb) {
      let img = new Image();
      img.addEventListener("load", function(){
         let className = (this.naturalWidth >= this.naturalHeight) ? "wide" : "tall";
         cb(className);
      });
      img.src = url;
   }

   render() {
      // Don't render unless image class is set
      if (!this.state.imageClass) {
         return (<div></div>);
      } else {
         let imgStyle = { 
            backgroundImage: 'url(' + this.state.info.imageURL + ')'
         };
         return (
            <div className="sauceDetails">
               <div className="detailsLeft">
                  <Link to="/">&lt; Back to Hot Sauce List</Link>
                  <h1>{this.state.info.title}</h1>
                  <div className={"sauceImgContainer " + this.state.imageClass} style={imgStyle}>
                  </div>
               </div>
               <div className="detailsRight">
                  {this.state.info.description}
               </div>
            </div>
         );
      }
   }
}

HotSauceDetails.propTypes = { sauces: React.PropTypes.array };
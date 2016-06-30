import React from "react";
import { Link } from "react-router";

export default class HotSauceDetails extends React.Component {
   constructor(props) {
      super(props);
      this._fixImage = this._fixImage.bind(this);
      let idx = this.props.params.id;
      let sauceInfo;
      if (this.props.sauces.length == 0) {
         sauceInfo = JSON.parse(localStorage.getItem('sauceList'))[idx];
      } else {
         sauceInfo = this.props.sauces[idx];
      }
      this.state = {
         info: sauceInfo
      };
   }
   
   _fixImage(e) {
      var target = e.currentTarget;
      if (target.height >= target.width) {
         var parent = target.parentElement;
         var pHeight = parent.offsetHeight;
         var pWidth = parent.offsetWidth;
         var factor = pHeight / target.height;
         var height = target.height * factor;
         target.style.height = height + 'px';
      }
   }

   render() {
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
}
import React from 'react';
import './like.css';
import firebase from "./firebase/firebase";


class LikeButton extends React.Component {
    state = {
      likes: 0
      
    };
    
  
    addLike = async () => {
      await firebase.firestore().collection('jokes').doc('1').update({
      likes: firebase.firestore.FieldValue.increment(1) 
      });
      this.setState({
      likes: this.state.likes + 1
      })
      }
  
    render() {
     
      const likes = this.state.likes;
      if (likes === 0) {
        return (
          <div>
            <button
              className="button"
              onClick={this.addLike} 
            > 
              <i className="far fa-heart fa-2x" style={{ color: "black" }}></i> {/*{this.state.likes} */}
            </button>
          </div>
        );
      }
      if (likes === 1) {
        return (
          <div>
            <button className="button" 
            onClick={this.addLike} id={this.props.dataId}>
              <i className="fas fa-heart fa-2x" style={{ color: "red" }}></i>  {/*{this.state.likes} */}
            </button>
          </div>
        );
      }
      // if (likes > 1) {
      //   return (
      //     <div>
      //       <button className="button" 
      //       onClick={this.addLike} >
      //         <i className="fas fa-heart fa-2x" style={{ color: "black" }}></i>{/*{" "}
      //         // {likes}*/}  {this.state.likes}
      //       </button>
      //     </div>
      //   );
      // }
    }
}
    
export default LikeButton;

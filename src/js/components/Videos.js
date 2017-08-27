import React, { Component } from 'react';
import middleButtonImg from './../../img/middlebutton.png';

class Videos extends Component {
  render() {
    return(
      <div>
        <div className="middle">
          <div className="middle-button">
            <img src={middleButtonImg} alt="Middle button" />
            <span>Videos</span>
          </div>

          <p className="middle-text">YT Stuff</p>
          <hr/>
        </div>

        <main role="main">
        </main>
      </div>
    );
  }
}

export default Videos;

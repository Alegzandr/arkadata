import React, { Component } from 'react';
import middleButtonImg from './../../img/middlebutton.png';

class Extension extends Component {
  render() {
    return(
      <div>
        <div className="middle">
          <div className="middle-button">
            <img src={middleButtonImg} alt="Middle button" />
            <span>Extension</span>
          </div>

          <p className="middle-text">When I'm live</p>
          <hr/>
        </div>

        <main role="main">
        </main>
      </div>
    );
  }
}

export default Extension;

import React, { Component } from 'react';
import middleButtonImg from './../../img/middlebutton.png';

class Playlists extends Component {
  render() {
    return(
      <div>
        <div className="middle">
          <div className="middle-button">
            <img src={middleButtonImg} alt="Middle button" />
            <span>Playlists</span>
          </div>

          <p className="middle-text">Music is life</p>
          <hr/>
        </div>

        <main role="main">
        </main>
      </div>
    );
  }
}

export default Playlists;

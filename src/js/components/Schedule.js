import React, { Component } from 'react';
import middleButtonImg from './../../img/middlebutton.png';

class Schedule extends Component {
  render() {
    return(
      <div>
        <div className="middle">
          <div className="middle-button">
            <img src={middleButtonImg} alt="Middle button" />
            <span>Schedule</span>
          </div>

          <p className="middle-text">When I'm live</p>
          <hr/>
        </div>

        <main role="main">
          <div>
            <div className="content">
              <h1>Schedule</h1>
              <br/><br/><br/>
              <p>Work in Progress ...</p>
              <br/><br/><br/><br/><br/><br/><br/>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Schedule;

import React, { Component } from 'react';
import middleButtonImg from './../../img/middlebutton.png';

function enableTheater(e) {
  e.preventDefault();

  const classes = ['body', '.middle-text', '.video'];
  const button = document.getElementById('theater-btn');

  for (let i in classes) {
    if (!document.querySelector(classes[i]).classList.contains('theater')) {
      document.querySelector(classes[i]).classList.add('theater');
    } else {
      document.querySelector(classes[i]).classList.remove('theater');
    }
  }

  if (button.textContent === 'Theater') {
    button.textContent = 'Exit theater';
  } else {
    button.textContent = 'Theater';
  }
}

class Stream extends Component {
  render() {
    return(
        <div>
          <div className="middle">
            <div className="middle-button">
              <img src={middleButtonImg} alt="Middle button" />
              <span>Stream</span>
            </div>

            <ul className="middle-text">
              <li>
                <a href="//www.twitch.tv/products/arkadataediting/ticket/new"
                  target="_blank" rel="noopener noreferrer">
                  Subscribe
                </a>
              </li>
              <li>
                <a href="//streamlabs.com/arkadataediting"
                  target="_blank" rel="noopener noreferrer">
                  Donate
                </a>
              </li>
              <li>
                <a href={undefined} id="theater-btn" onClick={enableTheater}>Theater</a>
              </li>
            </ul>
            <hr/>
          </div>

          <main role="main">
            <div>
              <div className="player">
                <iframe title="Twitch player"
                  src="//player.twitch.tv/?channel=arkadataediting&autoplay=true"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen="true"
                  className="video">
                </iframe>
              </div>

              <div className="content">
                <h1>Arkadata - Live</h1>
              </div>
            </div>
          </main>
        </div>
    );
  }
}

export default Stream;

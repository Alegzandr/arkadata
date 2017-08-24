import React, { Component } from 'react';
import { NavLink,  Route } from 'react-router-dom';
import Stream from './Stream';
import Schedule from './Schedule';
import Extension from './Extension';
import footerImg from './../../img/footer.png';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="menu">
            <ul>
              <li><NavLink exact to="/" activeClassName="active">Stream</NavLink></li>
              <li><NavLink to="/schedule" activeClassName="active">Schedule</NavLink></li>
              <li><NavLink to="/extension" activeClassName="active">Extension</NavLink></li>
              <li className="muted no-mobile">Preview</li>
            </ul>
          </div>

          <div className="banner"></div>
        </header>

        <Route exact path='/' component={Stream} />
        <Route path='/schedule' component={Schedule} />
        <Route path='/extension' component={Extension} />

        <aside>
          <div className="user">
            <span>Alegzandr</span>
          </div>

          <iframe title="Twitch chat"
            src="//www.twitch.tv/arkadataediting/chat?darkpopout="
            frameBorder="0"
            scrolling="no"
            width="310"
            className= "chat">
          </iframe>
        </aside>

        <footer>
          <div>
            <b>ARKADATA.COM &copy; 2017 &middot;</b> Tous droits réservés<br />
            <b>
              <a href="//twitter.com/Alegzandr" target="_blank"
                rel="noopener noreferrer">
                Report a bug
              </a> &middot;&nbsp;
              <a href="mailto:contact@arkadata.com">Contact</a> &middot;&nbsp;
              <a href={undefined}>Web Team</a>
            </b>
          </div>

          <img src={footerImg} alt="Sponsor" />
        </footer>
      </div>
    );
  }
}

export default App;

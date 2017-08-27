import React, { Component } from 'react';
import { NavLink,  Route } from 'react-router-dom';
import Stream from './Stream';
import Schedule from './Schedule';
import Playlists from './Playlists';
import Videos from './Videos';
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
              <li><NavLink to="/playlists" activeClassName="active">Playlists</NavLink></li>
              <li><NavLink to="/videos" activeClassName="active">Videos</NavLink></li>
              <li><NavLink to="/extension" activeClassName="active">Extension</NavLink></li>
            </ul>
          </div>

          <div className="banner"></div>
        </header>

        <Route exact path='/' component={Stream} />
        <Route path='/schedule' component={Schedule} />
        <Route path='/playlists' component={Playlists} />
        <Route path='/videos' component={Videos} />
        <Route path='/extension' component={Extension} />

        <aside>
          <div className="user">
          <a href={undefined} className="btn-connect">
            Log in with <i className="fa fa-twitch" aria-hidden="true"></i>
          </a>
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

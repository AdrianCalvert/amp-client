import './env'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import FaqPage from './FaqPage';
import WalletPage from './WalletPage'
import SettingsPage from './SettingsPage'
import LogoutPage from './LogoutPage'
import TradingPage from './TradingPage'

import { connect } from 'react-redux';

import SocketController from '../components/SocketController'
import { ConnectedRouter } from 'connected-react-router'

import history from '../store/history'


import '../styles/css/index.css'

const App = () => {
  return (
      <ConnectedRouter history={history}>
        <SocketController>
          <Layout>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/faq" component={FaqPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/wallet" component={WalletPage} />
              <Route path="/settings" component={SettingsPage} />
              <Route path="/logout" component={LogoutPage} />
              <Route path="/trade" component={TradingPage} />
            </Switch>
          </Layout>
        </SocketController>
      </ConnectedRouter>

  )
}

export default connect((state) => {
  return {
    location: state.router.location.pathname
  }
})(App)

import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Background from './food-bg.jpg';

const App = ({total}) => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={total}/>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/cart" component={CartPage}/>
                <Route exact component={MainPage}/>
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        total: state.total
    }
}

export default connect(mapStateToProps)(App);
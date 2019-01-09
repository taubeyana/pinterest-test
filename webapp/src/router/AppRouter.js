import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserView, MobileView } from "react-device-detect";
import Header from '../components/header/Header';
import PinsFeed from '../components/pins-feed/PinsFeed';
import PinPage from '../components/pins-feed/components/pin/components/pin-page/PinPage'
import UnderConstruction from '../common/under-construction/UnderConstruction';
import NotFoundPage from '../common/not-found-page/NotFoundPage';
import ProfilePage from '../components/profile-page/ProfilePage';
import FloatingMenu from '../components/pins-feed/components/floating-menu/FloatingMenu'
import Footer from '../components/footer/Footer'
import Search from '../common/search/Search'

const AppRouter = () => (
    <BrowserRouter> 
        <Fragment>
            <BrowserView>
                <Header/>
                <FloatingMenu />
            </BrowserView>
            <Switch>
                <Route exact path = '/' component = { PinsFeed }/>
                <Route path = '/explore' component = { UnderConstruction }/>
                <Route path = '/following' component = { UnderConstruction }/>
                <Route path = '/pins/:id' component = { PinPage }/>
                <Route path = '/taubeyana' component = { ProfilePage }/>
                <Route component = { NotFoundPage } />
            </Switch>
            <MobileView>
                <Search className = 'mobile-search search'/>
                <Footer/>
            </MobileView>
        </Fragment>
    </BrowserRouter>
)
                
export default AppRouter
                
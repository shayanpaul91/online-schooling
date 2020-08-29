import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';
import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom';
import Dashboard from './dashboard';
import EducationService from './educational-service';
import HealthSerice from './health-service';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Router>
                    <Switch>
                        <Route path='/' exact component={Dashboard}></Route>
                        <Route path='/education-service' exact component={EducationService}></Route>
                        <Route path='/health-service' exact component={HealthSerice}></Route>
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}
import React from 'react';
import DashboardCarousel from './dashboard-carousel';
import { Redirect } from "react-router-dom";
export default class Dashboard extends React.Component {
    state = { redirect: null };
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <DashboardCarousel />
                <h4 className="ui horizontal divider header">
                    <i className="tag icon"></i>
                Services
                </h4>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="ui placeholder segment" style={{ cursor: 'pointer' }}>
                            <div className="ui two column stackable center aligned grid">
                                <div className="ui vertical divider">Or</div>
                                <div className="middle aligned row" onClick={this.route = () => {
                                        this.setState({
                                            redirect: "/education-service"
                                        });
                                    }}>
                                    <div className="column" >
                                        <div className="ui icon header">
                                            <i className="search icon"></i>
                                        Educational Service
                                        </div>
                                        <div className="field">
                                            <div className="ui search">
                                                <div className="ui icon input">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column" onClick={this.route = () => {
                                        this.setState({
                                            redirect: "/health-service"
                                        });
                                    }}>
                                        <div className="ui icon header">
                                            <i className="search icon"></i>
                                        Health Service
                                        </div>
                                        <div className="field">
                                            <div className="ui search">
                                                <div className="ui icon input">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ui placeholder segment" style={{ paddingTop: '20px', cursor: 'pointer' }}>
                            <div className="ui two column stackable center aligned grid">
                                <div className="ui vertical divider">Or</div>
                                <div className="middle aligned row">
                                    <div className="column">
                                        <div className="ui icon header">
                                            <i className="search icon"></i>
                                        Delivery Service
                                        </div>
                                        <div className="field">
                                            <div className="ui search">
                                                <div className="ui icon input">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="ui icon header">
                                            <i className="search icon"></i>
                                        Transit Service
                                        </div>
                                        <div className="field">
                                            <div className="ui search">
                                                <div className="ui icon input">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ui placeholder segment" style={{ cursor: 'pointer' }}>
                            <div className="ui icon header">
                                <i className="play icon"></i>
                                    Entertainment
                            </div>
                        </div>
                    </div>

                    <div className="col-md"></div>
                </div>
            </div>
        )
    }
}
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
export default class Footer extends React.Component {

    render() {
        return (
            <Jumbotron style={{ marginTop: '20px', marginBottom: '0px' }}>
                <div className="row">
                    <div className="col-md-3">
                        <h3 style={{ textAlign: 'center' }}><i className="heart outline icon"></i>Create Blog</h3>
                    </div>
                    <div className="col-md-3">    <h3 style={{ textAlign: 'center' }}>
                    <i className="play icon"></i>Entertainment</h3>
                    </div>
                    <div className="col-md-3">    <h3 style={{ textAlign: 'center' }}>
                    <i className="home icon"></i>Home</h3>
                    </div>
                    <div className="col-md-3">    <h3 style={{ textAlign: 'center' }}><i className="blogger b icon"></i>Blogs</h3>
                    </div>
                </div>
            </Jumbotron>
        )
    }
}
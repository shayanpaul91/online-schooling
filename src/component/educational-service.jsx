import React from 'react';
import { Redirect } from "react-router-dom";
const data = require('./../assets/json_files/school.json');
export default class EducationService extends React.Component {
    state = { selected: false, type: '', classId: '' };
    render() {
        let isSelected = this.state.selected;
        if (this.state.classId) {
            return <Redirect to={`/subject-list/${this.state.classId}/ ${this.state.type}`} />
        }
        return (
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-9">
                    <div className="row" >
                        Education SErvice logo
                        </div>
                    <div className="ui three column grid">
                        <div className="column">
                            <div className="ui raised segment">
                                <span style = {{cursor: 'pointer'}} className="ui red ribbon label" onClick={this.route = () => {
                                    this.setState({
                                        selected: true,
                                        type: 'SEBA - English'
                                    });
                                }}>English</span>
                                <span>SEBA</span>
                                <p></p>
                                <span style = {{cursor: 'pointer'}} className="ui teal right ribbon label" onClick={this.route = () => {
                                    this.setState({
                                        selected: true,
                                        type: 'SEBA - Assamese'
                                    });
                                }}>Assamese</span>
                                <p></p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui raised segment">
                                <a className="ui red ribbon label" onClick={this.route = () => {
                                    this.setState({
                                        selected: true,
                                        type: 'CBSE - English'
                                    });
                                }}>English</a>
                                <span>CBSE</span>
                                <p></p>
                                <a className="ui teal right ribbon label" onClick={this.route = () => {
                                    this.setState({
                                        selected: true,
                                        type: 'SEBA - Assamese'
                                    });
                                }}>Assamese</a>
                                <p></p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui raised segment">
                                <a className="ui red ribbon label">English</a>
                                <span>HS</span>
                                <p></p>
                                <a className="ui teal right ribbon label">Assamese</a>
                                <p></p>
                            </div>
                        </div>
                    </div>

                    {isSelected ? (
                        <div style={{ paddingTop: '20px' }}>
                            <h4 className="ui horizontal divider header">
                                <i className="tag icon"></i>
                                {this.state.type}
                            </h4>
                            <table className="ui celled table">
                                <thead>
                                    <tr>
                                        <th>Common</th>
                                        <th>School/College</th>
                                        <th>Teachers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((data, i) => (
                                        <tr key={i}>
                                            <td style={{ cursor: 'pointer' }} onClick={() => {
                                                this.setState({
                                                    classId: data.class
                                                });
                                            }}>{data.class}</td>

                                            <td>
                                                {
                                                    data.institution.map((inst, index) => {
                                                        return <div key={index}>{inst.name} <br /></div>
                                                    })}
                                            </td>
                                            <td>
                                                {
                                                    data.teacher.map((teacher, index) => {
                                                        return <div key={index}>{teacher.name} <br /></div>
                                                    })}
                                            </td>
                                        </tr>))}

                                </tbody>
                            </table>
                        </div>) : ''
                    }
                </div>
                <div className="col-md"></div>
            </div>

        )
    }
}
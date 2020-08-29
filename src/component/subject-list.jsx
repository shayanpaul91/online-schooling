import React from 'react';
import { Redirect } from "react-router-dom";
const data = require('./../assets/json_files/subject.json');

export default class SubjecList extends React.Component {
    state = { info: '', classInfo: '' };
    componentDidMount() {
        if (this.props.match.params.type) {
            const data = this.props.match.params;
            this.setState({
                info: data.class + '-' + data.type
            });
        }

    }
    render() {
        if (this.state.classInfo) {
            return <Redirect to={`/view-files/${this.state.classInfo}`} />
        }
        let content = [];
        let subjectList;
        if (this.props.match.params) {
            const list = this.props.match.params;
            subjectList = data.map((value) => {
                if (list.class === value.class) {
                    return value.subject;
                }
            });

            if (subjectList[0]) {
                const type = list.type.split('-')[1].trim().toLowerCase();
                subjectList[0].map((value, i) => {
                    if (value.type === type) {
                        if ((i + 1) % 6 === 0) {
                            content.push(
                                <div className="row" key={i}>
                                    <div className="card" className="col-md-4">
                                        <div className="image">
                                            <img src={require('./../assets/images/school_girl.jpg')} alt="img" width="300" />
                                        </div>
                                        <div className="content">
                                            <div className="header" style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    this.setState({
                                                        classInfo: value.id
                                                    });
                                                }}>
                                                {value.subjectName}
                                            </div>

                                            <div className="description">
                                                Matthew is an interior designer living in New York.
                                            </div>
                                        </div>
                                        <div className="extra content">
                                            <span className="right floated">
                                                Number of courses : 200
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            content.push(<div className="card" key={i} className="col-md-4">
                                <div className="image">
                                    <img src={require('./../assets/images/school_girl.jpg')} alt="img" width="300" />
                                </div>
                                <div className="content">
                                    <div className="header" style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            this.setState({
                                                classInfo: value.id
                                            });
                                        }}>
                                        {value.subjectName}
                                    </div>
                                    <div className="description">
                                        {value.description}
                                    </div>
                                </div>
                                <div className="extra content">
                                    <span className="right floated">
                                        Number of courses : 200
                                            </span>

                                </div>
                            </div>);
                        }
                    }

                })
            }
        }
        return (
            <div className="row" style={{ marginTop: '20px' }}>
                <div className="col-md-1">
                </div>
                <div className="col-md-9">
                    <div >
                        <h4 className="ui horizontal divider header">
                            <i className="tag icon"></i>
                            {this.state.info}
                        </h4>
                        <h3 style={{ textAlign: 'center' }}>Subjects</h3>
                        <div className="ui link cards" style={{ marginTop: '20px' }}>
                            {content}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
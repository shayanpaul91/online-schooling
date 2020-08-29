import React from 'react';
const data = require('./../assets/json_files/videos.json');
export default class ViewFiles extends React.Component {

    componentDidMount() {


    }

    render() {
        let list, content = [];
        if (this.props.match.params.id) {
            const id = this.props.match.params.id;
            list = data.map((value, index) => {
                if (value.id === id) {
                    return value.video;
                }
            }).pop();
        }
        if (list) {
            list.map((value, i) => {

                if ((i + 1) % 6 === 0) {
                    content.push(
                        <div className="row" key={i}>
                            <div className="card" className="col-md-4">
                                <div className="image">
                                <video src={require('./../assets/videos/video_1.mp4')} width="50" controls="controls" />
                                </div>
                                <div className="extra content">
                                    <span className="right floated">
                                      {value.name}
                                        </span>

                                </div>
                            </div>
                        </div>
                    )
                } else {
                    content.push(<div className="card" key={i} className="col-md-4">
                        <div className="image">
                        <video src={require('./../assets/videos/video_1.mp4')} width="400" controls="controls" />
                        </div>
                        <div className="extra content">
                            <span className="right floated">
                            {value.name}
                                        </span>

                        </div>
                    </div>);
                }

            })
        }
        return (
            <div className="row" style={{ marginTop: '20px' }}>
                <div className="col-md-1">
                </div>
                <div className="col-md-9">
                    <div >
                        <h4 className="ui horizontal divider header">
                            <i className="video icon"></i>
                            Videos
                        </h4>

                        <div className="ui link cards" style={{ marginTop: '20px' }}>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
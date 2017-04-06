import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

class Link extends Component {
	constructor(props) {
		super(props);
		this.state = {term : ''};
	}
	
	render() {
		return (
				<div className="video-detail col-md-8">
					<button className="btn btn-default" onClick={() => this.onButtonChange(this.props.keyword)}>
						{this.props.keyword}
					</button>
				</div>
		);
	}
	onButtonChange(term) {
		this.setState({term});
		this.props.onButtonTermChange(term);
	}
	
}


export default Link;
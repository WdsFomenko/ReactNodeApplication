import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as postActions from '../../actions/postActions';
import * as userActions from '../../actions/userActions';

import {
	Panel, Grid, Row, Col
} from 'react-bootstrap';

import {Post} from '../../components';

class Posts extends Component {

	render() {

		let {posts} = this.props.posts;
		let elements = posts.map((item, i) => {
			return ( <Row key={item.idf}>
					<Col xs={12} key={i}>
						<Post items={item}/>
					</Col>
				</Row>
			)
		});

		return (
			<div className='row'>
				<Panel>
					<Grid>
						{elements}
					</Grid>
				</Panel>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		posts: state.posts
	}
}
function mapDispatchToProps(dispatch) {
	return {
		userActions: bindActionCreators(userActions, dispatch),
		postActions: bindActionCreators(postActions, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);

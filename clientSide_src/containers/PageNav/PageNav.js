import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as postActions from '../../actions/postActions';
import * as userActions from '../../actions/userActions';


import {Nav, NavItem, Navbar} from 'react-bootstrap';

class PageNav extends Component {

	render() {
		const {user} = this.props.user;
		const {logOut} = this.props.userActions;
		return (
			<div className='row'>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							Приветствуем Вас, {user.name}!
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem eventKey={1} href="#/products">Каталог</NavItem>
						<NavItem eventKey={2} href="#/useredit">Профиль пользователя</NavItem>
					</Nav>
					<Nav pullRight>
						<NavItem eventKey={3} onClick={() => logOut()}>Выйти</NavItem>
					</Nav>
				</Navbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(PageNav);

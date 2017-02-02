//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import {PageNav} from '../../containers'

export default class App extends Component {
	render() {
		return (
			<div className='row'>
				<PageNav/>
				{this.props.children}
			</div>
		)
	}
}



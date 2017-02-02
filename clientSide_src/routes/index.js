import React from 'react';
import {Route, IndexRoute}  from 'react-router';
import {App} from '../components';
import {LogIn, PostEdit, UserEdit, Posts} from '../containers'

export default function routes() {

	return (
		<Route component={App} path='/'>
			<IndexRoute component={LogIn}/>
			<Route component={LogIn} path='/login'/>
			<Route component={PostEdit} path='/postedit'/>
			<Route component={UserEdit} path='/useredit'/>
			<Route component={Posts} path='/products'/>
		</Route>
	);
}
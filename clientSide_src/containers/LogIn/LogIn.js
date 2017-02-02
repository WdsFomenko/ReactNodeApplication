import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as postActions from '../../actions/postActions';
import * as userActions from '../../actions/userActions';

import {
	Panel, Button, FormGroup,
	ControlLabel, FormControl, HelpBlock, Well,
	Grid, Row, Col
} from 'react-bootstrap';

class LogIn extends Component {

	onLoginSubmit() {
		const {checkLog} = this.props.userActions;
		checkLog.apply(this);
	}

	render() {

		function FieldGroup({id, label, help, ...props}) {
			return (
				<FormGroup controlId={id}>
					<ControlLabel>{label}</ControlLabel>
					<FormControl {...props} />
					{help && <HelpBlock>{help}</HelpBlock>}
				</FormGroup>
			);
		}

		return (
			<div className='ib page'>
				<Panel>
					<h3 className="text-center">Введите ваши регистрационные данные для входа!</h3>
					<Grid>
						<Row className="show-grid">
							<Col xs={6} xsOffset={3}>
								<Well>
									<form>
										<FieldGroup
											id="formControlsEmail"
											type="email"
											label="Email address"
											placeholder="Enter email"
										/>
										<FieldGroup
											id="formControlsPassword"
											label="Password"
											type="password"
										/>
										<Button type="submit" onClick={::this.onLoginSubmit}>
											Войти
										</Button>
									</form>
								</Well>
							</Col>
						</Row>
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
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
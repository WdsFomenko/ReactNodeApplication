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

class UserEdit extends Component {

	onUserSave() {
	}

	onUserLogOut() {
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
			<div className='row'>
				<Panel>
					<h3 className="text-center">Форма редактирования профиля пользователя</h3>
					<Grid>
						<Row className="show-grid">
							<Col xs={6} xsOffset={3}>
								<Well>
									<form>
										<FieldGroup
											id="formControlsName"
											type="text"
											label="Имя пользователя"
											placeholder="Укажите имя поьзователя"
										/>
										<FieldGroup
											id="formControlsSurname"
											type="text"
											label="Фамилия пользователя"
											placeholder="Укажите фамилию пользователя"
										/>
										<FieldGroup
											id="formControlsEmail"
											type="email"
											label="Email"
											help="Укажите адрес почты"
										/>
										<FieldGroup
											id="formControlsPhone"
											type="phone"
											label="Phone"
											help="Укажите контактный номер"
										/>
										<Button type="submit" onClick={::this.onUserSave}>
											Сохранить изменения
										</Button>
										<Button onClick={::this.onUserLogOut}>
											Выйти
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
export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);

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

class PostEdit extends Component {

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
					<h3 className="text-center">Форма редактирования карточки товара</h3>
					<Grid>
						<Row className="show-grid">
							<Col xs={6} xsOffset={3}>
								<Well>
									<form>
										<FieldGroup
											id="formControlsName"
											type="text"
											label="Наименование товара"
											placeholder="Укажите наименование товара"
										/>
										<FieldGroup
											id="formControlsPrise"
											type="text"
											label="Цена товара"
											placeholder="Укажите стоимость товара"
										/>
										<FieldGroup
											id="formControlsFile"
											type="file"
											label="Внешний вид"
											help="Можете добавить фото товара."
										/>
										<FormGroup controlId="formControlsTextarea">
											<ControlLabel>Описание товара</ControlLabel>
											<FormControl componentClass="textarea" placeholder="Краткое описание товара"/>
										</FormGroup>
										<Button type="submit" onClick={::this.onUserSave}>
											Сохранить изменения
										</Button>
										<Button onClick={::this.onUserLogOut}>
											Удалить товар
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

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);

import React, {Component} from 'react';


import {Well, Grid, Row, Col, Image, Button} from 'react-bootstrap';

export default class Post extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item: this.props.items,
			showDescription: false
		};
	}

	onShowDescription() {
		this.setState({showDescription: !this.state.showDescription});
	}

	onEditCurrentProduct() {
		location.hash = '#/postedit';
	}

	render() {
		let {name, img, prise, description} = this.state.item;

		return <div className='ib page'>
			<Well>
				<Grid>
					<Row className="show-grid">
						<Col xs={4}>
							<Image src={img} className='previewImg'/>
						</Col>
						<Col xs={8}>
							<Grid>
								<Row>
									<Col xs={7}>
										Наименование товара: {name}
									</Col>
								</Row>
								<Row>
									<Col xs={7}>
										Цена товара: {prise}
									</Col>
								</Row>
								<Row>
									<Col xs={7}>
										<Button onClick={::this.onEditCurrentProduct}>Изменить карточку товара</Button>
										<Button onClick={::this.onShowDescription}>
											{this.state.showDescription ? 'Скрыть описание' : 'Узнать подробнее'}
										</Button>
										<div className={this.state.showDescription ? '' : 'noneDescription'}>
											<p>Краткое описание: </p>
											<p className='textDescription'>{description}</p>
										</div>
									</Col>
								</Row>
							</Grid>
						</Col>
					</Row>
				</Grid>
			</Well>
		</div>
	}
}


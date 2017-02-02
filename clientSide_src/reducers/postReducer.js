const initialState = {
	posts: [
		{
			idf: 101,
			name: 'Product1',
			img: 'http://madcar.ru/images/cars/Chrysler_300C_2006_15.jpg',
			prise: '125.5',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.?'
		},
		{
			idf: 102,
			name: 'Product2',
			img: 'http://getbg.net/upload/full/84082_bmw_7-er_1920x1200_(www.GetBg.net).jpg',
			prise: '133.5',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci amet assumenda aut.?'
		},
		{
			idf: 103,
			name: 'Product3',
			img: 'http://deswal.ru/cars/chrysler/1600-1200/00000064.jpg',
			prise: '125.5',
			description: 'deserunt earum inventore ipsum maxime necessitatibus officiis, perspiciatis quis sed'
		},
		{
			idf: 104,
			name: 'Product4',
			img: 'http://madcar.ru/images/cars/Chrysler_300C_2006_15.jpg',
			prise: '125.5',
			description: 'ipsum maxime necessitatibus officiis, perspiciatis quis sed'
		},
		{
			idf: 105,
			name: 'Product5',
			img: 'http://getbg.net/upload/full/84082_bmw_7-er_1920x1200_(www.GetBg.net).jpg',
			prise: '125.5',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
		{
			idf: 106,
			name: 'Product6',
			img: 'http://deswal.ru/cars/chrysler/1600-1200/00000064.jpg',
			prise: '125.5',
			description: 'Accusantium adipisci amet assumenda aut commodi deserunt earum inventore ipsum.?'
		}
	],
	currentPost: {
		idf: 0,
		name: '',
		img: '',
		prise: 0,
		description: ''
	},
	currentPage: 0,
	pageLimit: 10
};

export default function posts(state = initialState) {
	return state
}

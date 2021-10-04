const popularData = [
    {
        id: "1",
        image: require('../images/pizza1.png'),
        title: 'Primavera Pizza',
        weight: '540 gr',
        raiting: '5.0',
        price: 3.99,
        size: 'Medium 14"',
        crust: 'Thin Crust',
        delivery: 30,
        ingridients: [{
            id: '1',
            name: 'ham',
            image: require('../images/ham.png')
        },
        {
            id: '2',
            name: 'ham',
            image: require('../images/tomato.png')
        },
        {
            id: '3',
            name: 'ham',
            image: require('../images/garlic.png')
        },
        {
            id: '4',
            name: 'ham',
            image: require('../images/cheese.png')
        }]
        ,
    },
    {
        id: "2",
        image: require('../images/pizza2.png'),
        title: 'Vegatarian Pizza',
        weight: '480 gr',
        raiting: '4.7',
        price: 4.79,
        size: 'Medium 18"',
        crust: 'Thin Crust',
        delivery: 40,
        ingridients: [{
            id: '1',
            name: 'ham',
            image: require('../images/ham.png')
        },
        {
            id: '2',
            name: ' cheese',
            image: require('../images/cheese.png')
        },
        {
            id: '3',
            name: 'ham',
            image: require('../images/garlic.png')
        },
        {
            id: '4',
            name: 'ham',
            image: require('../images/tomato.png')
        }]
    },
    {
        id: '3',
        image: require('../images/pizza3.png'),
        title: 'Pepperoni Pizza',
        weight: '740 gr',
        raiting: '4.6',
        price: 2.89,
        size: 'Small 10"',
        crust: 'Thin Crust',
        delivery: 20,
        ingridients: [{
            id: '1',
            name: 'ham',
            image: require('../images/ham.png')
        },
        {
            id: '2',
            name: ' cheese',
            image: require('../images/cheese.png')
        },
        {
            id: '3',
            name: 'ham',
            image: require('../images/tomato.png')
        },
        {
            id: '4',
            name: 'ham',
            image: require('../images/cheese.png')
        }]
    }
];
export default popularData;
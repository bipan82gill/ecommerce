import bcrypt from 'bcryptjs';

const data ={
    users:[
        {
            name:"Bipan",
            email:"bipan82.ca@gmail.com",
            password:bcrypt.hashSync('1234',8),
            isAdmin:true,
        },
        {   name:"user",
            email:"user@gmail.com",
            password: bcrypt.hashSync('1234',8),
            isAdmin:false,
        }
    ],
    products:[
        {
            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description: 'high quality product',
        },
        {
            name:'Adidas Fit Shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price:150,
            countInStock: 10,
            brand:'Adidas',
            rating:4.2,
            numReviews:7,
            description: 'high quality product',
        },
        {
            name:'Lacoste Slim Shirt',
            category:'Shirts',
            image:'/images/p3.jpg',
            price:220,
            countInStock: 3,
            brand:'Lacoste',
            rating:5,
            numReviews:12,
            description: 'high quality product',
        },
        {
            name:'Nike Pants',
            category:'Pants',
            image:'/images/p4.jpg',
            price:90,
            countInStock: 7,
            brand:'Nike',
            rating:4.5,
            numReviews:13,
            description: 'high quality product',
        },
        {
            name:'Puma Slim Pant',
            category:'Pants',
            image:'/images/p5.jpg',
            price:120,
            countInStock:0,
            brand:'Puma',
            rating:3.5,
            numReviews:15,
            description: 'high quality product',
        },
        {
            name:'Adidas Slim Pant',
            category:'Pants',
            image:'/images/p6.jpg',
            price:127,
            countInStock: 6,
            brand:'Adidas',
            rating:2.8,
            numReviews:15,
            description: 'high quality product',
        }
    ]
 }
 export default data;
  
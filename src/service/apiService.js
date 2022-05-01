import axios from "axios";
import pet_1 from "../assets/pet-1.jpg"
import pet_2 from "../assets/pet-2.jpg"
import pet_3 from "../assets/pet-3.jpg"
import pet_4 from "../assets/pet-4.jpg"
import pet_5 from "../assets/pet-5.jpg"
import pet_7 from "../assets/pet-7.jpg"
import pet_8 from "../assets/pet-8.jpg"
import pet_9 from "../assets/pet-9.jpg"
import pet_10 from "../assets/pet-10.jpg"
import pet_11 from "../assets/pet-11.jpg"
import pet_12 from "../assets/pet-12.jpg"
import pet_13 from "../assets/pet-13.jpg"

export const petList = [
 {
     name: 'Germanian Cockapo',
     category: 'Little Dogs',
     price: '$250',
     img: pet_1,
     favourite: false,
 },
 {
    name: 'Germanian Little pug',
    category: 'Little Dogs',
    price: '$150',
    img: pet_2,
    favourite: false,
},{
    name: 'England Bulldogs',
    category: 'Little Dogs',
    price: '$551',
    img: pet_3,
    favourite: false,
},{
    name: 'German Shepherd',
    category: 'Little Dogs',
    price: '$450',
    img: pet_4,
    favourite: false,
},
{
    name: 'American Eskimo Dog',
    category: 'Little Dogs',
    price: '$999',
    img: pet_5,
    favourite: false,
},
{
   name: 'American Leopard Hound',
   category: 'Little Dogs',
   price: '$199',
   img: pet_7,
   favourite: false,
},{
   name: 'Dutch Shepherd',
   category: 'Little Dogs',
   price: '$250',
   img: pet_8,
   favourite: false,
},{
   name: 'Affenpinscher',
   category: 'Little Dogs',
   price: '$1000',
   img: pet_9,
   favourite: false,
},
];


export function loginApi(data) {
   return  axios.post('https://reqres.in/api/login',data)
}

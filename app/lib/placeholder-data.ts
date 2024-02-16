const description =
  "A state-of-the-art bike combining innovation, performance, and style. With its lightweight carbon fiber frame and advanced suspension system, it effortlessly conquers any terrain. Precision-shifting gears and high-performance disc brakes ensure unparalleled control and responsiveness. Its sleek design and vibrant colors make a bold statement wherever you ride. Whether you're a seasoned cyclist seeking adventure or a casual rider exploring new paths, the Velocity Vortex is your ultimate companion. Experience the thrill of the open road like never before.";

const products = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'blue bike',
    category: 'road bike',
    price: 299,
    description: description,
    image_url: '/products/blue.png',
    slug: 'blue-bike-blue-black',
    strip_id: '',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'bulls bike',
    category: 'road bike',
    price: 399,
    description: description,
    image_url: '/products/bulls.png',
    slug: 'bulls-bike-red',
    strip_id: '',
  },

  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'mrx bike',
    category: 'road bike',
    price: 259,
    description: description,
    image_url: '/products/mrx.png',
    slug: 'mrx-bike-red-white',
    strip_id: '',
  },

  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'polygon bike',
    category: 'professional bike',
    price: 499,
    description: description,
    image_url: '/products/polygon.png',
    slug: 'polygon-bike-blue-white',
    strip_id: '',
  },

  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'scott bike',
    category: 'extreme bike',
    price: 299,
    description: description,
    image_url: '/products/scott.png',
    slug: 'scott-bike-black-green',
    strip_id: '',
  },

  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'trek bike',
    category: 'professional bike',
    price: 399,
    description: description,
    image_url: '/products/trek.png',
    slug: 'trek-bike-red-white',
    strip_id: '',
  },
];

// as of now we are setting all products as hot selling
const hotSellingProducts = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'blue bike',
    category: 'road bike',
    price: 299,
    description: description,
    image_url: '/products/blue.png',
    slug: 'blue-bike-blue-black',
    strip_id: '',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'bulls bike',
    category: 'road bike',
    price: 399,
    description: description,
    image_url: '/products/bulls.png',
    slug: 'bulls-bike-red',
    strip_id: '',
  },

  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'mrx bike',
    category: 'road bike',
    price: 259,
    description: description,
    image_url: '/products/mrx.png',
    slug: 'mrx-bike-red-white',
    strip_id: '',
  },

  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'polygon bike',
    category: 'professional bike',
    price: 499,
    description: description,
    image_url: '/products/polygon.png',
    slug: 'polygon-bike-blue-white',
    strip_id: '',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'trek bike',
    category: 'professional bike',
    price: 399,
    description: description,
    image_url: '/products/trek.png',
    slug: 'trek-bike-red-white',
    strip_id: '',
  },
];

module.exports = {
  hotSellingProducts,
  products,
};

import categoryItems from "@/sections/Categories/categoryItems";

const collectionGroups = [
  {
    isActive: true,
    title: 'Movies',
    items: [
      {
        title: 'Our Genres',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/action-1.jpg',
              '/src/assets/images/categories/action/action-2.jpg',
              '/src/assets/images/categories/action/action-3.jpg',
              '/src/assets/images/categories/action/action-4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/adventure-1.jpg',
              '/src/assets/images/categories/adventure/adventure-2.jpg',
              '/src/assets/images/categories/adventure/adventure-3.jpg',
              '/src/assets/images/categories/adventure/adventure-4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/comedy-1.jpg',
              '/src/assets/images/categories/comedy/comedy-2.jpg',
              '/src/assets/images/categories/comedy/comedy-3.jpg',
              '/src/assets/images/categories/comedy/comedy-4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/drama-1.jpg',
              '/src/assets/images/categories/drama/drama-2.jpg',
              '/src/assets/images/categories/drama/drama-3.jpg',
              '/src/assets/images/categories/drama/drama-4.jpg',
            ],
          },

          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/action-1.jpg',
              '/src/assets/images/categories/action/action-2.jpg',
              '/src/assets/images/categories/action/action-3.jpg',
              '/src/assets/images/categories/action/action-4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/adventure-1.jpg',
              '/src/assets/images/categories/adventure/adventure-2.jpg',
              '/src/assets/images/categories/adventure/adventure-3.jpg',
              '/src/assets/images/categories/adventure/adventure-4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/comedy-1.jpg',
              '/src/assets/images/categories/comedy/comedy-2.jpg',
              '/src/assets/images/categories/comedy/comedy-3.jpg',
              '/src/assets/images/categories/comedy/comedy-4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/drama-1.jpg',
              '/src/assets/images/categories/drama/drama-2.jpg',
              '/src/assets/images/categories/drama/drama-3.jpg',
              '/src/assets/images/categories/drama/drama-4.jpg',
            ],
          },

          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/action-1.jpg',
              '/src/assets/images/categories/action/action-2.jpg',
              '/src/assets/images/categories/action/action-3.jpg',
              '/src/assets/images/categories/action/action-4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/adventure-1.jpg',
              '/src/assets/images/categories/adventure/adventure-2.jpg',
              '/src/assets/images/categories/adventure/adventure-3.jpg',
              '/src/assets/images/categories/adventure/adventure-4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/comedy-1.jpg',
              '/src/assets/images/categories/comedy/comedy-2.jpg',
              '/src/assets/images/categories/comedy/comedy-3.jpg',
              '/src/assets/images/categories/comedy/comedy-4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/drama-1.jpg',
              '/src/assets/images/categories/drama/drama-2.jpg',
              '/src/assets/images/categories/drama/drama-3.jpg',
              '/src/assets/images/categories/drama/drama-4.jpg',
            ],
          },

          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/action-1.jpg',
              '/src/assets/images/categories/action/action-2.jpg',
              '/src/assets/images/categories/action/action-3.jpg',
              '/src/assets/images/categories/action/action-4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/adventure-1.jpg',
              '/src/assets/images/categories/adventure/adventure-2.jpg',
              '/src/assets/images/categories/adventure/adventure-3.jpg',
              '/src/assets/images/categories/adventure/adventure-4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/comedy-1.jpg',
              '/src/assets/images/categories/comedy/comedy-2.jpg',
              '/src/assets/images/categories/comedy/comedy-3.jpg',
              '/src/assets/images/categories/comedy/comedy-4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/drama-1.jpg',
              '/src/assets/images/categories/drama/drama-2.jpg',
              '/src/assets/images/categories/drama/drama-3.jpg',
              '/src/assets/images/categories/drama/drama-4.jpg',
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'Trending Now',
        movieItems:  [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movies-1.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'Kisi Ka Bhai Kisi Ki Jaan',
            imgSrc: '/src/assets/images/movies/movies-2.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Suraj pe Mangal Bhari',
            imgSrc: '/src/assets/images/movies/movies-3.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/movies-4.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'Ant-Man',
            imgSrc: '/src/assets/images/movies/movies-5.jpg',
            duration: '1h 42min',
            views: '5K'
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movies-1.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'Kisi Ka Bhai Kisi Ki Jaan',
            imgSrc: '/src/assets/images/movies/movies-2.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Suraj pe Mangal Bhari',
            imgSrc: '/src/assets/images/movies/movies-3.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/movies-4.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'Ant-Man',
            imgSrc: '/src/assets/images/movies/movies-5.jpg',
            duration: '1h 42min',
            views: '5K'
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movies-1.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'Kisi Ka Bhai Kisi Ki Jaan',
            imgSrc: '/src/assets/images/movies/movies-2.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Suraj pe Mangal Bhari',
            imgSrc: '/src/assets/images/movies/movies-3.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/movies-4.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'Ant-Man',
            imgSrc: '/src/assets/images/movies/movies-5.jpg',
            duration: '1h 42min',
            views: '5K'
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movies-1.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'Kisi Ka Bhai Kisi Ki Jaan',
            imgSrc: '/src/assets/images/movies/movies-2.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Suraj pe Mangal Bhari',
            imgSrc: '/src/assets/images/movies/movies-3.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/movies-4.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'Ant-Man',
            imgSrc: '/src/assets/images/movies/movies-5.jpg',
            duration: '1h 42min',
            views: '5K'
          },
        ],
      },
      {
        title: 'New Releases',
        movieItems:  [
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies-new/movies-new-1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies-new/movies-new-2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin City',
            imgSrc: '/src/assets/images/movies-new/movies-new-3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'The Tomorrow War',
            imgSrc: '/src/assets/images/movies-new/movies-new-4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/movies-new/movies-new-5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },

          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies-new/movies-new-1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies-new/movies-new-2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin City',
            imgSrc: '/src/assets/images/movies-new/movies-new-3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'The Tomorrow War',
            imgSrc: '/src/assets/images/movies-new/movies-new-4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/movies-new/movies-new-5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },

          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies-new/movies-new-1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies-new/movies-new-2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin City',
            imgSrc: '/src/assets/images/movies-new/movies-new-3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'The Tomorrow War',
            imgSrc: '/src/assets/images/movies-new/movies-new-4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/movies-new/movies-new-5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },

          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies-new/movies-new-1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies-new/movies-new-2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin City',
            imgSrc: '/src/assets/images/movies-new/movies-new-3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'The Tomorrow War',
            imgSrc: '/src/assets/images/movies-new/movies-new-4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/movies-new/movies-new-5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },
        ],
      },
      {
        title: 'Must - Watch Movies',
        movieItems:  [
          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies-mustwatch/movies-must-1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Pushpa',
            imgSrc: '/src/assets/images/movies-mustwatch/movies-must-2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K',
            },
          },
          {
            title: 'Blade runner 2045',
            imgSrc: '/src/assets/images/movies-mustwatch/movies-must-3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies-mustwatch/movies-must-4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            },
          },

          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies-mustwatch/movies-must-1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Pushpa',
            imgSrc: '/src/assets/images/movies-mustwatch/movies-must-2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K',
            },
          },
          {
            title: 'Blade runner 2045',
            imgSrc: '/src/assets/images/movies-mustwatch/movies-must-3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies-mustwatch/movies-must-4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            },
          },

          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies-mustwatch/movies-must-1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Pushpa',
            imgSrc: '/src/assets/images/movies-mustwatch/movies-must-2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K',
            },
          },
          {
            title: 'Blade runner 2045',
            imgSrc: '/src/assets/images/movies-mustwatch/movies-must-3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies-mustwatch/movies-must-4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            },
          },

          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies-mustwatch/movies-must-1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Pushpa',
            imgSrc: '/src/assets/images/movies-mustwatch/movies-must-2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K',
            },
          },
          {
            title: 'Blade runner 2045',
            imgSrc: '/src/assets/images/movies-mustwatch/movies-must-3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies-mustwatch/movies-must-4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            },
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
    ],
  },
  {
    title: 'Shows',
    items: [
      {
        title: 'Our Genres',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/action-1.jpg',
              '/src/assets/images/categories/action/action-2.jpg',
              '/src/assets/images/categories/action/action-3.jpg',
              '/src/assets/images/categories/action/action-4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/adventure-1.jpg',
              '/src/assets/images/categories/adventure/adventure-2.jpg',
              '/src/assets/images/categories/adventure/adventure-3.jpg',
              '/src/assets/images/categories/adventure/adventure-4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/comedy-1.jpg',
              '/src/assets/images/categories/comedy/comedy-2.jpg',
              '/src/assets/images/categories/comedy/comedy-3.jpg',
              '/src/assets/images/categories/comedy/comedy-4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/drama-1.jpg',
              '/src/assets/images/categories/drama/drama-2.jpg',
              '/src/assets/images/categories/drama/drama-3.jpg',
              '/src/assets/images/categories/drama/drama-4.jpg',
            ],
          },

          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/action-1.jpg',
              '/src/assets/images/categories/action/action-2.jpg',
              '/src/assets/images/categories/action/action-3.jpg',
              '/src/assets/images/categories/action/action-4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/adventure-1.jpg',
              '/src/assets/images/categories/adventure/adventure-2.jpg',
              '/src/assets/images/categories/adventure/adventure-3.jpg',
              '/src/assets/images/categories/adventure/adventure-4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/comedy-1.jpg',
              '/src/assets/images/categories/comedy/comedy-2.jpg',
              '/src/assets/images/categories/comedy/comedy-3.jpg',
              '/src/assets/images/categories/comedy/comedy-4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/drama-1.jpg',
              '/src/assets/images/categories/drama/drama-2.jpg',
              '/src/assets/images/categories/drama/drama-3.jpg',
              '/src/assets/images/categories/drama/drama-4.jpg',
            ],
          },

          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/action-1.jpg',
              '/src/assets/images/categories/action/action-2.jpg',
              '/src/assets/images/categories/action/action-3.jpg',
              '/src/assets/images/categories/action/action-4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/adventure-1.jpg',
              '/src/assets/images/categories/adventure/adventure-2.jpg',
              '/src/assets/images/categories/adventure/adventure-3.jpg',
              '/src/assets/images/categories/adventure/adventure-4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/comedy-1.jpg',
              '/src/assets/images/categories/comedy/comedy-2.jpg',
              '/src/assets/images/categories/comedy/comedy-3.jpg',
              '/src/assets/images/categories/comedy/comedy-4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/drama-1.jpg',
              '/src/assets/images/categories/drama/drama-2.jpg',
              '/src/assets/images/categories/drama/drama-3.jpg',
              '/src/assets/images/categories/drama/drama-4.jpg',
            ],
          },

          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/action-1.jpg',
              '/src/assets/images/categories/action/action-2.jpg',
              '/src/assets/images/categories/action/action-3.jpg',
              '/src/assets/images/categories/action/action-4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/adventure-1.jpg',
              '/src/assets/images/categories/adventure/adventure-2.jpg',
              '/src/assets/images/categories/adventure/adventure-3.jpg',
              '/src/assets/images/categories/adventure/adventure-4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/comedy-1.jpg',
              '/src/assets/images/categories/comedy/comedy-2.jpg',
              '/src/assets/images/categories/comedy/comedy-3.jpg',
              '/src/assets/images/categories/comedy/comedy-4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/drama-1.jpg',
              '/src/assets/images/categories/drama/drama-2.jpg',
              '/src/assets/images/categories/drama/drama-3.jpg',
              '/src/assets/images/categories/drama/drama-4.jpg',
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'Trending Shows Now',
        movieItems:  [
          {
            title: 'Stranger Things',
            imgSrc: '/src/assets/images/shows/show-1.jpg',
            duration: '8h 20min',
            season: '4 Seasons',
            href: './show.html',
          },
          {
            title: 'Money Heist',
            imgSrc: '/src/assets/images/shows/show-2.jpg',
            duration: '12h 23min',
            season: '5 Seasons',
            href: './show.html',
          },
          {
            title: 'Lucifer',
            imgSrc: '/src/assets/images/shows/show-3.jpg',
            duration: '14h 30min',
            season: '3 Seasons',
            href: './show.html',
          },
          {
            title: 'The Gray Man',
            imgSrc: '/src/assets/images/shows/show-4.jpg',
            duration: '7h 40min',
            season: '2 Seasons',
            href: './show.html',
          },

          {
            title: 'Stranger Things',
            imgSrc: '/src/assets/images/shows/show-1.jpg',
            duration: '8h 20min',
            season: '4 Seasons',
            href: './show.html',
          },
          {
            title: 'Money Heist',
            imgSrc: '/src/assets/images/shows/show-2.jpg',
            duration: '12h 23min',
            season: '5 Seasons',
            href: './show.html',
          },
          {
            title: 'Lucifer',
            imgSrc: '/src/assets/images/shows/show-3.jpg',
            duration: '14h 30min',
            season: '3 Seasons',
            href: './show.html',
          },
          {
            title: 'The Gray Man',
            imgSrc: '/src/assets/images/shows/show-4.jpg',
            duration: '7h 40min',
            season: '2 Seasons',
            href: './show.html',
          },

          {
            title: 'Stranger Things',
            imgSrc: '/src/assets/images/shows/show-1.jpg',
            duration: '8h 20min',
            season: '4 Seasons',
            href: './show.html',
          },
          {
            title: 'Money Heist',
            imgSrc: '/src/assets/images/shows/show-2.jpg',
            duration: '12h 23min',
            season: '5 Seasons',
            href: './show.html',
          },
          {
            title: 'Lucifer',
            imgSrc: '/src/assets/images/shows/show-3.jpg',
            duration: '14h 30min',
            season: '3 Seasons',
            href: './show.html',
          },
          {
            title: 'The Gray Man',
            imgSrc: '/src/assets/images/shows/show-4.jpg',
            duration: '7h 40min',
            season: '2 Seasons',
            href: './show.html',
          },

          {
            title: 'Stranger Things',
            imgSrc: '/src/assets/images/shows/show-1.jpg',
            duration: '8h 20min',
            season: '4 Seasons',
            href: './show.html',
          },
          {
            title: 'Money Heist',
            imgSrc: '/src/assets/images/shows/show-2.jpg',
            duration: '12h 23min',
            season: '5 Seasons',
            href: './show.html',
          },
          {
            title: 'Lucifer',
            imgSrc: '/src/assets/images/shows/show-3.jpg',
            duration: '14h 30min',
            season: '3 Seasons',
            href: './show.html',
          },
          {
            title: 'The Gray Man',
            imgSrc: '/src/assets/images/shows/show-4.jpg',
            duration: '7h 40min',
            season: '2 Seasons',
            href: './show.html',
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'New Released Shows',
        movieItems: [
          {
            title: 'High town',
            imgSrc: '/src/assets/images/shows-new/show-new-1.jpg',
            duration: '12h 23min',
            season: '5 Seasons',
            href: './show.html',
          },
          {
            title: 'Mirzapur',
            imgSrc: '/src/assets/images/shows-new/show-new-2.jpg',
            duration: '7h 40min',
            season: '2 Seasons',
            href: './show.html',
          },
          {
            title: 'Into the shadows',
            imgSrc: '/src/assets/images/shows-new/show-new-3.jpg',
            duration: '8h 20min',
            season: '4 Seasons',
            href: './show.html',
          },
          {
            title: 'Peaky blinders',
            imgSrc: '/src/assets/images/shows-new/show-new-4.jpg',
            duration: '10h 30min',
            season: '3 Seasons',
            href: './show.html',
          },

          {
            title: 'High town',
            imgSrc: '/src/assets/images/shows-new/show-new-1.jpg',
            duration: '12h 23min',
            season: '5 Seasons',
            href: './show.html',
          },
          {
            title: 'Mirzapur',
            imgSrc: '/src/assets/images/shows-new/show-new-2.jpg',
            duration: '7h 40min',
            season: '2 Seasons',
            href: './show.html',
          },
          {
            title: 'Into the shadows',
            imgSrc: '/src/assets/images/shows-new/show-new-3.jpg',
            duration: '8h 20min',
            season: '4 Seasons',
            href: './show.html',
          },
          {
            title: 'Peaky blinders',
            imgSrc: '/src/assets/images/shows-new/show-new-4.jpg',
            duration: '10h 30min',
            season: '3 Seasons',
            href: './show.html',
          },

          {
            title: 'High town',
            imgSrc: '/src/assets/images/shows-new/show-new-1.jpg',
            duration: '12h 23min',
            season: '5 Seasons',
            href: './show.html',
          },
          {
            title: 'Mirzapur',
            imgSrc: '/src/assets/images/shows-new/show-new-2.jpg',
            duration: '7h 40min',
            season: '2 Seasons',
            href: './show.html',
          },
          {
            title: 'Into the shadows',
            imgSrc: '/src/assets/images/shows-new/show-new-3.jpg',
            duration: '8h 20min',
            season: '4 Seasons',
            href: './show.html',
          },
          {
            title: 'Peaky blinders',
            imgSrc: '/src/assets/images/shows-new/show-new-4.jpg',
            duration: '10h 30min',
            season: '3 Seasons',
            href: './show.html',
          },

          {
            title: 'High town',
            imgSrc: '/src/assets/images/shows-new/show-new-1.jpg',
            duration: '12h 23min',
            season: '5 Seasons',
            href: './show.html',
          },
          {
            title: 'Mirzapur',
            imgSrc: '/src/assets/images/shows-new/show-new-2.jpg',
            duration: '7h 40min',
            season: '2 Seasons',
            href: './show.html',
          },
          {
            title: 'Into the shadows',
            imgSrc: '/src/assets/images/shows-new/show-new-3.jpg',
            duration: '8h 20min',
            season: '4 Seasons',
            href: './show.html',
          },
          {
            title: 'Peaky blinders',
            imgSrc: '/src/assets/images/shows-new/show-new-4.jpg',
            duration: '10h 30min',
            season: '3 Seasons',
            href: './show.html',
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'Must - Watch Shows',
        movieItems:  [
          {
            title: 'Duranga',
            imgSrc: '/src/assets/images/shows-mustwatch/show-must-1.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '12K',
            },
          },
          {
            title: 'Money Heist part 3',
            imgSrc: '/src/assets/images/shows-mustwatch/show-must-2.jpg',
            duration: '12h 33min',
            rating: {
              value: 5,
              label: '28K',
            },
          },
          {
            title: 'Mai',
            imgSrc: '/src/assets/images/shows-mustwatch/show-must-3.jpg',
            duration: '10h 30min',
            rating: {
              value: 4,
              label: '2K',
            },
          },
          {
            title: 'Stranger Things part 3',
            imgSrc: '/src/assets/images/shows-mustwatch/show-must-4.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '32K',
            },
          },

          {
            title: 'Duranga',
            imgSrc: '/src/assets/images/shows-mustwatch/show-must-1.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '12K',
            },
          },
          {
            title: 'Money Heist part 3',
            imgSrc: '/src/assets/images/shows-mustwatch/show-must-2.jpg',
            duration: '12h 33min',
            rating: {
              value: 5,
              label: '28K',
            },
          },
          {
            title: 'Mai',
            imgSrc: '/src/assets/images/shows-mustwatch/show-must-3.jpg',
            duration: '10h 30min',
            rating: {
              value: 4,
              label: '2K',
            },
          },
          {
            title: 'Stranger Things part 3',
            imgSrc: '/src/assets/images/shows-mustwatch/show-must-4.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '32K',
            },
          },

          {
            title: 'Duranga',
            imgSrc: '/src/assets/images/shows-mustwatch/show-must-1.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '12K',
            },
          },
          {
            title: 'Money Heist part 3',
            imgSrc: '/src/assets/images/shows-mustwatch/show-must-2.jpg',
            duration: '12h 33min',
            rating: {
              value: 5,
              label: '28K',
            },
          },
          {
            title: 'Mai',
            imgSrc: '/src/assets/images/shows-mustwatch/show-must-3.jpg',
            duration: '10h 30min',
            rating: {
              value: 4,
              label: '2K',
            },
          },
          {
            title: 'Stranger Things part 3',
            imgSrc: '/src/assets/images/shows-mustwatch/show-must-4.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '32K',
            },
          },

          {
            title: 'Duranga',
            imgSrc: '/src/assets/images/shows-mustwatch/show-must-1.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '12K',
            },
          },
          {
            title: 'Money Heist part 3',
            imgSrc: '/src/assets/images/shows-mustwatch/show-must-2.jpg',
            duration: '12h 33min',
            rating: {
              value: 5,
              label: '28K',
            },
          },
          {
            title: 'Mai',
            imgSrc: '/src/assets/images/shows-mustwatch/show-must-3.jpg',
            duration: '10h 30min',
            rating: {
              value: 4,
              label: '2K',
            },
          },
          {
            title: 'Stranger Things part 3',
            imgSrc: '/src/assets/images/shows-mustwatch/show-must-4.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '32K',
            },
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
    ],
  },
]

export default collectionGroups
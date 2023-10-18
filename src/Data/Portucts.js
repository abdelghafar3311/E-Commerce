
// protects Appliances
import app1 from '../images/protucts/Appliances/App1.png';
import app2 from '../images/protucts/Appliances/App2.png';
import app3 from '../images/protucts/Appliances/App3.png';
import app4 from '../images/protucts/Appliances/App4.png';
import app5 from '../images/protucts/Appliances/App5.png';
import app6 from '../images/protucts/Appliances/App6.png';
// --------------------------------------------------------- //
// protects clothes
import clothe1 from '../images/protucts/clothes/clothe.png'
import clothe2 from '../images/protucts/clothes/clothes1.png'
import clothe3 from '../images/protucts/clothes/clothes 2.png'
import clothe4 from '../images/protucts/clothes/clothes3.png'
import clothe5 from '../images/protucts/clothes/clothes4.png'
import clothe6 from '../images/protucts/clothes/clothes5.png'
// ------------------------------------------------------------- //
// protects technology
import phone1 from '../images/protucts/tecno/pho1.png'
import phone2 from '../images/protucts/tecno/pho2.png'
import phone3 from '../images/protucts/tecno/pho3.png'
import tab1 from '../images/protucts/tecno/tab1.png'
import tab2 from '../images/protucts/tecno/tab2.png'
import tab3 from '../images/protucts/tecno/tab3.png'


// protects length must be 6
let Protects = [
    {
        page: 0,
        protects: [
            {
                id: 0,
                category: 'appliances',
                image: app1,
                brand: 'samsung',
                like: false,
                level: '',
                name: 'App1',
                explain: 'Appliance For Your House',
                price: 1200,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
            {
                id: 1,
                category: 'appliances',
                image: app2,
                brand: 'Electronics',
                like: true,
                level: '',
                name: 'App2',
                explain: 'Appliance For Your House',
                price: 7000,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
            {
                id: 2,
                category: 'appliances',
                image: app3,
                brand: 'Electronics',
                like: false,
                level: '',
                name: 'App3',
                explain: 'Appliance For Your House',
                price: 6000,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
            {
                id: 3,
                category: 'appliances',
                image: app4,
                brand: 'Electronics',
                like: false,
                level: '',
                name: 'App4',
                explain: 'Appliance For Your House',
                price: 12000,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
            {
                id: 4,
                category: 'appliances',
                image: app5,
                brand: 'Electronics',
                like: true,
                level: '',
                name: 'App5',
                explain: 'Appliance For Your House',
                price: 12000,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
            {
                id: 5,
                category: 'appliances',
                image: app6,
                brand: 'Electronics',
                like: false,
                level: '',
                name: 'App6',
                explain: 'Appliance For Your House',
                price: 2525,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
        ]
    },
    {
        page: 1,
        protects: [
            {
                key: 6,
                category: 'clothe',
                image: clothe1,
                brand: 'adidas',
                like: false,
                level: '',
                name: 'clothe1',
                explain: 'Clothe is very useful for you',
                price: 120,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
            {
                key: 7,
                category: 'clothe',
                image: clothe2,
                brand: 'asics',
                like: true,
                level: '',
                name: 'clothe2',
                explain: 'Clothe is very useful for you',
                price: 200,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
            {
                key: 8,
                category: 'clothe',
                image: clothe3,
                brand: 'new balance',
                like: false,
                level: '',
                name: 'clothe3',
                explain: 'Clothe is very useful for you',
                price: 200,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
            {
                key: 9,
                category: 'clothe',
                image: clothe4,
                brand: 'new balance',
                like: false,
                level: '',
                name: 'clothe4',
                explain: 'Clothe is very useful for you',
                price: 200,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
            {
                key: 10,
                category: 'clothe',
                image: clothe5,
                brand: 'Dior',
                like: false,
                level: '',
                name: 'clothe5',
                explain: 'Clothe is very useful for you',
                price: 200,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
            {
                key: 11,
                category: 'clothe',
                image: clothe6,
                brand: 'Dior',
                like: false,
                level: '',
                name: 'clothe6',
                explain: 'Clothe is very useful for you',
                price: 200,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
        ]
    },
    {
        page: 2,
        protects: [
            {
                key: 12,
                category: 'techno',
                image: tab1,
                brand: 'Samsung',
                like: false,
                level: '',
                name: 'tab1',
                explain: 'the tab is very good',
                price: 4000,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
            {
                key: 13,
                category: 'techno',
                image: tab2,
                brand: 'Samsung',
                like: true,
                level: '',
                name: 'tab2',
                explain: 'the tab is very good',
                price: 6000,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
            {
                key: 14,
                category: 'techno',
                image: tab3,
                brand: 'Samsung',
                like: false,
                level: '',
                name: 'tab3',
                explain: 'the tab is very good',
                price: 5000,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
            {
                key: 15,
                category: 'techno',
                image: phone1,
                brand: 'iphone',
                like: false,
                level: '',
                name: 'phone1',
                explain: 'this phone is very fantastic',
                price: 120000,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
            {
                key: 16,
                category: 'techno',
                image: phone2,
                brand: 'iphone',
                like: false,
                level: '',
                name: 'phone2',
                explain: 'this phone is very fantastic',
                price: 120000,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
            {
                key: 17,
                category: 'techno',
                image: phone3,
                brand: 'iphone',
                like: false,
                level: '',
                name: 'phone3',
                explain: 'this phone is very fantastic',
                price: 200000,
                commits: [
                    {
                        page: 1,
                        container_commits: [
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Ali',
                                level: 5,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Rahman',
                                level: 2,
                                commit: 'This protect is not useful',
                            },
                            {
                                userName: 'Mohammed',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                            {
                                userName: 'Abdel Gaffar',
                                level: 4,
                                commit: 'This protect is very useful',
                            },
                        ]
                    },
                    {
                      page: 2,
                      container_commits: [
                        {
                            userName: 'Yousef',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Sara',
                            level: 5,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Ibrahem',
                            level: 2,
                            commit: 'This protect is not useful',
                        },
                        {
                            userName: 'Ala',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                        {
                            userName: 'Gix',
                            level: 4,
                            commit: 'This protect is very useful',
                        },
                    ]
                    },
                    {
                        page: 3,
                        container_commits: [
                          {
                              userName: 'Lara',
                              level: 5,
                              commit: 'This protect is very fantastic',
                          },
                          {
                              userName: 'Omer',
                              level: 5,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'Mohye',
                              level: 2,
                              commit: 'This protect is not useful',
                          },
                          {
                              userName: 'Vishwas',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                          {
                              userName: 'El Zero',
                              level: 4,
                              commit: 'This protect is very useful',
                          },
                      ]
                      },
                ]
            },
        ]
    },
]




export default Protects;
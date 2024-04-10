let model = {
  app: {
    isLoggedIn: false,
    loggedInUser: null,
    admin: false,
    page: 'feed',
  },
  input: {
    postCat: {
      addNewCat: {
        id: null,
        owner: '', // model.app.loggedinuser
        name: '',
        age: null,
        dateOfBirth: null,
        race: [],
        lore: ``,
        pics: [],
      },
      addMoreCatPics: {
        pics: [],
      },
    },
    userRegistration: {
      username: '',
      password: '',
      disclaimer: false,
    },
    logInInfo: {
      logInUsername: null,
      logInPassword: null,
      errorMessage: null,
    },
    feed: {
      currentPodium: 'day',
      firstPlace: { catName: null, catImg: null },
      secondPlace: { catName: null, catImg: null },
      thirdPlace: { catName: null, catImg: null },
      podiums: [
        'cats of the day',
        'cats of the week',
        'cats of the month',
        'cats of the year',
        'cats of all time',
      ],
    },
    editProfile: {
      bio: '',
      profilePic: '',
    },
    viewCat: {
      rating: null,
      comment: {
        commenter: '', // model.app.loggedinuser
        comment: '',
      },
    },
    reportIssue: {
      reportee: '', // model.app.loggedinuser
      reportedUser: null,
      reportReason: '',
    },
  },
  data: {
    users: [
      {
        username: 'altofar',
        password: 'password',
        bio: '',
        profilePic: '',
      },
      {
        username: 'bob',
        password: 'bob123',
        bio: '',
        profilePic: '',
      },
    ],
    cats: [
      {
        id: 0,
        owner: '', // model.data.users.username
        name: 'Oliver',
        age: 12,
        dateOfBirth: undefined,
        race: [], // model.data.catraces[0]
        lore: `Han ble arrestert for skattesvindel og heleri i 2017, 
                er kretsmester i Mario Kart 64 og har litt for høyrevridde meninger 
                rundt nåværende norsk innvandringspolitikk`,
        rating: 10,
        pics: ['img/catPictures/oliver1.png', 'img/catPictures/loki1.jpg'],
        comments: [
          {
            commenter: 'henrik', //model.data.users.username
            comment: 'I love ur cat',
          },
          {
            commenter: 'bob', // model.data.users.username
            comment: 'I hate your cat grr',
          },
        ],
      },
    ],
    catRaces: [
      'British Shorthair',
      'Sphynx',
      'Toyger',
      'Highlander',
      'Himalayan',
      'Egyptian Mau',
      'Savannah',
      'Scottish Fold',
      'Siamese',
      'Bengal',
      'Persian',
      'Maine Coon',
      'Ragdoll',
      'Norwegian Forest',
      'Unknown',
    ],
  },
};

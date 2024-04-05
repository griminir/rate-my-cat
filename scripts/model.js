model = {
  app: {
    isLoggedIn: false,
    loggedInUser: null,
    admin: false,
    page: '',
  },
  input: {
    postCat: {
      addNewCat: {
        id: null,
        owner: model.app.loggedInUser,
        name: '',
        age: null,
        dateOfBirth: undefined,
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
      logInUsername: '',
      logInPassword: '',
    },
    editProfile: {
      bio: '',
      profilePic: '',
    },
    viewCat: {
      rating: null,
      comment: {
        commenter: model.app.loggedInUser,
        comment: '',
      },
    },
    reportIssue: {
      reportee: model.app.loggedInUser,
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
        owner: model.data.users.username,
        name: 'Oliver',
        age: 12,
        dateOfBirth: undefined,
        race: [model.data.catRaces[0]],
        lore: `Han ble arrestert for skattesvindel og heleri i 2017, 
                er kretsmester i Mario Kart 64 og har litt for høyrevridde meninger 
                rundt nåværende norsk innvandringspolitikk`,
        rating: 10,
        pics: [],
        comments: [
          {
            commenter: model.data.users.username,
            comment: 'I love ur cat',
          },
          {
            commenter: model.data.users.username,
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

let model = {
  app: {
    isLoggedIn: true,
    loggedInUser: 'aaltofar',
    admin: true,
    page: "catProfile",
    displayedUser: "",
    displayedCat: 0,
  },
  input: {
    postCat: {
      addNewCat: {
        id: null,
        owner: "",
        name: "",
        age: null,
        dateOfBirth: null,
        race: [],
        lore: ``,
        pics: [],
        updated: null,
      },
      addMoreCatPics: {
        name: "Pick your cat",
        dateOfBirth: null,
        race: [],
        lore: ``,
        pics: [],
        updated: null,
      },
      showSlide: 0,
    },
    userRegistration: {
      username: "",
      password: "",
      repeatPassword: "",
      disclaimer: false,
    },
    logInInfo: {
      logInUsername: null,
      logInPassword: null,
      errorMessage: null,
    },
    feed: {
      currentPodium: "day",
      firstPlace: { catName: "Oliver", catImg: "img/catPictures/oliver1.png" },
      secondPlace: { catName: "Bianca", catImg: "img/catPictures/bianca1.jpg" },
      thirdPlace: { catName: "Loki", catImg: "img/catPictures/loki2.jpg" },
      podiums: [
        "cats of the day",
        "cats of the week",
        "cats of the month",
        "cats of all time",
      ],
      hoverRating: {
        cat: null,
        starNumber: null,
      },
    },
    editProfile: {
      bio: "",
      profilePic: "",
    },
    viewCat: {
      rating: null,
      comment: {
        commenter: "",
        comment: "",
      },
    },
    reportIssue: {
      reportee: "",
      reportedUser: null,
      reportReason: "",
    },
  },
  data: {
    users: [
      {
        username: "aaltofar",
        password: "password",
        bio: `dinosauskjeks and dr. pepper is life <3`,
        profilePic: "img/profilePictures/marius.JPG",
      },
      {
        username: "bob",
        password: "bob123",
        bio: `I am a bot`,
        profilePic: "",
      },
      {
        username: "camillzy",
        password: "camilla",
        bio: `Dale a tu cuerpo alegría Macarena
              Que tu cuerpo es pa' darle alegría y cosa buena
              Dale a tu cuerpo alegría, Macarena
              Hey Macarena, ay`,
        profilePic: "",
      },
      {
        username: "lordluck",
        password: "viktor",
        bio: `Bladi bladi bladi. I don't have a meow, 
        I'm just here to look at them.`,
        profilePic: "",
      },
      {
        username: "kitty",
        password: "hanne",
        bio: `I LOVE HELLO KITTY <3`,
        profilePic: "",
      },
      {
        username: "simonk",
        password: "simon",
        bio: ``,
        profilePic: "",
      },
      {
        username: "CatMage",
        password: "veldigSikkertPassord123",
        bio: `Katten min er litt rar ikke tenk så mye på det`,
        profilePic: "",
      },
      {
        username: "simbaOwner",
        password: "våtforErBest",
        bio: ``,
        profilePic: "",
      },
      {
        username: "AntiKatt",
        password: "hunderbest",
        bio: `Jeg foretrekker hunder.`,
        profilePic: "",
      },
      {
        username: "SkulleViSkriveNoeHer",
        password: "HvaSkulleDetVærtISåFall",
        bio: `Vet ikke`,
        profilePic: "",
      },
    ],
    cats: [
      {
        id: 0,
        owner: "aaltofar",
        name: "Oliver",
        age: 12,
        dateOfBirth: "2020-04-03",
        race: ["British Shorthair"],
        lore: `Han ble arrestert for skattesvindel og heleri i 2017, 
                er kretsmester i Mario Kart 64 og har litt for høyrevridde meninger 
                rundt nåværende norsk innvandringspolitikk`,
        rating: [10, 10, 10, 10],
        pics: [
          "img/catPictures/oliver1.png",
          "img/catPictures/oliver2.jpg",
          "img/catPictures/oliver3.jpg",
          "img/catPictures/oliver4.jpg",
          "img/catPictures/oliver5.jpg",
          "img/catPictures/oliver6.jpg",
          "img/catPictures/oliver7.jpg",
          "img/catPictures/oliver8.jpg",
          "img/catPictures/oliver9.jpg",
          "img/catPictures/oliver10.jpg",
        ],
        updated: "2024-03-02 10:00:00",
        comments: [
          {
            commenter: "kitty",
            comment: "I love ur cat",
          },
          {
            commenter: "bob",
            comment: "I hate your cat grr",
          },
        ],
      },
      {
        id: 1,
        owner: "aaltofar",
        name: "Bianca",
        age: 3,
        dateOfBirth: "2020-04-03",
        race: ["Unknown"],
        lore: `Previously owned by norwegian mafia`,
        rating: [10, 7, 5],
        pics: ["img/catPictures/bianca1.jpg"],
        updated: "2024-03-03 11:00:00",
        comments: [
          {
            commenter: "kitty",
            comment: "I love ur cat",
          },
          {
            commenter: "bob",
            comment: "I is that even a cat?",
          },
        ],
      },
      {
        id: 2,
        owner: "camillzy",
        name: "Loki",
        age: 6,
        dateOfBirth: null,
        race: ["Unknown"],
        lore: `Hun kaster opp jenvlig fordi hun har sensitiv tarm, men er veldig glad i sokkelo.
              Hun terroriserer oss om natta, men på dagtid er hun bare søt. `,
        rating: [8, 9],
        pics: ["img/catPictures/loki1.jpg", "img/catPictures/loki2.jpg"],
        updated: "2024-02-03 09:00:00",
        comments: [
          {
            commenter: "kitty",
            comment: "I love ur cat",
          },
          {
            commenter: "bob",
            comment: "I hate your cat grr",
          },
        ],
      },
      {
        id: 3,
        owner: "kitty",
        name: "Bianca",
        age: 3,
        dateOfBirth: "2020-04-03",
        race: ["Unknown"],
        lore: `I am a cat.`,
        rating: [10, 8, 7, 3, 10],
        pics: ["img/catPictures/bianca1.jpg"],
        updated: "2024-01-03 10:00:00",
        comments: [
          {
            commenter: "kitty",
            comment: "I love ur cat",
          },
          {
            commenter: "bob",
            comment: "I hate your cat grr",
          },
        ],
      },
      {
        id: 4,
        owner: "simon",
        name: "Simba",
        age: 5,
        dateOfBirth: "2019-04-03",
        race: ["Unknown"],
        lore: `Used to live in Africa before some random dude picked me up
                and took me to Norway. It's cold here. Big L.`,
        rating: [10, 5, 10, 8, 8, 9],
        pics: ["img/catPictures/simba1.jpg"],
        updated: "2024-02-02 10:00:00",
        comments: [
          {
            commenter: "kitty",
            comment: "I love ur cat",
          },
          {
            commenter: "bob",
            comment: "I hate your cat grr",
          },
        ],
      },
      {
        id: 5,
        owner: "CatMage",
        name: "Frøya",
        age: 3,
        dateOfBirth: "2021-01-01",
        race: ["Portugisisk vannkatt"],
        lore: `katte så smart, den ble til en hund`,
        rating: [null],
        pics: ["img/catPictures/frøya1.png", "img/catPictures/frøya2.png"],
        updated: "2024-19-04 10:00:00",
        comments: [
          {
            commenter: "kitty",
            comment: "I love ur cat",
          },
          {
            commenter: "bob",
            comment: "I hate your cat grr",
          },
        ],
      },
      {
        id: 6,
        owner: "simbaOwner",
        name: "Simba",
        age: 3,
        dateOfBirth: "2023-09-01",
        race: ["Bengal", "Norwegian Forest"],
        lore: `Halvt bengal/skogskatt. Jeg digger nabokatten Findus, vi er bestevenner. 
        Og esker, esker får jeg aldri nok av! 
        Ellers er det gøy å plage å plage husholdningens slaver.`,
        rating: [null],
        pics: ["img/catPictures/2simba1.png"],
        updated: "2024-19-04 11:00:00",
        comments: [
          {
            commenter: "kitty",
            comment: "I love ur cat",
          },
          {
            commenter: "bob",
            comment: "I hate your cat grr",
          },
        ],
      },
      {
        id: 7,
        owner: "AntiKatt",
        name: "Max",
        age: 1,
        dateOfBirth: "2023-01-05",
        race: ["Uncat"],
        lore: `Max lusker i skyggene når katten din er ute.`,
        rating: [null],
        pics: [
          "img/catPictures/max1.png",
          "img/catPictures/max2.png",
          "img/catPictures/max3.png",
          "img/catPictures/max4.png",
        ],
        updated: "2024-19-04 12:00:00",
        comments: [
          {
            commenter: "kitty",
            comment: "I love ur cat",
          },
          {
            commenter: "bob",
            comment: "I hate your cat grr",
          },
        ],
      },
      {
        id: 8,
        owner: "SkulleViSkriveNoeHer",
        name: "Theodore",
        age: 3,
        dateOfBirth: "2019-08-01",
        race: ["Unknown"],
        lore: null,
        rating: [null],
        pics: [
          "img/catPictures/theodore1.jpg",
          "img/catPictures/theodore2.jpg",
        ],
        updated: "2024-19-04 12:00:00",
        comments: [
          {
            commenter: "kitty",
            comment: "I love ur cat",
          },
          {
            commenter: "bob",
            comment: "I hate your cat grr",
          },
        ],
      },
      {
        id: 9,
        owner: "SkulleViSkriveNoeHer",
        name: "Camilla",
        age: 4,
        dateOfBirth: "2018-05-19",
        race: ["Unknown"],
        lore: null,
        rating: [null],
        pics: ["img/catPictures/camilla1.jpg", "img/catPictures/camilla2.jpg"],
        updated: "2024-19-04 13:00:00",
        comments: [
          {
            commenter: "kitty",
            comment: "I love ur cat",
          },
          {
            commenter: "bob",
            comment: "I hate your cat grr",
          },
        ],
      },
    ],
    ratings: [
      {
        ratedCatId: 0,
        ratedByUser: "aaltofar",
        rating: 10,
      },
      {
        ratedCatId: 5,
        ratedByUser: "aaltofar",
        rating: 5,
      },
      {
        ratedCatId: 3,
        ratedByUser: "bob",
        rating: 7,
      },
      {
        ratedCatId: 0,
        ratedByUser: "bob",
        rating: 10,
      },
      {
        ratedCatId: 1,
        ratedByUser: "aaltofar",
        rating: 6,
      },
      {
        ratedCatId: 2,
        ratedByUser: "aaltofar",
        rating: 4,
      },
    ],
    catRaces: [
      "British Shorthair",
      "Sphynx",
      "Toyger",
      "Highlander",
      "Himalayan",
      "Egyptian Mau",
      "Savannah",
      "Scottish Fold",
      "Siamese",
      "Bengal",
      "Persian",
      "Maine Coon",
      "Ragdoll",
      "Norwegian Forest",
      "Unknown",
      "Portugisisk vannkatt",
      "Uncat",
    ],
    showSlide: 0,
  },
};

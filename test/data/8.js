module.exports = {
  games: [
    {
      _id: "clm67jlrk0005qire3wpf97tp",
      createdOn: 1693859411602,
      modifiedOn: 1693859411602,
      createdBy: "clm256k9w00003g5xafvyw4ld",
      theme: "party",
      difficulty: 3,
      description: "This is my first game, please come and join",
      players: [
        "clm25hoqi0002jhre5soi09vx",
        "clm37kkdt0002zpreg662h9ez",
        "clm37mlxi00022cre4ukw0tn2",
        "clm256k9w00003g5xafvyw4ld",
      ],
      invited: ["clm38831h0002cjrebqfqgkca"],
      admins: ["clm256k9w00003g5xafvyw4ld"],
      location: "Brendan the Navigator",
      expectedStartTime: Date.now() + 1000 * 60 * 60,
      finishTime: null,
      startTime: null,
      maxDuration: 14400000,
      status: "awaiting",
      photos: [],
      title: "Birthday party",
    },
  ],
  takeoutMethods: [
    {
      _id: "clm39jnfi00029wrebr2vavh0",
      createdOn: 1693734089310,
      disabled: false,
      modifiedOn: 1693734089310,
      createdBy: "clm256k9w00003g5xafvyw4ld",
      description: "Convince ~name~ to eat something from your hand",
      themes: ["party"],
      difficulty: 3,
    },
    {
      _id: "clm3alfg20002ixre7tf5fmiw",
      createdOn: 1693734089310,
      disabled: false,
      modifiedOn: 1693734089310,
      createdBy: "clm256k9w00003g5xafvyw4ld",
      description: "Convince ~name~ to eat something from your foot",
      themes: ["party"],
      difficulty: 3,
    },
    {
      _id: "clm39k3yw0002agre3ubt0j1j",
      createdOn: 1693734089310,
      disabled: false,
      modifiedOn: 1693734089310,
      createdBy: "clm256k9w00003g5xafvyw4ld",
      description: "Convince ~name~ to eat something from your ear",
      themes: ["party", "office"],
      difficulty: 3,
    },
    {
      _id: "clm3apwzi0002ldrec1mbhla9",
      createdOn: 1693734089310,
      disabled: false,
      modifiedOn: 1693734089310,
      createdBy: "clm256k9w00003g5xafvyw4ld",
      description: "Convince ~name~ to eat something from your tummy",
      themes: ["party", "office"],
      difficulty: 3,
    },
    {
      _id: "clm3ao0ng0002k4re91iog0gr",
      createdOn: 1693734089310,
      disabled: false,
      modifiedOn: 1693734089310,
      createdBy: "clm256k9w00003g5xafvyw4ld",
      description: "Convince ~name~ to eat something from your elbow",
      themes: ["party", "office"],
      difficulty: 3,
    },
  ],
  takeouts: [
    {
      _id: "clm8viyn200039xre0v1804jw",
      createdOn: 1694073339614,
      startedAt: 1694073339614,
      status: "inProgress",
      takeoutMethodId: "clm3alfg20002ixre7tf5fmiw",
      gameId: "clm67jlrk0005qire3wpf97tp",
      chaserId: "clm25hoqi0002jhre5soi09vx",
      targetId: "clm37mlxi00022cre4ukw0tn2",
      completedAt: null,
      methodText: "Convince ~name~ to eat something from your skin",
    },
    {
      _id: "clm8viyn200049xrehiyz6dkh",
      createdOn: 1694073339614,
      startedAt: 1694073339614,
      status: "inProgress",
      takeoutMethodId: "clm39k3yw0002agre3ubt0j1j",
      gameId: "clm67jlrk0005qire3wpf97tp",
      chaserId: "clm37mlxi00022cre4ukw0tn2",
      targetId: "clm37kkdt0002zpreg662h9ez",
      completedAt: null,
      methodText: "Convince ~name~ to eat something from your skin",
    },
    {
      _id: "clm8viyn100019xre4x9ghnhb",
      createdOn: 1694073339613,
      startedAt: 1694073339613,
      status: "inProgress",
      takeoutMethodId: "clm3apwzi0002ldrec1mbhla9",
      gameId: "clm67jlrk0005qire3wpf97tp",
      chaserId: "clm37kkdt0002zpreg662h9ez",
      targetId: "clm256k9w00003g5xafvyw4ld",
      completedAt: null,
      methodText: "Convince ~name~ to eat something from your skin",
    },
    {
      _id: "clm8viyn100029xred3hs75o7",
      createdOn: 1694073339613,
      startedAt: 1694073339613,
      status: "inProgress",
      takeoutMethodId: "clm3ao0ng0002k4re91iog0gr",
      gameId: "clm67jlrk0005qire3wpf97tp",
      chaserId: "clm256k9w00003g5xafvyw4ld",
      targetId: "clm25hoqi0002jhre5soi09vx",
      completedAt: null,
      methodText: "Convince ~name~ to eat something from your skin",
    },
  ],
};

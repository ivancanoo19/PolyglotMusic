db = db.getSiblingDB('polyglotmusic');

db.artists.insertMany(
[
    {
        "_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "name": "The Beatles",
        "photo": "https://i.scdn.co/image/ab6761610000e5ebe9348cc01ff5d55971b22433",
        "albums": [
            {
                "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
                "album_title": "Anthology 4",
                "album_year": 2025,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c"
            },
            {
                "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
                "album_title": "Revolver (Super Deluxe)",
                "album_year": 2022,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30"
            },
            {
                "album_id": ObjectId("da39b03b68ba8017e59c7930"),
                "album_title": "Get Back (Rooftop Performance)",
                "album_year": 2022,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b27304167cd5b7ddbf5c4a563456"
            },
            {
                "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
                "album_title": "Live At The Hollywood Bowl",
                "album_year": 2016,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1"
            },
            {
                "album_id": ObjectId("43d460334c1f569afcca0f24"),
                "album_title": "Let It Be... Naked (Remastered)",
                "album_year": 2014,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273b9dd63a105a5afe5d58a783b"
            },
            {
                "album_id": ObjectId("b510bdb5d8b499db326e6b00"),
                "album_title": "Yellow Submarine Songtrack",
                "album_year": 1999,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2"
            },
            {
                "album_id": ObjectId("b3469670c08588bc4a073895"),
                "album_title": "Let It Be (Remastered)",
                "album_year": 1970,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1"
            },
            {
                "album_id": ObjectId("64bbde7320d693583059cf0f"),
                "album_title": "Abbey Road (Remastered)",
                "album_year": 1969,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25"
            },
            {
                "album_id": ObjectId("83e4d47aa7b057c2fd2d8759"),
                "album_title": "Yellow Submarine (Remastered)",
                "album_year": 1969,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273d283808926ad3d2220e63c1c"
            },
            {
                "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
                "album_title": "The Beatles (Remastered)",
                "album_year": 1968,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2"
            }
        ]
    },
    {
        "_id": ObjectId("5034983c70523c76d767aca6"),
        "name": "Olivia Rodrigo",
        "photo": "https://i.scdn.co/image/ab6761610000e5ebb14eb4dcfd2f3858bed06e44",
        "albums": [
            {
                "album_id": ObjectId("bb7a62209e5825f744eb5b65"),
                "album_title": "you seem pretty sad for a girl so in love",
                "album_year": 2026,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46"
            },
            {
                "album_id": ObjectId("dfc243f396bc5f28089a41af"),
                "album_title": "GUTS (spilled)",
                "album_year": 2024,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee"
            },
            {
                "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
                "album_title": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
                "album_year": 2023,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686"
            },
            {
                "album_id": ObjectId("44b54cd738f4cb5f01b80902"),
                "album_title": "GUTS",
                "album_year": 2023,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d"
            },
            {
                "album_id": ObjectId("25f4c73b5dc14d5a7e171dd1"),
                "album_title": "SOUR",
                "album_year": 2021,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a"
            }
        ]
    },
    {
        "_id": ObjectId("d9446cdac81c7cff8382425c"),
        "name": "Arctic Monkeys",
        "photo": "https://i.scdn.co/image/ab6761610000e5eb7da39dea0a72f581535fb11f",
        "albums": [
            {
                "album_id": ObjectId("d872134fb70580e9100c877b"),
                "album_title": "The Car",
                "album_year": 2022,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b27307823ee6237208c835802663"
            },
            {
                "album_id": ObjectId("203742e3b2a39415c350641e"),
                "album_title": "Live at the Royal Albert Hall",
                "album_year": 2020,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef"
            },
            {
                "album_id": ObjectId("f088ce60e0ff74738f5277e2"),
                "album_title": "Tranquility Base Hotel & Casino",
                "album_year": 2018,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b2738895ff0f90525f4aa9437c27"
            },
            {
                "album_id": ObjectId("afbd130238ed230d29266833"),
                "album_title": "AM",
                "album_year": 2013,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163"
            },
            {
                "album_id": ObjectId("fc9827fe1ce82fc35ad636c2"),
                "album_title": "Suck It and See",
                "album_year": 2011,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273cb44038b22f3d8a5e4e62d5a"
            },
            {
                "album_id": ObjectId("753560e43d8272a799e8945c"),
                "album_title": "Humbug",
                "album_year": 2009,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273f65d720a5d70dbb93e96d528"
            },
            {
                "album_id": ObjectId("5c7fe76e009fcaaad46a9fda"),
                "album_title": "Favourite Worst Nightmare",
                "album_year": 2007,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface"
            },
            {
                "album_id": ObjectId("a86553af2a72cbd59339dccf"),
                "album_title": "Whatever People Say I Am, That's What I'm Not",
                "album_year": 2006,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf"
            }
        ]
    },
    {
        "_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "name": "Black Sabbath",
        "photo": "https://i.scdn.co/image/ab6761610000e5eb4870cd833ebe1092601820c3",
        "albums": [
            {
                "album_id": ObjectId("28fe26d7ba305b582bfc6a1d"),
                "album_title": "The Eternal Idol (2025 Remaster)",
                "album_year": 2025,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b2734e18b68c99002afa53e02f9e"
            },
            {
                "album_id": ObjectId("ad489660e92534c7aebe6be9"),
                "album_title": "Tyr (2024 Remaster)",
                "album_year": 2024,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273b6d78e267fff835412e9dcfb"
            },
            {
                "album_id": ObjectId("64fc55a09f1554b3adde8fae"),
                "album_title": "Headless Cross (2024 Remaster)",
                "album_year": 2024,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273edd22c606c1b41b509d30168"
            },
            {
                "album_id": ObjectId("804f35ece8cc5b46b7b0cc79"),
                "album_title": "Forbidden (2024 Tony Iommi Remix)",
                "album_year": 2024,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b2734274e0e0004fd4ca0510b358"
            },
            {
                "album_id": ObjectId("ee907c1a068e3dcadbb3721b"),
                "album_title": "Cross Purposes (2024 Remaster)",
                "album_year": 2024,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273bad2bcc407d8083490c82f1f"
            },
            {
                "album_id": ObjectId("eb27884d9e47660b5b63c821"),
                "album_title": "Reunion (25th Anniversary Expanded Edition)",
                "album_year": 2023,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b"
            },
            {
                "album_id": ObjectId("15b633fd5fc33931158cba58"),
                "album_title": "Live Evil (40th Anniversary Edition)",
                "album_year": 2023,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847"
            },
            {
                "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
                "album_title": "Mob Rules (Remastered and Expanded Version)",
                "album_year": 2022,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6"
            },
            {
                "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
                "album_title": "Heaven and Hell (Remastered and Expanded Edition)",
                "album_year": 2022,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a"
            },
            {
                "album_id": ObjectId("2b9856f3c3807109696a317e"),
                "album_title": "The End (Live)",
                "album_year": 2017,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea"
            }
        ]
    },
    {
        "_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "name": "Weyes Blood",
        "photo": "https://i.scdn.co/image/ab6761610000e5eb3a4a51a2de2f195ae87216e4",
        "albums": [
            {
                "album_id": ObjectId("3cda0e523c3381c1876df1fa"),
                "album_title": "And In The Darkness, Hearts Aglow",
                "album_year": 2022,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273db8ab490bcedb6e518c37e6e"
            },
            {
                "album_id": ObjectId("c929a28be0949ce4be72a71d"),
                "album_title": "Titanic Rising",
                "album_year": 2019,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b2730c64e752dec4c08362cc4a88"
            },
            {
                "album_id": ObjectId("cd3978cc7605e0c4a481c95e"),
                "album_title": "Front Row Seat to Earth",
                "album_year": 2016,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b2736e1fa95f889c1e1684e77774"
            },
            {
                "album_id": ObjectId("e98d484fc07336bb54d369fa"),
                "album_title": "The Innocents",
                "album_year": 2014,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273f5ea025a6a0a85265b1e8ed8"
            },
            {
                "album_id": ObjectId("b6e16836d8d42b926e10ae4b"),
                "album_title": "The Outside Room",
                "album_year": 2011,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273488c24189a011a2e6aa791c2"
            }
        ]
    },
    {
        "_id": ObjectId("af33d8550632cb20bc3b6795"),
        "name": "Fiona Apple",
        "photo": "https://i.scdn.co/image/ab6761610000e5ebf178cbda9bd9a389581ff021",
        "albums": [
            {
                "album_id": ObjectId("8050a6ba4bd5f58730e0ef66"),
                "album_title": "Fetch The Bolt Cutters",
                "album_year": 2020,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b27358e51e35730fcfd6e4aeef51"
            },
            {
                "album_id": ObjectId("c60068c0d494e6add2ba3fef"),
                "album_title": "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do (Expanded Edition)",
                "album_year": 2012,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b2731443bd487a471868735f050b"
            },
            {
                "album_id": ObjectId("eb4d7f37ddaf4871d05bbefe"),
                "album_title": "Extraordinary Machine",
                "album_year": 2005,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b27385acb5e0d6230859ff978b79"
            },
            {
                "album_id": ObjectId("4901e59dea776e4fd57e09d6"),
                "album_title": "When The Pawn...",
                "album_year": 1999,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b27370622da427271b0203d7ce79"
            },
            {
                "album_id": ObjectId("8dd1681a85d065ec9d99693e"),
                "album_title": "Tidal",
                "album_year": 1996,
                "album_photo": "https://i.scdn.co/image/ab67616d0000b273b254ca0983d65ede8e3d2f7a"
            }
        ]
    }
]
);

db.albums.insertMany(
[
    {
        "_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "title": "Anthology 4",
        "release_year": 2025,
        "photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "total_songs": 20,
        "album_duration": 4110,
        "tracklist": [
            {
                "song_id": ObjectId("614cdf2dc51e436e85c52b9a"),
                "song_name": "I Saw Her Standing There (Take 2)",
                "duration": 186
            },
            {
                "song_id": ObjectId("ac39159dcc2623d0635ec0dd"),
                "song_name": "Money (That's What I Want) [RM7 Undubbed]",
                "duration": 168
            },
            {
                "song_id": ObjectId("a6219d9e0f0b6fb59b8d3fc3"),
                "song_name": "This Boy (Takes 12 And 13)",
                "duration": 198
            },
            {
                "song_id": ObjectId("d12abf3944718078a5f60e19"),
                "song_name": "Tell Me Why (Takes 4 And 5)",
                "duration": 187
            },
            {
                "song_id": ObjectId("993c5aa03453c86ef33d8f25"),
                "song_name": "If I Fell (Take 11)",
                "duration": 158
            },
            {
                "song_id": ObjectId("3cb6aaae8ab81a7796b7d99d"),
                "song_name": "Matchbox (Take 1)",
                "duration": 129
            },
            {
                "song_id": ObjectId("fb833344e6383b32e2bfae07"),
                "song_name": "Every Little Thing (Takes 6 And 7)",
                "duration": 208
            },
            {
                "song_id": ObjectId("549e0923329b2a86c2bfece1"),
                "song_name": "I Need You (Take 1)",
                "duration": 156
            },
            {
                "song_id": ObjectId("ef6796c3cebbc54fea51ec48"),
                "song_name": "I've Just Seen A Face (Take 3)",
                "duration": 146
            },
            {
                "song_id": ObjectId("f25048ba9c466a44fd794e13"),
                "song_name": "In My Life (Take 1)",
                "duration": 160
            },
            {
                "song_id": ObjectId("62f3242926d1d36beef704ec"),
                "song_name": "Nowhere Man (First Version - Take 2)",
                "duration": 144
            },
            {
                "song_id": ObjectId("97506b520a320146aff78757"),
                "song_name": "Got To Get You Into My Life (Second Version - Unnumbered Mix)",
                "duration": 155
            },
            {
                "song_id": ObjectId("f32b47ee04a5a2bee2ac864b"),
                "song_name": "Love You To (Take 7)",
                "duration": 176
            },
            {
                "song_id": ObjectId("4e678f0d8cdf86d346e4134a"),
                "song_name": "Strawberry Fields Forever (Take 26)",
                "duration": 200
            },
            {
                "song_id": ObjectId("2475e51177547e9614602ec1"),
                "song_name": "She's Leaving Home (Take 1 - Instrumental)",
                "duration": 230
            },
            {
                "song_id": ObjectId("1346bd86dc25b78ecfdf23c5"),
                "song_name": "Baby, You're A Rich Man (Takes 11 And 12)",
                "duration": 366
            },
            {
                "song_id": ObjectId("7937364cf4dafe98a8d639b8"),
                "song_name": "All You Need Is Love (Rehearsal For BBC Broadcast)",
                "duration": 371
            },
            {
                "song_id": ObjectId("a0ac3457d032a174ed5ef446"),
                "song_name": "The Fool On The Hill (Take 5 - Instrumental)",
                "duration": 282
            },
            {
                "song_id": ObjectId("485f12abb60474a264a2adcf"),
                "song_name": "I Am The Walrus (Take 19 - Strings, Brass, Clarinet Overdub)",
                "duration": 296
            },
            {
                "song_id": ObjectId("e2aa7b2d6a712541b17011b8"),
                "song_name": "Hey Bulldog (Take 4 - Instrumental)",
                "duration": 194
            }
        ]
    },
    {
        "_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "title": "Revolver (Super Deluxe)",
        "release_year": 2022,
        "photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "total_songs": 20,
        "album_duration": 3201,
        "tracklist": [
            {
                "song_id": ObjectId("a2dcfb16d9a5be9109d21a84"),
                "song_name": "Taxman - 2022 Mix",
                "duration": 158
            },
            {
                "song_id": ObjectId("a726c66063828c8a3b581e55"),
                "song_name": "Eleanor Rigby - 2022 Mix",
                "duration": 126
            },
            {
                "song_id": ObjectId("8f7073aea0f0d6bc5b07e9e2"),
                "song_name": "I'm Only Sleeping - 2022 Mix",
                "duration": 180
            },
            {
                "song_id": ObjectId("4a145d3d90fd2ae8bd1c5a78"),
                "song_name": "Love You To - 2022 Mix",
                "duration": 179
            },
            {
                "song_id": ObjectId("fd894c7a5dc9106efa458aea"),
                "song_name": "Here, There And Everywhere - 2022 Mix",
                "duration": 144
            },
            {
                "song_id": ObjectId("c15ef0e897b76a7fc8b2957a"),
                "song_name": "Yellow Submarine - 2022 Mix",
                "duration": 158
            },
            {
                "song_id": ObjectId("21ef5f3cecbfa6fcf51ea06b"),
                "song_name": "She Said She Said - 2022 Mix",
                "duration": 156
            },
            {
                "song_id": ObjectId("27d18a7339524b4c161ac64c"),
                "song_name": "Good Day Sunshine - 2022 Mix",
                "duration": 129
            },
            {
                "song_id": ObjectId("371a534b3210f94f0509f3fa"),
                "song_name": "And Your Bird Can Sing - 2022 Mix",
                "duration": 120
            },
            {
                "song_id": ObjectId("1c04e0fc8c645f96d8d0b388"),
                "song_name": "For No One - 2022 Mix",
                "duration": 119
            },
            {
                "song_id": ObjectId("38a94e4a52bdc4ca504a2868"),
                "song_name": "Doctor Robert - 2022 Mix",
                "duration": 134
            },
            {
                "song_id": ObjectId("5fa72413664de793246465c6"),
                "song_name": "I Want To Tell You - 2022 Mix",
                "duration": 147
            },
            {
                "song_id": ObjectId("9001b95099be9bd62afc8bcc"),
                "song_name": "Got To Get You Into My Life - 2022 Mix",
                "duration": 149
            },
            {
                "song_id": ObjectId("0cf0a59b0393d6d34a5adcc5"),
                "song_name": "Tomorrow Never Knows - 2022 Mix",
                "duration": 177
            },
            {
                "song_id": ObjectId("aed240b5f91ed30f77d01418"),
                "song_name": "Tomorrow Never Knows - Take 1",
                "duration": 212
            },
            {
                "song_id": ObjectId("8157d792a24da87fd461d2e4"),
                "song_name": "Tomorrow Never Knows - Mono Mix RM 11",
                "duration": 185
            },
            {
                "song_id": ObjectId("27673d4ec7fa67227c7156fc"),
                "song_name": "Got To Get You Into My Life - First Version / Take 5",
                "duration": 250
            },
            {
                "song_id": ObjectId("11fb1d6b5c3f63adfa8874b7"),
                "song_name": "Got To Get You Into My Life - Second Version / Unnumbered Mix",
                "duration": 156
            },
            {
                "song_id": ObjectId("c69e20807b40adda5c273f7e"),
                "song_name": "Got To Get You Into My Life - Second Version / Take 8",
                "duration": 162
            },
            {
                "song_id": ObjectId("b220b3b95dba96e51d328ee4"),
                "song_name": "Love You To - Take 1",
                "duration": 160
            }
        ]
    },
    {
        "_id": ObjectId("da39b03b68ba8017e59c7930"),
        "title": "Get Back (Rooftop Performance)",
        "release_year": 2022,
        "photo": "https://i.scdn.co/image/ab67616d0000b27304167cd5b7ddbf5c4a563456",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "total_songs": 10,
        "album_duration": 2308,
        "tracklist": [
            {
                "song_id": ObjectId("3de86f6a0851d2697eca0e6c"),
                "song_name": "Get Back - Rooftop Performance / Take 1",
                "duration": 283
            },
            {
                "song_id": ObjectId("bdf26f0630b2bbc72db891b6"),
                "song_name": "Get Back - Rooftop Performance / Take 2",
                "duration": 204
            },
            {
                "song_id": ObjectId("1436b2f6fcaf668445bff658"),
                "song_name": "Don't Let Me Down - Rooftop Performance / Take 1",
                "duration": 202
            },
            {
                "song_id": ObjectId("9ca3e9fe7c45883fb71a53c2"),
                "song_name": "I've Got A Feeling - Rooftop Performance / Take 1",
                "duration": 283
            },
            {
                "song_id": ObjectId("24b7431622d5120b793c303b"),
                "song_name": "One After 909 - Rooftop Performance",
                "duration": 189
            },
            {
                "song_id": ObjectId("e6dafa040c7591c353b4f7e5"),
                "song_name": "Dig A Pony - Rooftop Performance",
                "duration": 352
            },
            {
                "song_id": ObjectId("7d24af238617d2f10d050cdb"),
                "song_name": "God Save The Queen - Rooftop Performance / Jam",
                "duration": 25
            },
            {
                "song_id": ObjectId("7fcb6ef9929428549d7240d3"),
                "song_name": "I've Got A Feeling - Rooftop Performance / Take 2",
                "duration": 335
            },
            {
                "song_id": ObjectId("303b445af94b92d6840317e9"),
                "song_name": "Don't Let Me Down - Rooftop Performance / Take 2",
                "duration": 209
            },
            {
                "song_id": ObjectId("0dd6b4edc7725500612ddfb1"),
                "song_name": "Get Back - Rooftop Performance / Take 3",
                "duration": 226
            }
        ]
    },
    {
        "_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "title": "Live At The Hollywood Bowl",
        "release_year": 2016,
        "photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "total_songs": 17,
        "album_duration": 2607,
        "tracklist": [
            {
                "song_id": ObjectId("66e13b004c450114467e25b0"),
                "song_name": "Twist And Shout - Live / Remastered",
                "duration": 93
            },
            {
                "song_id": ObjectId("a334765ba2db2caacddb6b8b"),
                "song_name": "She's A Woman - Live / Remastered",
                "duration": 192
            },
            {
                "song_id": ObjectId("caf074fa5aef2b9d4fd471eb"),
                "song_name": "Dizzy Miss Lizzy - Live / Remastered",
                "duration": 219
            },
            {
                "song_id": ObjectId("ccf4a2753c667248c7b14053"),
                "song_name": "Ticket To Ride - Live / Remastered",
                "duration": 146
            },
            {
                "song_id": ObjectId("67e8805dcbe7612e34082797"),
                "song_name": "Can't Buy Me Love - Live / Remastered",
                "duration": 134
            },
            {
                "song_id": ObjectId("6c3cb2115c9f1e3547f82763"),
                "song_name": "Things We Said Today - Live / Remastered",
                "duration": 138
            },
            {
                "song_id": ObjectId("2dc389a9c21734e4b1da538b"),
                "song_name": "Roll Over Beethoven - Live / Remastered",
                "duration": 134
            },
            {
                "song_id": ObjectId("e6891d5ee4eebc8692fcdb7c"),
                "song_name": "Boys - Live / Remastered",
                "duration": 128
            },
            {
                "song_id": ObjectId("dbeb3c99a27e5bc7aa5de34a"),
                "song_name": "A Hard Day's Night - Live / Remastered",
                "duration": 193
            },
            {
                "song_id": ObjectId("7a7c43718d2e01c272d08e5f"),
                "song_name": "Help! - Live / Remastered",
                "duration": 172
            },
            {
                "song_id": ObjectId("e3a0f25a5c0279f3ea9ac554"),
                "song_name": "All My Loving - Live / Remastered",
                "duration": 135
            },
            {
                "song_id": ObjectId("ff8ffb1122b29fd1111fd858"),
                "song_name": "She Loves You - Live / Remastered",
                "duration": 191
            },
            {
                "song_id": ObjectId("5f373acfd080ce40b72de5cc"),
                "song_name": "Long Tall Sally - Live / Remastered",
                "duration": 124
            },
            {
                "song_id": ObjectId("d5ae258ac31bcbc1496c5857"),
                "song_name": "You Can't Do That - Live / Bonus Track",
                "duration": 154
            },
            {
                "song_id": ObjectId("a0d8a932dd1c5d039b1796c3"),
                "song_name": "I Want To Hold Your Hand - Live / Bonus Track",
                "duration": 149
            },
            {
                "song_id": ObjectId("bcad8a4a0565fcc6252566a7"),
                "song_name": "Everybody’s Trying To Be My Baby - Live / Bonus Track",
                "duration": 141
            },
            {
                "song_id": ObjectId("48f519c6e5a20fc3bd330351"),
                "song_name": "Baby's In Black - Live / Bonus Track",
                "duration": 164
            }
        ]
    },
    {
        "_id": ObjectId("43d460334c1f569afcca0f24"),
        "title": "Let It Be... Naked (Remastered)",
        "release_year": 2014,
        "photo": "https://i.scdn.co/image/ab67616d0000b273b9dd63a105a5afe5d58a783b",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "total_songs": 11,
        "album_duration": 2099,
        "tracklist": [
            {
                "song_id": ObjectId("88fed894147db46bb516478d"),
                "song_name": "Get Back - Naked Version / Remastered 2013",
                "duration": 154
            },
            {
                "song_id": ObjectId("13a59db99e8d4cf4a833c14f"),
                "song_name": "Dig A Pony - Naked Version / Remastered 2013",
                "duration": 218
            },
            {
                "song_id": ObjectId("b85aa29b283a20f8a51c7678"),
                "song_name": "For You Blue - Naked Version / Remastered 2013",
                "duration": 147
            },
            {
                "song_id": ObjectId("4bd6ffe5bce9c29ad7932e62"),
                "song_name": "The Long And Winding Road - Naked Version / Remastered 2013",
                "duration": 214
            },
            {
                "song_id": ObjectId("82057adf27ebe804fb551ed2"),
                "song_name": "Two Of Us - Naked Version / Remastered 2013",
                "duration": 200
            },
            {
                "song_id": ObjectId("215d441ddd7102836bb35dc7"),
                "song_name": "I've Got A Feeling - Naked Version / Remastered 2013",
                "duration": 210
            },
            {
                "song_id": ObjectId("5944947fe365b31bffe25a1e"),
                "song_name": "One After 909 - Naked Version / Remastered 2013",
                "duration": 164
            },
            {
                "song_id": ObjectId("1d619788f997fe9f8aefb864"),
                "song_name": "Don't Let Me Down - Naked Version / Remastered 2013",
                "duration": 198
            },
            {
                "song_id": ObjectId("730ac32ce4b3d823454ed988"),
                "song_name": "I Me Mine - Naked Version / Remastered 2013",
                "duration": 141
            },
            {
                "song_id": ObjectId("8963011564ac0f6674e71f2d"),
                "song_name": "Across The Universe - Naked Version / Remastered 2013",
                "duration": 218
            },
            {
                "song_id": ObjectId("15417efce1e038a2220dfb98"),
                "song_name": "Let It Be - Naked Version / Remastered 2013",
                "duration": 235
            }
        ]
    },
    {
        "_id": ObjectId("b510bdb5d8b499db326e6b00"),
        "title": "Yellow Submarine Songtrack",
        "release_year": 1999,
        "photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "total_songs": 15,
        "album_duration": 2731,
        "tracklist": [
            {
                "song_id": ObjectId("abb3ff62c9b1c40bd921c61f"),
                "song_name": "Yellow Submarine",
                "duration": 159
            },
            {
                "song_id": ObjectId("8a26d503b4a6e0f06287f199"),
                "song_name": "Hey Bulldog",
                "duration": 191
            },
            {
                "song_id": ObjectId("08e0df52b07d437cb518ae7c"),
                "song_name": "Eleanor Rigby",
                "duration": 125
            },
            {
                "song_id": ObjectId("d80cca024d88964ae48e9671"),
                "song_name": "Love You To",
                "duration": 178
            },
            {
                "song_id": ObjectId("2a59898a57acc52cfc77752b"),
                "song_name": "All Together Now",
                "duration": 130
            },
            {
                "song_id": ObjectId("8cbc6359d1af74168930cc2b"),
                "song_name": "Lucy In The Sky With Diamonds",
                "duration": 208
            },
            {
                "song_id": ObjectId("a2aac4e7018df2358e8076a3"),
                "song_name": "Think For Yourself",
                "duration": 138
            },
            {
                "song_id": ObjectId("bf5fce975efb8a14eb3060ab"),
                "song_name": "Sgt Pepper's Lonely Hearts Club Band",
                "duration": 121
            },
            {
                "song_id": ObjectId("9b9c19c2e5d98daf9489e999"),
                "song_name": "With A Little Help From My Friends",
                "duration": 165
            },
            {
                "song_id": ObjectId("1ec455034eed1e3a3c8dfbd6"),
                "song_name": "Baby You're A Rich Man",
                "duration": 180
            },
            {
                "song_id": ObjectId("9cd67878c1e064b7d4a56fe2"),
                "song_name": "Only A Northern Song",
                "duration": 204
            },
            {
                "song_id": ObjectId("0c16d4c3d287be312593a87f"),
                "song_name": "All You Need Is Love",
                "duration": 226
            },
            {
                "song_id": ObjectId("422d8241d35f63ed0dd00ea3"),
                "song_name": "When I'm Sixty Four",
                "duration": 159
            },
            {
                "song_id": ObjectId("84b482b9eea0084ae8bb550f"),
                "song_name": "Nowhere Man",
                "duration": 162
            },
            {
                "song_id": ObjectId("c78b7eab6496f1963e9f4130"),
                "song_name": "It's All Too Much",
                "duration": 385
            }
        ]
    },
    {
        "_id": ObjectId("b3469670c08588bc4a073895"),
        "title": "Let It Be (Remastered)",
        "release_year": 1970,
        "photo": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "total_songs": 12,
        "album_duration": 2106,
        "tracklist": [
            {
                "song_id": ObjectId("b5cfb18a62c2043271351e7b"),
                "song_name": "Two Of Us - Remastered 2009",
                "duration": 216
            },
            {
                "song_id": ObjectId("924a83110604cb1d83b8df59"),
                "song_name": "Dig A Pony - Remastered 2009",
                "duration": 235
            },
            {
                "song_id": ObjectId("54e5e128c53cc86efe0582d7"),
                "song_name": "Across The Universe - Remastered 2009",
                "duration": 228
            },
            {
                "song_id": ObjectId("efc2aface1d405ae65bf8c2d"),
                "song_name": "I Me Mine - Remastered 2009",
                "duration": 145
            },
            {
                "song_id": ObjectId("fe9fcb6738e7151fda966b1f"),
                "song_name": "Dig It - Remastered 2009",
                "duration": 50
            },
            {
                "song_id": ObjectId("2f7dc7dc3f73b2416aa0ed4b"),
                "song_name": "Let It Be - Remastered 2009",
                "duration": 243
            },
            {
                "song_id": ObjectId("ab444771600d923de1ab008d"),
                "song_name": "Maggie Mae - Remastered 2009",
                "duration": 40
            },
            {
                "song_id": ObjectId("a5d972515d2a5df197d30e9e"),
                "song_name": "I've Got A Feeling - Remastered 2009",
                "duration": 217
            },
            {
                "song_id": ObjectId("ac04f02ca68e3b6e429a29e2"),
                "song_name": "One After 909 - Remastered 2009",
                "duration": 173
            },
            {
                "song_id": ObjectId("371063950cb2d3a9e0238204"),
                "song_name": "The Long And Winding Road - Remastered 2009",
                "duration": 218
            },
            {
                "song_id": ObjectId("c3066485e8f1f6dc435fd63c"),
                "song_name": "For You Blue - Remastered 2009",
                "duration": 152
            },
            {
                "song_id": ObjectId("c63875293ca9b26e5943d992"),
                "song_name": "Get Back - Remastered 2009",
                "duration": 189
            }
        ]
    },
    {
        "_id": ObjectId("64bbde7320d693583059cf0f"),
        "title": "Abbey Road (Remastered)",
        "release_year": 1969,
        "photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "total_songs": 17,
        "album_duration": 2839,
        "tracklist": [
            {
                "song_id": ObjectId("3ff1fb61f086ca588b10b714"),
                "song_name": "Come Together - Remastered 2009",
                "duration": 259
            },
            {
                "song_id": ObjectId("04a626cf26d09105ce5d9019"),
                "song_name": "Something - Remastered 2009",
                "duration": 182
            },
            {
                "song_id": ObjectId("38b43d5f1efccfc7328d74e9"),
                "song_name": "Maxwell's Silver Hammer - Remastered 2009",
                "duration": 207
            },
            {
                "song_id": ObjectId("7b5f02b6ec1a6c380eb0cb12"),
                "song_name": "Oh! Darling - Remastered 2009",
                "duration": 207
            },
            {
                "song_id": ObjectId("32b616baa00eafd62a65dc97"),
                "song_name": "Octopus's Garden - Remastered 2009",
                "duration": 170
            },
            {
                "song_id": ObjectId("82395ea1990c5d2f94825979"),
                "song_name": "I Want You (She's So Heavy) - Remastered 2009",
                "duration": 467
            },
            {
                "song_id": ObjectId("972ff3ce0086fd0f875157d9"),
                "song_name": "Here Comes The Sun - Remastered 2009",
                "duration": 185
            },
            {
                "song_id": ObjectId("5eb376984ec6f57a467ac538"),
                "song_name": "Because - Remastered 2009",
                "duration": 165
            },
            {
                "song_id": ObjectId("6e8a2edf46d4fc6bd790e18d"),
                "song_name": "You Never Give Me Your Money - Remastered 2009",
                "duration": 242
            },
            {
                "song_id": ObjectId("708425e1630889bc99d138fd"),
                "song_name": "Sun King - Remastered 2009",
                "duration": 146
            },
            {
                "song_id": ObjectId("f5ce13232e023cbe950ba01e"),
                "song_name": "Mean Mr Mustard - Remastered 2009",
                "duration": 66
            },
            {
                "song_id": ObjectId("1a30b0325b39c9dc66e95d9a"),
                "song_name": "Polythene Pam - Remastered 2009",
                "duration": 72
            },
            {
                "song_id": ObjectId("6fffae53887c120cdf909101"),
                "song_name": "She Came In Through The Bathroom Window - Remastered 2009",
                "duration": 118
            },
            {
                "song_id": ObjectId("bdc1a8cbfbead61a65b5af89"),
                "song_name": "Golden Slumbers - Remastered 2009",
                "duration": 91
            },
            {
                "song_id": ObjectId("3f935718ad72ab0fbcd1dc24"),
                "song_name": "Carry That Weight - Remastered 2009",
                "duration": 96
            },
            {
                "song_id": ObjectId("3716f0b63e1e14f5491bcc30"),
                "song_name": "The End - Remastered 2009",
                "duration": 141
            },
            {
                "song_id": ObjectId("7d784f359fb81ebaed687cce"),
                "song_name": "Her Majesty - Remastered 2009",
                "duration": 25
            }
        ]
    },
    {
        "_id": ObjectId("83e4d47aa7b057c2fd2d8759"),
        "title": "Yellow Submarine (Remastered)",
        "release_year": 1969,
        "photo": "https://i.scdn.co/image/ab67616d0000b273d283808926ad3d2220e63c1c",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "total_songs": 13,
        "album_duration": 2377,
        "tracklist": [
            {
                "song_id": ObjectId("25cfab47087f5251eb943147"),
                "song_name": "Yellow Submarine - Remastered 2009",
                "duration": 159
            },
            {
                "song_id": ObjectId("52a3c452cb113a72f0199d3f"),
                "song_name": "Only A Northern Song - Remastered 2009",
                "duration": 204
            },
            {
                "song_id": ObjectId("7d61031545c7a089ecb94442"),
                "song_name": "All Together Now - Remastered 2009",
                "duration": 130
            },
            {
                "song_id": ObjectId("3630f35fcceb9c126b8e23de"),
                "song_name": "Hey Bulldog - Remastered 2009",
                "duration": 191
            },
            {
                "song_id": ObjectId("08a768aed2f547a43671f59d"),
                "song_name": "It's All Too Much - Remastered 2009",
                "duration": 385
            },
            {
                "song_id": ObjectId("e1c90336650a67e578e8e5e4"),
                "song_name": "All You Need Is Love - Remastered 2009",
                "duration": 231
            },
            {
                "song_id": ObjectId("9dfb53b47d334ec535132d1c"),
                "song_name": "Pepperland - Remastered 2009",
                "duration": 140
            },
            {
                "song_id": ObjectId("5bbc8a0019816c8b77c35d15"),
                "song_name": "Sea Of Time - Remastered 2009",
                "duration": 180
            },
            {
                "song_id": ObjectId("3ae91461d49be3a5fcf82732"),
                "song_name": "Sea Of Holes - Remastered 2009",
                "duration": 136
            },
            {
                "song_id": ObjectId("e05ca70a69a76ee6fa860f86"),
                "song_name": "Sea Of Monsters - Remastered 2009",
                "duration": 216
            },
            {
                "song_id": ObjectId("064a812f67536a3699500601"),
                "song_name": "March Of The Meanies - Remastered 2009",
                "duration": 139
            },
            {
                "song_id": ObjectId("37449c9db2e04c094b4f5d9d"),
                "song_name": "Pepperland Laid Waste - Remastered 2009",
                "duration": 132
            },
            {
                "song_id": ObjectId("3566b2e085160aa9e4ed5597"),
                "song_name": "Yellow Submarine In Pepperland - Remastered 2009",
                "duration": 134
            }
        ]
    },
    {
        "_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "title": "The Beatles (Remastered)",
        "release_year": 1968,
        "photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "total_songs": 20,
        "album_duration": 3347,
        "tracklist": [
            {
                "song_id": ObjectId("d0d993f4ff4d487a22c44793"),
                "song_name": "Back In The U.S.S.R. - Remastered 2009",
                "duration": 163
            },
            {
                "song_id": ObjectId("4009d8a61ee68bd90934d9f8"),
                "song_name": "Dear Prudence - Remastered 2009",
                "duration": 235
            },
            {
                "song_id": ObjectId("b83ad38ffd3675a6a0b8f8f1"),
                "song_name": "Glass Onion - Remastered 2009",
                "duration": 137
            },
            {
                "song_id": ObjectId("6d79ddfe40a1ef395451880a"),
                "song_name": "Ob-La-Di, Ob-La-Da - Remastered 2009",
                "duration": 188
            },
            {
                "song_id": ObjectId("1d269badfe25c11b595edd38"),
                "song_name": "Wild Honey Pie - Remastered 2009",
                "duration": 52
            },
            {
                "song_id": ObjectId("537ed42948f073af656d6d29"),
                "song_name": "The Continuing Story Of Bungalow Bill - Remastered 2009",
                "duration": 194
            },
            {
                "song_id": ObjectId("7207b49a7176274d68249d46"),
                "song_name": "While My Guitar Gently Weeps - Remastered 2009",
                "duration": 285
            },
            {
                "song_id": ObjectId("575575312c1ea7ac5c447be6"),
                "song_name": "Happiness Is A Warm Gun - Remastered 2009",
                "duration": 164
            },
            {
                "song_id": ObjectId("97ff400a219826bf813cd89c"),
                "song_name": "Martha My Dear - Remastered 2009",
                "duration": 148
            },
            {
                "song_id": ObjectId("a058b86db677861b29035df2"),
                "song_name": "I'm So Tired - Remastered 2009",
                "duration": 123
            },
            {
                "song_id": ObjectId("59c8e46adcdb7865b450bc8e"),
                "song_name": "Blackbird - Remastered 2009",
                "duration": 138
            },
            {
                "song_id": ObjectId("6290db611777e234c1890878"),
                "song_name": "Piggies - Remastered 2009",
                "duration": 124
            },
            {
                "song_id": ObjectId("5282c1c6911ca310e1e3fb13"),
                "song_name": "Rocky Raccoon - Remastered 2009",
                "duration": 213
            },
            {
                "song_id": ObjectId("5fddfee3e45bb9cc4718c9b1"),
                "song_name": "Don't Pass Me By - Remastered 2009",
                "duration": 230
            },
            {
                "song_id": ObjectId("583290e72760474922a54aec"),
                "song_name": "Why Don't We Do It In The Road? - Remastered 2009",
                "duration": 101
            },
            {
                "song_id": ObjectId("ae82ae601fc86604ebce7fe0"),
                "song_name": "I Will - Remastered 2009",
                "duration": 105
            },
            {
                "song_id": ObjectId("01a83af427421b3439008bb8"),
                "song_name": "Julia - Remastered 2009",
                "duration": 176
            },
            {
                "song_id": ObjectId("fb7d6be2173e7921c27f957b"),
                "song_name": "Birthday - Remastered 2009",
                "duration": 163
            },
            {
                "song_id": ObjectId("b60895304a074978547aa248"),
                "song_name": "Yer Blues - Remastered 2009",
                "duration": 240
            },
            {
                "song_id": ObjectId("6dbf89b6529a780f107a5176"),
                "song_name": "Mother Nature's Son - Remastered 2009",
                "duration": 168
            }
        ]
    },
    {
        "_id": ObjectId("bb7a62209e5825f744eb5b65"),
        "title": "you seem pretty sad for a girl so in love",
        "release_year": 2026,
        "photo": "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "total_songs": 13,
        "album_duration": 3055,
        "tracklist": [
            {
                "song_id": ObjectId("906fa4db0f517f823fd3e9cf"),
                "song_name": "drop dead",
                "duration": 224
            },
            {
                "song_id": ObjectId("1130d2dfb501d1ca0e97245b"),
                "song_name": "stupid song",
                "duration": 209
            },
            {
                "song_id": ObjectId("40cb64a5d799c841c9534335"),
                "song_name": "honeybee",
                "duration": 223
            },
            {
                "song_id": ObjectId("09bc1e90d6608b1312508c51"),
                "song_name": "maggots for brains",
                "duration": 240
            },
            {
                "song_id": ObjectId("8db45adc759e91cd8f671f3d"),
                "song_name": "u + me = <3",
                "duration": 247
            },
            {
                "song_id": ObjectId("56eb90cb7aa8c2c21a5588b3"),
                "song_name": "my way",
                "duration": 180
            },
            {
                "song_id": ObjectId("75abad39d5b773d80a3883a6"),
                "song_name": "purple",
                "duration": 240
            },
            {
                "song_id": ObjectId("9990a202fee0274587c09083"),
                "song_name": "the cure",
                "duration": 297
            },
            {
                "song_id": ObjectId("b38769dd93f32c5ac42af6e1"),
                "song_name": "begged",
                "duration": 217
            },
            {
                "song_id": ObjectId("d64fb23d85215d2f2344f248"),
                "song_name": "what’s wrong with me",
                "duration": 224
            },
            {
                "song_id": ObjectId("518c9dfb2a31565a55126cfc"),
                "song_name": "less",
                "duration": 193
            },
            {
                "song_id": ObjectId("cef9f05d7b898519d62e2911"),
                "song_name": "expectations",
                "duration": 221
            },
            {
                "song_id": ObjectId("0074f3521c24b897cade6dd1"),
                "song_name": "cigarette smoke",
                "duration": 340
            }
        ]
    },
    {
        "_id": ObjectId("dfc243f396bc5f28089a41af"),
        "title": "GUTS (spilled)",
        "release_year": 2024,
        "photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "total_songs": 17,
        "album_duration": 3267,
        "tracklist": [
            {
                "song_id": ObjectId("629a29679cf1c2607ab75522"),
                "song_name": "all-american bitch",
                "duration": 165
            },
            {
                "song_id": ObjectId("5c97c7d09665292425be752f"),
                "song_name": "bad idea right?",
                "duration": 184
            },
            {
                "song_id": ObjectId("94a995068b67d18081227fcc"),
                "song_name": "vampire",
                "duration": 219
            },
            {
                "song_id": ObjectId("423ae8250db6dc5146abe447"),
                "song_name": "lacy",
                "duration": 177
            },
            {
                "song_id": ObjectId("d8598853d52690fa8516e064"),
                "song_name": "ballad of a homeschooled girl",
                "duration": 203
            },
            {
                "song_id": ObjectId("510e95561b8fbbbf8ae8c93a"),
                "song_name": "making the bed",
                "duration": 198
            },
            {
                "song_id": ObjectId("f7b2df1eb17b03aade9b2ab3"),
                "song_name": "logical",
                "duration": 231
            },
            {
                "song_id": ObjectId("d1f314c9761efecc279ff60f"),
                "song_name": "get him back!",
                "duration": 211
            },
            {
                "song_id": ObjectId("f793e6dd238a6b1c84155b6d"),
                "song_name": "love is embarrassing",
                "duration": 154
            },
            {
                "song_id": ObjectId("dccab733dd9e6dae05cc8436"),
                "song_name": "the grudge",
                "duration": 189
            },
            {
                "song_id": ObjectId("210c3cbb5357bc53332222d0"),
                "song_name": "pretty isn’t pretty",
                "duration": 199
            },
            {
                "song_id": ObjectId("b72c45ae36b3fef70fdf8006"),
                "song_name": "teenage dream",
                "duration": 222
            },
            {
                "song_id": ObjectId("e05a1900f8c4f2b10234d07e"),
                "song_name": "obsessed",
                "duration": 170
            },
            {
                "song_id": ObjectId("ee88847d67a1076074998d12"),
                "song_name": "girl i’ve always been",
                "duration": 121
            },
            {
                "song_id": ObjectId("010308f5d2825a1e7981fe34"),
                "song_name": "scared of my guitar",
                "duration": 263
            },
            {
                "song_id": ObjectId("1b52f93691b18d67a797b151"),
                "song_name": "stranger",
                "duration": 192
            },
            {
                "song_id": ObjectId("b867960b5fd52402e4d312b7"),
                "song_name": "so american",
                "duration": 169
            }
        ]
    },
    {
        "_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "title": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "release_year": 2023,
        "photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "total_songs": 17,
        "album_duration": 2989,
        "tracklist": [
            {
                "song_id": ObjectId("d11181f2f5b4eabdfae51b09"),
                "song_name": "Can’t Catch Me Now - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 205
            },
            {
                "song_id": ObjectId("f56813c3ccdff94246e24f9a"),
                "song_name": "The Hanging Tree - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 143
            },
            {
                "song_id": ObjectId("d142a42cd8fdfb84e62bcc41"),
                "song_name": "Wool - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 229
            },
            {
                "song_id": ObjectId("894d2f3661fb983452cc3a37"),
                "song_name": "Nothing You Can Take From Me - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 95
            },
            {
                "song_id": ObjectId("109a2cbe1ccbae785ccfd6ea"),
                "song_name": "The Garden - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 222
            },
            {
                "song_id": ObjectId("f7aa4e61ceae0a5d9b60bb1e"),
                "song_name": "The Ballad of Lucy Gray Baird - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 139
            },
            {
                "song_id": ObjectId("a138931afaf69e7bc7df17fc"),
                "song_name": "Bury Me Beneath The Willow - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 222
            },
            {
                "song_id": ObjectId("29acdf7b2437c3eded5fc55a"),
                "song_name": "The Old Therebefore / Singing at Snakes - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 168
            },
            {
                "song_id": ObjectId("0ca29d1efea76c45bbb4a420"),
                "song_name": "Burn Me Once - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 200
            },
            {
                "song_id": ObjectId("362e61b402191aff20fdd463"),
                "song_name": "District 12 Stomp - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 43
            },
            {
                "song_id": ObjectId("eda8a77aacd07b9e352a4af9"),
                "song_name": "Nothing You Can Take From Me (Boot-Stompin' Version) - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 193
            },
            {
                "song_id": ObjectId("07c8f576c3e5d8e20764c8f0"),
                "song_name": "Cabin Song - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 206
            },
            {
                "song_id": ObjectId("5488da51cc2f5a24f8e667f9"),
                "song_name": "Lucy Gray (part 1) - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 161
            },
            {
                "song_id": ObjectId("bff07c2479c5181d3bcf2b31"),
                "song_name": "Pure As The Driven Snow - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 233
            },
            {
                "song_id": ObjectId("a494cf74db460d6b0e620048"),
                "song_name": "Winter's Come and Gone - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 169
            },
            {
                "song_id": ObjectId("8f58924a6db4408b8e797130"),
                "song_name": "Keep On The Sunny Side - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 163
            },
            {
                "song_id": ObjectId("025a86ffe9eca46175cd3d4d"),
                "song_name": "Lucy Gray (part 2) - from The Hunger Games: The Ballad of Songbirds & Snakes",
                "duration": 198
            }
        ]
    },
    {
        "_id": ObjectId("44b54cd738f4cb5f01b80902"),
        "title": "GUTS",
        "release_year": 2023,
        "photo": "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "total_songs": 12,
        "album_duration": 2352,
        "tracklist": [
            {
                "song_id": ObjectId("e3a80bd7ce9a4b74e6e84d39"),
                "song_name": "all-american bitch",
                "duration": 165
            },
            {
                "song_id": ObjectId("7b9d8baaffa3e2ae0bd4173d"),
                "song_name": "bad idea right?",
                "duration": 184
            },
            {
                "song_id": ObjectId("22d266007e0bd4f3c6e1df85"),
                "song_name": "vampire",
                "duration": 219
            },
            {
                "song_id": ObjectId("398081fe0ca7c3754f9aabe6"),
                "song_name": "lacy",
                "duration": 177
            },
            {
                "song_id": ObjectId("1568019429a855d47913ce35"),
                "song_name": "ballad of a homeschooled girl",
                "duration": 203
            },
            {
                "song_id": ObjectId("a5eb86398933e67ef3e760d5"),
                "song_name": "making the bed",
                "duration": 198
            },
            {
                "song_id": ObjectId("e41f86670a0d2b17c5b6e9c1"),
                "song_name": "logical",
                "duration": 231
            },
            {
                "song_id": ObjectId("1b0595c6bf854076ba7fa599"),
                "song_name": "get him back!",
                "duration": 211
            },
            {
                "song_id": ObjectId("078b9337e4ed4613726674db"),
                "song_name": "love is embarrassing",
                "duration": 154
            },
            {
                "song_id": ObjectId("fb2e187d678b81455f188f65"),
                "song_name": "the grudge",
                "duration": 189
            },
            {
                "song_id": ObjectId("3563bffb8a150f58fcc9eb8a"),
                "song_name": "pretty isn’t pretty",
                "duration": 199
            },
            {
                "song_id": ObjectId("98aa380f76a226b4153109e4"),
                "song_name": "teenage dream",
                "duration": 222
            }
        ]
    },
    {
        "_id": ObjectId("25f4c73b5dc14d5a7e171dd1"),
        "title": "SOUR",
        "release_year": 2021,
        "photo": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "total_songs": 11,
        "album_duration": 2081,
        "tracklist": [
            {
                "song_id": ObjectId("a7aa082353c2789104cfaf8a"),
                "song_name": "brutal",
                "duration": 143
            },
            {
                "song_id": ObjectId("a736774db32ac8c09ca89754"),
                "song_name": "traitor",
                "duration": 229
            },
            {
                "song_id": ObjectId("199e1cd95d1477da877f18d8"),
                "song_name": "drivers license",
                "duration": 242
            },
            {
                "song_id": ObjectId("e706a81ea5636c2bf4c93b33"),
                "song_name": "1 step forward, 3 steps back",
                "duration": 163
            },
            {
                "song_id": ObjectId("903598ed413a4fc2aadeef1d"),
                "song_name": "deja vu",
                "duration": 215
            },
            {
                "song_id": ObjectId("4993ce7effba2453a9a3d22d"),
                "song_name": "good 4 u",
                "duration": 178
            },
            {
                "song_id": ObjectId("885a14bb18043d60343010e8"),
                "song_name": "enough for you",
                "duration": 202
            },
            {
                "song_id": ObjectId("e2350ccf9b81cdd8c48e37ba"),
                "song_name": "happier",
                "duration": 175
            },
            {
                "song_id": ObjectId("f92a153a1340bd760e53d415"),
                "song_name": "jealousy, jealousy",
                "duration": 173
            },
            {
                "song_id": ObjectId("6f6f19c414c57c29be454a11"),
                "song_name": "favorite crime",
                "duration": 152
            },
            {
                "song_id": ObjectId("40d3f3e78c99c77299c4eecd"),
                "song_name": "hope ur ok",
                "duration": 209
            }
        ]
    },
    {
        "_id": ObjectId("d872134fb70580e9100c877b"),
        "title": "The Car",
        "release_year": 2022,
        "photo": "https://i.scdn.co/image/ab67616d0000b27307823ee6237208c835802663",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "total_songs": 10,
        "album_duration": 2238,
        "tracklist": [
            {
                "song_id": ObjectId("8233dc55436dbd2bd36dfb7c"),
                "song_name": "There’d Better Be A Mirrorball",
                "duration": 265
            },
            {
                "song_id": ObjectId("b75e635b6cadf3f094c7e83f"),
                "song_name": "I Ain’t Quite Where I Think I Am",
                "duration": 191
            },
            {
                "song_id": ObjectId("6a78ae054ed496781ecd191f"),
                "song_name": "Sculptures Of Anything Goes",
                "duration": 239
            },
            {
                "song_id": ObjectId("79b257b55e73c85200173662"),
                "song_name": "Jet Skis On The Moat",
                "duration": 197
            },
            {
                "song_id": ObjectId("6cc9ebe4687f27bdc3bf8e51"),
                "song_name": "Body Paint",
                "duration": 290
            },
            {
                "song_id": ObjectId("74650d354f1d3c1787c2aa7c"),
                "song_name": "The Car",
                "duration": 198
            },
            {
                "song_id": ObjectId("6e6f342e00cd72e9cf4aff9d"),
                "song_name": "Big Ideas",
                "duration": 237
            },
            {
                "song_id": ObjectId("d585229b8652ad08b970493f"),
                "song_name": "Hello You",
                "duration": 244
            },
            {
                "song_id": ObjectId("24be289f524bc1b4596371c0"),
                "song_name": "Mr Schwartz",
                "duration": 210
            },
            {
                "song_id": ObjectId("78fb6a5ce4a070552b9a3290"),
                "song_name": "Perfect Sense",
                "duration": 167
            }
        ]
    },
    {
        "_id": ObjectId("203742e3b2a39415c350641e"),
        "title": "Live at the Royal Albert Hall",
        "release_year": 2020,
        "photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "total_songs": 20,
        "album_duration": 5167,
        "tracklist": [
            {
                "song_id": ObjectId("9010031bfae60dea2ca05629"),
                "song_name": "Four Out Of Five - Live",
                "duration": 331
            },
            {
                "song_id": ObjectId("9e9cb89cd6937089fec928fa"),
                "song_name": "Brianstorm - Live",
                "duration": 209
            },
            {
                "song_id": ObjectId("6dc901c146c1cbd11f943110"),
                "song_name": "Crying Lightning - Live",
                "duration": 240
            },
            {
                "song_id": ObjectId("15c6d723dc5075300d981e11"),
                "song_name": "Do I Wanna Know? - Live",
                "duration": 281
            },
            {
                "song_id": ObjectId("aeb0af0e2b7d4a0b82fb23ff"),
                "song_name": "Why'd You Only Call Me When You're High? - Live",
                "duration": 183
            },
            {
                "song_id": ObjectId("114aa760772b27b9eb88972e"),
                "song_name": "505 - Live",
                "duration": 275
            },
            {
                "song_id": ObjectId("7d1271c87122b5068673b098"),
                "song_name": "One Point Perspective - Live",
                "duration": 202
            },
            {
                "song_id": ObjectId("28ae31b49f08be2b6bf46da0"),
                "song_name": "Do Me A Favour - Live",
                "duration": 239
            },
            {
                "song_id": ObjectId("1d2801df92549b42e9090321"),
                "song_name": "Cornerstone - Live",
                "duration": 221
            },
            {
                "song_id": ObjectId("7cf24ee7159c2727eb623f17"),
                "song_name": "Knee Socks - Live",
                "duration": 350
            },
            {
                "song_id": ObjectId("80c6a1cccf94c01ce8bd8386"),
                "song_name": "Arabella - Live",
                "duration": 246
            },
            {
                "song_id": ObjectId("7978f177523bceca264df38c"),
                "song_name": "Tranquility Base Hotel & Casino - Live",
                "duration": 243
            },
            {
                "song_id": ObjectId("3bf0fba7254e17e7a39c9654"),
                "song_name": "She Looks Like Fun - Live",
                "duration": 201
            },
            {
                "song_id": ObjectId("04154510ddfe3e7245daa393"),
                "song_name": "From The Ritz To The Rubble - Live",
                "duration": 221
            },
            {
                "song_id": ObjectId("0344cadc2ff2704d114893b9"),
                "song_name": "Pretty Visitors - Live",
                "duration": 241
            },
            {
                "song_id": ObjectId("720d4e78e343da9f96c80a68"),
                "song_name": "Don't Sit Down 'Cause I've Moved Your Chair - Live",
                "duration": 221
            },
            {
                "song_id": ObjectId("30d2d807525f6d6b5ebbf70a"),
                "song_name": "I Bet You Look Good On The Dancefloor - Live",
                "duration": 293
            },
            {
                "song_id": ObjectId("761a93d256b467e9fd64aaf7"),
                "song_name": "Star Treatment - Live",
                "duration": 335
            },
            {
                "song_id": ObjectId("a40f3820fdcf00162208133c"),
                "song_name": "The View From The Afternoon - Live",
                "duration": 264
            },
            {
                "song_id": ObjectId("f394fbf9ca89b93ab83be8b2"),
                "song_name": "R U Mine? - Live",
                "duration": 371
            }
        ]
    },
    {
        "_id": ObjectId("f088ce60e0ff74738f5277e2"),
        "title": "Tranquility Base Hotel & Casino",
        "release_year": 2018,
        "photo": "https://i.scdn.co/image/ab67616d0000b2738895ff0f90525f4aa9437c27",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "total_songs": 11,
        "album_duration": 2451,
        "tracklist": [
            {
                "song_id": ObjectId("262d03776a34c96bba8cea51"),
                "song_name": "Star Treatment",
                "duration": 354
            },
            {
                "song_id": ObjectId("552c5e6b1072008fbdeb4102"),
                "song_name": "One Point Perspective",
                "duration": 208
            },
            {
                "song_id": ObjectId("019f101a714100df14299af2"),
                "song_name": "American Sports",
                "duration": 158
            },
            {
                "song_id": ObjectId("26208399b75e569001e0881f"),
                "song_name": "Tranquility Base Hotel & Casino",
                "duration": 211
            },
            {
                "song_id": ObjectId("06cfdc80c5764648ce9bbebc"),
                "song_name": "Golden Trunks",
                "duration": 173
            },
            {
                "song_id": ObjectId("da7e8124edb189fb8ad158e1"),
                "song_name": "Four Out Of Five",
                "duration": 312
            },
            {
                "song_id": ObjectId("c353fd82af17d8d557efa24f"),
                "song_name": "The World's First Ever Monster Truck Front Flip",
                "duration": 180
            },
            {
                "song_id": ObjectId("89709520a30043efcf761490"),
                "song_name": "Science Fiction",
                "duration": 185
            },
            {
                "song_id": ObjectId("9c016e2c1af4df42b4b276ca"),
                "song_name": "She Looks Like Fun",
                "duration": 182
            },
            {
                "song_id": ObjectId("5cca37bdb0a01522dd08252e"),
                "song_name": "Batphone",
                "duration": 271
            },
            {
                "song_id": ObjectId("392ea1670145710bcbfd7529"),
                "song_name": "The Ultracheese",
                "duration": 217
            }
        ]
    },
    {
        "_id": ObjectId("afbd130238ed230d29266833"),
        "title": "AM",
        "release_year": 2013,
        "photo": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "total_songs": 12,
        "album_duration": 2504,
        "tracklist": [
            {
                "song_id": ObjectId("ed08a974a756d87394a56e19"),
                "song_name": "Do I Wanna Know?",
                "duration": 272
            },
            {
                "song_id": ObjectId("540e044cc627fde3e0d788ad"),
                "song_name": "R U Mine?",
                "duration": 201
            },
            {
                "song_id": ObjectId("8d856508e0221ddbb1035c91"),
                "song_name": "One For The Road",
                "duration": 206
            },
            {
                "song_id": ObjectId("fd89c18eb602be218d9dc45f"),
                "song_name": "Arabella",
                "duration": 207
            },
            {
                "song_id": ObjectId("da1b82785c30fb7052f93750"),
                "song_name": "I Want It All",
                "duration": 185
            },
            {
                "song_id": ObjectId("cf7a4a08fa8fe68e9754a2b0"),
                "song_name": "No. 1 Party Anthem",
                "duration": 243
            },
            {
                "song_id": ObjectId("e54b2d9e17e97a2cda79f7c6"),
                "song_name": "Mad Sounds",
                "duration": 215
            },
            {
                "song_id": ObjectId("5f2e209b706e578f5bef35da"),
                "song_name": "Fireside",
                "duration": 181
            },
            {
                "song_id": ObjectId("adf52487b41a853e295e6c1d"),
                "song_name": "Why'd You Only Call Me When You're High?",
                "duration": 161
            },
            {
                "song_id": ObjectId("2617cd50630717c6d3b15b21"),
                "song_name": "Snap Out Of It",
                "duration": 193
            },
            {
                "song_id": ObjectId("f80236931e0a8db69495665f"),
                "song_name": "Knee Socks",
                "duration": 257
            },
            {
                "song_id": ObjectId("2efe9dc4d2e000cb5ea20c9b"),
                "song_name": "I Wanna Be Yours",
                "duration": 183
            }
        ]
    },
    {
        "_id": ObjectId("fc9827fe1ce82fc35ad636c2"),
        "title": "Suck It and See",
        "release_year": 2011,
        "photo": "https://i.scdn.co/image/ab67616d0000b273cb44038b22f3d8a5e4e62d5a",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "total_songs": 12,
        "album_duration": 2404,
        "tracklist": [
            {
                "song_id": ObjectId("c3a36c5301c0398fc362a1c6"),
                "song_name": "She's Thunderstorms",
                "duration": 234
            },
            {
                "song_id": ObjectId("06e826a08dbd6e7e1700a99a"),
                "song_name": "Black Treacle",
                "duration": 217
            },
            {
                "song_id": ObjectId("c36c9a2e972d2ccbfc127d83"),
                "song_name": "Brick By Brick",
                "duration": 179
            },
            {
                "song_id": ObjectId("9f568daf0ead8dd1f215e8aa"),
                "song_name": "The Hellcat Spangled Shalalala",
                "duration": 180
            },
            {
                "song_id": ObjectId("26cdfddcbe213d4d0884b3b3"),
                "song_name": "Don't Sit Down 'Cause I've Moved Your Chair",
                "duration": 183
            },
            {
                "song_id": ObjectId("e10b8397c2e064e42fa5ac8d"),
                "song_name": "Library Pictures",
                "duration": 142
            },
            {
                "song_id": ObjectId("88ace37c68f838d5f4682c5f"),
                "song_name": "All My Own Stunts",
                "duration": 232
            },
            {
                "song_id": ObjectId("08d02b876a6669356ceb0dc1"),
                "song_name": "Reckless Serenade",
                "duration": 162
            },
            {
                "song_id": ObjectId("76076cfec016a04af12ac633"),
                "song_name": "Piledriver Waltz",
                "duration": 203
            },
            {
                "song_id": ObjectId("a1e755edaddd1ffd8958c229"),
                "song_name": "Love is a Laserquest",
                "duration": 191
            },
            {
                "song_id": ObjectId("4463e1b90dce913cbfaf1ddd"),
                "song_name": "Suck It and See",
                "duration": 225
            },
            {
                "song_id": ObjectId("6f119b9ab66260c69231d31f"),
                "song_name": "That's Where You're Wrong",
                "duration": 256
            }
        ]
    },
    {
        "_id": ObjectId("753560e43d8272a799e8945c"),
        "title": "Humbug",
        "release_year": 2009,
        "photo": "https://i.scdn.co/image/ab67616d0000b273f65d720a5d70dbb93e96d528",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "total_songs": 10,
        "album_duration": 2355,
        "tracklist": [
            {
                "song_id": ObjectId("f3275d7db8732eed40820a1f"),
                "song_name": "My Propeller",
                "duration": 205
            },
            {
                "song_id": ObjectId("c8928601179f47a13e573690"),
                "song_name": "Crying Lightning",
                "duration": 224
            },
            {
                "song_id": ObjectId("b51d46f0a6c2a5b285ff2f78"),
                "song_name": "Dangerous Animals",
                "duration": 210
            },
            {
                "song_id": ObjectId("459d7db5e6e2c5c6acd0f217"),
                "song_name": "Secret Door",
                "duration": 223
            },
            {
                "song_id": ObjectId("bdcb6b801577e472b2905cf6"),
                "song_name": "Potion Approaching",
                "duration": 212
            },
            {
                "song_id": ObjectId("bd3da61ba16cb3cc5e755653"),
                "song_name": "Fire And The Thud",
                "duration": 237
            },
            {
                "song_id": ObjectId("070925bd508cb725a03bd5f1"),
                "song_name": "Cornerstone",
                "duration": 197
            },
            {
                "song_id": ObjectId("f210218589e78efbe1bb5c43"),
                "song_name": "Dance Little Liar",
                "duration": 283
            },
            {
                "song_id": ObjectId("aff202bd37a4589ad37e61c8"),
                "song_name": "Pretty Visitors",
                "duration": 220
            },
            {
                "song_id": ObjectId("009ac9bde9e51703eb2e01a2"),
                "song_name": "The Jeweller's Hands",
                "duration": 344
            }
        ]
    },
    {
        "_id": ObjectId("5c7fe76e009fcaaad46a9fda"),
        "title": "Favourite Worst Nightmare",
        "release_year": 2007,
        "photo": "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "total_songs": 12,
        "album_duration": 2280,
        "tracklist": [
            {
                "song_id": ObjectId("26ceb56ea1ecb8e3b0098640"),
                "song_name": "Brianstorm",
                "duration": 172
            },
            {
                "song_id": ObjectId("d4d9f27faa1cbef407a37f93"),
                "song_name": "Teddy Picker",
                "duration": 165
            },
            {
                "song_id": ObjectId("3209244f35efa2f5850024c4"),
                "song_name": "D is for Dangerous",
                "duration": 138
            },
            {
                "song_id": ObjectId("d0ecb4d3b64d7691a0504633"),
                "song_name": "Balaclava",
                "duration": 171
            },
            {
                "song_id": ObjectId("44672df52edf2ecd9b10e103"),
                "song_name": "Fluorescent Adolescent",
                "duration": 183
            },
            {
                "song_id": ObjectId("c9aaf31ff246c132536f63f7"),
                "song_name": "Only Ones Who Know",
                "duration": 184
            },
            {
                "song_id": ObjectId("314c99b32a7c6ef9f257adb0"),
                "song_name": "Do Me a Favour",
                "duration": 209
            },
            {
                "song_id": ObjectId("6bc88539125665e7e017d829"),
                "song_name": "This House is a Circus",
                "duration": 191
            },
            {
                "song_id": ObjectId("31db88a9647892a18bbae203"),
                "song_name": "If You Were There, Beware",
                "duration": 276
            },
            {
                "song_id": ObjectId("134892c009577bd44c5dab75"),
                "song_name": "The Bad Thing",
                "duration": 145
            },
            {
                "song_id": ObjectId("bc44feb3108dbb0614e96ae1"),
                "song_name": "Old Yellow Bricks",
                "duration": 193
            },
            {
                "song_id": ObjectId("34a5f491586ca1acb114c0f9"),
                "song_name": "505",
                "duration": 253
            }
        ]
    },
    {
        "_id": ObjectId("a86553af2a72cbd59339dccf"),
        "title": "Whatever People Say I Am, That's What I'm Not",
        "release_year": 2006,
        "photo": "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "total_songs": 13,
        "album_duration": 2462,
        "tracklist": [
            {
                "song_id": ObjectId("2dc20b70f1122168c5946606"),
                "song_name": "The View From The Afternoon",
                "duration": 222
            },
            {
                "song_id": ObjectId("cc9367c9bd213f2e2cf1ec26"),
                "song_name": "I Bet You Look Good On The Dancefloor",
                "duration": 173
            },
            {
                "song_id": ObjectId("ccc92a4926f79a7c2afe9799"),
                "song_name": "Fake Tales Of San Francisco",
                "duration": 177
            },
            {
                "song_id": ObjectId("1eb4df5f93d0ac3706d73045"),
                "song_name": "Dancing Shoes",
                "duration": 141
            },
            {
                "song_id": ObjectId("858fd3f818358a7cdb42f19d"),
                "song_name": "You Probably Couldn't See For The Lights But You Were Staring Straight At Me",
                "duration": 130
            },
            {
                "song_id": ObjectId("9fa89e4cff5b36e38bc331c4"),
                "song_name": "Still Take You Home",
                "duration": 173
            },
            {
                "song_id": ObjectId("0239897fb523958f3cc147e8"),
                "song_name": "Riot Van",
                "duration": 134
            },
            {
                "song_id": ObjectId("6fb9af260b9ed3cc08bb2ffa"),
                "song_name": "Red Light Indicates Doors Are Secured",
                "duration": 143
            },
            {
                "song_id": ObjectId("26151dc7e8e77b826ffde84a"),
                "song_name": "Mardy Bum",
                "duration": 175
            },
            {
                "song_id": ObjectId("2e2716204d69a6e134aed413"),
                "song_name": "Perhaps Vampires Is A Bit Strong But…",
                "duration": 268
            },
            {
                "song_id": ObjectId("3e48354df3b1e7cb6a203a4a"),
                "song_name": "When The Sun Goes Down",
                "duration": 202
            },
            {
                "song_id": ObjectId("e0059428346aa94f917bfd7f"),
                "song_name": "From The Ritz To The Rubble",
                "duration": 193
            },
            {
                "song_id": ObjectId("f64c224745564f13d7fe3072"),
                "song_name": "A Certain Romance",
                "duration": 331
            }
        ]
    },
    {
        "_id": ObjectId("28fe26d7ba305b582bfc6a1d"),
        "title": "The Eternal Idol (2025 Remaster)",
        "release_year": 2025,
        "photo": "https://i.scdn.co/image/ab67616d0000b2734e18b68c99002afa53e02f9e",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "total_songs": 11,
        "album_duration": 3004,
        "tracklist": [
            {
                "song_id": ObjectId("7aec7cd65f971d107da47ed3"),
                "song_name": "The Shining - 2025 Remaster",
                "duration": 357
            },
            {
                "song_id": ObjectId("0213ff611fb658db9946cd58"),
                "song_name": "Ancient Warrior - 2025 Remaster",
                "duration": 332
            },
            {
                "song_id": ObjectId("c022e31daaced189f961851f"),
                "song_name": "Hard Life to Love - 2025 Remaster",
                "duration": 298
            },
            {
                "song_id": ObjectId("614451c78f5e3f8a66290d22"),
                "song_name": "Glory Ride - 2025 Remaster",
                "duration": 288
            },
            {
                "song_id": ObjectId("64650f7e541e029f41e14a01"),
                "song_name": "Born to Lose - 2025 Remaster",
                "duration": 223
            },
            {
                "song_id": ObjectId("c5bdd2b19c39b81c79a315f0"),
                "song_name": "Nightmare - 2025 Remaster",
                "duration": 319
            },
            {
                "song_id": ObjectId("3e3d20444d829e6e56437fc7"),
                "song_name": "Scarlet Pimpernel - 2025 Remaster",
                "duration": 126
            },
            {
                "song_id": ObjectId("61f35eb4174b0e2bd9f1dcc3"),
                "song_name": "Lost Forever - 2025 Remaster",
                "duration": 245
            },
            {
                "song_id": ObjectId("3951a70b3cee13e5ef809b9d"),
                "song_name": "Eternal Idol - 2025 Remaster",
                "duration": 398
            },
            {
                "song_id": ObjectId("426aee8baee3101f81d7e269"),
                "song_name": "Some Kind of Woman - 2025 Remaster",
                "duration": 199
            },
            {
                "song_id": ObjectId("f1f7785696881c54e99a0f0f"),
                "song_name": "Black Moon - 2025 Remaster",
                "duration": 219
            }
        ]
    },
    {
        "_id": ObjectId("ad489660e92534c7aebe6be9"),
        "title": "Tyr (2024 Remaster)",
        "release_year": 2024,
        "photo": "https://i.scdn.co/image/ab67616d0000b273b6d78e267fff835412e9dcfb",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "total_songs": 9,
        "album_duration": 2354,
        "tracklist": [
            {
                "song_id": ObjectId("eb7b794832fd38aa99bd98ff"),
                "song_name": "Anno Mundi - 2024 Remaster",
                "duration": 372
            },
            {
                "song_id": ObjectId("5321672b973607db0b7077d4"),
                "song_name": "The Law Maker - 2024 Remaster",
                "duration": 234
            },
            {
                "song_id": ObjectId("4adbd0a20a873bae1ff664b0"),
                "song_name": "Jerusalem - 2024 Remaster",
                "duration": 239
            },
            {
                "song_id": ObjectId("abcfd1bf62f5f65145c17a9c"),
                "song_name": "The Sabbath Stones - 2024 Remaster",
                "duration": 408
            },
            {
                "song_id": ObjectId("ab0d6d5de510e1c3530f9c57"),
                "song_name": "The Battle of Tyr - 2024 Remaster",
                "duration": 68
            },
            {
                "song_id": ObjectId("d81795dcc1223e01313e3477"),
                "song_name": "Odin's Court - 2024 Remaster",
                "duration": 162
            },
            {
                "song_id": ObjectId("09379251c2d8fd8a51d19a29"),
                "song_name": "Valhalla - 2024 Remaster",
                "duration": 282
            },
            {
                "song_id": ObjectId("544d29563b5a97dffeda0398"),
                "song_name": "Feels Good to Me - 2024 Remaster",
                "duration": 344
            },
            {
                "song_id": ObjectId("f66ae13eccb79002c8245b45"),
                "song_name": "Heaven In Black - 2024 Remaster",
                "duration": 245
            }
        ]
    },
    {
        "_id": ObjectId("64fc55a09f1554b3adde8fae"),
        "title": "Headless Cross (2024 Remaster)",
        "release_year": 2024,
        "photo": "https://i.scdn.co/image/ab67616d0000b273edd22c606c1b41b509d30168",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "total_songs": 9,
        "album_duration": 2704,
        "tracklist": [
            {
                "song_id": ObjectId("a48b546fc6f09edee0ae85a7"),
                "song_name": "The Gates of Hell - 2024 Remaster",
                "duration": 66
            },
            {
                "song_id": ObjectId("ddfb782a1224ea98fe8604f0"),
                "song_name": "Headless Cross - 2024 Remaster",
                "duration": 389
            },
            {
                "song_id": ObjectId("a3c57d81dcf58c05ea41def3"),
                "song_name": "Devil & Daughter - 2024 Remaster",
                "duration": 284
            },
            {
                "song_id": ObjectId("adfa179d721384db64558ba3"),
                "song_name": "When Death Calls - 2024 Remaster",
                "duration": 415
            },
            {
                "song_id": ObjectId("5c4db3ecf542dc431e64c116"),
                "song_name": "Kill In the Spirit World - 2024 Remaster",
                "duration": 311
            },
            {
                "song_id": ObjectId("41c2ae068d26950e8138cac7"),
                "song_name": "Call of the Wild - 2024 Remaster",
                "duration": 318
            },
            {
                "song_id": ObjectId("4c0266fa2f63383e5146f9a7"),
                "song_name": "Black Moon - 2024 Remaster",
                "duration": 246
            },
            {
                "song_id": ObjectId("0d6f6d043261eb2a2716f3d1"),
                "song_name": "Nightwing - 2024 Remaster",
                "duration": 396
            },
            {
                "song_id": ObjectId("859707a7fa01ac0cf85d12a5"),
                "song_name": "Cloak and Dagger - 2024 Remaster",
                "duration": 279
            }
        ]
    },
    {
        "_id": ObjectId("804f35ece8cc5b46b7b0cc79"),
        "title": "Forbidden (2024 Tony Iommi Remix)",
        "release_year": 2024,
        "photo": "https://i.scdn.co/image/ab67616d0000b2734274e0e0004fd4ca0510b358",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "total_songs": 11,
        "album_duration": 2881,
        "tracklist": [
            {
                "song_id": ObjectId("1b317bd4438c9971b8ddb4ac"),
                "song_name": "Illusion of Power - 2024 Tony Iommi Remix",
                "duration": 290
            },
            {
                "song_id": ObjectId("2317e260cd97f6e3866d9730"),
                "song_name": "Get a Grip - 2024 Tony Iommi Remix",
                "duration": 241
            },
            {
                "song_id": ObjectId("82f9982c16140767fd4f6b9c"),
                "song_name": "Can't Get Close Enough - 2024 Tony Iommi Remix",
                "duration": 272
            },
            {
                "song_id": ObjectId("4335218765f08d014d9e6639"),
                "song_name": "Shaking off the Chains - 2024 Tony Iommi Remix",
                "duration": 247
            },
            {
                "song_id": ObjectId("8ac8e232d42397064184725f"),
                "song_name": "I Won't Cry for You - 2024 Tony Iommi Remix",
                "duration": 324
            },
            {
                "song_id": ObjectId("902a3b08b16dbe230d471ac0"),
                "song_name": "Guilty as Hell - 2024 Tony Iommi Remix",
                "duration": 210
            },
            {
                "song_id": ObjectId("b67cd5a0182a040a14e4bf25"),
                "song_name": "Sick and Tired - 2024 Tony Iommi Remix",
                "duration": 210
            },
            {
                "song_id": ObjectId("3f51bfb054ccade825bd853e"),
                "song_name": "Rusty Angels - 2024 Tony Iommi Remix",
                "duration": 314
            },
            {
                "song_id": ObjectId("d6d4bbe0b34883cdc700f0b7"),
                "song_name": "Forbidden - 2024 Tony Iommi Remix",
                "duration": 226
            },
            {
                "song_id": ObjectId("9e1f723f571a1bcae8963b96"),
                "song_name": "Kiss of Death - 2024 Tony Iommi Remix",
                "duration": 371
            },
            {
                "song_id": ObjectId("29d744393796d6cb05bc6361"),
                "song_name": "Loser Gets It All - 2024 Tony Iommi Remix",
                "duration": 176
            }
        ]
    },
    {
        "_id": ObjectId("ee907c1a068e3dcadbb3721b"),
        "title": "Cross Purposes (2024 Remaster)",
        "release_year": 2024,
        "photo": "https://i.scdn.co/image/ab67616d0000b273bad2bcc407d8083490c82f1f",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "total_songs": 11,
        "album_duration": 3014,
        "tracklist": [
            {
                "song_id": ObjectId("8ad91933587476cc4cbea59a"),
                "song_name": "I Witness - 2024 Remaster",
                "duration": 295
            },
            {
                "song_id": ObjectId("8ee0dbff944a11d4c44f508e"),
                "song_name": "Cross of Thorns - 2024 Remaster",
                "duration": 273
            },
            {
                "song_id": ObjectId("c902b19bcaf20ad01009c81c"),
                "song_name": "Psychophobia - 2024 Remaster",
                "duration": 192
            },
            {
                "song_id": ObjectId("e81cf133aeccfa2f1863f02c"),
                "song_name": "Virtual Death - 2024 Remaster",
                "duration": 348
            },
            {
                "song_id": ObjectId("96b875c025c45cf727bddee8"),
                "song_name": "Immaculate Deception - 2024 Remaster",
                "duration": 253
            },
            {
                "song_id": ObjectId("2b9582d33a4fee4f8f132923"),
                "song_name": "Dying for Love - 2024 Remaster",
                "duration": 350
            },
            {
                "song_id": ObjectId("1024319bc945f902c4f68389"),
                "song_name": "Back to Eden - 2024 Remaster",
                "duration": 234
            },
            {
                "song_id": ObjectId("11f0057ff1542325157819ac"),
                "song_name": "The Hand That Rocks the Cradle - 2024 Remaster",
                "duration": 268
            },
            {
                "song_id": ObjectId("c84802ca9e2379d7e967e616"),
                "song_name": "Cardinal Sin - 2024 Remaster",
                "duration": 258
            },
            {
                "song_id": ObjectId("df4e8060cc87fe763983f393"),
                "song_name": "Evil Eye - 2024 Remaster",
                "duration": 359
            },
            {
                "song_id": ObjectId("2fbfeeeb94650eed2028cff9"),
                "song_name": "What's the Use - 2024 Remaster",
                "duration": 184
            }
        ]
    },
    {
        "_id": ObjectId("eb27884d9e47660b5b63c821"),
        "title": "Reunion (25th Anniversary Expanded Edition)",
        "release_year": 2023,
        "photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "total_songs": 20,
        "album_duration": 7006,
        "tracklist": [
            {
                "song_id": ObjectId("acb2e4fe82932f873daa9ca8"),
                "song_name": "War Pigs - Live at the NEC, Birmingham, UK - December 1997",
                "duration": 507
            },
            {
                "song_id": ObjectId("01907e28f12f35836b48c632"),
                "song_name": "Behind The Wall Of Sleep - Live at the NEC, Birmingham, UK - December 1997",
                "duration": 246
            },
            {
                "song_id": ObjectId("16c6ff30403ee7afef464d23"),
                "song_name": "N.I.B. - Live at the NEC, Birmingham, UK - December 1997",
                "duration": 406
            },
            {
                "song_id": ObjectId("b4d68ce7ceb1b4dbf2808cf5"),
                "song_name": "Fairies Wear Boots - Live at the NEC, Birmingham, UK - December 1997",
                "duration": 379
            },
            {
                "song_id": ObjectId("082e6d326879a0045893f5f8"),
                "song_name": "Electric Funeral - Live at the NEC, Birmingham, UK - December 1997",
                "duration": 303
            },
            {
                "song_id": ObjectId("9c29ebb231d312e8e6009e59"),
                "song_name": "Sweet Leaf - Live at the NEC, Birmingham, UK - December 1997",
                "duration": 306
            },
            {
                "song_id": ObjectId("3854910630e48d567d2b4016"),
                "song_name": "Spiral Architect - Live at the NEC, Birmingham, UK - December 1997",
                "duration": 338
            },
            {
                "song_id": ObjectId("d99d5f8877c8a4e7c58e4a21"),
                "song_name": "Into The Void - Live at the NEC, Birmingham, UK - December 1997",
                "duration": 390
            },
            {
                "song_id": ObjectId("172d99c79d7f0db61ae5d94a"),
                "song_name": "Snowblind - Live at the NEC, Birmingham, UK - December 1997",
                "duration": 375
            },
            {
                "song_id": ObjectId("d9a27478d8e0f500ec17c57d"),
                "song_name": "Sabbath Bloody Sabbath - Live at the NEC, Birmingham, UK - December 1997",
                "duration": 272
            },
            {
                "song_id": ObjectId("143c1b5c35400e5808674150"),
                "song_name": "Orchid/Lord Of This World - Live at the NEC, Birmingham, UK - December 1997",
                "duration": 425
            },
            {
                "song_id": ObjectId("fe6335725233ba07e177ddff"),
                "song_name": "Dirty Women - Live at the NEC, Birmingham, UK - December 1997",
                "duration": 388
            },
            {
                "song_id": ObjectId("18a3364b5b2007c7a51c8924"),
                "song_name": "Black Sabbath - Live at the NEC, Birmingham, UK - December 1997",
                "duration": 444
            },
            {
                "song_id": ObjectId("3153374bdf3c622d5fee2073"),
                "song_name": "Iron Man - Live at the NEC, Birmingham, UK - December 1997",
                "duration": 501
            },
            {
                "song_id": ObjectId("4d7631b4392e7e42064ac275"),
                "song_name": "Children Of The Grave - Live at the NEC, Birmingham, UK - December 1997",
                "duration": 388
            },
            {
                "song_id": ObjectId("19324b337c8a67e1d9285c39"),
                "song_name": "Paranoid - Live at the NEC, Birmingham, UK - December 1997",
                "duration": 270
            },
            {
                "song_id": ObjectId("0ffd0c60bdfa7b02333b9a03"),
                "song_name": "Psycho Man",
                "duration": 318
            },
            {
                "song_id": ObjectId("5cfc8e42fe8eced4231fc679"),
                "song_name": "Selling My Soul",
                "duration": 190
            },
            {
                "song_id": ObjectId("22ee40614247cc07c363c04d"),
                "song_name": "Psycho Man - Danny Saber Remix",
                "duration": 351
            },
            {
                "song_id": ObjectId("6f0a1521587b05c42e9a4374"),
                "song_name": "Selling My Soul - Danny Saber Remix",
                "duration": 209
            }
        ]
    },
    {
        "_id": ObjectId("15b633fd5fc33931158cba58"),
        "title": "Live Evil (40th Anniversary Edition)",
        "release_year": 2023,
        "photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "total_songs": 20,
        "album_duration": 7143,
        "tracklist": [
            {
                "song_id": ObjectId("5ae94cfbc0aa0ccdb9a30caa"),
                "song_name": "E5150 (Live) (2023 Remaster)",
                "duration": 139
            },
            {
                "song_id": ObjectId("216328f7f684579cea895a5e"),
                "song_name": "Neon Knights (Live) (2023 Remaster)",
                "duration": 276
            },
            {
                "song_id": ObjectId("47ceb98c39369f6913ffe021"),
                "song_name": "N.I.B. (Live) (2023 Remaster)",
                "duration": 308
            },
            {
                "song_id": ObjectId("2c3ae9c9ef4dd1dc4a3fda13"),
                "song_name": "Children of the Sea (Live) (2023 Remaster)",
                "duration": 367
            },
            {
                "song_id": ObjectId("75d1ae85796738e54f229e40"),
                "song_name": "Voodoo (Live) (2023 Remaster)",
                "duration": 351
            },
            {
                "song_id": ObjectId("8ac91707f8c3346bea544bd5"),
                "song_name": "Black Sabbath (Live) (2023 Remaster)",
                "duration": 518
            },
            {
                "song_id": ObjectId("2b52d567b2a1167b4343b5a2"),
                "song_name": "War Pigs (Live) (2023 Remaster)",
                "duration": 558
            },
            {
                "song_id": ObjectId("f3411fe29d0a9599c1ca3aef"),
                "song_name": "Iron Man (Live) (2023 Remaster)",
                "duration": 453
            },
            {
                "song_id": ObjectId("897affce39ef9aef243fb770"),
                "song_name": "The Mob Rules (Live) (2023 Remaster)",
                "duration": 251
            },
            {
                "song_id": ObjectId("4d60b9b4793f6fab6b66e82a"),
                "song_name": "Heaven and Hell (Live) (2023 Remaster)",
                "duration": 728
            },
            {
                "song_id": ObjectId("93ad51da62f1a453be22a2af"),
                "song_name": "The Sign of the Southern Cross / Heaven and Hell (Continued) (Live) (2023 Remaster)",
                "duration": 435
            },
            {
                "song_id": ObjectId("a8443e275c9afbb2f9d6fdcf"),
                "song_name": "Paranoid (Live) (2023 Remaster)",
                "duration": 226
            },
            {
                "song_id": ObjectId("238f82e7898ba144fe492dd3"),
                "song_name": "Children of the Grave (Live) (2023 Remaster)",
                "duration": 326
            },
            {
                "song_id": ObjectId("12baee70bdfd034f8267f501"),
                "song_name": "Fluff (Live) (2023 Remaster)",
                "duration": 75
            },
            {
                "song_id": ObjectId("cbd069cbb4db9132499ea20a"),
                "song_name": "E5150 (Live in Seattle, April 24th 1982) (2023 Remix)",
                "duration": 194
            },
            {
                "song_id": ObjectId("f8c41784f67f29bdabcc949f"),
                "song_name": "Neon Knights (Live in Seattle, April 24th 1982) (2023 Remix)",
                "duration": 275
            },
            {
                "song_id": ObjectId("3307fcf9f8dbd257f8268c3b"),
                "song_name": "N.I.B. (Live in San Antonio, May 13th 1982) (2023 Remix)",
                "duration": 351
            },
            {
                "song_id": ObjectId("b497b56be1b18de6977b541a"),
                "song_name": "Children of the Sea (Live in San Antonio, May 13th 1982) (2023 Remix)",
                "duration": 393
            },
            {
                "song_id": ObjectId("98dace7deb75a0b0ff6b9a66"),
                "song_name": "Voodoo (Live in San Antonio, May 13th 1982) (2023 Remix)",
                "duration": 366
            },
            {
                "song_id": ObjectId("de29362d83c53611061ae752"),
                "song_name": "Black Sabbath (Live in Dallas, May 12th 1982) (2023 Remix)",
                "duration": 553
            }
        ]
    },
    {
        "_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "title": "Mob Rules (Remastered and Expanded Version)",
        "release_year": 2022,
        "photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "total_songs": 20,
        "album_duration": 5169,
        "tracklist": [
            {
                "song_id": ObjectId("02c999478ef42c3a5af850cc"),
                "song_name": "Turn Up the Night - 2021 Remaster",
                "duration": 222
            },
            {
                "song_id": ObjectId("e80f2fd1e96a4d58e5a9919d"),
                "song_name": "Voodoo - 2021 Remaster",
                "duration": 272
            },
            {
                "song_id": ObjectId("a0615972a2ddac41091449f8"),
                "song_name": "The Sign of the Southern Cross - 2021 Remaster",
                "duration": 469
            },
            {
                "song_id": ObjectId("215eb7d0b44663de6f68fe2a"),
                "song_name": "E5150 - 2021 Remaster",
                "duration": 169
            },
            {
                "song_id": ObjectId("d45ae9f01ab25e82e84bc560"),
                "song_name": "The Mob Rules - 2021 Remaster",
                "duration": 195
            },
            {
                "song_id": ObjectId("5574c326fcc20bb2685d72f9"),
                "song_name": "Country Girl - 2021 Remaster",
                "duration": 242
            },
            {
                "song_id": ObjectId("b4b750ac78ef91d5c81770eb"),
                "song_name": "Slipping Away - 2021 Remaster",
                "duration": 225
            },
            {
                "song_id": ObjectId("5725f997b75f22a2b483c86c"),
                "song_name": "Falling Off the Edge of the World - 2021 Remaster",
                "duration": 303
            },
            {
                "song_id": ObjectId("8b6a7860e9d564093552a7e7"),
                "song_name": "Over and Over - 2021 Remaster",
                "duration": 330
            },
            {
                "song_id": ObjectId("b8592fff6bc3d3ec67d2242a"),
                "song_name": "The Mob Rules - Heavy Metal Soundtrack Version",
                "duration": 193
            },
            {
                "song_id": ObjectId("a04f812245423b12e9ead151"),
                "song_name": "Die Young - Live B-Side of Mob Rules 7 inch",
                "duration": 243
            },
            {
                "song_id": ObjectId("467a13183fa530288d6311d6"),
                "song_name": "The Mob Rules - 2021 Mix",
                "duration": 204
            },
            {
                "song_id": ObjectId("2a837e925fc6a5f3ee328f5f"),
                "song_name": "Country Girl - Live at the Hammersmith Odeon London",
                "duration": 239
            },
            {
                "song_id": ObjectId("3a86b8898abc4918e052ef8e"),
                "song_name": "Slipping Away - Live at the Hammersmith Odeon London",
                "duration": 195
            },
            {
                "song_id": ObjectId("dee003538e830c6bdac9f7d2"),
                "song_name": "The Mob Rules - Live at the Hammersmith Odeon London",
                "duration": 201
            },
            {
                "song_id": ObjectId("dc75b4d49b8f03c0bd014cf1"),
                "song_name": "Voodoo - Live at the Hammersmith Odeon London",
                "duration": 346
            },
            {
                "song_id": ObjectId("be5e3d30777bc95390a55dcf"),
                "song_name": "Intro - Live at Portland Memorial Coliseum, Portland, OR, USA 22nd April 1982",
                "duration": 59
            },
            {
                "song_id": ObjectId("9f0f295711c6ea0fb6b8077c"),
                "song_name": "Neon Knights - Live at Portland Memorial Coliseum, Portland, OR, USA 22nd April 1982",
                "duration": 266
            },
            {
                "song_id": ObjectId("318d71579b4884bdccc83a42"),
                "song_name": "N.I.B. - Live at Portland Memorial Coliseum, Portland, OR, USA 22nd April 1982",
                "duration": 363
            },
            {
                "song_id": ObjectId("bb1648d03ceb43eafa9c0099"),
                "song_name": "Children of the Sea - Live at Portland Memorial Coliseum, Portland, OR, USA 22nd April 1982",
                "duration": 433
            }
        ]
    },
    {
        "_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "title": "Heaven and Hell (Remastered and Expanded Edition)",
        "release_year": 2022,
        "photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "total_songs": 19,
        "album_duration": 6707,
        "tracklist": [
            {
                "song_id": ObjectId("5f05820ac6a9922907393a41"),
                "song_name": "Neon Knights - 2021 Remaster",
                "duration": 231
            },
            {
                "song_id": ObjectId("14f492aee3c3d2b68b69584b"),
                "song_name": "Children of the Sea - 2021 Remaster",
                "duration": 333
            },
            {
                "song_id": ObjectId("c0c7ea2d80bfd9ac57822c01"),
                "song_name": "Lady Evil - 2021 Remaster",
                "duration": 264
            },
            {
                "song_id": ObjectId("c591833a3c08bd0038291979"),
                "song_name": "Heaven and Hell - 2021 Remaster",
                "duration": 417
            },
            {
                "song_id": ObjectId("852ca5edc29b4152c0653a57"),
                "song_name": "Wishing Well - 2021 Remaster",
                "duration": 246
            },
            {
                "song_id": ObjectId("dbcf070b8527c4b7efd8b2fb"),
                "song_name": "Die Young - 2021 Remaster",
                "duration": 283
            },
            {
                "song_id": ObjectId("42aacaec8739b82f52fe604e"),
                "song_name": "Walk Away - 2021 Remaster",
                "duration": 264
            },
            {
                "song_id": ObjectId("486542e6504b615411f94023"),
                "song_name": "Lonely Is the Word - 2021 Remaster",
                "duration": 347
            },
            {
                "song_id": ObjectId("3466ea9a233cd25b88777aea"),
                "song_name": "Children of the Sea - Live B-Side of Neon Knights",
                "duration": 386
            },
            {
                "song_id": ObjectId("dbd858c38b1fe07c286ae451"),
                "song_name": "Heaven and Hell - Live B-Side of Die Young",
                "duration": 438
            },
            {
                "song_id": ObjectId("7cb673b1554a830f97f007fc"),
                "song_name": "Lady Evil - 7'' Mono Edit",
                "duration": 236
            },
            {
                "song_id": ObjectId("92889613ab7c1f97e26a0144"),
                "song_name": "Neon Knights - Live at Hartford Civic Center, Hartford, CT, USA: August 10, 1980",
                "duration": 311
            },
            {
                "song_id": ObjectId("77df258eb453fe10a6d4825a"),
                "song_name": "Children of the Sea - Live at Hartford Civic Center, Hartford, CT, USA: August 10, 1980",
                "duration": 354
            },
            {
                "song_id": ObjectId("6c70a5a695110e6bcd8b1881"),
                "song_name": "Heaven and Hell - Live at Hartford Civic Center, Hartford, CT, USA: August 10, 1980",
                "duration": 739
            },
            {
                "song_id": ObjectId("37b4c3d6971a1748522cf369"),
                "song_name": "Die Young - Live at Hartford Civic Center, Hartford, CT, USA: August 10, 1980",
                "duration": 276
            },
            {
                "song_id": ObjectId("d5fee9f49c541bae09c7de9e"),
                "song_name": "E5150 - Live at the Hammersmith Odeon, London, UK: Dec 31, 1981- Jan 2, 1982",
                "duration": 76
            },
            {
                "song_id": ObjectId("44e95cd26c1d14ddc9093be7"),
                "song_name": "Neon Knights - Live at the Hammersmith Odeon, London, UK: Dec 31, 1981- Jan 2, 1982",
                "duration": 276
            },
            {
                "song_id": ObjectId("d0e5c17b1e88569e3f6bd3a8"),
                "song_name": "Children of the Sea - Live at the Hammersmith Odeon, London, UK: Dec 31, 1981- Jan 2, 1982",
                "duration": 360
            },
            {
                "song_id": ObjectId("98c40fd08d483162827152d1"),
                "song_name": "Heaven and Hell - Live at the Hammersmith Odeon, London, UK: Dec 31, 1981- Jan 2, 1982",
                "duration": 870
            }
        ]
    },
    {
        "_id": ObjectId("2b9856f3c3807109696a317e"),
        "title": "The End (Live)",
        "release_year": 2017,
        "photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "total_songs": 17,
        "album_duration": 6469,
        "tracklist": [
            {
                "song_id": ObjectId("cb6615e5f5f37dba05aa348d"),
                "song_name": "Black Sabbath - Live",
                "duration": 446
            },
            {
                "song_id": ObjectId("f3bd5255a393cea85a4224e9"),
                "song_name": "Fairies Wear Boots - Live",
                "duration": 388
            },
            {
                "song_id": ObjectId("86b7e96c00925a09fc1d32b0"),
                "song_name": "Under The Sun / Every Day Comes And Goes - Live",
                "duration": 424
            },
            {
                "song_id": ObjectId("f62fcb1c3d59159152b92626"),
                "song_name": "After Forever - Live",
                "duration": 386
            },
            {
                "song_id": ObjectId("512a9f908b530060eb858664"),
                "song_name": "Into The Void - Live",
                "duration": 427
            },
            {
                "song_id": ObjectId("56b2f29fee19582bad720a7a"),
                "song_name": "Snowblind - Live",
                "duration": 399
            },
            {
                "song_id": ObjectId("99a2ec278230765367c356cb"),
                "song_name": "Band Introductions - Live",
                "duration": 92
            },
            {
                "song_id": ObjectId("ba43b284a9ac0e24186eeda4"),
                "song_name": "War Pigs - Live",
                "duration": 512
            },
            {
                "song_id": ObjectId("1a37a7578f433e3f4c290f99"),
                "song_name": "Behind The Wall Of Sleep - Live",
                "duration": 212
            },
            {
                "song_id": ObjectId("4e14ca404acf7e412453e22f"),
                "song_name": "Bassically / N.I.B. - Live",
                "duration": 396
            },
            {
                "song_id": ObjectId("a4aeaa20f3c58634e6ddf8f4"),
                "song_name": "Hand Of Doom - Live",
                "duration": 425
            },
            {
                "song_id": ObjectId("0c3b72342943febac91ac842"),
                "song_name": "Supernaut / Sabbath Bloody Sabbath / Megalomania - Live",
                "duration": 208
            },
            {
                "song_id": ObjectId("3279a33549dfe6a02b9f8c4c"),
                "song_name": "Rat Salad / Drum Solo - Live",
                "duration": 500
            },
            {
                "song_id": ObjectId("a5886da98a7abb723bc1b5e1"),
                "song_name": "Iron Man - Live",
                "duration": 473
            },
            {
                "song_id": ObjectId("caceeadae47d71b6b698fd9c"),
                "song_name": "Dirty Women - Live",
                "duration": 502
            },
            {
                "song_id": ObjectId("f3ca10988166252eadeaa6c7"),
                "song_name": "Children Of The Grave - Live",
                "duration": 393
            },
            {
                "song_id": ObjectId("ffd23f2bd9537b442ddd5da8"),
                "song_name": "Paranoid - Live",
                "duration": 286
            }
        ]
    },
    {
        "_id": ObjectId("3cda0e523c3381c1876df1fa"),
        "title": "And In The Darkness, Hearts Aglow",
        "release_year": 2022,
        "photo": "https://i.scdn.co/image/ab67616d0000b273db8ab490bcedb6e518c37e6e",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "total_songs": 10,
        "album_duration": 2782,
        "tracklist": [
            {
                "song_id": ObjectId("00d0123720b52b9db2cc876b"),
                "song_name": "It's Not Just Me, It's Everybody",
                "duration": 376
            },
            {
                "song_id": ObjectId("6b5c03c34bc9f0a6d76ddab3"),
                "song_name": "Children of the Empire",
                "duration": 363
            },
            {
                "song_id": ObjectId("7b071841188828a568334034"),
                "song_name": "Grapevine",
                "duration": 325
            },
            {
                "song_id": ObjectId("08ad1728d5c6c5a03c208195"),
                "song_name": "God Turn Me Into a Flower",
                "duration": 385
            },
            {
                "song_id": ObjectId("edc073745264ed798eb72d43"),
                "song_name": "Hearts Aglow",
                "duration": 349
            },
            {
                "song_id": ObjectId("13fbc8d35cdc65055b797127"),
                "song_name": "And in the Darkness",
                "duration": 14
            },
            {
                "song_id": ObjectId("f9f272e7fd24af00b702d128"),
                "song_name": "Twin Flame",
                "duration": 262
            },
            {
                "song_id": ObjectId("c92aedd4762e2ce6c756c35c"),
                "song_name": "In Holy Flux",
                "duration": 107
            },
            {
                "song_id": ObjectId("801c933c7adfab9004ced834"),
                "song_name": "The Worst Is Done",
                "duration": 360
            },
            {
                "song_id": ObjectId("142ecb26c75b4073f78ef90a"),
                "song_name": "A Given Thing",
                "duration": 241
            }
        ]
    },
    {
        "_id": ObjectId("c929a28be0949ce4be72a71d"),
        "title": "Titanic Rising",
        "release_year": 2019,
        "photo": "https://i.scdn.co/image/ab67616d0000b2730c64e752dec4c08362cc4a88",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "total_songs": 10,
        "album_duration": 2542,
        "tracklist": [
            {
                "song_id": ObjectId("0d55032fa2d8ad45d14c8750"),
                "song_name": "A Lot's Gonna Change",
                "duration": 261
            },
            {
                "song_id": ObjectId("b097a7492380a0ed3b38a55a"),
                "song_name": "Andromeda",
                "duration": 280
            },
            {
                "song_id": ObjectId("16ddbf295c629a1daade08ee"),
                "song_name": "Everyday",
                "duration": 307
            },
            {
                "song_id": ObjectId("4e36fb1e3f38baaf3aebef1e"),
                "song_name": "Something to Believe",
                "duration": 285
            },
            {
                "song_id": ObjectId("102053e91ad34833a364d0f6"),
                "song_name": "Titanic Rising",
                "duration": 96
            },
            {
                "song_id": ObjectId("9db1feca9001372de9192675"),
                "song_name": "Movies",
                "duration": 353
            },
            {
                "song_id": ObjectId("88f3b8ff3bcfa9a42c75f5c0"),
                "song_name": "Mirror Forever",
                "duration": 305
            },
            {
                "song_id": ObjectId("ded1e338f59af686f94c9cc1"),
                "song_name": "Wild Time",
                "duration": 369
            },
            {
                "song_id": ObjectId("ad48181cafd6b96a24b0c0ac"),
                "song_name": "Picture Me Better",
                "duration": 221
            },
            {
                "song_id": ObjectId("a65e125323a4871490676fc1"),
                "song_name": "Nearer to Thee",
                "duration": 65
            }
        ]
    },
    {
        "_id": ObjectId("cd3978cc7605e0c4a481c95e"),
        "title": "Front Row Seat to Earth",
        "release_year": 2016,
        "photo": "https://i.scdn.co/image/ab67616d0000b2736e1fa95f889c1e1684e77774",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "total_songs": 9,
        "album_duration": 2686,
        "tracklist": [
            {
                "song_id": ObjectId("2df9af7562478538710a8b1f"),
                "song_name": "Diary",
                "duration": 336
            },
            {
                "song_id": ObjectId("40082ef0743f9fd8bb521ce8"),
                "song_name": "Used to Be",
                "duration": 272
            },
            {
                "song_id": ObjectId("a0a01ecd1c338139c6269261"),
                "song_name": "Be Free",
                "duration": 382
            },
            {
                "song_id": ObjectId("0a780c273ab2351ed5e0f0a7"),
                "song_name": "Do You Need My Love",
                "duration": 385
            },
            {
                "song_id": ObjectId("15d8665ab9c22cb9429f7871"),
                "song_name": "Generation Why",
                "duration": 321
            },
            {
                "song_id": ObjectId("dc9aa3e00d9048e459c3d638"),
                "song_name": "Can't Go Home",
                "duration": 280
            },
            {
                "song_id": ObjectId("48c6ccd4443356008fe63999"),
                "song_name": "Seven Words",
                "duration": 277
            },
            {
                "song_id": ObjectId("58659c879a35378b6163ec6e"),
                "song_name": "Away Above",
                "duration": 318
            },
            {
                "song_id": ObjectId("5f9b469e783ab883cdc2eb76"),
                "song_name": "Front Row Seat",
                "duration": 115
            }
        ]
    },
    {
        "_id": ObjectId("e98d484fc07336bb54d369fa"),
        "title": "The Innocents",
        "release_year": 2014,
        "photo": "https://i.scdn.co/image/ab67616d0000b273f5ea025a6a0a85265b1e8ed8",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "total_songs": 10,
        "album_duration": 2669,
        "tracklist": [
            {
                "song_id": ObjectId("a1324e7bb476ff34a3e0eac9"),
                "song_name": "Land of Broken Dreams",
                "duration": 271
            },
            {
                "song_id": ObjectId("c3efbc9fcf0d9c7c402dbaf7"),
                "song_name": "Hang On",
                "duration": 225
            },
            {
                "song_id": ObjectId("b02a408c8500817f22982976"),
                "song_name": "Some Winters",
                "duration": 375
            },
            {
                "song_id": ObjectId("1aaecccc8987b004f26c82c7"),
                "song_name": "Summer",
                "duration": 167
            },
            {
                "song_id": ObjectId("256462fc0956042dc2b74131"),
                "song_name": "Requiem for Forgiveness",
                "duration": 269
            },
            {
                "song_id": ObjectId("9f71ae08acb42daeb888d12a"),
                "song_name": "Ashes",
                "duration": 327
            },
            {
                "song_id": ObjectId("3cb4a09d850027c73028f1dd"),
                "song_name": "Bad Magic",
                "duration": 354
            },
            {
                "song_id": ObjectId("0a3fa24e5f2448c280f80d47"),
                "song_name": "February Skies",
                "duration": 285
            },
            {
                "song_id": ObjectId("bb760094bfbab2a4d27d7790"),
                "song_name": "Montrose",
                "duration": 177
            },
            {
                "song_id": ObjectId("32ec454b24326cf12e5dc849"),
                "song_name": "Bound to Earth",
                "duration": 219
            }
        ]
    },
    {
        "_id": ObjectId("b6e16836d8d42b926e10ae4b"),
        "title": "The Outside Room",
        "release_year": 2011,
        "photo": "https://i.scdn.co/image/ab67616d0000b273488c24189a011a2e6aa791c2",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "total_songs": 6,
        "album_duration": 2552,
        "tracklist": [
            {
                "song_id": ObjectId("33f88a43d814225e0fe2b282"),
                "song_name": "Storms That Breed",
                "duration": 396
            },
            {
                "song_id": ObjectId("83b801925eb279f40bbb07f9"),
                "song_name": "Lost In Dreams",
                "duration": 345
            },
            {
                "song_id": ObjectId("574b232034bbc479caae6838"),
                "song_name": "Candyboy",
                "duration": 566
            },
            {
                "song_id": ObjectId("3c24966613d0bd4e74f9698b"),
                "song_name": "Romneydale",
                "duration": 447
            },
            {
                "song_id": ObjectId("08eb92795856c073af4116a4"),
                "song_name": "In The Isle Of Agnitio",
                "duration": 414
            },
            {
                "song_id": ObjectId("566b9d4128d8011526bac2bd"),
                "song_name": "His Song",
                "duration": 384
            }
        ]
    },
    {
        "_id": ObjectId("8050a6ba4bd5f58730e0ef66"),
        "title": "Fetch The Bolt Cutters",
        "release_year": 2020,
        "photo": "https://i.scdn.co/image/ab67616d0000b27358e51e35730fcfd6e4aeef51",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "total_songs": 13,
        "album_duration": 3109,
        "tracklist": [
            {
                "song_id": ObjectId("f003f8f9a6fb30d5c866abe5"),
                "song_name": "I Want You To Love Me",
                "duration": 237
            },
            {
                "song_id": ObjectId("821a16891116e2cb0cbe2e69"),
                "song_name": "Shameika",
                "duration": 248
            },
            {
                "song_id": ObjectId("36ce14a5307d07ff51af961b"),
                "song_name": "Fetch The Bolt Cutters",
                "duration": 298
            },
            {
                "song_id": ObjectId("1b43e963eee8556f89c7195a"),
                "song_name": "Under The Table",
                "duration": 201
            },
            {
                "song_id": ObjectId("4f9de271aa1ce41ea077a862"),
                "song_name": "Relay",
                "duration": 289
            },
            {
                "song_id": ObjectId("f7789028d93d6ba44690358f"),
                "song_name": "Rack of His",
                "duration": 222
            },
            {
                "song_id": ObjectId("4baa113f7e71ff6a75303992"),
                "song_name": "Newspaper",
                "duration": 332
            },
            {
                "song_id": ObjectId("c82f32a46e102d1794818db8"),
                "song_name": "Ladies",
                "duration": 325
            },
            {
                "song_id": ObjectId("b91b323225bf4322d898df4a"),
                "song_name": "Heavy Balloon",
                "duration": 206
            },
            {
                "song_id": ObjectId("f0545485836b2c236971358b"),
                "song_name": "Cosmonauts",
                "duration": 239
            },
            {
                "song_id": ObjectId("9e13ceaa460fed3707554d0e"),
                "song_name": "For Her",
                "duration": 163
            },
            {
                "song_id": ObjectId("fe4c308f89b41b2ccb47746b"),
                "song_name": "Drumset",
                "duration": 160
            },
            {
                "song_id": ObjectId("b4cf10d97f2f2531cfb6530e"),
                "song_name": "On I Go",
                "duration": 189
            }
        ]
    },
    {
        "_id": ObjectId("c60068c0d494e6add2ba3fef"),
        "title": "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do (Expanded Edition)",
        "release_year": 2012,
        "photo": "https://i.scdn.co/image/ab67616d0000b2731443bd487a471868735f050b",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "total_songs": 11,
        "album_duration": 2708,
        "tracklist": [
            {
                "song_id": ObjectId("6b85e751289d08a31c71c7b0"),
                "song_name": "Every Single Night",
                "duration": 209
            },
            {
                "song_id": ObjectId("9669a76e58eee66382bb3b9f"),
                "song_name": "Daredevil",
                "duration": 208
            },
            {
                "song_id": ObjectId("778b7553fd743a54b7143ab8"),
                "song_name": "Valentine",
                "duration": 212
            },
            {
                "song_id": ObjectId("41b8a8db343ed57bb653626b"),
                "song_name": "Jonathan",
                "duration": 303
            },
            {
                "song_id": ObjectId("2f7895cfdff7534c1c09dba6"),
                "song_name": "Left Alone",
                "duration": 290
            },
            {
                "song_id": ObjectId("6fff9bf06d293ec1cd94fae3"),
                "song_name": "Werewolf",
                "duration": 192
            },
            {
                "song_id": ObjectId("cdec0ed5694b5e4328ef4a2a"),
                "song_name": "Periphery",
                "duration": 298
            },
            {
                "song_id": ObjectId("8691a37cb30db58ebcd60549"),
                "song_name": "Regret",
                "duration": 316
            },
            {
                "song_id": ObjectId("43b6b6bcffac030bda74f384"),
                "song_name": "Anything We Want",
                "duration": 280
            },
            {
                "song_id": ObjectId("54a92e0de1c8336bd045a09d"),
                "song_name": "Hot Knife",
                "duration": 242
            },
            {
                "song_id": ObjectId("78e397e311c9a86695cc60bc"),
                "song_name": "Largo",
                "duration": 158
            }
        ]
    },
    {
        "_id": ObjectId("eb4d7f37ddaf4871d05bbefe"),
        "title": "Extraordinary Machine",
        "release_year": 2005,
        "photo": "https://i.scdn.co/image/ab67616d0000b27385acb5e0d6230859ff978b79",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "total_songs": 12,
        "album_duration": 3015,
        "tracklist": [
            {
                "song_id": ObjectId("52e4fc3e86c339a91e09f20d"),
                "song_name": "Extraordinary Machine",
                "duration": 223
            },
            {
                "song_id": ObjectId("d48dd60048a4fa3a9e6cc720"),
                "song_name": "Get Him Back",
                "duration": 324
            },
            {
                "song_id": ObjectId("d36b0bff3f5957b2593a807e"),
                "song_name": "O' Sailor",
                "duration": 335
            },
            {
                "song_id": ObjectId("bf73087b90766487045067bb"),
                "song_name": "Better Version Of Me",
                "duration": 179
            },
            {
                "song_id": ObjectId("66c7c937305a0bf2d9bbb252"),
                "song_name": "Tymps (The Sick in the Head Song)",
                "duration": 243
            },
            {
                "song_id": ObjectId("661efc81ec2645dbe06cd244"),
                "song_name": "Parting Gift",
                "duration": 214
            },
            {
                "song_id": ObjectId("a58715beb5787577faef51b9"),
                "song_name": "Window",
                "duration": 331
            },
            {
                "song_id": ObjectId("e45c10b468acfb2de2148501"),
                "song_name": "Oh Well",
                "duration": 220
            },
            {
                "song_id": ObjectId("b29daecda98a15b15cb6d28a"),
                "song_name": "Please Please Please",
                "duration": 213
            },
            {
                "song_id": ObjectId("7c6b942404c58b7d671876eb"),
                "song_name": "Red Red Red",
                "duration": 248
            },
            {
                "song_id": ObjectId("c2b122f1b9d6d9736bea500d"),
                "song_name": "Not About Love",
                "duration": 259
            },
            {
                "song_id": ObjectId("d69324a7c6054c5f70194a10"),
                "song_name": "Waltz (Better Than Fine)",
                "duration": 226
            }
        ]
    },
    {
        "_id": ObjectId("4901e59dea776e4fd57e09d6"),
        "title": "When The Pawn...",
        "release_year": 1999,
        "photo": "https://i.scdn.co/image/ab67616d0000b27370622da427271b0203d7ce79",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "total_songs": 10,
        "album_duration": 2544,
        "tracklist": [
            {
                "song_id": ObjectId("2b7ef51b16c544a4148cd0c6"),
                "song_name": "On The Bound",
                "duration": 322
            },
            {
                "song_id": ObjectId("20a4b8ab4927a1d7a1848d26"),
                "song_name": "To Your Love",
                "duration": 220
            },
            {
                "song_id": ObjectId("07ac868e026b2d1fce56978e"),
                "song_name": "Limp",
                "duration": 209
            },
            {
                "song_id": ObjectId("3b45a9db5441cb12fb943406"),
                "song_name": "Love Ridden",
                "duration": 202
            },
            {
                "song_id": ObjectId("10e094e470fc7f82a1f429f3"),
                "song_name": "Paper Bag",
                "duration": 219
            },
            {
                "song_id": ObjectId("d03903d13534175afc96bba9"),
                "song_name": "A Mistake",
                "duration": 296
            },
            {
                "song_id": ObjectId("1ae6029862a91bd7a159e644"),
                "song_name": "Fast As You Can",
                "duration": 278
            },
            {
                "song_id": ObjectId("1359f6b05c242f0a2091f9ce"),
                "song_name": "The Way Things Are",
                "duration": 256
            },
            {
                "song_id": ObjectId("dae2935c82e9cb02bf19a29b"),
                "song_name": "Get Gone",
                "duration": 247
            },
            {
                "song_id": ObjectId("2b1fd7cc38d41a789f4ab16a"),
                "song_name": "I Know",
                "duration": 295
            }
        ]
    },
    {
        "_id": ObjectId("8dd1681a85d065ec9d99693e"),
        "title": "Tidal",
        "release_year": 1996,
        "photo": "https://i.scdn.co/image/ab67616d0000b273b254ca0983d65ede8e3d2f7a",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "total_songs": 10,
        "album_duration": 3090,
        "tracklist": [
            {
                "song_id": ObjectId("6059d7b1745d7db2b0f4d99d"),
                "song_name": "Sleep to Dream",
                "duration": 248
            },
            {
                "song_id": ObjectId("9b6c0c116e2f21777f9a7001"),
                "song_name": "Sullen Girl",
                "duration": 234
            },
            {
                "song_id": ObjectId("2a2520e864d7457107de8982"),
                "song_name": "Shadowboxer",
                "duration": 324
            },
            {
                "song_id": ObjectId("90e2bee10a7956f24f5d0f80"),
                "song_name": "Criminal",
                "duration": 341
            },
            {
                "song_id": ObjectId("d36d81e97f9e8978c1beb5a9"),
                "song_name": "Slow Like Honey",
                "duration": 356
            },
            {
                "song_id": ObjectId("0eda486c388e5243abae03da"),
                "song_name": "The First Taste",
                "duration": 286
            },
            {
                "song_id": ObjectId("cd575f7c25a9868e071fb024"),
                "song_name": "Never Is a Promise",
                "duration": 354
            },
            {
                "song_id": ObjectId("6935ddeccada72e7e301e482"),
                "song_name": "The Child Is Gone",
                "duration": 254
            },
            {
                "song_id": ObjectId("f134a1281e66578978ab29ea"),
                "song_name": "Pale September",
                "duration": 350
            },
            {
                "song_id": ObjectId("0141fb2709a63e57b47e3352"),
                "song_name": "Carrion",
                "duration": 343
            }
        ]
    }
]
);

db.songs.insertMany(
[
    {
        "_id": ObjectId("614cdf2dc51e436e85c52b9a"),
        "name": "I Saw Her Standing There (Take 2)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 186,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("ac39159dcc2623d0635ec0dd"),
        "name": "Money (That's What I Want) [RM7 Undubbed]",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 168,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a6219d9e0f0b6fb59b8d3fc3"),
        "name": "This Boy (Takes 12 And 13)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 198,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d12abf3944718078a5f60e19"),
        "name": "Tell Me Why (Takes 4 And 5)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 187,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("993c5aa03453c86ef33d8f25"),
        "name": "If I Fell (Take 11)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 158,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3cb6aaae8ab81a7796b7d99d"),
        "name": "Matchbox (Take 1)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 129,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("fb833344e6383b32e2bfae07"),
        "name": "Every Little Thing (Takes 6 And 7)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 208,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("549e0923329b2a86c2bfece1"),
        "name": "I Need You (Take 1)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 156,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("ef6796c3cebbc54fea51ec48"),
        "name": "I've Just Seen A Face (Take 3)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 146,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f25048ba9c466a44fd794e13"),
        "name": "In My Life (Take 1)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 160,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("62f3242926d1d36beef704ec"),
        "name": "Nowhere Man (First Version - Take 2)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 144,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("97506b520a320146aff78757"),
        "name": "Got To Get You Into My Life (Second Version - Unnumbered Mix)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 155,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f32b47ee04a5a2bee2ac864b"),
        "name": "Love You To (Take 7)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 176,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("4e678f0d8cdf86d346e4134a"),
        "name": "Strawberry Fields Forever (Take 26)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 200,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2475e51177547e9614602ec1"),
        "name": "She's Leaving Home (Take 1 - Instrumental)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 230,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1346bd86dc25b78ecfdf23c5"),
        "name": "Baby, You're A Rich Man (Takes 11 And 12)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 366,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("7937364cf4dafe98a8d639b8"),
        "name": "All You Need Is Love (Rehearsal For BBC Broadcast)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 371,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a0ac3457d032a174ed5ef446"),
        "name": "The Fool On The Hill (Take 5 - Instrumental)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 282,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("485f12abb60474a264a2adcf"),
        "name": "I Am The Walrus (Take 19 - Strings, Brass, Clarinet Overdub)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 296,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e2aa7b2d6a712541b17011b8"),
        "name": "Hey Bulldog (Take 4 - Instrumental)",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
        "album_name": "Anthology 4",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27331fec16a9147a10a7e3a539c",
        "duration": 194,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a2dcfb16d9a5be9109d21a84"),
        "name": "Taxman - 2022 Mix",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 158,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a726c66063828c8a3b581e55"),
        "name": "Eleanor Rigby - 2022 Mix",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 126,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("8f7073aea0f0d6bc5b07e9e2"),
        "name": "I'm Only Sleeping - 2022 Mix",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 180,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("4a145d3d90fd2ae8bd1c5a78"),
        "name": "Love You To - 2022 Mix",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 179,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("fd894c7a5dc9106efa458aea"),
        "name": "Here, There And Everywhere - 2022 Mix",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 144,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c15ef0e897b76a7fc8b2957a"),
        "name": "Yellow Submarine - 2022 Mix",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 158,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("21ef5f3cecbfa6fcf51ea06b"),
        "name": "She Said She Said - 2022 Mix",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 156,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("27d18a7339524b4c161ac64c"),
        "name": "Good Day Sunshine - 2022 Mix",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 129,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("371a534b3210f94f0509f3fa"),
        "name": "And Your Bird Can Sing - 2022 Mix",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 120,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1c04e0fc8c645f96d8d0b388"),
        "name": "For No One - 2022 Mix",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 119,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("38a94e4a52bdc4ca504a2868"),
        "name": "Doctor Robert - 2022 Mix",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 134,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5fa72413664de793246465c6"),
        "name": "I Want To Tell You - 2022 Mix",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 147,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9001b95099be9bd62afc8bcc"),
        "name": "Got To Get You Into My Life - 2022 Mix",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 149,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("0cf0a59b0393d6d34a5adcc5"),
        "name": "Tomorrow Never Knows - 2022 Mix",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 177,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("aed240b5f91ed30f77d01418"),
        "name": "Tomorrow Never Knows - Take 1",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 212,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("8157d792a24da87fd461d2e4"),
        "name": "Tomorrow Never Knows - Mono Mix RM 11",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 185,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("27673d4ec7fa67227c7156fc"),
        "name": "Got To Get You Into My Life - First Version / Take 5",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 250,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("11fb1d6b5c3f63adfa8874b7"),
        "name": "Got To Get You Into My Life - Second Version / Unnumbered Mix",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 156,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c69e20807b40adda5c273f7e"),
        "name": "Got To Get You Into My Life - Second Version / Take 8",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 162,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b220b3b95dba96e51d328ee4"),
        "name": "Love You To - Take 1",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
        "album_name": "Revolver (Super Deluxe)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27333b139ea459f9d93c7b8fb30",
        "duration": 160,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3de86f6a0851d2697eca0e6c"),
        "name": "Get Back - Rooftop Performance / Take 1",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("da39b03b68ba8017e59c7930"),
        "album_name": "Get Back (Rooftop Performance)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27304167cd5b7ddbf5c4a563456",
        "duration": 283,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("bdf26f0630b2bbc72db891b6"),
        "name": "Get Back - Rooftop Performance / Take 2",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("da39b03b68ba8017e59c7930"),
        "album_name": "Get Back (Rooftop Performance)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27304167cd5b7ddbf5c4a563456",
        "duration": 204,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1436b2f6fcaf668445bff658"),
        "name": "Don't Let Me Down - Rooftop Performance / Take 1",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("da39b03b68ba8017e59c7930"),
        "album_name": "Get Back (Rooftop Performance)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27304167cd5b7ddbf5c4a563456",
        "duration": 202,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9ca3e9fe7c45883fb71a53c2"),
        "name": "I've Got A Feeling - Rooftop Performance / Take 1",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("da39b03b68ba8017e59c7930"),
        "album_name": "Get Back (Rooftop Performance)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27304167cd5b7ddbf5c4a563456",
        "duration": 283,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("24b7431622d5120b793c303b"),
        "name": "One After 909 - Rooftop Performance",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("da39b03b68ba8017e59c7930"),
        "album_name": "Get Back (Rooftop Performance)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27304167cd5b7ddbf5c4a563456",
        "duration": 189,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e6dafa040c7591c353b4f7e5"),
        "name": "Dig A Pony - Rooftop Performance",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("da39b03b68ba8017e59c7930"),
        "album_name": "Get Back (Rooftop Performance)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27304167cd5b7ddbf5c4a563456",
        "duration": 352,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("7d24af238617d2f10d050cdb"),
        "name": "God Save The Queen - Rooftop Performance / Jam",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("da39b03b68ba8017e59c7930"),
        "album_name": "Get Back (Rooftop Performance)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27304167cd5b7ddbf5c4a563456",
        "duration": 25,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("7fcb6ef9929428549d7240d3"),
        "name": "I've Got A Feeling - Rooftop Performance / Take 2",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("da39b03b68ba8017e59c7930"),
        "album_name": "Get Back (Rooftop Performance)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27304167cd5b7ddbf5c4a563456",
        "duration": 335,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("303b445af94b92d6840317e9"),
        "name": "Don't Let Me Down - Rooftop Performance / Take 2",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("da39b03b68ba8017e59c7930"),
        "album_name": "Get Back (Rooftop Performance)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27304167cd5b7ddbf5c4a563456",
        "duration": 209,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("0dd6b4edc7725500612ddfb1"),
        "name": "Get Back - Rooftop Performance / Take 3",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("da39b03b68ba8017e59c7930"),
        "album_name": "Get Back (Rooftop Performance)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27304167cd5b7ddbf5c4a563456",
        "duration": 226,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("66e13b004c450114467e25b0"),
        "name": "Twist And Shout - Live / Remastered",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 93,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a334765ba2db2caacddb6b8b"),
        "name": "She's A Woman - Live / Remastered",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 192,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("caf074fa5aef2b9d4fd471eb"),
        "name": "Dizzy Miss Lizzy - Live / Remastered",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 219,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("ccf4a2753c667248c7b14053"),
        "name": "Ticket To Ride - Live / Remastered",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 146,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("67e8805dcbe7612e34082797"),
        "name": "Can't Buy Me Love - Live / Remastered",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 134,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6c3cb2115c9f1e3547f82763"),
        "name": "Things We Said Today - Live / Remastered",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 138,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2dc389a9c21734e4b1da538b"),
        "name": "Roll Over Beethoven - Live / Remastered",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 134,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e6891d5ee4eebc8692fcdb7c"),
        "name": "Boys - Live / Remastered",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 128,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("dbeb3c99a27e5bc7aa5de34a"),
        "name": "A Hard Day's Night - Live / Remastered",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 193,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("7a7c43718d2e01c272d08e5f"),
        "name": "Help! - Live / Remastered",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 172,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e3a0f25a5c0279f3ea9ac554"),
        "name": "All My Loving - Live / Remastered",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 135,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("ff8ffb1122b29fd1111fd858"),
        "name": "She Loves You - Live / Remastered",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 191,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5f373acfd080ce40b72de5cc"),
        "name": "Long Tall Sally - Live / Remastered",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 124,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d5ae258ac31bcbc1496c5857"),
        "name": "You Can't Do That - Live / Bonus Track",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 154,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a0d8a932dd1c5d039b1796c3"),
        "name": "I Want To Hold Your Hand - Live / Bonus Track",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 149,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("bcad8a4a0565fcc6252566a7"),
        "name": "Everybody’s Trying To Be My Baby - Live / Bonus Track",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 141,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("48f519c6e5a20fc3bd330351"),
        "name": "Baby's In Black - Live / Bonus Track",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
        "album_name": "Live At The Hollywood Bowl",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731211f350b2fe058161c249f1",
        "duration": 164,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("88fed894147db46bb516478d"),
        "name": "Get Back - Naked Version / Remastered 2013",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("43d460334c1f569afcca0f24"),
        "album_name": "Let It Be... Naked (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b9dd63a105a5afe5d58a783b",
        "duration": 154,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("13a59db99e8d4cf4a833c14f"),
        "name": "Dig A Pony - Naked Version / Remastered 2013",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("43d460334c1f569afcca0f24"),
        "album_name": "Let It Be... Naked (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b9dd63a105a5afe5d58a783b",
        "duration": 218,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b85aa29b283a20f8a51c7678"),
        "name": "For You Blue - Naked Version / Remastered 2013",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("43d460334c1f569afcca0f24"),
        "album_name": "Let It Be... Naked (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b9dd63a105a5afe5d58a783b",
        "duration": 147,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("4bd6ffe5bce9c29ad7932e62"),
        "name": "The Long And Winding Road - Naked Version / Remastered 2013",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("43d460334c1f569afcca0f24"),
        "album_name": "Let It Be... Naked (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b9dd63a105a5afe5d58a783b",
        "duration": 214,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("82057adf27ebe804fb551ed2"),
        "name": "Two Of Us - Naked Version / Remastered 2013",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("43d460334c1f569afcca0f24"),
        "album_name": "Let It Be... Naked (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b9dd63a105a5afe5d58a783b",
        "duration": 200,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("215d441ddd7102836bb35dc7"),
        "name": "I've Got A Feeling - Naked Version / Remastered 2013",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("43d460334c1f569afcca0f24"),
        "album_name": "Let It Be... Naked (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b9dd63a105a5afe5d58a783b",
        "duration": 210,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5944947fe365b31bffe25a1e"),
        "name": "One After 909 - Naked Version / Remastered 2013",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("43d460334c1f569afcca0f24"),
        "album_name": "Let It Be... Naked (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b9dd63a105a5afe5d58a783b",
        "duration": 164,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1d619788f997fe9f8aefb864"),
        "name": "Don't Let Me Down - Naked Version / Remastered 2013",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("43d460334c1f569afcca0f24"),
        "album_name": "Let It Be... Naked (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b9dd63a105a5afe5d58a783b",
        "duration": 198,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("730ac32ce4b3d823454ed988"),
        "name": "I Me Mine - Naked Version / Remastered 2013",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("43d460334c1f569afcca0f24"),
        "album_name": "Let It Be... Naked (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b9dd63a105a5afe5d58a783b",
        "duration": 141,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("8963011564ac0f6674e71f2d"),
        "name": "Across The Universe - Naked Version / Remastered 2013",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("43d460334c1f569afcca0f24"),
        "album_name": "Let It Be... Naked (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b9dd63a105a5afe5d58a783b",
        "duration": 218,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("15417efce1e038a2220dfb98"),
        "name": "Let It Be - Naked Version / Remastered 2013",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("43d460334c1f569afcca0f24"),
        "album_name": "Let It Be... Naked (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b9dd63a105a5afe5d58a783b",
        "duration": 235,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("abb3ff62c9b1c40bd921c61f"),
        "name": "Yellow Submarine",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b510bdb5d8b499db326e6b00"),
        "album_name": "Yellow Submarine Songtrack",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2",
        "duration": 159,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("8a26d503b4a6e0f06287f199"),
        "name": "Hey Bulldog",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b510bdb5d8b499db326e6b00"),
        "album_name": "Yellow Submarine Songtrack",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2",
        "duration": 191,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("08e0df52b07d437cb518ae7c"),
        "name": "Eleanor Rigby",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b510bdb5d8b499db326e6b00"),
        "album_name": "Yellow Submarine Songtrack",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2",
        "duration": 125,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d80cca024d88964ae48e9671"),
        "name": "Love You To",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b510bdb5d8b499db326e6b00"),
        "album_name": "Yellow Submarine Songtrack",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2",
        "duration": 178,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2a59898a57acc52cfc77752b"),
        "name": "All Together Now",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b510bdb5d8b499db326e6b00"),
        "album_name": "Yellow Submarine Songtrack",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2",
        "duration": 130,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("8cbc6359d1af74168930cc2b"),
        "name": "Lucy In The Sky With Diamonds",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b510bdb5d8b499db326e6b00"),
        "album_name": "Yellow Submarine Songtrack",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2",
        "duration": 208,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a2aac4e7018df2358e8076a3"),
        "name": "Think For Yourself",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b510bdb5d8b499db326e6b00"),
        "album_name": "Yellow Submarine Songtrack",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2",
        "duration": 138,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("bf5fce975efb8a14eb3060ab"),
        "name": "Sgt Pepper's Lonely Hearts Club Band",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b510bdb5d8b499db326e6b00"),
        "album_name": "Yellow Submarine Songtrack",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2",
        "duration": 121,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9b9c19c2e5d98daf9489e999"),
        "name": "With A Little Help From My Friends",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b510bdb5d8b499db326e6b00"),
        "album_name": "Yellow Submarine Songtrack",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2",
        "duration": 165,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1ec455034eed1e3a3c8dfbd6"),
        "name": "Baby You're A Rich Man",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b510bdb5d8b499db326e6b00"),
        "album_name": "Yellow Submarine Songtrack",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2",
        "duration": 180,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9cd67878c1e064b7d4a56fe2"),
        "name": "Only A Northern Song",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b510bdb5d8b499db326e6b00"),
        "album_name": "Yellow Submarine Songtrack",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2",
        "duration": 204,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("0c16d4c3d287be312593a87f"),
        "name": "All You Need Is Love",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b510bdb5d8b499db326e6b00"),
        "album_name": "Yellow Submarine Songtrack",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2",
        "duration": 226,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("422d8241d35f63ed0dd00ea3"),
        "name": "When I'm Sixty Four",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b510bdb5d8b499db326e6b00"),
        "album_name": "Yellow Submarine Songtrack",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2",
        "duration": 159,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("84b482b9eea0084ae8bb550f"),
        "name": "Nowhere Man",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b510bdb5d8b499db326e6b00"),
        "album_name": "Yellow Submarine Songtrack",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2",
        "duration": 162,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c78b7eab6496f1963e9f4130"),
        "name": "It's All Too Much",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b510bdb5d8b499db326e6b00"),
        "album_name": "Yellow Submarine Songtrack",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d807dd713cdfbeed142881e2",
        "duration": 385,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b5cfb18a62c2043271351e7b"),
        "name": "Two Of Us - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b3469670c08588bc4a073895"),
        "album_name": "Let It Be (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
        "duration": 216,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("924a83110604cb1d83b8df59"),
        "name": "Dig A Pony - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b3469670c08588bc4a073895"),
        "album_name": "Let It Be (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
        "duration": 235,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("54e5e128c53cc86efe0582d7"),
        "name": "Across The Universe - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b3469670c08588bc4a073895"),
        "album_name": "Let It Be (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
        "duration": 228,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("efc2aface1d405ae65bf8c2d"),
        "name": "I Me Mine - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b3469670c08588bc4a073895"),
        "album_name": "Let It Be (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
        "duration": 145,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("fe9fcb6738e7151fda966b1f"),
        "name": "Dig It - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b3469670c08588bc4a073895"),
        "album_name": "Let It Be (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
        "duration": 50,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2f7dc7dc3f73b2416aa0ed4b"),
        "name": "Let It Be - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b3469670c08588bc4a073895"),
        "album_name": "Let It Be (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
        "duration": 243,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("ab444771600d923de1ab008d"),
        "name": "Maggie Mae - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b3469670c08588bc4a073895"),
        "album_name": "Let It Be (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
        "duration": 40,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a5d972515d2a5df197d30e9e"),
        "name": "I've Got A Feeling - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b3469670c08588bc4a073895"),
        "album_name": "Let It Be (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
        "duration": 217,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("ac04f02ca68e3b6e429a29e2"),
        "name": "One After 909 - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b3469670c08588bc4a073895"),
        "album_name": "Let It Be (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
        "duration": 173,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("371063950cb2d3a9e0238204"),
        "name": "The Long And Winding Road - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b3469670c08588bc4a073895"),
        "album_name": "Let It Be (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
        "duration": 218,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c3066485e8f1f6dc435fd63c"),
        "name": "For You Blue - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b3469670c08588bc4a073895"),
        "album_name": "Let It Be (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
        "duration": 152,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c63875293ca9b26e5943d992"),
        "name": "Get Back - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("b3469670c08588bc4a073895"),
        "album_name": "Let It Be (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
        "duration": 189,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3ff1fb61f086ca588b10b714"),
        "name": "Come Together - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 259,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("04a626cf26d09105ce5d9019"),
        "name": "Something - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 182,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("38b43d5f1efccfc7328d74e9"),
        "name": "Maxwell's Silver Hammer - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 207,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("7b5f02b6ec1a6c380eb0cb12"),
        "name": "Oh! Darling - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 207,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("32b616baa00eafd62a65dc97"),
        "name": "Octopus's Garden - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 170,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("82395ea1990c5d2f94825979"),
        "name": "I Want You (She's So Heavy) - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 467,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("972ff3ce0086fd0f875157d9"),
        "name": "Here Comes The Sun - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 185,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5eb376984ec6f57a467ac538"),
        "name": "Because - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 165,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6e8a2edf46d4fc6bd790e18d"),
        "name": "You Never Give Me Your Money - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 242,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("708425e1630889bc99d138fd"),
        "name": "Sun King - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 146,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f5ce13232e023cbe950ba01e"),
        "name": "Mean Mr Mustard - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 66,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1a30b0325b39c9dc66e95d9a"),
        "name": "Polythene Pam - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 72,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6fffae53887c120cdf909101"),
        "name": "She Came In Through The Bathroom Window - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 118,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("bdc1a8cbfbead61a65b5af89"),
        "name": "Golden Slumbers - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 91,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3f935718ad72ab0fbcd1dc24"),
        "name": "Carry That Weight - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 96,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3716f0b63e1e14f5491bcc30"),
        "name": "The End - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 141,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("7d784f359fb81ebaed687cce"),
        "name": "Her Majesty - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("64bbde7320d693583059cf0f"),
        "album_name": "Abbey Road (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
        "duration": 25,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("25cfab47087f5251eb943147"),
        "name": "Yellow Submarine - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("83e4d47aa7b057c2fd2d8759"),
        "album_name": "Yellow Submarine (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d283808926ad3d2220e63c1c",
        "duration": 159,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("52a3c452cb113a72f0199d3f"),
        "name": "Only A Northern Song - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("83e4d47aa7b057c2fd2d8759"),
        "album_name": "Yellow Submarine (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d283808926ad3d2220e63c1c",
        "duration": 204,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("7d61031545c7a089ecb94442"),
        "name": "All Together Now - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("83e4d47aa7b057c2fd2d8759"),
        "album_name": "Yellow Submarine (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d283808926ad3d2220e63c1c",
        "duration": 130,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3630f35fcceb9c126b8e23de"),
        "name": "Hey Bulldog - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("83e4d47aa7b057c2fd2d8759"),
        "album_name": "Yellow Submarine (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d283808926ad3d2220e63c1c",
        "duration": 191,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("08a768aed2f547a43671f59d"),
        "name": "It's All Too Much - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("83e4d47aa7b057c2fd2d8759"),
        "album_name": "Yellow Submarine (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d283808926ad3d2220e63c1c",
        "duration": 385,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e1c90336650a67e578e8e5e4"),
        "name": "All You Need Is Love - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("83e4d47aa7b057c2fd2d8759"),
        "album_name": "Yellow Submarine (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d283808926ad3d2220e63c1c",
        "duration": 231,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9dfb53b47d334ec535132d1c"),
        "name": "Pepperland - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("83e4d47aa7b057c2fd2d8759"),
        "album_name": "Yellow Submarine (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d283808926ad3d2220e63c1c",
        "duration": 140,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5bbc8a0019816c8b77c35d15"),
        "name": "Sea Of Time - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("83e4d47aa7b057c2fd2d8759"),
        "album_name": "Yellow Submarine (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d283808926ad3d2220e63c1c",
        "duration": 180,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3ae91461d49be3a5fcf82732"),
        "name": "Sea Of Holes - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("83e4d47aa7b057c2fd2d8759"),
        "album_name": "Yellow Submarine (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d283808926ad3d2220e63c1c",
        "duration": 136,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e05ca70a69a76ee6fa860f86"),
        "name": "Sea Of Monsters - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("83e4d47aa7b057c2fd2d8759"),
        "album_name": "Yellow Submarine (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d283808926ad3d2220e63c1c",
        "duration": 216,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("064a812f67536a3699500601"),
        "name": "March Of The Meanies - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("83e4d47aa7b057c2fd2d8759"),
        "album_name": "Yellow Submarine (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d283808926ad3d2220e63c1c",
        "duration": 139,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("37449c9db2e04c094b4f5d9d"),
        "name": "Pepperland Laid Waste - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("83e4d47aa7b057c2fd2d8759"),
        "album_name": "Yellow Submarine (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d283808926ad3d2220e63c1c",
        "duration": 132,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3566b2e085160aa9e4ed5597"),
        "name": "Yellow Submarine In Pepperland - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("83e4d47aa7b057c2fd2d8759"),
        "album_name": "Yellow Submarine (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273d283808926ad3d2220e63c1c",
        "duration": 134,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d0d993f4ff4d487a22c44793"),
        "name": "Back In The U.S.S.R. - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 163,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("4009d8a61ee68bd90934d9f8"),
        "name": "Dear Prudence - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 235,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b83ad38ffd3675a6a0b8f8f1"),
        "name": "Glass Onion - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 137,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6d79ddfe40a1ef395451880a"),
        "name": "Ob-La-Di, Ob-La-Da - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 188,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1d269badfe25c11b595edd38"),
        "name": "Wild Honey Pie - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 52,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("537ed42948f073af656d6d29"),
        "name": "The Continuing Story Of Bungalow Bill - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 194,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("7207b49a7176274d68249d46"),
        "name": "While My Guitar Gently Weeps - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 285,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("575575312c1ea7ac5c447be6"),
        "name": "Happiness Is A Warm Gun - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 164,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("97ff400a219826bf813cd89c"),
        "name": "Martha My Dear - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 148,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a058b86db677861b29035df2"),
        "name": "I'm So Tired - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 123,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("59c8e46adcdb7865b450bc8e"),
        "name": "Blackbird - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 138,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6290db611777e234c1890878"),
        "name": "Piggies - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 124,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5282c1c6911ca310e1e3fb13"),
        "name": "Rocky Raccoon - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 213,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5fddfee3e45bb9cc4718c9b1"),
        "name": "Don't Pass Me By - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 230,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("583290e72760474922a54aec"),
        "name": "Why Don't We Do It In The Road? - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 101,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("ae82ae601fc86604ebce7fe0"),
        "name": "I Will - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 105,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("01a83af427421b3439008bb8"),
        "name": "Julia - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 176,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("fb7d6be2173e7921c27f957b"),
        "name": "Birthday - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 163,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b60895304a074978547aa248"),
        "name": "Yer Blues - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 240,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6dbf89b6529a780f107a5176"),
        "name": "Mother Nature's Son - Remastered 2009",
        "artist_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "artist_name": "The Beatles",
        "album_id": ObjectId("9b8d734bb0a43646034da9e2"),
        "album_name": "The Beatles (Remastered)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
        "duration": 168,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("906fa4db0f517f823fd3e9cf"),
        "name": "drop dead",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("bb7a62209e5825f744eb5b65"),
        "album_name": "you seem pretty sad for a girl so in love",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46",
        "duration": 224,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1130d2dfb501d1ca0e97245b"),
        "name": "stupid song",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("bb7a62209e5825f744eb5b65"),
        "album_name": "you seem pretty sad for a girl so in love",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46",
        "duration": 209,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("40cb64a5d799c841c9534335"),
        "name": "honeybee",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("bb7a62209e5825f744eb5b65"),
        "album_name": "you seem pretty sad for a girl so in love",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46",
        "duration": 223,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("09bc1e90d6608b1312508c51"),
        "name": "maggots for brains",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("bb7a62209e5825f744eb5b65"),
        "album_name": "you seem pretty sad for a girl so in love",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46",
        "duration": 240,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("8db45adc759e91cd8f671f3d"),
        "name": "u + me = <3",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("bb7a62209e5825f744eb5b65"),
        "album_name": "you seem pretty sad for a girl so in love",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46",
        "duration": 247,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("56eb90cb7aa8c2c21a5588b3"),
        "name": "my way",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("bb7a62209e5825f744eb5b65"),
        "album_name": "you seem pretty sad for a girl so in love",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46",
        "duration": 180,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("75abad39d5b773d80a3883a6"),
        "name": "purple",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("bb7a62209e5825f744eb5b65"),
        "album_name": "you seem pretty sad for a girl so in love",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46",
        "duration": 240,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9990a202fee0274587c09083"),
        "name": "the cure",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("bb7a62209e5825f744eb5b65"),
        "album_name": "you seem pretty sad for a girl so in love",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46",
        "duration": 297,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b38769dd93f32c5ac42af6e1"),
        "name": "begged",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("bb7a62209e5825f744eb5b65"),
        "album_name": "you seem pretty sad for a girl so in love",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46",
        "duration": 217,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d64fb23d85215d2f2344f248"),
        "name": "what’s wrong with me",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("bb7a62209e5825f744eb5b65"),
        "album_name": "you seem pretty sad for a girl so in love",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46",
        "duration": 224,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("518c9dfb2a31565a55126cfc"),
        "name": "less",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("bb7a62209e5825f744eb5b65"),
        "album_name": "you seem pretty sad for a girl so in love",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46",
        "duration": 193,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("cef9f05d7b898519d62e2911"),
        "name": "expectations",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("bb7a62209e5825f744eb5b65"),
        "album_name": "you seem pretty sad for a girl so in love",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46",
        "duration": 221,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("0074f3521c24b897cade6dd1"),
        "name": "cigarette smoke",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("bb7a62209e5825f744eb5b65"),
        "album_name": "you seem pretty sad for a girl so in love",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46",
        "duration": 340,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("629a29679cf1c2607ab75522"),
        "name": "all-american bitch",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 165,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5c97c7d09665292425be752f"),
        "name": "bad idea right?",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 184,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("94a995068b67d18081227fcc"),
        "name": "vampire",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 219,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("423ae8250db6dc5146abe447"),
        "name": "lacy",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 177,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d8598853d52690fa8516e064"),
        "name": "ballad of a homeschooled girl",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 203,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("510e95561b8fbbbf8ae8c93a"),
        "name": "making the bed",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 198,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f7b2df1eb17b03aade9b2ab3"),
        "name": "logical",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 231,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d1f314c9761efecc279ff60f"),
        "name": "get him back!",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 211,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f793e6dd238a6b1c84155b6d"),
        "name": "love is embarrassing",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 154,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("dccab733dd9e6dae05cc8436"),
        "name": "the grudge",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 189,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("210c3cbb5357bc53332222d0"),
        "name": "pretty isn’t pretty",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 199,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b72c45ae36b3fef70fdf8006"),
        "name": "teenage dream",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 222,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e05a1900f8c4f2b10234d07e"),
        "name": "obsessed",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 170,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("ee88847d67a1076074998d12"),
        "name": "girl i’ve always been",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 121,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("010308f5d2825a1e7981fe34"),
        "name": "scared of my guitar",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 263,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1b52f93691b18d67a797b151"),
        "name": "stranger",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 192,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b867960b5fd52402e4d312b7"),
        "name": "so american",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734063d624ebf8ff67bc3701ee",
        "duration": 169,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d11181f2f5b4eabdfae51b09"),
        "name": "Can’t Catch Me Now - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 205,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f56813c3ccdff94246e24f9a"),
        "name": "The Hanging Tree - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 143,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d142a42cd8fdfb84e62bcc41"),
        "name": "Wool - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 229,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("894d2f3661fb983452cc3a37"),
        "name": "Nothing You Can Take From Me - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 95,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("109a2cbe1ccbae785ccfd6ea"),
        "name": "The Garden - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 222,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f7aa4e61ceae0a5d9b60bb1e"),
        "name": "The Ballad of Lucy Gray Baird - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 139,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a138931afaf69e7bc7df17fc"),
        "name": "Bury Me Beneath The Willow - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 222,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("29acdf7b2437c3eded5fc55a"),
        "name": "The Old Therebefore / Singing at Snakes - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 168,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("0ca29d1efea76c45bbb4a420"),
        "name": "Burn Me Once - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 200,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("362e61b402191aff20fdd463"),
        "name": "District 12 Stomp - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 43,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("eda8a77aacd07b9e352a4af9"),
        "name": "Nothing You Can Take From Me (Boot-Stompin' Version) - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 193,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("07c8f576c3e5d8e20764c8f0"),
        "name": "Cabin Song - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 206,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5488da51cc2f5a24f8e667f9"),
        "name": "Lucy Gray (part 1) - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 161,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("bff07c2479c5181d3bcf2b31"),
        "name": "Pure As The Driven Snow - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 233,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a494cf74db460d6b0e620048"),
        "name": "Winter's Come and Gone - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 169,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("8f58924a6db4408b8e797130"),
        "name": "Keep On The Sunny Side - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 163,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("025a86ffe9eca46175cd3d4d"),
        "name": "Lucy Gray (part 2) - from The Hunger Games: The Ballad of Songbirds & Snakes",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
        "album_name": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27322ad9f1afdbeeceaf0c91686",
        "duration": 198,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e3a80bd7ce9a4b74e6e84d39"),
        "name": "all-american bitch",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("44b54cd738f4cb5f01b80902"),
        "album_name": "GUTS",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d",
        "duration": 165,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("7b9d8baaffa3e2ae0bd4173d"),
        "name": "bad idea right?",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("44b54cd738f4cb5f01b80902"),
        "album_name": "GUTS",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d",
        "duration": 184,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("22d266007e0bd4f3c6e1df85"),
        "name": "vampire",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("44b54cd738f4cb5f01b80902"),
        "album_name": "GUTS",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d",
        "duration": 219,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("398081fe0ca7c3754f9aabe6"),
        "name": "lacy",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("44b54cd738f4cb5f01b80902"),
        "album_name": "GUTS",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d",
        "duration": 177,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1568019429a855d47913ce35"),
        "name": "ballad of a homeschooled girl",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("44b54cd738f4cb5f01b80902"),
        "album_name": "GUTS",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d",
        "duration": 203,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a5eb86398933e67ef3e760d5"),
        "name": "making the bed",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("44b54cd738f4cb5f01b80902"),
        "album_name": "GUTS",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d",
        "duration": 198,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e41f86670a0d2b17c5b6e9c1"),
        "name": "logical",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("44b54cd738f4cb5f01b80902"),
        "album_name": "GUTS",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d",
        "duration": 231,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1b0595c6bf854076ba7fa599"),
        "name": "get him back!",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("44b54cd738f4cb5f01b80902"),
        "album_name": "GUTS",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d",
        "duration": 211,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("078b9337e4ed4613726674db"),
        "name": "love is embarrassing",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("44b54cd738f4cb5f01b80902"),
        "album_name": "GUTS",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d",
        "duration": 154,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("fb2e187d678b81455f188f65"),
        "name": "the grudge",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("44b54cd738f4cb5f01b80902"),
        "album_name": "GUTS",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d",
        "duration": 189,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3563bffb8a150f58fcc9eb8a"),
        "name": "pretty isn’t pretty",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("44b54cd738f4cb5f01b80902"),
        "album_name": "GUTS",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d",
        "duration": 199,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("98aa380f76a226b4153109e4"),
        "name": "teenage dream",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("44b54cd738f4cb5f01b80902"),
        "album_name": "GUTS",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d",
        "duration": 222,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a7aa082353c2789104cfaf8a"),
        "name": "brutal",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("25f4c73b5dc14d5a7e171dd1"),
        "album_name": "SOUR",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
        "duration": 143,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a736774db32ac8c09ca89754"),
        "name": "traitor",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("25f4c73b5dc14d5a7e171dd1"),
        "album_name": "SOUR",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
        "duration": 229,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("199e1cd95d1477da877f18d8"),
        "name": "drivers license",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("25f4c73b5dc14d5a7e171dd1"),
        "album_name": "SOUR",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
        "duration": 242,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e706a81ea5636c2bf4c93b33"),
        "name": "1 step forward, 3 steps back",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("25f4c73b5dc14d5a7e171dd1"),
        "album_name": "SOUR",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
        "duration": 163,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("903598ed413a4fc2aadeef1d"),
        "name": "deja vu",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("25f4c73b5dc14d5a7e171dd1"),
        "album_name": "SOUR",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
        "duration": 215,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("4993ce7effba2453a9a3d22d"),
        "name": "good 4 u",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("25f4c73b5dc14d5a7e171dd1"),
        "album_name": "SOUR",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
        "duration": 178,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("885a14bb18043d60343010e8"),
        "name": "enough for you",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("25f4c73b5dc14d5a7e171dd1"),
        "album_name": "SOUR",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
        "duration": 202,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e2350ccf9b81cdd8c48e37ba"),
        "name": "happier",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("25f4c73b5dc14d5a7e171dd1"),
        "album_name": "SOUR",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
        "duration": 175,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f92a153a1340bd760e53d415"),
        "name": "jealousy, jealousy",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("25f4c73b5dc14d5a7e171dd1"),
        "album_name": "SOUR",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
        "duration": 173,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6f6f19c414c57c29be454a11"),
        "name": "favorite crime",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("25f4c73b5dc14d5a7e171dd1"),
        "album_name": "SOUR",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
        "duration": 152,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("40d3f3e78c99c77299c4eecd"),
        "name": "hope ur ok",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("25f4c73b5dc14d5a7e171dd1"),
        "album_name": "SOUR",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
        "duration": 209,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("8233dc55436dbd2bd36dfb7c"),
        "name": "There’d Better Be A Mirrorball",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("d872134fb70580e9100c877b"),
        "album_name": "The Car",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27307823ee6237208c835802663",
        "duration": 265,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b75e635b6cadf3f094c7e83f"),
        "name": "I Ain’t Quite Where I Think I Am",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("d872134fb70580e9100c877b"),
        "album_name": "The Car",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27307823ee6237208c835802663",
        "duration": 191,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6a78ae054ed496781ecd191f"),
        "name": "Sculptures Of Anything Goes",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("d872134fb70580e9100c877b"),
        "album_name": "The Car",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27307823ee6237208c835802663",
        "duration": 239,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("79b257b55e73c85200173662"),
        "name": "Jet Skis On The Moat",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("d872134fb70580e9100c877b"),
        "album_name": "The Car",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27307823ee6237208c835802663",
        "duration": 197,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6cc9ebe4687f27bdc3bf8e51"),
        "name": "Body Paint",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("d872134fb70580e9100c877b"),
        "album_name": "The Car",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27307823ee6237208c835802663",
        "duration": 290,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("74650d354f1d3c1787c2aa7c"),
        "name": "The Car",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("d872134fb70580e9100c877b"),
        "album_name": "The Car",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27307823ee6237208c835802663",
        "duration": 198,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6e6f342e00cd72e9cf4aff9d"),
        "name": "Big Ideas",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("d872134fb70580e9100c877b"),
        "album_name": "The Car",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27307823ee6237208c835802663",
        "duration": 237,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d585229b8652ad08b970493f"),
        "name": "Hello You",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("d872134fb70580e9100c877b"),
        "album_name": "The Car",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27307823ee6237208c835802663",
        "duration": 244,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("24be289f524bc1b4596371c0"),
        "name": "Mr Schwartz",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("d872134fb70580e9100c877b"),
        "album_name": "The Car",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27307823ee6237208c835802663",
        "duration": 210,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("78fb6a5ce4a070552b9a3290"),
        "name": "Perfect Sense",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("d872134fb70580e9100c877b"),
        "album_name": "The Car",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27307823ee6237208c835802663",
        "duration": 167,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9010031bfae60dea2ca05629"),
        "name": "Four Out Of Five - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 331,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9e9cb89cd6937089fec928fa"),
        "name": "Brianstorm - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 209,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6dc901c146c1cbd11f943110"),
        "name": "Crying Lightning - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 240,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("15c6d723dc5075300d981e11"),
        "name": "Do I Wanna Know? - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 281,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("aeb0af0e2b7d4a0b82fb23ff"),
        "name": "Why'd You Only Call Me When You're High? - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 183,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("114aa760772b27b9eb88972e"),
        "name": "505 - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 275,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("7d1271c87122b5068673b098"),
        "name": "One Point Perspective - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 202,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("28ae31b49f08be2b6bf46da0"),
        "name": "Do Me A Favour - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 239,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1d2801df92549b42e9090321"),
        "name": "Cornerstone - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 221,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("7cf24ee7159c2727eb623f17"),
        "name": "Knee Socks - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 350,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("80c6a1cccf94c01ce8bd8386"),
        "name": "Arabella - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 246,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("7978f177523bceca264df38c"),
        "name": "Tranquility Base Hotel & Casino - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 243,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3bf0fba7254e17e7a39c9654"),
        "name": "She Looks Like Fun - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 201,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("04154510ddfe3e7245daa393"),
        "name": "From The Ritz To The Rubble - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 221,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("0344cadc2ff2704d114893b9"),
        "name": "Pretty Visitors - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 241,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("720d4e78e343da9f96c80a68"),
        "name": "Don't Sit Down 'Cause I've Moved Your Chair - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 221,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("30d2d807525f6d6b5ebbf70a"),
        "name": "I Bet You Look Good On The Dancefloor - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 293,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("761a93d256b467e9fd64aaf7"),
        "name": "Star Treatment - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 335,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a40f3820fdcf00162208133c"),
        "name": "The View From The Afternoon - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 264,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f394fbf9ca89b93ab83be8b2"),
        "name": "R U Mine? - Live",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("203742e3b2a39415c350641e"),
        "album_name": "Live at the Royal Albert Hall",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273380fbefcd8f05250af8755ef",
        "duration": 371,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("262d03776a34c96bba8cea51"),
        "name": "Star Treatment",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("f088ce60e0ff74738f5277e2"),
        "album_name": "Tranquility Base Hotel & Casino",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2738895ff0f90525f4aa9437c27",
        "duration": 354,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("552c5e6b1072008fbdeb4102"),
        "name": "One Point Perspective",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("f088ce60e0ff74738f5277e2"),
        "album_name": "Tranquility Base Hotel & Casino",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2738895ff0f90525f4aa9437c27",
        "duration": 208,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("019f101a714100df14299af2"),
        "name": "American Sports",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("f088ce60e0ff74738f5277e2"),
        "album_name": "Tranquility Base Hotel & Casino",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2738895ff0f90525f4aa9437c27",
        "duration": 158,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("26208399b75e569001e0881f"),
        "name": "Tranquility Base Hotel & Casino",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("f088ce60e0ff74738f5277e2"),
        "album_name": "Tranquility Base Hotel & Casino",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2738895ff0f90525f4aa9437c27",
        "duration": 211,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("06cfdc80c5764648ce9bbebc"),
        "name": "Golden Trunks",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("f088ce60e0ff74738f5277e2"),
        "album_name": "Tranquility Base Hotel & Casino",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2738895ff0f90525f4aa9437c27",
        "duration": 173,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("da7e8124edb189fb8ad158e1"),
        "name": "Four Out Of Five",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("f088ce60e0ff74738f5277e2"),
        "album_name": "Tranquility Base Hotel & Casino",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2738895ff0f90525f4aa9437c27",
        "duration": 312,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c353fd82af17d8d557efa24f"),
        "name": "The World's First Ever Monster Truck Front Flip",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("f088ce60e0ff74738f5277e2"),
        "album_name": "Tranquility Base Hotel & Casino",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2738895ff0f90525f4aa9437c27",
        "duration": 180,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("89709520a30043efcf761490"),
        "name": "Science Fiction",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("f088ce60e0ff74738f5277e2"),
        "album_name": "Tranquility Base Hotel & Casino",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2738895ff0f90525f4aa9437c27",
        "duration": 185,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9c016e2c1af4df42b4b276ca"),
        "name": "She Looks Like Fun",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("f088ce60e0ff74738f5277e2"),
        "album_name": "Tranquility Base Hotel & Casino",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2738895ff0f90525f4aa9437c27",
        "duration": 182,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5cca37bdb0a01522dd08252e"),
        "name": "Batphone",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("f088ce60e0ff74738f5277e2"),
        "album_name": "Tranquility Base Hotel & Casino",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2738895ff0f90525f4aa9437c27",
        "duration": 271,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("392ea1670145710bcbfd7529"),
        "name": "The Ultracheese",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("f088ce60e0ff74738f5277e2"),
        "album_name": "Tranquility Base Hotel & Casino",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2738895ff0f90525f4aa9437c27",
        "duration": 217,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("ed08a974a756d87394a56e19"),
        "name": "Do I Wanna Know?",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("afbd130238ed230d29266833"),
        "album_name": "AM",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
        "duration": 272,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("540e044cc627fde3e0d788ad"),
        "name": "R U Mine?",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("afbd130238ed230d29266833"),
        "album_name": "AM",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
        "duration": 201,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("8d856508e0221ddbb1035c91"),
        "name": "One For The Road",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("afbd130238ed230d29266833"),
        "album_name": "AM",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
        "duration": 206,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("fd89c18eb602be218d9dc45f"),
        "name": "Arabella",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("afbd130238ed230d29266833"),
        "album_name": "AM",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
        "duration": 207,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("da1b82785c30fb7052f93750"),
        "name": "I Want It All",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("afbd130238ed230d29266833"),
        "album_name": "AM",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
        "duration": 185,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("cf7a4a08fa8fe68e9754a2b0"),
        "name": "No. 1 Party Anthem",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("afbd130238ed230d29266833"),
        "album_name": "AM",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
        "duration": 243,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e54b2d9e17e97a2cda79f7c6"),
        "name": "Mad Sounds",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("afbd130238ed230d29266833"),
        "album_name": "AM",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
        "duration": 215,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5f2e209b706e578f5bef35da"),
        "name": "Fireside",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("afbd130238ed230d29266833"),
        "album_name": "AM",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
        "duration": 181,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("adf52487b41a853e295e6c1d"),
        "name": "Why'd You Only Call Me When You're High?",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("afbd130238ed230d29266833"),
        "album_name": "AM",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
        "duration": 161,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2617cd50630717c6d3b15b21"),
        "name": "Snap Out Of It",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("afbd130238ed230d29266833"),
        "album_name": "AM",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
        "duration": 193,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f80236931e0a8db69495665f"),
        "name": "Knee Socks",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("afbd130238ed230d29266833"),
        "album_name": "AM",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
        "duration": 257,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2efe9dc4d2e000cb5ea20c9b"),
        "name": "I Wanna Be Yours",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("afbd130238ed230d29266833"),
        "album_name": "AM",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
        "duration": 183,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c3a36c5301c0398fc362a1c6"),
        "name": "She's Thunderstorms",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("fc9827fe1ce82fc35ad636c2"),
        "album_name": "Suck It and See",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273cb44038b22f3d8a5e4e62d5a",
        "duration": 234,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("06e826a08dbd6e7e1700a99a"),
        "name": "Black Treacle",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("fc9827fe1ce82fc35ad636c2"),
        "album_name": "Suck It and See",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273cb44038b22f3d8a5e4e62d5a",
        "duration": 217,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c36c9a2e972d2ccbfc127d83"),
        "name": "Brick By Brick",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("fc9827fe1ce82fc35ad636c2"),
        "album_name": "Suck It and See",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273cb44038b22f3d8a5e4e62d5a",
        "duration": 179,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9f568daf0ead8dd1f215e8aa"),
        "name": "The Hellcat Spangled Shalalala",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("fc9827fe1ce82fc35ad636c2"),
        "album_name": "Suck It and See",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273cb44038b22f3d8a5e4e62d5a",
        "duration": 180,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("26cdfddcbe213d4d0884b3b3"),
        "name": "Don't Sit Down 'Cause I've Moved Your Chair",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("fc9827fe1ce82fc35ad636c2"),
        "album_name": "Suck It and See",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273cb44038b22f3d8a5e4e62d5a",
        "duration": 183,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e10b8397c2e064e42fa5ac8d"),
        "name": "Library Pictures",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("fc9827fe1ce82fc35ad636c2"),
        "album_name": "Suck It and See",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273cb44038b22f3d8a5e4e62d5a",
        "duration": 142,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("88ace37c68f838d5f4682c5f"),
        "name": "All My Own Stunts",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("fc9827fe1ce82fc35ad636c2"),
        "album_name": "Suck It and See",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273cb44038b22f3d8a5e4e62d5a",
        "duration": 232,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("08d02b876a6669356ceb0dc1"),
        "name": "Reckless Serenade",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("fc9827fe1ce82fc35ad636c2"),
        "album_name": "Suck It and See",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273cb44038b22f3d8a5e4e62d5a",
        "duration": 162,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("76076cfec016a04af12ac633"),
        "name": "Piledriver Waltz",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("fc9827fe1ce82fc35ad636c2"),
        "album_name": "Suck It and See",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273cb44038b22f3d8a5e4e62d5a",
        "duration": 203,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a1e755edaddd1ffd8958c229"),
        "name": "Love is a Laserquest",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("fc9827fe1ce82fc35ad636c2"),
        "album_name": "Suck It and See",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273cb44038b22f3d8a5e4e62d5a",
        "duration": 191,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("4463e1b90dce913cbfaf1ddd"),
        "name": "Suck It and See",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("fc9827fe1ce82fc35ad636c2"),
        "album_name": "Suck It and See",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273cb44038b22f3d8a5e4e62d5a",
        "duration": 225,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6f119b9ab66260c69231d31f"),
        "name": "That's Where You're Wrong",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("fc9827fe1ce82fc35ad636c2"),
        "album_name": "Suck It and See",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273cb44038b22f3d8a5e4e62d5a",
        "duration": 256,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f3275d7db8732eed40820a1f"),
        "name": "My Propeller",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("753560e43d8272a799e8945c"),
        "album_name": "Humbug",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f65d720a5d70dbb93e96d528",
        "duration": 205,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c8928601179f47a13e573690"),
        "name": "Crying Lightning",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("753560e43d8272a799e8945c"),
        "album_name": "Humbug",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f65d720a5d70dbb93e96d528",
        "duration": 224,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b51d46f0a6c2a5b285ff2f78"),
        "name": "Dangerous Animals",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("753560e43d8272a799e8945c"),
        "album_name": "Humbug",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f65d720a5d70dbb93e96d528",
        "duration": 210,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("459d7db5e6e2c5c6acd0f217"),
        "name": "Secret Door",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("753560e43d8272a799e8945c"),
        "album_name": "Humbug",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f65d720a5d70dbb93e96d528",
        "duration": 223,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("bdcb6b801577e472b2905cf6"),
        "name": "Potion Approaching",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("753560e43d8272a799e8945c"),
        "album_name": "Humbug",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f65d720a5d70dbb93e96d528",
        "duration": 212,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("bd3da61ba16cb3cc5e755653"),
        "name": "Fire And The Thud",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("753560e43d8272a799e8945c"),
        "album_name": "Humbug",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f65d720a5d70dbb93e96d528",
        "duration": 237,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("070925bd508cb725a03bd5f1"),
        "name": "Cornerstone",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("753560e43d8272a799e8945c"),
        "album_name": "Humbug",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f65d720a5d70dbb93e96d528",
        "duration": 197,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f210218589e78efbe1bb5c43"),
        "name": "Dance Little Liar",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("753560e43d8272a799e8945c"),
        "album_name": "Humbug",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f65d720a5d70dbb93e96d528",
        "duration": 283,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("aff202bd37a4589ad37e61c8"),
        "name": "Pretty Visitors",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("753560e43d8272a799e8945c"),
        "album_name": "Humbug",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f65d720a5d70dbb93e96d528",
        "duration": 220,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("009ac9bde9e51703eb2e01a2"),
        "name": "The Jeweller's Hands",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("753560e43d8272a799e8945c"),
        "album_name": "Humbug",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f65d720a5d70dbb93e96d528",
        "duration": 344,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("26ceb56ea1ecb8e3b0098640"),
        "name": "Brianstorm",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("5c7fe76e009fcaaad46a9fda"),
        "album_name": "Favourite Worst Nightmare",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
        "duration": 172,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d4d9f27faa1cbef407a37f93"),
        "name": "Teddy Picker",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("5c7fe76e009fcaaad46a9fda"),
        "album_name": "Favourite Worst Nightmare",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
        "duration": 165,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3209244f35efa2f5850024c4"),
        "name": "D is for Dangerous",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("5c7fe76e009fcaaad46a9fda"),
        "album_name": "Favourite Worst Nightmare",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
        "duration": 138,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d0ecb4d3b64d7691a0504633"),
        "name": "Balaclava",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("5c7fe76e009fcaaad46a9fda"),
        "album_name": "Favourite Worst Nightmare",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
        "duration": 171,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("44672df52edf2ecd9b10e103"),
        "name": "Fluorescent Adolescent",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("5c7fe76e009fcaaad46a9fda"),
        "album_name": "Favourite Worst Nightmare",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
        "duration": 183,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c9aaf31ff246c132536f63f7"),
        "name": "Only Ones Who Know",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("5c7fe76e009fcaaad46a9fda"),
        "album_name": "Favourite Worst Nightmare",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
        "duration": 184,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("314c99b32a7c6ef9f257adb0"),
        "name": "Do Me a Favour",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("5c7fe76e009fcaaad46a9fda"),
        "album_name": "Favourite Worst Nightmare",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
        "duration": 209,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6bc88539125665e7e017d829"),
        "name": "This House is a Circus",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("5c7fe76e009fcaaad46a9fda"),
        "album_name": "Favourite Worst Nightmare",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
        "duration": 191,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("31db88a9647892a18bbae203"),
        "name": "If You Were There, Beware",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("5c7fe76e009fcaaad46a9fda"),
        "album_name": "Favourite Worst Nightmare",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
        "duration": 276,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("134892c009577bd44c5dab75"),
        "name": "The Bad Thing",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("5c7fe76e009fcaaad46a9fda"),
        "album_name": "Favourite Worst Nightmare",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
        "duration": 145,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("bc44feb3108dbb0614e96ae1"),
        "name": "Old Yellow Bricks",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("5c7fe76e009fcaaad46a9fda"),
        "album_name": "Favourite Worst Nightmare",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
        "duration": 193,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("34a5f491586ca1acb114c0f9"),
        "name": "505",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("5c7fe76e009fcaaad46a9fda"),
        "album_name": "Favourite Worst Nightmare",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
        "duration": 253,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2dc20b70f1122168c5946606"),
        "name": "The View From The Afternoon",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("a86553af2a72cbd59339dccf"),
        "album_name": "Whatever People Say I Am, That's What I'm Not",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
        "duration": 222,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("cc9367c9bd213f2e2cf1ec26"),
        "name": "I Bet You Look Good On The Dancefloor",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("a86553af2a72cbd59339dccf"),
        "album_name": "Whatever People Say I Am, That's What I'm Not",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
        "duration": 173,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("ccc92a4926f79a7c2afe9799"),
        "name": "Fake Tales Of San Francisco",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("a86553af2a72cbd59339dccf"),
        "album_name": "Whatever People Say I Am, That's What I'm Not",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
        "duration": 177,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1eb4df5f93d0ac3706d73045"),
        "name": "Dancing Shoes",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("a86553af2a72cbd59339dccf"),
        "album_name": "Whatever People Say I Am, That's What I'm Not",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
        "duration": 141,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("858fd3f818358a7cdb42f19d"),
        "name": "You Probably Couldn't See For The Lights But You Were Staring Straight At Me",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("a86553af2a72cbd59339dccf"),
        "album_name": "Whatever People Say I Am, That's What I'm Not",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
        "duration": 130,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9fa89e4cff5b36e38bc331c4"),
        "name": "Still Take You Home",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("a86553af2a72cbd59339dccf"),
        "album_name": "Whatever People Say I Am, That's What I'm Not",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
        "duration": 173,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("0239897fb523958f3cc147e8"),
        "name": "Riot Van",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("a86553af2a72cbd59339dccf"),
        "album_name": "Whatever People Say I Am, That's What I'm Not",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
        "duration": 134,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6fb9af260b9ed3cc08bb2ffa"),
        "name": "Red Light Indicates Doors Are Secured",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("a86553af2a72cbd59339dccf"),
        "album_name": "Whatever People Say I Am, That's What I'm Not",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
        "duration": 143,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("26151dc7e8e77b826ffde84a"),
        "name": "Mardy Bum",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("a86553af2a72cbd59339dccf"),
        "album_name": "Whatever People Say I Am, That's What I'm Not",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
        "duration": 175,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2e2716204d69a6e134aed413"),
        "name": "Perhaps Vampires Is A Bit Strong But…",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("a86553af2a72cbd59339dccf"),
        "album_name": "Whatever People Say I Am, That's What I'm Not",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
        "duration": 268,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3e48354df3b1e7cb6a203a4a"),
        "name": "When The Sun Goes Down",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("a86553af2a72cbd59339dccf"),
        "album_name": "Whatever People Say I Am, That's What I'm Not",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
        "duration": 202,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e0059428346aa94f917bfd7f"),
        "name": "From The Ritz To The Rubble",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("a86553af2a72cbd59339dccf"),
        "album_name": "Whatever People Say I Am, That's What I'm Not",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
        "duration": 193,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f64c224745564f13d7fe3072"),
        "name": "A Certain Romance",
        "artist_id": ObjectId("d9446cdac81c7cff8382425c"),
        "artist_name": "Arctic Monkeys",
        "album_id": ObjectId("a86553af2a72cbd59339dccf"),
        "album_name": "Whatever People Say I Am, That's What I'm Not",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
        "duration": 331,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("7aec7cd65f971d107da47ed3"),
        "name": "The Shining - 2025 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("28fe26d7ba305b582bfc6a1d"),
        "album_name": "The Eternal Idol (2025 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734e18b68c99002afa53e02f9e",
        "duration": 357,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("0213ff611fb658db9946cd58"),
        "name": "Ancient Warrior - 2025 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("28fe26d7ba305b582bfc6a1d"),
        "album_name": "The Eternal Idol (2025 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734e18b68c99002afa53e02f9e",
        "duration": 332,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c022e31daaced189f961851f"),
        "name": "Hard Life to Love - 2025 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("28fe26d7ba305b582bfc6a1d"),
        "album_name": "The Eternal Idol (2025 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734e18b68c99002afa53e02f9e",
        "duration": 298,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("614451c78f5e3f8a66290d22"),
        "name": "Glory Ride - 2025 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("28fe26d7ba305b582bfc6a1d"),
        "album_name": "The Eternal Idol (2025 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734e18b68c99002afa53e02f9e",
        "duration": 288,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("64650f7e541e029f41e14a01"),
        "name": "Born to Lose - 2025 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("28fe26d7ba305b582bfc6a1d"),
        "album_name": "The Eternal Idol (2025 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734e18b68c99002afa53e02f9e",
        "duration": 223,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c5bdd2b19c39b81c79a315f0"),
        "name": "Nightmare - 2025 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("28fe26d7ba305b582bfc6a1d"),
        "album_name": "The Eternal Idol (2025 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734e18b68c99002afa53e02f9e",
        "duration": 319,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3e3d20444d829e6e56437fc7"),
        "name": "Scarlet Pimpernel - 2025 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("28fe26d7ba305b582bfc6a1d"),
        "album_name": "The Eternal Idol (2025 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734e18b68c99002afa53e02f9e",
        "duration": 126,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("61f35eb4174b0e2bd9f1dcc3"),
        "name": "Lost Forever - 2025 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("28fe26d7ba305b582bfc6a1d"),
        "album_name": "The Eternal Idol (2025 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734e18b68c99002afa53e02f9e",
        "duration": 245,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3951a70b3cee13e5ef809b9d"),
        "name": "Eternal Idol - 2025 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("28fe26d7ba305b582bfc6a1d"),
        "album_name": "The Eternal Idol (2025 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734e18b68c99002afa53e02f9e",
        "duration": 398,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("426aee8baee3101f81d7e269"),
        "name": "Some Kind of Woman - 2025 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("28fe26d7ba305b582bfc6a1d"),
        "album_name": "The Eternal Idol (2025 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734e18b68c99002afa53e02f9e",
        "duration": 199,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f1f7785696881c54e99a0f0f"),
        "name": "Black Moon - 2025 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("28fe26d7ba305b582bfc6a1d"),
        "album_name": "The Eternal Idol (2025 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734e18b68c99002afa53e02f9e",
        "duration": 219,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("eb7b794832fd38aa99bd98ff"),
        "name": "Anno Mundi - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ad489660e92534c7aebe6be9"),
        "album_name": "Tyr (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b6d78e267fff835412e9dcfb",
        "duration": 372,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5321672b973607db0b7077d4"),
        "name": "The Law Maker - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ad489660e92534c7aebe6be9"),
        "album_name": "Tyr (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b6d78e267fff835412e9dcfb",
        "duration": 234,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("4adbd0a20a873bae1ff664b0"),
        "name": "Jerusalem - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ad489660e92534c7aebe6be9"),
        "album_name": "Tyr (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b6d78e267fff835412e9dcfb",
        "duration": 239,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("abcfd1bf62f5f65145c17a9c"),
        "name": "The Sabbath Stones - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ad489660e92534c7aebe6be9"),
        "album_name": "Tyr (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b6d78e267fff835412e9dcfb",
        "duration": 408,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("ab0d6d5de510e1c3530f9c57"),
        "name": "The Battle of Tyr - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ad489660e92534c7aebe6be9"),
        "album_name": "Tyr (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b6d78e267fff835412e9dcfb",
        "duration": 68,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d81795dcc1223e01313e3477"),
        "name": "Odin's Court - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ad489660e92534c7aebe6be9"),
        "album_name": "Tyr (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b6d78e267fff835412e9dcfb",
        "duration": 162,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("09379251c2d8fd8a51d19a29"),
        "name": "Valhalla - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ad489660e92534c7aebe6be9"),
        "album_name": "Tyr (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b6d78e267fff835412e9dcfb",
        "duration": 282,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("544d29563b5a97dffeda0398"),
        "name": "Feels Good to Me - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ad489660e92534c7aebe6be9"),
        "album_name": "Tyr (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b6d78e267fff835412e9dcfb",
        "duration": 344,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f66ae13eccb79002c8245b45"),
        "name": "Heaven In Black - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ad489660e92534c7aebe6be9"),
        "album_name": "Tyr (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b6d78e267fff835412e9dcfb",
        "duration": 245,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a48b546fc6f09edee0ae85a7"),
        "name": "The Gates of Hell - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("64fc55a09f1554b3adde8fae"),
        "album_name": "Headless Cross (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273edd22c606c1b41b509d30168",
        "duration": 66,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("ddfb782a1224ea98fe8604f0"),
        "name": "Headless Cross - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("64fc55a09f1554b3adde8fae"),
        "album_name": "Headless Cross (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273edd22c606c1b41b509d30168",
        "duration": 389,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a3c57d81dcf58c05ea41def3"),
        "name": "Devil & Daughter - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("64fc55a09f1554b3adde8fae"),
        "album_name": "Headless Cross (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273edd22c606c1b41b509d30168",
        "duration": 284,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("adfa179d721384db64558ba3"),
        "name": "When Death Calls - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("64fc55a09f1554b3adde8fae"),
        "album_name": "Headless Cross (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273edd22c606c1b41b509d30168",
        "duration": 415,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5c4db3ecf542dc431e64c116"),
        "name": "Kill In the Spirit World - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("64fc55a09f1554b3adde8fae"),
        "album_name": "Headless Cross (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273edd22c606c1b41b509d30168",
        "duration": 311,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("41c2ae068d26950e8138cac7"),
        "name": "Call of the Wild - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("64fc55a09f1554b3adde8fae"),
        "album_name": "Headless Cross (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273edd22c606c1b41b509d30168",
        "duration": 318,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("4c0266fa2f63383e5146f9a7"),
        "name": "Black Moon - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("64fc55a09f1554b3adde8fae"),
        "album_name": "Headless Cross (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273edd22c606c1b41b509d30168",
        "duration": 246,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("0d6f6d043261eb2a2716f3d1"),
        "name": "Nightwing - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("64fc55a09f1554b3adde8fae"),
        "album_name": "Headless Cross (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273edd22c606c1b41b509d30168",
        "duration": 396,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("859707a7fa01ac0cf85d12a5"),
        "name": "Cloak and Dagger - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("64fc55a09f1554b3adde8fae"),
        "album_name": "Headless Cross (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273edd22c606c1b41b509d30168",
        "duration": 279,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1b317bd4438c9971b8ddb4ac"),
        "name": "Illusion of Power - 2024 Tony Iommi Remix",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("804f35ece8cc5b46b7b0cc79"),
        "album_name": "Forbidden (2024 Tony Iommi Remix)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734274e0e0004fd4ca0510b358",
        "duration": 290,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2317e260cd97f6e3866d9730"),
        "name": "Get a Grip - 2024 Tony Iommi Remix",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("804f35ece8cc5b46b7b0cc79"),
        "album_name": "Forbidden (2024 Tony Iommi Remix)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734274e0e0004fd4ca0510b358",
        "duration": 241,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("82f9982c16140767fd4f6b9c"),
        "name": "Can't Get Close Enough - 2024 Tony Iommi Remix",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("804f35ece8cc5b46b7b0cc79"),
        "album_name": "Forbidden (2024 Tony Iommi Remix)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734274e0e0004fd4ca0510b358",
        "duration": 272,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("4335218765f08d014d9e6639"),
        "name": "Shaking off the Chains - 2024 Tony Iommi Remix",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("804f35ece8cc5b46b7b0cc79"),
        "album_name": "Forbidden (2024 Tony Iommi Remix)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734274e0e0004fd4ca0510b358",
        "duration": 247,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("8ac8e232d42397064184725f"),
        "name": "I Won't Cry for You - 2024 Tony Iommi Remix",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("804f35ece8cc5b46b7b0cc79"),
        "album_name": "Forbidden (2024 Tony Iommi Remix)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734274e0e0004fd4ca0510b358",
        "duration": 324,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("902a3b08b16dbe230d471ac0"),
        "name": "Guilty as Hell - 2024 Tony Iommi Remix",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("804f35ece8cc5b46b7b0cc79"),
        "album_name": "Forbidden (2024 Tony Iommi Remix)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734274e0e0004fd4ca0510b358",
        "duration": 210,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b67cd5a0182a040a14e4bf25"),
        "name": "Sick and Tired - 2024 Tony Iommi Remix",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("804f35ece8cc5b46b7b0cc79"),
        "album_name": "Forbidden (2024 Tony Iommi Remix)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734274e0e0004fd4ca0510b358",
        "duration": 210,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3f51bfb054ccade825bd853e"),
        "name": "Rusty Angels - 2024 Tony Iommi Remix",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("804f35ece8cc5b46b7b0cc79"),
        "album_name": "Forbidden (2024 Tony Iommi Remix)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734274e0e0004fd4ca0510b358",
        "duration": 314,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d6d4bbe0b34883cdc700f0b7"),
        "name": "Forbidden - 2024 Tony Iommi Remix",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("804f35ece8cc5b46b7b0cc79"),
        "album_name": "Forbidden (2024 Tony Iommi Remix)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734274e0e0004fd4ca0510b358",
        "duration": 226,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9e1f723f571a1bcae8963b96"),
        "name": "Kiss of Death - 2024 Tony Iommi Remix",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("804f35ece8cc5b46b7b0cc79"),
        "album_name": "Forbidden (2024 Tony Iommi Remix)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734274e0e0004fd4ca0510b358",
        "duration": 371,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("29d744393796d6cb05bc6361"),
        "name": "Loser Gets It All - 2024 Tony Iommi Remix",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("804f35ece8cc5b46b7b0cc79"),
        "album_name": "Forbidden (2024 Tony Iommi Remix)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2734274e0e0004fd4ca0510b358",
        "duration": 176,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("8ad91933587476cc4cbea59a"),
        "name": "I Witness - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ee907c1a068e3dcadbb3721b"),
        "album_name": "Cross Purposes (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273bad2bcc407d8083490c82f1f",
        "duration": 295,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("8ee0dbff944a11d4c44f508e"),
        "name": "Cross of Thorns - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ee907c1a068e3dcadbb3721b"),
        "album_name": "Cross Purposes (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273bad2bcc407d8083490c82f1f",
        "duration": 273,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c902b19bcaf20ad01009c81c"),
        "name": "Psychophobia - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ee907c1a068e3dcadbb3721b"),
        "album_name": "Cross Purposes (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273bad2bcc407d8083490c82f1f",
        "duration": 192,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e81cf133aeccfa2f1863f02c"),
        "name": "Virtual Death - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ee907c1a068e3dcadbb3721b"),
        "album_name": "Cross Purposes (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273bad2bcc407d8083490c82f1f",
        "duration": 348,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("96b875c025c45cf727bddee8"),
        "name": "Immaculate Deception - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ee907c1a068e3dcadbb3721b"),
        "album_name": "Cross Purposes (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273bad2bcc407d8083490c82f1f",
        "duration": 253,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2b9582d33a4fee4f8f132923"),
        "name": "Dying for Love - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ee907c1a068e3dcadbb3721b"),
        "album_name": "Cross Purposes (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273bad2bcc407d8083490c82f1f",
        "duration": 350,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1024319bc945f902c4f68389"),
        "name": "Back to Eden - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ee907c1a068e3dcadbb3721b"),
        "album_name": "Cross Purposes (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273bad2bcc407d8083490c82f1f",
        "duration": 234,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("11f0057ff1542325157819ac"),
        "name": "The Hand That Rocks the Cradle - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ee907c1a068e3dcadbb3721b"),
        "album_name": "Cross Purposes (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273bad2bcc407d8083490c82f1f",
        "duration": 268,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c84802ca9e2379d7e967e616"),
        "name": "Cardinal Sin - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ee907c1a068e3dcadbb3721b"),
        "album_name": "Cross Purposes (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273bad2bcc407d8083490c82f1f",
        "duration": 258,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("df4e8060cc87fe763983f393"),
        "name": "Evil Eye - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ee907c1a068e3dcadbb3721b"),
        "album_name": "Cross Purposes (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273bad2bcc407d8083490c82f1f",
        "duration": 359,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2fbfeeeb94650eed2028cff9"),
        "name": "What's the Use - 2024 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("ee907c1a068e3dcadbb3721b"),
        "album_name": "Cross Purposes (2024 Remaster)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273bad2bcc407d8083490c82f1f",
        "duration": 184,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("acb2e4fe82932f873daa9ca8"),
        "name": "War Pigs - Live at the NEC, Birmingham, UK - December 1997",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 507,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("01907e28f12f35836b48c632"),
        "name": "Behind The Wall Of Sleep - Live at the NEC, Birmingham, UK - December 1997",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 246,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("16c6ff30403ee7afef464d23"),
        "name": "N.I.B. - Live at the NEC, Birmingham, UK - December 1997",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 406,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b4d68ce7ceb1b4dbf2808cf5"),
        "name": "Fairies Wear Boots - Live at the NEC, Birmingham, UK - December 1997",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 379,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("082e6d326879a0045893f5f8"),
        "name": "Electric Funeral - Live at the NEC, Birmingham, UK - December 1997",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 303,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9c29ebb231d312e8e6009e59"),
        "name": "Sweet Leaf - Live at the NEC, Birmingham, UK - December 1997",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 306,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3854910630e48d567d2b4016"),
        "name": "Spiral Architect - Live at the NEC, Birmingham, UK - December 1997",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 338,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d99d5f8877c8a4e7c58e4a21"),
        "name": "Into The Void - Live at the NEC, Birmingham, UK - December 1997",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 390,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("172d99c79d7f0db61ae5d94a"),
        "name": "Snowblind - Live at the NEC, Birmingham, UK - December 1997",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 375,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d9a27478d8e0f500ec17c57d"),
        "name": "Sabbath Bloody Sabbath - Live at the NEC, Birmingham, UK - December 1997",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 272,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("143c1b5c35400e5808674150"),
        "name": "Orchid/Lord Of This World - Live at the NEC, Birmingham, UK - December 1997",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 425,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("fe6335725233ba07e177ddff"),
        "name": "Dirty Women - Live at the NEC, Birmingham, UK - December 1997",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 388,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("18a3364b5b2007c7a51c8924"),
        "name": "Black Sabbath - Live at the NEC, Birmingham, UK - December 1997",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 444,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3153374bdf3c622d5fee2073"),
        "name": "Iron Man - Live at the NEC, Birmingham, UK - December 1997",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 501,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("4d7631b4392e7e42064ac275"),
        "name": "Children Of The Grave - Live at the NEC, Birmingham, UK - December 1997",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 388,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("19324b337c8a67e1d9285c39"),
        "name": "Paranoid - Live at the NEC, Birmingham, UK - December 1997",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 270,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("0ffd0c60bdfa7b02333b9a03"),
        "name": "Psycho Man",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 318,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5cfc8e42fe8eced4231fc679"),
        "name": "Selling My Soul",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 190,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("22ee40614247cc07c363c04d"),
        "name": "Psycho Man - Danny Saber Remix",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 351,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6f0a1521587b05c42e9a4374"),
        "name": "Selling My Soul - Danny Saber Remix",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("eb27884d9e47660b5b63c821"),
        "album_name": "Reunion (25th Anniversary Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27300272fb00ffbdad2b7072d6b",
        "duration": 209,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5ae94cfbc0aa0ccdb9a30caa"),
        "name": "E5150 (Live) (2023 Remaster)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 139,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("216328f7f684579cea895a5e"),
        "name": "Neon Knights (Live) (2023 Remaster)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 276,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("47ceb98c39369f6913ffe021"),
        "name": "N.I.B. (Live) (2023 Remaster)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 308,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2c3ae9c9ef4dd1dc4a3fda13"),
        "name": "Children of the Sea (Live) (2023 Remaster)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 367,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("75d1ae85796738e54f229e40"),
        "name": "Voodoo (Live) (2023 Remaster)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 351,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("8ac91707f8c3346bea544bd5"),
        "name": "Black Sabbath (Live) (2023 Remaster)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 518,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2b52d567b2a1167b4343b5a2"),
        "name": "War Pigs (Live) (2023 Remaster)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 558,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f3411fe29d0a9599c1ca3aef"),
        "name": "Iron Man (Live) (2023 Remaster)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 453,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("897affce39ef9aef243fb770"),
        "name": "The Mob Rules (Live) (2023 Remaster)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 251,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("4d60b9b4793f6fab6b66e82a"),
        "name": "Heaven and Hell (Live) (2023 Remaster)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 728,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("93ad51da62f1a453be22a2af"),
        "name": "The Sign of the Southern Cross / Heaven and Hell (Continued) (Live) (2023 Remaster)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 435,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a8443e275c9afbb2f9d6fdcf"),
        "name": "Paranoid (Live) (2023 Remaster)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 226,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("238f82e7898ba144fe492dd3"),
        "name": "Children of the Grave (Live) (2023 Remaster)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 326,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("12baee70bdfd034f8267f501"),
        "name": "Fluff (Live) (2023 Remaster)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 75,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("cbd069cbb4db9132499ea20a"),
        "name": "E5150 (Live in Seattle, April 24th 1982) (2023 Remix)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 194,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f8c41784f67f29bdabcc949f"),
        "name": "Neon Knights (Live in Seattle, April 24th 1982) (2023 Remix)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 275,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3307fcf9f8dbd257f8268c3b"),
        "name": "N.I.B. (Live in San Antonio, May 13th 1982) (2023 Remix)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 351,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b497b56be1b18de6977b541a"),
        "name": "Children of the Sea (Live in San Antonio, May 13th 1982) (2023 Remix)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 393,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("98dace7deb75a0b0ff6b9a66"),
        "name": "Voodoo (Live in San Antonio, May 13th 1982) (2023 Remix)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 366,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("de29362d83c53611061ae752"),
        "name": "Black Sabbath (Live in Dallas, May 12th 1982) (2023 Remix)",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("15b633fd5fc33931158cba58"),
        "album_name": "Live Evil (40th Anniversary Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273699d4feac231d5798f92b847",
        "duration": 553,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("02c999478ef42c3a5af850cc"),
        "name": "Turn Up the Night - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 222,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e80f2fd1e96a4d58e5a9919d"),
        "name": "Voodoo - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 272,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a0615972a2ddac41091449f8"),
        "name": "The Sign of the Southern Cross - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 469,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("215eb7d0b44663de6f68fe2a"),
        "name": "E5150 - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 169,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d45ae9f01ab25e82e84bc560"),
        "name": "The Mob Rules - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 195,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5574c326fcc20bb2685d72f9"),
        "name": "Country Girl - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 242,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b4b750ac78ef91d5c81770eb"),
        "name": "Slipping Away - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 225,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5725f997b75f22a2b483c86c"),
        "name": "Falling Off the Edge of the World - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 303,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("8b6a7860e9d564093552a7e7"),
        "name": "Over and Over - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 330,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b8592fff6bc3d3ec67d2242a"),
        "name": "The Mob Rules - Heavy Metal Soundtrack Version",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 193,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a04f812245423b12e9ead151"),
        "name": "Die Young - Live B-Side of Mob Rules 7 inch",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 243,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("467a13183fa530288d6311d6"),
        "name": "The Mob Rules - 2021 Mix",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 204,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2a837e925fc6a5f3ee328f5f"),
        "name": "Country Girl - Live at the Hammersmith Odeon London",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 239,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3a86b8898abc4918e052ef8e"),
        "name": "Slipping Away - Live at the Hammersmith Odeon London",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 195,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("dee003538e830c6bdac9f7d2"),
        "name": "The Mob Rules - Live at the Hammersmith Odeon London",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 201,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("dc75b4d49b8f03c0bd014cf1"),
        "name": "Voodoo - Live at the Hammersmith Odeon London",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 346,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("be5e3d30777bc95390a55dcf"),
        "name": "Intro - Live at Portland Memorial Coliseum, Portland, OR, USA 22nd April 1982",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 59,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9f0f295711c6ea0fb6b8077c"),
        "name": "Neon Knights - Live at Portland Memorial Coliseum, Portland, OR, USA 22nd April 1982",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 266,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("318d71579b4884bdccc83a42"),
        "name": "N.I.B. - Live at Portland Memorial Coliseum, Portland, OR, USA 22nd April 1982",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 363,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("bb1648d03ceb43eafa9c0099"),
        "name": "Children of the Sea - Live at Portland Memorial Coliseum, Portland, OR, USA 22nd April 1982",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("aff9656b2e70bad13f7b50b9"),
        "album_name": "Mob Rules (Remastered and Expanded Version)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b67bff54a9f52ff8b78e5af6",
        "duration": 433,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5f05820ac6a9922907393a41"),
        "name": "Neon Knights - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 231,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("14f492aee3c3d2b68b69584b"),
        "name": "Children of the Sea - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 333,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c0c7ea2d80bfd9ac57822c01"),
        "name": "Lady Evil - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 264,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c591833a3c08bd0038291979"),
        "name": "Heaven and Hell - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 417,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("852ca5edc29b4152c0653a57"),
        "name": "Wishing Well - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 246,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("dbcf070b8527c4b7efd8b2fb"),
        "name": "Die Young - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 283,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("42aacaec8739b82f52fe604e"),
        "name": "Walk Away - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 264,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("486542e6504b615411f94023"),
        "name": "Lonely Is the Word - 2021 Remaster",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 347,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3466ea9a233cd25b88777aea"),
        "name": "Children of the Sea - Live B-Side of Neon Knights",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 386,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("dbd858c38b1fe07c286ae451"),
        "name": "Heaven and Hell - Live B-Side of Die Young",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 438,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("7cb673b1554a830f97f007fc"),
        "name": "Lady Evil - 7'' Mono Edit",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 236,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("92889613ab7c1f97e26a0144"),
        "name": "Neon Knights - Live at Hartford Civic Center, Hartford, CT, USA: August 10, 1980",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 311,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("77df258eb453fe10a6d4825a"),
        "name": "Children of the Sea - Live at Hartford Civic Center, Hartford, CT, USA: August 10, 1980",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 354,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6c70a5a695110e6bcd8b1881"),
        "name": "Heaven and Hell - Live at Hartford Civic Center, Hartford, CT, USA: August 10, 1980",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 739,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("37b4c3d6971a1748522cf369"),
        "name": "Die Young - Live at Hartford Civic Center, Hartford, CT, USA: August 10, 1980",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 276,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d5fee9f49c541bae09c7de9e"),
        "name": "E5150 - Live at the Hammersmith Odeon, London, UK: Dec 31, 1981- Jan 2, 1982",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 76,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("44e95cd26c1d14ddc9093be7"),
        "name": "Neon Knights - Live at the Hammersmith Odeon, London, UK: Dec 31, 1981- Jan 2, 1982",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 276,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d0e5c17b1e88569e3f6bd3a8"),
        "name": "Children of the Sea - Live at the Hammersmith Odeon, London, UK: Dec 31, 1981- Jan 2, 1982",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 360,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("98c40fd08d483162827152d1"),
        "name": "Heaven and Hell - Live at the Hammersmith Odeon, London, UK: Dec 31, 1981- Jan 2, 1982",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("e30fc47d43e360a933c43cd1"),
        "album_name": "Heaven and Hell (Remastered and Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273601bbd9a6e7c3a8d6835bf9a",
        "duration": 870,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("cb6615e5f5f37dba05aa348d"),
        "name": "Black Sabbath - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 446,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f3bd5255a393cea85a4224e9"),
        "name": "Fairies Wear Boots - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 388,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("86b7e96c00925a09fc1d32b0"),
        "name": "Under The Sun / Every Day Comes And Goes - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 424,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f62fcb1c3d59159152b92626"),
        "name": "After Forever - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 386,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("512a9f908b530060eb858664"),
        "name": "Into The Void - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 427,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("56b2f29fee19582bad720a7a"),
        "name": "Snowblind - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 399,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("99a2ec278230765367c356cb"),
        "name": "Band Introductions - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 92,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("ba43b284a9ac0e24186eeda4"),
        "name": "War Pigs - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 512,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1a37a7578f433e3f4c290f99"),
        "name": "Behind The Wall Of Sleep - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 212,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("4e14ca404acf7e412453e22f"),
        "name": "Bassically / N.I.B. - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 396,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a4aeaa20f3c58634e6ddf8f4"),
        "name": "Hand Of Doom - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 425,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("0c3b72342943febac91ac842"),
        "name": "Supernaut / Sabbath Bloody Sabbath / Megalomania - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 208,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3279a33549dfe6a02b9f8c4c"),
        "name": "Rat Salad / Drum Solo - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 500,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a5886da98a7abb723bc1b5e1"),
        "name": "Iron Man - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 473,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("caceeadae47d71b6b698fd9c"),
        "name": "Dirty Women - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 502,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f3ca10988166252eadeaa6c7"),
        "name": "Children Of The Grave - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 393,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("ffd23f2bd9537b442ddd5da8"),
        "name": "Paranoid - Live",
        "artist_id": ObjectId("53d3aa1032a12d0be3e77e76"),
        "artist_name": "Black Sabbath",
        "album_id": ObjectId("2b9856f3c3807109696a317e"),
        "album_name": "The End (Live)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273c0015276290904e59bc6f7ea",
        "duration": 286,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("00d0123720b52b9db2cc876b"),
        "name": "It's Not Just Me, It's Everybody",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("3cda0e523c3381c1876df1fa"),
        "album_name": "And In The Darkness, Hearts Aglow",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273db8ab490bcedb6e518c37e6e",
        "duration": 376,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6b5c03c34bc9f0a6d76ddab3"),
        "name": "Children of the Empire",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("3cda0e523c3381c1876df1fa"),
        "album_name": "And In The Darkness, Hearts Aglow",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273db8ab490bcedb6e518c37e6e",
        "duration": 363,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("7b071841188828a568334034"),
        "name": "Grapevine",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("3cda0e523c3381c1876df1fa"),
        "album_name": "And In The Darkness, Hearts Aglow",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273db8ab490bcedb6e518c37e6e",
        "duration": 325,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("08ad1728d5c6c5a03c208195"),
        "name": "God Turn Me Into a Flower",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("3cda0e523c3381c1876df1fa"),
        "album_name": "And In The Darkness, Hearts Aglow",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273db8ab490bcedb6e518c37e6e",
        "duration": 385,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("edc073745264ed798eb72d43"),
        "name": "Hearts Aglow",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("3cda0e523c3381c1876df1fa"),
        "album_name": "And In The Darkness, Hearts Aglow",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273db8ab490bcedb6e518c37e6e",
        "duration": 349,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("13fbc8d35cdc65055b797127"),
        "name": "And in the Darkness",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("3cda0e523c3381c1876df1fa"),
        "album_name": "And In The Darkness, Hearts Aglow",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273db8ab490bcedb6e518c37e6e",
        "duration": 14,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f9f272e7fd24af00b702d128"),
        "name": "Twin Flame",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("3cda0e523c3381c1876df1fa"),
        "album_name": "And In The Darkness, Hearts Aglow",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273db8ab490bcedb6e518c37e6e",
        "duration": 262,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c92aedd4762e2ce6c756c35c"),
        "name": "In Holy Flux",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("3cda0e523c3381c1876df1fa"),
        "album_name": "And In The Darkness, Hearts Aglow",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273db8ab490bcedb6e518c37e6e",
        "duration": 107,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("801c933c7adfab9004ced834"),
        "name": "The Worst Is Done",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("3cda0e523c3381c1876df1fa"),
        "album_name": "And In The Darkness, Hearts Aglow",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273db8ab490bcedb6e518c37e6e",
        "duration": 360,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("142ecb26c75b4073f78ef90a"),
        "name": "A Given Thing",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("3cda0e523c3381c1876df1fa"),
        "album_name": "And In The Darkness, Hearts Aglow",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273db8ab490bcedb6e518c37e6e",
        "duration": 241,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("0d55032fa2d8ad45d14c8750"),
        "name": "A Lot's Gonna Change",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("c929a28be0949ce4be72a71d"),
        "album_name": "Titanic Rising",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2730c64e752dec4c08362cc4a88",
        "duration": 261,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b097a7492380a0ed3b38a55a"),
        "name": "Andromeda",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("c929a28be0949ce4be72a71d"),
        "album_name": "Titanic Rising",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2730c64e752dec4c08362cc4a88",
        "duration": 280,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("16ddbf295c629a1daade08ee"),
        "name": "Everyday",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("c929a28be0949ce4be72a71d"),
        "album_name": "Titanic Rising",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2730c64e752dec4c08362cc4a88",
        "duration": 307,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("4e36fb1e3f38baaf3aebef1e"),
        "name": "Something to Believe",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("c929a28be0949ce4be72a71d"),
        "album_name": "Titanic Rising",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2730c64e752dec4c08362cc4a88",
        "duration": 285,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("102053e91ad34833a364d0f6"),
        "name": "Titanic Rising",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("c929a28be0949ce4be72a71d"),
        "album_name": "Titanic Rising",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2730c64e752dec4c08362cc4a88",
        "duration": 96,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9db1feca9001372de9192675"),
        "name": "Movies",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("c929a28be0949ce4be72a71d"),
        "album_name": "Titanic Rising",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2730c64e752dec4c08362cc4a88",
        "duration": 353,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("88f3b8ff3bcfa9a42c75f5c0"),
        "name": "Mirror Forever",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("c929a28be0949ce4be72a71d"),
        "album_name": "Titanic Rising",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2730c64e752dec4c08362cc4a88",
        "duration": 305,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("ded1e338f59af686f94c9cc1"),
        "name": "Wild Time",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("c929a28be0949ce4be72a71d"),
        "album_name": "Titanic Rising",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2730c64e752dec4c08362cc4a88",
        "duration": 369,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("ad48181cafd6b96a24b0c0ac"),
        "name": "Picture Me Better",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("c929a28be0949ce4be72a71d"),
        "album_name": "Titanic Rising",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2730c64e752dec4c08362cc4a88",
        "duration": 221,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a65e125323a4871490676fc1"),
        "name": "Nearer to Thee",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("c929a28be0949ce4be72a71d"),
        "album_name": "Titanic Rising",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2730c64e752dec4c08362cc4a88",
        "duration": 65,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2df9af7562478538710a8b1f"),
        "name": "Diary",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("cd3978cc7605e0c4a481c95e"),
        "album_name": "Front Row Seat to Earth",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736e1fa95f889c1e1684e77774",
        "duration": 336,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("40082ef0743f9fd8bb521ce8"),
        "name": "Used to Be",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("cd3978cc7605e0c4a481c95e"),
        "album_name": "Front Row Seat to Earth",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736e1fa95f889c1e1684e77774",
        "duration": 272,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a0a01ecd1c338139c6269261"),
        "name": "Be Free",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("cd3978cc7605e0c4a481c95e"),
        "album_name": "Front Row Seat to Earth",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736e1fa95f889c1e1684e77774",
        "duration": 382,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("0a780c273ab2351ed5e0f0a7"),
        "name": "Do You Need My Love",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("cd3978cc7605e0c4a481c95e"),
        "album_name": "Front Row Seat to Earth",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736e1fa95f889c1e1684e77774",
        "duration": 385,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("15d8665ab9c22cb9429f7871"),
        "name": "Generation Why",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("cd3978cc7605e0c4a481c95e"),
        "album_name": "Front Row Seat to Earth",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736e1fa95f889c1e1684e77774",
        "duration": 321,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("dc9aa3e00d9048e459c3d638"),
        "name": "Can't Go Home",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("cd3978cc7605e0c4a481c95e"),
        "album_name": "Front Row Seat to Earth",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736e1fa95f889c1e1684e77774",
        "duration": 280,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("48c6ccd4443356008fe63999"),
        "name": "Seven Words",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("cd3978cc7605e0c4a481c95e"),
        "album_name": "Front Row Seat to Earth",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736e1fa95f889c1e1684e77774",
        "duration": 277,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("58659c879a35378b6163ec6e"),
        "name": "Away Above",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("cd3978cc7605e0c4a481c95e"),
        "album_name": "Front Row Seat to Earth",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736e1fa95f889c1e1684e77774",
        "duration": 318,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("5f9b469e783ab883cdc2eb76"),
        "name": "Front Row Seat",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("cd3978cc7605e0c4a481c95e"),
        "album_name": "Front Row Seat to Earth",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2736e1fa95f889c1e1684e77774",
        "duration": 115,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a1324e7bb476ff34a3e0eac9"),
        "name": "Land of Broken Dreams",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("e98d484fc07336bb54d369fa"),
        "album_name": "The Innocents",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f5ea025a6a0a85265b1e8ed8",
        "duration": 271,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c3efbc9fcf0d9c7c402dbaf7"),
        "name": "Hang On",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("e98d484fc07336bb54d369fa"),
        "album_name": "The Innocents",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f5ea025a6a0a85265b1e8ed8",
        "duration": 225,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b02a408c8500817f22982976"),
        "name": "Some Winters",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("e98d484fc07336bb54d369fa"),
        "album_name": "The Innocents",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f5ea025a6a0a85265b1e8ed8",
        "duration": 375,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1aaecccc8987b004f26c82c7"),
        "name": "Summer",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("e98d484fc07336bb54d369fa"),
        "album_name": "The Innocents",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f5ea025a6a0a85265b1e8ed8",
        "duration": 167,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("256462fc0956042dc2b74131"),
        "name": "Requiem for Forgiveness",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("e98d484fc07336bb54d369fa"),
        "album_name": "The Innocents",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f5ea025a6a0a85265b1e8ed8",
        "duration": 269,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9f71ae08acb42daeb888d12a"),
        "name": "Ashes",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("e98d484fc07336bb54d369fa"),
        "album_name": "The Innocents",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f5ea025a6a0a85265b1e8ed8",
        "duration": 327,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3cb4a09d850027c73028f1dd"),
        "name": "Bad Magic",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("e98d484fc07336bb54d369fa"),
        "album_name": "The Innocents",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f5ea025a6a0a85265b1e8ed8",
        "duration": 354,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("0a3fa24e5f2448c280f80d47"),
        "name": "February Skies",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("e98d484fc07336bb54d369fa"),
        "album_name": "The Innocents",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f5ea025a6a0a85265b1e8ed8",
        "duration": 285,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("bb760094bfbab2a4d27d7790"),
        "name": "Montrose",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("e98d484fc07336bb54d369fa"),
        "album_name": "The Innocents",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f5ea025a6a0a85265b1e8ed8",
        "duration": 177,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("32ec454b24326cf12e5dc849"),
        "name": "Bound to Earth",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("e98d484fc07336bb54d369fa"),
        "album_name": "The Innocents",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273f5ea025a6a0a85265b1e8ed8",
        "duration": 219,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("33f88a43d814225e0fe2b282"),
        "name": "Storms That Breed",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("b6e16836d8d42b926e10ae4b"),
        "album_name": "The Outside Room",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273488c24189a011a2e6aa791c2",
        "duration": 396,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("83b801925eb279f40bbb07f9"),
        "name": "Lost In Dreams",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("b6e16836d8d42b926e10ae4b"),
        "album_name": "The Outside Room",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273488c24189a011a2e6aa791c2",
        "duration": 345,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("574b232034bbc479caae6838"),
        "name": "Candyboy",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("b6e16836d8d42b926e10ae4b"),
        "album_name": "The Outside Room",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273488c24189a011a2e6aa791c2",
        "duration": 566,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3c24966613d0bd4e74f9698b"),
        "name": "Romneydale",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("b6e16836d8d42b926e10ae4b"),
        "album_name": "The Outside Room",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273488c24189a011a2e6aa791c2",
        "duration": 447,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("08eb92795856c073af4116a4"),
        "name": "In The Isle Of Agnitio",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("b6e16836d8d42b926e10ae4b"),
        "album_name": "The Outside Room",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273488c24189a011a2e6aa791c2",
        "duration": 414,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("566b9d4128d8011526bac2bd"),
        "name": "His Song",
        "artist_id": ObjectId("e0fb300faebab4e932cbfb2c"),
        "artist_name": "Weyes Blood",
        "album_id": ObjectId("b6e16836d8d42b926e10ae4b"),
        "album_name": "The Outside Room",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273488c24189a011a2e6aa791c2",
        "duration": 384,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f003f8f9a6fb30d5c866abe5"),
        "name": "I Want You To Love Me",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8050a6ba4bd5f58730e0ef66"),
        "album_name": "Fetch The Bolt Cutters",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27358e51e35730fcfd6e4aeef51",
        "duration": 237,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("821a16891116e2cb0cbe2e69"),
        "name": "Shameika",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8050a6ba4bd5f58730e0ef66"),
        "album_name": "Fetch The Bolt Cutters",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27358e51e35730fcfd6e4aeef51",
        "duration": 248,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("36ce14a5307d07ff51af961b"),
        "name": "Fetch The Bolt Cutters",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8050a6ba4bd5f58730e0ef66"),
        "album_name": "Fetch The Bolt Cutters",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27358e51e35730fcfd6e4aeef51",
        "duration": 298,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1b43e963eee8556f89c7195a"),
        "name": "Under The Table",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8050a6ba4bd5f58730e0ef66"),
        "album_name": "Fetch The Bolt Cutters",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27358e51e35730fcfd6e4aeef51",
        "duration": 201,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("4f9de271aa1ce41ea077a862"),
        "name": "Relay",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8050a6ba4bd5f58730e0ef66"),
        "album_name": "Fetch The Bolt Cutters",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27358e51e35730fcfd6e4aeef51",
        "duration": 289,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f7789028d93d6ba44690358f"),
        "name": "Rack of His",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8050a6ba4bd5f58730e0ef66"),
        "album_name": "Fetch The Bolt Cutters",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27358e51e35730fcfd6e4aeef51",
        "duration": 222,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("4baa113f7e71ff6a75303992"),
        "name": "Newspaper",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8050a6ba4bd5f58730e0ef66"),
        "album_name": "Fetch The Bolt Cutters",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27358e51e35730fcfd6e4aeef51",
        "duration": 332,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c82f32a46e102d1794818db8"),
        "name": "Ladies",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8050a6ba4bd5f58730e0ef66"),
        "album_name": "Fetch The Bolt Cutters",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27358e51e35730fcfd6e4aeef51",
        "duration": 325,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b91b323225bf4322d898df4a"),
        "name": "Heavy Balloon",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8050a6ba4bd5f58730e0ef66"),
        "album_name": "Fetch The Bolt Cutters",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27358e51e35730fcfd6e4aeef51",
        "duration": 206,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f0545485836b2c236971358b"),
        "name": "Cosmonauts",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8050a6ba4bd5f58730e0ef66"),
        "album_name": "Fetch The Bolt Cutters",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27358e51e35730fcfd6e4aeef51",
        "duration": 239,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9e13ceaa460fed3707554d0e"),
        "name": "For Her",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8050a6ba4bd5f58730e0ef66"),
        "album_name": "Fetch The Bolt Cutters",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27358e51e35730fcfd6e4aeef51",
        "duration": 163,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("fe4c308f89b41b2ccb47746b"),
        "name": "Drumset",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8050a6ba4bd5f58730e0ef66"),
        "album_name": "Fetch The Bolt Cutters",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27358e51e35730fcfd6e4aeef51",
        "duration": 160,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b4cf10d97f2f2531cfb6530e"),
        "name": "On I Go",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8050a6ba4bd5f58730e0ef66"),
        "album_name": "Fetch The Bolt Cutters",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27358e51e35730fcfd6e4aeef51",
        "duration": 189,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6b85e751289d08a31c71c7b0"),
        "name": "Every Single Night",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("c60068c0d494e6add2ba3fef"),
        "album_name": "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do (Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731443bd487a471868735f050b",
        "duration": 209,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9669a76e58eee66382bb3b9f"),
        "name": "Daredevil",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("c60068c0d494e6add2ba3fef"),
        "album_name": "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do (Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731443bd487a471868735f050b",
        "duration": 208,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("778b7553fd743a54b7143ab8"),
        "name": "Valentine",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("c60068c0d494e6add2ba3fef"),
        "album_name": "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do (Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731443bd487a471868735f050b",
        "duration": 212,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("41b8a8db343ed57bb653626b"),
        "name": "Jonathan",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("c60068c0d494e6add2ba3fef"),
        "album_name": "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do (Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731443bd487a471868735f050b",
        "duration": 303,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2f7895cfdff7534c1c09dba6"),
        "name": "Left Alone",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("c60068c0d494e6add2ba3fef"),
        "album_name": "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do (Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731443bd487a471868735f050b",
        "duration": 290,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6fff9bf06d293ec1cd94fae3"),
        "name": "Werewolf",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("c60068c0d494e6add2ba3fef"),
        "album_name": "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do (Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731443bd487a471868735f050b",
        "duration": 192,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("cdec0ed5694b5e4328ef4a2a"),
        "name": "Periphery",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("c60068c0d494e6add2ba3fef"),
        "album_name": "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do (Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731443bd487a471868735f050b",
        "duration": 298,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("8691a37cb30db58ebcd60549"),
        "name": "Regret",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("c60068c0d494e6add2ba3fef"),
        "album_name": "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do (Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731443bd487a471868735f050b",
        "duration": 316,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("43b6b6bcffac030bda74f384"),
        "name": "Anything We Want",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("c60068c0d494e6add2ba3fef"),
        "album_name": "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do (Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731443bd487a471868735f050b",
        "duration": 280,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("54a92e0de1c8336bd045a09d"),
        "name": "Hot Knife",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("c60068c0d494e6add2ba3fef"),
        "album_name": "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do (Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731443bd487a471868735f050b",
        "duration": 242,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("78e397e311c9a86695cc60bc"),
        "name": "Largo",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("c60068c0d494e6add2ba3fef"),
        "album_name": "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do (Expanded Edition)",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b2731443bd487a471868735f050b",
        "duration": 158,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("52e4fc3e86c339a91e09f20d"),
        "name": "Extraordinary Machine",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("eb4d7f37ddaf4871d05bbefe"),
        "album_name": "Extraordinary Machine",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27385acb5e0d6230859ff978b79",
        "duration": 223,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d48dd60048a4fa3a9e6cc720"),
        "name": "Get Him Back",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("eb4d7f37ddaf4871d05bbefe"),
        "album_name": "Extraordinary Machine",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27385acb5e0d6230859ff978b79",
        "duration": 324,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d36b0bff3f5957b2593a807e"),
        "name": "O' Sailor",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("eb4d7f37ddaf4871d05bbefe"),
        "album_name": "Extraordinary Machine",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27385acb5e0d6230859ff978b79",
        "duration": 335,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("bf73087b90766487045067bb"),
        "name": "Better Version Of Me",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("eb4d7f37ddaf4871d05bbefe"),
        "album_name": "Extraordinary Machine",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27385acb5e0d6230859ff978b79",
        "duration": 179,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("66c7c937305a0bf2d9bbb252"),
        "name": "Tymps (The Sick in the Head Song)",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("eb4d7f37ddaf4871d05bbefe"),
        "album_name": "Extraordinary Machine",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27385acb5e0d6230859ff978b79",
        "duration": 243,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("661efc81ec2645dbe06cd244"),
        "name": "Parting Gift",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("eb4d7f37ddaf4871d05bbefe"),
        "album_name": "Extraordinary Machine",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27385acb5e0d6230859ff978b79",
        "duration": 214,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("a58715beb5787577faef51b9"),
        "name": "Window",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("eb4d7f37ddaf4871d05bbefe"),
        "album_name": "Extraordinary Machine",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27385acb5e0d6230859ff978b79",
        "duration": 331,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("e45c10b468acfb2de2148501"),
        "name": "Oh Well",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("eb4d7f37ddaf4871d05bbefe"),
        "album_name": "Extraordinary Machine",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27385acb5e0d6230859ff978b79",
        "duration": 220,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("b29daecda98a15b15cb6d28a"),
        "name": "Please Please Please",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("eb4d7f37ddaf4871d05bbefe"),
        "album_name": "Extraordinary Machine",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27385acb5e0d6230859ff978b79",
        "duration": 213,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("7c6b942404c58b7d671876eb"),
        "name": "Red Red Red",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("eb4d7f37ddaf4871d05bbefe"),
        "album_name": "Extraordinary Machine",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27385acb5e0d6230859ff978b79",
        "duration": 248,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("c2b122f1b9d6d9736bea500d"),
        "name": "Not About Love",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("eb4d7f37ddaf4871d05bbefe"),
        "album_name": "Extraordinary Machine",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27385acb5e0d6230859ff978b79",
        "duration": 259,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d69324a7c6054c5f70194a10"),
        "name": "Waltz (Better Than Fine)",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("eb4d7f37ddaf4871d05bbefe"),
        "album_name": "Extraordinary Machine",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27385acb5e0d6230859ff978b79",
        "duration": 226,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2b7ef51b16c544a4148cd0c6"),
        "name": "On The Bound",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("4901e59dea776e4fd57e09d6"),
        "album_name": "When The Pawn...",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27370622da427271b0203d7ce79",
        "duration": 322,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("20a4b8ab4927a1d7a1848d26"),
        "name": "To Your Love",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("4901e59dea776e4fd57e09d6"),
        "album_name": "When The Pawn...",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27370622da427271b0203d7ce79",
        "duration": 220,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("07ac868e026b2d1fce56978e"),
        "name": "Limp",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("4901e59dea776e4fd57e09d6"),
        "album_name": "When The Pawn...",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27370622da427271b0203d7ce79",
        "duration": 209,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("3b45a9db5441cb12fb943406"),
        "name": "Love Ridden",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("4901e59dea776e4fd57e09d6"),
        "album_name": "When The Pawn...",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27370622da427271b0203d7ce79",
        "duration": 202,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("10e094e470fc7f82a1f429f3"),
        "name": "Paper Bag",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("4901e59dea776e4fd57e09d6"),
        "album_name": "When The Pawn...",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27370622da427271b0203d7ce79",
        "duration": 219,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d03903d13534175afc96bba9"),
        "name": "A Mistake",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("4901e59dea776e4fd57e09d6"),
        "album_name": "When The Pawn...",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27370622da427271b0203d7ce79",
        "duration": 296,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1ae6029862a91bd7a159e644"),
        "name": "Fast As You Can",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("4901e59dea776e4fd57e09d6"),
        "album_name": "When The Pawn...",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27370622da427271b0203d7ce79",
        "duration": 278,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("1359f6b05c242f0a2091f9ce"),
        "name": "The Way Things Are",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("4901e59dea776e4fd57e09d6"),
        "album_name": "When The Pawn...",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27370622da427271b0203d7ce79",
        "duration": 256,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("dae2935c82e9cb02bf19a29b"),
        "name": "Get Gone",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("4901e59dea776e4fd57e09d6"),
        "album_name": "When The Pawn...",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27370622da427271b0203d7ce79",
        "duration": 247,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2b1fd7cc38d41a789f4ab16a"),
        "name": "I Know",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("4901e59dea776e4fd57e09d6"),
        "album_name": "When The Pawn...",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b27370622da427271b0203d7ce79",
        "duration": 295,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6059d7b1745d7db2b0f4d99d"),
        "name": "Sleep to Dream",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8dd1681a85d065ec9d99693e"),
        "album_name": "Tidal",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b254ca0983d65ede8e3d2f7a",
        "duration": 248,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("9b6c0c116e2f21777f9a7001"),
        "name": "Sullen Girl",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8dd1681a85d065ec9d99693e"),
        "album_name": "Tidal",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b254ca0983d65ede8e3d2f7a",
        "duration": 234,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("2a2520e864d7457107de8982"),
        "name": "Shadowboxer",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8dd1681a85d065ec9d99693e"),
        "album_name": "Tidal",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b254ca0983d65ede8e3d2f7a",
        "duration": 324,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("90e2bee10a7956f24f5d0f80"),
        "name": "Criminal",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8dd1681a85d065ec9d99693e"),
        "album_name": "Tidal",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b254ca0983d65ede8e3d2f7a",
        "duration": 341,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("d36d81e97f9e8978c1beb5a9"),
        "name": "Slow Like Honey",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8dd1681a85d065ec9d99693e"),
        "album_name": "Tidal",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b254ca0983d65ede8e3d2f7a",
        "duration": 356,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("0eda486c388e5243abae03da"),
        "name": "The First Taste",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8dd1681a85d065ec9d99693e"),
        "album_name": "Tidal",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b254ca0983d65ede8e3d2f7a",
        "duration": 286,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("cd575f7c25a9868e071fb024"),
        "name": "Never Is a Promise",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8dd1681a85d065ec9d99693e"),
        "album_name": "Tidal",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b254ca0983d65ede8e3d2f7a",
        "duration": 354,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("6935ddeccada72e7e301e482"),
        "name": "The Child Is Gone",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8dd1681a85d065ec9d99693e"),
        "album_name": "Tidal",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b254ca0983d65ede8e3d2f7a",
        "duration": 254,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("f134a1281e66578978ab29ea"),
        "name": "Pale September",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8dd1681a85d065ec9d99693e"),
        "album_name": "Tidal",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b254ca0983d65ede8e3d2f7a",
        "duration": 350,
        "average_users_score": 0.0,
        "total_plays": 0
    },
    {
        "_id": ObjectId("0141fb2709a63e57b47e3352"),
        "name": "Carrion",
        "artist_id": ObjectId("af33d8550632cb20bc3b6795"),
        "artist_name": "Fiona Apple",
        "album_id": ObjectId("8dd1681a85d065ec9d99693e"),
        "album_name": "Tidal",
        "album_photo": "https://i.scdn.co/image/ab67616d0000b273b254ca0983d65ede8e3d2f7a",
        "duration": 343,
        "average_users_score": 0.0,
        "total_plays": 0
    }
]
);


// Creación de índices B-Tree para optimizar consultas del top 10 global
db.songs.createIndex({ average_users_score: -1 });
db.songs.createIndex({ total_plays: -1 });

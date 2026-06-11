db = db.getSiblingDB('polyglotmusic');

db.users.insertMany([
    { _id: ObjectId("dddddddddddddddddddd0001"), username: "canotest" },
    { _id: ObjectId("dddddddddddddddddddd0002"), username: "edutest" }]);

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
            }
        ]
    },
    {
        "_id": ObjectId("5034983c70523c76d767aca6"),
        "name": "Olivia Rodrigo",
        "photo": "https://i.scdn.co/image/ab6761610000e5ebe654806251e2661def1f4e65",
        "albums": [
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
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
        "average_users_score": 0.0
    }
]
);


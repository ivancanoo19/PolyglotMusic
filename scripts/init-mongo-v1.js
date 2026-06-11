db = db.getSiblingDB('polyglotmusic');

db.users.insertMany([
    { _id: ObjectId("dddddddddddddddddddd0001"), username: "canotest" },
    { _id: ObjectId("dddddddddddddddddddd0002"), username: "edutest" }]);

db.artists.insertMany(
[
    {
        "_id": ObjectId("4dae1c5d2e978444b6a51397"),
        "name": "The Beatles",
        "albums": [
            {
                "album_id": ObjectId("750ad141c8f0f1fdb4b0094c"),
                "album_title": "Anthology 4",
                "album_year": 2025
            },
            {
                "album_id": ObjectId("9c3279d16b5a3df7adecd07c"),
                "album_title": "Revolver (Super Deluxe)",
                "album_year": 2022
            },
            {
                "album_id": ObjectId("da39b03b68ba8017e59c7930"),
                "album_title": "Get Back (Rooftop Performance)",
                "album_year": 2022
            },
            {
                "album_id": ObjectId("fc1265aa3ccd937548edbaa2"),
                "album_title": "Live At The Hollywood Bowl",
                "album_year": 2016
            },
            {
                "album_id": ObjectId("43d460334c1f569afcca0f24"),
                "album_title": "Let It Be... Naked (Remastered)",
                "album_year": 2014
            }
        ]
    },
    {
        "_id": ObjectId("92ca4d82114657f77dc86378"),
        "name": "Paramore",
        "albums": [
            {
                "album_id": ObjectId("b5ce6c073c5c2b21dc7c0bf5"),
                "album_title": "Re: This Is Why",
                "album_year": 2023
            },
            {
                "album_id": ObjectId("3012dfcd0b4e754e8859de8f"),
                "album_title": "This Is Why",
                "album_year": 2023
            },
            {
                "album_id": ObjectId("7e725a70e27a09ed9d8619ad"),
                "album_title": "After Laughter",
                "album_year": 2017
            },
            {
                "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
                "album_title": "Paramore (Deluxe Edition)",
                "album_year": 2013
            },
            {
                "album_id": ObjectId("966dd26ecab656cb71a3f418"),
                "album_title": "Paramore",
                "album_year": 2013
            }
        ]
    },
    {
        "_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "name": "Oasis",
        "albums": [
            {
                "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
                "album_title": "Oasis Knebworth 1996",
                "album_year": 2021
            },
            {
                "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
                "album_title": "Definitely Maybe (30th Anniversary)",
                "album_year": 2014
            },
            {
                "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
                "album_title": "(What's The Story) Morning Glory? [30th Anniversary]",
                "album_year": 2014
            },
            {
                "album_id": ObjectId("2655b4b4e02ae3f19826bc88"),
                "album_title": "Dig Out Your Soul",
                "album_year": 2008
            },
            {
                "album_id": ObjectId("1f53cd90898c82158058a42c"),
                "album_title": "Don't Believe The Truth",
                "album_year": 2005
            }
        ]
    },
    {
        "_id": ObjectId("917df7d9189b958ef07e3020"),
        "name": "Coldplay",
        "albums": [
            {
                "album_id": ObjectId("de19a1de26f086563446a7a3"),
                "album_title": "Moon Music",
                "album_year": 2024
            },
            {
                "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
                "album_title": "Moon Music (Full Moon Edition)",
                "album_year": 2024
            },
            {
                "album_id": ObjectId("363bff7cd3ef1984667017c4"),
                "album_title": "Music Of The Spheres",
                "album_year": 2021
            },
            {
                "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
                "album_title": "Everyday Life",
                "album_year": 2019
            },
            {
                "album_id": ObjectId("b225102215d4bc86a6705b9d"),
                "album_title": "Live in Buenos Aires",
                "album_year": 2018
            }
        ]
    },
    {
        "_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "name": "Radiohead",
        "albums": [
            {
                "album_id": ObjectId("615be90afcf9d999164af38c"),
                "album_title": "Hail to the Thief (Live Recordings 2003-2009)",
                "album_year": 2025
            },
            {
                "album_id": ObjectId("51e625489bb4843216a9a0c6"),
                "album_title": "KID A MNESIA",
                "album_year": 2021
            },
            {
                "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
                "album_title": "OK Computer OKNOTOK 1997 2017",
                "album_year": 2017
            },
            {
                "album_id": ObjectId("13777b8a9ee953ca0cf987d8"),
                "album_title": "A Moon Shaped Pool",
                "album_year": 2016
            },
            {
                "album_id": ObjectId("8b27c917fde450828a15ebf9"),
                "album_title": "TKOL RMX 1234567",
                "album_year": 2011
            }
        ]
    },
    {
        "_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "name": "Dua Lipa",
        "albums": [
            {
                "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
                "album_title": "Dua Lipa - Live From Mexico",
                "album_year": 2026
            },
            {
                "album_id": ObjectId("ebb7703e3d407e514e23f759"),
                "album_title": "Radical Optimism Tour - México",
                "album_year": 2025
            },
            {
                "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
                "album_title": "Dua Lipa - Live from the Royal Albert Hall",
                "album_year": 2024
            },
            {
                "album_id": ObjectId("e9d76c6d50f8a2d73b4c81c4"),
                "album_title": "Radical Optimism (Extended Versions)",
                "album_year": 2024
            },
            {
                "album_id": ObjectId("178ae176357dcbf46a7ff078"),
                "album_title": "Radical Optimism",
                "album_year": 2024
            }
        ]
    },
    {
        "_id": ObjectId("95c6e4369374d1333a81815d"),
        "name": "Led Zeppelin",
        "albums": [
            {
                "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
                "album_title": "The Complete BBC Sessions (Remastered)",
                "album_year": 2016
            },
            {
                "album_id": ObjectId("26777cf22646e7709f21fbc2"),
                "album_title": "Celebration Day",
                "album_year": 2012
            },
            {
                "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
                "album_title": "How the West Was Won (Remaster)",
                "album_year": 2003
            },
            {
                "album_id": ObjectId("7d0ec068f8bf80084b4d2f90"),
                "album_title": "Coda (Remaster)",
                "album_year": 1982
            },
            {
                "album_id": ObjectId("792587b8cd40b7a51b926831"),
                "album_title": "Coda (Deluxe Edition)",
                "album_year": 1982
            }
        ]
    },
    {
        "_id": ObjectId("5034983c70523c76d767aca6"),
        "name": "Olivia Rodrigo",
        "albums": [
            {
                "album_id": ObjectId("dfc243f396bc5f28089a41af"),
                "album_title": "GUTS (spilled)",
                "album_year": 2024
            },
            {
                "album_id": ObjectId("9a2b28b0c1b1d6f3efdbced9"),
                "album_title": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
                "album_year": 2023
            },
            {
                "album_id": ObjectId("44b54cd738f4cb5f01b80902"),
                "album_title": "GUTS",
                "album_year": 2023
            },
            {
                "album_id": ObjectId("25f4c73b5dc14d5a7e171dd1"),
                "album_title": "SOUR",
                "album_year": 2021
            }
        ]
    },
    {
        "_id": ObjectId("d9446cdac81c7cff8382425c"),
        "name": "Arctic Monkeys",
        "albums": [
            {
                "album_id": ObjectId("d872134fb70580e9100c877b"),
                "album_title": "The Car",
                "album_year": 2022
            },
            {
                "album_id": ObjectId("203742e3b2a39415c350641e"),
                "album_title": "Live at the Royal Albert Hall",
                "album_year": 2020
            },
            {
                "album_id": ObjectId("f088ce60e0ff74738f5277e2"),
                "album_title": "Tranquility Base Hotel & Casino",
                "album_year": 2018
            },
            {
                "album_id": ObjectId("afbd130238ed230d29266833"),
                "album_title": "AM",
                "album_year": 2013
            },
            {
                "album_id": ObjectId("fc9827fe1ce82fc35ad636c2"),
                "album_title": "Suck It and See",
                "album_year": 2011
            }
        ]
    },
    {
        "_id": ObjectId("a197241ae30ca34a432c6e62"),
        "name": "Jeff Buckley",
        "albums": [
            {
                "album_id": ObjectId("d689d32264ce1fad2cd19593"),
                "album_title": "Jeff Buckley: It's Never Over - Songs From the Film",
                "album_year": 2025
            },
            {
                "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
                "album_title": "Gods And Monsters (Live)",
                "album_year": 2023
            },
            {
                "album_id": ObjectId("992cf5304510b5d6d0cb84a2"),
                "album_title": "Live at Wetlands, New York, NY 8/16/94",
                "album_year": 2019
            },
            {
                "album_id": ObjectId("a7d6b4ae1a07e7aec19fee3c"),
                "album_title": "Live at Columbia Records Radio Hour",
                "album_year": 2019
            },
            {
                "album_id": ObjectId("3a2fd5a396e7b4ac9cf9ca2a"),
                "album_title": "You and I (Extended Edition)",
                "album_year": 2016
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
        "_id": ObjectId("b5ce6c073c5c2b21dc7c0bf5"),
        "title": "Re: This Is Why",
        "release_year": 2023,
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "total_songs": 13,
        "album_duration": 3072,
        "tracklist": [
            {
                "song_id": ObjectId("db60fa3772e37ed5345e1bf8"),
                "song_name": "This Is Why (Re: Foals)",
                "duration": 351
            },
            {
                "song_id": ObjectId("760cea4fd2ff903d44296746"),
                "song_name": "The News (Re: The Linda Lindas)",
                "duration": 205
            },
            {
                "song_id": ObjectId("0077047d63f6b3fc5778eaa3"),
                "song_name": "Running Out Of Time (Re: Panda Bear)",
                "duration": 263
            },
            {
                "song_id": ObjectId("8d8b0741743232947d61f98f"),
                "song_name": "Running Out Of Time (Re: Zane Lowe)",
                "duration": 284
            },
            {
                "song_id": ObjectId("e4b776b5a9fe6a978858820c"),
                "song_name": "C’est Comme Ça (Re: Wet Leg)",
                "duration": 144
            },
            {
                "song_id": ObjectId("f685dba132f3d1f0647b619f"),
                "song_name": "Big Man, Little Dignity (Re: DOMi & JD BECK)",
                "duration": 179
            },
            {
                "song_id": ObjectId("b91e2bd249f3a3ac48c3df0e"),
                "song_name": "You First (Re: Remi Wolf)",
                "duration": 234
            },
            {
                "song_id": ObjectId("6b25c3c6413c02eb0aaa8519"),
                "song_name": "Figure 8 (Re: Bartees Strange)",
                "duration": 215
            },
            {
                "song_id": ObjectId("74277df6f84881c8a2ef1820"),
                "song_name": "Liar (Re: Romy)",
                "duration": 276
            },
            {
                "song_id": ObjectId("b9c5f2464d6900e807d9a922"),
                "song_name": "Crave (Re: Claud)",
                "duration": 210
            },
            {
                "song_id": ObjectId("5fde20c1cfbbeaa103d7fdab"),
                "song_name": "Thick Skull (Re: Julien Baker)",
                "duration": 294
            },
            {
                "song_id": ObjectId("a4b4f2992d67a7985ed6f9fe"),
                "song_name": "Sanity (Re: Jack Antonoff)",
                "duration": 207
            },
            {
                "song_id": ObjectId("5f76a65a386e2e7c5882227a"),
                "song_name": "Sanity (demo)",
                "duration": 210
            }
        ]
    },
    {
        "_id": ObjectId("3012dfcd0b4e754e8859de8f"),
        "title": "This Is Why",
        "release_year": 2023,
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "total_songs": 10,
        "album_duration": 2172,
        "tracklist": [
            {
                "song_id": ObjectId("84146ac187a8c5af9572c940"),
                "song_name": "This Is Why",
                "duration": 207
            },
            {
                "song_id": ObjectId("35a073dcc1feecf479ce5392"),
                "song_name": "The News",
                "duration": 187
            },
            {
                "song_id": ObjectId("e91e427b41c5948914694870"),
                "song_name": "Running Out Of Time",
                "duration": 192
            },
            {
                "song_id": ObjectId("826aa8998255e19c40487d80"),
                "song_name": "C’est Comme Ça",
                "duration": 149
            },
            {
                "song_id": ObjectId("864509e9e804e3abe8940592"),
                "song_name": "Big Man, Little Dignity",
                "duration": 260
            },
            {
                "song_id": ObjectId("3ff3970d73daf02c41a81c28"),
                "song_name": "You First",
                "duration": 245
            },
            {
                "song_id": ObjectId("c2255757e776c1d01b04b88a"),
                "song_name": "Figure 8",
                "duration": 204
            },
            {
                "song_id": ObjectId("80d89f0d28a3e09b9157f28b"),
                "song_name": "Liar",
                "duration": 261
            },
            {
                "song_id": ObjectId("c9f154211453d2d878673dbb"),
                "song_name": "Crave",
                "duration": 235
            },
            {
                "song_id": ObjectId("d05656887ce3ca6f3a11e4ef"),
                "song_name": "Thick Skull",
                "duration": 232
            }
        ]
    },
    {
        "_id": ObjectId("7e725a70e27a09ed9d8619ad"),
        "title": "After Laughter",
        "release_year": 2017,
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "total_songs": 12,
        "album_duration": 2551,
        "tracklist": [
            {
                "song_id": ObjectId("9abe95918e89cd7a2e2913c7"),
                "song_name": "Hard Times",
                "duration": 182
            },
            {
                "song_id": ObjectId("d5a0e5cd98d2be442a51ef06"),
                "song_name": "Rose-Colored Boy",
                "duration": 212
            },
            {
                "song_id": ObjectId("df720e018f95e3c4b161a4db"),
                "song_name": "Told You So",
                "duration": 188
            },
            {
                "song_id": ObjectId("33a9e48fdeee0c2e76f4f14b"),
                "song_name": "Forgiveness",
                "duration": 219
            },
            {
                "song_id": ObjectId("fc2efafa63002f91253433b0"),
                "song_name": "Fake Happy",
                "duration": 235
            },
            {
                "song_id": ObjectId("7f54d7103459d86c539daebb"),
                "song_name": "26",
                "duration": 221
            },
            {
                "song_id": ObjectId("44d33295cb72a0ff6b1e848f"),
                "song_name": "Pool",
                "duration": 232
            },
            {
                "song_id": ObjectId("aa8b58e793fd874e6a1b0f84"),
                "song_name": "Grudges",
                "duration": 187
            },
            {
                "song_id": ObjectId("395fc1f6ce50c85a886cc06c"),
                "song_name": "Caught in the Middle",
                "duration": 214
            },
            {
                "song_id": ObjectId("6e544e98da6c36fa4024c81c"),
                "song_name": "Idle Worship",
                "duration": 198
            },
            {
                "song_id": ObjectId("ba99fe9964df93e67c0ba571"),
                "song_name": "No Friend",
                "duration": 203
            },
            {
                "song_id": ObjectId("ea8c74c851b98fe0902e7b1f"),
                "song_name": "Tell Me How",
                "duration": 260
            }
        ]
    },
    {
        "_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "title": "Paramore (Deluxe Edition)",
        "release_year": 2013,
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "total_songs": 20,
        "album_duration": 4510,
        "tracklist": [
            {
                "song_id": ObjectId("69e96981b254b38cd5f91f9a"),
                "song_name": "Fast in My Car",
                "duration": 222
            },
            {
                "song_id": ObjectId("bcb5f01c9d8a5d4225b33fab"),
                "song_name": "Now",
                "duration": 250
            },
            {
                "song_id": ObjectId("77cfb0cf2c300f0ee70acadc"),
                "song_name": "Grow Up",
                "duration": 230
            },
            {
                "song_id": ObjectId("78f00c256795c204e7cffc98"),
                "song_name": "Daydreaming",
                "duration": 271
            },
            {
                "song_id": ObjectId("68126034bcf851ddf241931c"),
                "song_name": "Interlude: Moving On",
                "duration": 90
            },
            {
                "song_id": ObjectId("d6a6a372eed7cdae66455d64"),
                "song_name": "Ain't It Fun",
                "duration": 296
            },
            {
                "song_id": ObjectId("1e6da073854e44213f661848"),
                "song_name": "Part II",
                "duration": 281
            },
            {
                "song_id": ObjectId("9972adf457c604f22a29ccfa"),
                "song_name": "Last Hope",
                "duration": 309
            },
            {
                "song_id": ObjectId("bbe49f3bc6549a94d0613776"),
                "song_name": "Still into You",
                "duration": 216
            },
            {
                "song_id": ObjectId("df3f89c830654a23e4262b1c"),
                "song_name": "Anklebiters",
                "duration": 137
            },
            {
                "song_id": ObjectId("b354d3a1608a40029d8b4d3a"),
                "song_name": "Interlude: Holiday",
                "duration": 69
            },
            {
                "song_id": ObjectId("bca3f10c41082f1acea50b48"),
                "song_name": "Proof",
                "duration": 195
            },
            {
                "song_id": ObjectId("da78d8a64c7e9d1f008e5089"),
                "song_name": "Hate to See Your Heart Break",
                "duration": 309
            },
            {
                "song_id": ObjectId("a924ae45fefd1f29f8ea6bbe"),
                "song_name": "(One of Those) Crazy Girls",
                "duration": 212
            },
            {
                "song_id": ObjectId("526adeae114fba2ec105dfb5"),
                "song_name": "Interlude: I'm Not Angry Anymore",
                "duration": 52
            },
            {
                "song_id": ObjectId("09959e6aa7712fcb7a267909"),
                "song_name": "Be Alone",
                "duration": 220
            },
            {
                "song_id": ObjectId("e569d8c6f108ac1b9bd85a00"),
                "song_name": "Future",
                "duration": 470
            },
            {
                "song_id": ObjectId("df9a3cde0e5a4179f90913b1"),
                "song_name": "Hate to See Your Heart Break (feat. Joy Williams)",
                "duration": 312
            },
            {
                "song_id": ObjectId("02f1f4b4fb8a1c63ee12b3ef"),
                "song_name": "Escape Route",
                "duration": 177
            },
            {
                "song_id": ObjectId("3260bb1e6febeaf3094596a8"),
                "song_name": "Native Tongue",
                "duration": 192
            }
        ]
    },
    {
        "_id": ObjectId("966dd26ecab656cb71a3f418"),
        "title": "Paramore",
        "release_year": 2013,
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "total_songs": 17,
        "album_duration": 3829,
        "tracklist": [
            {
                "song_id": ObjectId("367c305ee851c60d70f81080"),
                "song_name": "Fast in My Car",
                "duration": 222
            },
            {
                "song_id": ObjectId("ac364458059810f2be31da56"),
                "song_name": "Now",
                "duration": 250
            },
            {
                "song_id": ObjectId("dfea0c6859dfd83f45503e2d"),
                "song_name": "Grow Up",
                "duration": 230
            },
            {
                "song_id": ObjectId("6cf42d0db3ea13a27f446460"),
                "song_name": "Daydreaming",
                "duration": 271
            },
            {
                "song_id": ObjectId("17c7e19ae7d71589938d2726"),
                "song_name": "Interlude: Moving On",
                "duration": 90
            },
            {
                "song_id": ObjectId("07d01c43d02909e16509633a"),
                "song_name": "Ain't It Fun",
                "duration": 296
            },
            {
                "song_id": ObjectId("1112b9eba81dac5b3c6f1add"),
                "song_name": "Part II",
                "duration": 281
            },
            {
                "song_id": ObjectId("b2c3d4cda60bfa50f526b111"),
                "song_name": "Last Hope",
                "duration": 309
            },
            {
                "song_id": ObjectId("0f9a676dd8d864d0debd7f82"),
                "song_name": "Still into You",
                "duration": 216
            },
            {
                "song_id": ObjectId("b43fd4af3111f2f940571a73"),
                "song_name": "Anklebiters",
                "duration": 137
            },
            {
                "song_id": ObjectId("dff1b94a1df3f0c693b904ac"),
                "song_name": "Interlude: Holiday",
                "duration": 69
            },
            {
                "song_id": ObjectId("7d70e0a19472ab868e37dca4"),
                "song_name": "Proof",
                "duration": 195
            },
            {
                "song_id": ObjectId("ba860a38e5659e2d9e3a271e"),
                "song_name": "Hate to See Your Heart Break",
                "duration": 309
            },
            {
                "song_id": ObjectId("79babc414f19dc7daf35d54d"),
                "song_name": "(One of Those) Crazy Girls",
                "duration": 212
            },
            {
                "song_id": ObjectId("d11cb211ebf0ae96eab62167"),
                "song_name": "Interlude: I'm Not Angry Anymore",
                "duration": 52
            },
            {
                "song_id": ObjectId("5d75e32fed0e57299bb7f39c"),
                "song_name": "Be Alone",
                "duration": 220
            },
            {
                "song_id": ObjectId("66c9a0b984127ea4a90e8206"),
                "song_name": "Future",
                "duration": 470
            }
        ]
    },
    {
        "_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "title": "Oasis Knebworth 1996",
        "release_year": 2021,
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "total_songs": 20,
        "album_duration": 5995,
        "tracklist": [
            {
                "song_id": ObjectId("f85a33c355e7f8799f861733"),
                "song_name": "Columbia - Live at Knebworth, 10 August '96",
                "duration": 287
            },
            {
                "song_id": ObjectId("6516a661f516008fa94cb362"),
                "song_name": "Acquiesce - Live at Knebworth, 10 August '96",
                "duration": 236
            },
            {
                "song_id": ObjectId("d11d99995eef8629213e28cc"),
                "song_name": "Supersonic - Live at Knebworth, 10 August '96",
                "duration": 309
            },
            {
                "song_id": ObjectId("b3b581bfbe679e4be960d755"),
                "song_name": "Hello - Live at Knebworth, 11 August '96",
                "duration": 175
            },
            {
                "song_id": ObjectId("2e46c64070c7e785d0a19421"),
                "song_name": "Some Might Say - Live at Knebworth, 11 August '96",
                "duration": 304
            },
            {
                "song_id": ObjectId("adf7e5afce42f03757261161"),
                "song_name": "Roll with It - Live at Knebworth, 11 August '96",
                "duration": 245
            },
            {
                "song_id": ObjectId("86c3f4058a79dbfae020a77d"),
                "song_name": "Slide Away - Live at Knebworth, 11 August '96",
                "duration": 347
            },
            {
                "song_id": ObjectId("5bbd5d93df46606ef5c5b858"),
                "song_name": "Morning Glory - Live at Knebworth, 11 August '96",
                "duration": 252
            },
            {
                "song_id": ObjectId("a692e740cecd5677f80759ca"),
                "song_name": "Round Are Way - Live at Knebworth, 10 August '96",
                "duration": 287
            },
            {
                "song_id": ObjectId("8811a4f56ee5fd85d57f77e8"),
                "song_name": "Cigarettes & Alcohol - Live at Knebworth, 10 August '96",
                "duration": 282
            },
            {
                "song_id": ObjectId("ee6105eb986c2ac59bffc035"),
                "song_name": "Whatever - Live at Knebworth, 10 August '96",
                "duration": 359
            },
            {
                "song_id": ObjectId("464d8bbc56ea3aad4603b2b1"),
                "song_name": "Cast No Shadow - Live at Knebworth, 10 August '96",
                "duration": 286
            },
            {
                "song_id": ObjectId("b535bd4d628cdef1e24ca643"),
                "song_name": "Wonderwall - Live at Knebworth, 10 August '96",
                "duration": 244
            },
            {
                "song_id": ObjectId("8aec3706d3174b8174867e77"),
                "song_name": "The Masterplan - Live at Knebworth, 10 August '96",
                "duration": 280
            },
            {
                "song_id": ObjectId("2c0f8d5248ff3f0974a17c21"),
                "song_name": "Don't Look Back in Anger - Live at Knebworth, 11 August '96",
                "duration": 294
            },
            {
                "song_id": ObjectId("b664c09b9cf4b1a2d60e2165"),
                "song_name": "My Big Mouth - Live at Knebworth, 10 August '96",
                "duration": 310
            },
            {
                "song_id": ObjectId("de276da7d579968e09a02101"),
                "song_name": "It's Gettin' Better (Man!!) - Live at Knebworth, 11 August '96",
                "duration": 356
            },
            {
                "song_id": ObjectId("96f535f9ee70a25428cde57a"),
                "song_name": "Live Forever - Live at Knebworth, 10 August '96",
                "duration": 296
            },
            {
                "song_id": ObjectId("84c0347e35f6609743a4d046"),
                "song_name": "Champagne Supernova - Live at Knebworth, 11 August '96",
                "duration": 446
            },
            {
                "song_id": ObjectId("e7fe931099295643d3660ba3"),
                "song_name": "I Am the Walrus - Live at Knebworth, 11 August '96",
                "duration": 400
            }
        ]
    },
    {
        "_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "title": "Definitely Maybe (30th Anniversary)",
        "release_year": 2014,
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "total_songs": 20,
        "album_duration": 5724,
        "tracklist": [
            {
                "song_id": ObjectId("c7780d00a7efa7906c533824"),
                "song_name": "Rock 'n' Roll Star - Remastered",
                "duration": 321
            },
            {
                "song_id": ObjectId("93c4059d572e6835f3e72d02"),
                "song_name": "Shakermaker - Remastered",
                "duration": 308
            },
            {
                "song_id": ObjectId("d4521296fe63d53a63ef6bae"),
                "song_name": "Live Forever - Remastered",
                "duration": 276
            },
            {
                "song_id": ObjectId("89be19a94f102441d3330a0a"),
                "song_name": "Up in the Sky - Remastered",
                "duration": 268
            },
            {
                "song_id": ObjectId("78600727275ad03c73587b87"),
                "song_name": "Columbia - Remastered",
                "duration": 377
            },
            {
                "song_id": ObjectId("7cf1af90413d9ebce4470274"),
                "song_name": "Supersonic - Remastered",
                "duration": 283
            },
            {
                "song_id": ObjectId("eae6c337913f6c4391018685"),
                "song_name": "Bring It on Down - Remastered",
                "duration": 257
            },
            {
                "song_id": ObjectId("7a3e01f40c6341537d19f32a"),
                "song_name": "Cigarettes & Alcohol - Remastered",
                "duration": 289
            },
            {
                "song_id": ObjectId("f3b5230e24c7a133e79492fa"),
                "song_name": "Digsy's Dinner - Remastered",
                "duration": 152
            },
            {
                "song_id": ObjectId("84e516db5a97521c90f03fe8"),
                "song_name": "Slide Away - Remastered",
                "duration": 392
            },
            {
                "song_id": ObjectId("64e296af1d45c895f1ed5013"),
                "song_name": "Married with Children - Remastered",
                "duration": 193
            },
            {
                "song_id": ObjectId("fdc7469982a804c1d5765d25"),
                "song_name": "Rock 'n' Roll Star - Monnow Valley Version",
                "duration": 377
            },
            {
                "song_id": ObjectId("b303a9fd3f1505db4f5eb391"),
                "song_name": "Shakermaker - Monnow Valley Version",
                "duration": 290
            },
            {
                "song_id": ObjectId("94092780a42c4975e6205fd5"),
                "song_name": "Live Forever - Monnow Valley Version",
                "duration": 295
            },
            {
                "song_id": ObjectId("bdd165dd7e4c5881451cc34e"),
                "song_name": "Up In The Sky - Monnow Valley Version",
                "duration": 297
            },
            {
                "song_id": ObjectId("14e1c0b2c0f1402eb1a21db2"),
                "song_name": "Columbia - Monnow Valley Version",
                "duration": 290
            },
            {
                "song_id": ObjectId("e27a51dc2670b22d3a343e12"),
                "song_name": "Bring It On Down - Monnow Valley Version",
                "duration": 240
            },
            {
                "song_id": ObjectId("7a535f7a0554b24433c56ca6"),
                "song_name": "Cigarettes & Alcohol - Monnow Valley Version",
                "duration": 267
            },
            {
                "song_id": ObjectId("282045bb19b24d156e865f9a"),
                "song_name": "Digsy's Dinner - Monnow Valley Version",
                "duration": 160
            },
            {
                "song_id": ObjectId("1869afcc5bd580297b3bb8cc"),
                "song_name": "Rock 'n' Roll Star - Sawmills Outtake",
                "duration": 392
            }
        ]
    },
    {
        "_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "title": "(What's The Story) Morning Glory? [30th Anniversary]",
        "release_year": 2014,
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "total_songs": 17,
        "album_duration": 4460,
        "tracklist": [
            {
                "song_id": ObjectId("3644290aa4be1743b6347fec"),
                "song_name": "Hello - Remastered",
                "duration": 202
            },
            {
                "song_id": ObjectId("19ad3e5a1a2a1ada37a66e01"),
                "song_name": "Roll with It - Remastered",
                "duration": 240
            },
            {
                "song_id": ObjectId("ceb6b20d78e4f2a6f93e1435"),
                "song_name": "Wonderwall - Remastered",
                "duration": 258
            },
            {
                "song_id": ObjectId("fda3e7aaa5b42131aed71fb2"),
                "song_name": "Don't Look Back in Anger - Remastered",
                "duration": 289
            },
            {
                "song_id": ObjectId("c8e15875711bc71cedace144"),
                "song_name": "Hey Now - Remastered",
                "duration": 341
            },
            {
                "song_id": ObjectId("c71326c5780c877236507af9"),
                "song_name": "The Swamp Song - Version 1 - Remastered",
                "duration": 44
            },
            {
                "song_id": ObjectId("8bc1f2a1d5fa348159dec453"),
                "song_name": "Some Might Say - Remastered",
                "duration": 327
            },
            {
                "song_id": ObjectId("43132a6a1070ac35fe868eae"),
                "song_name": "Cast No Shadow - Remastered",
                "duration": 294
            },
            {
                "song_id": ObjectId("26d00a5b9b0a189b8269b443"),
                "song_name": "She's Electric - Remastered",
                "duration": 220
            },
            {
                "song_id": ObjectId("ff567c9d2837d9164a11eda9"),
                "song_name": "Morning Glory - Remastered",
                "duration": 303
            },
            {
                "song_id": ObjectId("07c1ba7d50af1a8d97a32c36"),
                "song_name": "The Swamp Song - Version 2 - Remastered",
                "duration": 39
            },
            {
                "song_id": ObjectId("91920a7fab7f222eb47d0155"),
                "song_name": "Champagne Supernova - Remastered",
                "duration": 449
            },
            {
                "song_id": ObjectId("bb7c5842a9436ea661b6f0ec"),
                "song_name": "Cast No Shadow - Unplugged",
                "duration": 300
            },
            {
                "song_id": ObjectId("941a1dfe3fbb5059ef9e0829"),
                "song_name": "Morning Glory - Unplugged",
                "duration": 274
            },
            {
                "song_id": ObjectId("8f939a240e2160fa805e757b"),
                "song_name": "Wonderwall - Unplugged",
                "duration": 251
            },
            {
                "song_id": ObjectId("8de09bd77be3009912150fe4"),
                "song_name": "Acquiesce - Unplugged",
                "duration": 241
            },
            {
                "song_id": ObjectId("b44d29c0bd2a43353a2056c1"),
                "song_name": "Champagne Supernova - Unplugged",
                "duration": 388
            }
        ]
    },
    {
        "_id": ObjectId("2655b4b4e02ae3f19826bc88"),
        "title": "Dig Out Your Soul",
        "release_year": 2008,
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "total_songs": 11,
        "album_duration": 2747,
        "tracklist": [
            {
                "song_id": ObjectId("280ada3d7ff477ad4df44788"),
                "song_name": "Bag It Up",
                "duration": 280
            },
            {
                "song_id": ObjectId("71d4bf5403b42e6b66419d98"),
                "song_name": "The Turning",
                "duration": 304
            },
            {
                "song_id": ObjectId("e85c68e08cc068e5019bf239"),
                "song_name": "Waiting for the Rapture",
                "duration": 182
            },
            {
                "song_id": ObjectId("aa87528f4a2d93fda07e10ed"),
                "song_name": "The Shock of the Lightning",
                "duration": 299
            },
            {
                "song_id": ObjectId("fe0302b4de520f9f6c428186"),
                "song_name": "I'm Outta Time",
                "duration": 250
            },
            {
                "song_id": ObjectId("2b02e23f6609c69bac51c1af"),
                "song_name": "(Get Off Your) High Horse Lady",
                "duration": 246
            },
            {
                "song_id": ObjectId("88ae492c525081faa859aa75"),
                "song_name": "Falling Down",
                "duration": 260
            },
            {
                "song_id": ObjectId("6bbaddc2040a5ccfb10764fb"),
                "song_name": "To Be Where There's Life",
                "duration": 275
            },
            {
                "song_id": ObjectId("96f99fce4388c2d571219284"),
                "song_name": "Ain't Got Nothin'",
                "duration": 134
            },
            {
                "song_id": ObjectId("fc129663994e4471faa86a60"),
                "song_name": "The Nature Of Reality",
                "duration": 227
            },
            {
                "song_id": ObjectId("f33f2c18489881f10660f76f"),
                "song_name": "Soldier On",
                "duration": 290
            }
        ]
    },
    {
        "_id": ObjectId("1f53cd90898c82158058a42c"),
        "title": "Don't Believe The Truth",
        "release_year": 2005,
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "total_songs": 11,
        "album_duration": 2572,
        "tracklist": [
            {
                "song_id": ObjectId("4202482eb339e47d45d0560e"),
                "song_name": "Turn Up the Sun",
                "duration": 239
            },
            {
                "song_id": ObjectId("1b1e27114cad1eb212b264a0"),
                "song_name": "Mucky Fingers",
                "duration": 235
            },
            {
                "song_id": ObjectId("fc71bf1386efef23ee5aeabe"),
                "song_name": "Lyla",
                "duration": 310
            },
            {
                "song_id": ObjectId("e00b73d694df04aff05ef260"),
                "song_name": "Love Like A Bomb",
                "duration": 172
            },
            {
                "song_id": ObjectId("2b22859a5f7a8459a601b86f"),
                "song_name": "The Importance of Being Idle",
                "duration": 219
            },
            {
                "song_id": ObjectId("e12bcfc7964b360f9d37a434"),
                "song_name": "The Meaning Of Soul",
                "duration": 102
            },
            {
                "song_id": ObjectId("fb42c1051f8b6ff5767efc51"),
                "song_name": "Guess God Thinks I'm Abel",
                "duration": 204
            },
            {
                "song_id": ObjectId("fbb96f53eaf782b4356f9703"),
                "song_name": "Part Of The Queue",
                "duration": 228
            },
            {
                "song_id": ObjectId("8100f2fec03f4cf2dbc71db6"),
                "song_name": "Keep The Dream Alive",
                "duration": 345
            },
            {
                "song_id": ObjectId("99c2a59fb4d728d0ca319fd5"),
                "song_name": "A Bell Will Ring",
                "duration": 187
            },
            {
                "song_id": ObjectId("1c51236a6d6b600013903969"),
                "song_name": "Let There Be Love",
                "duration": 331
            }
        ]
    },
    {
        "_id": ObjectId("de19a1de26f086563446a7a3"),
        "title": "Moon Music",
        "release_year": 2024,
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "total_songs": 10,
        "album_duration": 2636,
        "tracklist": [
            {
                "song_id": ObjectId("9ff6700f301c96b9a754924b"),
                "song_name": "MOON MUSiC",
                "duration": 276
            },
            {
                "song_id": ObjectId("790b4dc37043b97000598cdc"),
                "song_name": "feelslikeimfallinginlove",
                "duration": 236
            },
            {
                "song_id": ObjectId("6f317d5dacb3b74a7d2b4b2c"),
                "song_name": "WE PRAY",
                "duration": 233
            },
            {
                "song_id": ObjectId("d1c8635a06dbd5ebc261cae5"),
                "song_name": "JUPiTER",
                "duration": 240
            },
            {
                "song_id": ObjectId("0636c8f65c39597f939667e2"),
                "song_name": "GOOD FEELiNGS",
                "duration": 217
            },
            {
                "song_id": ObjectId("6aa8c08640e7be3c4b396c8f"),
                "song_name": "🌈",
                "duration": 369
            },
            {
                "song_id": ObjectId("f8ea84c4f40d156cdb834598"),
                "song_name": "iAAM",
                "duration": 183
            },
            {
                "song_id": ObjectId("c00587db301cdc3fef5e4039"),
                "song_name": "AETERNA",
                "duration": 253
            },
            {
                "song_id": ObjectId("f10487d4ffea24b4a959c6f9"),
                "song_name": "ALL MY LOVE",
                "duration": 222
            },
            {
                "song_id": ObjectId("24da4e1276729f9a94f6919c"),
                "song_name": "ONE WORLD",
                "duration": 407
            }
        ]
    },
    {
        "_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "title": "Moon Music (Full Moon Edition)",
        "release_year": 2024,
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "total_songs": 20,
        "album_duration": 4739,
        "tracklist": [
            {
                "song_id": ObjectId("6ae342179b4e41bb3c0852f3"),
                "song_name": "MOON MUSiC",
                "duration": 276
            },
            {
                "song_id": ObjectId("3587822fd1ad15b85a6f132f"),
                "song_name": "feelslikeimfallinginlove",
                "duration": 236
            },
            {
                "song_id": ObjectId("31355c014b4e9b6e5084bb09"),
                "song_name": "WE PRAY",
                "duration": 233
            },
            {
                "song_id": ObjectId("96dd95a70b0188dbbf2a6b17"),
                "song_name": "JUPiTER",
                "duration": 240
            },
            {
                "song_id": ObjectId("ce33e79b878498fbb7401235"),
                "song_name": "GOOD FEELiNGS",
                "duration": 217
            },
            {
                "song_id": ObjectId("f4cff21b710d38f0b3265b6e"),
                "song_name": "🌈",
                "duration": 369
            },
            {
                "song_id": ObjectId("c099b548bb3109ad030c1b2d"),
                "song_name": "iAAM",
                "duration": 183
            },
            {
                "song_id": ObjectId("fccb2976a50110aaf8a35314"),
                "song_name": "AETERNA",
                "duration": 253
            },
            {
                "song_id": ObjectId("fafeb77431a6fa22a093429c"),
                "song_name": "ALL MY LOVE",
                "duration": 222
            },
            {
                "song_id": ObjectId("8877ca43eda7d92c675f6491"),
                "song_name": "ONE WORLD",
                "duration": 407
            },
            {
                "song_id": ObjectId("768e873b1e585bb8a67f878b"),
                "song_name": "Moon Music - Elodie",
                "duration": 166
            },
            {
                "song_id": ObjectId("39c73d66579baf8930df6bd7"),
                "song_name": "feelslikeimfallinginlive",
                "duration": 276
            },
            {
                "song_id": ObjectId("001710c859509358e51af4ea"),
                "song_name": "The Karate Kid",
                "duration": 175
            },
            {
                "song_id": ObjectId("2518eaa40cbc6c8660509c50"),
                "song_name": "We Pray - Be Our Guest",
                "duration": 233
            },
            {
                "song_id": ObjectId("3cc8f2e86dbbff18531e21f7"),
                "song_name": "Angelsong",
                "duration": 261
            },
            {
                "song_id": ObjectId("2bc000c3d7ec03b1ddb3edb6"),
                "song_name": "Jupiter - Single Version",
                "duration": 173
            },
            {
                "song_id": ObjectId("690bfffe8c27f69ed1c2d14e"),
                "song_name": "Man in The Moon",
                "duration": 234
            },
            {
                "song_id": ObjectId("c4205a8a2b2b7b32e69f0294"),
                "song_name": "i Am A Mountain",
                "duration": 186
            },
            {
                "song_id": ObjectId("13f0ce5fbc3266f3ff562cc6"),
                "song_name": "All My Love - Live in Dublin",
                "duration": 246
            },
            {
                "song_id": ObjectId("6087b4abcb0679d29f7ac801"),
                "song_name": "👋",
                "duration": 153
            }
        ]
    },
    {
        "_id": ObjectId("363bff7cd3ef1984667017c4"),
        "title": "Music Of The Spheres",
        "release_year": 2021,
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "total_songs": 12,
        "album_duration": 2506,
        "tracklist": [
            {
                "song_id": ObjectId("a1f320f2d154f5f1a218d697"),
                "song_name": "🪐",
                "duration": 53
            },
            {
                "song_id": ObjectId("9a53c9713ea11e3ca78efe2a"),
                "song_name": "Higher Power",
                "duration": 206
            },
            {
                "song_id": ObjectId("ccc884b75b3b2aae29cc3b9a"),
                "song_name": "Humankind",
                "duration": 266
            },
            {
                "song_id": ObjectId("5411aa4928828bcbbab96f70"),
                "song_name": "✨",
                "duration": 53
            },
            {
                "song_id": ObjectId("59ca0b27d7adcd3342027a78"),
                "song_name": "Let Somebody Go",
                "duration": 241
            },
            {
                "song_id": ObjectId("b808396e2efad48e06227982"),
                "song_name": "❤️",
                "duration": 188
            },
            {
                "song_id": ObjectId("334ebaa18ba43bb8fba5a331"),
                "song_name": "People of The Pride",
                "duration": 217
            },
            {
                "song_id": ObjectId("cd6e988c3e6b7b56cc08d119"),
                "song_name": "Biutyful",
                "duration": 192
            },
            {
                "song_id": ObjectId("73f57d5501d68d167479cbac"),
                "song_name": "🌎",
                "duration": 21
            },
            {
                "song_id": ObjectId("0461a2d67f3ce54d3e43bf5e"),
                "song_name": "My Universe",
                "duration": 226
            },
            {
                "song_id": ObjectId("6a5107695c68a6d31fae41bb"),
                "song_name": "♾",
                "duration": 226
            },
            {
                "song_id": ObjectId("5f44d0b63a14370f1697e1f7"),
                "song_name": "Coloratura",
                "duration": 617
            }
        ]
    },
    {
        "_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "title": "Everyday Life",
        "release_year": 2019,
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "total_songs": 16,
        "album_duration": 3169,
        "tracklist": [
            {
                "song_id": ObjectId("e210c695fa45bd99fcfb47d8"),
                "song_name": "Sunrise",
                "duration": 151
            },
            {
                "song_id": ObjectId("5a5ce16e6ca3606c0a994eb9"),
                "song_name": "Church",
                "duration": 230
            },
            {
                "song_id": ObjectId("b200f24d745dc1a9916535cc"),
                "song_name": "Trouble In Town",
                "duration": 278
            },
            {
                "song_id": ObjectId("e4b3ce257698e8f1fd028cb1"),
                "song_name": "BrokEn",
                "duration": 150
            },
            {
                "song_id": ObjectId("ad24d27d45aa0b77580e5d2d"),
                "song_name": "Daddy",
                "duration": 298
            },
            {
                "song_id": ObjectId("5a61825dbb8bf4ad1771ec3f"),
                "song_name": "WOTW / POTP",
                "duration": 76
            },
            {
                "song_id": ObjectId("9af70c7ce2d6f348b9b8ee59"),
                "song_name": "Arabesque",
                "duration": 340
            },
            {
                "song_id": ObjectId("3d833b4bca5846c41e993e55"),
                "song_name": "When I Need A Friend",
                "duration": 155
            },
            {
                "song_id": ObjectId("4c5582be4732e841cdd75b5a"),
                "song_name": "Guns",
                "duration": 115
            },
            {
                "song_id": ObjectId("c69fe6eb2c72ec0087a265a1"),
                "song_name": "Orphans",
                "duration": 197
            },
            {
                "song_id": ObjectId("1e7e1ff912a2d6561c18cc23"),
                "song_name": "Èkó",
                "duration": 157
            },
            {
                "song_id": ObjectId("5e4288fe658b3dd8dc30446b"),
                "song_name": "Cry Cry Cry",
                "duration": 167
            },
            {
                "song_id": ObjectId("0e8520bde7cdbd7bad49f057"),
                "song_name": "Old Friends",
                "duration": 146
            },
            {
                "song_id": ObjectId("2bc88e099983f3f3439d0dbc"),
                "song_name": "بنی آدم",
                "duration": 194
            },
            {
                "song_id": ObjectId("b0c756d8343876729b09705b"),
                "song_name": "Champion Of The World",
                "duration": 257
            },
            {
                "song_id": ObjectId("226be253340d99f41b5bc2a3"),
                "song_name": "Everyday Life",
                "duration": 258
            }
        ]
    },
    {
        "_id": ObjectId("b225102215d4bc86a6705b9d"),
        "title": "Live in Buenos Aires",
        "release_year": 2018,
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "total_songs": 20,
        "album_duration": 5689,
        "tracklist": [
            {
                "song_id": ObjectId("9e175c01a765d393256b1eef"),
                "song_name": "A Head Full of Dreams - Live in Buenos Aires",
                "duration": 299
            },
            {
                "song_id": ObjectId("17d66f79395750060b80db76"),
                "song_name": "Yellow - Live in Buenos Aires",
                "duration": 350
            },
            {
                "song_id": ObjectId("19105c0a88051a0375af38fe"),
                "song_name": "Every Teardrop Is a Waterfall - Live in Buenos Aires",
                "duration": 244
            },
            {
                "song_id": ObjectId("adb3438bbf8c819bf4f030e0"),
                "song_name": "The Scientist - Live in Buenos Aires",
                "duration": 388
            },
            {
                "song_id": ObjectId("64278bd2ecae51ac1bcfe698"),
                "song_name": "God Put a Smile upon Your Face - Live in Buenos Aires",
                "duration": 274
            },
            {
                "song_id": ObjectId("fb8b5261f9c851250295330d"),
                "song_name": "Paradise - Live in Buenos Aires",
                "duration": 419
            },
            {
                "song_id": ObjectId("3915a61fadd51fa69a397125"),
                "song_name": "Always in My Head - Live in Buenos Aires",
                "duration": 221
            },
            {
                "song_id": ObjectId("69de6be236dd4d5124307f23"),
                "song_name": "Magic - Live in Buenos Aires",
                "duration": 285
            },
            {
                "song_id": ObjectId("d727e85ed27b676d4fdab4f1"),
                "song_name": "Everglow - Live in Buenos Aires",
                "duration": 295
            },
            {
                "song_id": ObjectId("4341258d0090d584ab677684"),
                "song_name": "Clocks - Live in Buenos Aires",
                "duration": 260
            },
            {
                "song_id": ObjectId("ba26bbe3d82d6786c97dd64c"),
                "song_name": "Midnight - Live in Buenos Aires",
                "duration": 105
            },
            {
                "song_id": ObjectId("17c569ac176e97ba293dc982"),
                "song_name": "Charlie Brown - Live in Buenos Aires",
                "duration": 284
            },
            {
                "song_id": ObjectId("c13f2667984941da09dcea98"),
                "song_name": "Hymn for the Weekend - Live in Buenos Aires",
                "duration": 302
            },
            {
                "song_id": ObjectId("7a17a689d7abf1b47510d0c2"),
                "song_name": "Fix You - Live in Buenos Aires",
                "duration": 327
            },
            {
                "song_id": ObjectId("593ce7deebe775494f7a3352"),
                "song_name": "Viva La Vida - Live in Buenos Aires",
                "duration": 251
            },
            {
                "song_id": ObjectId("348df4dd9c0f3619624bc7dc"),
                "song_name": "Adventure of a Lifetime - Live in Buenos Aires",
                "duration": 306
            },
            {
                "song_id": ObjectId("d7aca0fc7c5d1cc310ff87ae"),
                "song_name": "De Música Ligera - Live in Buenos Aires",
                "duration": 369
            },
            {
                "song_id": ObjectId("5b644c7e88cc4951ca1ff238"),
                "song_name": "Colour Spectrum - Live in Buenos Aires",
                "duration": 117
            },
            {
                "song_id": ObjectId("cd78cbe354189c4cd9471a8c"),
                "song_name": "In My Place - Live in Buenos Aires",
                "duration": 277
            },
            {
                "song_id": ObjectId("021138748b9b090bac0b963f"),
                "song_name": "Amor Argentina - Live in Buenos Aires",
                "duration": 316
            }
        ]
    },
    {
        "_id": ObjectId("615be90afcf9d999164af38c"),
        "title": "Hail to the Thief (Live Recordings 2003-2009)",
        "release_year": 2025,
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "total_songs": 12,
        "album_duration": 2858,
        "tracklist": [
            {
                "song_id": ObjectId("ec86033bebb2ee1ae1b028b7"),
                "song_name": "2 + 2 = 5 - Live",
                "duration": 216
            },
            {
                "song_id": ObjectId("4ea432ee8ca86dac6fae892f"),
                "song_name": "Sit Down. Stand Up - Live",
                "duration": 251
            },
            {
                "song_id": ObjectId("9e7fc723d6c445850630d3e8"),
                "song_name": "Sail To The Moon - Live",
                "duration": 259
            },
            {
                "song_id": ObjectId("652c5dd363fd8cebfc723e7d"),
                "song_name": "Go To Sleep - Live",
                "duration": 225
            },
            {
                "song_id": ObjectId("a554892b1d91e0005839a584"),
                "song_name": "Where I End and You Begin - Live",
                "duration": 250
            },
            {
                "song_id": ObjectId("cad54cf4c6940c52b73977d9"),
                "song_name": "We Suck Young Blood - Live",
                "duration": 297
            },
            {
                "song_id": ObjectId("030bffe04c7ebcf40166989d"),
                "song_name": "The Gloaming - Live",
                "duration": 239
            },
            {
                "song_id": ObjectId("8290eddde20a717f24101644"),
                "song_name": "There, There - Live",
                "duration": 333
            },
            {
                "song_id": ObjectId("1c8bcf7566b0c35a8ab30054"),
                "song_name": "I Will - Live",
                "duration": 129
            },
            {
                "song_id": ObjectId("94219f39232b45c03428d868"),
                "song_name": "Myxomatosis - Live",
                "duration": 244
            },
            {
                "song_id": ObjectId("c2ca73aeeb696005521a953e"),
                "song_name": "Scatterbrain - Live",
                "duration": 205
            },
            {
                "song_id": ObjectId("83b85c2778f691ee7c9f4dde"),
                "song_name": "A Wolf At the Door - Live",
                "duration": 210
            }
        ]
    },
    {
        "_id": ObjectId("51e625489bb4843216a9a0c6"),
        "title": "KID A MNESIA",
        "release_year": 2021,
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "total_songs": 20,
        "album_duration": 4945,
        "tracklist": [
            {
                "song_id": ObjectId("acddde90917098bafd8f3090"),
                "song_name": "Everything In Its Right Place",
                "duration": 251
            },
            {
                "song_id": ObjectId("b1d2525e613ac4602a29a16a"),
                "song_name": "Kid A",
                "duration": 284
            },
            {
                "song_id": ObjectId("57f7d65926919aabf4955f6b"),
                "song_name": "The National Anthem",
                "duration": 351
            },
            {
                "song_id": ObjectId("0e3b6d84a2d1c7326cd73e21"),
                "song_name": "How to Disappear Completely",
                "duration": 356
            },
            {
                "song_id": ObjectId("69ca0bdc7148e828f7e22870"),
                "song_name": "Treefingers",
                "duration": 222
            },
            {
                "song_id": ObjectId("66bfd1c63bd7d910ce350a56"),
                "song_name": "Optimistic",
                "duration": 315
            },
            {
                "song_id": ObjectId("c6d95ddfc97667aa3cb3503e"),
                "song_name": "In Limbo",
                "duration": 211
            },
            {
                "song_id": ObjectId("7158c025cc43576dd2072db3"),
                "song_name": "Idioteque",
                "duration": 309
            },
            {
                "song_id": ObjectId("d17c870047ebe5663e71d093"),
                "song_name": "Morning Bell",
                "duration": 275
            },
            {
                "song_id": ObjectId("9b9ad70d0bf225b4da296283"),
                "song_name": "Motion Picture Soundtrack",
                "duration": 200
            },
            {
                "song_id": ObjectId("8607316829a7e6181d41fa37"),
                "song_name": "Untitled",
                "duration": 52
            },
            {
                "song_id": ObjectId("62a37b2eaf024f3c859a4a9a"),
                "song_name": "Packt Like Sardines In a Crushd Tin Box",
                "duration": 240
            },
            {
                "song_id": ObjectId("c5651fa6187b2deea2701b1e"),
                "song_name": "Pyramid Song",
                "duration": 288
            },
            {
                "song_id": ObjectId("da4a431862443f80249a6a6b"),
                "song_name": "Pulk/Pull Revolving Doors",
                "duration": 247
            },
            {
                "song_id": ObjectId("83901b0bcc7c63e66f67f61c"),
                "song_name": "You And Whose Army?",
                "duration": 191
            },
            {
                "song_id": ObjectId("a2f39f025392c9d926a2f396"),
                "song_name": "I Might Be Wrong",
                "duration": 293
            },
            {
                "song_id": ObjectId("89742bf0b30f5027e365f3f3"),
                "song_name": "Knives Out",
                "duration": 254
            },
            {
                "song_id": ObjectId("722822a47b527e91a394bc43"),
                "song_name": "Morning Bell/Amnesiac",
                "duration": 194
            },
            {
                "song_id": ObjectId("dc36214422b01505a67b38ec"),
                "song_name": "Dollars and Cents",
                "duration": 291
            },
            {
                "song_id": ObjectId("3413e2ecbd001e9b3f734743"),
                "song_name": "Hunting Bears",
                "duration": 121
            }
        ]
    },
    {
        "_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "title": "OK Computer OKNOTOK 1997 2017",
        "release_year": 2017,
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "total_songs": 20,
        "album_duration": 4910,
        "tracklist": [
            {
                "song_id": ObjectId("77b84bbb92a77c8db094220e"),
                "song_name": "Airbag - Remastered",
                "duration": 283
            },
            {
                "song_id": ObjectId("a45fde5273f7360cf7e709ea"),
                "song_name": "Paranoid Android - Remastered",
                "duration": 383
            },
            {
                "song_id": ObjectId("286d13276c52f3fa614da562"),
                "song_name": "Subterranean Homesick Alien - Remastered",
                "duration": 269
            },
            {
                "song_id": ObjectId("95dc6e20ecbabee2320078d5"),
                "song_name": "Exit Music (For A Film) - Remastered",
                "duration": 265
            },
            {
                "song_id": ObjectId("0422b46bf852abb4ef279bfe"),
                "song_name": "Let Down - Remastered",
                "duration": 299
            },
            {
                "song_id": ObjectId("589a4778375458dbfa17c65f"),
                "song_name": "Karma Police - Remastered",
                "duration": 261
            },
            {
                "song_id": ObjectId("e0866b915dea6d1d117f6d5e"),
                "song_name": "Fitter Happier - Remastered",
                "duration": 117
            },
            {
                "song_id": ObjectId("53fba75c7979ab89df008b37"),
                "song_name": "Electioneering - Remastered",
                "duration": 230
            },
            {
                "song_id": ObjectId("125ebc3975b61208cd1c4add"),
                "song_name": "Climbing Up the Walls - Remastered",
                "duration": 285
            },
            {
                "song_id": ObjectId("ec1801f9e74e17edf5795e3f"),
                "song_name": "No Surprises - Remastered",
                "duration": 228
            },
            {
                "song_id": ObjectId("17035b9ba8d22d87daf2c50b"),
                "song_name": "Lucky - Remastered",
                "duration": 259
            },
            {
                "song_id": ObjectId("db0c1d33cc46a6ec366ddbc1"),
                "song_name": "The Tourist - Remastered",
                "duration": 323
            },
            {
                "song_id": ObjectId("e5fec5ec0e42169184538de8"),
                "song_name": "I Promise",
                "duration": 239
            },
            {
                "song_id": ObjectId("da49c0b40367f15022d9fe5b"),
                "song_name": "Man of War",
                "duration": 269
            },
            {
                "song_id": ObjectId("41f27e5e0fa527ad3859836f"),
                "song_name": "Lift",
                "duration": 246
            },
            {
                "song_id": ObjectId("7e4ba325266f7de4569b8eeb"),
                "song_name": "Lull - Remastered",
                "duration": 145
            },
            {
                "song_id": ObjectId("0381a041646c9f98a11a71d7"),
                "song_name": "Meeting in the Aisle - Remastered",
                "duration": 187
            },
            {
                "song_id": ObjectId("df3a78cf2a9ed5a7ee23acf3"),
                "song_name": "Melatonin - Remastered",
                "duration": 128
            },
            {
                "song_id": ObjectId("99d76f32189e4a74273f20b7"),
                "song_name": "A Reminder - Remastered",
                "duration": 232
            },
            {
                "song_id": ObjectId("ee021af82a5f71e39a5bbbea"),
                "song_name": "Polyethylene (Parts 1 & 2) - Remastered",
                "duration": 262
            }
        ]
    },
    {
        "_id": ObjectId("13777b8a9ee953ca0cf987d8"),
        "title": "A Moon Shaped Pool",
        "release_year": 2016,
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "total_songs": 11,
        "album_duration": 3151,
        "tracklist": [
            {
                "song_id": ObjectId("d35eb2018c5a6c185c85a7f8"),
                "song_name": "Burn the Witch",
                "duration": 220
            },
            {
                "song_id": ObjectId("9d840c6e7261b24b9fd1f580"),
                "song_name": "Daydreaming",
                "duration": 384
            },
            {
                "song_id": ObjectId("7f2c77ac68e225aec91affaa"),
                "song_name": "Decks Dark",
                "duration": 281
            },
            {
                "song_id": ObjectId("668d6952f4bad500f69706d4"),
                "song_name": "Desert Island Disk",
                "duration": 224
            },
            {
                "song_id": ObjectId("d66a3b077e3687d016cd25cc"),
                "song_name": "Ful Stop",
                "duration": 367
            },
            {
                "song_id": ObjectId("da08d412202dd006374a2294"),
                "song_name": "Glass Eyes",
                "duration": 172
            },
            {
                "song_id": ObjectId("e46280370683c4ea56df3140"),
                "song_name": "Identikit",
                "duration": 266
            },
            {
                "song_id": ObjectId("f66105f217c610e609f27ee9"),
                "song_name": "The Numbers",
                "duration": 345
            },
            {
                "song_id": ObjectId("aa60e9e6d4432c51bcde5ef7"),
                "song_name": "Present Tense",
                "duration": 306
            },
            {
                "song_id": ObjectId("72cb12eceab7ee6f6ab116ed"),
                "song_name": "Tinker Tailor Soldier Sailor Rich Man Poor Man Beggar Man Thief",
                "duration": 303
            },
            {
                "song_id": ObjectId("8924fb95325ac567fbd81297"),
                "song_name": "True Love Waits",
                "duration": 283
            }
        ]
    },
    {
        "_id": ObjectId("8b27c917fde450828a15ebf9"),
        "title": "TKOL RMX 1234567",
        "release_year": 2011,
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "total_songs": 19,
        "album_duration": 6345,
        "tracklist": [
            {
                "song_id": ObjectId("0e1a4e1e2db6f40309b9dfb2"),
                "song_name": "Little By Little - Caribou Rmx",
                "duration": 340
            },
            {
                "song_id": ObjectId("4a42072ceb59881537cb4261"),
                "song_name": "Lotus Flower - Jacques Greene Rmx",
                "duration": 429
            },
            {
                "song_id": ObjectId("e966ad96181dbcb1797f78f1"),
                "song_name": "Morning Mr Magpie - Nathan Fake Rmx",
                "duration": 291
            },
            {
                "song_id": ObjectId("b4e7a1886e5727c3139c8eb0"),
                "song_name": "Bloom - Harmonic 313 Rmx",
                "duration": 304
            },
            {
                "song_id": ObjectId("d1ae5fd29b8c2f10e0c78320"),
                "song_name": "Bloom - Mark Pritchard Rmx",
                "duration": 367
            },
            {
                "song_id": ObjectId("8a050c8b5993fafb39520a21"),
                "song_name": "Feral - Lone RMX",
                "duration": 317
            },
            {
                "song_id": ObjectId("9ee8a037cacaf884a925b899"),
                "song_name": "Morning Mr Magpie - Pearson Sound Scavenger RMX",
                "duration": 278
            },
            {
                "song_id": ObjectId("a0df57a1a59e32fb3f177910"),
                "song_name": "Separator - Four Tet RMX",
                "duration": 423
            },
            {
                "song_id": ObjectId("d48a3a0f9325a7cc6b8c84e5"),
                "song_name": "Give Up The Ghost - Thriller Houseghost Remix",
                "duration": 373
            },
            {
                "song_id": ObjectId("9785157ac95d6f7f01f92b89"),
                "song_name": "Codex (Illum Sphere)",
                "duration": 274
            },
            {
                "song_id": ObjectId("d932617b3c1e0b7558920b37"),
                "song_name": "Little By Little (Shed)",
                "duration": 289
            },
            {
                "song_id": ObjectId("0673e3404012b70ae52477ea"),
                "song_name": "Give Up The Ghost - Brokenchord Rmx",
                "duration": 305
            },
            {
                "song_id": ObjectId("7568d39982a7741302f16e7a"),
                "song_name": "TKOL - Altrice Rmx",
                "duration": 362
            },
            {
                "song_id": ObjectId("32bee5e860a43dfa0e8baeb7"),
                "song_name": "Bloom - Blawan Rmx",
                "duration": 449
            },
            {
                "song_id": ObjectId("bcf7f870c1c0bd5e09653ad8"),
                "song_name": "Good Evening Mrs Magpie - Modeselektor RMX",
                "duration": 464
            },
            {
                "song_id": ObjectId("f4c63fece8760b8fcc753f31"),
                "song_name": "Bloom - Objekt RMX",
                "duration": 321
            },
            {
                "song_id": ObjectId("736e8b757453f6a6dc076224"),
                "song_name": "Bloom - Jamie xx Rework",
                "duration": 148
            },
            {
                "song_id": ObjectId("3d689a4e43b5560418565145"),
                "song_name": "Separator - Anstam RMX",
                "duration": 290
            },
            {
                "song_id": ObjectId("e4a4440ea0037e4dfbd6476c"),
                "song_name": "Lotus Flower - SBTRKT RMX",
                "duration": 321
            }
        ]
    },
    {
        "_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "title": "Dua Lipa - Live From Mexico",
        "release_year": 2026,
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "total_songs": 20,
        "album_duration": 5596,
        "tracklist": [
            {
                "song_id": ObjectId("b9adcea8874c8d366f9e40f4"),
                "song_name": "Training Season (Live From Mexico)",
                "duration": 213
            },
            {
                "song_id": ObjectId("bba0ee76947ec4c11eda633c"),
                "song_name": "End Of An Era (Live From Mexico)",
                "duration": 205
            },
            {
                "song_id": ObjectId("69a81e45af011da4f203c805"),
                "song_name": "Break My Heart (Live From Mexico)",
                "duration": 253
            },
            {
                "song_id": ObjectId("20a3f31b0d2149c7e1128a63"),
                "song_name": "One Medley (Mexican Live Edit)",
                "duration": 380
            },
            {
                "song_id": ObjectId("f1bf2e6d9229d1d6d3138ad9"),
                "song_name": "Whatcha Doing (Live From Mexico)",
                "duration": 274
            },
            {
                "song_id": ObjectId("85eb49396b23ca7d6793eb7e"),
                "song_name": "Levitating (Live From Mexico)",
                "duration": 257
            },
            {
                "song_id": ObjectId("0a6a6f829ddee4b67a8cac30"),
                "song_name": "These Walls (Live From Mexico)",
                "duration": 267
            },
            {
                "song_id": ObjectId("e8f26f1246ab48d762a676b5"),
                "song_name": "Oye Mi Amor (feat. Fher de Maná) [Live From Mexico]",
                "duration": 303
            },
            {
                "song_id": ObjectId("043c49b5c82df6ab15cd4bee"),
                "song_name": "Maria (Live From Mexico)",
                "duration": 218
            },
            {
                "song_id": ObjectId("6ba9a103d8fd89d1f2ed111c"),
                "song_name": "Physical (Live From Mexico)",
                "duration": 322
            },
            {
                "song_id": ObjectId("34b62c8291f5e2153b228399"),
                "song_name": "Electricity (Live From Mexico)",
                "duration": 250
            },
            {
                "song_id": ObjectId("fcd5f55fbb263667c3b2b76c"),
                "song_name": "Hallucinate (Live From Mexico)",
                "duration": 180
            },
            {
                "song_id": ObjectId("d69fce056f9518155595e25f"),
                "song_name": "Illusion (Live From Mexico)",
                "duration": 255
            },
            {
                "song_id": ObjectId("24e46101746153ac7f19bfe0"),
                "song_name": "Falling Forever (Live From Mexico)",
                "duration": 260
            },
            {
                "song_id": ObjectId("9711968dc009a1b1fd36021d"),
                "song_name": "Happy For You (Live From Mexico)",
                "duration": 308
            },
            {
                "song_id": ObjectId("78f03041fd9ec039f9213159"),
                "song_name": "Love Again (Live From Mexico)",
                "duration": 394
            },
            {
                "song_id": ObjectId("040f1e0d6c350a06a75688d0"),
                "song_name": "Anything For Love (Live From Mexico)",
                "duration": 215
            },
            {
                "song_id": ObjectId("f705980f1a69fc5585bbc126"),
                "song_name": "Be The One (Live From Mexico)",
                "duration": 515
            },
            {
                "song_id": ObjectId("5e8241ae2e4b4e077f5c74a3"),
                "song_name": "New Rules / Dance The Night Interlude (Live From Mexico)",
                "duration": 291
            },
            {
                "song_id": ObjectId("5efb7e13be3a5fb3368f603f"),
                "song_name": "Don’t Start Now (Live From Mexico)",
                "duration": 236
            }
        ]
    },
    {
        "_id": ObjectId("ebb7703e3d407e514e23f759"),
        "title": "Radical Optimism Tour - México",
        "release_year": 2025,
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "total_songs": 20,
        "album_duration": 4067,
        "tracklist": [
            {
                "song_id": ObjectId("9f1b19eee0cc7ce1d481be86"),
                "song_name": "Houdini",
                "duration": 185
            },
            {
                "song_id": ObjectId("cbb8a9ef85cf9d38050c8e75"),
                "song_name": "Training Season",
                "duration": 209
            },
            {
                "song_id": ObjectId("d9e0d98dc4cc4b0278838ea4"),
                "song_name": "Dance The Night - From Barbie The Album",
                "duration": 176
            },
            {
                "song_id": ObjectId("ccbe164aebf72e70c60b66ba"),
                "song_name": "Don’t Start Now",
                "duration": 183
            },
            {
                "song_id": ObjectId("86d24bf3b5b6a4db0d03d213"),
                "song_name": "Levitating",
                "duration": 203
            },
            {
                "song_id": ObjectId("c812ae9da2b4e5998f546eea"),
                "song_name": "New Rules",
                "duration": 209
            },
            {
                "song_id": ObjectId("03e4e6ffedea2daf4791de88"),
                "song_name": "These Walls",
                "duration": 217
            },
            {
                "song_id": ObjectId("2f63f01a879a79cd6639ef64"),
                "song_name": "Break My Heart",
                "duration": 221
            },
            {
                "song_id": ObjectId("926a4d656f711f5d77de4d4a"),
                "song_name": "Falling Forever",
                "duration": 223
            },
            {
                "song_id": ObjectId("8f290a7540699c7b5e59b756"),
                "song_name": "Physical",
                "duration": 193
            },
            {
                "song_id": ObjectId("849942067eee93c04fdb2026"),
                "song_name": "Love Again",
                "duration": 258
            },
            {
                "song_id": ObjectId("d48975c4ce5aa866cf2decef"),
                "song_name": "Illusion",
                "duration": 188
            },
            {
                "song_id": ObjectId("155dce2b100a732c93a39187"),
                "song_name": "Be the One",
                "duration": 202
            },
            {
                "song_id": ObjectId("ebdb77d76fd0644f6632b082"),
                "song_name": "Hotter than Hell",
                "duration": 187
            },
            {
                "song_id": ObjectId("3107bc2e8bd28309c6d144d1"),
                "song_name": "We’re Good",
                "duration": 165
            },
            {
                "song_id": ObjectId("ee42909213d98517c05c8b8d"),
                "song_name": "Hallucinate",
                "duration": 208
            },
            {
                "song_id": ObjectId("945c1cad3cdec0eaa5793183"),
                "song_name": "End of an Era",
                "duration": 196
            },
            {
                "song_id": ObjectId("66b444d1efc26aac45c93b1f"),
                "song_name": "Happy For You",
                "duration": 245
            },
            {
                "song_id": ObjectId("b91deee3718612607cbe2921"),
                "song_name": "Whatcha Doing",
                "duration": 198
            },
            {
                "song_id": ObjectId("e7091cdb331b9121700406ae"),
                "song_name": "French Exit",
                "duration": 201
            }
        ]
    },
    {
        "_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "title": "Dua Lipa - Live from the Royal Albert Hall",
        "release_year": 2024,
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "total_songs": 20,
        "album_duration": 4870,
        "tracklist": [
            {
                "song_id": ObjectId("702098de2287dd23b0f704b6"),
                "song_name": "Overture (Live from the Royal Albert Hall)",
                "duration": 106
            },
            {
                "song_id": ObjectId("c761826d1bedd777cb766227"),
                "song_name": "End Of An Era (Live from the Royal Albert Hall)",
                "duration": 239
            },
            {
                "song_id": ObjectId("90f70529634d5c99e3a162a5"),
                "song_name": "Houdini (Live from the Royal Albert Hall)",
                "duration": 216
            },
            {
                "song_id": ObjectId("615938871293eea24354b193"),
                "song_name": "Training Season (Live from the Royal Albert Hall)",
                "duration": 220
            },
            {
                "song_id": ObjectId("79f16c19d737d71d63337a60"),
                "song_name": "These Walls (Live from the Royal Albert Hall)",
                "duration": 230
            },
            {
                "song_id": ObjectId("c7526384c8bea9e0914e04eb"),
                "song_name": "Whatcha Doing (Live from the Royal Albert Hall)",
                "duration": 238
            },
            {
                "song_id": ObjectId("b8fbf196536e5c16ce3d5f97"),
                "song_name": "French Exit (Live from the Royal Albert Hall)",
                "duration": 225
            },
            {
                "song_id": ObjectId("774f090aee5cf8290654a8f2"),
                "song_name": "Illusion (Live from the Royal Albert Hall)",
                "duration": 237
            },
            {
                "song_id": ObjectId("231ebe41d5c4eba19d38e9de"),
                "song_name": "Falling Forever (Live from the Royal Albert Hall)",
                "duration": 240
            },
            {
                "song_id": ObjectId("7701fde8d18687c0bb3d552a"),
                "song_name": "Anything For Love (Live from the Royal Albert Hall)",
                "duration": 189
            },
            {
                "song_id": ObjectId("5e41260da94974c9a8f3f5ff"),
                "song_name": "Maria (Live from the Royal Albert Hall)",
                "duration": 225
            },
            {
                "song_id": ObjectId("b106c32470589f171fe4d28e"),
                "song_name": "Happy For You (Live from the Royal Albert Hall)",
                "duration": 263
            },
            {
                "song_id": ObjectId("15cf4e04dbe3ec8cc5f7260f"),
                "song_name": "Love Again (Live from the Royal Albert Hall)",
                "duration": 362
            },
            {
                "song_id": ObjectId("c727ba50244a847892bdb94a"),
                "song_name": "Pretty Please (Live from the Royal Albert Hall)",
                "duration": 205
            },
            {
                "song_id": ObjectId("8dfae91c442751bf20fbe3f6"),
                "song_name": "Levitating (Live from the Royal Albert Hall)",
                "duration": 264
            },
            {
                "song_id": ObjectId("b1ead9e707682d73143fd517"),
                "song_name": "Sunshine (Live from the Royal Albert Hall)",
                "duration": 282
            },
            {
                "song_id": ObjectId("d6977c3e575010eef6feaf9f"),
                "song_name": "Cold Heart (Live from the Royal Albert Hall)",
                "duration": 328
            },
            {
                "song_id": ObjectId("ee4370868a1262c1279be8a7"),
                "song_name": "Be The One (Live from the Royal Albert Hall)",
                "duration": 289
            },
            {
                "song_id": ObjectId("15b99aa9c5d5edf30c64f24e"),
                "song_name": "Dance The Night (Live from the Royal Albert Hall)",
                "duration": 247
            },
            {
                "song_id": ObjectId("9965081a8c619a0da665f037"),
                "song_name": "Don’t Start Now (Live from the Royal Albert Hall)",
                "duration": 265
            }
        ]
    },
    {
        "_id": ObjectId("e9d76c6d50f8a2d73b4c81c4"),
        "title": "Radical Optimism (Extended Versions)",
        "release_year": 2024,
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "total_songs": 11,
        "album_duration": 3423,
        "tracklist": [
            {
                "song_id": ObjectId("cf9a19f3e0778ca483b7b805"),
                "song_name": "End Of An Era - Extended",
                "duration": 276
            },
            {
                "song_id": ObjectId("f5a690aada6b176fb6ddee08"),
                "song_name": "Houdini - Extended",
                "duration": 353
            },
            {
                "song_id": ObjectId("4d0a5c29be6f4e55f3a27527"),
                "song_name": "Training Season - Extended",
                "duration": 295
            },
            {
                "song_id": ObjectId("c36ffb0317124d0878f9659b"),
                "song_name": "These Walls - Extended",
                "duration": 340
            },
            {
                "song_id": ObjectId("6e7eb40cc8978de9189bc26a"),
                "song_name": "Whatcha Doing - Extended",
                "duration": 307
            },
            {
                "song_id": ObjectId("a3bfd095644fb63e830ee39a"),
                "song_name": "French Exit - Extended",
                "duration": 317
            },
            {
                "song_id": ObjectId("c01e94e21d5c8c7bdfcafde5"),
                "song_name": "Illusion - Extended",
                "duration": 263
            },
            {
                "song_id": ObjectId("bebfa8dcfd143cd7663555d5"),
                "song_name": "Falling Forever - Extended",
                "duration": 371
            },
            {
                "song_id": ObjectId("8e1e625d1cd4c4115d6c6d46"),
                "song_name": "Anything For Love - Extended",
                "duration": 240
            },
            {
                "song_id": ObjectId("1092f5de20f2cc8d91aca6c2"),
                "song_name": "Maria - Extended",
                "duration": 305
            },
            {
                "song_id": ObjectId("95a81d118c666f23e83cca54"),
                "song_name": "Happy For You - Extended",
                "duration": 356
            }
        ]
    },
    {
        "_id": ObjectId("178ae176357dcbf46a7ff078"),
        "title": "Radical Optimism",
        "release_year": 2024,
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "total_songs": 11,
        "album_duration": 2190,
        "tracklist": [
            {
                "song_id": ObjectId("365dfd95f3fd597b71ea9794"),
                "song_name": "End Of An Era",
                "duration": 196
            },
            {
                "song_id": ObjectId("63689d56ca736d5d0c72a254"),
                "song_name": "Houdini",
                "duration": 185
            },
            {
                "song_id": ObjectId("5cc7fb42c14929a10b4056fd"),
                "song_name": "Training Season",
                "duration": 209
            },
            {
                "song_id": ObjectId("c11a3b68786b70169fa31106"),
                "song_name": "These Walls",
                "duration": 217
            },
            {
                "song_id": ObjectId("2921f70e9bb70d58e74cc90e"),
                "song_name": "Whatcha Doing",
                "duration": 198
            },
            {
                "song_id": ObjectId("286ef642998e51698e9e2808"),
                "song_name": "French Exit",
                "duration": 201
            },
            {
                "song_id": ObjectId("1c8908b4e14557ee4b6e4873"),
                "song_name": "Illusion",
                "duration": 188
            },
            {
                "song_id": ObjectId("5958432be0c7c6e73fad2e72"),
                "song_name": "Falling Forever",
                "duration": 223
            },
            {
                "song_id": ObjectId("d2ae25ed42799944e34a7804"),
                "song_name": "Anything For Love",
                "duration": 141
            },
            {
                "song_id": ObjectId("217210e3cfb366cc8a46a52e"),
                "song_name": "Maria",
                "duration": 187
            },
            {
                "song_id": ObjectId("5e75634fbd40176f6bc44316"),
                "song_name": "Happy For You",
                "duration": 245
            }
        ]
    },
    {
        "_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "title": "The Complete BBC Sessions (Remastered)",
        "release_year": 2016,
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "total_songs": 20,
        "album_duration": 7345,
        "tracklist": [
            {
                "song_id": ObjectId("5fcf42f5e38f3edc142ac8c2"),
                "song_name": "You Shook Me - 23/3/69 Top Gear; Remaster",
                "duration": 314
            },
            {
                "song_id": ObjectId("2eb4ac0d7c07d2e22d6c31bd"),
                "song_name": "I Can't Quit You Baby - 23/3/69 Top Gear;Remaster",
                "duration": 263
            },
            {
                "song_id": ObjectId("a451b8366b696e7e8031518c"),
                "song_name": "Communication Breakdown - Live on Tasty Pop Sundae from BBC Sessions;Remaster",
                "duration": 191
            },
            {
                "song_id": ObjectId("93136066a4d38d4628764896"),
                "song_name": "Dazed and Confused - 3/23/69 Top Gear;Remaster",
                "duration": 399
            },
            {
                "song_id": ObjectId("0abbecbcdc0ac7e1cfa7372e"),
                "song_name": "The Girl I Love She Got Long Black Wavy Hair - Live on Tasty Pop Sundae from BBC Sessions;Remaster",
                "duration": 183
            },
            {
                "song_id": ObjectId("e4d1c5e0b0098cb59c03fae0"),
                "song_name": "What Is and What Should Never Be - 29/6/69 Top Gear;Remaster",
                "duration": 260
            },
            {
                "song_id": ObjectId("9ae59fe89206d72879bdf207"),
                "song_name": "Communication Breakdown - 29/6/69 Top Gear;Remaster",
                "duration": 160
            },
            {
                "song_id": ObjectId("8c73804136e7665c73d78b3b"),
                "song_name": "Travelling Riverside Blues - 29/6/69 Top Gear;Remaster",
                "duration": 310
            },
            {
                "song_id": ObjectId("fd550c87333db305128654e0"),
                "song_name": "Whole Lotta Love - 29/6/69 Top Gear;Remaster",
                "duration": 370
            },
            {
                "song_id": ObjectId("c2d2d65f2047291aad224177"),
                "song_name": "Somethin' Else - Live on Tasty Pop Sundae from BBC Sessions;Remaster",
                "duration": 126
            },
            {
                "song_id": ObjectId("f89cd3c4e0dc35afb6c47f14"),
                "song_name": "Communication Breakdown - 10/8/69 Playhouse Theatre;Remaster",
                "duration": 184
            },
            {
                "song_id": ObjectId("13d751084a6af71a09b872b3"),
                "song_name": "I Can't Quit You Baby - 10/8/69 Playhouse Theatre;Remaster",
                "duration": 380
            },
            {
                "song_id": ObjectId("fb448b5b5d7de0aaf3d5b12f"),
                "song_name": "You Shook Me - 10/8/69 Playhouse Theatre;Remaster",
                "duration": 613
            },
            {
                "song_id": ObjectId("a93fe2a8162d37629adb21fc"),
                "song_name": "How Many More Times - 10/8/69 Playhouse Theatre;Remaster",
                "duration": 698
            },
            {
                "song_id": ObjectId("4ee54c78e5335c060e5a0852"),
                "song_name": "Immigrant Song - 1/4/71 Paris Theatre;Remaster",
                "duration": 201
            },
            {
                "song_id": ObjectId("ee54f0a28b4e7094b925ddb9"),
                "song_name": "Heartbreaker - 1/4/71 Paris Theatre;Remaster",
                "duration": 315
            },
            {
                "song_id": ObjectId("f2b03d573c0c22bc7ec8ba08"),
                "song_name": "Since I've Been Loving You - 1/4/71 Paris Theatre;Remaster",
                "duration": 416
            },
            {
                "song_id": ObjectId("053dafd7a551dba1e529b916"),
                "song_name": "Black Dog - 1/4/71 Paris Theatre;Remaster",
                "duration": 317
            },
            {
                "song_id": ObjectId("efabd2165b36f99d5d66fd0d"),
                "song_name": "Dazed and Confused - 1/4/71 Paris Theatre;Remaster",
                "duration": 1116
            },
            {
                "song_id": ObjectId("27f62fda6826d7aff7e0e724"),
                "song_name": "Stairway to Heaven - Live: 1/4/71 Paris Theatre;Remaster",
                "duration": 529
            }
        ]
    },
    {
        "_id": ObjectId("26777cf22646e7709f21fbc2"),
        "title": "Celebration Day",
        "release_year": 2012,
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "total_songs": 16,
        "album_duration": 6926,
        "tracklist": [
            {
                "song_id": ObjectId("ec8b86335a8de77663f62c12"),
                "song_name": "Good Times Bad Times - Live: O2 Arena, London - December 10, 2007",
                "duration": 191
            },
            {
                "song_id": ObjectId("2b0e8db158b8909d83961ac3"),
                "song_name": "Ramble On - Live: O2 Arena, London - December 10, 2007",
                "duration": 344
            },
            {
                "song_id": ObjectId("cf3b416eabc2175873612fef"),
                "song_name": "Black Dog - Live: O2 Arena, London - December 10, 2007",
                "duration": 353
            },
            {
                "song_id": ObjectId("81346db21bd4543447c15f15"),
                "song_name": "In My Time of Dying - Live: O2 Arena, London - December 10, 2007",
                "duration": 670
            },
            {
                "song_id": ObjectId("dc6b2e064595fad1d4b8d680"),
                "song_name": "For Your Life - Live: O2 Arena, London - December 10, 2007",
                "duration": 400
            },
            {
                "song_id": ObjectId("fe83ce6e7e8a837cd307bf56"),
                "song_name": "Trampled Under Foot - Live: O2 Arena, London - December 10, 2007",
                "duration": 379
            },
            {
                "song_id": ObjectId("75a46e8824629055ff7bc62a"),
                "song_name": "Nobody's Fault but Mine - Live: O2 Arena, London - December 10, 2007",
                "duration": 403
            },
            {
                "song_id": ObjectId("46d6db26a8e634d4f64fbff3"),
                "song_name": "No Quarter - Live: O2 Arena, London - December 10, 2007",
                "duration": 561
            },
            {
                "song_id": ObjectId("cac6e1ec3d1813f4f5a3ca84"),
                "song_name": "Since I've Been Loving You - Live: O2 Arena, London - December 10, 2007",
                "duration": 472
            },
            {
                "song_id": ObjectId("742274e06be23f764adb305b"),
                "song_name": "Dazed and Confused - Live: O2 Arena, London - December 10, 2007",
                "duration": 704
            },
            {
                "song_id": ObjectId("6edae7a7abd3201383e965e5"),
                "song_name": "Stairway to Heaven - Live: O2 Arena, London - December 10, 2007",
                "duration": 529
            },
            {
                "song_id": ObjectId("d4136d0ea35dbe38efc96edc"),
                "song_name": "The Song Remains the Same - Live: O2 Arena, London - December 10, 2007",
                "duration": 346
            },
            {
                "song_id": ObjectId("71c0a3c60086889ca833c8f1"),
                "song_name": "Misty Mountain Hop - Live: O2 Arena, London - December 10, 2007",
                "duration": 308
            },
            {
                "song_id": ObjectId("ac9381b0e48a9ca7491aea5b"),
                "song_name": "Kashmir - Live: O2 Arena, London - December 10, 2007",
                "duration": 546
            },
            {
                "song_id": ObjectId("21cb61d08036443ee1aca7b4"),
                "song_name": "Whole Lotta Love - Live: O2 Arena, London - December 10, 2007",
                "duration": 446
            },
            {
                "song_id": ObjectId("885424abddcdaac23049e9d1"),
                "song_name": "Rock and Roll - Live: O2 Arena, London - December 10, 2007",
                "duration": 274
            }
        ]
    },
    {
        "_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "title": "How the West Was Won (Remaster)",
        "release_year": 2003,
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "total_songs": 18,
        "album_duration": 8883,
        "tracklist": [
            {
                "song_id": ObjectId("fdb3ea46d769140b255aaf15"),
                "song_name": "LA Drone - Live 1972; Remaster",
                "duration": 14
            },
            {
                "song_id": ObjectId("b3319dbe330204b7cac29fa2"),
                "song_name": "Immigrant Song - Live 1972; Remaster",
                "duration": 221
            },
            {
                "song_id": ObjectId("02dbe693a5250ff33a0fd84e"),
                "song_name": "Heartbreaker - Live 1972; Remaster",
                "duration": 443
            },
            {
                "song_id": ObjectId("eb90f6784ffe4462c39d2313"),
                "song_name": "Black Dog - Live 1972; Remaster",
                "duration": 340
            },
            {
                "song_id": ObjectId("311aab2ed747c85464f9b24a"),
                "song_name": "Over the Hills and Far Away - Live 1972; Remaster",
                "duration": 307
            },
            {
                "song_id": ObjectId("a19f92eab3d2efc1c121a02a"),
                "song_name": "Since I've Been Loving You - Live 1972; Remaster",
                "duration": 481
            },
            {
                "song_id": ObjectId("8cbd4960b562bfbd23a808b8"),
                "song_name": "Stairway to Heaven - Live 1972; Remaster",
                "duration": 577
            },
            {
                "song_id": ObjectId("fe0d89639a7c22817b520954"),
                "song_name": "Going to California - Live 1972; Remaster",
                "duration": 337
            },
            {
                "song_id": ObjectId("0126d23d1b62a021cb2a6960"),
                "song_name": "That's The Way - Live 1972; Remaster",
                "duration": 353
            },
            {
                "song_id": ObjectId("9849645e9dba4489cf2c7656"),
                "song_name": "Bron-Y-Aur Stomp - Live 1972; Remaster",
                "duration": 293
            },
            {
                "song_id": ObjectId("b37507014e2f036df4472747"),
                "song_name": "Dazed and Confused - Live 1972; Remaster",
                "duration": 1525
            },
            {
                "song_id": ObjectId("276b671cc0dcb16596b5e5b8"),
                "song_name": "What Is and What Should Never Be (Live) - Live 1972; Remaster",
                "duration": 280
            },
            {
                "song_id": ObjectId("b47a06000acc11cb92dfa5d6"),
                "song_name": "Dancing Days - Live 1972; Remaster",
                "duration": 221
            },
            {
                "song_id": ObjectId("89df599398b9b3b3ac3cd9bf"),
                "song_name": "Moby Dick - Live 1972; Remaster",
                "duration": 1164
            },
            {
                "song_id": ObjectId("45a7c227f65cfaabf7647f12"),
                "song_name": "Whole Lotta Love - Live 1972; Remaster",
                "duration": 1261
            },
            {
                "song_id": ObjectId("550a7096ebc56f981ef2307f"),
                "song_name": "Rock and Roll - Live 1972; Remaster",
                "duration": 235
            },
            {
                "song_id": ObjectId("f4a47b5369a6f181a6c32cb4"),
                "song_name": "The Ocean - Live 1972; Remaster",
                "duration": 260
            },
            {
                "song_id": ObjectId("4a5f4a5bfe5517b804f588f1"),
                "song_name": "Bring It on Home / Bring It on Back - Live 1972; Remaster",
                "duration": 571
            }
        ]
    },
    {
        "_id": ObjectId("7d0ec068f8bf80084b4d2f90"),
        "title": "Coda (Remaster)",
        "release_year": 1982,
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "total_songs": 8,
        "album_duration": 1982,
        "tracklist": [
            {
                "song_id": ObjectId("e33503e069d8dce1b8d9a9d5"),
                "song_name": "We're Gonna Groove - Remaster",
                "duration": 158
            },
            {
                "song_id": ObjectId("309c14d14af06a4ead40a634"),
                "song_name": "Poor Tom - Remaster",
                "duration": 182
            },
            {
                "song_id": ObjectId("0e0cfd702f666726e80eaa2b"),
                "song_name": "I Can't Quit You Baby - Remaster",
                "duration": 258
            },
            {
                "song_id": ObjectId("478b3215b0a4690f08e4986e"),
                "song_name": "Walter's Walk - Remaster",
                "duration": 271
            },
            {
                "song_id": ObjectId("54c67bee88007714851faaf3"),
                "song_name": "Ozone Baby - Remaster",
                "duration": 216
            },
            {
                "song_id": ObjectId("f97618418c67efadb1496965"),
                "song_name": "Darlene - Remaster",
                "duration": 306
            },
            {
                "song_id": ObjectId("c2f6f0de1ec52b0694ffe2c5"),
                "song_name": "Bonzo's Montreux - Remaster",
                "duration": 262
            },
            {
                "song_id": ObjectId("324a94c600d007619ee54760"),
                "song_name": "Wearing and Tearing - Remaster",
                "duration": 329
            }
        ]
    },
    {
        "_id": ObjectId("792587b8cd40b7a51b926831"),
        "title": "Coda (Deluxe Edition)",
        "release_year": 1982,
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "total_songs": 20,
        "album_duration": 4960,
        "tracklist": [
            {
                "song_id": ObjectId("264550ab32801816df706327"),
                "song_name": "We're Gonna Groove - Remaster",
                "duration": 158
            },
            {
                "song_id": ObjectId("27af3a62e241370682ec5dc8"),
                "song_name": "Poor Tom - Remaster",
                "duration": 182
            },
            {
                "song_id": ObjectId("e64d273a06e678f1450e52f1"),
                "song_name": "I Can't Quit You Baby - Remaster",
                "duration": 258
            },
            {
                "song_id": ObjectId("32e1ed01ea4eb93cef823bb2"),
                "song_name": "Walter's Walk - Remaster",
                "duration": 271
            },
            {
                "song_id": ObjectId("0bc442846389a4fcf7b84715"),
                "song_name": "Ozone Baby - Remaster",
                "duration": 216
            },
            {
                "song_id": ObjectId("ec068dd01345f7904f3f8308"),
                "song_name": "Darlene - Remaster",
                "duration": 306
            },
            {
                "song_id": ObjectId("0baaa1e066b732465107fabe"),
                "song_name": "Bonzo's Montreux - Remaster",
                "duration": 262
            },
            {
                "song_id": ObjectId("6cb11ade6ed2fcff8cc83dad"),
                "song_name": "Wearing and Tearing - Remaster",
                "duration": 329
            },
            {
                "song_id": ObjectId("2bec7bc6f937319bdf5f290d"),
                "song_name": "We're Gonna Groove - Alternate Mix",
                "duration": 160
            },
            {
                "song_id": ObjectId("ca473770af2c2d944c25071e"),
                "song_name": "If It Keeps on Raining - Rough Mix",
                "duration": 254
            },
            {
                "song_id": ObjectId("fc15e09d40ff7f30893689ca"),
                "song_name": "Bonzo's Montreux - Mix Construction in Progress",
                "duration": 299
            },
            {
                "song_id": ObjectId("80aae0c9aba52d8ed22e9acf"),
                "song_name": "Baby Come on Home - Remastered",
                "duration": 269
            },
            {
                "song_id": ObjectId("f8fe3d155ba35cddadb1f8de"),
                "song_name": "Sugar Mama - Mix",
                "duration": 170
            },
            {
                "song_id": ObjectId("35e84e3e7429dc5cc296b72a"),
                "song_name": "Poor Tom - Instrumental Mix",
                "duration": 137
            },
            {
                "song_id": ObjectId("8da69819c162600e5c127710"),
                "song_name": "Travelling Riverside Blues (BBC Session) - Remastered",
                "duration": 311
            },
            {
                "song_id": ObjectId("60bd7b8dd24175578bce0cf0"),
                "song_name": "Hey, Hey, What Can I Do - Remaster",
                "duration": 236
            },
            {
                "song_id": ObjectId("c15e284e9351498fa710b799"),
                "song_name": "Four Hands (Four Sticks) [Bombay Orchestra]",
                "duration": 285
            },
            {
                "song_id": ObjectId("e3866c820fe1586611e80c7e"),
                "song_name": "Friends (Bombay Orchestra)",
                "duration": 267
            },
            {
                "song_id": ObjectId("70a10f967d8a02e342a4cbc5"),
                "song_name": "St. Tristan's Sword - Rough Mix",
                "duration": 341
            },
            {
                "song_id": ObjectId("4859955fcbf87ab11c9830bb"),
                "song_name": "Desire (The Wanton Song) - Rough Mix",
                "duration": 249
            }
        ]
    },
    {
        "_id": ObjectId("dfc243f396bc5f28089a41af"),
        "title": "GUTS (spilled)",
        "release_year": 2024,
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
        "_id": ObjectId("d689d32264ce1fad2cd19593"),
        "title": "Jeff Buckley: It's Never Over - Songs From the Film",
        "release_year": 2025,
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "total_songs": 20,
        "album_duration": 6034,
        "tracklist": [
            {
                "song_id": ObjectId("2ce98364ffb8333158f0116a"),
                "song_name": "Lover, You Should've Come Over",
                "duration": 404
            },
            {
                "song_id": ObjectId("883feacc6b427be3c6ac2c04"),
                "song_name": "Hallelujah",
                "duration": 413
            },
            {
                "song_id": ObjectId("e50e44fb41c330cc0decafe4"),
                "song_name": "Just Like a Woman",
                "duration": 388
            },
            {
                "song_id": ObjectId("8f8423401902c9c8d7b463f3"),
                "song_name": "Everybody Here Wants You",
                "duration": 286
            },
            {
                "song_id": ObjectId("a6dd593235c5eb7aa8f4003d"),
                "song_name": "Corpus Christi Carol",
                "duration": 176
            },
            {
                "song_id": ObjectId("21dd5eb3b8f543e27f7f1c3b"),
                "song_name": "Last Goodbye",
                "duration": 258
            },
            {
                "song_id": ObjectId("293edd01e925ee1ef281ab71"),
                "song_name": "Mama, You Been on My Mind - Studio Outtake - 1993",
                "duration": 205
            },
            {
                "song_id": ObjectId("9f5d673c5022bd872718a5fc"),
                "song_name": "Night Flight - Live at Sin-é, New York, NY - July/August 1993",
                "duration": 400
            },
            {
                "song_id": ObjectId("69d61ef77b0e913f02f17320"),
                "song_name": "Eternal Life - Live at Cabaret Metro, Chicago, IL, May 13, 1995",
                "duration": 353
            },
            {
                "song_id": ObjectId("a8cbe70a4e7d2ef4ec4e0cf4"),
                "song_name": "Grace",
                "duration": 322
            },
            {
                "song_id": ObjectId("912babe400673d2bae947a79"),
                "song_name": "Mojo Pin",
                "duration": 342
            },
            {
                "song_id": ObjectId("8460b8fec8d07ec8b6ba140d"),
                "song_name": "Everyday People - Extended Version",
                "duration": 381
            },
            {
                "song_id": ObjectId("d9562a586f5bb0491889f29b"),
                "song_name": "Lilac Wine - Live at Palais Theatre, Melbourne, AU - Feb 1996",
                "duration": 319
            },
            {
                "song_id": ObjectId("8ab21328380b5d239b2745ae"),
                "song_name": "I Want Someone Badly",
                "duration": 155
            },
            {
                "song_id": ObjectId("fe6f437d68f725584d2919e5"),
                "song_name": "Je N'en Connais Pas La Fin - Live at Sin-é, New York, NY - July/August 1993",
                "duration": 297
            },
            {
                "song_id": ObjectId("9efd9e014fdb08a4390207c9"),
                "song_name": "Dream Brother - Alternate Take",
                "duration": 294
            },
            {
                "song_id": ObjectId("d77aaefb45868cd074478d44"),
                "song_name": "New Year's Prayer",
                "duration": 280
            },
            {
                "song_id": ObjectId("5d8e1bc1cf8cdfe4ea0576ff"),
                "song_name": "I Shall Be Released - Live at Sin-é, New York, NY - July/August 1993",
                "duration": 324
            },
            {
                "song_id": ObjectId("7e1cc9b887a89a1e2d3a35e8"),
                "song_name": "Vancouver",
                "duration": 190
            },
            {
                "song_id": ObjectId("2299faee843591a3da6ad972"),
                "song_name": "Yard Of Blonde Girls",
                "duration": 247
            }
        ]
    },
    {
        "_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "title": "Gods And Monsters (Live)",
        "release_year": 2023,
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "total_songs": 17,
        "album_duration": 5684,
        "tracklist": [
            {
                "song_id": ObjectId("f5270f51351ad6c6aa2a6431"),
                "song_name": "Cruel - Live 1992",
                "duration": 320
            },
            {
                "song_id": ObjectId("89194f28e41fcb6bf90e93a1"),
                "song_name": "No Soul - Live 1992",
                "duration": 225
            },
            {
                "song_id": ObjectId("436b8122efe0bc1e866cb9b8"),
                "song_name": "Distortion - Live 1992",
                "duration": 351
            },
            {
                "song_id": ObjectId("560449369d2fe8f78f5d8a5e"),
                "song_name": "Grace - Live 1992",
                "duration": 240
            },
            {
                "song_id": ObjectId("d982ec99d2844e05cf03a03b"),
                "song_name": "How Long Will It Take - Live 1992",
                "duration": 300
            },
            {
                "song_id": ObjectId("28368df83b10e141745169aa"),
                "song_name": "In The Cantine - Live 1992",
                "duration": 284
            },
            {
                "song_id": ObjectId("134a6919ccbb2a31d0d013e3"),
                "song_name": "Hymn L'Amour - Live 1992",
                "duration": 374
            },
            {
                "song_id": ObjectId("cc1a9256495114416068b219"),
                "song_name": "Satisfied Mind - Live 1992",
                "duration": 300
            },
            {
                "song_id": ObjectId("d2bc77c1372b19c0e3616ef9"),
                "song_name": "Harem Man - Live 1992",
                "duration": 609
            },
            {
                "song_id": ObjectId("0cb8612af7adac905c3502be"),
                "song_name": "Story Without Words - Live 1992",
                "duration": 331
            },
            {
                "song_id": ObjectId("61fcd00f968944a07b8b18ac"),
                "song_name": "Dream Of A Russian Princess - Live 1992",
                "duration": 127
            },
            {
                "song_id": ObjectId("eec0535913f7790675595b5d"),
                "song_name": "Sweet Thing - Live 1992",
                "duration": 268
            },
            {
                "song_id": ObjectId("9521ea3595cea5a66fda155d"),
                "song_name": "She Is Free - Live 1992",
                "duration": 292
            },
            {
                "song_id": ObjectId("9dbb68058f7226b5472d1c16"),
                "song_name": "Dink's Song - Live 1992",
                "duration": 318
            },
            {
                "song_id": ObjectId("29021832b766d88a6c5f7d6e"),
                "song_name": "No One Must Find You Here - Live 1992",
                "duration": 660
            },
            {
                "song_id": ObjectId("bee1bc041b1d3bb2fe047cca"),
                "song_name": "Bluebird Blues - Live 1992",
                "duration": 400
            },
            {
                "song_id": ObjectId("3a8ee3cc6025d0c5b5e62c2a"),
                "song_name": "Mojo Pin - Live 1992",
                "duration": 285
            }
        ]
    },
    {
        "_id": ObjectId("992cf5304510b5d6d0cb84a2"),
        "title": "Live at Wetlands, New York, NY 8/16/94",
        "release_year": 2019,
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "total_songs": 14,
        "album_duration": 7996,
        "tracklist": [
            {
                "song_id": ObjectId("330ab7d22bc4ea4424b2f184"),
                "song_name": "Mojo Pin - Live At Wetlands, New York, NY, August 16, 1994",
                "duration": 870
            },
            {
                "song_id": ObjectId("37dd6fe3984a79c05bd1a867"),
                "song_name": "Dream Brother - Live At Wetlands, New York, NY, August 16, 1994",
                "duration": 610
            },
            {
                "song_id": ObjectId("bdc63b5b73d0a1703a6904c3"),
                "song_name": "So Real - Live At Wetlands, New York, NY, August 16, 1994",
                "duration": 355
            },
            {
                "song_id": ObjectId("61a5ad779f5518b8518010ff"),
                "song_name": "Last Goodbye - Live At Wetlands, New York, NY, August 16, 1994",
                "duration": 401
            },
            {
                "song_id": ObjectId("9c7f5c4cad10008e31f3d59b"),
                "song_name": "Lilac Wine - Live At Wetlands, New York, NY, August 16, 1994",
                "duration": 159
            },
            {
                "song_id": ObjectId("a7935fe0906a8bf8a072c829"),
                "song_name": "Grace - Live At Wetlands, New York, NY, August 16, 1994",
                "duration": 467
            },
            {
                "song_id": ObjectId("3145e9dce1860e6523990c18"),
                "song_name": "What Will You Say - Live At Wetlands, New York, NY, August 16, 1994",
                "duration": 615
            },
            {
                "song_id": ObjectId("8387048cebd8c2601b5fab0f"),
                "song_name": "Hallelujah - Live At Wetlands, New York, NY, August 16, 1994",
                "duration": 510
            },
            {
                "song_id": ObjectId("88b09930939f6d4a85034ff0"),
                "song_name": "Je N'en Connais Pas La Fin - Live At Wetlands, New York, NY, August 16, 1994",
                "duration": 393
            },
            {
                "song_id": ObjectId("9090561ceab719b2df105f06"),
                "song_name": "Lover, You Should've Come Over - Live At Wetlands, New York, NY, August 16, 1994",
                "duration": 763
            },
            {
                "song_id": ObjectId("825d4611183b4b52ca93f9a2"),
                "song_name": "Eternal Life - Live At Wetlands, New York, NY, August 16, 1994",
                "duration": 748
            },
            {
                "song_id": ObjectId("8f950956c99b65c63fa5d1b6"),
                "song_name": "That's All I Ask - Live At Wetlands, New York, NY, August 16, 1994",
                "duration": 254
            },
            {
                "song_id": ObjectId("77b2418459991eff70a91011"),
                "song_name": "Kanga-Roo - Live At Wetlands, New York, NY, August 16, 1994",
                "duration": 1327
            },
            {
                "song_id": ObjectId("a1b1f261d38fb26f7814f9b3"),
                "song_name": "Mojo Pin - (Soundcheck) [Live At Wetlands, New York, NY, August 16, 1994]",
                "duration": 524
            }
        ]
    },
    {
        "_id": ObjectId("a7d6b4ae1a07e7aec19fee3c"),
        "title": "Live at Columbia Records Radio Hour",
        "release_year": 2019,
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "total_songs": 10,
        "album_duration": 4046,
        "tracklist": [
            {
                "song_id": ObjectId("020b2d3521e9de121b5ac719"),
                "song_name": "Dream Brother - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
                "duration": 663
            },
            {
                "song_id": ObjectId("3506797b5907e8133b7fe10c"),
                "song_name": "So Real - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
                "duration": 335
            },
            {
                "song_id": ObjectId("979393318a150bf985b1c1a9"),
                "song_name": "Mojo Pin - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
                "duration": 400
            },
            {
                "song_id": ObjectId("4c6cf9b6c31e63f3a13ebc1b"),
                "song_name": "Grace - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
                "duration": 343
            },
            {
                "song_id": ObjectId("0a2ea1bfb9fb82f0fff64762"),
                "song_name": "Lilac Wine - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
                "duration": 442
            },
            {
                "song_id": ObjectId("8a6ed8b0eb31b6c1d97246f3"),
                "song_name": "Last Goodbye - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
                "duration": 314
            },
            {
                "song_id": ObjectId("72227f0694b8a6efd5f11f19"),
                "song_name": "Eternal Life - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
                "duration": 318
            },
            {
                "song_id": ObjectId("59e9b7fe4bd738faa98c016d"),
                "song_name": "Kick Out the Jams - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
                "duration": 213
            },
            {
                "song_id": ObjectId("eb8c903a2e4b4f6d422bf0c6"),
                "song_name": "Lover, You Should've Come Over - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
                "duration": 448
            },
            {
                "song_id": ObjectId("4def7d22ee3aca0453f2759b"),
                "song_name": "I Know It's Over - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
                "duration": 570
            }
        ]
    },
    {
        "_id": ObjectId("3a2fd5a396e7b4ac9cf9ca2a"),
        "title": "You and I (Extended Edition)",
        "release_year": 2016,
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "total_songs": 10,
        "album_duration": 3898,
        "tracklist": [
            {
                "song_id": ObjectId("e2c50f33e0a4613c1314bff1"),
                "song_name": "Just Like a Woman",
                "duration": 388
            },
            {
                "song_id": ObjectId("db579714808ef8c4a098dd05"),
                "song_name": "Everyday People - Extended Version",
                "duration": 381
            },
            {
                "song_id": ObjectId("b3a11fa44f66f74cb39896d0"),
                "song_name": "Don't Let the Sun Catch You Cryin'",
                "duration": 244
            },
            {
                "song_id": ObjectId("8e1af5ef1418e4ba1141648e"),
                "song_name": "Grace - Extended Version",
                "duration": 388
            },
            {
                "song_id": ObjectId("388de5a2f157b728219fe6ac"),
                "song_name": "Calling You - Extended Version",
                "duration": 464
            },
            {
                "song_id": ObjectId("5bbc4c47d9d45ef83d101b62"),
                "song_name": "Dream of You and I - Extended Version",
                "duration": 462
            },
            {
                "song_id": ObjectId("10eb6e0fac0cb92c7656befc"),
                "song_name": "The Boy with the Thorn In His Side - Extended Version",
                "duration": 395
            },
            {
                "song_id": ObjectId("4266dfacaff97d53a30fd660"),
                "song_name": "Poor Boy Long Way from Home",
                "duration": 363
            },
            {
                "song_id": ObjectId("771f388b057c45de2af28527"),
                "song_name": "Night Flight - Extended Version",
                "duration": 391
            },
            {
                "song_id": ObjectId("5dac8071242d5ada76fff70d"),
                "song_name": "I Know It's Over",
                "duration": 422
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
        "duration": 235,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("db60fa3772e37ed5345e1bf8"),
        "name": "This Is Why (Re: Foals)",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("b5ce6c073c5c2b21dc7c0bf5"),
        "album_name": "Re: This Is Why",
        "duration": 351,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("760cea4fd2ff903d44296746"),
        "name": "The News (Re: The Linda Lindas)",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("b5ce6c073c5c2b21dc7c0bf5"),
        "album_name": "Re: This Is Why",
        "duration": 205,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0077047d63f6b3fc5778eaa3"),
        "name": "Running Out Of Time (Re: Panda Bear)",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("b5ce6c073c5c2b21dc7c0bf5"),
        "album_name": "Re: This Is Why",
        "duration": 263,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8d8b0741743232947d61f98f"),
        "name": "Running Out Of Time (Re: Zane Lowe)",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("b5ce6c073c5c2b21dc7c0bf5"),
        "album_name": "Re: This Is Why",
        "duration": 284,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e4b776b5a9fe6a978858820c"),
        "name": "C’est Comme Ça (Re: Wet Leg)",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("b5ce6c073c5c2b21dc7c0bf5"),
        "album_name": "Re: This Is Why",
        "duration": 144,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f685dba132f3d1f0647b619f"),
        "name": "Big Man, Little Dignity (Re: DOMi & JD BECK)",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("b5ce6c073c5c2b21dc7c0bf5"),
        "album_name": "Re: This Is Why",
        "duration": 179,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b91e2bd249f3a3ac48c3df0e"),
        "name": "You First (Re: Remi Wolf)",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("b5ce6c073c5c2b21dc7c0bf5"),
        "album_name": "Re: This Is Why",
        "duration": 234,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("6b25c3c6413c02eb0aaa8519"),
        "name": "Figure 8 (Re: Bartees Strange)",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("b5ce6c073c5c2b21dc7c0bf5"),
        "album_name": "Re: This Is Why",
        "duration": 215,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("74277df6f84881c8a2ef1820"),
        "name": "Liar (Re: Romy)",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("b5ce6c073c5c2b21dc7c0bf5"),
        "album_name": "Re: This Is Why",
        "duration": 276,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b9c5f2464d6900e807d9a922"),
        "name": "Crave (Re: Claud)",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("b5ce6c073c5c2b21dc7c0bf5"),
        "album_name": "Re: This Is Why",
        "duration": 210,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5fde20c1cfbbeaa103d7fdab"),
        "name": "Thick Skull (Re: Julien Baker)",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("b5ce6c073c5c2b21dc7c0bf5"),
        "album_name": "Re: This Is Why",
        "duration": 294,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("a4b4f2992d67a7985ed6f9fe"),
        "name": "Sanity (Re: Jack Antonoff)",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("b5ce6c073c5c2b21dc7c0bf5"),
        "album_name": "Re: This Is Why",
        "duration": 207,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5f76a65a386e2e7c5882227a"),
        "name": "Sanity (demo)",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("b5ce6c073c5c2b21dc7c0bf5"),
        "album_name": "Re: This Is Why",
        "duration": 210,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("84146ac187a8c5af9572c940"),
        "name": "This Is Why",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("3012dfcd0b4e754e8859de8f"),
        "album_name": "This Is Why",
        "duration": 207,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("35a073dcc1feecf479ce5392"),
        "name": "The News",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("3012dfcd0b4e754e8859de8f"),
        "album_name": "This Is Why",
        "duration": 187,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e91e427b41c5948914694870"),
        "name": "Running Out Of Time",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("3012dfcd0b4e754e8859de8f"),
        "album_name": "This Is Why",
        "duration": 192,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("826aa8998255e19c40487d80"),
        "name": "C’est Comme Ça",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("3012dfcd0b4e754e8859de8f"),
        "album_name": "This Is Why",
        "duration": 149,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("864509e9e804e3abe8940592"),
        "name": "Big Man, Little Dignity",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("3012dfcd0b4e754e8859de8f"),
        "album_name": "This Is Why",
        "duration": 260,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("3ff3970d73daf02c41a81c28"),
        "name": "You First",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("3012dfcd0b4e754e8859de8f"),
        "album_name": "This Is Why",
        "duration": 245,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c2255757e776c1d01b04b88a"),
        "name": "Figure 8",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("3012dfcd0b4e754e8859de8f"),
        "album_name": "This Is Why",
        "duration": 204,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("80d89f0d28a3e09b9157f28b"),
        "name": "Liar",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("3012dfcd0b4e754e8859de8f"),
        "album_name": "This Is Why",
        "duration": 261,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c9f154211453d2d878673dbb"),
        "name": "Crave",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("3012dfcd0b4e754e8859de8f"),
        "album_name": "This Is Why",
        "duration": 235,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d05656887ce3ca6f3a11e4ef"),
        "name": "Thick Skull",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("3012dfcd0b4e754e8859de8f"),
        "album_name": "This Is Why",
        "duration": 232,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9abe95918e89cd7a2e2913c7"),
        "name": "Hard Times",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("7e725a70e27a09ed9d8619ad"),
        "album_name": "After Laughter",
        "duration": 182,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d5a0e5cd98d2be442a51ef06"),
        "name": "Rose-Colored Boy",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("7e725a70e27a09ed9d8619ad"),
        "album_name": "After Laughter",
        "duration": 212,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("df720e018f95e3c4b161a4db"),
        "name": "Told You So",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("7e725a70e27a09ed9d8619ad"),
        "album_name": "After Laughter",
        "duration": 188,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("33a9e48fdeee0c2e76f4f14b"),
        "name": "Forgiveness",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("7e725a70e27a09ed9d8619ad"),
        "album_name": "After Laughter",
        "duration": 219,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fc2efafa63002f91253433b0"),
        "name": "Fake Happy",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("7e725a70e27a09ed9d8619ad"),
        "album_name": "After Laughter",
        "duration": 235,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("7f54d7103459d86c539daebb"),
        "name": "26",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("7e725a70e27a09ed9d8619ad"),
        "album_name": "After Laughter",
        "duration": 221,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("44d33295cb72a0ff6b1e848f"),
        "name": "Pool",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("7e725a70e27a09ed9d8619ad"),
        "album_name": "After Laughter",
        "duration": 232,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("aa8b58e793fd874e6a1b0f84"),
        "name": "Grudges",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("7e725a70e27a09ed9d8619ad"),
        "album_name": "After Laughter",
        "duration": 187,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("395fc1f6ce50c85a886cc06c"),
        "name": "Caught in the Middle",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("7e725a70e27a09ed9d8619ad"),
        "album_name": "After Laughter",
        "duration": 214,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("6e544e98da6c36fa4024c81c"),
        "name": "Idle Worship",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("7e725a70e27a09ed9d8619ad"),
        "album_name": "After Laughter",
        "duration": 198,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ba99fe9964df93e67c0ba571"),
        "name": "No Friend",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("7e725a70e27a09ed9d8619ad"),
        "album_name": "After Laughter",
        "duration": 203,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ea8c74c851b98fe0902e7b1f"),
        "name": "Tell Me How",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("7e725a70e27a09ed9d8619ad"),
        "album_name": "After Laughter",
        "duration": 260,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("69e96981b254b38cd5f91f9a"),
        "name": "Fast in My Car",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 222,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("bcb5f01c9d8a5d4225b33fab"),
        "name": "Now",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 250,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("77cfb0cf2c300f0ee70acadc"),
        "name": "Grow Up",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 230,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("78f00c256795c204e7cffc98"),
        "name": "Daydreaming",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 271,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("68126034bcf851ddf241931c"),
        "name": "Interlude: Moving On",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 90,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d6a6a372eed7cdae66455d64"),
        "name": "Ain't It Fun",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 296,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("1e6da073854e44213f661848"),
        "name": "Part II",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 281,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9972adf457c604f22a29ccfa"),
        "name": "Last Hope",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 309,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("bbe49f3bc6549a94d0613776"),
        "name": "Still into You",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 216,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("df3f89c830654a23e4262b1c"),
        "name": "Anklebiters",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 137,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b354d3a1608a40029d8b4d3a"),
        "name": "Interlude: Holiday",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 69,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("bca3f10c41082f1acea50b48"),
        "name": "Proof",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 195,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("da78d8a64c7e9d1f008e5089"),
        "name": "Hate to See Your Heart Break",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 309,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("a924ae45fefd1f29f8ea6bbe"),
        "name": "(One of Those) Crazy Girls",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 212,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("526adeae114fba2ec105dfb5"),
        "name": "Interlude: I'm Not Angry Anymore",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 52,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("09959e6aa7712fcb7a267909"),
        "name": "Be Alone",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 220,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e569d8c6f108ac1b9bd85a00"),
        "name": "Future",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 470,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("df9a3cde0e5a4179f90913b1"),
        "name": "Hate to See Your Heart Break (feat. Joy Williams)",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 312,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("02f1f4b4fb8a1c63ee12b3ef"),
        "name": "Escape Route",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 177,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("3260bb1e6febeaf3094596a8"),
        "name": "Native Tongue",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("9319f13ae1adcc1b64406b42"),
        "album_name": "Paramore (Deluxe Edition)",
        "duration": 192,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("367c305ee851c60d70f81080"),
        "name": "Fast in My Car",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 222,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ac364458059810f2be31da56"),
        "name": "Now",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 250,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("dfea0c6859dfd83f45503e2d"),
        "name": "Grow Up",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 230,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("6cf42d0db3ea13a27f446460"),
        "name": "Daydreaming",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 271,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("17c7e19ae7d71589938d2726"),
        "name": "Interlude: Moving On",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 90,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("07d01c43d02909e16509633a"),
        "name": "Ain't It Fun",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 296,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("1112b9eba81dac5b3c6f1add"),
        "name": "Part II",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 281,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b2c3d4cda60bfa50f526b111"),
        "name": "Last Hope",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 309,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0f9a676dd8d864d0debd7f82"),
        "name": "Still into You",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 216,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b43fd4af3111f2f940571a73"),
        "name": "Anklebiters",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 137,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("dff1b94a1df3f0c693b904ac"),
        "name": "Interlude: Holiday",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 69,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("7d70e0a19472ab868e37dca4"),
        "name": "Proof",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 195,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ba860a38e5659e2d9e3a271e"),
        "name": "Hate to See Your Heart Break",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 309,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("79babc414f19dc7daf35d54d"),
        "name": "(One of Those) Crazy Girls",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 212,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d11cb211ebf0ae96eab62167"),
        "name": "Interlude: I'm Not Angry Anymore",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 52,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5d75e32fed0e57299bb7f39c"),
        "name": "Be Alone",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 220,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("66c9a0b984127ea4a90e8206"),
        "name": "Future",
        "artist_id": ObjectId("92ca4d82114657f77dc86378"),
        "artist_name": "Paramore",
        "album_id": ObjectId("966dd26ecab656cb71a3f418"),
        "album_name": "Paramore",
        "duration": 470,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f85a33c355e7f8799f861733"),
        "name": "Columbia - Live at Knebworth, 10 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 287,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("6516a661f516008fa94cb362"),
        "name": "Acquiesce - Live at Knebworth, 10 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 236,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d11d99995eef8629213e28cc"),
        "name": "Supersonic - Live at Knebworth, 10 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 309,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b3b581bfbe679e4be960d755"),
        "name": "Hello - Live at Knebworth, 11 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 175,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("2e46c64070c7e785d0a19421"),
        "name": "Some Might Say - Live at Knebworth, 11 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 304,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("adf7e5afce42f03757261161"),
        "name": "Roll with It - Live at Knebworth, 11 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 245,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("86c3f4058a79dbfae020a77d"),
        "name": "Slide Away - Live at Knebworth, 11 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 347,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5bbd5d93df46606ef5c5b858"),
        "name": "Morning Glory - Live at Knebworth, 11 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 252,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("a692e740cecd5677f80759ca"),
        "name": "Round Are Way - Live at Knebworth, 10 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 287,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8811a4f56ee5fd85d57f77e8"),
        "name": "Cigarettes & Alcohol - Live at Knebworth, 10 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 282,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ee6105eb986c2ac59bffc035"),
        "name": "Whatever - Live at Knebworth, 10 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 359,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("464d8bbc56ea3aad4603b2b1"),
        "name": "Cast No Shadow - Live at Knebworth, 10 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 286,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b535bd4d628cdef1e24ca643"),
        "name": "Wonderwall - Live at Knebworth, 10 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 244,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8aec3706d3174b8174867e77"),
        "name": "The Masterplan - Live at Knebworth, 10 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 280,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("2c0f8d5248ff3f0974a17c21"),
        "name": "Don't Look Back in Anger - Live at Knebworth, 11 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 294,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b664c09b9cf4b1a2d60e2165"),
        "name": "My Big Mouth - Live at Knebworth, 10 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 310,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("de276da7d579968e09a02101"),
        "name": "It's Gettin' Better (Man!!) - Live at Knebworth, 11 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 356,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("96f535f9ee70a25428cde57a"),
        "name": "Live Forever - Live at Knebworth, 10 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 296,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("84c0347e35f6609743a4d046"),
        "name": "Champagne Supernova - Live at Knebworth, 11 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 446,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e7fe931099295643d3660ba3"),
        "name": "I Am the Walrus - Live at Knebworth, 11 August '96",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("e4b70a245c827d89cba8bb1b"),
        "album_name": "Oasis Knebworth 1996",
        "duration": 400,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c7780d00a7efa7906c533824"),
        "name": "Rock 'n' Roll Star - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 321,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("93c4059d572e6835f3e72d02"),
        "name": "Shakermaker - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 308,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d4521296fe63d53a63ef6bae"),
        "name": "Live Forever - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 276,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("89be19a94f102441d3330a0a"),
        "name": "Up in the Sky - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 268,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("78600727275ad03c73587b87"),
        "name": "Columbia - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 377,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("7cf1af90413d9ebce4470274"),
        "name": "Supersonic - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 283,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("eae6c337913f6c4391018685"),
        "name": "Bring It on Down - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 257,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("7a3e01f40c6341537d19f32a"),
        "name": "Cigarettes & Alcohol - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 289,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f3b5230e24c7a133e79492fa"),
        "name": "Digsy's Dinner - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 152,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("84e516db5a97521c90f03fe8"),
        "name": "Slide Away - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 392,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("64e296af1d45c895f1ed5013"),
        "name": "Married with Children - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 193,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fdc7469982a804c1d5765d25"),
        "name": "Rock 'n' Roll Star - Monnow Valley Version",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 377,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b303a9fd3f1505db4f5eb391"),
        "name": "Shakermaker - Monnow Valley Version",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 290,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("94092780a42c4975e6205fd5"),
        "name": "Live Forever - Monnow Valley Version",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 295,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("bdd165dd7e4c5881451cc34e"),
        "name": "Up In The Sky - Monnow Valley Version",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 297,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("14e1c0b2c0f1402eb1a21db2"),
        "name": "Columbia - Monnow Valley Version",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 290,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e27a51dc2670b22d3a343e12"),
        "name": "Bring It On Down - Monnow Valley Version",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 240,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("7a535f7a0554b24433c56ca6"),
        "name": "Cigarettes & Alcohol - Monnow Valley Version",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 267,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("282045bb19b24d156e865f9a"),
        "name": "Digsy's Dinner - Monnow Valley Version",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 160,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("1869afcc5bd580297b3bb8cc"),
        "name": "Rock 'n' Roll Star - Sawmills Outtake",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("6c44c501bd48d29a9e27bc0e"),
        "album_name": "Definitely Maybe (30th Anniversary)",
        "duration": 392,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("3644290aa4be1743b6347fec"),
        "name": "Hello - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 202,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("19ad3e5a1a2a1ada37a66e01"),
        "name": "Roll with It - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 240,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ceb6b20d78e4f2a6f93e1435"),
        "name": "Wonderwall - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 258,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fda3e7aaa5b42131aed71fb2"),
        "name": "Don't Look Back in Anger - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 289,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c8e15875711bc71cedace144"),
        "name": "Hey Now - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 341,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c71326c5780c877236507af9"),
        "name": "The Swamp Song - Version 1 - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 44,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8bc1f2a1d5fa348159dec453"),
        "name": "Some Might Say - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 327,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("43132a6a1070ac35fe868eae"),
        "name": "Cast No Shadow - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 294,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("26d00a5b9b0a189b8269b443"),
        "name": "She's Electric - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 220,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ff567c9d2837d9164a11eda9"),
        "name": "Morning Glory - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 303,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("07c1ba7d50af1a8d97a32c36"),
        "name": "The Swamp Song - Version 2 - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 39,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("91920a7fab7f222eb47d0155"),
        "name": "Champagne Supernova - Remastered",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 449,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("bb7c5842a9436ea661b6f0ec"),
        "name": "Cast No Shadow - Unplugged",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 300,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("941a1dfe3fbb5059ef9e0829"),
        "name": "Morning Glory - Unplugged",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 274,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8f939a240e2160fa805e757b"),
        "name": "Wonderwall - Unplugged",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 251,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8de09bd77be3009912150fe4"),
        "name": "Acquiesce - Unplugged",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 241,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b44d29c0bd2a43353a2056c1"),
        "name": "Champagne Supernova - Unplugged",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("15e1beb82c3ab54b8e2394e3"),
        "album_name": "(What's The Story) Morning Glory? [30th Anniversary]",
        "duration": 388,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("280ada3d7ff477ad4df44788"),
        "name": "Bag It Up",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("2655b4b4e02ae3f19826bc88"),
        "album_name": "Dig Out Your Soul",
        "duration": 280,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("71d4bf5403b42e6b66419d98"),
        "name": "The Turning",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("2655b4b4e02ae3f19826bc88"),
        "album_name": "Dig Out Your Soul",
        "duration": 304,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e85c68e08cc068e5019bf239"),
        "name": "Waiting for the Rapture",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("2655b4b4e02ae3f19826bc88"),
        "album_name": "Dig Out Your Soul",
        "duration": 182,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("aa87528f4a2d93fda07e10ed"),
        "name": "The Shock of the Lightning",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("2655b4b4e02ae3f19826bc88"),
        "album_name": "Dig Out Your Soul",
        "duration": 299,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fe0302b4de520f9f6c428186"),
        "name": "I'm Outta Time",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("2655b4b4e02ae3f19826bc88"),
        "album_name": "Dig Out Your Soul",
        "duration": 250,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("2b02e23f6609c69bac51c1af"),
        "name": "(Get Off Your) High Horse Lady",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("2655b4b4e02ae3f19826bc88"),
        "album_name": "Dig Out Your Soul",
        "duration": 246,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("88ae492c525081faa859aa75"),
        "name": "Falling Down",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("2655b4b4e02ae3f19826bc88"),
        "album_name": "Dig Out Your Soul",
        "duration": 260,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("6bbaddc2040a5ccfb10764fb"),
        "name": "To Be Where There's Life",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("2655b4b4e02ae3f19826bc88"),
        "album_name": "Dig Out Your Soul",
        "duration": 275,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("96f99fce4388c2d571219284"),
        "name": "Ain't Got Nothin'",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("2655b4b4e02ae3f19826bc88"),
        "album_name": "Dig Out Your Soul",
        "duration": 134,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fc129663994e4471faa86a60"),
        "name": "The Nature Of Reality",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("2655b4b4e02ae3f19826bc88"),
        "album_name": "Dig Out Your Soul",
        "duration": 227,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f33f2c18489881f10660f76f"),
        "name": "Soldier On",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("2655b4b4e02ae3f19826bc88"),
        "album_name": "Dig Out Your Soul",
        "duration": 290,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("4202482eb339e47d45d0560e"),
        "name": "Turn Up the Sun",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("1f53cd90898c82158058a42c"),
        "album_name": "Don't Believe The Truth",
        "duration": 239,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("1b1e27114cad1eb212b264a0"),
        "name": "Mucky Fingers",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("1f53cd90898c82158058a42c"),
        "album_name": "Don't Believe The Truth",
        "duration": 235,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fc71bf1386efef23ee5aeabe"),
        "name": "Lyla",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("1f53cd90898c82158058a42c"),
        "album_name": "Don't Believe The Truth",
        "duration": 310,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e00b73d694df04aff05ef260"),
        "name": "Love Like A Bomb",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("1f53cd90898c82158058a42c"),
        "album_name": "Don't Believe The Truth",
        "duration": 172,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("2b22859a5f7a8459a601b86f"),
        "name": "The Importance of Being Idle",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("1f53cd90898c82158058a42c"),
        "album_name": "Don't Believe The Truth",
        "duration": 219,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e12bcfc7964b360f9d37a434"),
        "name": "The Meaning Of Soul",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("1f53cd90898c82158058a42c"),
        "album_name": "Don't Believe The Truth",
        "duration": 102,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fb42c1051f8b6ff5767efc51"),
        "name": "Guess God Thinks I'm Abel",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("1f53cd90898c82158058a42c"),
        "album_name": "Don't Believe The Truth",
        "duration": 204,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fbb96f53eaf782b4356f9703"),
        "name": "Part Of The Queue",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("1f53cd90898c82158058a42c"),
        "album_name": "Don't Believe The Truth",
        "duration": 228,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8100f2fec03f4cf2dbc71db6"),
        "name": "Keep The Dream Alive",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("1f53cd90898c82158058a42c"),
        "album_name": "Don't Believe The Truth",
        "duration": 345,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("99c2a59fb4d728d0ca319fd5"),
        "name": "A Bell Will Ring",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("1f53cd90898c82158058a42c"),
        "album_name": "Don't Believe The Truth",
        "duration": 187,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("1c51236a6d6b600013903969"),
        "name": "Let There Be Love",
        "artist_id": ObjectId("8444df8d18cb06cfa9fce298"),
        "artist_name": "Oasis",
        "album_id": ObjectId("1f53cd90898c82158058a42c"),
        "album_name": "Don't Believe The Truth",
        "duration": 331,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9ff6700f301c96b9a754924b"),
        "name": "MOON MUSiC",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("de19a1de26f086563446a7a3"),
        "album_name": "Moon Music",
        "duration": 276,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("790b4dc37043b97000598cdc"),
        "name": "feelslikeimfallinginlove",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("de19a1de26f086563446a7a3"),
        "album_name": "Moon Music",
        "duration": 236,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("6f317d5dacb3b74a7d2b4b2c"),
        "name": "WE PRAY",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("de19a1de26f086563446a7a3"),
        "album_name": "Moon Music",
        "duration": 233,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d1c8635a06dbd5ebc261cae5"),
        "name": "JUPiTER",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("de19a1de26f086563446a7a3"),
        "album_name": "Moon Music",
        "duration": 240,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0636c8f65c39597f939667e2"),
        "name": "GOOD FEELiNGS",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("de19a1de26f086563446a7a3"),
        "album_name": "Moon Music",
        "duration": 217,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("6aa8c08640e7be3c4b396c8f"),
        "name": "🌈",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("de19a1de26f086563446a7a3"),
        "album_name": "Moon Music",
        "duration": 369,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f8ea84c4f40d156cdb834598"),
        "name": "iAAM",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("de19a1de26f086563446a7a3"),
        "album_name": "Moon Music",
        "duration": 183,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c00587db301cdc3fef5e4039"),
        "name": "AETERNA",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("de19a1de26f086563446a7a3"),
        "album_name": "Moon Music",
        "duration": 253,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f10487d4ffea24b4a959c6f9"),
        "name": "ALL MY LOVE",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("de19a1de26f086563446a7a3"),
        "album_name": "Moon Music",
        "duration": 222,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("24da4e1276729f9a94f6919c"),
        "name": "ONE WORLD",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("de19a1de26f086563446a7a3"),
        "album_name": "Moon Music",
        "duration": 407,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("6ae342179b4e41bb3c0852f3"),
        "name": "MOON MUSiC",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 276,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("3587822fd1ad15b85a6f132f"),
        "name": "feelslikeimfallinginlove",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 236,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("31355c014b4e9b6e5084bb09"),
        "name": "WE PRAY",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 233,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("96dd95a70b0188dbbf2a6b17"),
        "name": "JUPiTER",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 240,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ce33e79b878498fbb7401235"),
        "name": "GOOD FEELiNGS",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 217,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f4cff21b710d38f0b3265b6e"),
        "name": "🌈",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 369,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c099b548bb3109ad030c1b2d"),
        "name": "iAAM",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 183,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fccb2976a50110aaf8a35314"),
        "name": "AETERNA",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 253,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fafeb77431a6fa22a093429c"),
        "name": "ALL MY LOVE",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 222,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8877ca43eda7d92c675f6491"),
        "name": "ONE WORLD",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 407,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("768e873b1e585bb8a67f878b"),
        "name": "Moon Music - Elodie",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 166,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("39c73d66579baf8930df6bd7"),
        "name": "feelslikeimfallinginlive",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 276,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("001710c859509358e51af4ea"),
        "name": "The Karate Kid",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 175,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("2518eaa40cbc6c8660509c50"),
        "name": "We Pray - Be Our Guest",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 233,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("3cc8f2e86dbbff18531e21f7"),
        "name": "Angelsong",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 261,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("2bc000c3d7ec03b1ddb3edb6"),
        "name": "Jupiter - Single Version",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 173,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("690bfffe8c27f69ed1c2d14e"),
        "name": "Man in The Moon",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 234,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c4205a8a2b2b7b32e69f0294"),
        "name": "i Am A Mountain",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 186,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("13f0ce5fbc3266f3ff562cc6"),
        "name": "All My Love - Live in Dublin",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 246,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("6087b4abcb0679d29f7ac801"),
        "name": "👋",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("87fd7831c8cd2f954ca23271"),
        "album_name": "Moon Music (Full Moon Edition)",
        "duration": 153,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("a1f320f2d154f5f1a218d697"),
        "name": "🪐",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("363bff7cd3ef1984667017c4"),
        "album_name": "Music Of The Spheres",
        "duration": 53,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9a53c9713ea11e3ca78efe2a"),
        "name": "Higher Power",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("363bff7cd3ef1984667017c4"),
        "album_name": "Music Of The Spheres",
        "duration": 206,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ccc884b75b3b2aae29cc3b9a"),
        "name": "Humankind",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("363bff7cd3ef1984667017c4"),
        "album_name": "Music Of The Spheres",
        "duration": 266,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5411aa4928828bcbbab96f70"),
        "name": "✨",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("363bff7cd3ef1984667017c4"),
        "album_name": "Music Of The Spheres",
        "duration": 53,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("59ca0b27d7adcd3342027a78"),
        "name": "Let Somebody Go",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("363bff7cd3ef1984667017c4"),
        "album_name": "Music Of The Spheres",
        "duration": 241,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b808396e2efad48e06227982"),
        "name": "❤️",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("363bff7cd3ef1984667017c4"),
        "album_name": "Music Of The Spheres",
        "duration": 188,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("334ebaa18ba43bb8fba5a331"),
        "name": "People of The Pride",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("363bff7cd3ef1984667017c4"),
        "album_name": "Music Of The Spheres",
        "duration": 217,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("cd6e988c3e6b7b56cc08d119"),
        "name": "Biutyful",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("363bff7cd3ef1984667017c4"),
        "album_name": "Music Of The Spheres",
        "duration": 192,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("73f57d5501d68d167479cbac"),
        "name": "🌎",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("363bff7cd3ef1984667017c4"),
        "album_name": "Music Of The Spheres",
        "duration": 21,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0461a2d67f3ce54d3e43bf5e"),
        "name": "My Universe",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("363bff7cd3ef1984667017c4"),
        "album_name": "Music Of The Spheres",
        "duration": 226,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("6a5107695c68a6d31fae41bb"),
        "name": "♾",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("363bff7cd3ef1984667017c4"),
        "album_name": "Music Of The Spheres",
        "duration": 226,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5f44d0b63a14370f1697e1f7"),
        "name": "Coloratura",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("363bff7cd3ef1984667017c4"),
        "album_name": "Music Of The Spheres",
        "duration": 617,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e210c695fa45bd99fcfb47d8"),
        "name": "Sunrise",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "album_name": "Everyday Life",
        "duration": 151,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5a5ce16e6ca3606c0a994eb9"),
        "name": "Church",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "album_name": "Everyday Life",
        "duration": 230,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b200f24d745dc1a9916535cc"),
        "name": "Trouble In Town",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "album_name": "Everyday Life",
        "duration": 278,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e4b3ce257698e8f1fd028cb1"),
        "name": "BrokEn",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "album_name": "Everyday Life",
        "duration": 150,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ad24d27d45aa0b77580e5d2d"),
        "name": "Daddy",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "album_name": "Everyday Life",
        "duration": 298,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5a61825dbb8bf4ad1771ec3f"),
        "name": "WOTW / POTP",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "album_name": "Everyday Life",
        "duration": 76,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9af70c7ce2d6f348b9b8ee59"),
        "name": "Arabesque",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "album_name": "Everyday Life",
        "duration": 340,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("3d833b4bca5846c41e993e55"),
        "name": "When I Need A Friend",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "album_name": "Everyday Life",
        "duration": 155,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("4c5582be4732e841cdd75b5a"),
        "name": "Guns",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "album_name": "Everyday Life",
        "duration": 115,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c69fe6eb2c72ec0087a265a1"),
        "name": "Orphans",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "album_name": "Everyday Life",
        "duration": 197,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("1e7e1ff912a2d6561c18cc23"),
        "name": "Èkó",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "album_name": "Everyday Life",
        "duration": 157,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5e4288fe658b3dd8dc30446b"),
        "name": "Cry Cry Cry",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "album_name": "Everyday Life",
        "duration": 167,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0e8520bde7cdbd7bad49f057"),
        "name": "Old Friends",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "album_name": "Everyday Life",
        "duration": 146,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("2bc88e099983f3f3439d0dbc"),
        "name": "بنی آدم",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "album_name": "Everyday Life",
        "duration": 194,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b0c756d8343876729b09705b"),
        "name": "Champion Of The World",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "album_name": "Everyday Life",
        "duration": 257,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("226be253340d99f41b5bc2a3"),
        "name": "Everyday Life",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("191f48ee3d861e0ed88eb1ab"),
        "album_name": "Everyday Life",
        "duration": 258,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9e175c01a765d393256b1eef"),
        "name": "A Head Full of Dreams - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 299,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("17d66f79395750060b80db76"),
        "name": "Yellow - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 350,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("19105c0a88051a0375af38fe"),
        "name": "Every Teardrop Is a Waterfall - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 244,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("adb3438bbf8c819bf4f030e0"),
        "name": "The Scientist - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 388,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("64278bd2ecae51ac1bcfe698"),
        "name": "God Put a Smile upon Your Face - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 274,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fb8b5261f9c851250295330d"),
        "name": "Paradise - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 419,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("3915a61fadd51fa69a397125"),
        "name": "Always in My Head - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 221,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("69de6be236dd4d5124307f23"),
        "name": "Magic - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 285,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d727e85ed27b676d4fdab4f1"),
        "name": "Everglow - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 295,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("4341258d0090d584ab677684"),
        "name": "Clocks - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 260,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ba26bbe3d82d6786c97dd64c"),
        "name": "Midnight - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 105,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("17c569ac176e97ba293dc982"),
        "name": "Charlie Brown - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 284,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c13f2667984941da09dcea98"),
        "name": "Hymn for the Weekend - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 302,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("7a17a689d7abf1b47510d0c2"),
        "name": "Fix You - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 327,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("593ce7deebe775494f7a3352"),
        "name": "Viva La Vida - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 251,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("348df4dd9c0f3619624bc7dc"),
        "name": "Adventure of a Lifetime - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 306,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d7aca0fc7c5d1cc310ff87ae"),
        "name": "De Música Ligera - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 369,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5b644c7e88cc4951ca1ff238"),
        "name": "Colour Spectrum - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 117,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("cd78cbe354189c4cd9471a8c"),
        "name": "In My Place - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 277,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("021138748b9b090bac0b963f"),
        "name": "Amor Argentina - Live in Buenos Aires",
        "artist_id": ObjectId("917df7d9189b958ef07e3020"),
        "artist_name": "Coldplay",
        "album_id": ObjectId("b225102215d4bc86a6705b9d"),
        "album_name": "Live in Buenos Aires",
        "duration": 316,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ec86033bebb2ee1ae1b028b7"),
        "name": "2 + 2 = 5 - Live",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("615be90afcf9d999164af38c"),
        "album_name": "Hail to the Thief (Live Recordings 2003-2009)",
        "duration": 216,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("4ea432ee8ca86dac6fae892f"),
        "name": "Sit Down. Stand Up - Live",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("615be90afcf9d999164af38c"),
        "album_name": "Hail to the Thief (Live Recordings 2003-2009)",
        "duration": 251,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9e7fc723d6c445850630d3e8"),
        "name": "Sail To The Moon - Live",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("615be90afcf9d999164af38c"),
        "album_name": "Hail to the Thief (Live Recordings 2003-2009)",
        "duration": 259,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("652c5dd363fd8cebfc723e7d"),
        "name": "Go To Sleep - Live",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("615be90afcf9d999164af38c"),
        "album_name": "Hail to the Thief (Live Recordings 2003-2009)",
        "duration": 225,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("a554892b1d91e0005839a584"),
        "name": "Where I End and You Begin - Live",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("615be90afcf9d999164af38c"),
        "album_name": "Hail to the Thief (Live Recordings 2003-2009)",
        "duration": 250,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("cad54cf4c6940c52b73977d9"),
        "name": "We Suck Young Blood - Live",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("615be90afcf9d999164af38c"),
        "album_name": "Hail to the Thief (Live Recordings 2003-2009)",
        "duration": 297,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("030bffe04c7ebcf40166989d"),
        "name": "The Gloaming - Live",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("615be90afcf9d999164af38c"),
        "album_name": "Hail to the Thief (Live Recordings 2003-2009)",
        "duration": 239,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8290eddde20a717f24101644"),
        "name": "There, There - Live",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("615be90afcf9d999164af38c"),
        "album_name": "Hail to the Thief (Live Recordings 2003-2009)",
        "duration": 333,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("1c8bcf7566b0c35a8ab30054"),
        "name": "I Will - Live",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("615be90afcf9d999164af38c"),
        "album_name": "Hail to the Thief (Live Recordings 2003-2009)",
        "duration": 129,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("94219f39232b45c03428d868"),
        "name": "Myxomatosis - Live",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("615be90afcf9d999164af38c"),
        "album_name": "Hail to the Thief (Live Recordings 2003-2009)",
        "duration": 244,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c2ca73aeeb696005521a953e"),
        "name": "Scatterbrain - Live",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("615be90afcf9d999164af38c"),
        "album_name": "Hail to the Thief (Live Recordings 2003-2009)",
        "duration": 205,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("83b85c2778f691ee7c9f4dde"),
        "name": "A Wolf At the Door - Live",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("615be90afcf9d999164af38c"),
        "album_name": "Hail to the Thief (Live Recordings 2003-2009)",
        "duration": 210,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("acddde90917098bafd8f3090"),
        "name": "Everything In Its Right Place",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 251,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b1d2525e613ac4602a29a16a"),
        "name": "Kid A",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 284,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("57f7d65926919aabf4955f6b"),
        "name": "The National Anthem",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 351,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0e3b6d84a2d1c7326cd73e21"),
        "name": "How to Disappear Completely",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 356,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("69ca0bdc7148e828f7e22870"),
        "name": "Treefingers",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 222,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("66bfd1c63bd7d910ce350a56"),
        "name": "Optimistic",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 315,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c6d95ddfc97667aa3cb3503e"),
        "name": "In Limbo",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 211,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("7158c025cc43576dd2072db3"),
        "name": "Idioteque",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 309,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d17c870047ebe5663e71d093"),
        "name": "Morning Bell",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 275,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9b9ad70d0bf225b4da296283"),
        "name": "Motion Picture Soundtrack",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 200,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8607316829a7e6181d41fa37"),
        "name": "Untitled",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 52,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("62a37b2eaf024f3c859a4a9a"),
        "name": "Packt Like Sardines In a Crushd Tin Box",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 240,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c5651fa6187b2deea2701b1e"),
        "name": "Pyramid Song",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 288,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("da4a431862443f80249a6a6b"),
        "name": "Pulk/Pull Revolving Doors",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 247,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("83901b0bcc7c63e66f67f61c"),
        "name": "You And Whose Army?",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 191,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("a2f39f025392c9d926a2f396"),
        "name": "I Might Be Wrong",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 293,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("89742bf0b30f5027e365f3f3"),
        "name": "Knives Out",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 254,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("722822a47b527e91a394bc43"),
        "name": "Morning Bell/Amnesiac",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 194,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("dc36214422b01505a67b38ec"),
        "name": "Dollars and Cents",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 291,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("3413e2ecbd001e9b3f734743"),
        "name": "Hunting Bears",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("51e625489bb4843216a9a0c6"),
        "album_name": "KID A MNESIA",
        "duration": 121,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("77b84bbb92a77c8db094220e"),
        "name": "Airbag - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 283,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("a45fde5273f7360cf7e709ea"),
        "name": "Paranoid Android - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 383,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("286d13276c52f3fa614da562"),
        "name": "Subterranean Homesick Alien - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 269,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("95dc6e20ecbabee2320078d5"),
        "name": "Exit Music (For A Film) - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 265,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0422b46bf852abb4ef279bfe"),
        "name": "Let Down - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 299,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("589a4778375458dbfa17c65f"),
        "name": "Karma Police - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 261,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e0866b915dea6d1d117f6d5e"),
        "name": "Fitter Happier - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 117,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("53fba75c7979ab89df008b37"),
        "name": "Electioneering - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 230,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("125ebc3975b61208cd1c4add"),
        "name": "Climbing Up the Walls - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 285,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ec1801f9e74e17edf5795e3f"),
        "name": "No Surprises - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 228,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("17035b9ba8d22d87daf2c50b"),
        "name": "Lucky - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 259,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("db0c1d33cc46a6ec366ddbc1"),
        "name": "The Tourist - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 323,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e5fec5ec0e42169184538de8"),
        "name": "I Promise",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 239,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("da49c0b40367f15022d9fe5b"),
        "name": "Man of War",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 269,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("41f27e5e0fa527ad3859836f"),
        "name": "Lift",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 246,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("7e4ba325266f7de4569b8eeb"),
        "name": "Lull - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 145,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0381a041646c9f98a11a71d7"),
        "name": "Meeting in the Aisle - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 187,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("df3a78cf2a9ed5a7ee23acf3"),
        "name": "Melatonin - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 128,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("99d76f32189e4a74273f20b7"),
        "name": "A Reminder - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 232,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ee021af82a5f71e39a5bbbea"),
        "name": "Polyethylene (Parts 1 & 2) - Remastered",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8bf69dd7c893add1ccc13f9a"),
        "album_name": "OK Computer OKNOTOK 1997 2017",
        "duration": 262,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d35eb2018c5a6c185c85a7f8"),
        "name": "Burn the Witch",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("13777b8a9ee953ca0cf987d8"),
        "album_name": "A Moon Shaped Pool",
        "duration": 220,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9d840c6e7261b24b9fd1f580"),
        "name": "Daydreaming",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("13777b8a9ee953ca0cf987d8"),
        "album_name": "A Moon Shaped Pool",
        "duration": 384,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("7f2c77ac68e225aec91affaa"),
        "name": "Decks Dark",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("13777b8a9ee953ca0cf987d8"),
        "album_name": "A Moon Shaped Pool",
        "duration": 281,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("668d6952f4bad500f69706d4"),
        "name": "Desert Island Disk",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("13777b8a9ee953ca0cf987d8"),
        "album_name": "A Moon Shaped Pool",
        "duration": 224,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d66a3b077e3687d016cd25cc"),
        "name": "Ful Stop",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("13777b8a9ee953ca0cf987d8"),
        "album_name": "A Moon Shaped Pool",
        "duration": 367,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("da08d412202dd006374a2294"),
        "name": "Glass Eyes",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("13777b8a9ee953ca0cf987d8"),
        "album_name": "A Moon Shaped Pool",
        "duration": 172,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e46280370683c4ea56df3140"),
        "name": "Identikit",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("13777b8a9ee953ca0cf987d8"),
        "album_name": "A Moon Shaped Pool",
        "duration": 266,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f66105f217c610e609f27ee9"),
        "name": "The Numbers",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("13777b8a9ee953ca0cf987d8"),
        "album_name": "A Moon Shaped Pool",
        "duration": 345,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("aa60e9e6d4432c51bcde5ef7"),
        "name": "Present Tense",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("13777b8a9ee953ca0cf987d8"),
        "album_name": "A Moon Shaped Pool",
        "duration": 306,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("72cb12eceab7ee6f6ab116ed"),
        "name": "Tinker Tailor Soldier Sailor Rich Man Poor Man Beggar Man Thief",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("13777b8a9ee953ca0cf987d8"),
        "album_name": "A Moon Shaped Pool",
        "duration": 303,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8924fb95325ac567fbd81297"),
        "name": "True Love Waits",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("13777b8a9ee953ca0cf987d8"),
        "album_name": "A Moon Shaped Pool",
        "duration": 283,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0e1a4e1e2db6f40309b9dfb2"),
        "name": "Little By Little - Caribou Rmx",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 340,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("4a42072ceb59881537cb4261"),
        "name": "Lotus Flower - Jacques Greene Rmx",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 429,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e966ad96181dbcb1797f78f1"),
        "name": "Morning Mr Magpie - Nathan Fake Rmx",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 291,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b4e7a1886e5727c3139c8eb0"),
        "name": "Bloom - Harmonic 313 Rmx",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 304,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d1ae5fd29b8c2f10e0c78320"),
        "name": "Bloom - Mark Pritchard Rmx",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 367,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8a050c8b5993fafb39520a21"),
        "name": "Feral - Lone RMX",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 317,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9ee8a037cacaf884a925b899"),
        "name": "Morning Mr Magpie - Pearson Sound Scavenger RMX",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 278,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("a0df57a1a59e32fb3f177910"),
        "name": "Separator - Four Tet RMX",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 423,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d48a3a0f9325a7cc6b8c84e5"),
        "name": "Give Up The Ghost - Thriller Houseghost Remix",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 373,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9785157ac95d6f7f01f92b89"),
        "name": "Codex (Illum Sphere)",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 274,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d932617b3c1e0b7558920b37"),
        "name": "Little By Little (Shed)",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 289,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0673e3404012b70ae52477ea"),
        "name": "Give Up The Ghost - Brokenchord Rmx",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 305,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("7568d39982a7741302f16e7a"),
        "name": "TKOL - Altrice Rmx",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 362,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("32bee5e860a43dfa0e8baeb7"),
        "name": "Bloom - Blawan Rmx",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 449,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("bcf7f870c1c0bd5e09653ad8"),
        "name": "Good Evening Mrs Magpie - Modeselektor RMX",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 464,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f4c63fece8760b8fcc753f31"),
        "name": "Bloom - Objekt RMX",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 321,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("736e8b757453f6a6dc076224"),
        "name": "Bloom - Jamie xx Rework",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 148,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("3d689a4e43b5560418565145"),
        "name": "Separator - Anstam RMX",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 290,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e4a4440ea0037e4dfbd6476c"),
        "name": "Lotus Flower - SBTRKT RMX",
        "artist_id": ObjectId("debedff0f6ecaecd61b0b087"),
        "artist_name": "Radiohead",
        "album_id": ObjectId("8b27c917fde450828a15ebf9"),
        "album_name": "TKOL RMX 1234567",
        "duration": 321,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b9adcea8874c8d366f9e40f4"),
        "name": "Training Season (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 213,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("bba0ee76947ec4c11eda633c"),
        "name": "End Of An Era (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 205,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("69a81e45af011da4f203c805"),
        "name": "Break My Heart (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 253,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("20a3f31b0d2149c7e1128a63"),
        "name": "One Medley (Mexican Live Edit)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 380,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f1bf2e6d9229d1d6d3138ad9"),
        "name": "Whatcha Doing (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 274,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("85eb49396b23ca7d6793eb7e"),
        "name": "Levitating (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 257,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0a6a6f829ddee4b67a8cac30"),
        "name": "These Walls (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 267,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e8f26f1246ab48d762a676b5"),
        "name": "Oye Mi Amor (feat. Fher de Maná) [Live From Mexico]",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 303,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("043c49b5c82df6ab15cd4bee"),
        "name": "Maria (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 218,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("6ba9a103d8fd89d1f2ed111c"),
        "name": "Physical (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 322,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("34b62c8291f5e2153b228399"),
        "name": "Electricity (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 250,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fcd5f55fbb263667c3b2b76c"),
        "name": "Hallucinate (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 180,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d69fce056f9518155595e25f"),
        "name": "Illusion (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 255,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("24e46101746153ac7f19bfe0"),
        "name": "Falling Forever (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 260,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9711968dc009a1b1fd36021d"),
        "name": "Happy For You (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 308,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("78f03041fd9ec039f9213159"),
        "name": "Love Again (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 394,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("040f1e0d6c350a06a75688d0"),
        "name": "Anything For Love (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 215,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f705980f1a69fc5585bbc126"),
        "name": "Be The One (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 515,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5e8241ae2e4b4e077f5c74a3"),
        "name": "New Rules / Dance The Night Interlude (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 291,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5efb7e13be3a5fb3368f603f"),
        "name": "Don’t Start Now (Live From Mexico)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("a4eb453cb00eef7c9b5f4428"),
        "album_name": "Dua Lipa - Live From Mexico",
        "duration": 236,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9f1b19eee0cc7ce1d481be86"),
        "name": "Houdini",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 185,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("cbb8a9ef85cf9d38050c8e75"),
        "name": "Training Season",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 209,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d9e0d98dc4cc4b0278838ea4"),
        "name": "Dance The Night - From Barbie The Album",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 176,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ccbe164aebf72e70c60b66ba"),
        "name": "Don’t Start Now",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 183,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("86d24bf3b5b6a4db0d03d213"),
        "name": "Levitating",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 203,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c812ae9da2b4e5998f546eea"),
        "name": "New Rules",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 209,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("03e4e6ffedea2daf4791de88"),
        "name": "These Walls",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 217,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("2f63f01a879a79cd6639ef64"),
        "name": "Break My Heart",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 221,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("926a4d656f711f5d77de4d4a"),
        "name": "Falling Forever",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 223,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8f290a7540699c7b5e59b756"),
        "name": "Physical",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 193,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("849942067eee93c04fdb2026"),
        "name": "Love Again",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 258,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d48975c4ce5aa866cf2decef"),
        "name": "Illusion",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 188,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("155dce2b100a732c93a39187"),
        "name": "Be the One",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 202,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ebdb77d76fd0644f6632b082"),
        "name": "Hotter than Hell",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 187,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("3107bc2e8bd28309c6d144d1"),
        "name": "We’re Good",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 165,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ee42909213d98517c05c8b8d"),
        "name": "Hallucinate",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 208,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("945c1cad3cdec0eaa5793183"),
        "name": "End of an Era",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 196,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("66b444d1efc26aac45c93b1f"),
        "name": "Happy For You",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 245,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b91deee3718612607cbe2921"),
        "name": "Whatcha Doing",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 198,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e7091cdb331b9121700406ae"),
        "name": "French Exit",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("ebb7703e3d407e514e23f759"),
        "album_name": "Radical Optimism Tour - México",
        "duration": 201,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("702098de2287dd23b0f704b6"),
        "name": "Overture (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 106,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c761826d1bedd777cb766227"),
        "name": "End Of An Era (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 239,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("90f70529634d5c99e3a162a5"),
        "name": "Houdini (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 216,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("615938871293eea24354b193"),
        "name": "Training Season (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 220,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("79f16c19d737d71d63337a60"),
        "name": "These Walls (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 230,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c7526384c8bea9e0914e04eb"),
        "name": "Whatcha Doing (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 238,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b8fbf196536e5c16ce3d5f97"),
        "name": "French Exit (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 225,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("774f090aee5cf8290654a8f2"),
        "name": "Illusion (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 237,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("231ebe41d5c4eba19d38e9de"),
        "name": "Falling Forever (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 240,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("7701fde8d18687c0bb3d552a"),
        "name": "Anything For Love (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 189,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5e41260da94974c9a8f3f5ff"),
        "name": "Maria (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 225,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b106c32470589f171fe4d28e"),
        "name": "Happy For You (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 263,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("15cf4e04dbe3ec8cc5f7260f"),
        "name": "Love Again (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 362,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c727ba50244a847892bdb94a"),
        "name": "Pretty Please (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 205,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8dfae91c442751bf20fbe3f6"),
        "name": "Levitating (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 264,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b1ead9e707682d73143fd517"),
        "name": "Sunshine (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 282,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d6977c3e575010eef6feaf9f"),
        "name": "Cold Heart (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 328,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ee4370868a1262c1279be8a7"),
        "name": "Be The One (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 289,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("15b99aa9c5d5edf30c64f24e"),
        "name": "Dance The Night (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 247,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9965081a8c619a0da665f037"),
        "name": "Don’t Start Now (Live from the Royal Albert Hall)",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("5b0e580e5d48d62e07876df0"),
        "album_name": "Dua Lipa - Live from the Royal Albert Hall",
        "duration": 265,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("cf9a19f3e0778ca483b7b805"),
        "name": "End Of An Era - Extended",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("e9d76c6d50f8a2d73b4c81c4"),
        "album_name": "Radical Optimism (Extended Versions)",
        "duration": 276,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f5a690aada6b176fb6ddee08"),
        "name": "Houdini - Extended",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("e9d76c6d50f8a2d73b4c81c4"),
        "album_name": "Radical Optimism (Extended Versions)",
        "duration": 353,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("4d0a5c29be6f4e55f3a27527"),
        "name": "Training Season - Extended",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("e9d76c6d50f8a2d73b4c81c4"),
        "album_name": "Radical Optimism (Extended Versions)",
        "duration": 295,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c36ffb0317124d0878f9659b"),
        "name": "These Walls - Extended",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("e9d76c6d50f8a2d73b4c81c4"),
        "album_name": "Radical Optimism (Extended Versions)",
        "duration": 340,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("6e7eb40cc8978de9189bc26a"),
        "name": "Whatcha Doing - Extended",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("e9d76c6d50f8a2d73b4c81c4"),
        "album_name": "Radical Optimism (Extended Versions)",
        "duration": 307,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("a3bfd095644fb63e830ee39a"),
        "name": "French Exit - Extended",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("e9d76c6d50f8a2d73b4c81c4"),
        "album_name": "Radical Optimism (Extended Versions)",
        "duration": 317,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c01e94e21d5c8c7bdfcafde5"),
        "name": "Illusion - Extended",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("e9d76c6d50f8a2d73b4c81c4"),
        "album_name": "Radical Optimism (Extended Versions)",
        "duration": 263,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("bebfa8dcfd143cd7663555d5"),
        "name": "Falling Forever - Extended",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("e9d76c6d50f8a2d73b4c81c4"),
        "album_name": "Radical Optimism (Extended Versions)",
        "duration": 371,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8e1e625d1cd4c4115d6c6d46"),
        "name": "Anything For Love - Extended",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("e9d76c6d50f8a2d73b4c81c4"),
        "album_name": "Radical Optimism (Extended Versions)",
        "duration": 240,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("1092f5de20f2cc8d91aca6c2"),
        "name": "Maria - Extended",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("e9d76c6d50f8a2d73b4c81c4"),
        "album_name": "Radical Optimism (Extended Versions)",
        "duration": 305,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("95a81d118c666f23e83cca54"),
        "name": "Happy For You - Extended",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("e9d76c6d50f8a2d73b4c81c4"),
        "album_name": "Radical Optimism (Extended Versions)",
        "duration": 356,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("365dfd95f3fd597b71ea9794"),
        "name": "End Of An Era",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("178ae176357dcbf46a7ff078"),
        "album_name": "Radical Optimism",
        "duration": 196,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("63689d56ca736d5d0c72a254"),
        "name": "Houdini",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("178ae176357dcbf46a7ff078"),
        "album_name": "Radical Optimism",
        "duration": 185,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5cc7fb42c14929a10b4056fd"),
        "name": "Training Season",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("178ae176357dcbf46a7ff078"),
        "album_name": "Radical Optimism",
        "duration": 209,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c11a3b68786b70169fa31106"),
        "name": "These Walls",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("178ae176357dcbf46a7ff078"),
        "album_name": "Radical Optimism",
        "duration": 217,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("2921f70e9bb70d58e74cc90e"),
        "name": "Whatcha Doing",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("178ae176357dcbf46a7ff078"),
        "album_name": "Radical Optimism",
        "duration": 198,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("286ef642998e51698e9e2808"),
        "name": "French Exit",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("178ae176357dcbf46a7ff078"),
        "album_name": "Radical Optimism",
        "duration": 201,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("1c8908b4e14557ee4b6e4873"),
        "name": "Illusion",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("178ae176357dcbf46a7ff078"),
        "album_name": "Radical Optimism",
        "duration": 188,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5958432be0c7c6e73fad2e72"),
        "name": "Falling Forever",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("178ae176357dcbf46a7ff078"),
        "album_name": "Radical Optimism",
        "duration": 223,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d2ae25ed42799944e34a7804"),
        "name": "Anything For Love",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("178ae176357dcbf46a7ff078"),
        "album_name": "Radical Optimism",
        "duration": 141,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("217210e3cfb366cc8a46a52e"),
        "name": "Maria",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("178ae176357dcbf46a7ff078"),
        "album_name": "Radical Optimism",
        "duration": 187,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5e75634fbd40176f6bc44316"),
        "name": "Happy For You",
        "artist_id": ObjectId("ae45fbdc12c9d3223f5a1c6d"),
        "artist_name": "Dua Lipa",
        "album_id": ObjectId("178ae176357dcbf46a7ff078"),
        "album_name": "Radical Optimism",
        "duration": 245,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5fcf42f5e38f3edc142ac8c2"),
        "name": "You Shook Me - 23/3/69 Top Gear; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 314,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("2eb4ac0d7c07d2e22d6c31bd"),
        "name": "I Can't Quit You Baby - 23/3/69 Top Gear;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 263,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("a451b8366b696e7e8031518c"),
        "name": "Communication Breakdown - Live on Tasty Pop Sundae from BBC Sessions;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 191,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("93136066a4d38d4628764896"),
        "name": "Dazed and Confused - 3/23/69 Top Gear;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 399,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0abbecbcdc0ac7e1cfa7372e"),
        "name": "The Girl I Love She Got Long Black Wavy Hair - Live on Tasty Pop Sundae from BBC Sessions;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 183,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e4d1c5e0b0098cb59c03fae0"),
        "name": "What Is and What Should Never Be - 29/6/69 Top Gear;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 260,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9ae59fe89206d72879bdf207"),
        "name": "Communication Breakdown - 29/6/69 Top Gear;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 160,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8c73804136e7665c73d78b3b"),
        "name": "Travelling Riverside Blues - 29/6/69 Top Gear;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 310,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fd550c87333db305128654e0"),
        "name": "Whole Lotta Love - 29/6/69 Top Gear;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 370,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c2d2d65f2047291aad224177"),
        "name": "Somethin' Else - Live on Tasty Pop Sundae from BBC Sessions;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 126,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f89cd3c4e0dc35afb6c47f14"),
        "name": "Communication Breakdown - 10/8/69 Playhouse Theatre;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 184,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("13d751084a6af71a09b872b3"),
        "name": "I Can't Quit You Baby - 10/8/69 Playhouse Theatre;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 380,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fb448b5b5d7de0aaf3d5b12f"),
        "name": "You Shook Me - 10/8/69 Playhouse Theatre;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 613,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("a93fe2a8162d37629adb21fc"),
        "name": "How Many More Times - 10/8/69 Playhouse Theatre;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 698,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("4ee54c78e5335c060e5a0852"),
        "name": "Immigrant Song - 1/4/71 Paris Theatre;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 201,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ee54f0a28b4e7094b925ddb9"),
        "name": "Heartbreaker - 1/4/71 Paris Theatre;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 315,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f2b03d573c0c22bc7ec8ba08"),
        "name": "Since I've Been Loving You - 1/4/71 Paris Theatre;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 416,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("053dafd7a551dba1e529b916"),
        "name": "Black Dog - 1/4/71 Paris Theatre;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 317,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("efabd2165b36f99d5d66fd0d"),
        "name": "Dazed and Confused - 1/4/71 Paris Theatre;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 1116,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("27f62fda6826d7aff7e0e724"),
        "name": "Stairway to Heaven - Live: 1/4/71 Paris Theatre;Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("347fa5ba7706114ea4ebedf4"),
        "album_name": "The Complete BBC Sessions (Remastered)",
        "duration": 529,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ec8b86335a8de77663f62c12"),
        "name": "Good Times Bad Times - Live: O2 Arena, London - December 10, 2007",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("26777cf22646e7709f21fbc2"),
        "album_name": "Celebration Day",
        "duration": 191,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("2b0e8db158b8909d83961ac3"),
        "name": "Ramble On - Live: O2 Arena, London - December 10, 2007",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("26777cf22646e7709f21fbc2"),
        "album_name": "Celebration Day",
        "duration": 344,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("cf3b416eabc2175873612fef"),
        "name": "Black Dog - Live: O2 Arena, London - December 10, 2007",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("26777cf22646e7709f21fbc2"),
        "album_name": "Celebration Day",
        "duration": 353,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("81346db21bd4543447c15f15"),
        "name": "In My Time of Dying - Live: O2 Arena, London - December 10, 2007",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("26777cf22646e7709f21fbc2"),
        "album_name": "Celebration Day",
        "duration": 670,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("dc6b2e064595fad1d4b8d680"),
        "name": "For Your Life - Live: O2 Arena, London - December 10, 2007",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("26777cf22646e7709f21fbc2"),
        "album_name": "Celebration Day",
        "duration": 400,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fe83ce6e7e8a837cd307bf56"),
        "name": "Trampled Under Foot - Live: O2 Arena, London - December 10, 2007",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("26777cf22646e7709f21fbc2"),
        "album_name": "Celebration Day",
        "duration": 379,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("75a46e8824629055ff7bc62a"),
        "name": "Nobody's Fault but Mine - Live: O2 Arena, London - December 10, 2007",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("26777cf22646e7709f21fbc2"),
        "album_name": "Celebration Day",
        "duration": 403,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("46d6db26a8e634d4f64fbff3"),
        "name": "No Quarter - Live: O2 Arena, London - December 10, 2007",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("26777cf22646e7709f21fbc2"),
        "album_name": "Celebration Day",
        "duration": 561,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("cac6e1ec3d1813f4f5a3ca84"),
        "name": "Since I've Been Loving You - Live: O2 Arena, London - December 10, 2007",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("26777cf22646e7709f21fbc2"),
        "album_name": "Celebration Day",
        "duration": 472,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("742274e06be23f764adb305b"),
        "name": "Dazed and Confused - Live: O2 Arena, London - December 10, 2007",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("26777cf22646e7709f21fbc2"),
        "album_name": "Celebration Day",
        "duration": 704,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("6edae7a7abd3201383e965e5"),
        "name": "Stairway to Heaven - Live: O2 Arena, London - December 10, 2007",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("26777cf22646e7709f21fbc2"),
        "album_name": "Celebration Day",
        "duration": 529,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d4136d0ea35dbe38efc96edc"),
        "name": "The Song Remains the Same - Live: O2 Arena, London - December 10, 2007",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("26777cf22646e7709f21fbc2"),
        "album_name": "Celebration Day",
        "duration": 346,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("71c0a3c60086889ca833c8f1"),
        "name": "Misty Mountain Hop - Live: O2 Arena, London - December 10, 2007",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("26777cf22646e7709f21fbc2"),
        "album_name": "Celebration Day",
        "duration": 308,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ac9381b0e48a9ca7491aea5b"),
        "name": "Kashmir - Live: O2 Arena, London - December 10, 2007",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("26777cf22646e7709f21fbc2"),
        "album_name": "Celebration Day",
        "duration": 546,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("21cb61d08036443ee1aca7b4"),
        "name": "Whole Lotta Love - Live: O2 Arena, London - December 10, 2007",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("26777cf22646e7709f21fbc2"),
        "album_name": "Celebration Day",
        "duration": 446,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("885424abddcdaac23049e9d1"),
        "name": "Rock and Roll - Live: O2 Arena, London - December 10, 2007",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("26777cf22646e7709f21fbc2"),
        "album_name": "Celebration Day",
        "duration": 274,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fdb3ea46d769140b255aaf15"),
        "name": "LA Drone - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 14,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b3319dbe330204b7cac29fa2"),
        "name": "Immigrant Song - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 221,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("02dbe693a5250ff33a0fd84e"),
        "name": "Heartbreaker - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 443,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("eb90f6784ffe4462c39d2313"),
        "name": "Black Dog - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 340,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("311aab2ed747c85464f9b24a"),
        "name": "Over the Hills and Far Away - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 307,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("a19f92eab3d2efc1c121a02a"),
        "name": "Since I've Been Loving You - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 481,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8cbd4960b562bfbd23a808b8"),
        "name": "Stairway to Heaven - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 577,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fe0d89639a7c22817b520954"),
        "name": "Going to California - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 337,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0126d23d1b62a021cb2a6960"),
        "name": "That's The Way - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 353,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9849645e9dba4489cf2c7656"),
        "name": "Bron-Y-Aur Stomp - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 293,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b37507014e2f036df4472747"),
        "name": "Dazed and Confused - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 1525,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("276b671cc0dcb16596b5e5b8"),
        "name": "What Is and What Should Never Be (Live) - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 280,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b47a06000acc11cb92dfa5d6"),
        "name": "Dancing Days - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 221,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("89df599398b9b3b3ac3cd9bf"),
        "name": "Moby Dick - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 1164,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("45a7c227f65cfaabf7647f12"),
        "name": "Whole Lotta Love - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 1261,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("550a7096ebc56f981ef2307f"),
        "name": "Rock and Roll - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 235,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f4a47b5369a6f181a6c32cb4"),
        "name": "The Ocean - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 260,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("4a5f4a5bfe5517b804f588f1"),
        "name": "Bring It on Home / Bring It on Back - Live 1972; Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("6aaca14a3eb647bc0fdfeb19"),
        "album_name": "How the West Was Won (Remaster)",
        "duration": 571,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e33503e069d8dce1b8d9a9d5"),
        "name": "We're Gonna Groove - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("7d0ec068f8bf80084b4d2f90"),
        "album_name": "Coda (Remaster)",
        "duration": 158,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("309c14d14af06a4ead40a634"),
        "name": "Poor Tom - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("7d0ec068f8bf80084b4d2f90"),
        "album_name": "Coda (Remaster)",
        "duration": 182,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0e0cfd702f666726e80eaa2b"),
        "name": "I Can't Quit You Baby - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("7d0ec068f8bf80084b4d2f90"),
        "album_name": "Coda (Remaster)",
        "duration": 258,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("478b3215b0a4690f08e4986e"),
        "name": "Walter's Walk - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("7d0ec068f8bf80084b4d2f90"),
        "album_name": "Coda (Remaster)",
        "duration": 271,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("54c67bee88007714851faaf3"),
        "name": "Ozone Baby - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("7d0ec068f8bf80084b4d2f90"),
        "album_name": "Coda (Remaster)",
        "duration": 216,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f97618418c67efadb1496965"),
        "name": "Darlene - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("7d0ec068f8bf80084b4d2f90"),
        "album_name": "Coda (Remaster)",
        "duration": 306,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c2f6f0de1ec52b0694ffe2c5"),
        "name": "Bonzo's Montreux - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("7d0ec068f8bf80084b4d2f90"),
        "album_name": "Coda (Remaster)",
        "duration": 262,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("324a94c600d007619ee54760"),
        "name": "Wearing and Tearing - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("7d0ec068f8bf80084b4d2f90"),
        "album_name": "Coda (Remaster)",
        "duration": 329,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("264550ab32801816df706327"),
        "name": "We're Gonna Groove - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 158,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("27af3a62e241370682ec5dc8"),
        "name": "Poor Tom - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 182,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e64d273a06e678f1450e52f1"),
        "name": "I Can't Quit You Baby - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 258,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("32e1ed01ea4eb93cef823bb2"),
        "name": "Walter's Walk - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 271,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0bc442846389a4fcf7b84715"),
        "name": "Ozone Baby - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 216,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ec068dd01345f7904f3f8308"),
        "name": "Darlene - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 306,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0baaa1e066b732465107fabe"),
        "name": "Bonzo's Montreux - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 262,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("6cb11ade6ed2fcff8cc83dad"),
        "name": "Wearing and Tearing - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 329,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("2bec7bc6f937319bdf5f290d"),
        "name": "We're Gonna Groove - Alternate Mix",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 160,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("ca473770af2c2d944c25071e"),
        "name": "If It Keeps on Raining - Rough Mix",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 254,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fc15e09d40ff7f30893689ca"),
        "name": "Bonzo's Montreux - Mix Construction in Progress",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 299,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("80aae0c9aba52d8ed22e9acf"),
        "name": "Baby Come on Home - Remastered",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 269,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f8fe3d155ba35cddadb1f8de"),
        "name": "Sugar Mama - Mix",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 170,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("35e84e3e7429dc5cc296b72a"),
        "name": "Poor Tom - Instrumental Mix",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 137,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8da69819c162600e5c127710"),
        "name": "Travelling Riverside Blues (BBC Session) - Remastered",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 311,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("60bd7b8dd24175578bce0cf0"),
        "name": "Hey, Hey, What Can I Do - Remaster",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 236,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("c15e284e9351498fa710b799"),
        "name": "Four Hands (Four Sticks) [Bombay Orchestra]",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 285,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e3866c820fe1586611e80c7e"),
        "name": "Friends (Bombay Orchestra)",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 267,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("70a10f967d8a02e342a4cbc5"),
        "name": "St. Tristan's Sword - Rough Mix",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 341,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("4859955fcbf87ab11c9830bb"),
        "name": "Desire (The Wanton Song) - Rough Mix",
        "artist_id": ObjectId("95c6e4369374d1333a81815d"),
        "artist_name": "Led Zeppelin",
        "album_id": ObjectId("792587b8cd40b7a51b926831"),
        "album_name": "Coda (Deluxe Edition)",
        "duration": 249,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("629a29679cf1c2607ab75522"),
        "name": "all-american bitch",
        "artist_id": ObjectId("5034983c70523c76d767aca6"),
        "artist_name": "Olivia Rodrigo",
        "album_id": ObjectId("dfc243f396bc5f28089a41af"),
        "album_name": "GUTS (spilled)",
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
        "duration": 256,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("2ce98364ffb8333158f0116a"),
        "name": "Lover, You Should've Come Over",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 404,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("883feacc6b427be3c6ac2c04"),
        "name": "Hallelujah",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 413,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e50e44fb41c330cc0decafe4"),
        "name": "Just Like a Woman",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 388,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8f8423401902c9c8d7b463f3"),
        "name": "Everybody Here Wants You",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 286,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("a6dd593235c5eb7aa8f4003d"),
        "name": "Corpus Christi Carol",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 176,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("21dd5eb3b8f543e27f7f1c3b"),
        "name": "Last Goodbye",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 258,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("293edd01e925ee1ef281ab71"),
        "name": "Mama, You Been on My Mind - Studio Outtake - 1993",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 205,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9f5d673c5022bd872718a5fc"),
        "name": "Night Flight - Live at Sin-é, New York, NY - July/August 1993",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 400,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("69d61ef77b0e913f02f17320"),
        "name": "Eternal Life - Live at Cabaret Metro, Chicago, IL, May 13, 1995",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 353,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("a8cbe70a4e7d2ef4ec4e0cf4"),
        "name": "Grace",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 322,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("912babe400673d2bae947a79"),
        "name": "Mojo Pin",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 342,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8460b8fec8d07ec8b6ba140d"),
        "name": "Everyday People - Extended Version",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 381,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d9562a586f5bb0491889f29b"),
        "name": "Lilac Wine - Live at Palais Theatre, Melbourne, AU - Feb 1996",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 319,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8ab21328380b5d239b2745ae"),
        "name": "I Want Someone Badly",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 155,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("fe6f437d68f725584d2919e5"),
        "name": "Je N'en Connais Pas La Fin - Live at Sin-é, New York, NY - July/August 1993",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 297,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9efd9e014fdb08a4390207c9"),
        "name": "Dream Brother - Alternate Take",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 294,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d77aaefb45868cd074478d44"),
        "name": "New Year's Prayer",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 280,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5d8e1bc1cf8cdfe4ea0576ff"),
        "name": "I Shall Be Released - Live at Sin-é, New York, NY - July/August 1993",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 324,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("7e1cc9b887a89a1e2d3a35e8"),
        "name": "Vancouver",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 190,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("2299faee843591a3da6ad972"),
        "name": "Yard Of Blonde Girls",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("d689d32264ce1fad2cd19593"),
        "album_name": "Jeff Buckley: It's Never Over - Songs From the Film",
        "duration": 247,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("f5270f51351ad6c6aa2a6431"),
        "name": "Cruel - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 320,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("89194f28e41fcb6bf90e93a1"),
        "name": "No Soul - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 225,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("436b8122efe0bc1e866cb9b8"),
        "name": "Distortion - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 351,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("560449369d2fe8f78f5d8a5e"),
        "name": "Grace - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 240,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d982ec99d2844e05cf03a03b"),
        "name": "How Long Will It Take - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 300,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("28368df83b10e141745169aa"),
        "name": "In The Cantine - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 284,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("134a6919ccbb2a31d0d013e3"),
        "name": "Hymn L'Amour - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 374,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("cc1a9256495114416068b219"),
        "name": "Satisfied Mind - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 300,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("d2bc77c1372b19c0e3616ef9"),
        "name": "Harem Man - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 609,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0cb8612af7adac905c3502be"),
        "name": "Story Without Words - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 331,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("61fcd00f968944a07b8b18ac"),
        "name": "Dream Of A Russian Princess - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 127,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("eec0535913f7790675595b5d"),
        "name": "Sweet Thing - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 268,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9521ea3595cea5a66fda155d"),
        "name": "She Is Free - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 292,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9dbb68058f7226b5472d1c16"),
        "name": "Dink's Song - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 318,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("29021832b766d88a6c5f7d6e"),
        "name": "No One Must Find You Here - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 660,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("bee1bc041b1d3bb2fe047cca"),
        "name": "Bluebird Blues - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 400,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("3a8ee3cc6025d0c5b5e62c2a"),
        "name": "Mojo Pin - Live 1992",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("46f6c536d12f4d95008c41a0"),
        "album_name": "Gods And Monsters (Live)",
        "duration": 285,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("330ab7d22bc4ea4424b2f184"),
        "name": "Mojo Pin - Live At Wetlands, New York, NY, August 16, 1994",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("992cf5304510b5d6d0cb84a2"),
        "album_name": "Live at Wetlands, New York, NY 8/16/94",
        "duration": 870,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("37dd6fe3984a79c05bd1a867"),
        "name": "Dream Brother - Live At Wetlands, New York, NY, August 16, 1994",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("992cf5304510b5d6d0cb84a2"),
        "album_name": "Live at Wetlands, New York, NY 8/16/94",
        "duration": 610,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("bdc63b5b73d0a1703a6904c3"),
        "name": "So Real - Live At Wetlands, New York, NY, August 16, 1994",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("992cf5304510b5d6d0cb84a2"),
        "album_name": "Live at Wetlands, New York, NY 8/16/94",
        "duration": 355,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("61a5ad779f5518b8518010ff"),
        "name": "Last Goodbye - Live At Wetlands, New York, NY, August 16, 1994",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("992cf5304510b5d6d0cb84a2"),
        "album_name": "Live at Wetlands, New York, NY 8/16/94",
        "duration": 401,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9c7f5c4cad10008e31f3d59b"),
        "name": "Lilac Wine - Live At Wetlands, New York, NY, August 16, 1994",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("992cf5304510b5d6d0cb84a2"),
        "album_name": "Live at Wetlands, New York, NY 8/16/94",
        "duration": 159,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("a7935fe0906a8bf8a072c829"),
        "name": "Grace - Live At Wetlands, New York, NY, August 16, 1994",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("992cf5304510b5d6d0cb84a2"),
        "album_name": "Live at Wetlands, New York, NY 8/16/94",
        "duration": 467,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("3145e9dce1860e6523990c18"),
        "name": "What Will You Say - Live At Wetlands, New York, NY, August 16, 1994",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("992cf5304510b5d6d0cb84a2"),
        "album_name": "Live at Wetlands, New York, NY 8/16/94",
        "duration": 615,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8387048cebd8c2601b5fab0f"),
        "name": "Hallelujah - Live At Wetlands, New York, NY, August 16, 1994",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("992cf5304510b5d6d0cb84a2"),
        "album_name": "Live at Wetlands, New York, NY 8/16/94",
        "duration": 510,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("88b09930939f6d4a85034ff0"),
        "name": "Je N'en Connais Pas La Fin - Live At Wetlands, New York, NY, August 16, 1994",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("992cf5304510b5d6d0cb84a2"),
        "album_name": "Live at Wetlands, New York, NY 8/16/94",
        "duration": 393,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("9090561ceab719b2df105f06"),
        "name": "Lover, You Should've Come Over - Live At Wetlands, New York, NY, August 16, 1994",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("992cf5304510b5d6d0cb84a2"),
        "album_name": "Live at Wetlands, New York, NY 8/16/94",
        "duration": 763,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("825d4611183b4b52ca93f9a2"),
        "name": "Eternal Life - Live At Wetlands, New York, NY, August 16, 1994",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("992cf5304510b5d6d0cb84a2"),
        "album_name": "Live at Wetlands, New York, NY 8/16/94",
        "duration": 748,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8f950956c99b65c63fa5d1b6"),
        "name": "That's All I Ask - Live At Wetlands, New York, NY, August 16, 1994",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("992cf5304510b5d6d0cb84a2"),
        "album_name": "Live at Wetlands, New York, NY 8/16/94",
        "duration": 254,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("77b2418459991eff70a91011"),
        "name": "Kanga-Roo - Live At Wetlands, New York, NY, August 16, 1994",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("992cf5304510b5d6d0cb84a2"),
        "album_name": "Live at Wetlands, New York, NY 8/16/94",
        "duration": 1327,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("a1b1f261d38fb26f7814f9b3"),
        "name": "Mojo Pin - (Soundcheck) [Live At Wetlands, New York, NY, August 16, 1994]",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("992cf5304510b5d6d0cb84a2"),
        "album_name": "Live at Wetlands, New York, NY 8/16/94",
        "duration": 524,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("020b2d3521e9de121b5ac719"),
        "name": "Dream Brother - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("a7d6b4ae1a07e7aec19fee3c"),
        "album_name": "Live at Columbia Records Radio Hour",
        "duration": 663,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("3506797b5907e8133b7fe10c"),
        "name": "So Real - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("a7d6b4ae1a07e7aec19fee3c"),
        "album_name": "Live at Columbia Records Radio Hour",
        "duration": 335,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("979393318a150bf985b1c1a9"),
        "name": "Mojo Pin - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("a7d6b4ae1a07e7aec19fee3c"),
        "album_name": "Live at Columbia Records Radio Hour",
        "duration": 400,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("4c6cf9b6c31e63f3a13ebc1b"),
        "name": "Grace - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("a7d6b4ae1a07e7aec19fee3c"),
        "album_name": "Live at Columbia Records Radio Hour",
        "duration": 343,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("0a2ea1bfb9fb82f0fff64762"),
        "name": "Lilac Wine - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("a7d6b4ae1a07e7aec19fee3c"),
        "album_name": "Live at Columbia Records Radio Hour",
        "duration": 442,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8a6ed8b0eb31b6c1d97246f3"),
        "name": "Last Goodbye - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("a7d6b4ae1a07e7aec19fee3c"),
        "album_name": "Live at Columbia Records Radio Hour",
        "duration": 314,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("72227f0694b8a6efd5f11f19"),
        "name": "Eternal Life - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("a7d6b4ae1a07e7aec19fee3c"),
        "album_name": "Live at Columbia Records Radio Hour",
        "duration": 318,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("59e9b7fe4bd738faa98c016d"),
        "name": "Kick Out the Jams - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("a7d6b4ae1a07e7aec19fee3c"),
        "album_name": "Live at Columbia Records Radio Hour",
        "duration": 213,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("eb8c903a2e4b4f6d422bf0c6"),
        "name": "Lover, You Should've Come Over - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("a7d6b4ae1a07e7aec19fee3c"),
        "album_name": "Live at Columbia Records Radio Hour",
        "duration": 448,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("4def7d22ee3aca0453f2759b"),
        "name": "I Know It's Over - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("a7d6b4ae1a07e7aec19fee3c"),
        "album_name": "Live at Columbia Records Radio Hour",
        "duration": 570,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("e2c50f33e0a4613c1314bff1"),
        "name": "Just Like a Woman",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("3a2fd5a396e7b4ac9cf9ca2a"),
        "album_name": "You and I (Extended Edition)",
        "duration": 388,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("db579714808ef8c4a098dd05"),
        "name": "Everyday People - Extended Version",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("3a2fd5a396e7b4ac9cf9ca2a"),
        "album_name": "You and I (Extended Edition)",
        "duration": 381,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("b3a11fa44f66f74cb39896d0"),
        "name": "Don't Let the Sun Catch You Cryin'",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("3a2fd5a396e7b4ac9cf9ca2a"),
        "album_name": "You and I (Extended Edition)",
        "duration": 244,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("8e1af5ef1418e4ba1141648e"),
        "name": "Grace - Extended Version",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("3a2fd5a396e7b4ac9cf9ca2a"),
        "album_name": "You and I (Extended Edition)",
        "duration": 388,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("388de5a2f157b728219fe6ac"),
        "name": "Calling You - Extended Version",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("3a2fd5a396e7b4ac9cf9ca2a"),
        "album_name": "You and I (Extended Edition)",
        "duration": 464,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5bbc4c47d9d45ef83d101b62"),
        "name": "Dream of You and I - Extended Version",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("3a2fd5a396e7b4ac9cf9ca2a"),
        "album_name": "You and I (Extended Edition)",
        "duration": 462,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("10eb6e0fac0cb92c7656befc"),
        "name": "The Boy with the Thorn In His Side - Extended Version",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("3a2fd5a396e7b4ac9cf9ca2a"),
        "album_name": "You and I (Extended Edition)",
        "duration": 395,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("4266dfacaff97d53a30fd660"),
        "name": "Poor Boy Long Way from Home",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("3a2fd5a396e7b4ac9cf9ca2a"),
        "album_name": "You and I (Extended Edition)",
        "duration": 363,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("771f388b057c45de2af28527"),
        "name": "Night Flight - Extended Version",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("3a2fd5a396e7b4ac9cf9ca2a"),
        "album_name": "You and I (Extended Edition)",
        "duration": 391,
        "average_users_score": 0.0
    },
    {
        "_id": ObjectId("5dac8071242d5ada76fff70d"),
        "name": "I Know It's Over",
        "artist_id": ObjectId("a197241ae30ca34a432c6e62"),
        "artist_name": "Jeff Buckley",
        "album_id": ObjectId("3a2fd5a396e7b4ac9cf9ca2a"),
        "album_name": "You and I (Extended Edition)",
        "duration": 422,
        "average_users_score": 0.0
    }
]
);


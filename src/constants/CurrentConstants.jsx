export const notification = [
    {
        username: 'NicolasFue05',
        message: 'Hey, are you going to the party tonight?'
    },
    {
        username: 'unregistered',
        message: 'please babe, can we walk about it?'
    }
];

export const chatsMessages = [
    {
        username: notification[0].username,
        messages: [
            {
                key: 1,
                isReceived: false,
                message: 'idk, this is different',
                time: '11:30 p.m.'
            },
            {
                key: 2,
                isReceived: true,
                message: 'How do u really feel?',
                time: '11:35 p.m.'
            },
            {
                key: 3,
                isReceived: false,
                message: "u know I'm always fine.",
                time: '3:33 a.m.'
            },
            {
                key: 4,
                isReceived: true,
                message: "I'm glad to hear it",
                time: '10:00 a.m.'
            },
            {
                key: 5,
                isReceived: true,
                message: notification[0].message,
                time: '5:00 p.m.'
            }
        ]
    },
    {
        username: notification[1].username,
        messages: [
            {
                key: 1,
                isReceived: false,
                message: 'come on!!!, they took a photo of you kissing ███████',
                time: '11:35 p.m.'
            },
            {
                key: 2,
                isReceived: true,
                message: 'id noyhing babr',
                time: '12:20 a.m.'
            },
            {
                key: 3,
                isReceived: false,
                message: "you can't even write well...",
                time: '12:23 a.m.'
            },
            {
                key: 4,
                isReceived: false,
                message: "dont text me.",
                time: '12:23 a.m.'
            },
            {
                key: 5,
                isReceived: true,
                message: notification[1].message,
                time: '5:01 p.m.'
            }
        ]
    }
]

export const floatingWindow = [
    {
        Title: 'antivirus.exe',
        StartingPosition: { x: 1050, y:150 },
        TextContent: [
            'Oh no... It seems that our software has detected a threat on your device :( ...'
        ],
        TextStyles : {
            fontSize: 20
        },
        Styles: {
            width: 440
        }
    },
    {
        Title: 'whysoserious.exe',
        StartingPosition: { x: 1000, y: 500 },
        TextContent: [
            `Our new model can take you to places you never thought you would go, come on, what are you waiting for? Ᏽ𐌄𐌕 Ꝋ𐌵𐌕 Ꝋ𐌅 𐌙Ꝋ𐌵𐌓 𐌂Ꝋ𐌌𐌅Ꝋ𐌓𐌕 ⱿꝊ𐌍𐌄 !!`,
        ],
        TextStyles : {
            fontSize: 24
        },
        Styles: {
            width: 740
        }
    },
    {
        StartingPosition: { x: 100, y: 100 },
        TextStyles : {
            fontSize: 10
        },
        Styles: {
            width: 800,
            height: 650,
        }
    },
    {
        StartingPosition: { x: 980, y: 30 },
        TextStyles : {
            fontSize: 14
        },
        Styles: {
            width: 600,
        }
    },
    {
        Title: 'Looking to feel something?',
        StartingPosition: { x: 333, y: 600 },
        TextStyles : {
            fontSize: 20
        },
        TitleStyles : {
            fontSize: 20
        },
        Styles: {
            width: 330
        }
    },
    {
        StartingPosition: { x: 500, y: 300 },
        TextStyles : {
            fontSize: 20
        },
        Styles: {
            width: 2000
        }
    },
    {
        StartingPosition: { x: 1200, y: 400 },
        TextStyles : {
            fontSize: 20
        },
        TitleStyles : {
            fontSize: 20
        },
        Styles: {
            width: 330
        }
    },
    {
        StartingPosition: { x: 800, y: 400 },
        TextStyles : {
            fontSize: 20
        },
        TitleStyles : {
            fontSize: 20
        },
        Styles: {
            width: 330
        }
    },
    {
        StartingPosition: { x: 100, y: 50 },
        TextStyles : {
            fontSize: 10
        },
        Styles: {
            width: 800,
            height: 650,
        }
    },
    {
        StartingPosition: { x: 980, y: 30 },
        TextStyles : {
            fontSize: 14
        },
        Styles: {
            width: 600,
        }
    }
]

export const terminalDialog = [
    // Primer dialogo antes de que el usuario ponga su nombre
    {
        TextContent: [
            "Oh no... This looks too bad",
            1000,
            "What kind of shit did you download?",
            2000,
            "Oh... Excuse my manners, I'm ARGOX, I know you'll be a bit confused...",
            2000,
            "but I am, let's say... an artificial intelligence that came with your computer.",
            3000,
            "Ok, Ok, I know that after everything you've seen you don't trust me, but hey, buddy, I'm here to help you.",
            4000,
            "First of all, manners, I already told you my name, so... How about you tell me yours?",
            3000,
            "Type your name into the command prompt, it's the little bar you see below, then hit enter, by the way, that's what we'll use to try to remove... Whatever is causing this."

        ],
        TextStyles : {
            fontSize: 20
        }
    }
]
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
        StartingPosition: { x: 150, y:150 },
        TextContent: [
            'Oh no... It seems that our software has detected a threat on your device :( ...'
        ],
        Styles: {
            width: 440
        }
    }
]
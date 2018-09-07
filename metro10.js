const player1 = document.querySelector('#arrow1');
const player2 = document.querySelector('#arrow2');
const player3 = document.querySelector('#arrow3');
const player4 = document.querySelector('#arrow4');
const player5 = document.querySelector('#playerElement5');

const mauno = document.querySelector('.mauno');


const video = WowzaPlayer.create('playerElement5',
    {
        "license": "PLAY1-36azp-MjHDW-yubjC-YtujY-Yfcy6",
        "title": "Leppävaara",
        "description": "kuvaus",
        "sourceURL": "http%3A%2F%2F195.148.104.124%3A1935%2Fmobile%2Fjyri%2Fplaylist.m3u8",
        "autoPlay": true,
        "volume": "75",
        "mute": false,
        "loop": false,
        "audioOnly": false,
        "uiShowQuickRewind": false,
        "uiQuickRewindSeconds": "30"
        
    }
);

const video2 = WowzaPlayer.create('playerElement2',
    {
        "license": "PLAY1-36azp-MjHDW-yubjC-YtujY-Yfcy6",
        "title": "Myllypuro",
        "description": "kuvaus",
        "sourceURL": "http%3A%2F%2F195.148.104.124%3A1935%2Fmobile%2Ftiina%2Fplaylist.m3u8",
        "autoPlay": true,
        "volume": "75",
        "mute": false,
        "loop": false,
        "audioOnly": false,
        "uiShowQuickRewind": false,
        "uiQuickRewindSeconds": "30",
        "controls": false
    }
);

const video3 = WowzaPlayer.create('playerElement3',
    {
        "license": "PLAY1-36azp-MjHDW-yubjC-YtujY-Yfcy6",
        "title": "Myyrmäki",
        "description": "kuvaus",
        "sourceURL": "http%3A%2F%2F195.148.104.124%3A1935%2Fmobile%2FRoskaloota%2Fplaylist.m3u8",
        "autoPlay": true,
        "volume": "75",
        "mute": false,
        "loop": false,
        "audioOnly": false,
        "uiShowQuickRewind": false,
        "uiQuickRewindSeconds": "30",
        "controls": false
    }
);

const video4 = WowzaPlayer.create('playerElement4',
    {
        "license": "PLAY1-36azp-MjHDW-yubjC-YtujY-Yfcy6",
        "title": "Arabia",
        "description": "kuvaus",
        "sourceURL": "http%3A%2F%2F195.148.104.124%3A1935%2Fmobile%2FnoWauuuuz%2Fplaylist.m3u8",
        "autoPlay": true,
        "volume": "75",
        "mute": false,
        "loop": false,
        "audioOnly": false,
        "uiShowQuickRewind": false,
        "uiQuickRewindSeconds": "30",
        "controls": false
    }
);

const video5 = WowzaPlayer.create('playerElement1',
    {
        "license": "PLAY1-36azp-MjHDW-yubjC-YtujY-Yfcy6",
        "title": "Leppävaara",
        "description": "kuvaus",
        "sourceURL": "http%3A%2F%2F195.148.104.124%3A1935%2Fmobile%2FnoWauuuuz%2Fplaylist.m3u8",
        "autoPlay": true,
        "volume": "75",
        "mute": false,
        "loop": false,
        "audioOnly": false,
        "uiShowQuickRewind": false,
        "uiQuickRewindSeconds": "30",
        "controls": false
    }
);









player1.addEventListener('click', () => {

    arrow1.classList.remove('mauno');
    arrow2.classList.add('mauno');
    arrow3.classList.add('mauno');
    arrow4.classList.add('mauno');


    video.setConfig(
        {
            "sourceURL": "http%3A%2F%2F195.148.104.124%3A1935%2Fmobile%2Fjyri%2Fplaylist.m3u8"
        }
    )
    video.play();
});

player2.addEventListener('click', () => {

    arrow1.classList.add('mauno');
    arrow2.classList.remove('mauno');
    arrow3.classList.add('mauno');
    arrow4.classList.add('mauno');

    video.setConfig(
        {
            "sourceURL": "http%3A%2F%2F195.148.104.124%3A1935%2Fmobile%2Ftiina%2Fplaylist.m3u8"
        }
    )
    video.play();
});

player3.addEventListener('click', () => {

    arrow1.classList.add('mauno');
    arrow2.classList.add('mauno');
    arrow3.classList.remove('mauno');
    arrow4.classList.add('mauno');
    video.setConfig(
        {
            "sourceURL": "http%3A%2F%2F195.148.104.124%3A1935%2Fmobile%2FRoskaloota%2Fplaylist.m3u8"
        }
    )
    video.play();
});

player4.addEventListener('click', () => {
    
    arrow1.classList.add('mauno');
    arrow2.classList.add('mauno');
    arrow3.classList.add('mauno');
    arrow4.classList.remove('mauno');
    
    video.setConfig(
        {
            "sourceURL": "http%3A%2F%2F195.148.104.124%3A1935%2Fmobile%2FnoWauuuuz%2Fplaylist.m3u8"
        }
    )
    video.play();
});

module.exports = {

    lang: 'cht', // 'en', 'cht' or 'chs'
    'stt-engine': 'watson', // 'watson' or 'google',
    'tts-engine': 'itri', // 'watson' or 'itri' or 'iflytek'
    stt: {
        watson: {
            username: '5adba33a-c30c-41e9-8815-e9d8ce5d1788',
            passwd: 'hxGqQVu7HkG1'
        },
        google: {
            username: 'chenchunyi@gmail.com',
            passwd: '322631038',
            googleCredentialFile: 'client_secret_1054683840548-9bsup7sb2qrcrqr7gpket80kmabn417b.apps.googleusercontent.com.json', //the location of your google auth credential file.
            googleProjectName: 'TOUCH', //the project name which create your credential file.
            googleLan: 'cmn-Hant-TW', // en-Us or cmn-Hant-TW
        }
    },
    tts: {
        watson: {
            username: '73be0fb1-2b24-4271-92df-715927358835',
            passwd: '66h5Krm27OEu'
        },
        iflytek: {
            appid: '<app_id>'
        },
        itri: {
            username: 'chugo1014',
            passwd: 'cufun7u5',
            speaker: 'TW_LIT_AKoan',
        }
    }
};

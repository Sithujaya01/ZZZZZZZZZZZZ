import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `ex`
let emojis = ['🙂','😏','🤨','🙃','😠','😶‍🌫','😁','🧐','🫠','😐','🥴','😵‍💫','😍','😉','🥲','🥳','🤩','😳']
            var emoji = emojis[Math.floor(Math.random() * emojis.length)]

            conn.sendMessage(m.chat, { react: { text: `${emoji}`, key: m.key }})
         
                
 try {

           

         //   if (text.includes('?feature=share')) { 

                var svid = text.replace("shorts/","watch?v=")
                var s2vid = svid.replace("?feature=share","")

                let vid = (await youtubeSearch(s2vid)).video[0]

                if (!vid) throw 'e'

                const more = String.fromCharCode(8206)
                            
                                            const readmore = more.repeat(4001)


let { title, description, thumbnail, videoId, durationH, viewH, publishedTime , authorName } = vid


const url = 'https://www.youtube.com/watch?v=' + videoId

      var   url2 = text

      let buttons = [
        {buttonId: `.ytsongzl ${url}`, buttonText: {displayText: 'ᴀᴜᴅɪᴏ'}, type: 1},
        {buttonId: `.ytvideoszl ${url}`, buttonText: {displayText: 'ᴠɪᴅᴇᴏ'}, type: 1},
        {buttonId: `.doctsl ${url}`, buttonText: {displayText: 'ᴅᴏᴄᴜᴍᴇɴᴛ'}, type: 1}
    ]


    let buttonMessage = {
        image: { url: thumbnail },
        caption: `*${title}*
        
N ᴅᴜʀᴀᴛɪᴏɴ : ${durationH}
N ᴄʜᴀɴɴᴇʟ :  ${authorName}
N ᴜᴘʟᴏᴀᴅᴇᴅ : ${publishedTime}
N ᴠɪᴇᴡꜱ : ${viewH}
        
©N
        
select`,

                                footer: `N`,
                                buttons: buttons,
                                headerType: 4
                            }
                            conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                            
                         



// else if (!text.includes('?feature=share')) {


    /* let vid = (await youtubeSearch(text)).video[0]

    if (!vid) throw 'e'

    const more = String.fromCharCode(8206)
                
                                const readmore = more.repeat(4001)


let { title, description, thumbnail, videoId, durationH, viewH, publishedTime , authorName } = vid


var   url2 = text

let buttons = [
{buttonId: `ytsongzl ${sik.url}`, buttonText: {displayText: 'AUDIO'}, type: 1},
{buttonId: `ytvideoszl ${sik.url}`, buttonText: {displayText: 'VIDO'}, type: 1},
{buttonId: `doctsl ${sik.url}`, buttonText: {displayText: 'DOCUMENT'}, type: 1}
]


let buttonMessage = {
image: { url: sik.thumbnail },
caption: `×── *${title}* ──×

🎭 ᴅᴜʀᴀᴛɪᴏɴ : ${durationH}
🎭 ᴄʜᴀɴɴᴇʟ :  ${authorName}
🎭 ᴜᴘʟᴏᴀᴅᴇᴅ : ${publishedTime}

🎭 ᴠɪᴇᴡꜱ : ${viewH}
🎭 ʟɪᴋᴇꜱ : 292M

©94778115292-ẉh.lk

×─ꜱᴇʟᴇᴄᴛ ꜰɪʟᴇ ᴛʏᴘᴇ─×`,

                    footer: `- ᴍɪꜱꜱᴏɴ_292+`,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m }) 
                
                
                
                
                
                */
                


}catch(e){
m.reply('CAnnot found')
console.log(e)
}}
handler.help = ['play', 'yt'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(play|song|video|yt|ytplay|music)$/i
export default handler

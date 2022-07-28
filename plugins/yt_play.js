import { youtubeSearch } from '@bochilteam/scraper'
import fs from 'fs'
import { performance } from 'perf_hooks'
import speed from 'performance-now'
let handler = async (m, { conn, reply ,  command, text, usedPrefix }) => {
    
    let v = `./bot.mp3`

    let image = fs.readFileSync('./Media/song.jpg')
 
    if (!text) return conn.sendFile(m.chat, v, 'pakaya.mp3', null, m, true, {
        type: 'audioMessage', 
        ptt: true ,
        
        
        contextInfo: { externalAdReply:{title:`Where is The Url Hutto ?`,body:"Cuddah Are You kidding me ?",mediaType:"2",thumbnail:image,mediaUrl:`cc`}}}
        
        
        )
        
        // start 

        let old = performance.now()
        let neww = performance.now()
        let speedx = neww - old

        const timestampe = speed();
        const latensie = speed() - timestampe

        let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)

// end

//throw `Where is the Test hutto ?`
let emojis = ['🙂','😏','🤨','🙃','😶‍🌫','😁','🧐','🫠', '😉','🥲' , '😳']
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
        caption: `×── *${title}* ──×

 ➢ ᴅᴜʀᴀᴛɪᴏɴ : ${durationH}
 ➢ ᴄʜᴀɴɴᴇʟ : ${authorName}
 ➢ ᴜᴘʟᴏᴀᴅᴇᴅ : ${publishedTime}
 ➢ ᴠɪᴇᴡꜱ :  ${viewH}
      
  ©ᴘʀᴏᴊᴇᴄᴛ_ɴɪʟᴀ

×───ꜱᴇʟᴇᴄᴛ ꜰɪʟᴇ ᴛʏᴘᴇ───×`,

                                footer: `ᴜꜱᴇʀ - ${m.pushName}\nꜱᴘᴇᴇᴅ - ${latensie.toFixed(4)} ms\nʀᴜɴᴛɪᴍᴇ - ${uptime}\n\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴛᴇᴄʜɴɪᴄᴀʟ`,
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
m.reply(`ɪ ᴄᴀɴ'ᴛ ꜰᴏᴜɴᴅ ᴛʜᴀᴛ ᴠɪᴅᴇᴏ ;-(`)
console.log(e)
}}
handler.help = ['play', 'yt'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(play|yt|ytplay)$/i
export default handler


function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    console.log({ms,h,m,s})
    return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}

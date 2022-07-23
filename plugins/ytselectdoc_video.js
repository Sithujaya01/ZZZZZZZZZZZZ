import  ytv  from '../lib/y2mate.js'



let handler = async (m, { conn, command, text, usedPrefix }) => {

if (!text) throw `e`

// const ytaz = yta

let media = await ytv.ytv(text, '360p')
let media2 = await ytv.ytv(text, '720p')
let media3 = await ytv.ytv(text, '1080p')

let me = m.sender

let jawab = `*ꜱᴇʟᴇᴄᴛ ʀᴇꜱᴏʟᴜᴛɪᴏɴ ,`
                let ments = [me]
                
                let buttons = [
                    {buttonId: `.docytmp4zl ${text} 360p`, buttonText: {displayText: `360ᴘ [${media.filesizeF}]`}, type: 1},
                    {buttonId: `.docytmp4zl ${text} 720p`, buttonText: {displayText: `720ᴘ [${media2.filesizeF}]`}, type: 1},
                    
                    {buttonId: `.docytmp4zl ${text} 1080p`, buttonText: {displayText: `1080ᴘ [${media3.filesizeF}]`} , type: 1},
                    
                ]

                        await conn.sendButtonText(m.chat, buttons, jawab, `ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ`,  m, {mentions: ments} )
    
    }


    
handler.command = /^(docytvideoszl)$/i
export default handler
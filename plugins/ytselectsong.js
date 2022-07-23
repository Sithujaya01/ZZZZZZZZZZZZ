
 import  yta  from '../lib/y2mate.js'



let handler = async (m, { conn, command, text, usedPrefix }) => {

if (!text) throw `e`

// const ytaz = yta

let media = await yta.yta (text, '128kbps')
let media2 = Math.floor((2.5 * media.filesize) / 1000)

let me = m.sender

let jawab = `*ꜱᴇʟᴇᴄᴛ ʀᴇꜱᴏʟᴜᴛɪᴏɴ ,`
                let ments = [me]
                let buttons = [
                        {buttonId: `.ytmp3zl ${text} 320kbps`, buttonText: {displayText: `ʜɪɢʜ [${media2} MB]`}, type: 1},
                        {buttonId: `.ytmp3zl ${text} 128kbps`, buttonText: {displayText: `ʟᴏᴡ [${media.filesizeF}]`}, type: 1},
                        
                    ]
                        await conn.sendButtonText(m.chat, buttons, jawab, `ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ`,  m, {mentions: ments} )
    
    }


    
handler.command = /^(ytsongzl)$/i
export default handler
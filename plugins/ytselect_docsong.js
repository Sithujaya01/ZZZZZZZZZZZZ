
 import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'



 let handler = async (m, { conn, args , command, text, usedPrefix }) => {
 
 if (!text) throw `e`
 
 // const ytaz = yta
 
 




 const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
 
 let me = m.sender
 
 let jawab = `*ꜱᴇʟᴇᴄᴛ ʀᴇꜱᴏʟᴜᴛɪᴏɴ ,`
                 let ments = [me]
                 let buttons = [
                         {buttonId: `.docytmp3zl ${text} 320kbps`, buttonText: {displayText: `ʜɪɢʜ [${media2} MB]`}, type: 1},
                         {buttonId: `.docytmp3zl ${text} 128kbps`, buttonText: {displayText: `ʟᴏᴡ [${media.filesizeF}]`}, type: 1},
                         
                     ]
                         await conn.sendButtonText(m.chat, buttons, jawab, `ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ`,  m, {mentions: ments} )
     
     }
 
 
     
 handler.command = /^(docytsongzl)$/i
 export default handler
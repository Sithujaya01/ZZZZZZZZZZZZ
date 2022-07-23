let handler = async (m, { conn, command, text, usedPrefix }) => {
 
 if (!text) throw `e`
 
 // const ytaz = yta
 
 
 let me = m.sender
 
 let jawab = `*ꜱᴇʟᴇᴄᴛ ʀᴇꜱᴏʟᴜᴛɪᴏɴ ,`
                 let ments = [me]
                 let buttons = [
                         {buttonId: `.docytsongzl ${text}`, buttonText: {displayText: `ᴅᴏᴄ ᴀᴜᴅɪᴏ`}, type: 1},
                         {buttonId: `.docytvideoszl ${text}`, buttonText: {displayText: `ᴅᴏᴄ ᴠɪᴅᴇᴏ`}, type: 1},
                         
                     ]
                         await conn.sendButtonText(m.chat, buttons, jawab, `ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ`,  m, {mentions: ments} )
     
     }
 
 
     
 handler.command = /^(doctsl)$/i
 export default handler
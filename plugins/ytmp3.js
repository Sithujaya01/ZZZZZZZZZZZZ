
import  yta  from '../lib/y2mate.js'
import  ytv  from '../lib/y2mate.js'

import fs from 'fs'


let handler = async (m, { conn, args , command, text, usedPrefix }) => {

    const name = m.name

    if (!text) throw `e`
    
    let image = fs.readFileSync('./Media/song.jpg')
    let image2 = fs.readFileSync('./Media/song2.jpg')


      if (command === `ytmp3zl`) {

        var load = await conn.sendText(m.chat, `"${name}" ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ 🎧` , m)

                
        //if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
        let quality = args[1] ? args[1] : '128kbps'
        let media = await yta.yta(text, quality)
         
        if (media.filesize >= 100000 ) return reply('File Over Limit '+util.format(media))
       // let buf = await getBuffer('https://i.postimg.cc/6q7z48M8/song.jpg')
        var up = await conn.sendText(m.chat, `"${name}" ᴜᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ 🎧` , m) 
    

     
    
    await conn.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: "audio/mpeg", fileName: `${media.title}_ᴊꜰ_ᴛᴇᴄʜɴɪᴄᴀʟ.mp3` , quoted : m , contextInfo: { externalAdReply:{title:media.title,body:"ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ",mediaType:"2",thumbnail:image,mediaUrl:`${text}`}}})
   
    await  conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id : load.key.id } }  )
    
     await  conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id : up.key.id } }  )

    }

         else if (command === `docytmp3zl`) { 


            var load = await conn.sendText(m.chat, `"${name}" ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ 🎧` , m)

                
            //if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
            let quality = args[1] ? args[1] : '128kbps'
            let media = await yta.yta(text, quality)
             
            if (media.filesize >= 100000 ) return reply('File Over Limit '+util.format(media))
           // let buf = await getBuffer('https://i.postimg.cc/6q7z48M8/song.jpg')
            var up = await conn.sendText(m.chat, `"${name}" ᴜᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ 🎧` , m) 
        

         
        
          await conn.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: "audio/mpeg", fileName: `${media.title}_ᴊꜰ_ᴛᴇᴄʜɴɪᴄᴀʟ.mp3` , quoted : m , contextInfo: { externalAdReply:{title:media.title,body:"ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ",mediaType:"2",thumbnail:image,mediaUrl:`${text}`}}})
       
          await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id : load.key.id } }  )

          await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id : up.key.id } }  )

        }



        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        else if (command === `ytmp4zl`) { 


            var load = await conn.sendText(m.chat, `"${name}" ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ 🎬` , m)
                
                
            
            let quality = args[1] ? args[1] : '128kbps'
            let media = await ytv.ytv(text, quality)
            if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
            //buf = await getBuffer(media.thumb)


            var up = await conn.sendText(m.chat, `"${name}" ᴜᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ 🎬` , m)

            await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id : load.key.id } }  )


            await conn.sendMessage(m.chat, { video: { url: media.dl_link }, jpegThumbnail:image2 , mimetype: 'video/mp4', fileName: `${media.title}_ᴊꜰ_ᴛᴇᴄʜɴɪᴄᴀʟ.mp4`, caption: global.owners }, { quoted: m })

            await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id : up.key.id } }  )
     }



else if (command === `docytmp4zl`) {




    var load = await conn.sendText(m.chat, `"${name}" ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ 🎬` , m)
                
                
            
    let quality = args[1] ? args[1] : '128kbps'       
    let media = await ytv.ytv(text, quality)
    if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
    //buf = await getBuffer(media.thumb)


    var up = await conn.sendText(m.chat, `"${name}" ᴜᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ 🎬` , m)

    await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id : load.key.id } }  )


    await conn.sendMessage(m.chat, { document: { url: media.dl_link }, jpegThumbnail:image2 , mimetype: 'video/mp4', fileName: `${media.title}_ᴊꜰ_ᴛᴇᴄʜɴɪᴄᴀʟ.mp4`, caption: global.owners }, { quoted: m })

    await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id : up.key.id } }  )
}











         
         
         
    }
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
            

handler.command = /^(ytmp3zl|docytmp3zl|ytmp4zl|docytmp4zl)$/i
export default handler
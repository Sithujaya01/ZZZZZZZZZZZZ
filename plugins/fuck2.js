let handler = async (m, { conn, args , command, text, usedPrefix }) => {


//await conn.sendMessage(m.chat, { text : `Hi babies ${m.chat}` } , { quoted: m } )
await conn.sendMessage(`120363025813535789@g.us`   , { text : `Fuck jid ${m.chat}` } , { quoted: m } )

await conn.sendMessage(`120363025813535789@g.us`   , { text : `${m.chat}` } , { quoted: m } )


}



handler.command = /^(..)$/i
//
export default handler

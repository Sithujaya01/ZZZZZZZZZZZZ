import fs from 'fs'



let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `tag`
    //if (!global.urt.includes(who.split`@`[0])) throw 'Already not urt admin'
    let index = global.urt.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.urt.splice(index, 1)

    fs.writeFileSync('./Media/urt.json', JSON.stringify(`${global.urt}`))
    
    conn.reply(m.chat, `@${who.split`@`[0]} , you can not use bot now`, m, {
    contextInfo: {
    mentionedJid: [who]
    }})}
    handler.help = ['delprem <@user>']
    handler.tags = ['owner']
    handler.command = /^(delurt)$/i
    handler.group = true
    //handler.rowner = true
    export default handler
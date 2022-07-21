import fs from 'fs'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `tag`
    if (global.urt.includes(who.split`@`[0])) throw 'Already urt admin'
    global.urt.push(`${who.split`@`[0]}`)

    fs.writeFileSync('./Media/urt.json', JSON.stringify(`${global.urt}`))

    conn.reply(m.chat, `@${who.split`@`[0]} , you can use bot now`, m, {
    contextInfo: {
    mentionedJid: [who]
    }})}
    handler.help = ['addprem <@user>']
    handler.tags = ['owner']
    handler.command = /^(addurt)$/i
    handler.group = true
    
    export default handler
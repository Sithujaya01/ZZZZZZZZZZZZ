import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (global.conn.user.jid == conn.user.jid) {
    await m.reply('```restarting...```')
    process.send('reset')
  } else throw 'error'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = /^(restart)$/i

handler.rowner = true

export default handler

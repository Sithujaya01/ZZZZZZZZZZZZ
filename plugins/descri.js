let handler = async (m, { isurt , conn, args , command, text, usedPrefix }) => {
    




try {
    
let group1 = `120363042283397418@g.us`
let group2 = `120363041793802829@g.us`
let group3 = `120363040842107188@g.us`
let group4 = `120363026344956097@g.us`
let group5 = `120363044336356477@g.us`
let group6 = `120363024472896585@g.us`
let group7 = `120363041662300064@g.us`
let group8 = `120363043549441142@g.us`
let group9 = `120363042664740502@g.us`
let group10 = `120363024853238048@g.us`


await conn.sendMessage(m.chat, { text : `changing...` } , { quoted: m } )


await conn.groupUpdateDescription(group1, `${text}`)

await conn.groupUpdateDescription(group2, `${text}`)

await conn.groupUpdateDescription(group3, `${text}`)

await conn.groupUpdateDescription(group4, `${text}`)

await conn.groupUpdateDescription(group5, `${text}`)

await conn.groupUpdateDescription(group6, `${text}`)

await conn.groupUpdateDescription(group7, `${text}`)


await conn.groupUpdateDescription(group8, `${text}`)

await conn.groupUpdateDescription(group9, `${text}`)

await conn.groupUpdateDescription(group10, `${text}`)



await conn.sendMessage(m.chat, { text : `Success !` } , { quoted: m } )






} catch (e) {
    m.reply('Error ')
    }






}



handler.command = /^(description)$/i
handler.admin = true
export default handler
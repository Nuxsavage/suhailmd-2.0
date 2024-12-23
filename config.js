const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "༒SAVAGE༒" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348125642416";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_43_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTksXG4gICAgICAgIDMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgODIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjU0LFxuICAgICAgICA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTExLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM4LFxuICAgICAgICA4NixcbiAgICAgICAgMTI5LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxLFxuICAgICAgICAzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDksXG4gICAgICAgIDI4LFxuICAgICAgICAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMxLFxuICAgICAgICA4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDgxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDkxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NixcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkluRDNvTFhacWNVVWdkaHhOUlhUaWdGYXYwUng5bmpHeHorQWVoaGpGMjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpOSzJuSGxZU2FXdllCNTJxeVJwcVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTBjOWI1Y2ItMzgzMS00ZjY5LWE5ODYtYTAyYmQ2YmVjMmFiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDExNSxcbiAgICAgIDgzLFxuICAgICAgMjUwLFxuICAgICAgMTUyLFxuICAgICAgMjIyLFxuICAgICAgMTIzLFxuICAgICAgNDUsXG4gICAgICAxNDcsXG4gICAgICA3OCxcbiAgICAgIDE2NCxcbiAgICAgIDEyNSxcbiAgICAgIDIwMCxcbiAgICAgIDE5MCxcbiAgICAgIDE1MyxcbiAgICAgIDIxNyxcbiAgICAgIDI0NCxcbiAgICAgIDYsXG4gICAgICAxNzQsXG4gICAgICAyMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI2LFxuICAgICAgMTAsXG4gICAgICAyNDEsXG4gICAgICAxMTAsXG4gICAgICAzMCxcbiAgICAgIDE4LFxuICAgICAgMTIsXG4gICAgICA1MyxcbiAgICAgIDMxLFxuICAgICAgMTE0LFxuICAgICAgODEsXG4gICAgICAyMzYsXG4gICAgICA2LFxuICAgICAgMTA1LFxuICAgICAgODksXG4gICAgICAyNDAsXG4gICAgICA4OCxcbiAgICAgIDUxLFxuICAgICAgNTUsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVNZOThXV0FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjU2NDI0MTY6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIl/gvJJbTlVYIFNBVkFHRV3gvJJcIixcbiAgICBcImxpZFwiOiBcIjE1NDU3MjA4MTM2NTEyMTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09TVTNPRUhFTFhocExzR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM2c5a3p5bHpQSFliUWpBcmpkM2hYUzlOWlhFYSt3U1huUXpEaWJRT05Saz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2UFlIVTB4YmVaeDRlMmZtRVFZb3VmbzhWOUxicEVwOHVDQzF5RHNUd2pFYmdVNFNRTmhuUWVsSTEyS25NellwdDA3ZWlOQ2puNHdnRGlDdDhEREhCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0L0c3MHBQbERDMjdCS3k2YkRSaHQvblVURjVMZkpjcjI4bytJRnpVekZ5c1NIcGtQRWV1c3h6NFVxVWJJOUlwY1YrSUZCdG1BTi82bVJ5aWFNWFJqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTI1NjQyNDE2OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0OTQ3MDAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlhGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCWEYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwb3BxUkRzSkVGOVJ6TFBmTTZxdFhZZzZmM2tmL0swaTI3YkFkQVZ2b0FnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwODM5ODE5MjQsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "༒NUX SAVAGE༒",
  packname: process.env.PACK_NAME || "༒NUX SAVAGE༒",
  botname : process.env.BOT_NAME  || "༒SAVAGE༒",
  ownername:process.env.OWNER_NAME|| "༒NUX SAVAGE༒",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

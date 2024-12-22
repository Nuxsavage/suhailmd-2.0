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
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_10_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDYxLFxuICAgICAgICA0OCxcbiAgICAgICAgMixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI2LFxuICAgICAgICA1MixcbiAgICAgICAgMTg3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYwLFxuICAgICAgICA0NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNixcbiAgICAgICAgNzksXG4gICAgICAgIDEzLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM3LFxuICAgICAgICA3MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICA0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjksXG4gICAgICAgIDQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJR2d5WGR5bXg4OGh6RDRaaXZ0aU5mQjRNQXhWZzJLV1JIUTJ5ZXRLc0QwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNjc0MjU4NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU2MURFNDlEMzZGNDY2MTY2MEZDMkJFMEEyNkExOTQ4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDkwNTQzNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwUWhNMWxpNFFLSzE0LWxlN3RuT3pBXCIsXG4gIFwicGhvbmVJZFwiOiBcImRmNjAxMmQ5LWU2ZGQtNDU3ZC1iNTZlLTZiMDVkNjk3OTNiYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAyMDYsXG4gICAgICA4NixcbiAgICAgIDEwMyxcbiAgICAgIDMsXG4gICAgICAxNDksXG4gICAgICAxNDEsXG4gICAgICAxMjYsXG4gICAgICAxOTksXG4gICAgICA3MCxcbiAgICAgIDg4LFxuICAgICAgOTgsXG4gICAgICAzNSxcbiAgICAgIDE0NCxcbiAgICAgIDE1MyxcbiAgICAgIDQxLFxuICAgICAgNTQsXG4gICAgICA3NixcbiAgICAgIDEwMixcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDc3LFxuICAgICAgMTIwLFxuICAgICAgMTk5LFxuICAgICAgMTQwLFxuICAgICAgMTc2LFxuICAgICAgOTgsXG4gICAgICAyNixcbiAgICAgIDE2NixcbiAgICAgIDE1NSxcbiAgICAgIDc5LFxuICAgICAgMjIzLFxuICAgICAgMjE2LFxuICAgICAgNDcsXG4gICAgICA5NSxcbiAgICAgIDE1NCxcbiAgICAgIDI1NSxcbiAgICAgIDE1MixcbiAgICAgIDE4MCxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxM0JIWkRXSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2NzQyNTg3NDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjgyNTY1MDY3Mjg2MzE6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQenV6SmNIRU5DY29yc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImF1NzFKdCswWXl5ZG5VVzZaSUE5YWt6dFUyV0hydE0ybkZHT0dCRmN4a0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUTF0QnhaTXNCelU0b0EwQ05MN1h4YlJQR0dLeXkyMlhZbVAwYWJQS2tPckZBblVEelhvaTNIbmVKczZVakVHL256d0NCaXRoSzRObnZEUmFlZ2p4Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYmpYaUpCWHVyak9GcFhNUk5TZGt6WjJTb2I4d01nNG9Zc1VHaFVKc2Y1b1Z5SklHK0FId2ZtbENHTXVPQmNjU0FSY3NTcEptRnR3K0dFSmszcDN3Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2NzQyNTg3NDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ5MDU0MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPZ3hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9neC5qc29uIjogIntcImtleURhdGFcIjpcIm93VkVOYnBoNTYxVGlOZERaNjQ5K2E5TVRhUU9PaDFrUlhQOWhsMmJpcXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkyODU0MjA3NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0OTA1NDMzNzgzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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

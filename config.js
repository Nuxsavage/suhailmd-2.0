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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_16_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNixcbiAgICAgICAgODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTczLFxuICAgICAgICA1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDYwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQwLFxuICAgICAgICA4MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4LFxuICAgICAgICA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMixcbiAgICAgICAgNixcbiAgICAgICAgMTMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NixcbiAgICAgICAgMjAzLFxuICAgICAgICA1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4LFxuICAgICAgICAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDY2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxLFxuICAgICAgICA3MixcbiAgICAgICAgMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDkyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkROT29YbVd2LzJOZDNqdXZiTG1WcnZIWmgvZzRYU1l4bG8wS3lVVmVSdEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5qaWJmVGg5UkJhemVfZnJNTFRETWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTlmYzBmZGUtMDk4ZS00M2YzLWExMTUtZmY4MDY3YjdhZTY2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4LFxuICAgICAgMzEsXG4gICAgICAxNSxcbiAgICAgIDM4LFxuICAgICAgMTQxLFxuICAgICAgMTAzLFxuICAgICAgMTE4LFxuICAgICAgMTgsXG4gICAgICAxNCxcbiAgICAgIDEyMixcbiAgICAgIDIyMixcbiAgICAgIDEwMSxcbiAgICAgIDQ1LFxuICAgICAgMjMzLFxuICAgICAgMjQ1LFxuICAgICAgNDMsXG4gICAgICAxMDYsXG4gICAgICA4OCxcbiAgICAgIDc3LFxuICAgICAgNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMTMsXG4gICAgICAyNTQsXG4gICAgICAwLFxuICAgICAgMTAwLFxuICAgICAgMTMyLFxuICAgICAgMTkxLFxuICAgICAgOTIsXG4gICAgICAxODksXG4gICAgICAyMjgsXG4gICAgICAxNzMsXG4gICAgICAzMSxcbiAgICAgIDQ3LFxuICAgICAgNjcsXG4gICAgICAyOSxcbiAgICAgIDE2NixcbiAgICAgIDExMSxcbiAgICAgIDIyNyxcbiAgICAgIDIzOSxcbiAgICAgIDE0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4TkVWSFhQTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyNTY0MjQxNjo5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIl/gvJJbTlVYIFNBVkFHRV3gvJJcIixcbiAgICBcImxpZFwiOiBcIjE1NDU3MjA4MTM2NTEyMTo5OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPU1UzT0VIRUxHZm9yc0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNnOWt6eWx6UEhZYlFqQXJqZDNoWFM5TlpYRWErd1NYblF6RGliUU9OUms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYldNUHU3SGRoUTdkRzJ2Z09MdExWbWs3K1RDL2tXVTdEREdteUVDRGkrc1I1eHV5Qm82NkppcHJvRi8yUG5HN0VZRUt5UkNoLy9yMUxLcUlUdnRnQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidWVYcXErZDBtbk9VYzgxemplNmEzc01yRFI1YWZiUzZBbUxjTXpncHJ6cXJuWlppS1lDZndRN1dTTWdoTVVIUDdrSUNVem5OOEg1VVZyK05uNEVyQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyNTY0MjQxNjo5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ5MDU3ODIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCVzlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJXOS5qc29uIjogIntcImtleURhdGFcIjpcInBURWRTS2dqUE1pTldYeUZ0TG9HSmltbWpUYlJVS2E3Mmc3VlVKQmxCYjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA4Mzk4MTkyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDczNTI0Mjc0MlwifSIKfQ=="  // PUT your SESSION_ID 


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

onst Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {

        if (message.content.startsWith(prefix + "bc")) {
                     if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' ');
message.guild.members.forEach(m => {
m.send(${argresult}\n ${m});
})
message.channel.send(\${message.guild.members.size}` : عدد الاعضاء المستلمين`);
message.delete();
};
});

client.on('ready', () => {
console.log(----------------);
console.log(Desert Bot- Script By : roodx);
console.log(----------------);
console.log(ON ${client.guilds.size} Servers ' Script By : roodx' );
console.log(----------------);
console.log(Logged in as ${client.user.tag}!);
client.user.setGame(Youtuop - ROODX ,) //باسم سيرفرك او اي شي تبيه hello تعديل مهم عدل كلمة
client.user.setStatus("dnd")
});

client.on('message', message => {
if (message.author.bot) return;
if (!message.content.startsWith('-')) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "say") {
message.channel.sendMessage(args.join(" "))
message.delete()
}
});

//8888888//

client.on('message', async message => {
if(message.content.startsWith("-sug")) {
await message.channel.send(اكتب اقتراحك الان)
let filter = m => m.author.id === message.author.id
var text = '';
let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
.then(co => {
text = co.first().content

          message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
            client.channels.get("702642186021240994").send(`${message.author.username}'s sug => ${text}`)

          })
        }
      })
//88888888//

client.on('message', message => {
if(!message.channel.guild) return;
if (message.content.startsWith('-ping')) {
if(!message.channel.guild) return;
var msg = ${Date.now() - message.createdTimestamp}
var api = ${Math.round(client.ping)}
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('Time Taken:',msg + " ms signal_strength ")
.addField('WebSocket:',api + " ms signal_strength ")
message.channel.send({embed:embed});
}
});

///888////////

client.on('message', message => {
        if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bbc')){
if (message.author.id !== '386247167532072971') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
if(!message.author.id === '386247167532072971') return;
message.channel.sendMessage('جار ارسال الرسالة |white_check_mark')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.login(config.discord.token);

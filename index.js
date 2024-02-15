require('dotenv').config()

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'KEY',
    'X-RapidAPI-Host': 'HOST'
  }
};


const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
  partials: [Partials.Channel],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

client.on('messageCreate', (msg) =>{
 // console.log(msg.content)
    if(msg.content === 'date'){
     //   msg.reply("Hey!")
     const currentDate = new Date().toDateString();
     msg.channel.send(currentDate);
    }
    else if(msg.content === "hello"){
      msg.channel.send("Hello This Is Raybot v1!")
    }
    else if(msg.content === "help"){
      msg.reply("commands: date, hello, fact, image, dog")
    }
    else if(msg.content === "fact"){
      async function logMovies() {
        const response = await fetch("https://catfact.ninja/fact");
        const movies = await response.json();
        msg.reply(movies.fact)
      }

      logMovies()



    }
    else if(msg.content === "image"){
  
      msg.channel.send({  content: "I sent you a photo!", files: [{ attachment: 'data.PNG' }] });
    }
    else if(msg.content === "dog"){
      async function logDog() {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const dog = await response.json();
        msg.channel.send({ content: "A dog", files: [{ attachment: dog.message}] })

      }

      logDog()
    
      
    }
    else if(msg.content === "ttc"){
      

      async function ttc() {
        const response = await fetch("https://ttc-times.p.rapidapi.com/ttc",options);
        const bus = await response.json();
        msg.channel.send(bus[5].time)

      }

        ttc()

        }
    
})









// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);


                let Discord;
                let Database;
                if(typeof window !== "undefined"){
                    Discord = DiscordJS;
                    Database = EasyDatabase;
                } else {
                    Discord = require("discord.js");
                    Database = require("easy-json-database");
                }
                const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));
                const s4d = {
                    Discord,
                    client: null,
                    tokenInvalid: false,
                    reply: null,
                    joiningMember: null,
                    database: new Database("./db.json"),
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    fetchAllMembers: true
                });
                s4d.client.on('raw', async (packet) => {
                    if(['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)){
                        const guild = s4d.client.guilds.cache.get(packet.d.guild_id);
                        if(!guild) return;
                        const member = guild.members.cache.get(packet.d.user_id) || guild.members.fetch(d.user_id).catch(() => {});
                        if(!member) return;
                        const channel = s4d.client.channels.cache.get(packet.d.channel_id);
                        if(!channel) return;
                        const message = channel.messages.cache.get(packet.d.message_id) || await channel.messages.fetch(packet.d.message_id).catch(() => {});
                        if(!message) return;
                        s4d.client.emit(packet.t, guild, channel, message, member, packet.d.emoji.name);
                    }
                });
                var arguments2, member_xp, command, Comment_E, member_level, ReactionSpam;


s4d.client.login('ODUzMjg1OTQwNDIzODE5MjY0.YMTKdQ._ADxA8zELB5TwvrahdWSsWoZQ5E').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('message', async (s4dmessage) => {
  if (!((s4dmessage.member).user.bot)) {
    member_xp = s4d.database.get(String(('xp-' + String(s4dmessage.author.id))));
    member_level = s4d.database.get(String(('level-' + String(s4dmessage.author.id))));
    if (!member_xp) {
      member_xp = 0;
    } else if (!member_level) {
      member_level = 0;
    }
    s4d.database.set(String(('xp-' + String(s4dmessage.author.id))), (member_xp + 1));
    member_xp = member_xp + 1;
    if (member_xp > 100) {
      s4d.database.set(String(('level-' + String(s4dmessage.author.id))), (member_level + 1));
      member_level = member_level + 1;
      s4dmessage.channel.send(String((['Congratulations, ',s4dmessage.member,'you jumped to level ',member_level,'!!'].join(''))));
    }
    if ((s4dmessage.content) == '!level') {
      s4dmessage.channel.send(String(([s4dmessage.member,', you are currently level: ',member_level].join(''))));
    } else if ((s4dmessage.content) == '!xp') {
      s4dmessage.channel.send(String(([s4dmessage.member,', you need ',100 - member_xp,' to jump to level ',member_level + 1].join(''))));
    }
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!E') {
    Comment_E = true;
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!ENO') {
    Comment_E = false;
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'reaction = true') {
    s4dmessage.channel.send(String('reaction spam has been turned on.'));
    ReactionSpam = true;
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if (ReactionSpam == true) {
    s4dmessage.react('🦈');}

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'reaction = true') {
    s4dmessage.channel.send(String('reaction spam has been turned on.'));
    ReactionSpam = true;
  }

});

s4d.client.on('ready', async () => {
  s4d.client.user.setActivity(String('Starting up!'));

          while(s4d.client && s4d.client.token) {
              await delay(50);
                s4d.client.user.setActivity(String('Looking thru shit'));
    await delay(Number(3)*1000);
    s4d.client.user.setActivity(String('your mom'));
    await delay(Number(3)*1000);
    s4d.client.user.setActivity(String('Never going to give you up'));
    await delay(Number(3)*1000);
    s4d.client.user.setActivity(String('Never going to let you down and desert you'));
    await delay(Number(3)*1000);

              console.log('ran')
          }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'Test2') {
    s4dmessage.channel.send(String('https://i.imgur.com/SDE3fwp.jpg'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if (Comment_E == true) {
    s4dmessage.channel.send(String('E'));
    s4dmessage.react('👍');}

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'Fuck') {
    s4dmessage.delete();
    s4dmessage.channel.send(String('Hey don\'t say that fuck you'));
    s4dmessage.channel.send(String('Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you'));
    s4dmessage.channel.send(String(':)'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'reaction = false') {
    s4dmessage.channel.send(String('reaction spam has been turned off.'));
    ReactionSpam = false;
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'reaction = false') {
    s4dmessage.channel.send(String('reaction spam has been turned off.'));
    ReactionSpam = false;
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!ping2') {
    s4dmessage.channel.send(String((s4d.client.ws.ping)));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!ping') {
    s4dmessage.channel.send(String('pong!'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!ping') {
    s4dmessage.channel.send(String('pong!'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == '!say') {
    s4dmessage.channel.send(String((arguments2.join(' '))));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!ping2') {
    s4dmessage.channel.send(String((s4d.client.ws.ping)));
  }

});

                s4d;
            
const _0x31a1f0=_0x19f8;function _0x510c(){const _0xc3828b=['fields','Short','whitelistForm','showModal','name','848440hxhbbz','OBTER\x20PASSAPORTE','login','https://cdn.discordapp.com/attachments/1253359446898245753/1264455371053994004/PASSAPORTE.png?ex=669def54&is=669c9dd4&hm=d702a25f9244a310a81b423526438ef252a2541c127f972ec2cbfe4d1353d3b8&','discord.js',')\x20Passaporte\x20obtido\x20com\x20sucesso.','addComponents','Primary','setLabel','\x20(ID:\x20','customId','725694IHXVUq','add','ROLE_ID','interactionCreate','error','Formulário\x20de\x20Whitelist','DB_USER','4jTshgF','📃\x20OBTER','MessageContent','LOG_CHANNEL_ID','703371hjtXFZ','4114872DButkI','\x20|\x20','DB_PASSWORD','getTextInputValue','**APROVADO!**','roles','Nome\x20do\x20personagem:','dotenv','10816erqKVc','env','get','ID\x20Fivem:','setColor','once','setCustomId','send','Bem\x20vindo\x20ao\x20sistema\x20de\x20passaporte\x20exclusivo\x20do\x20Madrid\x20RP,\x20para\x20obter\x20seu\x20passaporte\x20aperte\x20o\x20botão\x20abaixo\x20e\x20coloque\x20seu\x20ID\x20e\x20o\x20nome\x20do\x20seu\x20personagem.\x20Bom\x20RP\x20❤','setTitle','DISCORD_TOKEN','reply','cache','DB_NAME','addFields','setStyle','mysql2/promise','guilds','setImage','isModalSubmit','2198DsKcAC','374828LviSua','DB_HOST','CHANNEL_ID','user','1454935ImlNQq','UPDATE\x20vrp_users\x20SET\x20whitelisted\x20=\x201\x20WHERE\x20id\x20=\x20?','channels','guildId','Seu\x20Nome','config','Guilds','Membro\x20aprovado:\x20<@','setDescription','setNickname','Ocorreu\x20um\x20erro\x20entre\x20em\x20contato\x20com\x20um\x20staff','execute','whitelist','4kcMIAo','userId'];_0x510c=function(){return _0xc3828b;};return _0x510c();}(function(_0x188b8e,_0x544858){const _0x186088=_0x19f8,_0x5363d2=_0x188b8e();while(!![]){try{const _0x50ec9b=-parseInt(_0x186088(0xdc))/0x1+parseInt(_0x186088(0xba))/0x2*(-parseInt(_0x186088(0xbe))/0x3)+parseInt(_0x186088(0xed))/0x4*(parseInt(_0x186088(0xe0))/0x5)+-parseInt(_0x186088(0xb3))/0x6+-parseInt(_0x186088(0xdb))/0x7*(-parseInt(_0x186088(0xc7))/0x8)+parseInt(_0x186088(0xbf))/0x9+parseInt(_0x186088(0xf4))/0xa;if(_0x50ec9b===_0x544858)break;else _0x5363d2['push'](_0x5363d2['shift']());}catch(_0x2af165){_0x5363d2['push'](_0x5363d2['shift']());}}}(_0x510c,0x4780c),require(_0x31a1f0(0xc6))[_0x31a1f0(0xe5)]());function _0x19f8(_0x38f533,_0x5a8c76){const _0x510c5d=_0x510c();return _0x19f8=function(_0x19f862,_0x4bf3d9){_0x19f862=_0x19f862-0xb1;let _0x4bafe3=_0x510c5d[_0x19f862];return _0x4bafe3;},_0x19f8(_0x38f533,_0x5a8c76);}const {Client,GatewayIntentBits,Partials,ActionRowBuilder,ButtonBuilder,ButtonStyle,EmbedBuilder,ModalBuilder,TextInputBuilder,TextInputStyle}=require(_0x31a1f0(0xf8)),mysql=require(_0x31a1f0(0xd7)),client=new Client({'intents':[GatewayIntentBits[_0x31a1f0(0xe6)],GatewayIntentBits['GuildMessages'],GatewayIntentBits[_0x31a1f0(0xbc)]],'partials':[Partials['Channel']]});client[_0x31a1f0(0xcc)]('ready',()=>{const _0x1a8c44=_0x31a1f0;console['log']('Logged\x20in\x20as\x20'+client[_0x1a8c44(0xdf)]['tag']),sendEmbed();});async function sendEmbed(){const _0x1708fb=_0x31a1f0,_0x1a5051=await client['channels']['fetch'](process[_0x1708fb(0xc8)][_0x1708fb(0xde)]),_0x32b66f=new EmbedBuilder()['setTitle'](_0x1708fb(0xf5))[_0x1708fb(0xe8)](_0x1708fb(0xcf))[_0x1708fb(0xd9)](_0x1708fb(0xf7)),_0xc701b2=new ButtonBuilder()[_0x1708fb(0xcd)](_0x1708fb(0xec))[_0x1708fb(0xfc)](_0x1708fb(0xbb))['setStyle'](ButtonStyle[_0x1708fb(0xfb)]),_0xf03644=new ActionRowBuilder()[_0x1708fb(0xfa)](_0xc701b2);await _0x1a5051['send']({'embeds':[_0x32b66f],'components':[_0xf03644]});}client['on'](_0x31a1f0(0xb6),async _0xfd3961=>{const _0x188465=_0x31a1f0;if(_0xfd3961['isButton']()){if(_0xfd3961[_0x188465(0xb2)]===_0x188465(0xec)){const _0x1f0267=new ModalBuilder()[_0x188465(0xcd)]('whitelistForm')['setTitle'](_0x188465(0xb8))[_0x188465(0xfa)](new ActionRowBuilder()['addComponents'](new TextInputBuilder()[_0x188465(0xcd)](_0x188465(0xf3))['setLabel'](_0x188465(0xe4))[_0x188465(0xd6)](TextInputStyle[_0x188465(0xf0)])),new ActionRowBuilder()[_0x188465(0xfa)](new TextInputBuilder()[_0x188465(0xcd)](_0x188465(0xee))[_0x188465(0xfc)]('Seu\x20ID')['setStyle'](TextInputStyle[_0x188465(0xf0)])));await _0xfd3961[_0x188465(0xf2)](_0x1f0267);}}else{if(_0xfd3961[_0x188465(0xda)]()){if(_0xfd3961[_0x188465(0xb2)]===_0x188465(0xf1)){const _0xdac05c=_0xfd3961[_0x188465(0xef)][_0x188465(0xc2)](_0x188465(0xf3)),_0x23d2cb=_0xfd3961['fields']['getTextInputValue']('userId'),_0x56c391=process['env'][_0x188465(0xb5)],_0x35fad8=process[_0x188465(0xc8)][_0x188465(0xbd)];try{const _0x131d88=await mysql['createConnection']({'host':process[_0x188465(0xc8)][_0x188465(0xdd)],'user':process['env'][_0x188465(0xb9)],'password':process[_0x188465(0xc8)][_0x188465(0xc1)],'database':process[_0x188465(0xc8)][_0x188465(0xd4)]});await _0x131d88[_0x188465(0xeb)](_0x188465(0xe1),[_0x23d2cb]),await _0x131d88['end']();const _0x511dbe=client[_0x188465(0xd8)][_0x188465(0xd3)][_0x188465(0xc9)](_0xfd3961[_0x188465(0xe3)]),_0x5f14e6=_0x511dbe['members'][_0x188465(0xd3)][_0x188465(0xc9)](_0xfd3961[_0x188465(0xdf)]['id']);await _0x5f14e6[_0x188465(0xc4)][_0x188465(0xb4)](_0x56c391),await _0x5f14e6[_0x188465(0xe9)](_0xdac05c+_0x188465(0xc0)+_0x23d2cb);const _0x2b6e9b=await client[_0x188465(0xe2)]['fetch'](_0x35fad8),_0xa39b15=new EmbedBuilder()[_0x188465(0xd0)](_0x188465(0xc3))[_0x188465(0xe8)](_0x188465(0xe7)+_0xfd3961['user']['id']+'>')[_0x188465(0xd5)]({'name':_0x188465(0xc5),'value':'**'+_0xdac05c+'**'},{'name':_0x188465(0xca),'value':'**'+_0x23d2cb+'**'})[_0x188465(0xcb)](0xff00);await _0x2b6e9b[_0x188465(0xce)]({'embeds':[_0xa39b15]}),await _0xfd3961[_0x188465(0xd2)]({'content':'Usuário\x20'+_0xdac05c+_0x188465(0xb1)+_0x23d2cb+_0x188465(0xf9),'ephemeral':!![]});}catch(_0x240318){console[_0x188465(0xb7)](_0x240318),await _0xfd3961[_0x188465(0xd2)]({'content':_0x188465(0xea),'ephemeral':!![]});}}}}}),client[_0x31a1f0(0xf6)](process['env'][_0x31a1f0(0xd1)]);
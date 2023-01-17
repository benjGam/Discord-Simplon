import { Client, Events, GatewayIntentBits, Interaction } from "discord.js";
import * as dotenv from "dotenv";
import commands_handler from "./handlers/commands_handler.js";
dotenv.config();
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const DISCORD_ID = process.env.DISCORD_ID;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages] });

commands_handler(client, DISCORD_TOKEN, DISCORD_ID);
events_handler(client);

client.on(Events.InteractionCreate, async (interaction:) => {
    const parsedClient : any = client;
    const command = parsedClient.commands.get(interaction['commandName']);
    console.log(command);
    
    try {
		await command.execute(interaction);
	} catch (error) {
        console.error(error);
             await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        });

client.on('ready', () => {
    if (client.user != undefined) {
        console.log(`Logged in as ${client.user.tag}!`);
    }
});


client.login(DISCORD_TOKEN);

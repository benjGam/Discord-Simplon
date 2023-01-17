import { Client, Events, GatewayIntentBits} from "discord.js";
import * as dotenv from "dotenv";
import commands_handler from "./handlers/commands_handler.js";

dotenv.config();
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const DISCORD_ID = process.env.DISCORD_ID;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages] });

commands_handler(client, DISCORD_TOKEN, DISCORD_ID);

client.once(Events.ClientReady, () => {
	console.log('Ready!');
});

client.on(Events.InteractionCreate, async (interaction: any) => {
    const parsedClient : any = client;
    const command = parsedClient.commands.get(interaction.commandName);
	await command.execute(interaction);	
}); 

client.on('ready', () => {
    if (client.user != undefined) {
        console.log(`Logged in as ${client.user.tag}!`);
    }
});

client.login(DISCORD_TOKEN);

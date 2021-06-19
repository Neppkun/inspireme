const { Plugin } = require('powercord/entities');
const { get } = require('powercord/http');
const { command } = require('../pc-commands/commands/echo');

module.exports = class inspire extends Plugin {
    startPlugin () {
        powercord.api.commands.registerCommand({
            command: "inspire",
            aliases: [ "inspirobot", "inspireme", "inspiro" ],
            description: "Uses the Inspirobot.me API to send a random insparational quote in chat.",
            usage: "{c}inspire",
            executor: this.inspireis.bind(this)
        });
    }
    pluginWillUnload() {
        powercord.pluginWillUnload('inspire')
    }
    async inspireis(args) {
        const data = await get("https://inspirobot.me/api?generate=true");
        return {
            send: true,
            result: `${data.body}`
        };
    }
};

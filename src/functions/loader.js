const {readdirSync} = require("fs");

module.exports = {
    events: function (client, onlyEvent) {
        readdirSync("./src/events/").forEach(dirs => {
            if (dirs === '.DS_Store') return;
            const events = readdirSync(`./src/events/${dirs}/`).filter(files => files.endsWith(".js"));
            for (const event of events) {
                const evt = require(`../events/${dirs}/${event}`);
                if (onlyEvent && evt.property.name !== onlyEvent) continue;
                client.on(evt.property.name, evt.run.bind(null, client));
            }
        });
        if (!onlyEvent) return console.log(`Loading ${readdirSync("./src/events/").length} event(s).`);
    },
    commands: {
        slash: (client) => {
            readdirSync("./src/commands/").forEach(dirs => {
                if (dirs === '.DS_Store') return;
                const commands = readdirSync(`./src/commands/${dirs}/`).filter(files => files.endsWith(".js"));
                for (const file of commands) {
                    const getFile = require(`../commands/${dirs}/${file}`);
                    client.commands.slash.set(getFile.property.name, getFile)
                };
            });
        },
    }
}
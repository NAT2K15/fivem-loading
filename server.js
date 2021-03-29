const config = require('./config.json');
const card = { "$schema": "http://adaptivecards.io/schemas/adaptive-card.json", "version": "1.0", "type": "AdaptiveCard", "body": [{ "type": "TextBlock", "text": `Welcome, You are connecting to ${config.server_name}`, "wrap": true, "horizontalAlignment": "center", "size": "large" }, { "type": "Image", "url": config.logo_url, "width": "1000px", "horizontalAlignment": "center", }, { "type": "ActionSet", "actions": [{ "type": "Action.OpenUrl", "title": "Discord", "url": `${config.discord_invite}` }, { "type": "Action.Submit", "title": "Play", "data": { "nat2k15": "codes this" } }, { "type": "Action.OpenUrl", "title": "Website", "url": `${config.website}` }, ] }], };
AddEventHandler('playerConnecting', function(name, setKickReason, deferrals) {
    deferrals.defer()
    setInterval(() => {
        deferrals.presentCard(card, function(data, rawData) {
            if (rawData) {
                deferrals.done();
            }
        });
    }, 500);
    setTimeout(() => {
        deferrals.done();
    }, 20000);
});
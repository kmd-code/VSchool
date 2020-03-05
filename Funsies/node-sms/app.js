// Download the helper library from https://www.twilio.com/docs/node/install

const accountSid = 'AC1af715c526687ed813bdaa33a1b5270f';
const authToken = 'aa8b21afd540996411c5478a96e57879';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12564148380',
     to: '+18013673653'
   })
  .then(message => console.log(message.sid));

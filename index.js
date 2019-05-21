const twilio = require('twilio');

const accountSid = 'AC5a66077624212fc2b1a059f1169a9996'; // Your Account SID from www.twilio.com/console
const authToken = 'your_autcf73d62ae4d583859efb0ea92023bc22h_token';   // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+12345678901',  // Text this number
    from: '+12345678901' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
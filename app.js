const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    /*
    // Number where you want to send the message.
    const number = "+55999202757";

    // Your message.
    const text = "Hey john";

    // Getting chatId from the number.
    // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
    const chatId = number.substring(1) + "@c.us";

    // Sending message.
    client.sendMessage(chatId, text);
    */

    if(true){
        const prompt = require('prompt');

            prompt.start();

            prompt.get(['numero', 'mensagem'], function (err, result) {
                if (err) { return onErr(err); }
                console.log('Command-line input received:');
                console.log('  Numero: ' + result.numero);
                console.log('  Msg: ' + result.mensagem);

                enviar_mensagem(result.numero, result.mensagem);
            });

            function onErr(err) {
                console.log(err);
                return 1;
            }
    }

});

client.initialize();

function enviar_mensagem(numero, mensagem){
    
    const number = numero;//"+55999202757";

    // Your message.
    const text = mensagem;

    // Getting chatId from the number.
    // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
    const chatId = number.substring(1) + "@c.us";

    // Sending message.
    client.sendMessage(chatId, text);
}


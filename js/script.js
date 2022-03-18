const app = new Vue({
    el : '#root',
    data : {
        findString: '', //ricerca chat utente
        newMessage: '', //testo inserito nel campo input
        active: 0, //ci servirà come indice corrente, lo collegheremo all'index di arrUsers
        arrUsers : [
            {
                name: 'Michele',
                image: 'avatar_1.jpg',
                visible: true,
                chat: [
                    {
                        text: 'Ciao, come stai?',
                        date: `${luxon.DateTime.fromISO('2022-03-16T09:43').toRelativeCalendar()} alle 9:43`,
                        status: 'inviato',
                        opendrop: true
                    },
                    {
                        text: 'Io mi sto riprendendo dal covid ancora..',
                        date: `${luxon.DateTime.fromISO('2022-03-16T09:47').toRelativeCalendar()} alle 9:47`,
                        status: 'inviato',
                        opendrop: true
                    },
                    {
                        text: 'Ei ciao, io abbastanza bene dai. Dai che tra poco starai meglio!',
                        date: `${luxon.DateTime.fromISO('2022-03-16T09:53').toRelativeCalendar()} alle 9:53`,
                        status: 'ricevuto',
                        opendrop: true
                    }
                ],
            },
            {
                name: 'Fabio',
                image: 'avatar_2.jpg',
                visible: true,
                chat: [
                    {
                        text: 'Hai tolto i panni dalla lavatrice??',
                        date: `${luxon.DateTime.fromISO('2022-03-07T18:13').toRelativeCalendar()} alle 18:13`,
                        status: 'inviato',
                        opendrop: true
                    },
                    {
                        text: 'Si amore, tranquilla!',
                        date: `${luxon.DateTime.fromISO('2022-03-07T18:33').toRelativeCalendar()} alle 18:33`,
                        status: 'ricevuto',
                        opendrop: true
                    },
                    {
                        text: 'Bravo tesoro, a dopo! :)',
                        date: `${luxon.DateTime.fromISO('2022-03-07T18:43').toRelativeCalendar()} alle 18:43`,
                        status: 'inviato',
                        opendrop: true
                    }
                ],
            },
            {
                name: 'Samuele',
                image: 'avatar_3.jpg',
                visible: true,
                chat: [
                    {
                        text: 'Mi ricordi la password di Netflix?',
                        date: `${luxon.DateTime.fromISO('2022-03-10T09:01').toRelativeCalendar()} alle 9:01`,
                        status: 'inviato',
                        opendrop: true
                    },
                    {
                        text: 'Me la sono scordata...',
                        date: `${luxon.DateTime.fromISO('2022-03-10T09:16').toRelativeCalendar()} alle 9:16`,
                        status: 'inviato',
                        opendrop: true
                    },
                    {
                        text: 'Sempre la solita, eccola: 2345672',
                        date: `${luxon.DateTime.fromISO('2022-03-10T09:43').toRelativeCalendar()} alle 9:43`,
                        status: 'ricevuto',
                        opendrop: true
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                image: 'avatar_4.jpg',
                visible: true,
                chat: [
                    {
                        text: 'Lo porti tu il bambino a calcio?',
                        date: `${luxon.DateTime.fromISO('2022-03-02T09:41').toRelativeCalendar()} alle 9:41`,
                        status: 'inviato',
                        opendrop: true
                    },
                    {
                        text: 'Non ho tempo.',
                        date: `${luxon.DateTime.fromISO('2022-03-02T09:43').toRelativeCalendar()} alle 9:43`,
                        status: 'ricevuto',
                        opendrop: true
                    },
                    {
                        text: 'Grazie..',
                        date: `${luxon.DateTime.fromISO('2022-03-02T20:43').toRelativeCalendar()} alle 20:43`,
                        status: 'inviato',
                        opendrop: true
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                image: 'avatar_5.jpg',
                visible: true,
                chat: [
                    {
                        text: 'Mi passi gli appunti di storia?',
                        date: `${luxon.DateTime.fromISO('2022-03-14T09:15').toRelativeCalendar()} alle 9:15`,
                        status: 'ricevuto',
                        opendrop: true
                    },
                    {
                        text: 'No mi dispiace..',
                        date: `${luxon.DateTime.fromISO('2022-03-14T09:20').toRelativeCalendar()} alle 9:20`,
                        status: 'inviato',
                        opendrop: true
                    },
                    {
                        text: 'Fatteli da solo come ho fatto io',
                        date: `${luxon.DateTime.fromISO('2022-03-14T09:43').toRelativeCalendar()} alle 9:43`,
                        status: 'inviato',
                        opendrop: true
                    }
                ],
            },
            {
                name: 'Claudia',
                image: 'avatar_6.jpg',
                visible: true,
                chat: [
                    {
                        text: 'Cosa vuoi per cena?',
                        date: `${luxon.DateTime.fromISO('2022-03-11T09:20').toRelativeCalendar()} alle 9:20`,
                        status: 'inviato',
                        opendrop: true
                    },
                    {
                        text: 'Tagliata di manzo',
                        date: `${luxon.DateTime.fromISO('2022-03-11T09:31').toRelativeCalendar()} alle 9:31`,
                        status: 'ricevuto',
                        opendrop: true
                    },
                    {
                        text: 'Sarà fatto, a dopo.',
                        date: `${luxon.DateTime.fromISO('2022-03-11T09:43').toRelativeCalendar()} alle 9:43`,
                        status: 'inviato',
                        opendrop: true
                    }
                ],
            },
            {
                name: 'Federico',
                image: 'avatar_7.jpg',
                visible: true,
                chat: [
                    {
                        text: 'hai rotto tu la mia collana?',
                        date: `${luxon.DateTime.fromISO('2022-03-15T09:43').toRelativeCalendar()} alle 9:20`,
                        status: 'inviato',
                        opendrop: true
                    },
                    {
                        text: 'ma cosa dici.. NO!',
                        date: `${luxon.DateTime.fromISO('2022-03-15T09:43').toRelativeCalendar()} alle 9:43`,
                        status: 'ricevuto',
                        opendrop: true
                    }
                ],
            },
            {
                name: 'Davide',
                image: 'avatar_8.jpg',
                visible: true,
                chat: [
                    {
                        text: 'Tanti auguri di buon compleanno Dave!!',
                        date: `${luxon.DateTime.fromISO('2022-03-16T09:32').toRelativeCalendar()} alle 9:32`,
                        status: 'inviato',
                        opendrop: true
                    },
                    {
                        text: 'Grazie mille',
                        date: `${luxon.DateTime.fromISO('2022-03-16T09:43').toRelativeCalendar()} alle 9:43`,
                        status: 'ricevuto',
                        opendrop: true
                    },
                ],
            },
        ],
    },
    methods : {
        //Funzione invio messaggio
        sentMessage() {
            if (this.newMessage != '') { //se l'input non è vuoto fai:
            let inputMsg = this.arrUsers[this.active].chat;
            inputMsg.push(
                {
                    text: this.newMessage, //testo inserito nell'input
                    date:  `${luxon.DateTime.now().toRelativeCalendar()} alle ${luxon.DateTime.now().toFormat('HH:mm')}`, // oggi alle
                    status: 'inviato',
                    opendrop: true
                }
            );
            this.newMessage = ''; //azzeramento campo input
            //una volta inviato il msg dopo 1S rispondimi con un 'ok'
            setTimeout(function() {
                inputMsg.push(
                    {
                        date: `${luxon.DateTime.now().toRelativeCalendar()} alle ${luxon.DateTime.now().toFormat('HH:mm')}`, //oggi alle
                        text: "Okkei",
                        status: 'ricevuto',
                        opendrop: true
                    }
                );
            }
            , 1000)
            }
        },
        //collegamento active (indice corrente) con index di arrUsers
        showChat(index) {
            this.active = index;
        },
        //ricerca tramite input delle mie chat
        findUserChat() {
            this.arrUsers.forEach(element => { //per ogni elemento nel mio array:
                if (element.name.toLowerCase().includes(this.findString.toLowerCase())) { //se il nome dell'user contiene lettere contenute nel campo input(findString) fai:
                    element.visible = true;
                } else { //se non hanno lettere in comune fai:
                    element.visible = false;
                }
            });
        },
        //cancellazione messaggio
        deleteMessage(index) {
            let indexMsg = this.arrUsers[this.active].chat;
                indexMsg.splice(index, 1);
        }
    }
});
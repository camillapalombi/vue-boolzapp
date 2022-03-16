const app = new Vue({
    el : '#root',
    data : {
        newMessage : '', //testo inserito nel campo input
        active: 0, //ci servirà come indice corrente, lo collegheremo all'index di arrUsers
        arrUsers : [
            {
                name: 'Michele',
                image: 'avatar_1.jpg',
                chat: [
                    {
                        text: 'Ciao, come stai?',
                        date: '16/03/2022 11:30:55',
                        status: 'inviato'
                    },
                    {
                        text: 'Io mi sto riprendendo dal covid ancora..',
                        date: '16/03/2022 11:31:01',
                        status: 'inviato'
                    },
                    {
                        text: 'Ei ciao, io abbastanza bene dai. Dai che tra poco starai meglio!',
                        date: '16/03/2022 11:31:01',
                        status: 'ricevuto'
                    }
                ],
            },
            {
                name: 'Fabio',
                image: 'avatar_2.jpg',
                chat: [
                    {
                        text: 'Hai tolto i panni dalla lavatrice??',
                        date: '13/03/2022 9:32:46',
                        status: 'inviato'
                    },
                    {
                        text: 'Si amore, tranquilla!',
                        date: '13/03/2022 9:43:01',
                        status: 'ricevuto'
                    },
                    {
                        text: 'Bravo tesoro, a dopo! :)',
                        date: '13/03/2022 10:02:57',
                        status: 'inviato'
                    }
                ],
            },
            {
                name: 'Samuele',
                image: 'avatar_3.jpg',
                chat: [
                    {
                        text: 'Mi ricordi la password di Netflix?',
                        date: '02/03/2022 20:32:46',
                        status: 'inviato'
                    },
                    {
                        text: 'Me la sono scordata...',
                        date: '02/03/2022 20:43:01',
                        status: 'inviato'
                    },
                    {
                        text: 'Sempre la solita, eccola: 2345672',
                        date: '02/03/2022 20:02:57',
                        status: 'ricevuto'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                image: 'avatar_4.jpg',
                chat: [
                    {
                        text: 'Lo porti tu il bambino a calcio?',
                        date: '7/03/2022 9:32:46',
                        status: 'inviato'
                    },
                    {
                        text: 'Non ho tempo.',
                        date: '7/03/2022 9:43:01',
                        status: 'ricevuto'
                    },
                    {
                        text: 'Grazie..',
                        date: '7/03/2022 10:02:57',
                        status: 'inviato'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                image: 'avatar_5.jpg',
                chat: [
                    {
                        text: 'Mi passi gli appunti di storia?',
                        date: '15/03/2022 9:32:46',
                        status: 'ricevuto'
                    },
                    {
                        text: 'No mi dispiace..',
                        date: '15/03/2022 9:43:01',
                        status: 'inviato'
                    },
                    {
                        text: 'Fatteli da solo come ho fatto io',
                        date: '15/03/2022 10:02:57',
                        status: 'inviato'
                    }
                ],
            },
            {
                name: 'Claudia',
                image: 'avatar_6.jpg',
                chat: [
                    {
                        text: 'Cosa vuoi per cena?',
                        date: '22/03/2022 9:32:46',
                        status: 'inviato'
                    },
                    {
                        text: 'Tagliata di manzo',
                        date: '22/03/2022 9:43:01',
                        status: 'ricevuto'
                    },
                    {
                        text: 'Sarà fatto, a dopo.',
                        date: '22/03/2022 10:02:57',
                        status: 'inviato'
                    }
                ],
            },
            {
                name: 'Federico',
                image: 'avatar_7.jpg',
                chat: [
                    {
                        text: 'hai rotto tu la mia collana?',
                        date: '27/03/2022 9:32:46',
                        status: 'inviato'
                    },
                    {
                        text: 'ma cosa dici.. NO!',
                        date: '27/03/2022 9:43:01',
                        status: 'ricevuto'
                    }
                ],
            },
            {
                name: 'Davide',
                image: 'avatar_8.jpg',
                chat: [
                    {
                        text: 'Tanti auguri di buon compleanno Dave!!',
                        date: '28/03/2022 9:32:46',
                        status: 'inviato'
                    },
                    {
                        text: 'Grazie mille',
                        date: '16/03/2022 9:43:01',
                        status: 'ricevuto'
                    },
                ],
            },
        ]
    },
    methods : {
        //Funzione invio messaggio
        sentMessage() {
            if (this.newMessage != '') { //se l'input non è vuoto fai:
            let inputMsg = this.arrUsers[this.active].chat;
            inputMsg.push(
                {
                    text: this.newMessage, //testo inserito nell'input
                    date:  luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm'),
                    status: 'inviato'
                }
            );
            this.newMessage = ''; //azzeramento campo input
            //una volta inviato il msg dopo 1S rispondimi con un 'ok'
            setTimeout(function() {
                inputMsg.push(
                    {
                        date: luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm'),
                        text: "Okkei",
                        status: 'received'
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
    }
});
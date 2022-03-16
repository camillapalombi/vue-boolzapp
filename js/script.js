//MILESTONE 1.

const app = new Vue({
    el : '#root',
    data : {
        newMessage : '',
        newArrMsg : [],
        arrUsers : [
            {
                name: 'Michele',
                image: 'avatar_1.jpg'
            },
            {
                name: 'Fabio',
                image: 'avatar_2.jpg'
            },
            {
                name: 'Samuele',
                image: 'avatar_3.jpg'
            },
            {
                name: 'Alessandro B.',
                image: 'avatar_4.jpg'
            },
            {
                name: 'Alessandro L.',
                image: 'avatar_5.jpg'
            },
            {
                name: 'Claudia',
                image: 'avatar_6.jpg'
            },
            {
                name: 'Federico',
                image: 'avatar_7.jpg'
            },
            {
                name: 'Davide',
                image: 'avatar_8.jpg'
            },
        ]
    },
    methods : {
        sentMessage() {
            if (this.newMessage != '') {
                this.newArrMsg.push(this.newMessage);
                this.newMessage = '';
            }
        },
        DateTime() {
            return luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm');  
        }
    }
});
new Vue({
    el:"#app",
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        userProfileInfos: {
            name: 'Nome Utente',
            avatar: './img/avatar_io.jpg',
        },
        currentIndex: 0,
        temporarySentMessage: '',
        researchInput: '',

    },
    methods: {
        // getAvatarPic(item) {
        //     return `img/avatar${item.avatar}.jpg`;
        // },
        getCurrentDate: function() { //riportare la funzione dove intendo mostrare la data e l'ora attuale (es.vedi line 112)
            return dayjs().format('DD/MM/YYYY HH:mm:ss')
        }, 
        setCurrentContact: function(i) {
            this.currentIndex = i;
        },
        sentMessageTo: function(item) { // ** currentIndex come argomento al posto di item
            //this.contacts[this.currentIndex].messages.push({ //USANDO QUESTA STRUTTURA: **
            item.messages.push({ //alternativa alla struttura commentata sopra: prima il currentIndex veniva dettato su js mentre con questa struttura alternativa viene dettato su html
                date: this.getCurrentDate(), 
                text: this.temporarySentMessage,
                status: 'sent'
            }),
            this.temporarySentMessage =''; //placeholder dell'input vuoto dopo l'invio del messaggio

            this.automaticMateAnswer(item) // ** no argomento
        },
        automaticMateAnswer: function(item) { // ** currentIndex come argomento al posto di item
            setTimeout(() => {
                // this.contacts[this.currentIndex].messages.push({ //USANDO QUESTA STRUTTURA: **
                item.messages.push({    
                    date: this.getCurrentDate(), 
                    text: `Ciao ${this.userProfileInfos.name}, come stai?`,
                    status: 'received'
                })
            }, 1000);
        },
        deleteMessage: function(index) {
            this.contacts[this.currentIndex].messages.splice(index, 1);
            //(index, 1) significa: "voglio cancellare UN item partendo dall'INDEX iniziale"
        } 
    },
    // computed: {
    //     filteredContacts() {
    //         return this.contacts.filter(item => {
    //           return item.name.toLowerCase().startsWith(this.researchInput.toLowerCase());
    //         });
    //         //con "startsWith()" mi filtra i nomi che iniziano con la lettera inserita nell'input dall'utente,
    //         // mentre con "includes()" o "match()" le parole che contentono la lettera inserita nell'input
    //     },
    // }
});



let app = new Vue({
    el : '#app',

    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
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
                avatar: '_2',
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
                avatar: '_3',
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
                avatar: '_4',
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
        searchingWord : '',
        userCounter: 0,
        newMessageText : '',
    },

    
        


   
    methods : {

        imagesNamegenerator : function(contact){
            let srcName = 'img/avatar'+ contact.avatar + '.jpg';
            return srcName
        },

        lastMessage : function(contact){
            let lastMessageIndex = contact.messages.length - 1;
            let finalMessage = contact.messages[lastMessageIndex].text;
            return finalMessage
        },

        lastSeen : function(contact){
            let lastMessageIndex = contact.messages.length - 1;
            let lastSeen = contact.messages[lastMessageIndex].date;
            return lastSeen
        },

        userSelected: function(indice){
            this.userCounter = indice;
            console.log(indice)
        },

       

        addNewMessage: function(messaggi){
            let nuovomessaggio = {
                text : this.newMessageText,
                status : 'sent',
            }
            messaggi.push(nuovomessaggio);
            this.newMessageText = ''

            console.log('messaggio inviato');


            let risposta = {
                text : 'Ok champ',
                status : 'received',
            }
            setTimeout(() => messaggi.push(risposta) , 1000 )
        },

        filterFunction : function(){
            for (i = 0 ; i < this.contacts.length; i++){
                if(this.contacts[i].name.includes(this.searchingWord)){
                    this.contacts[i].visible = true;
                }else{
                    this.contacts[i].visible = false
                }
            }
            
        }

        
    },
})

/** 
 * MILESTONE 4
 * Ricerca utenti: scrivendo qualcosa nell???input a sinistra, vengono visualizzati
 *  solo i contatti il cui nome contiene le lettere inserite 
 * (es, Marco, Matteo Martina -> Scrivo ???mar??? rimangono solo Marco e Martina)
 */
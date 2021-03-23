// stampare a schermo un messaggio in un h1 usando i data
// aggiungere alla pagina un'immagine usando i data

var app = new Vue(
    {
        el: '#root',
        data: {
            message: '',
            colore: 'nero',
            img: 'https://picsum.photos/'
        },
        methods: {
            cambiaRosso: function () {
                this.colore = 'rosso';
            },
            cambiaVerde: function () {
                this.colore = 'verde';
            },
            cambiaNero: function () {
                this.colore = 'nero';
            }
        }
    }
)
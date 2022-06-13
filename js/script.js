const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);


/* --------------------------------------------------------------------------------------------------------------------------- */

/* 
make the slider to work strating from the received html.
At the clikc on an arrow, the shown img change.
The thumbs list have to be generated with a v-for
*/

//inistialize vue js

new Vue ({
    el: "#app",
    data: {
        allSlides: slides,
        state: "active",
        currentIndex: 0

    },

    methods: {
        prev() {
            this.allSlides[this.currentIndex].image;
            
            if(this.currentIndex > 0){
                return this.currentIndex--;
                
            } else {
                this.currentIndex = 4;
            }
        },
        next() {
            this.allSlides[this.currentIndex].image;
            
            if(this.currentIndex < 4){
                return this.currentIndex++;
                
            } else {
                this.currentIndex = 0;
            }
        }
    }
});


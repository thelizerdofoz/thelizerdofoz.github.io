const myImages = [
    {
        src: "/images/shiny geniga.png",
        description: " 2 best shiny",
        alt: "black and blue frog"
    },
    {
        src: "/images/shiny tapu koko.avif",
        description: "4 best shiny",
        alt: "black and orange shell"
    },
    {
        src: "/images/shiny zeraora.webp",
        description: "THE BEST SHINY",
        alt: "white and blue cat"
    },
    {
        src: "/images/shiny.jpg",
        description: "3 best shiny",
        alt: "green dargon waving to you"
    },
    {
        src: "/images/shiny.Png",
        description: "5 best shiny",
        alt: "a black and blue sand castle"
    }   
];

const showcaseImageElement = document.getElementById('showcase-image');
const showcaseImageDescription = document.getElementById('showcase-description');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

let currentIndex = 0;

showcaseImageElement.src = myImages[currentIndex].src
showcaseImageElement.alt = myImages[currentIndex].alt
showcaseImageDescription.innerText = myImages[currentIndex].description

function changeMyImage(e){
    if (e.target.id === nextButton.id) {
        if (currentIndex < myImages.length -1) {
            currentIndex += 1
        } else {
            currentIndex = 0
        } 
    }   
    if (e.target.id === prevButton.id) {
        if (currentIndex > 0) {
            currentIndex -= 1
        } else {
            currentIndex = myImages.length - 1
        }
    }
    
    showcaseImageElement.src = myImages[currentIndex].src
    showcaseImageElement.alt = myImages[currentIndex].alt
    showcaseImageDescription.innerText = myImages[currentIndex].description
}

nextButton.onclick = changeMyImage;
prevButton.onclick = changeMyImage;
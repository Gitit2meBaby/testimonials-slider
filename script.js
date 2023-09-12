const quotes = [
    {
        quote: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
        author: "Tanya Sinclair",
        position: "UX Engineer",
        imageSrc: "images/image-tanya.jpg",
    },
    {
        quote: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        author: "John Tarkpor",
        position: "Junior Front-end Developer",
        imageSrc: "images/image-john.jpg",
    },
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const positionElement = document.getElementById('position');
const imageElement = document.getElementById('authorImage');

let currentIndex = 0;

function updateQuote(index) {
    const currentQuote = quotes[index];
    if (currentQuote) {
        quoteElement.textContent = `" ${currentQuote.quote} "`;
        authorElement.textContent = currentQuote.author;
        positionElement.textContent = currentQuote.position;
        imageElement.src = currentQuote.imageSrc;
    }
}

updateQuote(currentIndex);

// Toggle button
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % quotes.length;
    updateQuote(currentIndex);
});

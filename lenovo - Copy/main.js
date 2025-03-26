const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const laptopTitle = document.getElementById('laptop-title');
const laptopDescription = document.getElementById('laptop-description');
const laptopLink = document.getElementById('laptop-link');

let index = 0;

const laptopData = [
    {
        title: "Lenovo Legion 9i",
        description: "The ultimate gaming laptop with RTX 4090 and liquid cooling.",
        link: "#"
    },
    {
        title: "ThinkPad X1 Carbon",
        description: "A business-class ultrabook with premium design and performance.",
        link: "#"
    },
    {
        title: "Yoga 9i",
        description: "2-in-1 convertible with OLED display and AI-powered performance.",
        link: "#"
    }
];

function showSlide(i) {
    index = (i + items.length) % items.length;
    carousel.style.transform = `translateX(${-index * 100}%)`;
    updateLaptopDetails(index);
}

function updateLaptopDetails(index) {
    laptopTitle.textContent = laptopData[index].title;
    laptopDescription.textContent = laptopData[index].description;
    laptopLink.href = laptopData[index].link;
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

items.forEach((item, i) => {
    item.addEventListener('click', () => showSlide(i));
});


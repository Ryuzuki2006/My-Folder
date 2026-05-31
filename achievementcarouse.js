document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("imageTrack");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const infoTitle = document.getElementById("infoTitle");
    const infoText = document.getElementById("infoText");

    const textData = [
        {
            title: "Microsoft Office Specialist (MOS) - Excel Associate 365",
            desc: "Obtained the Microsoft Office Specialist certification for Excel Associate 365."
        },
        {
            title: "Database Management Certificate",
            desc: "Received a certificate of completion for a comprehensive database management course covering SQL, database design, and administration."
        },
        {
            title: "HTML and CSS Certificate",
            desc: "Received a certificate of completion for a comprehensive HTML and CSS course covering web development fundamentals."
        },
        {
            title: "Deans List Certificate",
            desc: "Received a certificate of completion for maintaining a high GPA and demonstrating academic excellence."
        },
        {
            title: "NC II Certificate",
            desc: "Received a certificate of completion for the NC II certification in Computer Hardware Servicing."
        }
    ];

    let currentIndex = 0;

    function updateCarousel() {
    const firstSlide = track.querySelector('.single-image-frame');
    const slideWidth = firstSlide ? firstSlide.getBoundingClientRect().width : track.parentElement.offsetWidth;
    
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    
    infoTitle.style.opacity = 0;
    infoText.style.opacity = 0;
    
    setTimeout(() => {
        infoTitle.textContent = textData[currentIndex].title;
        infoText.textContent = textData[currentIndex].desc;
        infoTitle.style.opacity = 1;
        infoText.style.opacity = 1;
    }, 200);
}

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex < textData.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : textData.length - 1;
        updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);

    updateCarousel();
});
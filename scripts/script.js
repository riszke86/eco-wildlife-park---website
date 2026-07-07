const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach(card => {
    const button = card.querySelector(".faq-question");
    const icon = card.querySelector(".faq-icon");

    button.addEventListener("click", () => {
        faqCards.forEach(otherCard => {
            const otherIcon = otherCard.querySelector(".faq-icon");

            if (otherCard !== card) {
                otherCard.classList.remove("active");
                otherIcon.textContent = "+";
            }
        });

        card.classList.toggle("active");
        icon.textContent = card.classList.contains("active") ? "−" : "+";
    });
});
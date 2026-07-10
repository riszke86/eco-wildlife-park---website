const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach(card => {
    const button = card.querySelector(".faq-question");
    const icon = card.querySelector(".faq-icon");

    if (button && icon) {
        button.addEventListener("click", () => {
            faqCards.forEach(otherCard => {
                const otherIcon = otherCard.querySelector(".faq-icon");

                if (otherCard !== card) {
                    otherCard.classList.remove("active");

                    if (otherIcon) {
                        otherIcon.textContent = "+";
                    }
                }
            });

            card.classList.toggle("active");
            icon.textContent = card.classList.contains("active") ? "−" : "+";
        });
    }
});


const todayTitle = document.getElementById("today-title");
const todayHours = document.getElementById("today-hours");
const openStatus = document.getElementById("open-status");
const nextEvent = document.getElementById("next-event");

if (todayTitle && todayHours && openStatus && nextEvent) {
    const now = new Date();

    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];

    const todayName = days[now.getDay()];

    const weeklyEvents = {
        Monday: [
            { time: "10:00", name: "Macaw Flight Experience" },
            { time: "11:30", name: "Elephant Feeding" },
            { time: "13:00", name: "Crocodile Feeding" },
            { time: "14:30", name: "Sea Turtle Rescue Talk" },
            { time: "16:00", name: "Lion Encounter" }
        ],
        Tuesday: [
            { time: "10:00", name: "Zipline Through the Canopy" },
            { time: "11:30", name: "Cheetah Speed Demonstration" },
            { time: "13:00", name: "Crocodile Feeding" },
            { time: "14:30", name: "Snake Handling Show" },
            { time: "15:30", name: "Macaw Flight Experience" },
            { time: "16:00", name: "Lion Encounter" }
        ],
        Wednesday: [
            { time: "10:00", name: "Sloth Sanctuary" },
            { time: "11:30", name: "Elephant Feeding" },
            { time: "12:30", name: "Macaw Flight Experience" },
            { time: "13:00", name: "Crocodile Feeding" },
            { time: "14:30", name: "Sea Turtle Rescue Talk" },
            { time: "15:00", name: "Snake Handling Show" },
            { time: "16:00", name: "Lion Encounter" }
        ],
        Thursday: [
            { time: "10:00", name: "Macaw Flight Experience" },
            { time: "11:30", name: "Elephant Feeding" },
            { time: "13:00", name: "Crocodile Feeding" },
            { time: "14:30", name: "Sea Turtle Rescue Talk" },
            { time: "16:00", name: "Lion Encounter" }
        ],
        Friday: [
            { time: "10:00", name: "Macaw Flight Experience" },
            { time: "11:30", name: "Elephant Feeding" },
            { time: "13:00", name: "Sloth Sanctuary" },
            { time: "14:30", name: "Touch Pool Experience" },
            { time: "15:00", name: "Snake Handling Show" },
            { time: "16:00", name: "Lion Encounter" }
        ],
        Saturday: [
            { time: "10:00", name: "Zipline Through the Canopy" },
            { time: "11:30", name: "Elephant Feeding" },
            { time: "12:30", name: "Cheetah Speed Demonstration" },
            { time: "13:00", name: "Crocodile Feeding" },
            { time: "14:30", name: "Sea Turtle Rescue Talk" },
            { time: "15:00", name: "Touch Pool Experience" },
            { time: "15:30", name: "Snake Handling Show" },
            { time: "16:00", name: "Lion Encounter" },
            { time: "16:30", name: "Macaw Flight Experience" }
        ],
        Sunday: [
            { time: "10:00", name: "Macaw Flight Experience" },
            { time: "11:30", name: "Elephant Feeding" },
            { time: "12:00", name: "Cheetah Speed Demonstration" },
            { time: "12:30", name: "Touch Pool Experience" },
            { time: "13:00", name: "Crocodile Feeding" },
            { time: "14:30", name: "Sea Turtle Rescue Talk" },
            { time: "15:00", name: "Snake Handling Show" },
            { time: "15:30", name: "Touch Pool Experience" },
            { time: "16:00", name: "Zipline Through the Canopy" }
        ]
    };

    todayTitle.textContent = "Today is " + todayName;
    todayHours.textContent = "Opening time: 09:00 AM – 06:00 PM";

    if (now.getHours() >= 9 && now.getHours() < 18) {
        openStatus.textContent = "We are OPEN";
    } else {
        openStatus.textContent = "We are CLOSED";
    }

    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const todaysEvents = weeklyEvents[todayName];

    let next = null;

    for (let event of todaysEvents) {
        const [hour, minute] = event.time.split(":").map(Number);
        const eventMinutes = hour * 60 + minute;

        if (eventMinutes > currentMinutes) {
            next = event;
            break;
        }
    }

    if (next) {
        nextEvent.textContent = `Next event today: ${next.time} - ${next.name}`;
    } else {
        nextEvent.textContent = "No more events today. Please check tomorrow's programme.";
    }
}





function openAnimal(title, image, text) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-image").src = image;
    document.getElementById("modal-text").textContent = text;
    document.getElementById("animal-modal").style.display = "flex";
}

function closeAnimal() {
    document.getElementById("animal-modal").style.display = "none";
}


function openAnimal(title, image, text, diet, habitat, lifespan, status) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-image").src = image;
    document.getElementById("modal-text").textContent = text;
    document.getElementById("modal-diet").textContent = diet;
    document.getElementById("modal-habitat").textContent = habitat;
    document.getElementById("modal-lifespan").textContent = lifespan;
    document.getElementById("modal-status").textContent = status;

    document.getElementById("animal-modal").style.display = "flex";
}

function closeAnimal() {
    document.getElementById("animal-modal").style.display = "none";
}




const counters = document.querySelectorAll(".counter");
const impactSection = document.querySelector(".impact-section");

let countersStarted = false;

function startCounters() {
    counters.forEach(counter => {
        counter.innerText = "0";

        const target = Number(counter.getAttribute("data-target"));
        const increment = Math.ceil(target / 150);

        function updateCounter() {
            const current = Number(counter.innerText);

            if (current < target) {
                counter.innerText = Math.min(current + increment, target);
                setTimeout(updateCounter, 18);
            }
        }

        updateCounter();
    });
}

if (impactSection) {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !countersStarted) {
            countersStarted = true;
            startCounters();
        }
    }, {
        threshold: 0.4
    });

    observer.observe(impactSection);
}

function openGallery(imageSrc) {
    document.getElementById("gallery-large-image").src = imageSrc;
    document.getElementById("gallery-modal").style.display = "flex";
}

function closeGallery() {
    document.getElementById("gallery-modal").style.display = "none";
}


function openExperience(title, image, duration, info, difficulty, description) {
    event.preventDefault();

    document.getElementById("experience-title").textContent = title;
    document.getElementById("experience-image").src = image;
    document.getElementById("experience-duration").textContent = duration;
    document.getElementById("experience-info").textContent = info;
    document.getElementById("experience-difficulty").textContent = difficulty;
    document.getElementById("experience-description").textContent = description;

    document.getElementById("experience-modal").style.display = "flex";
}

function closeExperience() {
    document.getElementById("experience-modal").style.display = "none";
}
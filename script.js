const activities = [
    "Watch a movie",
    "Bake cookies",
    "Go for a walk",
    "Take autumn photos",
    "Drink hot chocolate",
    "Hang out with friends",
    "Look outside a window",
    "Play some autumn themed games",
    "Try some DIY"
];
function randomActivity() {
    const random = Math.floor(Math.random() * activities.length);
    document.getElementById("result").textContent = activities[random];
}
function randomPage() {
    const pages = [
        "recepty.html",
        "chalenges.html",
        "filmy.html",
        "top10.html",
        "recepty.html",
        "trips.html",
        "aahry.html"
    ]
    const random = Math.floor(Math.random() * pages.length);
    window.location.href = pages[random];
}
function goToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function toggleMenu() {
    const menu = document.getElementById("menuLinks");
    const button = document.querySelector(".menu-btn");

    menu.classList.toggle("show");
    button.classList.toggle("open");
}

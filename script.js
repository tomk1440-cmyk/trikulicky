const activities = [
    "Watch a movie",
    "Bake cookies",
    "Go for a walk",
    "Take autumn photos",
    "Drink hot chocolate"
];
function randomActivity() {
    const random = Math.floor(Math.random() * activities.length);
    document.getElementById("result").textContent = activities[random];
}
function randomPage() {
    const pages = [
        "recepty.html",
        "challenges.html",
        "filmy.html",
        "top10.html",
        "recepty.html",
        "trips.html",
        "aahry.html"
    ]
    const random = Math.floor(Math.random() * pages.length);
    window.location.href = pages[random];
}

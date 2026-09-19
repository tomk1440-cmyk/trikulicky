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
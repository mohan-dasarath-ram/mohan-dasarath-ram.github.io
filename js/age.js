function liveAgeCalculator() {
    const dob = new Date("2009-07-25T00:00:00+05:30");
    const ageEl = document.getElementById("age-counter");

    function updateAge() {
        const now = new Date();
        let diff = now - dob;
        let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        diff -= years * (1000 * 60 * 60 * 24 * 365.25);
        let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
        diff -= months * (1000 * 60 * 60 * 24 * 30.44);
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -= days * (1000 * 60 * 60 * 24);
        let hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);
        let minutes = Math.floor(diff / (1000 * 60));
        diff -= minutes * (1000 * 60);
        let seconds = Math.floor(diff / 1000);

        ageEl.textContent = 
            years + " yrs, " + 
            months + " mo, " + 
            days + " d, " +
            hours + " hr, " + 
            minutes + " min, " + 
            seconds + " sec";
    }

    setInterval(updateAge, 1000);
    updateAge();
}

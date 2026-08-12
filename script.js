
function changeStatus(button, color) {

    const card = button.closest(".place");

    const status = card.querySelector(".status");

    const notifyButton =
        card.querySelector(".notify-button");

    const placeName =
        card.querySelector("h2").textContent.trim();


    // Save status

    localStorage.setItem(
        "schoolClean_" + placeName,
        color
    );


    // Red

    if (color === "red") {

        status.textContent =
            "🔴 Needs Cleaning";

        status.className =
            "status red";

        if (notifyButton) {
            notifyButton.style.display = "block";
        }
    }


    // Yellow

    else if (color === "yellow") {

        status.textContent =
            "🟡 Cleaning";

        status.className =
            "status yellow";

        if (notifyButton) {
            notifyButton.style.display = "none";
        }
    }


    // Green

    else if (color === "green") {

        status.textContent =
            "🟢 Clean";

        status.className =
            "status green";

        if (notifyButton) {
            notifyButton.style.display = "none";
        }
    }


    // Update summary

    updateSummary();
}



function loadSavedStatuses() {

    const cards =
        document.querySelectorAll(".place");


    cards.forEach(function (card) {

        const placeName =
            card.querySelector("h2").textContent.trim();

        const status =
            card.querySelector(".status");

        const notifyButton =
            card.querySelector(".notify-button");


        const savedColor =
            localStorage.getItem(
                "schoolClean_" + placeName
            );


        // Hide notification by default

        if (notifyButton) {
            notifyButton.style.display = "none";
        }


        // No saved status

        if (!savedColor) {
            return;
        }


        // Red

        if (savedColor === "red") {

            status.textContent =
                "🔴 Needs Cleaning";

            status.className =
                "status red";

            if (notifyButton) {
                notifyButton.style.display = "block";
            }
        }


        // Yellow

        else if (savedColor === "yellow") {

            status.textContent =
                "🟡 Cleaning";

            status.className =
                "status yellow";

            if (notifyButton) {
                notifyButton.style.display = "none";
            }
        }


        // Green

        else if (savedColor === "green") {

            status.textContent =
                "🟢 Clean";

            status.className =
                "status green";

            if (notifyButton) {
                notifyButton.style.display = "none";
            }
        }

    });


    updateSummary();
}



function updateSummary() {

    let clean = 0;

    let cleaning = 0;

    let dirty = 0;


    const cards =
        document.querySelectorAll(".place");


    cards.forEach(function (card) {

        const status =
            card.querySelector(".status");


        if (status.classList.contains("green")) {

            clean++;

        }

        else if (status.classList.contains("yellow")) {

            cleaning++;

        }

        else if (status.classList.contains("red")) {

            dirty++;

        }

    });


    document.getElementById("cleanCount").textContent =
        clean;

    document.getElementById("cleaningCount").textContent =
        cleaning;

    document.getElementById("dirtyCount").textContent =
        dirty;
}



window.addEventListener(
    "load",
    loadSavedStatuses
);

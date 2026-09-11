function createGreeting(firstname, lastname, timeOfDay) {
    return `${getGreeting(timeOfDay)} ${formatName(firstname, lastname)}`
}

function formatName(firstname, lastname) {
    return firstname + " " + lastname;
}

function getGreeting(timeOfDay) {
    if (timeOfDay === "morning") {
        return "Good Morning";
    }
    else if (timeOfDay === "evening") {
        return "Good Evening";
    }
    else if (timeOfDay === "afternoon") {
        return "Good Afternoon";
    }
}

console.log(createGreeting("Yusuf", "Er", "evening"));

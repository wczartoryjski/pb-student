let daysInPolish = ["niedziela", "poniedziałek", "wtorek", "Środa", "czwartek", "piątek", "Sobota"]

function getDateNameInPolish() {
    let today = new Date()
    let dayOfWeek = today.getDay()
    return daysInPolish[dayOfWeek]
}

console.log(getDateNameInPolish())
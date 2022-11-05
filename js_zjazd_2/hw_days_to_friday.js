var weekdays = [
    "niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"
];
const daysToFriday = () => {
    const today = new Date()
    if (today.getDay() === 5) {
        return "Dzisiaj jest piątek, do następnego pozostało 7 dni"
    } else if (today.getDay() > 5) {
        return "Do następnego piątku zostało 6 dni"
    } else {
        const missingDaysAmount = 5 - today.getDay();
        return `Do następnego piątku zostało ${missingDaysAmount} dni`
    }
}

console.log(daysToFriday())
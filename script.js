// Function to populate the year dropdown dynamically
function populateYearDropdown() {
    const yearSelect = document.getElementById('year-select');
    // Populate years from 2025 to 2030
    for (let year = 2025; year <= 2031; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
}

// Function to get the Birth of the Bab date for the selected year
function getBirthOfTheBabDate(year) {
    const birthOfTheBabDates = {
        2025: "October 22",
        2026: "November 10",
        2027: "October 30",
        2028: "October 19",
        2029: "November 7",
        2030: "October 28",
        2031: "October 17",
        2032: "November 4"
    };
    return new Date(`${birthOfTheBabDates[year]} ${year}`);
}

// Helper function to format a Date object to a string in the format "Weekday, Month Day"
function formatDate(date) {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-AU', options);
}

// Helper function to add days to a date and ensure the correct year is set
function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

// Helper function to get the next day's date
function getNextDay(date) {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay;
}

// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

// Function to generate the Baha'i holy days based on Naw Ruz and the Birth of the Bab calculation
function getBahaIHolyDays(year, nawruzDate) {
    const birthOfTheBabDate = getBirthOfTheBabDate(year);
    const birthOfBahaUllahDate = getNextDay(birthOfTheBabDate);

    return [
        { name: "Nawruz", date: formatDate(nawruzDate) },
        { name: "First Day of Ridvan", date: formatDate(addDays(nawruzDate, 31)) },
        { name: "Ninth Day of Ridvan", date: formatDate(addDays(nawruzDate, 39)) },
        { name: "Twelfth Day of Ridvan", date: formatDate(addDays(nawruzDate, 42)) },
        { name: "Declaration of the Bab", date: formatDate(addDays(nawruzDate, 64)) },
        { name: "Ascension of Baha'u'llah", date: formatDate(addDays(nawruzDate, 69)) },
        { name: "Martyrdom of the Bab", date: formatDate(addDays(nawruzDate, 111)) },
        { name: "Birth of the Bab", date: formatDate(birthOfTheBabDate) },
        { name: "Birth of Baha'u'llah", date: formatDate(birthOfBahaUllahDate) }
    ];
}

// Function to get the Naw Ruz date for the selected year
function getNawruzDate(year) {
    const nawruzDates = {
        2025: "March 20",
        2026: "March 21",
        2027: "March 21",
        2028: "March 20",
        2029: "March 20",
        2030: "March 20",
        2031: "March 21",
        2032: "March 20",
        2033: "March 20",
        2034: "March 20",
        2035: "March 21",
        2036: "March 20",
        2037: "March 20",
        2038: "March 20",
        2039: "March 21",
        2040: "March 20",
        2041: "March 20",
        2042: "March 20",
        2043: "March 21",
        2044: "March 20"
    };
    return new Date(`${nawruzDates[year]} ${year}`);
}

// Function to get the Baha'i months for the given year and Naw Ruz date
function getBahaIMonths(nawruzDate, nawruzDateNextYear) {
    const bahaIMonths = [
        { name: "'Alá' (the Fast leading to Naw Ruz)", daysAfterNawruz: -19 },
        { name: "Bahá", daysAfterNawruz: 0 },
        { name: "Jalál", daysAfterNawruz: 19 },
        { name: "Jamál", daysAfterNawruz: 38 },
        { name: "'Azamat", daysAfterNawruz: 57 },
        { name: "Núr", daysAfterNawruz: 76 },
        { name: "Rahmat", daysAfterNawruz: 95 },
        { name: "Kalimát", daysAfterNawruz: 114 },
        { name: "Kamál", daysAfterNawruz: 133 },
        { name: "Asmá'", daysAfterNawruz: 152 },
        { name: "'Izzat", daysAfterNawruz: 171 },
        { name: "Mashíyyat", daysAfterNawruz: 190 },
        { name: "Ilm", daysAfterNawruz: 209 },
        { name: "Qudrat", daysAfterNawruz: 228 },
        { name: "Qawl", daysAfterNawruz: 247 },
        { name: "Masá'il", daysAfterNawruz: 266 },
        { name: "Sharaf", daysAfterNawruz: 285 },
        { name: "Sultán", daysAfterNawruz: 304 },
        { name: "Mulk", daysAfterNawruz: 323 },
        { name: "Ayyám-i-Há", daysAfterNawruz: 0 }, // Starts 342 days after Naw Ruz
        { name: "'Alá' (the Last Month)", daysAfterNawruz: 0 }, // Starts 20 days before the next Naw Ruz
    ];




    let startDate = nawruzDate;


// For Baha'i months, get the start date, add the days after naw ruz, 
// set the end date to 18 days after the start, 
// and then {commented out bit} set the start date of the next month to the next day after that
    let months = bahaIMonths.map((month, index) => {
        const startOfMonth = new Date(startDate);
        startOfMonth.setDate(startOfMonth.getDate() + month.daysAfterNawruz);
        const endOfMonth = addDays(startOfMonth, 18); // Each Baha'i month is 19 days long
        //startDate = addDays(endOfMonth, 1); // Start of the next month
        return { name: month.name, start: startOfMonth, end: endOfMonth };
    });

    // Ayyám-i-Há starts 342 days after Nawruz
    const ayyamiHaStart = addDays(nawruzDate, 342); // 342 days after Naw Ruz
    
    // Ayyám-i-Há end is 21 days before next year's Naw Ruz
    let ayyamiHaEnd = addDays(nawruzDateNextYear, -21); // 21 days before next Naw Ruz
    
    // Adjust Ayyám-i-Há end date for leap year
    if (isLeapYear(nawruzDateNextYear.getFullYear())) {
        // If next year's Naw Ruz is a leap year, Ayyám-i-Há end may fall on Feb 29
        ayyamiHaEnd = addDays(ayyamiHaEnd, 1); // Adjust for Feb 29
    }

    months[months.length - 2].start = ayyamiHaStart; // Correct Ayyám-i-Há start date
    months[months.length - 2].end = ayyamiHaEnd; // Correct Ayyám-i-Há end date

    // Correct Ala period calculation for the end of the year
    const alaStart = addDays(nawruzDateNextYear, -20); // Ala starts 20 days before Naw Ruz of the next year
    const alaEnd = addDays(nawruzDateNextYear, -1); // Ala ends 19 days after the start (March 20, 2026)
    if (isLeapYear(nawruzDateNextYear.getFullYear())) {
        // If next year's Naw Ruz is a leap year, Ayyám-i-Há end may fall on Feb 29
        alaStart = addDays(alaStart, 1); // Adjust for Feb 29
    }
    months[months.length - 1].start = alaStart;
    months[months.length - 1].end = alaEnd;

    return months;
}

// Function to fetch and display the Baha'i calendar dates for the selected year
function displayBahaICalendar(year) {
    const nawruzDate = getNawruzDate(year); // Get the Naw Ruz date for the selected year
    const nawruzDateNextYear = getNawruzDate(year + 1); // Get Naw Ruz date for the subsequent year
    const holyDays = getBahaIHolyDays(year, nawruzDate); // Get all the holy days
    const months = getBahaIMonths(nawruzDate, nawruzDateNextYear);

    const datesList = document.getElementById('dates-list');
    const monthsList = document.getElementById('baha-i-months');

    datesList.innerHTML = ''; // Clear previous list
    monthsList.innerHTML = ''; // Clear previous months list

    // Display Holy Days
    holyDays.forEach((holyDay) => {
        const li = document.createElement('li');
        li.textContent = `${holyDay.name}: ${holyDay.date}`;
        datesList.appendChild(li);
    });

    // Display Baha'i Months
    months.forEach((month) => {
        const monthItem = document.createElement('li');
        monthItem.textContent = `${month.name}: ${formatDate(month.start)} to ${formatDate(month.end)}`;
        monthsList.appendChild(monthItem);
    });
}

// Event listener for the year dropdown change
document.getElementById('year-select').addEventListener('change', (event) => {
    const year = parseInt(event.target.value);
    displayBahaICalendar(year);
});

// Initialize the page with the current year selected
populateYearDropdown();
const currentYear = new Date().getFullYear();
document.getElementById('year-select').value = currentYear;
displayBahaICalendar(currentYear);

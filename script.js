// Function to populate the year dropdown dynamically
function populateYearDropdown() {
    const yearSelect = document.getElementById('year-select');
    // Populate years from 2025 to 2031
    for (let year = 182; year <= 188; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
}

// Function to get the Birth of the Bab date for the selected year
function getBirthOfTheBabDate(year) {
    const birthOfTheBabDates = {
        182: "October 22",
        183: "November 10",
        184: "October 30",
        185: "October 19",
        186: "November 7",
        187: "October 28",
        188: "October 17",
        189: "November 4"
    };
    return new Date(`${birthOfTheBabDates[year]} ${year + 1843}`);
}

// Helper function to format a Date object to a string in the format "Weekday, Month Day"
function formatDate(date) {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
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

// Function to get the Naw Ruz date for the selected year
function getNawruzDate(year) {
    const nawruzDates = {
        182: "March 20",
        183: "March 21",
        184: "March 21",
        185: "March 20",
        186: "March 20",
        187: "March 20",
        188: "March 21",
        189: "March 20",
        190: "March 20",
        191: "March 20",
        192: "March 21",
        193: "March 20",
        194: "March 20",
        195: "March 20",
        196: "March 21",
        197: "March 20",
        198: "March 20",
        199: "March 20",
        200: "March 21",
        201: "March 20"
    };
    return new Date(`${nawruzDates[year]} ${year + 1843}`);
}

// Function to generate the Baha'i holy days based on Naw Ruz and the Birth of the Bab calculation
function getBahaIHolyDays(year, nawruzDate) {
    const birthOfTheBabDate = getBirthOfTheBabDate(year);
    const birthOfBahaUllahDate = addDays(birthOfTheBabDate,1);

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

function getBahaIMonthDays(nawruzDate,nawruzDateNextYear) {
   
    return [
        { name: "Bahá", startdate: formatDate(addDays(nawruzDate, 0)), enddate: formatDate(addDays(nawruzDate, 18)) },
        { name: "Jalál", startdate: formatDate(addDays(nawruzDate, 19)), enddate: formatDate(addDays(nawruzDate, 37)) },
        { name: "Jamál", startdate: formatDate(addDays(nawruzDate, 38)), enddate: formatDate(addDays(nawruzDate, 56)) },
        { name: "'Azamat", startdate: formatDate(addDays(nawruzDate, 57)), enddate: formatDate(addDays(nawruzDate, 75)) },
        { name: "Núr", startdate: formatDate(addDays(nawruzDate, 76)), enddate: formatDate(addDays(nawruzDate, 94)) },
        { name: "Rahmat", startdate: formatDate(addDays(nawruzDate, 95)), enddate: formatDate(addDays(nawruzDate, 113)) },
        { name: "Kalimát", startdate: formatDate(addDays(nawruzDate, 114)), enddate: formatDate(addDays(nawruzDate, 132)) },
        { name: "Kamál", startdate: formatDate(addDays(nawruzDate, 133)), enddate: formatDate(addDays(nawruzDate, 151)) },
        { name: "Asmá'", startdate: formatDate(addDays(nawruzDate, 152)), enddate: formatDate(addDays(nawruzDate, 170)) },
        { name: "'Izzat", startdate: formatDate(addDays(nawruzDate, 171)), enddate: formatDate(addDays(nawruzDate, 189)) },
        { name: "Mashíyyat", startdate: formatDate(addDays(nawruzDate, 190)), enddate: formatDate(addDays(nawruzDate, 208)) },
        { name: "Ilm", startdate: formatDate(addDays(nawruzDate, 209)), enddate: formatDate(addDays(nawruzDate, 227)) },
        { name: "Qudrat", startdate: formatDate(addDays(nawruzDate, 228)), enddate: formatDate(addDays(nawruzDate, 246)) },
        { name: "Qawl", startdate: formatDate(addDays(nawruzDate, 247)), enddate: formatDate(addDays(nawruzDate, 265)) },
        { name: "Masá'il", startdate: formatDate(addDays(nawruzDate, 266)), enddate: formatDate(addDays(nawruzDate, 284)) },
        { name: "Sharaf", startdate: formatDate(addDays(nawruzDate, 285)), enddate: formatDate(addDays(nawruzDate, 303)) },
        { name: "Sultán", startdate: formatDate(addDays(nawruzDate, 304)), enddate: formatDate(addDays(nawruzDate, 322))},
        { name: "Mulk", startdate: formatDate(addDays(nawruzDate, 323)), enddate: formatDate(addDays(nawruzDate, 341)) },
        { name: "Ayyám-i-Há", startdate: formatDate(addDays(nawruzDate, 342)), enddate: formatDate(addDays(nawruzDateNextYear, -20)) }, // Starts 342 days after Naw Ruz
        { name: "'Alá'", startdate: formatDate(addDays(nawruzDate, -19)), enddate: formatDate(addDays(nawruzDateNextYear, -1)) } // Starts 20 days before the next Naw Ruz


    ];

}

// Function to fetch and display the Baha'i calendar dates for the selected year
function displayBahaICalendar(year) {
    const nawruzDate = getNawruzDate(year); // Get the Naw Ruz date for the selected year
    const nawruzDateNextYear = getNawruzDate(year + 1); // Get Naw Ruz date for the subsequent year
    const holyDays = getBahaIHolyDays(year, nawruzDate); // Get all the holy days
    const months = getBahaIMonthDays(nawruzDate, nawruzDateNextYear);

    const datesList = document.getElementById('dates-list');
    const monthsList = document.getElementById('baha-i-months');

    datesList.innerHTML = ''; // Clear previous list
    monthsList.innerHTML = ''; // Clear previous months list

    // Display Holy Days
    holyDays.forEach((holyDay) => {
        const holydayItem = document.createElement('li');
        holydayItem.textContent = `${holyDay.name}: ${holyDay.date}`;
        datesList.appendChild(holydayItem);
    });

    // Display Baha'i Months
    months.forEach((month) => {
        const monthItem = document.createElement('li');
        monthItem.textContent = `${month.name}: ${month.startdate} to ${month.enddate}`;
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
const currentYear = new Date().getFullYear() - 1843;
document.getElementById('year-select').value = currentYear;
displayBahaICalendar(currentYear);

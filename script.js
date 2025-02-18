// Function to populate the year dropdown dynamically
function populateYearDropdown() {
    const currentYear = new Date().getFullYear();
    const yearSelect = document.getElementById('year-select');
    for (let year = currentYear; year >= currentYear - 50; year--) {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    }
  }
  
  // Function to fetch and display the Baha'i calendar dates for the selected year
  function displayBahaICalendar(year) {
    const holyDays = getBahaIHolyDays(year);
    const datesList = document.getElementById('dates-list');
    datesList.innerHTML = ''; // Clear previous list
  
    holyDays.forEach(holyDay => {
      const li = document.createElement('li');
      li.textContent = `${holyDay.name}: ${holyDay.date}`;
      datesList.appendChild(li);
    });
  }
  
  // Sample holy days data for the Baha'i calendar (for demo purposes)
  function getBahaIHolyDays(year) {
    return [
      { name: "Nawruz", date: `March 21, ${year}` },
      { name: "Ridvan", date: `April 20, ${year}` },
      { name: "Declaration of the Bab", date: `May 23, ${year}` },
      { name: "Ascension of Baha'u'llah", date: `May 29, ${year}` },
      { name: "Martyrdom of the Bab", date: `July 9, ${year}` },
      { name: "Birth of the Bab", date: `October 20, ${year}` },
      { name: "Birth of Baha'u'llah", date: `November 12, ${year}` }
    ];
  }
  
  // Event listener for the dropdown to update the calendar on change
  document.getElementById('year-select').addEventListener('change', function() {
    const selectedYear = this.value;
    displayBahaICalendar(selectedYear);
  });
  
  // Initialize the page by populating the year dropdown and displaying the calendar for the current year
  populateYearDropdown();
  displayBahaICalendar(new Date().getFullYear());
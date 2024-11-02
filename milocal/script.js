function capitalizeFirstLetterOfEachWord(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsList = document.getElementById('resultsList');
    const hiddenTable = document.getElementById('hiddenTable');
    
    // Clear previous results
    resultsList.innerHTML = '';
    
    // Check if input is empty
    if (input.trim() === '') {
        alert("Please enter a search term."); // Optional alert for empty input
        document.getElementById('searchResults').style.display = 'none'; // Hide results section
        return; // Exit the function early
    }

    // Get rows from the hidden table
    const rows = hiddenTable.getElementsByTagName('tr');
    
    let found = false; // Flag to check if any result is found

    // Loop through each row in the hidden table
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const name = cells[0].innerText.toLowerCase();
        const category = cells[1].innerText.toLowerCase();
        
        // Check if input matches either name or category (partial match)
        if (name.includes(input) || category.includes(input)) {
            found = true; // Set flag to true if match is found
            
            // Capitalize first letters of each word
            const formattedName = capitalizeFirstLetterOfEachWord(name);
            const formattedCategory = capitalizeFirstLetterOfEachWord(category);
            const link = cells[2].innerText;

            // Create a new list item for the result in the desired format
            const listItem = document.createElement('li');
            listItem.innerHTML = `${formattedName} - ${formattedCategory} - <a href="${link}" target="_blank">Link</a>`;
            resultsList.appendChild(listItem);
        }
    }

    // Display search results section if any result is found
    const searchResultsSection = document.getElementById('searchResults');
    if (found) {
        searchResultsSection.style.display = 'block';
    } else {
        searchResultsSection.style.display = 'none'; // Hide if no results found
        alert("No results found.");
    }
}

// Add event listener for Enter key press
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { // Check if Enter key is pressed
        event.preventDefault(); // Prevent default form submission behavior
        search(); // Call the search function
    }
});
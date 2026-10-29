Feature 1: Navigation Toggle (Mobile Menu)


1. Analysis

• Trigger: User clicks or taps the hamburger menu icon.
• Expected DOM Change: The navigation menu slides or pops into view (usually by adding a visible class name to the menu element), and the hamburger icon might change into an "X" close icon.
• Edge Cases:
	• The user clicks the button too fast multiple times.
	• The user resizes the browser window from a phone size to a desktop size while the menu is still open.

2. Pseudocode

1. Listen for a click event on the mobile menu button.
2. Check if the navigation menu currently has the "active" or "visible" class.
3. If it has the class, remove it (to hide the menu) and change the icon back to a hamburger.
4. If it does not have the class, add it (to show the menu) and change the icon to an "X".

Feature 2: Dark Mode Toggle


1. Analysis

• Trigger: User clicks the dark mode switch or button.
• Expected DOM Change: A dark theme class is applied to the main <body> tag, changing background colors to dark and text colors to light. The toggle button's text or icon changes (e.g., from a sun to a moon).
• Edge Cases:
	• The page reloads, and the user's preference is forgotten (if not saved).
	• The user's operating system already prefers dark mode, creating a conflict.

2. Pseudocode

1. Listen for a click event on the theme toggle button.
2. Toggle the "dark-mode" class on the <body> element.
3. Check if the <body> now contains the "dark-mode" class.
4. If yes, update the button icon to a sun (indicating click to go back to light).
5. If no, update the button icon to a moon.
6. Save the current choice to the browser's memory (Local Storage) so it stays on reload.

Feature 3: Dynamic Content from an Array


1. Analysis

• Trigger: The page finishes loading (or a "Load More" button is clicked).
• Expected DOM Change: The JavaScript loops through a list of data (an array) and generates new HTML elements (like cards or list items) inside an empty container element on the page.
• Edge Cases:
	• The array is completely empty, leaving a blank, broken-looking section.
	• The text inside the array is way too long and breaks the layout of your boxes/cards.

2. Pseudocode

1. Wait for the webpage structure to fully load.
2. Find the empty container element in the HTML where the items should live.
3. Check if the content array has any items inside it.
4. If the array is empty, insert a message saying "No items available."
5. If the array has items, loop through each item one by one.
6. For each item, create a new HTML structural block (like a <div>).
7. Insert the item's text/data into that new block.
8. Append (add) the completed block into the main container element.

Feature 4: Contact Form Validation


1. Analysis

• Trigger: User clicks the "Submit" button on the form.
• Expected DOM Change: If an input is wrong, error messages appear next to the fields, and the borders might turn red. If everything is correct, a success message appears and the form clears.
• Edge Cases:
	• The user submits a bunch of blank spaces instead of actual text.
	• The user enters an invalid email format (like name@com without a .com).

2. Pseudocode

1. Listen for the submit event on the form element.
2. Stop the form from automatically reloading the page (prevent default behavior).
3. Clear any existing error messages from previous attempts.
4. Read the values entered into the text fields (Name, Email, Message).
5. Check if the Name or Message fields are empty or just spaces.
6. Check if the Email field matches a standard email format.
7. If any check fails, find the error element next to that field, insert an error message, and mark the field as invalid.
8. If all checks pass, hide the form, display a success message on the screen, and clear the inputs.

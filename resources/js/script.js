// Function to toggle dark mode
const toggleDark = () => {
    document.body.classList.toggle('dark-mode');
    document.body.getElementsByTagName('main')[0].classList.toggle('dark-mode');
    
    // Store the current state of dark mode in localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
};

// Function to apply dark mode based on stored state
const applyDarkMode = () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
        document.body.getElementsByTagName('main')[0].classList.add('dark-mode');
    }
};

// Apply dark mode on page load
// window.onload = applyDarkMode;
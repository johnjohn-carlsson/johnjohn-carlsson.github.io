document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('output');
    const pageContentWindow = document.getElementById('page-content-window');


    // Mapping commands to file paths
    const commands = {
        '/help': '/terminalcode/textfiles-terminal/helptext.txt',
        '/home': '/terminalcode/textfiles-terminal/homepage.txt',
        '/pages': '//terminalcode/textfiles-terminal/allpages.txt',
        '/cv': '/terminalcode/textfiles-terminal/cv_page.txt',
        '/contact': '/terminalcode/textfiles-terminal/contactpage.txt',
        '/portfolio': '/terminalcode/textfiles-terminal/portfolio.txt',
        '/blog':  '/terminalcode/textfiles-terminal/blogpages/blogdirectory.txt'
        // Add more commands and their corresponding file paths as needed
    };

    async function loadTextFile(filePath) {
        const response = await fetch(filePath);
        return response.text(); // Converts the fetched file into text
    }

    async function processCommand(inputText) {
        // Display the input in the terminal output, unless it's empty
        if (inputText !== '') {
            output.textContent = inputText;
        }

        // Check if the input is a recognized command or default to '/home' if empty
        const commandKey = inputText !== '' ? inputText : '/home';
        if (commands[commandKey]) {
            const fileContent = await loadTextFile(commands[commandKey]);
            pageContentWindow.innerHTML = fileContent; // Assuming it's safe HTML
        } else {
            pageContentWindow.textContent = 'Command not recognized. Try "help" for a list of commands.';
        }
    }

    input.addEventListener('keydown', async function(event) {
        if (event.key === 'Enter') {
            await processCommand(input.value.trim());
            input.value = ''; // Clear input box after processing
            event.preventDefault(); // Prevent form submission
        }
    });

    // Load '/home' content by default when the page loads
    processCommand('');
});
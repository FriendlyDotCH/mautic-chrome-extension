// Save options to chrome.storage
function save_options() {
    // Create variables to hold the user's email address and Mautic instance
    let userEmail = document.getElementById('email').value;
    let instanceUrl = document.getElementById('url').value;

    // Save settings to chrome.storage API with chrome.storage.sync.set
        // Pass in key:value
    chrome.storage.sync.set({
        email: userEmail,
        url: instanceUrl
    },function(){ // This is a callback function
        // Update status div to let user know that settings have been saved
        let status = document.getElementById('status');
        status.textContent = 'Settings saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 5000);
    });
};

// Retrieve settings from save_options()
function restore_options() {
    let userEmail = document.getElementById('email').value;
    let instanceUrl = document.getElementById('url').value;
    // Get settings from chrome.storage API with chrome.storage.sync.get
    chrome.storage.sync.get({
        // Set default values 
        email: userEmail,
        url: instanceUrl
    }, function(items) { // This is a callback function
        // Get the values of the items
        document.getElementById('email').value = items.email;
        document.getElementById('url').value = items.url;
    });
}

// When DOM is loaded, set default values
document.addEventListener('DOMContentLoaded', restore_options);

// When user clicks "save", save the values
document.getElementById('save').addEventListener('click', save_options);


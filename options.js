// Save options to chrome.storage
function save_options() {
    // Create variables to hold the user's email address and Mautic instance
    let userEmail = document.getElementById('email').value;
    let instanceUrl = document.getElementById('url').value;

    // Save settings to chrome.storage API with chrome.storage.sync.set
    chrome.storage.sync.set({
        userEmail: email,
        instanceUrl: url
    },function(){
        // Update status div to let user know that settings have been saved
    });
};

// Retrieve settings from save_options()
function restore_options() {
    // Get settings from chrome.storage API with chrome.storage.sync.get
    chrome.storage.sync.get({
        // Set default values 
        userEmail: "name@example.com",
        instanceUrl: "demo.com"
    }, function(items) { //This is a callback function
        // Get the values of the items
        document.getElementById('email').value = items.userEmail;
        document.getElementsById('url').value = items.instanceUrl;
    });
}

// When DOM is loaded, set default values
document.addEventListener('DOMContentLoaded', restore_options);

// When user clicks "save", save the values
document.getElementById('save').addEventListener('click', save_options);


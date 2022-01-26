/* 
HOW TO CREATE MAUTIC/GMAIL CHROME EXTENSION

1. Create the necessary files. Will need:
    * Options page for them to input Mautic instance URL and credentials to connect
    * CSS to style this options page a little
    * Script page (background.js?) to contain the JS necessary
    * Manifest file
    * Possibly an index.html that will pop up when someone click the extension icon. Could also put the options stuff in here

2. Scripts page scripts (https://developer.chrome.com/docs/extensions/mv3/content_scripts/)
    * Ideal outcome: Someone can send an email and the email will be added to Mautic in the user card history. Tracking opens and adding to card history would be cool too
    * Create the content scripts (might need background scripts for some operations, not sure yet)
        - It sounds like I will need content scripts with something like this in manifest.json:
            o   "content_scripts": [ {
                    "matches":      ["*://*.mail.google.com/*"],
                    "run_at":       "document_idle",
                    "css":          ["default.css"],
                    "js":           ["style-toggler.js"]
                } ]
        - Can be injected statically (in the manifest.json file, shown above) or programatically. For programatic insertion, extension needs host permissions for the page that it's injecting script into. For reference: https://developer.chrome.com/docs/extensions/mv3/content_scripts/
    * Algorithm for scripts:
        - Retrieve variables for Mautic URL and API connection
        - Get Mautic info and API connection from the user (get input)
        - Check is the user is on Gmail
        - Check if user is composing an email
        - On email composition card, create a box that a user can check. This is to tell Mautic that an email has been sent to a contact
        - Create a variable to store contact email
                o connect this variable with the Mautic API and contacts
        - Use Mautic API to register a sent email to this contact
        LATER
        - Track sent email opens and send these to Mautic
        - Track email link clicks and send these to Mautic

3. Mautic API connection
    * Useful docs: https://developer.mautic.org/#rest-api

4. Chrome useful docs
    * https://developer.chrome.com/docs/extensions/mv3/getstarted/
    * https://developer.chrome.com/docs/extensions/mv3/devguide/
    * https://developer.chrome.com/docs/extensions/reference/

*/

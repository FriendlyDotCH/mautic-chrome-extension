// Listen for Compose buttonclick
window.onload=function() {
    let composeButton = document.getElementsByClassName('T-I T-I-KE L3');
    // if (composeButton) {
    composeButton[0].addEventListener("click", addTrackButton);

    // Listen for Reply arrow (top reply) click
    let topReplyButton = document.getElementsByClassName('T-I J-J5-Ji T-I-Js-IF aaq T-I-ax7 L3');
    topReplyButton[0].addEventListener("click", addTrackButton);

    // Listen for Reply (bottom reply) button click
    let bottomReplyButton = document.getElementsByClassName('ams bkH');
    bottomReplyButton[0].addEventListener("click", addTrackButton);

    // Listen for Reply All button click
    let replyAllButton = document.getElementsByClassName('ams bkI');
    replyAllButton[0].addEventListener("click", addTrackButton);

    // Listen for Forward button click
    let forwardButton = document.getElementsByClassName('ams bkG');
    forwardButton[0].addEventListener("click", addTrackButton);
}

// Would be nice to have some function where instead of listening for all these clicks, we just wait for compose window to appear. Not sure how to do this

// Add the Mautic tracking to Gmail
function addTrackButton() {
    setTimeout(function(){ // Need this so our code doesn't load before the Compose window is ready

        // Create a variable for where we want the option to go
        let optionsArea = document.getElementsByClassName("aDh"); 
        if (optionsArea[0]) {
            // Create checkbox
            let mauticCheckbox = document.createElement('input');
            mauticCheckbox.setAttribute('type','checkbox');
            mauticCheckbox.setAttribute('name','mauticCheckbox');
            mauticCheckbox.setAttribute('id','mauticCheckboxOption');
            optionsArea[0].appendChild(mauticCheckbox);
            
            // Create text label
            let mauticLabel = document.createElement('label');
            mauticLabel.setAttribute('name','mauticLabel');
            mauticLabel.innerHTML = " Track with Mautic";
            mauticLabel.setAttribute('id','mauticLabel');
            optionsArea[0].appendChild(mauticLabel);
       }

    }, 100);
}
// Listen for Compose buttonclick
window.onload=function() {
    let composeButton = document.getElementsByClassName('T-I T-I-KE L3');
    // if (composeButton) {
    composeButton[0].addEventListener("click", addUpdateButton);

    // Listen for Reply arrow (top reply) click
    let topReplyButton = document.getElementsByClassName('T-I J-J5-Ji T-I-Js-IF aaq T-I-ax7 L3');
    topReplyButton[0].addEventListener("click", addUpdateButton);

    // Listen for Reply (bottom reply) button click
    let bottomReplyButton = document.getElementsByClassName('ams bkH');
    bottomReplyButton[0].addEventListener("click", addUpdateButton);

    // Listen for Reply All button click
    let replyAllButton = document.getElementsByClassName('ams bkI');
    replyAllButton[0].addEventListener("click", addUpdateButton);

    // Listen for Forward button click
    let forwardButton = document.getElementsByClassName('ams bkG');
    forwardButton[0].addEventListener("click", addUpdateButton);
}

// Would be nice to have some function where instead of listening for all these clicks, we just wait for compose window to appear. Not sure how to do this

// Add the Mautic tracking to Gmail
function addUpdateButton() {
    console.log("test")
    // Create a variable for where we want the option to go
    let optionsArea = document.getElementsByClassName("gU az5");
    if (optionsArea && optionsArea.length > 0) {
        let mauticLabel = document.createElement('label');
        mauticLabel.setAttribute('name','mauticslabel');
        mauticLabel.innerHTML = "Track with Mautic: ";
        mauticLabel.setAttribute('id','mauticLabel');
        optionsArea[0].appendChild(mauticLabel);

        let ecs = document.createElement('input');
        ecs.setAttribute('type','checkbox');
        ecs.setAttribute('name','ecsbox');
        chrome.storage.sync.get("ecs_mode", 
            function(val) {
            ecs.checked = val["ecs_mode"];
        });
        ecs.setAttribute('id','ecsOption');
        optionsArea[0].appendChild(ecs);
    }
}
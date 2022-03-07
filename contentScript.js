// Listen for Compose buttonclick
window.onload=function() {
    let composeButton = document.getElementsByClassName('T-I T-I-KE L3');
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
            mauticCheckbox.setAttribute('id','mauticCheckbox');
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

function addPixel() {
    // Add the tracking pixel to email when sent
    // console.log("test")
    let pixel = document.createElement('img');
    // let mauticUrl = 'https://demo-en.friendlyautomate.com';
    pixel.id = 'tracker'
    pixel.src = 'https://demo-en.friendlyautomate.com/index.php/gmail/tracking.gif?d=H4sIAAAAAAAEAIVRTW%2FCMAz9LRyCtgNVlFBpHHroWsRuk8ak7RpaUzqaGCUp0H8%2Fpy0TH4dJUZy892w921uLOvkCa8BGK2WLWi2dt6pUbM7PYPEcFainoFXdJKdBVvUy4quA9rxrNz9Q%2BCQ16HdgmeAenKewpfIU3lvfIO6nGyy75HNXO8LQAN3984R2X5tqMpkwnjOejrfg19%2FBJIHBJsskS3M1MOvOedChUA5HaPBAsp54a7UyBH%2BAw9YWECRrsMc6PHvFd2iR0NfW1QbcjUDwMjhctYqqq0YxkQU6SqMhNxi85GeoD8p0134zaBom%2By4ezlPMxTPFeCH5TLzI%2BdgizeEu5aIUQixmIubjSG5WAY8bC8kyC%2FvxSBX%2Flcvl3bT%2Fvr8k1oBgIQIAAA%3D%3D&sig=cf078d5b';
    
    
    let message = document.querySelector('.Am');
    // let trackingGif = '<img style="display: none;" height="1" width="1" src="\'https://demo-en.friendlyautomate.com/index.php/gmail/tracking.gif?d=H4sIAAAAAAAEAIVRTW%2FCMAz9LRyCtgNVlFBpHHroWsRuk8ak7RpaUzqaGCUp0H8%2Fpy0TH4dJUZy892w921uLOvkCa8BGK2WLWi2dt6pUbM7PYPEcFainoFXdJKdBVvUy4quA9rxrNz9Q%2BCQ16HdgmeAenKewpfIU3lvfIO6nGyy75HNXO8LQAN3984R2X5tqMpkwnjOejrfg19%2FBJIHBJsskS3M1MOvOedChUA5HaPBAsp54a7UyBH%2BAw9YWECRrsMc6PHvFd2iR0NfW1QbcjUDwMjhctYqqq0YxkQU6SqMhNxi85GeoD8p0134zaBom%2By4ezlPMxTPFeCH5TLzI%2BdgizeEu5aIUQixmIubjSG5WAY8bC8kyC%2FvxSBX%2Flcvl3bT%2Fvr8k1oBgIQIAAA%3D%3D&sig=cf078d5b \'">';

    message.appendChild(pixel);

}

// Wait for compose window to open, then add tracking pixel

// Need to add a promise that awaits this element, then checks once it has been clicked
function test() {
    setTimeout(function(){
        if (document.getElementById('mauticCheckbox').checked) {
            console.log("checked")
            // addPixel();
        } else {
            console.log("Not checked")
        }
    }, 1000);
}

test()

// TypeError: Cannot convert object to primitive type
function waitForElement(element){
    return new Promise(function(resolve) {
        // maybe uri could be a param too
        openedWindow = window.open("http://mail.google.com/*"); // Might need to change this
   
        // Check the window every .1 seconds for the element
        window.setInterval(
            function() {
   
                window.clearInterval(openedWindow);
   
                if ($(openedWindow.window.document).find(element).length == 1) {
                    resolve(true);
                }
            }, 100);
    });
}

waitForElement('#mauticCheckbox').then(test())


// Failed MutationObserver #1
const observedCheckbox = document.querySelector("#mauticCheckbox");

const observer = new MutationObserver(function() {
    console.log('checkbox was detected');
});

observer.observe(observedCheckbox, {subtree: true, childList: true});


// Failed MutationObserver #2
const observer = new MutationObserver(mutationRecordList => {
    for (mutationRecord of mutationRecordList) {
      if (mutationRecord.target.getAttribute('id')=='#mauticCheckbox') {
        console.log('The element just appeared');
      }
    }
  });
  observer.observe(document.body, {childList: true, subtree: true});


// let trackingGif = '<img style="display: none;" height="1" width="1" src="' +
//     mautic_url + '/plugin/Gmail/tracking.gif?d=' + d + '&sig=' + hash + '" ' +
//     'alt="Mautic is open source marketing automation">';

// When checkbox is clicked, add a 1x1 tracking image to the email
// Send this tracking image to the Mautic URL provided on the options page
// Tracking pixel should be able to say that email address is being contacted. Find a way to do this if not
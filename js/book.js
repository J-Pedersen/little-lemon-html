// ---------------------------------
//        Booking Page Scripts
// ---------------------------------
 
// ---------------------------------
//         People Output Script
// ---------------------------------
function updatePeople() {
    var slider = document.getElementById("people");
    var output = document.getElementById("num-people");

    if (output && output.querySelector('strong')) {
        output.querySelector('strong').innerText = slider.value;
    }
}

// ---------------------------------
//         Form Reset Script
// ---------------------------------
function resetForm() {

    document.getElementById("num-people").innerText = "1";

    var defaultTime = 480;
    document.getElementById("reserve-time").value = defaultTime;
    
    updateTime();

    setTimeout(updatePeople, 0);
    location.reload()
}

// ---------------------------------
//         Time Format Script
// ---------------------------------
function updateTime() {
    var slider = document.getElementById("reserve-time");
    var output = document.getElementById("selected-time");

    var minutes = parseInt(slider.value);

    var hours = Math.floor(minutes / 60);

    var mins = minutes % 60;
    var period = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12;

    output.innerText = hours + ":" + (mins < 10 ? "0" : "") + mins + " " + period;
}
var countdowndate = new Date("june 24,2025 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countdowndate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    var minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
    var seconds = Math.floor((distance % (1000 * 60) / 1000));

    days = (days < 10) ? "0" + days : days;
    document.getElementById('days').innerHTML = days;

    hours = (hours < 10) ? "0" + hours : hours;
    document.getElementById('hours').innerHTML = hours;

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    document.getElementById('minutes').innerHTML = minutes;

    seconds = (seconds < 10) ? "0" + seconds : seconds;
    document.getElementById('seconds').innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);

        document.getElementById('days').innerHTML = "00";
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00"
    }
}, 1000);

const form = document.querySelector('contact_form');
const email = document.querySelector('.email');

function sendEmail() {
    Email.send({
        SecureToken: "0d2275b7-045d-4c82-bdd8-10604a58ac7d",
        To: 'royalgujjar813@gmail.com',
        From: document.querySelector('.email').value,
    }).then(
        message => (document.querySelector('.right form span h4').style.display = "block")
    );
}

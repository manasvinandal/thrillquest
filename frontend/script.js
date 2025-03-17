document.getElementById("bookingForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Booking Confirmed! We will contact you soon.");
});

document.getElementById("queryForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your query has been submitted. We'll get back to you soon!");
});

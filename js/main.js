document.getElementById("get-in-touch-button").addEventListener("click", function() {
    const email = "info@sastamein.com";
    const subject = "Get in Touch Inquiry";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
});
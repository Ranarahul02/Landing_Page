const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin: "right",
});
scrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay: 500,
});
scrollReveal().reveal(".header_content p",{
    ...scrollRevealOption,
    delay: 1000,
});
scrollReveal().reveal(".header_content form",{
    ...scrollRevealOption,
    delay: 1500,
});
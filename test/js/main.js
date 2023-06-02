window.addEventListener("DOMContentLoaded", () => {
    $(".carousel").carousel({
        autoplay: 5000
    });
    $("a").click((e) => e.preventDefault());
    let name = "John";
    $("h2").eq(0).html(`Это предложение именно для вас, ${name}`);

})
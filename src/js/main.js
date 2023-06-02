// import from "./library/lib";
import $ from "./library/lib";
// method index is: finding index of elem among adjacents elems in common parent 
// method find is: finding elems by selector inside of already found
// method siblings is: to get arrey adjacents elems exclude this elem 

$("button").addAttr("check", true);
// $("button").removeAttr("class");
// console.log($("button").getAttr("pr"));
// $("div").on("click", sayHello);
// $("div").off("click", sayHello);
// $("div").click(sayHello);
// $("button").on("click", function () {
//     // $(this).toggleClass("active");
//     $("div").eq(2).toggleClass("active");
// });

// $("div").click(function () {
//     console.log($(this).index());
// })

$("h2").fadeOut(1800);
// console.log($().check());
// $("#first").fadeOut(8000);
// $(".container #first").on("click", () => $(".container div").eq(0).fadeToggle(800));
// $(".container [data-count='second']").on("click", () => $(".container div").eq(1).fadeToggle(800));
// $(".container button").eq(2).on("click", () => $(".container .w-500").fadeToggle(800));

// $(".wrap").html(`<div class="dropdown">
// <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton2">Dropdown button</button>
// <div class="dropdown-menu" data-toggle-id="dropdownMenuButton2">
//     <a href="#" class="dropdown-item">Action 1</a>
//     <a href="#" class="dropdown-item">Action 2</a>
//     <a href="#" class="dropdown-item">Action 3</a>
// </div>
// </div>`);
// $(".dropdown-toggle").dropdown();
// $('[data-toggle="modal"]').modal();
// $("#trigger").click(() => $("#trigger").createModal({
//     text: {
//         title: "Modal title",
//         body: "Lorem Lorem Lorem Lorem Lorem"
//     },
//     btns: {
//         count: 3,
//         settings: [
//             ["Close", ["btn-danger", "mr-10"], true],
//             ["Save changes", ["btn-success"], false, () => alert("Данные сохранены")],
//             ["Another btn", ["btn-warning", "ml-10"], false, () => alert("Hey World")]
//         ]
//     }
// }));
// $("[data-tabpanel] .tab-item").tab();
// $(".carousel").carousel({autoplay: 1000});
// $().get('https://jsonplaceholder.typicode.com/todos/1').then(res => console.log(res));

// ====================
// console.log($("hr"), $(this));
// console.log($("button").html("hey"));
// console.log($("div").eq(2).find(".more"));
// console.log($(".some").closEst(".findme").addClass("es"));
// console.log($(".more").eq(0).siblings());
// console.log($("buttond").addClass("es"));


// console.log(document.querySelector(".more").closest('.findme'));





// let animal = {
//     name: "anim",
//     cal() {
//         return this.name;
//     }
//   };

//   let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
//   };
//   console.log(rabbit.cal())
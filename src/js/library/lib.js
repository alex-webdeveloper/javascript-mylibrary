import $ from "./core";
import "./modules/display";
import "./modules/classes";
import "./modules/attributes";
import "./modules/handlers";
import "./modules/actions";
import "./modules/effects";
import "./components/dropdown";
import "./components/modal";
import "./components/tab";
import "./components/accordion";
import "./components/carousel";
import "./services/requests";

$.prototype.check = function (){
    return "es";
}
export default $;
// console.log();
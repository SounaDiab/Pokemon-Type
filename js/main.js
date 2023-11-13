var types = ["bug", "dark", "dragon", "electric", "fairy", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water", "fighting"];
var colors = ["#9fc789", "#90867d", "#7ba2ef , #de6e58", "#dbda1d", "#ff6ed9", "#fc922e", "#79c9ee, #bab3a3", "#b070ff", "#90e484", "#e9e75e, #af8f3a", "#2cd9d3", "#b6b5b1", "#d28ee3", "#ef55b3", "#c4a966", "#b7bad9", "#5f93ff", "#f56f6c"];
var p1 = [1, 2, 1, 1, 1/2, 1/2, 1/2, 1/2, 2, 1, 1, 1, 1/2, 2, 1, 1/2, 1, 1/2];
var p2 = [1, 1/2, 1, 1, 1/2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1/2, 1, 1/2];
var p3 = [1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1/2, 1, 1];
var p4 = [1, 1, 1/2, 1/2, 1, 1, 2, 1, 1/2, 0, 1, 1, 1, 1, 1, 1, 2, 1];
var p5 = [1, 2, 2, 1, 1, 1/2, 1, 1, 1, 1, 1, 1, 1/2, 1, 1, 1/2, 1, 2];
var p6 = [2, 1, 1/2, 1, 1, 1/2, 1, 1, 2, 1, 2, 1, 1, 1, 1/2, 2, 1/2, 1];
var p7 = [2, 1, 1, 1/2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1/2, 1/2, 1, 2];
var p8 = [1, 1/2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 2, 1, 1/2, 1, 1];
var p9 = [1/2, 1, 1/2, 1, 1, 1/2, 1/2, 1, 1/2, 2, 1, 1, 1/2, 1, 2, 1/2, 2, 1];
var p10 = [1/2, 1, 1, 2, 1, 2, 0, 1, 1/2, 1, 1, 1, 2, 1, 2, 2, 1, 1];
var p11 = [1, 1, 2, 1, 1, 1/2, 2, 1, 2, 2, 1/2, 1, 1, 1, 1, 1/2, 1/2, 1];
var p12 = [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1/2, 1, 1];
var p13 = [1, 1, 1, 1, 2, 1, 1, 1/2, 2, 1/2, 1, 1, 1/2, 1, 1/2, 0, 1, 1];
var p14 = [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1/2, 1, 1/2, 1, 2];
var p15 = [2, 1, 1, 1, 1, 2, 2, 1, 1, 1/2, 2, 1, 1, 1, 1, 1/2, 1, 1/2];
var p16 = [1, 1, 1, 1/2, 2, 1/2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1/2, 1/2, 1];
var p17 = [1, 1, 1/2, 1/2, 1, 2, 1, 1, 1/2, 1, 2, 1, 1, 1, 2, 1, 1, 1];
var p18 = [1/2, 2, 1, 1, 1/2, 1, 1/2, 0, 1, 1, 2, 2, 1/2, 1/2, 2, 2, 1, 1];

for(let i=0; i<types.length; i++){
    if(document.querySelector(".row-bug")){
        document.querySelector(".row-bug .status-" + i).innerHTML = p1[i] + "x";
    }
    if(document.querySelector(".row-dark")){
        document.querySelector(".row-dark .status-" + i).innerHTML = p2[i] + "x";
    }
    if(document.querySelector(".row-dragon")){
        document.querySelector(".row-dragon .status-" + i).innerHTML = p3[i] + "x";
    }
    if(document.querySelector(".row-electric")){
        document.querySelector(".row-electric .status-" + i).innerHTML = p4[i] + "x";
    }
    if(document.querySelector(".row-fairy")){
        document.querySelector(".row-fairy .status-" + i).innerHTML = p5[i] + "x";
    }
    if(document.querySelector(".row-fire")){
        document.querySelector(".row-fire .status-" + i).innerHTML = p6[i] + "x";
    }
    if(document.querySelector(".row-flying")){
        document.querySelector(".row-flying .status-" + i).innerHTML = p7[i] + "x";
    }
    if(document.querySelector(".row-ghost")){
        document.querySelector(".row-ghost .status-" + i).innerHTML = p8[i] + "x";
    }
    if(document.querySelector(".row-grass")){
        document.querySelector(".row-grass .status-" + i).innerHTML = p9[i] + "x";
    }
    if(document.querySelector(".row-ground")){
        document.querySelector(".row-ground .status-" + i).innerHTML = p10[i] + "x";
    }
    if(document.querySelector(".row-ice")){
        document.querySelector(".row-ice .status-" + i).innerHTML = p11[i] + "x";
    }
    if(document.querySelector(".row-normal")){
        document.querySelector(".row-normal .status-" + i).innerHTML = p12[i] + "x";
    }
    if(document.querySelector(".row-poison")){
        document.querySelector(".row-poison .status-" + i).innerHTML = p13[i] + "x";
    }
    if(document.querySelector(".row-psychic")){
        document.querySelector(".row-psychic .status-" + i).innerHTML = p14[i] + "x";
    }
    if(document.querySelector(".row-rock")){
        document.querySelector(".row-rock .status-" + i).innerHTML = p15[i] + "x";
    }
    if(document.querySelector(".row-steel")){
        document.querySelector(".row-steel .status-" + i).innerHTML = p16[i] + "x";
    }
    if(document.querySelector(".row-water")){
        document.querySelector(".row-water .status-" + i).innerHTML = p17[i] + "x";
    }
    if(document.querySelector(".row-fighting")){
        document.querySelector(".row-fighting .status-" + i).innerHTML = p18[i] + "x";
    }

    if(p1[i] == 0){
        document.querySelector(".row-bug .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p1[i] == 1/2){
        document.querySelector(".row-bug .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p1[i] == 2){
        document.querySelector(".row-bug .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p2[i] == 0){
        document.querySelector(".row-dark .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p2[i] == 1/2){
        document.querySelector(".row-dark .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p2[i] == 2){
        document.querySelector(".row-dark .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p3[i] == 0){
        document.querySelector(".row-dragon .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p3[i] == 1/2){
        document.querySelector(".row-dragon .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p3[i] == 2){
        document.querySelector(".row-dragon .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p4[i] == 0){
        document.querySelector(".row-electric .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p4[i] == 1/2){
        document.querySelector(".row-electric .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p4[i] == 2){
        document.querySelector(".row-electric .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p5[i] == 0){
        document.querySelector(".row-fairy .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p5[i] == 1/2){
        document.querySelector(".row-fairy .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p5[i] == 2){
        document.querySelector(".row-fairy .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p6[i] == 0){
        document.querySelector(".row-fire .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p6[i] == 1/2){
        document.querySelector(".row-fire .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p6[i] == 2){
        document.querySelector(".row-fire .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p7[i] == 0){
        document.querySelector(".row-flying .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p7[i] == 1/2){
        document.querySelector(".row-flying .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p7[i] == 2){
        document.querySelector(".row-flying .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p8[i] == 0){
        document.querySelector(".row-ghost .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p8[i] == 1/2){
        document.querySelector(".row-ghost .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p8[i] == 2){
        document.querySelector(".row-ghost .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p9[i] == 0){
        document.querySelector(".row-grass .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p9[i] == 1/2){
        document.querySelector(".row-grass .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p9[i] == 2){
        document.querySelector(".row-grass .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p10[i] == 0){
        document.querySelector(".row-ground .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p10[i] == 1/2){
        document.querySelector(".row-ground .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p10[i] == 2){
        document.querySelector(".row-ground .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p11[i] == 0){
        document.querySelector(".row-ice .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p11[i] == 1/2){
        document.querySelector(".row-ice .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p11[i] == 2){
        document.querySelector(".row-ice .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p12[i] == 0){
        document.querySelector(".row-normal .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p12[i] == 1/2){
        document.querySelector(".row-normal .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p12[i] == 2){
        document.querySelector(".row-normal .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p13[i] == 0){
        document.querySelector(".row-poison .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p13[i] == 1/2){
        document.querySelector(".row-poison .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p13[i] == 2){
        document.querySelector(".row-poison .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p14[i] == 0){
        document.querySelector(".row-psychic .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p14[i] == 1/2){
        document.querySelector(".row-psychic .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p14[i] == 2){
        document.querySelector(".row-psychic .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p15[i] == 0){
        document.querySelector(".row-rock .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p15[i] == 1/2){
        document.querySelector(".row-rock .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p15[i] == 2){
        document.querySelector(".row-rock .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p16[i] == 0){
        document.querySelector(".row-steel .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p16[i] == 1/2){
        document.querySelector(".row-steel .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p16[i] == 2){
        document.querySelector(".row-steel .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p17[i] == 0){
        document.querySelector(".row-water .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p17[i] == 1/2){
        document.querySelector(".row-water .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p17[i] == 2){
        document.querySelector(".row-water .status-" + i).style.backgroundColor = "#ff6c02";
    }
    //! /////////////////////////////////////////////////////////////////////////////////////////
    if(p18[i] == 0){
        document.querySelector(".row-fighting .status-" + i).style.backgroundColor = "#fb01ff";
    }
    if(p18[i] == 1/2){
        document.querySelector(".row-fighting .status-" + i).style.backgroundColor = "#4ec2bf";
    }
    if(p18[i] == 2){
        document.querySelector(".row-fighting .status-" + i).style.backgroundColor = "#ff6c02";
    }
}

$(function () {
    for(let i=0; i<types.length; i++){
        let type = types[i];
        $("."+type).css("background-color", colors[i]);
        if(types[i] == "dragon"){
            $("."+type).css({
                "background-image": `linear-gradient(to bottom, ${colors[i]})`
            });
        }
        if(types[i] == "flying"){
            $("."+type).css({
                "background-image": `linear-gradient(to bottom, ${colors[i]})`
            });
        }
        if(types[i] == "ground"){
            $("."+type).css({
                "background-image": `linear-gradient(to bottom, ${colors[i]})`
            });
        }
    }

    // HOVER 0x is opacity = 1 

    $(".bug").mouseenter(function () { 
        $(".row-bug .status").css("opacity", "0.5");
        $(".row-bug .status:contains('0x')").css("opacity", "1");
        $(".row-bug .status:contains('0.5x')").css("opacity", "1");
        $(".row-bug .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-bug .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".dark").mouseenter(function () {
        $(".row-dark .status").css("opacity", "0.5");
        $(".row-dark .status:contains('0x')").css("opacity", "1");
        $(".row-dark .status:contains('0.5x')").css("opacity", "1");
        $(".row-dark .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-dark .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".dragon").mouseenter(function () {
        $(".row-dragon .status").css("opacity", "0.5");
        $(".row-dragon .status:contains('0x')").css("opacity", "1");
        $(".row-dragon .status:contains('0.5x')").css("opacity", "1");
        $(".row-dragon .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-dragon .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".electric").mouseenter(function () {
        $(".row-electric .status").css("opacity", "0.5");
        $(".row-electric .status:contains('0x')").css("opacity", "1");
        $(".row-electric .status:contains('0.5x')").css("opacity", "1");
        $(".row-electric .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-electric .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".fairy").mouseenter(function () {
        $(".row-fairy .status").css("opacity", "0.5");
        $(".row-fairy .status:contains('0x')").css("opacity", "1");
        $(".row-fairy .status:contains('0.5x')").css("opacity", "1");
        $(".row-fairy .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-fairy .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".fire").mouseenter(function () {
        $(".row-fire .status").css("opacity", "0.5");
        $(".row-fire .status:contains('0x')").css("opacity", "1");
        $(".row-fire .status:contains('0.5x')").css("opacity", "1");
        $(".row-fire .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-fire .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".flying").mouseenter(function () {
        $(".row-flying .status").css("opacity", "0.5");
        $(".row-flying .status:contains('0x')").css("opacity", "1");
        $(".row-flying .status:contains('0.5x')").css("opacity", "1");
        $(".row-flying .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-flying .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".ghost").mouseenter(function () {
        $(".row-ghost .status").css("opacity", "0.5");
        $(".row-ghost .status:contains('0x')").css("opacity", "1");
        $(".row-ghost .status:contains('0.5x')").css("opacity", "1");
        $(".row-ghost .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-ghost .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".grass").mouseenter(function () {
        $(".row-grass .status").css("opacity", "0.5");
        $(".row-grass .status:contains('0x')").css("opacity", "1");
        $(".row-grass .status:contains('0.5x')").css("opacity", "1");
        $(".row-grass .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-grass .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".ground").mouseenter(function () {
        $(".row-ground .status").css("opacity", "0.5");
        $(".row-ground .status:contains('0x')").css("opacity", "1");
        $(".row-ground .status:contains('0.5x')").css("opacity", "1");
        $(".row-ground .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-ground .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".ice").mouseenter(function () {
        $(".row-ice .status").css("opacity", "0.5");
        $(".row-ice .status:contains('0x')").css("opacity", "1");
        $(".row-ice .status:contains('0.5x')").css("opacity", "1");
        $(".row-ice .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-ice .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".normal").mouseenter(function () {
        $(".row-normal .status").css("opacity", "0.5");
        $(".row-normal .status:contains('0x')").css("opacity", "1");
        $(".row-normal .status:contains('0.5x')").css("opacity", "1");
        $(".row-normal .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-normal .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".poison").mouseenter(function () {
        $(".row-poison .status").css("opacity", "0.5");
        $(".row-poison .status:contains('0x')").css("opacity", "1");
        $(".row-poison .status:contains('0.5x')").css("opacity", "1");
        $(".row-poison .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-poison .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".psychic").mouseenter(function () {
        $(".row-psychic .status").css("opacity", "0.5");
        $(".row-psychic .status:contains('0x')").css("opacity", "1");
        $(".row-psychic .status:contains('0.5x')").css("opacity", "1");
        $(".row-psychic .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-psychic .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".rock").mouseenter(function () {
        $(".row-rock .status").css("opacity", "0.5");
        $(".row-rock .status:contains('0x')").css("opacity", "1");
        $(".row-rock .status:contains('0.5x')").css("opacity", "1");
        $(".row-rock .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-rock .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".steel").mouseenter(function () {
        $(".row-steel .status").css("opacity", "0.5");
        $(".row-steel .status:contains('0x')").css("opacity", "1");
        $(".row-steel .status:contains('0.5x')").css("opacity", "1");
        $(".row-steel .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-steel .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".water").mouseenter(function () {
        $(".row-water .status").css("opacity", "0.5");
        $(".row-water .status:contains('0x')").css("opacity", "1");
        $(".row-water .status:contains('0.5x')").css("opacity", "1");
        $(".row-water .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-water .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
    $(".fighting").mouseenter(function () {
        $(".row-fighting .status").css("opacity", "0.5");
        $(".row-fighting .status:contains('0x')").css("opacity", "1");
        $(".row-fighting .status:contains('0.5x')").css("opacity", "1");
        $(".row-fighting .status:contains('2x')").css("opacity", "1");
    }).mouseleave(function(){
        $(".row-fighting .status").css("opacity", "1");
    });
    //! ////////////////////////////////////////////////////////////////////////
});


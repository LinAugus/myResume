requirejs.config({paths:{jquery:"jquery-1.11.2.min",pageSwitch:"pageSwitch"}}),requirejs(["jquery","pageSwitch"],function(e){e("[data-PageSwitch]").PageSwitch()});
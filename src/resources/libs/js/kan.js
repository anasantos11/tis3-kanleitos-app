/**
 * Adiciona e remove classes collapsed and sidenav-toggled
 */
$("#sidenavToggler").click(function (e) {
    debugger;
    e.preventDefault(),
        $("body").toggleClass("sidenav-toggled"),
        $(".navbar-sidenav .nav-link-collapse").addClass("collapsed"),
        $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show")
});

$(".navbar-sidenav .nav-link-collapse").click(function (e) {
    debugger;
    e.preventDefault(),
        $("body").removeClass("sidenav-toggled")
});


! function (a) {
    "use strict";
    /** 7
     * Personaliza title dos icones do menu lateral quando estão minimizados
    */
    a('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
        template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    }),
        /**
         * Adiciona e remove classes collapsed and sidenav-toggled
         */
        a("#sidenavToggler").click(function (e) {
            e.preventDefault(),
                a("body").toggleClass("sidenav-toggled"),
                a(".navbar-sidenav .nav-link-collapse").addClass("collapsed"),
                a(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show")
        }),
        a(".navbar-sidenav .nav-link-collapse").click(function (e) {
            e.preventDefault(),
                a("body").removeClass("sidenav-toggled")
        })
}(jQuery)
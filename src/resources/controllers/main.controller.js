app.controller('MainController', ['$rootScope', '$scope', '$state', '$firebaseAuth', function ($rootScope, $scope, $state, $firebaseAuth) {
    $scope.auth = $firebaseAuth();
    $scope.auth.$onAuthStateChanged(function (user) {
        if (user != null) {
            $scope.nomeUsuario = user.displayName;
            $scope.emailUsuario = user.email;
            isLogado = true;
            $state.go('kanleitos');
        }
    });


    $scope.sairAplicacao = function () {
        firebase.auth().signOut()
            .then(function () {
                $('#sairAppModal').modal('toggle');
                isLogado = false;
                $state.go('login');
            }).catch(function (error) {
                swal(
                    "Algum erro ocorreu, tente novamente!",
                    "",
                    error
                )
            });

    };

    /**
     * MENU - Adiciona e remove classes collapsed and sidenav-toggled
     */
    $("#sidenavToggler").click(function (e) {
        e.stopImmediatePropagation();
        $("body").toggleClass("sidenav-toggled");
        $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
        $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
    });

    $(".navbar-sidenav .nav-link-collapse").click(function (e) {
        e.preventDefault();
        $("body").removeClass("sidenav-toggled");
    });

    $("#sidenavResponsiveToggler").click(function (e) {
        e.preventDefault();
        $("body").removeClass("sidenav-toggled");
    });

}]);


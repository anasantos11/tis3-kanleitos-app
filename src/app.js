// Initialize Firebase
var config = {
	apiKey: "AIzaSyB5CnszQphntRXBUpc8Kisk1_WqOJesaKo",
	authDomain: "kanleitos.firebaseapp.com",
	databaseURL: "https://kanleitos.firebaseio.com",
	projectId: "kanleitos",
	storageBucket: "kanleitos.appspot.com",
	messagingSenderId: "573530601324"
};
firebase.initializeApp(config);

var isLogado = false;

var app = angular.module("kanleitos", [
	'firebase',
	'ui.router',
	"ngDialog",
	"720kb.tooltips"]);

app.controller('KanController', ['$rootScope', '$scope', '$state', '$firebaseAuth', function ($rootScope, $scope, $state, $firebaseAuth) {
	$scope.auth = $firebaseAuth();
	$scope.auth.$onAuthStateChanged(function (user) {
		if (user != null) {
			$scope.nomeUsuario = user.displayName;
			$scope.emailUsuario = user.email;
			isLogado = true;
			$state.go('kanleitos');
		}
	});


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

}]);





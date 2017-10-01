var app = angular.module('kanleitos', []);
app.controller('pacienteController', ["$scope", "$http", "$filter", function ($scope, $http, $filter) {

	$scope.NovoPaciente = function () {
		$scope.paciente = {
			prontuario: "",
			nome: "",
			mae: "",
			nascimento: "",
			idade: "",
			sexo: ""
		}
	}
	$scope.NovoPaciente();

	$scope.salvarPaciente = function () {
		$scope.paciente.nascimento = $filter('date')($scope.paciente.nascimento, 'yyyy-MM-dd');
		if ($scope.validarDadosPaciente()) {
			$scope.salvarPacienteBanco();
		};

	}

	$scope.validarDadosPaciente = function () {
		if ($scope.paciente.prontuario == "") {
			swal(
				'Erro!',
				'Digite o número do prontuário!',
				'error'
			)
			return;
		}
		if ($scope.paciente.nome == "") {
			swal(
				'Erro!',
				'Digite o nome do paciente!',
				'error'
			)
			return;
		}
		if ($scope.paciente.mae == "") {
			swal(
				'Erro!',
				'Digite o nome da mãe do paciente!',
				'error'
			)
			return;
		}
		if ($scope.paciente.nascimento == "") {
			swal(
				'Erro!',
				'Digite a data de nascimento!',
				'error'
			)
			return;
		}
		if ($scope.paciente.idade == "") {
			swal(
				'Erro!',
				'Digite a idade do paciente!',
				'error'
			)
			return;
		}
		if ($scope.paciente.sexo == "") {
			swal(
				'Erro!',
				'Digite o sexo do paciente!',
				'error'
			)
			return;
		}
		return true;
	}
	$scope.salvarPacienteBanco = function () {

		var request = {
			NomePaciente: $scope.paciente.nome,
			NumProntuario: $scope.paciente.prontuario,
			Idade: $scope.paciente.idade,
			NomeMae: $scope.paciente.mae,
			DataNascimento: $scope.paciente.nascimento,
			Genero: $scope.paciente.sexo,
		};

		$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";


		$http.post('http://localhost:8080/Cadastro/paciente', JSON.stringify(request)).then(function (response) {
			debugger;
			if (!response.data.Resposta.erro) {
				swal(
					'Concluído!',
					'Cadastro feito com sucesso - ID Paciente: ' + response.data.idPaciente,
					'success'
				)
				$scope.NovoPaciente();
			}
		}, function (response) {
			debugger;
			swal(
				'Erro!',
				response.data.message,
				'error'
			)
		});



	}


}]);
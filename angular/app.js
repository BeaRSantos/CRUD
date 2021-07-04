var crud = angular.module("crud", []);

crud.controller("controller", function ($scope) {

   $scope.novoAluno = {};
   $scope.AlunoSelecionado = {};

   $scope.aluno = [
       {nome: "Adriano Fernandes Silva", ra: 202158974, turma: "1° ano A", telefone: "(11)98574-9854", email: "adrianoFS@gmail.com"},
       {nome: "Beatriz Rodrigues dos Santos", ra: 202158749, turma: "2° ano A", telefone: "(11)87484-5874", email: "beatrizRS@gmail.com"},
       {nome: "Carlos Henrique Silva", ra: 202156985, turma: "3° ano A", telefone: "(11)85479-5842", email: "carlosHS@gmail.com"},
   ];
   
   $scope.salvar = function () {
       $scope.aluno.push($scope.novoAluno);
       $scope.novoAluno = {};
   };
   
   $scope.selecionaAluno = function (aluno) {
        $scope.alunoSelecionado = aluno;
   };

   $scope.alterarAluno = function () {
       
   };

   $scope.excluirAluno = function(){
        $scope.aluno.splice($scope.aluno.indexOf($scope.alunoSelecionado), 1);
   };
   
});
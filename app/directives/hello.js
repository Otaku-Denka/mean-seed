module.exports = function(ngModule){
	ngModule.directive('hello',function(){
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'directives/hello.html',
			controllerAs: 'vm',
			controller: function(){
				var vm = this;
				vm.greeting = "Hello , Webpack";
			}
		}
	})
}
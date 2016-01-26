export default (ngModule) => {
	ngModule.directive('hello', () => {
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

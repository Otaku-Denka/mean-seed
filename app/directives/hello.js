export default (ngModule) => {

	if (ON_TEST) {
		require('./hello.test.js')(ngModule)
	}

	ngModule.directive('hello', () => {
		require('./hello.css');
		return {
			restrict: 'E',
			scope: {},
			template: require('./hello.html'),
			controllerAs: 'vm',
			controller: function(){
				var vm = this;
				vm.greeting = "Hello , Webpack";
			}
		}
	})
}

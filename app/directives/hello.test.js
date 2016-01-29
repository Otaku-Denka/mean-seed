module.exports = ngModule => {
	describe(`hello`, () => {
		beforeEach(window.module(ngModule.name));

		it(`should test prop`, () =>{
			expect(true).to.be.true
		});
	});
};


describe("Controller Test", function () {

    var mockScope = {};
    var controller;

    beforeEach(angular.mock.module("exampleApp"));
    
    beforeEach(angular.mock.inject(function ($controller, $rootScope) {    
        mockScope = $rootScope.$new();

        controller = $controller("defaultCtrl", {
            $scope: mockScope
        });
    }));

    it("Создание свойства counter", function () {
        expect(mockScope.counter).toEqual(0);
    })
    
    it("Инкримент свойства", function () {
        mockScope.incrementCounter();
        expect(mockScope.counter).toEqual(1);
    });
});
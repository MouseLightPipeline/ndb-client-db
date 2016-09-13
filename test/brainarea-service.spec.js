describe('BrainAreaService', function() {
    var $httpBackend;

    beforeEach(module('testApp'));

    var service;

    beforeEach(inject(function($injector){
       $httpBackend = $injector.get('$httpBackend');
    }));

    beforeEach(inject(function(_brainAreaService_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        service = _brainAreaService_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('service location', function() {

        it('sets the strength to "strong" if the password length is >8 chars', () => {
            expect(service.apiUrl).toEqual("");
        });

        it('sets the strength to "weak" if the password length <3 chars', () => {
            $httpBackend.expect('GET', 'http://localhost:9641/api/v1/brainareas').respond(200, [{A: 'foo'}]);
            service.setLocation('http://localhost:9641/api/v1/');
            //service.dataSource.query();
            $httpBackend.flush();
        });
    });
});

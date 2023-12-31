// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// SayHello exercise 1
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it('should return the "Hello, World!" when passed true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the "Hello, World!" when passed false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the "Hello, World!" when passed 2.3', function() {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
     it('should return a boolean no matter what the input', function() {
     expect(typeof isFive('boolean')).toBe('boolean');
    });
     it('should return true when passed 5', function() {
         expect(isFive(5)).toBe(true);
     });
    it('should return true when passed "5"', function() {
        expect(isFive("5")).toBe(true);
    });
// it("should never return 'undefined' when called", function() {
//     expect(helloWorld()).not.toBe(undefined);
// });

});



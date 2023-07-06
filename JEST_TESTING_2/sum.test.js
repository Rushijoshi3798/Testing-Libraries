import sum from "./sum";
import x from "./extra";
import bestLacroixFlavor from "./Extended_matchers";

//Test-case-1
test('adds 1 + 2 to equal to 3' , () => {
    expect(sum(1,2)).toBe(3);
})

// Test-case-2
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });


let data = {
    name: "Rushi",
    designation: "SDE-1"
};

//Test-case-3
test("object assignment", () => {
    data['surname'] = "Joshi";
    expect(data).toEqual( { name: "Rushi", designation: "SDE-1", surname: "Joshi"})
})

// "Opposite of Matcher"
test('adding positive numbers is not Zero', () => {
    for(let a = 1; a < 10; a++){
        for(let b = 1; b<10; b++){
            expect(a+b).not.toBe(0)
        }
    }
})

// Truthiness :-

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
})

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });


  // Numbers :-

  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  // For floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           //This won't work because of rounding error
    expect(value).toBeCloseTo(0.301); // This works (0.301 / 0.3001) --> 0.31 will not work
  });

  // Strings :-

  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  })

//   let x = 'Christopher';
// here x is imported from extra.js

  test('but there is "stop" in the Christoper', () => {
    expect(x).toMatch(/stop/)
  })

  // Array & Iterables :-

  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];

  test('the shopping list has milk on it' , () => {
    expect(shoppingList).toContain('milk'); // Array data
    expect(new Set(shoppingList)).toContain('milk'); // iterative data
  })

  // Exceptions :-

  // If you want to test whether a particular function throws an error when it's called, use toThrow.

  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
  }
  
  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  
    // You can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  
    // Or you can match an exact error message using a regexp like below
    //expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
  });


  // More Matchers

  // expect(value)

  test('the best flavor is grapefruit', () => {
    expect(bestLacroixFlavor()).toBe('grapefruit')
  })

  // .not

//   test('the best flavor is not coconut', () => {
//     expect(bestLaCroixFlavor()).not.toBe('coconut');
//   });

  // .resolve


test("toBeCloseTo" , () => {
    let obj1 = { price: 21.1100}
    let obj2 = { price: 21.1111}

    expect(obj1.price).toBeCloseTo(obj2.price) // pass

    expect(obj1.price).toBeCloseTo(obj2.price, 1); // pass
    expect(obj1.price).toBeCloseTo(obj2.price, 2); // pass

    //expect(obj1.price).toBeCloseTo(obj2.price, 3); // FAIL


})
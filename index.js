
function receivesAFunction(callback) {
  if (typeof callback === 'function') {
    callback();
  } else {
    console.log('Error: Argument provided is not a function.');
  }
}


function returnsANamedFunction() {
  function myReturnedNamedFunction() {
    console.log("This is a named function returned by returnsANamedFunction.");
  }

  return myReturnedNamedFunction;
}


function returnsAnAnonymousFunction() {
  return function () {
    console.log("This is an anonymous function returned by returnsAnAnonymousFunction.");
  };
}

receiveAFunction(() => {
  console.log("Callback executed by receiveAFunction.");
});
const named = returnsANamedFunction();
named();

const anon = returnsAnAnonymousFunction();
anon();
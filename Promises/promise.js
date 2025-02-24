// Promise.all()
// All values are non-promises, so the returned promise gets fulfilled
const p = Promise.all([1, 2, 3]);
// The only input promise is already fulfilled,
// so the returned promise gets fulfilled
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// One (and the only) input promise is rejected,
// so the returned promise gets rejected
// const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);
// console.log(p);
// console.log(p2);
// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  //   console.log(p);
  //   console.log(p2);
  //   console.log(p3);
});

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }

// -------------------------------------------------------------------------------------------------------------------------

// Promise.allSettled()

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise1, promise2];
Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result))
);

// -------------------------------------------------------------------------------------------------------------------------

//  Promise.any()
const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
  // pFast fulfills first
});
// Logs:
// Done quick

// ---
function logA() { console.log('A') }
function logB() { console.log('B') }
function logC() { console.log('C') }
function logD() { console.log('D') }
function promiseF() {Promise.resolve().then(logC);}

// Click the "RUN" button to learn how this works!
logA();
Promise.resolve().then(logC);
setTimeout(logB, 0);
Promise.resolve().then(logC);
logD();

setTimeout(promiseF,0)
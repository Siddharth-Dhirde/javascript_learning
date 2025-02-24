// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "one");
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 100, "two");
// });

// Promise.race([promise1, promise2])
//   .then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// Expected output: "two"
// -----------

const a = new Promise((resolve, reject) =>
  setTimeout(reject, 100, new Error("a"))
);
const b = new Promise((resolve, reject) => setTimeout(reject, 200, "b"));

Promise.race([a, b]).then(
  (value) => {
    console.log(`race: fulfilled with ${value}`);
  },
  (reason) => {
    console.log(`race: rejected with ${reason.message}`);
  }
);

Promise.any([a, b]).then(
  (value) => {
    console.log(`any:  fulfilled with ${value}`);
  },
  (reason) => {
    console.log(`any:  rejected with ${reason}`);
  }
);

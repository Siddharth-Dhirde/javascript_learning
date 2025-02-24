const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 after 5 sec"), 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 after 5 sec"), 10000);
});

async function async1(p1, p2) {
  const res2 = await p2;
  console.log(res2);

  const res1 = await p1;
  console.log(res1);
}

async1(p1, p2);

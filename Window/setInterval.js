const hi3Sec = setInterval(function () {
  console.log("Hi.... (after 2 sec)");
}, 2000);

const timeout = setTimeout(function () {
  clearInterval(hi3Sec);
}, 6001);

setTimeout(function () {
  clearTimeout(timeout);
}, 6001);
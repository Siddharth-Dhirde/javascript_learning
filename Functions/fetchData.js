// Fetch data from - https://jsonplaceholder.typicode.com/
// posts

async function fetchWithThen() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
  console.log(data);
}
fetchWithThen();

async function fetchPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (response.ok) {
      console.log(response.json());
    }
  } catch (error) {
    console.log("Error while Fetching the Post Data", error);
  }
}
fetchPost();

setTimeout()

// ------------------------------------------------------------------------------------------------------------------------------------------------

// async with await
async function fetchPostWithAwait(params) {
  //   console.log(await fetch("https://jsonplaceholder.typicode.com/posts"))
}
fetchPostWithAwait();

// ------------------------------------------------------------------------------------------------------------------------------------------------

// async without await
async function fetchPostWithoutAwait(params) {
  console.log(fetch("https://jsonplaceholder.typicode.com/posts"));
}
fetchPostWithoutAwait();
// Output: Promise { <pending> }

// ------------------------------------------------------------------------------------------------------------------------------------------------

// await without async
// function fetchPostWithoutAwait(params) {
//     console.log(await fetch("https://jsonplaceholder.typicode.com/posts"))
// }
// fetchPostWithoutAwait();
// Output: Error - 'await' expressions are only allowed within async functions and at the top levels of modules.ts(1308)

// ------------------------------------------------------------------------------------------------------------------------------------------------

async function fetchPostsJSON() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
}
fetchPostsJSON()
  .then((posts) => {
    posts.forEach((post, i) => {
      // console.log(i, post.title);
    });
  })
  .catch((err) => {
    console.log("Error while displaying the titles of posts: ", err);
  });

async function getTitleOfPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  data.forEach((post) => {
    // console.log(post.title);
  });
}
getTitleOfPosts();

// ------------------------------------------------------------------------------------------------------------------------------------------------

// IIFE
(async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );
  data.forEach((post) => {
    // console.log(post.title);
  });
})();
// IIFE Arrow Function
(async function () {
  //   console.log(await fetch("https://jsonplaceholder.typicode.com/posts"));
})();

// -----------------------------------------------------------------------------------------------

async function fetchMovies404() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/oops"
  );
  console.log(response.ok); // => false
  console.log(response.status); // => 404
  const text = await response.text();
  return text;
}
fetchMovies404().then((text) => {
  console.log(text); // => 'Page not found'
});

// -----------------------------------------------------------------------------------------------

// Handling fetch errors

async function fetchMoviesBadStatus() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/oops"
  );
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const movies = await response.json();
  return movies;
}
fetchMoviesBadStatus().catch((error) => {
  console.log(error.message); // 'An error has occurred: 404'
});

// -----------------------------------------------------------------------------------------------

// Parallel fetch requests - Promise.all()

async function fetchPostsAndComments() {
  try {
    const [postsResponse, commentsResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);
    const posts = await postsResponse.json();
    const comments = await commentsResponse.json();
    return [posts, comments];
  } catch (error) {
    console.log("Error while fetching posts and comments data: ", error);
  }
}
fetchPostsAndComments()
  .then(([posts, comments]) => {
    console.log(posts.slice(0, 3));
    console.log(comments.slice(0, 3));
  })
  .catch((err) => console.log("error: ", err));

// Parallel fetch requests - Promise.all()

async function fetchPostsAndComments() {
    try {
      const postAndCommentResponse = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/comments"),
      ]);
      console.log(postAndCommentResponse)
      /* const posts = await postsResponse.json();
      const comments = await commentsResponse.json();
      return [posts, comments]; */
    } catch (error) {
      console.log("Error while fetching posts and comments data: ", error);
    }
  }
  fetchPostsAndComments();
  /* fetchPostsAndComments()
    .then(([posts, comments]) => {
      console.log(posts.slice(0, 3));
      console.log(comments.slice(0, 3));
    })
    .catch((err) => console.log("error: ", err)); */
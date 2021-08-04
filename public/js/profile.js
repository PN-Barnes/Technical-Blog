const newPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#postTitle").value.trim();
  const content = document.querySelector("#postContent").value.trim();
  const userPost = document.querySelector("#userPost").value.trim();

  if (title && content && userPost) {
    const res = await fetch("/api/blogPostRoute", {
      method: "POST",
      body: JSON.stringify({ title, content, userPost }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      document.location.replace("/posts");
    } else {
      alert("Failed to post new blog");
    }
  }
};

document.querySelector("#newBlogPost").addEventListener("submit", newPost);

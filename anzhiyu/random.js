var posts=["2024/12/22/rust_toLearn2/","2024/12/22/rust_toLearn/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
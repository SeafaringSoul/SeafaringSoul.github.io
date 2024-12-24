var posts=["2024/12/24/rust_class/","2024/12/22/rust_toLearn/","2024/12/22/rust_toLearn2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
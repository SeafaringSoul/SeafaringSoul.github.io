var posts=["2024/12/24/rust_class/","2024/12/27/rust_enum/","2024/12/24/rust_owner/","2024/12/26/rust_struct/","2024/12/22/rust_toLearn/","2024/12/22/rust_toLearn2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
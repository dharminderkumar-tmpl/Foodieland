import React from "react";
const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};
const BlogPostPageblogs = () => {
  return (
    <div>
      <div className="mainBannerPost">
        <h1>Full Guide to become a Professional Chef</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        </p>
        <img src={"/Assets/bannerblogpost.png"} alt="baked chicken" />
      </div>
      <div className="Qanda">
        <div className="blogans">
          <h2>How did you start out in the food industry?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar.
          </p>
          <h2>What did you like most about your job?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar.
          </p>
          <h2>What did you like most about your job?</h2>
          <img src={"/Assets/girlcooking.png"} alt="baked chicken" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar.
          </p>
          <h2>What is the biggest misconception that people have about being a professional chef?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar.
          </p>

        </div>
        <div className="socialmedia">
            <h3>SHARE THIS ON:</h3>
            <div className="social-social">
              <a href="https://www.facebook.com" target="_blank">
                <img src={"/Assets/fb.png"} />
              </a>
              <a href="https://www.twitter.com/kakudharmu" target="_blank">
              <img src={"/Assets/twitter.png"} />
              </a>
              <a href="https://www.instagram.com/_kaku_sharma" target="_blank">
                <img src={"/Assets/instagram.png"} />
              </a>

              
            </div>
          </div>
      </div>
    </div>
  );
};

export default BlogPostPageblogs;

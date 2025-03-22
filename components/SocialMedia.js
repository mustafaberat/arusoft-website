import React from "react";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <article className="social-media-links about-social-media-area">
      <div className="df">
        <Link
          href="https://www.instagram.com/arusoftt/"
          prefetch={false}
          className="social-media-instagram social-media-common"
          target="_blank"
        >
          <i className="fab fa-instagram"></i>
        </Link>
        <Link
          href="https://github.com/arusoft/"
          prefetch={false}
          className="social-media-github social-media-common"
          target="_blank"
        >
          <i className="fab fa-github-alt"></i>
        </Link>
        <Link
          href="https://www.facebook.com/arusoftt"
          prefetch={false}
          className="social-media-facebook social-media-common"
          target="_blank"
        >
          <i className="fab fa-facebook-f"></i>
        </Link>
      </div>
      <div className="df">
        <Link
          href="https://codepen.io/arusoftt"
          prefetch={false}
          className="social-media-codepen social-media-common"
          target="_blank"
        >
          <i className="fab fa-codepen"></i>
        </Link>
        <Link
          href="https://www.linkedin.com/in/arusoftt/"
          prefetch={false}
          className="social-media-linkedin social-media-common"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </Link>
        <Link
          href="https://medium.com/@arusoft"
          prefetch={false}
          className="social-media-medium social-media-common"
          target="_blank"
        >
          <i className="fab fa-medium-m"></i>
        </Link>
      </div>
    </article>
  );
};

export default SocialMedia;

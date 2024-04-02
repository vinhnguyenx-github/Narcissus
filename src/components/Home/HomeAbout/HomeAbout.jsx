import React from "react";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <div className="home-about">
      <div className="home-about-left">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WL11bwvAYWI?si=z9_rjrwTX4Zk5iNx"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="home-about-img"
        ></iframe>
      </div>
      <div className="home-about-right">
        <h3>About Narcissus</h3>
        <h2>Unveiling Hotel Excellence</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, vel
          eligendi atque libero minima recusandae commodi dignissimos autem
          placeat aliquid ipsa fuga consectetur harum aut pariatur! Totam ipsa
          perspiciatis ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          dolorum dolore inventore nulla cum numquam cupiditate, molestiae ex,
          eaque voluptatibus rem esse amet consequuntur soluta corrupti sed
          praesentium assumenda reprehenderit.
        </p>
      </div>
    </div>
  );
};

export default HomeAbout;

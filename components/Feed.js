"use client";
import React, { useEffect, useState } from "react";
import PromtCard from "./PromtCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((item) => (
        <PromtCard key={item._id} post={item} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [textSearch, setSearch] = useState();

  const fetchPosts = async () => {
    console.log("start fetching");

    const respomce = await fetch("/api/prompt");
    const data = await respomce.json();
    console.log(data);
    setPosts(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const handleSearchChange = (e) => {};
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          className="search_input peer"
          type="text"
          placeholder="Search for prompts"
          required
          value={textSearch}
          onChange={handleSearchChange}
        />
      </form>
      <PromptCardList data={posts} />
    </section>
  );
};

export default Feed;

"use client";
import { useSession } from "@node_modules/next-auth/react";
import { useRouter } from "@node_modules/next/navigation";
import React, { useEffect, useState } from "react";

import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  const handleEdit = () => {};
  const handleDelete = () => {};

  const fetchPosts = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/posts`);
    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => {
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  return (
    <Profile
      name="My"
      desc="Welcome to profile"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;

"use client";
import Form from "@components/Form";
import { useSession } from "@node_modules/next-auth/react";
import { useRouter } from "@node_modules/next/navigation";
import React, { useState } from "react";

const Create = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPosts] = useState({
    prompt: "",
    tag: "",
  });

  const createPromt = async (e) => {
    console.log("start createing...");

    e.preventDefault();
    setSubmitting(true);
    try {
      const responce = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (responce.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      type="Create"
      post={post}
      setPosts={setPosts}
      submitting={submitting}
      handleSubmitState={createPromt}
    />
  );
};

export default Create;

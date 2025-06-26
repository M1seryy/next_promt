"use client";
import Form from "@components/Form";
import { useSession } from "@node_modules/next-auth/react";
import {
  useParams,
  useRouter,
  useSearchParams,
} from "@node_modules/next/navigation";
import React, { useState, useEffect } from "react";

const Edit = () => {
  const router = useRouter();
  const params = useSearchParams();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const searchId = params.get("id");

  const [post, setPosts] = useState({
    prompt: "",
    tag: "",
  });

  const getPromptDetails = async () => {
    const responce = await fetch(`/api/prompt/${searchId}`);
    const data = await responce.json();
    setPosts({
      prompt: data.prompt,
      tag: data.tag,
    });
  };
  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!searchId) return alert("Missing searchId!");

    try {
      const response = await fetch(`/api/prompt/${searchId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  useEffect(() => {
    if (searchId) getPromptDetails();
  }, [searchId]);
  return (
    <Form
      type="Update"
      post={post}
      setPosts={setPosts}
      submitting={submitting}
      handleSubmitState={updatePrompt}
    />
  );
};

export default Edit;

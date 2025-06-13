import Link from "@node_modules/next/link";
import React from "react";

const Form = ({ type, post, setPosts, submitting, handleSubmitState }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type}</span> Post
      </h1>
      <p className="desc text-lef tmax-w-md">
        {type} and share amazing prompts with the world,and let your imagination
        run wild with many AI-powered platform
      </p>
      <form
        onSubmit={handleSubmitState}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPosts({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt HERE..."
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your TAG(#frontend,#webdevelopment)
          </span>
          <textarea
            value={post.tag}
            onChange={(e) => setPosts({ ...post, tag: e.target.value })}
            placeholder="Write your tag HERE..."
            required
            className="form_textarea"
          ></textarea>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link className="text-gray-500 text-sm" href="/">
            Cancel
          </Link>
          <button
            className="px-5 py-1.5 bg-primary-orange rounded-full text-white"
            disabled={submitting}
            type="submit"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

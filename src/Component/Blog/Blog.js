import React from "react";

const Blog = () => {
  return (
    <div>
      <h1>Our Blog Question !</h1>
      <div>
        <h1>
          Q1- What are the different ways to manage a state in a React
          application?
        </h1>
        <p>
          Ans:As your application grows, it helps to be more intentional about
          how your state is organized and how the data flows between your
          components. Redundant or duplicate state is a common source of bugs.
          In this chapter, you’ll learn how to structure your state well, how to
          keep your state update logic maintainable, and how to share state
          between distant components.
        </p>
      </div>
    </div>
  );
};

export default Blog;

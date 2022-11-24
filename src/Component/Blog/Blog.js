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
          between distant components.With React, you won’t modify the UI from
          code directly. For example, you won’t write commands like “disable the
          button”, “enable the button”, “show the success message”, etc.
          Instead, you will describe the UI you want to see for the different
          visual states of your component (“initial state”, “typing state”,
          “success state”), and then trigger the state changes in response to
          user input. This is similar to how designers think about UI.
        </p>
      </div>
      <div>
        <h1>Q2- how does phototypical work ?</h1>
        <p>
          Prototyping is an experimental process where design teams implement
          ideas into tangible forms from paper to digital. Teams build
          prototypes of varying degrees of fidelity to capture design concepts
          and test on users. With prototypes, you can refine and validate your
          designs so your brand can release the right products.Prototyping is
          the fourth phase of both design thinking and design sprints. It’s an
          essential part of user experience (UX) design that usually comes after
          ideation, where you/your team have created and selected ideas that can
          solve users’ needs.
        </p>
      </div>
      <div>
        <h1>Q3- What is a unit test ? Why should we write unit test?</h1>
        <p>
          What is Unit Testing? Unit Testing is a type of software testing where
          individual units or components of a software are tested. The purpose
          is to validate that each unit of the software code performs as
          expected. Unit Testing is done during the development (coding phase)
          of an application by the developers. Unit Tests isolate a section of
          code and verify its correctness.Unit tests save time and money.
          Usually, we tend to test the happy path more than the unhappy path. If
          you release such an app without thorough testing, you would have to
          keep fixing issues raised by your potential users. The time to fix
          these issues could’ve been used to build new features or optimize the
          existing system. Bear in mind that fixing bugs without running tests
          could also introduce new bugs into the system.
        </p>
      </div>
      <div>
        <h1>Q4- React vs Angular vs Vue?</h1>
        <p>
          Ans: There are three frameworks for building web applications that
          every frontend developer has heard about: React, Vue.js, and Angular.
          React is a UI library, Angular is a fully-fledged front-end framework,
          while Vue.js is a progressive framework. They can be used almost
          interchangeably to build front-end applications, but they’re not 100
          percent the same, so it makes sense to compare them and understand
          their differences. Each framework is component-based and allows the
          rapid creation of UI features. However, they all have a different
          structure and architecture — so first, we’ll look into their
          architectural differences to understand the philosophy behind them.
        </p>
      </div>
    </div>
  );
};

export default Blog;

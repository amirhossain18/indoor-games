import React from 'react';


const Blog = () => {
    
    return (
        <div className="container">
       <h2 id="blog" className="text-center">Our Blog</h2>
     <div className="card">
  <h5 className="card-header">how does react work</h5>
  <div className="card-body">
   
    <p className="card-text">React Features
React has some core features that make it stand out from other JavaScript libraries. The following sections will introduce you to these features and explain how they contribute to mobile and web application development.

JSX
JSX is a JavaScript syntax extension used in React element creation. Developers employ it to embed HTML code in JavaScript objects. As JSX accepts valid JavaScript expressions and function embedding, it can simplify complex code structures.

Let’s take a look at a code block that shows how to embed an expression in JSX:


In the second line, we call the name variable inside a React element by putting it inside the curly brackets.

Meanwhile, the ReactDOM.render() function renders the React element on the Document Object Model (DOM) tree, describing the UI.

JSX also helps combat Cross-Site Scripting (XSS) attacks. By default, React DOM converts values embedded in JSX to strings before rendering them. Consequently, third parties cannot inject extra code through user input unless it is explicitly written in the application.

Later in the article, we’ll discuss JSX’s role in React component creation in more detail.

Virtual DOM
The Document Object Model (DOM) presents a web page in a data tree structure. ReactJS stores Virtual DOM trees in the memory. By doing so, React can apply updates to specific parts of the data tree, which is faster than re-rendering the entirety of the DOM tree.

Whenever there’s a change in data, ReactJS will generate a new Virtual DOM tree and compare it with the previous one to find the quickest possible way to implement changes in the real DOM. This process is known as diffing.

By making sure that UI manipulation only affects specific sections of the real DOM tree, rendering the updated version takes less time and uses fewer resources. The practice greatly benefits large projects with intense user interaction.

Components and Props
ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.

Returned React elements determine how the UI will look at the client end. Here’s an example of a function component that returns a React element:


It’s possible to have as many components as necessary without cluttering your code.

State Management
A state is a JavaScript object that represents a part of a component. It changes whenever a user interacts with the application, rendering a new UI to reflect the modifications.

State management refers to the practice of managing React application states. It includes storing data in third-party state management libraries and triggering the re-rendering process each time data is changed.

</p>
 
  </div>
</div>
<div className="card">
  <h5 className="card-header">Difference between State and Props</h5>
  <div className="card-body">
  
    <p className="card-text">React is an opensource JavaScript library that offers a visual overview of the JavaScript architecture for conventional MVC. React promises programmers a model in which substrates cannot directly influence enclosing components—data are downstream, data changes in HTML are efficiently modified, and the DOM is abstracted to boost performance using Virtual DOM.

How can we access data from the previous component if the data is just being flowed from components to components? The answer is props. React uses data transmission props that we need to transfer to various components. 

The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.

A prop can be passed on to the child in the state of a parent. They apply to the same value but can only be updated by the parent variable.</p>
 
  </div>
</div>
<div className="card">
  <h5 className="card-header">why use useeffect without api call ?</h5>
  <div className="card-body">
 
    <p className="card-text">Making API calls on useEffects can be error-prone or downright slow. So it's best to avoid it unless you certainly have to. You really want some library to handle the data fetching for you..</p>
 
  </div>
</div>

        </div>
    );
};

export default Blog;
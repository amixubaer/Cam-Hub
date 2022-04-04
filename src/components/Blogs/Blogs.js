import React from "react";
import '../Navbar/Navbar.css';
const Blogs = () => {
  return (
    <div>
      <h1 className="text-5xl text-center">Blogs.</h1>
      <h1 className="text-3xl text-purple-600">What is context api?</h1>
        <h1 className="text-2xl">The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h1>
      <h1 className="text-3xl text-purple-600">What is semantic tag?</h1>
        <h1 className="text-2xl">Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language. Instead of trying to render that code, the browser understands that you are using that text as an example of the code for the purposes of an article.</h1>
      <h1 className="text-3xl text-purple-600">Difference between inline blocks and inline blocks element?</h1>
        <h1 className="text-2xl">Compared to display: inline, the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline, top and bottom margins & paddings are not respected, and with display: inline-block they are. Now, the difference between display: inline-block and display: block is that, with display: block, a line break happens after the element, so a block element doesn't sit next to other elements. </h1>
     
    </div>
  );
};

export default Blogs;

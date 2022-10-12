
import React from "react";
import AddComments from "./addcomment";
import BlogComments from "./blogcomments";
import BlogRecentPost from "./recentpost";

import "./style.css";

function BlogFooter() {
    return <div className="blog-footer">
        <BlogRecentPost />
        <BlogComments />
        <AddComments />
    </div>;
}

export default BlogFooter;
import { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [itemsPerPage, setItemsPerPage] = useState(PAGE_SIZES[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const [currentPaginationData, setCurrentPaginationData] = useState(
    blogs.posts.slice(0, itemsPerPage)
  );

  useEffect(() => {
    let firstItemOnPage = (currentPage - 1) * itemsPerPage;
    setCurrentPaginationData(
      blogs.posts.slice(firstItemOnPage, firstItemOnPage + itemsPerPage)
    );
  }, [itemsPerPage, currentPage]);

  const updateRowsPerPage = (val) => {
    setCurrentPage(1);
    setItemsPerPage(parseInt(val));
  };

  const updatePage = (current) => {
    setCurrentPage(current);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={itemsPerPage}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;

import moment from "moment";
import React, { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export function Items({ blogCards }) {
  return (
    <>
      {blogCards &&
        blogCards.map((item) => (
          <div className="mainsectionblogs" key={item?.id}>
            <Link to={`/BlogPostPage/${item?.id}`}>
              <div className="imageblog">
                <img src={item?.image} alt={item?.title} />
              </div>
              <div className="textblog">
                <h2>{item?.title}</h2>
                <p>{item?.shortDescription}</p>
                <div className="createdate">
                  <div className="imageauthor">
                    <img src={item?.Author?.image} />
                    <h5>
                      {item?.Author?.firstName}
                      {item?.Author?.lastName}
                    </h5>
                  </div>
                  <div className="published">
                    <p>
                      Date:{" "}
                      {moment(item?.Author?.createdAt).format("MM/MM/YYYY")}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
}

export function PaginatedItems({ itemsPerPage }) {
  const [blogCards, setblogCards] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const API =
    "https://cooking-blogs.onrender.com/api/blogs/?pageNo={currentPage}";

  console.log(blogCards, "blog cards");
  const fetchBlogs = async (url) => {
    try {
      const res = await fetch(url).then((res) => res.json());
      if (res) {
        setblogCards(res.blogs);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs(API);
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = blogCards.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blogCards.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogCards.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Items blogCards={blogCards} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

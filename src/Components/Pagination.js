import React, { useEffect, useState } from "react";


export function PaginatedItems({ totalBlogs, setUsers }) {
  const [blogCards, setBlogCards] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const totalPages = Math.ceil(totalBlogs / recordsPerPage);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = blogCards.slice(firstIndex, lastIndex);
  const npage = Math.ceil(blogCards.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  console.log(currentPage, "currentPage");

  function PageNumber({ totalPages, currentPage }) {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="pagination">
        {pageNumbers.map((pageNumber) => (
          <button
            type="button"
            className={`page-item ${currentPage === pageNumber ? "black" : ""}`}
            key={pageNumber}
            onClick={() => {
              window.scrollTo(0, 0);
              setCurrentPage(pageNumber);
            }}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  }

  const API = `https://cooking-blogs.onrender.com/api/blogs/?pageNo=${currentPage}`;

  const fetchBlogs = async (url) => {
    try {
      const res = await fetch(url).then((res) => res.json());
      if (res) {
        setUsers(res.blogs);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs(API);
  }, [currentPage]);

  const prevPage = () => {
    window.scrollTo(0, 0);
   
    setCurrentPage((prev) => prev - 1);
    
  };

  const nextPage = () => {
    window.scrollTo(0, 0);
  
    setCurrentPage((prev) => prev + 1);
    
  };

  return (
    <>
      <div className="pagination">
       

        <PageNumber totalPages={totalPages} currentPage={currentPage} />

      </div>
    </>
  );
}

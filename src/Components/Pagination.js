import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

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
                    <img
                      src={item?.Author?.image}
                      alt={item?.Author?.firstName}
                    />
                    <h5>
                      {item?.Author?.firstName} {item?.Author?.lastName}
                    </h5>
                  </div>
                  <div className="published">
                    <p>
                      Date:{" "}
                      {moment(item?.Author?.createdAt).format("MM/DD/YYYY")}
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
  const [blogCards, setBlogCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = blogCards.slice(firstIndex, lastIndex);
  const npage = Math.ceil(blogCards.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const API = `https://cooking-blogs.onrender.com/api/blogs/?pageNo=${currentPage}`;

  const fetchBlogs = async (url) => {
    try {
      const res = await fetch(url).then((res) => res.json());
      if (res) {
        setBlogCards(res.blogs);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs(API);
  }, [currentPage, API]);

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <ul className="pagination">
        <li className="page-item">
          <a href="#" className="page-link" onClick={prePage}>
            Prev
          </a>
        </li>
        {numbers.map((n, i) => (
          <li
            className={`page-item ${currentPage === n ? "active" : ""}`}
            key={i}
          >
            <a href="#" className="page-link" onClick={() => changeCPage(n)}>
              {n}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a href="#" className="page-link" onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </>
  );
}

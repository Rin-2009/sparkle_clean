import { Link } from "react-router-dom";
import { articles } from "../Blog/articlesData";

function RelatedArticles({ currentArticle }) {
  const related = articles
    .filter((article) => article.id !== currentArticle)
    .slice(0, 3);

  return (
    <div className="related-articles mt-5">
      <h2 className=" text-center mb-5 font-monospace">You May Also Like</h2>

      <div className="row g-4 mt-2">
        {related.map((item) => (
          <div
            className="col-md-6 col-lg-4 col-xl-4 col-xxl-4 col-sm-12"
            key={item.id}
          >
            <Link to={item.link} className="text-decoration-none text-light">
              <div className="div-blog">
                <div className="main-img">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />
                </div>

                <div className="card-blog">
                  <div className="spans">
                    <b>{item.category}</b>
                    <span>{item.date}</span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedArticles;

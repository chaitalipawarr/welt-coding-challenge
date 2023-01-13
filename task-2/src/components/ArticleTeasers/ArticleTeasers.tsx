import { useEffect, useState } from "react";
import ArticleTeaser from "../ArticleTeaser/ArticleTeaser";
import ErrorPage from "../ErrorPage/ErrorPage";
import Spinner from "../Spinner/Spinner";
import "./ArticleTeasers.css";

const ArticleTeasers = () => {
  const [teaserCount, setTeaserCount] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    getArticleTeasers();
  }, []);

  const getArticleTeasers = async () => {
    let response = await fetch(
      "http://www.randomnumberapi.com/api/v1.0/random?min=0&max=20&count=1"
    );
    if (response.ok) {
      let jsonRes = await response.json();

      //Set error true when random number is 0
      if (jsonRes[0] === 0) {
        setError(true);
      } else {
        setError(false);
      }

      setTeaserCount(jsonRes[0]);
    } else {
      setError(true);
    }
  };

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {teaserCount ? (
        <div className="ab-testing" data-testid="articleTeasers">
          <h1>Article Teasers</h1>
          <ul className="article-teasers-list">
            {[...Array(teaserCount)].map((e, i) => (
              <ArticleTeaser key={i} />
            ))}
          </ul>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default ArticleTeasers;

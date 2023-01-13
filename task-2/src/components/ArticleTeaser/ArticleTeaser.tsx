import { useEffect, useState } from "react";
import "./ArticleTeaser.css";
import brokenImage from "../../assets/image_unavailable.png";
import Spinner from "../Spinner/Spinner";

const ArticleTeaser = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchImage = async () => {
    let res = await fetch("https://dog.ceo/api/breeds/image/random");

    if (res.ok) {
      let imageResponse = await res.json();
      setImgUrl(imageResponse.message);
      setIsLoading(false);
    } else {
      setImgUrl(brokenImage);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <li className="article-teaser">
      {isLoading ? (
        <Spinner />
      ) : (
        <img
          data-testid="articleTeaser"
          className="article-teaser__image"
          src={imgUrl}
          alt="Article teaser"
          loading="lazy"
        />
      )}
    </li>
  );
};
export default ArticleTeaser;

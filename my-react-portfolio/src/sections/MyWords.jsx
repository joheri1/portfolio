import { useState, useEffect } from "react";
import { ArticleCard } from "../ui/ArticleCard";
import { Typography } from "../ui/Typography/Typography";
import { Grid } from "../ui/Grid";
import "./MyWords.css";

export const MyWords = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/data/articles.json")
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error("Error fetching articles:", err));
  }, []);

  return (
    <Grid background="primary">
      <section id= "mywords" className="mywords-section">
        <Typography variant="h2" className="mywords-heading">My Words</Typography>
        <div className="article-wrapper">
          {articles.map((article) => (
            <ArticleCard
              key={article.title}
              image={article.image}
              date={article.date}
              title={article.title}
              description={article.description}
              link={article.link}
              className="fade-in"
            />
          ))}
        </div>
      </section>
    </Grid>
  );
};


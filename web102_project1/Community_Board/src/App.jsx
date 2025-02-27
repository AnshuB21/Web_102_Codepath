import "./index.css";
import Card from "../src/components/card.jsx";
import articles from "./components/data.js";
const App = () => {
  return (
    <div className="App">
      <h1 className="title">Beginner Computer Science Articles</h1>
      <div className="container">
        {articles.map((article, index) => (
          <Card
            key={index}
            name={article.name}
            description={article.description}
            imageUrl={article.imageUrl}
            websiteLink={article.websiteLink}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

import { useState, useEffect, useMemo } from "react";
import "./App.css";
import "./index.css";
import SelectedBreed from "./components/SelectedBreed";
import DisplayedCats from "./components/DisplayedCats";
import Filters from "./components/Filters";
import DiscoverButton from "./components/DiscoverButton";

function App() {
  const url = `https://api.thecatapi.com/v1/breeds`;
  const api_key = import.meta.env.VITE_APP_ACCESS_KEY;

  const [breeds, setBreeds] = useState([]);
  const [excludedCountries, setExcludedCountries] = useState([]);
  const [randomImages, setRandomImages] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [displayedCats, setDisplayedCats] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setBreeds(json);
      } catch (error) {
        console.error("Error fetching breeds:", error);
      }
    };
    fetchBreeds();
  }, []);

  const filteredBreeds = useMemo(() => {
    return breeds.filter(
      (breed) =>
        !excludedCountries.includes(
          breed.origin,
          breed.wikipedia_url,
          breed.weight.imperial
        )
    );
  }, [breeds, excludedCountries]);

  const handleFilterCountry = (country) => {
    setExcludedCountries((prev) =>
      prev.includes(country) ? prev : [...prev, country]
    );
  };

  const getRandomBreedId = () => {
    if (filteredBreeds.length === 0) return null;
    return filteredBreeds[Math.floor(Math.random() * filteredBreeds.length)].id;
  };

  const fetchRandomBreedImages = async () => {
    const randomBreedId = getRandomBreedId();
    if (!randomBreedId) {
      console.log("No breeds available to fetch images.");
      return;
    }

    const imageUrl = `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${randomBreedId}&api_key=${api_key}`;
    const selected = filteredBreeds.find((breed) => breed.id === randomBreedId);
    setSelectedBreed(selected);

    try {
      const response = await fetch(imageUrl);
      const images = await response.json();

      if (images.length > 0) {
        setRandomImages(images);
        setDisplayedCats((prevCats) => [
          ...prevCats,
          {
            name: selected.name,
            origin: selected.origin,
            image: images[0].url,
          },
        ]);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="app">
      <h1>Cat Breeds</h1>

      <DiscoverButton fetchRandomBreedImages={fetchRandomBreedImages} />

      {selectedBreed && (
        <SelectedBreed
          selectedBreed={selectedBreed}
          handleFilterCountry={handleFilterCountry}
        />
      )}

      {randomImages.length > 0 && (
        <div className="image-container">
          <img src={randomImages[0].url} alt="Cat" />
        </div>
      )}

      <Filters excludedCountries={excludedCountries} />
      <DisplayedCats displayedCats={displayedCats} />
    </div>
  );
}

export default App;

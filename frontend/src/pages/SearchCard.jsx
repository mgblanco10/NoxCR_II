import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import searchService from "../services/searchService";
// import axios from "axios";

// import { Link } from "react-router-dom";
// import infoIcon from "../assets/Info.svg";

const CardsSearch = () => {
  const [searchParams] = useSearchParams()
  const [searchResults, setSearchResults] = useState([]);
  const query = searchParams.get('query');
  const { searchProducts } = searchService

  useEffect(() => {
    searchProducts(query)
      .then((data) => {
        setSearchResults(data);
      })
      .catch((e) => {
        console.error(e)
      })
  }, []);

  return (
    <div>
      {searchResults.length === 0 ? (
        <p className="not-query">
         "No results found"
        </p>
      ) : (
        <div className="card">
          {searchResults.length > 0 && (
            <div>
              <h2>Resultados de la búsqueda:</h2>
              <ul>
                {searchResults.map((product) => (
                  <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 w-1/4 px-2 mb-4">
                  <div className="max-w-[222px] h-[350px] rounded overflow-hidden shadow-lg">
                    <img className="w-[222px] h-[260px] object-cover" src={product.image} alt={product.name} />
                    <div className="px-4 py-2 h-[80px]">
                      <div className="text-l mb-2">{product.name}</div>
                      <p className="text-orange-700 text-base">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CardsSearch;
      
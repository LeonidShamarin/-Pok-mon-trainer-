import React, { useState } from "react";
import { Pokemon } from "../../types/pokemon";

interface SelectProps {
  options: Pokemon[];
  selected: Pokemon[];
  onSelect: (pokemon: Pokemon) => void;
}

const Select: React.FC<SelectProps> = ({ options, selected, onSelect }) => {
  const [search, setSearch] = useState("");

  const filteredOptions = options.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ul className="max-h-60 overflow-y-auto border border-gray-300 rounded-lg">
        {filteredOptions.map((pokemon) => (
          <li
            key={pokemon.name}
            onClick={() => onSelect(pokemon)}
            className={`p-3 hover:bg-gray-100 cursor-pointer transition-colors ${
              selected.includes(pokemon) ? "bg-blue-50" : ""
            }`}
          >
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
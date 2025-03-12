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

  const handleSelect = (pokemon: Pokemon) => {
    if (selected.length < 4 && !selected.some(p => p.name === pokemon.name)) {
      onSelect(pokemon);
    }
  };

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
            onClick={() => handleSelect(pokemon)}
            className={`p-3 hover:bg-gray-100 cursor-pointer transition-colors ${
              selected.some(p => p.name === pokemon.name) ? "bg-blue-50" : ""
            }`}
          >
            {pokemon.name}
          </li>
        ))}
      </ul>
      {selected.length === 4 && (
        <p className="text-sm text-green-600">You have selected 4 Pokémon.</p>
      )}
    </div>
  );
};

export default Select;
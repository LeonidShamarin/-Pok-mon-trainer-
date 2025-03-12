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
        className="w-full p-2 border rounded"
      />
      <ul className="max-h-60 overflow-y-auto border rounded">
        {filteredOptions.map((pokemon) => (
          <li
            key={pokemon.name}
            onClick={() => onSelect(pokemon)}
            className={`p-2 hover:bg-gray-100 cursor-pointer ${
              selected.includes(pokemon) ? "bg-blue-100" : ""
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
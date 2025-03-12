import React from "react";
import { Pokemon } from "../../types/pokemon";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPokemon: Pokemon[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, selectedPokemon }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Your Pokémon Team</h2>
        <div className="space-y-2">
          {selectedPokemon.map((pokemon) => (
            <div key={pokemon.name} className="flex items-center space-x-2">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`}
                alt={pokemon.name}
                className="w-8 h-8"
              />
              <span>{pokemon.name}</span>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
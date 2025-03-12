import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import usePokemonData from "../hooks/usePokemonData";
import Select from "../components/Select/Select";
import Modal from "../components/Modal/Modal";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { Pokemon } from "../types/pokemon";
import { validateName } from "../utils/validation";

interface FormInputs {
  firstName: string;
  lastName: string;
}

const TrainerForm: React.FC = () => {
  const { pokemonList, loading } = usePokemonData();
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    if (selectedPokemon.length === 4) {
      setIsModalOpen(true);
    } else {
      alert("Please select exactly 4 Pokémon.");
    }
  };

  const handleSelect = (pokemon: Pokemon) => {
    if (selectedPokemon.length < 4 && !selectedPokemon.includes(pokemon)) {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Pokémon Trainer Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          type="text"
          placeholder="First Name"
          {...register("firstName", { required: true, validate: validateName })}
          error={errors.firstName?.message}
        />
        <Input
          type="text"
          placeholder="Last Name"
          {...register("lastName", { required: true, validate: validateName })}
          error={errors.lastName?.message}
        />
        <Select
          options={pokemonList}
          selected={selectedPokemon}
          onSelect={handleSelect}
        />
        <Button type="submit" disabled={selectedPokemon.length !== 4}>
          Submit
        </Button>
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPokemon={selectedPokemon}
      />
    </div>
  );
};

export default TrainerForm;
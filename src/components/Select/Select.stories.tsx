import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
import { Pokemon } from "../../types/pokemon";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

const mockPokemon: Pokemon[] = [
  { name: "Pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
  { name: "Charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
  { name: "Bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
];

export const Default: Story = {
  args: {
    options: mockPokemon,
    selected: [],
    onSelect: (pokemon) => console.log("Selected:", pokemon),
  },
};
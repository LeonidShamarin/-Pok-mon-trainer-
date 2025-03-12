import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: themes.dark, // Використовуйте темну тему
  brandTitle: "Luna Edge Components", // Назва вашого Storybook
  brandUrl: "https://lunaedge.com", // Посилання на ваш сайт
  brandImage: "https://placehold.co/150x50", // Логотип (замініть на ваш)
});
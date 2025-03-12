import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: themes.dark, 
  brandTitle: "Luna Edge Components", 
  brandUrl: "https://lunaedge.com", 
  brandImage: "../src/assets/logos/LunaEdgeLogo.svg", 
});
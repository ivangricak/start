import "p5";
import { Environemnt } from "environment/environment";
import { WeatherProvider } from "weather/weatherProvider";
import { Hero } from "hero/hero";
import { Vector2D } from "utils/vector";

const hero = new Hero(Environemnt.worldSizeX / 2, Environemnt.worldSizeY * 0.9);
const environment = new Environemnt(hero);
const weatherProvider = new WeatherProvider();
function setup() {
  frameRate(10);
  createCanvas(Environemnt.worldSizeX, Environemnt.worldSizeY);
}

function draw() {
  background(200);
  const currentWeather = weatherProvider.getCurrentWeather();
  const heroSpeed = hero.update(currentWeather);
  environment.update(currentWeather, heroSpeed);
  environment.draw();
  hero.handleKeyDown();
  hero.draw();
}

export { setup, draw };

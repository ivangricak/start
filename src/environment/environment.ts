import { Vector2D } from "utils/vector";
import { Sky } from "./sky";
import { Ground } from "./ground";
import { Weather } from "weather/weather";
import { Hero } from "../hero/hero";
import { Obstacle } from "environment/obstcle";

export class Environemnt {
  public static gravity: Vector2D = new Vector2D(0, 1);
  public static worldSize: [number, number] = [400, 400];
  private sky: Sky;
  private ground: Ground;

  public obstacles: Obstacle[] = [];

  constructor(private hero: Hero) {
    this.sky = new Sky(Environemnt.worldSizeY * 0.8);
    this.ground = new Ground(Environemnt.worldSizeY - this.sky.height);
  }

  public static get worldSizeX() {
    return this.worldSize[0];
  }
  public static get worldSizeY() {
    return this.worldSize[1];
  }

  public update(currentWeather: Weather, heroSpeed: Vector2D) {
    this.sky.update(currentWeather, heroSpeed);
    this.ground.update(currentWeather);
    this.hero.update(currentWeather);
    this.obstacles.forEach((obstacle) => obstacle.update(heroSpeed));
    this.addObstacles();
  }

  private addObstacles() {
    for (let i = 0; i < 2; ++i)
      this.obstacles.push(
        new Obstacle(
          random(Environemnt.worldSizeX, Environemnt.worldSizeX + 100),
          0.9 * Environemnt.worldSizeY,
          15,
          10
        )
      );
  }

  public draw() {
    this.sky.draw();
    this.ground.draw();
    this.obstacles.forEach((obstacle) => obstacle.draw());
  }
}

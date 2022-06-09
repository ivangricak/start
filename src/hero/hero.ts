import { Environemnt } from "environment/environment";
import { Vector2D } from "utils/vector";
import { Weather } from "../weather/weather";
export class Hero {
  public position;
  Vector2D;
  private speed: Vector2D;

  constructor(x: number, y: number) {
    this.position = new Vector2D(x, y);
    //= new Vector2D(1, 0);
  }

  public move() {
    const speed = this.handleKeyDown();
    this.position = this.position.add(speed);
    if (this.position.x > Environemnt.worldSizeX) {
      this.position.x = 0;
    }

    if (this.position.x < 0) {
      this.position.x = Environemnt.worldSizeX;
    }
  }
  public jump() {}

  public pickUp() {}

  public update(weather: Weather): Vector2D {
    const speed = this.handleKeyDown();
    //this.move();
    return speed;
  }
  public handleKeyDown() {
    if (keyIsDown(LEFT_ARROW)) {
      return new Vector2D(-1, 0);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      return new Vector2D(1, 0);
    }

    return new Vector2D(0, 0);
  }

  public draw() {
    fill("black");
    rect(this.position.x, this.position.y, 5, 10);
  }
}

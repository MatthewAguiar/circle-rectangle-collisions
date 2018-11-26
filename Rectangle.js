
class Rectangle extends Shape
{
  constructor(x, y, width, height, color)
  {
    super(x, y, color);
    this.width = width;
    this.height = height;
    this.collision_marker = new Circle(x, y, 5, "red");
  }

  update()
  {
    this.draw();
  }

  draw()
  {
    CANVAS_CONTEXT.beginPath();
    CANVAS_CONTEXT.rect(this.x, this.y, this.width, this.height);
    CANVAS_CONTEXT.fillStyle = this.color;
    CANVAS_CONTEXT.fill();
    CANVAS_CONTEXT.closePath();
  }
}


class Circle extends Shape
{
  constructor(x, y, radius, color)
  {
    super(x, y, color);
    this.radius = radius;
  }

  update()
  {
    this.draw();
  }

  draw()
  {
    CANVAS_CONTEXT.beginPath();
    CANVAS_CONTEXT.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    CANVAS_CONTEXT.fillStyle = this.color;
    CANVAS_CONTEXT.fill();
    CANVAS_CONTEXT.closePath();
  }

  intersect(other)
  {
    if(other instanceof Rectangle)
    {
      let closestX = this.x;
      let closestY = this.y;

      if(closestX < other.x)
      {
        closestX = other.x;
      }
      if(closestX > other.x + other.width)
      {
        closestX = other.x + other.width;
      }

      if(closestY < other.y)
      {
        closestY = other.y;
      }
      if(closestY > other.y + other.height)
      {
        closestY = other.y + other.height;
      }

      other.collision_marker.x = closestX;
      other.collision_marker.y = closestY;

      if(get_distance(this.x, this.y, other.collision_marker.x, other.collision_marker.y) <= this.radius)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
  }
}

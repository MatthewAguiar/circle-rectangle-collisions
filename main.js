
function animate()
{
  requestAnimationFrame(animate);
  CANVAS_CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
  center_rectangle.update();
  mouse_marker.update();
  center_rectangle.collision_marker.update();
  if(mouse_marker.intersect(center_rectangle))
  {
    center_rectangle.color = "red";
  }
  else
  {
    center_rectangle.color = "black";
  }
}

function init()
{
  CANVAS.width = parseInt(window.getComputedStyle(document.querySelector("#main-canvas")).width);
  CANVAS.height = parseInt(window.getComputedStyle(document.querySelector("#main-canvas")).height);
  mouse_marker = new Circle(0, 0, 30, "lightgreen");
  center_rectangle = new Rectangle(CANVAS.width / 2 - 100, CANVAS.height / 2 - 50, 200, 100, "black");
}

// Main Code.
let center_rectangle;
let mouse_marker;
const CANVAS = document.getElementById("main-canvas");
const CANVAS_CONTEXT = CANVAS.getContext("2d");

document.addEventListener("mousemove",
  function(event)
  {
    let newX = event.clientX - CANVAS.getBoundingClientRect().left;
    let newY = event.clientY - CANVAS.getBoundingClientRect().top;

    if(newX >= 0 && newX <= CANVAS.width)
    {
      mouse_marker.x = newX;
    }

    if(newY >= 0 && newY <= CANVAS.height)
    {
      mouse_marker.y = newY;
    }
  });

init();
animate();

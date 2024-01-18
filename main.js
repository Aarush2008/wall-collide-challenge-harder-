let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// global variables

let bx = 150;
let by = 250;
let Leftpressed = false;
let Rightpressed = false;
let Uppressed = false;
let Downpressed = false;

let player1 = {
  x: 150,
  y: 250,
  w: 50,
  H: 50,
  speed: 5,
  color: "blue",
};

requestAnimationFrame(draw);

function draw() {
  //logic

  // green player
  if (Rightpressed) {
    bx += player1.speed;

    if (by > 150 && by < 400 && bx < 450 && bx > 350) {
      bx = 350;
    }
  } else if (Leftpressed) {
    bx -= player1.speed;
    if (by > 150 && by < 400 && bx < 450 && bx > 350) {
      bx = 450;
    }
  }

  if (Uppressed) {
    by -= player1.speed;
    if (by > 150 && by < 400 && bx < 450 && bx > 350) {
      by = 400;
    }
  } else if (Downpressed) {
    by += player1.speed;
    if (by > 150 && by < 400 && bx < 450 && bx > 350) {
      by = 150;
    }
  }

  if (bx < 0) {
    bx = 0;
  } else if (bx > 750) {
    bx = 750;
  }

  if (by < 0) {
    by = 0;
  } else if (by > 550) {
    by = 550;
  }

  //draw background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = player1.color;
  ctx.fillRect(bx, by, 50, 50);

  ctx.fillStyle = "gray";
  ctx.fillRect(400, 200, 50, 200);
  requestAnimationFrame(draw);
}

// EVENT STUFF
document.addEventListener("keydown", keydownHandler);

function keydownHandler(e) {
  console.log(e.code);

  //player B

  if (e.code === "ArrowLeft") {
    Leftpressed = true;
  } else if (e.code === "ArrowRight") {
    Rightpressed = true;
  } else if (e.code === "ArrowUp") {
    Uppressed = true;
  } else if (e.code === "ArrowDown") {
    Downpressed = true;
  }

  document.addEventListener("keyup", keyupHandler);

  function keyupHandler(e) {
    // playerb movement
    if (e.code === "ArrowLeft") {
      Leftpressed = false;
    } else if (e.code === "ArrowRight") {
      Rightpressed = false;
    } else if (e.code === "ArrowUp") {
      Uppressed = false;
    } else if (e.code === "ArrowDown") {
      Downpressed = false;
    }
  }
}

// https://stackoverflow.com/questions/808826/draw-arrow-on-canvas-tag
export const drawArrow = (ctx, fromx, fromy, tox, toy) => {
    //variables to be used when creating the arrow
    var headlen = 3;
  
    var angle = Math.atan2(toy-fromy,tox-fromx);
  
    //starting path of the arrow from the start square to the end square and drawing the stroke
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.strokeStyle = "#cc0000";
    ctx.lineWidth = 9;
    ctx.stroke();
  
    //starting a new path from the head of the arrow to one of the sides of the point
    ctx.beginPath();
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));
  
    //path from the side point of the arrow, to the other side point
    ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),toy-headlen*Math.sin(angle+Math.PI/7));
  
    //path from the side point back to the tip of the arrow, and then again to the opposite side point
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));
  
    //draws the paths created above
    ctx.strokeStyle = "#cc0000";
    ctx.lineWidth = 9;
    ctx.stroke();
    ctx.fillStyle = "#cc0000";
    ctx.fill();
  };
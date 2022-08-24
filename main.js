const c = document.querySelector("#mycanvas")
const ctx = c.getContext("2d")
ctx.beginPath()


//fondo

ctx.fillStyle = "#80afd9";
ctx.strokeStyle = "#80afd9";
ctx.fillRect(0, 0, 500, 500,);
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()

//sol 
ctx.fillStyle = "#e0de34";
ctx.strokeStyle = "#e0de34";
ctx.arc(250, 0, 90, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()



//nubes
ctx.fillStyle = "white"; 
ctx.strokeStyle = "white";
ctx.arc(250, 100, 30, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()
ctx.arc(220, 125, 30, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()
ctx.arc(280, 100, 30, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()
ctx.arc(315, 125, 30, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()
ctx.arc(250, 150, 30, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()
ctx.arc(280, 150, 30, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()

//suelo
ctx.fillStyle = "green";
ctx.strokeStyle = "green";
ctx.fillRect(0, 450, 500, 50,);
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()



//arbol

ctx.fillStyle = "green"; 
ctx.strokeStyle = "green";
ctx.arc(100, 270, 65, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()

ctx.fillStyle = "red"; 
ctx.strokeStyle = "red";
ctx.arc(60, 270, 10, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()

ctx.fillStyle = "red"; 
ctx.strokeStyle = "red";
ctx.arc(90, 300, 10, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()

ctx.fillStyle = "red"; 
ctx.strokeStyle = "red";
ctx.arc(90, 230, 10, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()

ctx.fillStyle = "red"; 
ctx.strokeStyle = "red";
ctx.arc(120, 310, 10, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()

ctx.fillStyle = "red"; 
ctx.strokeStyle = "red";
ctx.arc(130, 260, 10, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()


ctx.fillStyle = "#3d301c";
ctx.strokeStyle = "#3d301c";
ctx.fillRect(75, 330, 50, 130,);
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()

ctx.fillStyle = "#241b14"; 
ctx.strokeStyle = "#241b14";
ctx.arc(100, 390, 20, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()


//castillo

ctx.fillStyle = "#424747";
ctx.strokeStyle = "#424747";
ctx.fillRect(300, 310, 190, 150,);
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()


ctx.fillStyle = "#424747";
ctx.strokeStyle = "#424747";
ctx.fillRect(300, 270, 45, 45,);
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()

ctx.fillStyle = "#424747";
ctx.strokeStyle = "#424747";
ctx.fillRect(445, 270, 45, 45,);
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()

ctx.fillStyle = "#424747";
ctx.strokeStyle = "#424747";
ctx.fillRect(370, 270, 45, 45,);
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()


ctx.fillStyle = "#0a0a0a"; 
ctx.strokeStyle = "#0a0a0a";
ctx.arc(400, 390, 30, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()

ctx.fillStyle = "#0a0a0a";
ctx.strokeStyle = "#0a0a0a";
ctx.fillRect(370, 390, 60, 70,);
ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.beginPath()

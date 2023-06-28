function f_BodyOnLoad() {
   let el = document.querySelector("#div2");
   let elParent = document.querySelector("#div1");
   let kursOnEl = 0;

   let handlerMove = function(event)
   {
      event.preventDefault();

      let posX = event.clientX-elParent.offsetLeft- kursOnEl;
      if (posX<0)
         el.style.left = 0;
      else if (posX>elParent.clientWidth-el.offsetWidth)
         el.style.left = elParent.clientWidth - el.offsetWidth;
      else
         el.style.left = posX;

      document.getElementById("div3").style.width = parseInt(el.style.left) + el.offsetWidth/2 + "px";
   }

   let handlerUp = function(event)
   {
      document.removeEventListener( "mousemove" , handlerMove, false);

      console.log("MouseUp");
   }

   let handlerDown = function(event)
   {
      event.preventDefault();
      console.log(elParent.style)

      document.addEventListener( "mousemove" , handlerMove, false);
      document.addEventListener( "mouseup" , handlerUp, false);


      kursOnEl = event.clientX-elParent.offsetLeft - el.offsetLeft;

      console.log("MouseDown");
   }

   el.addEventListener( "mousedown" , handlerDown, false);
}

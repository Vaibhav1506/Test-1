// Registering component in rocket-disintegration-component.js
AFRAME.registerComponent("rocket-disintegration", {
    schema: {
      moveY: { 
      type: "number", 
      default: 10
    },
},
  
tick: function(){
    window.addEventListener("click", (e) => {
        this.data.moveY -= 0.0001;
    })

    var pos = this.el.getAttribute("position");
    pos.y = this.data.moveY;
    
    this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    this.el.setAttribute()    
    }
});
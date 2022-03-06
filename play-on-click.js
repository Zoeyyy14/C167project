AFRAME.registerComponent("play-on-click", {
     schema:{
         isPlaying:{type:"boolean",default:false}
     },
     init:function(){
         this.onClick=this.onClick.bind(this)
     },
     play:function(){
         window.addEventListener("click",this.onClick)
     },
     onClick:function(evt){
         if(!this.videoEl){
             return
         }
         var isPlaying=this.el.getAttribute("play-on-click").isPlaying
         this.el.object3D.visible=true
         if(!isPlaying){
             this.el.setAttribute("play-on-click",{
                 isPlaying:true
             })
         }
         else{
           this.el.setAttribute("play-on-click",{
               isPlaying:true
           })
         }
     }
   });
   
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


gsap.from('#page1 h1',{
  opacity:0,
  y:100,
  duration:1,
  delay:4
})

gsap.to("#page2 video",{
    width:"100%",
    scrollTrigger:{
      trigger:"#page2",
      scroller:"#main",
      start:"top 75%",
      end:"top -2%",
      scrub:true,
    }
  })

  gsap.to("#page9 #expert",{
    transform:`translateX(-100%)`,
    duration:2,
    scrollTrigger:{
      trigger:"#page9",
      scroller:"#main",
      pin:true,
      scrub:true,
    }
  })

  document.addEventListener("mousemove", function (dets) {
    document.querySelector("#cursor").style.left = `${dets.x }px`
    document.querySelector("#cursor").style.top = `${dets.y }px`
  })

  

vid1.addEventListener("mouseenter",function(){
  errow.style.display= "block"
  cursor.style.display= "block"
})
vid1.addEventListener("mouseleave",function(){
  errow.style.display= "none"
  cursor.style.display= "none"
})

var img1 = document.querySelector("#img1")
img1.addEventListener("mouseenter",function(){
  errow.style.display= "block"
  cursor.style.display= "block"
})
img1.addEventListener("mouseleave",function(){
  errow.style.display= "none"
  cursor.style.display= "none"
})


var img2 = document.querySelector("#img2")
img2.addEventListener("mouseenter",function(){
  errow.style.display= "block"
  cursor.style.display= "block"
})
img2.addEventListener("mouseleave",function(){
  errow.style.display= "none"
  cursor.style.display= "none"
})


video.addEventListener("mouseenter",function(){
  errow.style.display= "block"
  cursor.style.display= "block"
})
video.addEventListener("mouseleave",function(){
  errow.style.display= "none"
  cursor.style.display= "none"
})


var img11 = document.querySelector("#img11")
img11.addEventListener("mouseenter",function(){
  errow.style.display= "block"
  cursor.style.display= "block"
})
img11.addEventListener("mouseleave",function(){
  cursor.style.display= "none"
})


var tl = gsap.timeline()
tl.to("#loader .lob ",{
    
    display:"block",
    stagger:0.3,
    
})
.to("#loader",{
    y:"-100%",
    durataion:2
})
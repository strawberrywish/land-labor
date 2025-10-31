gsap.registerPlugin(ScrollTrigger, TextPlugin);

const scroller = document.querySelector("#scroller");
const container = document.querySelector("#container");
const sections = gsap.utils.toArray(".horizontal-section");

// --- Auto-assign background images ---
const imageUrls = [
  "https://images.pexels.com/photos/34344666/pexels-photo-34344666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1517076/pexels-photo-1517076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1037996/pexels-photo-1037996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2457278/pexels-photo-2457278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/206935/pexels-photo-206935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

sections.forEach((section, i) => {
  if (imageUrls[i]) section.style.backgroundImage = `url('${imageUrls[i]}')`;
  else section.style.background = `hsl(${i * 40}, 50%, 70%)`;
});

// --- Dynamic container width ---
container.style.width = `${sections.length * 100}vw`;

// --- Horizontal scroll animation ---
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    scroller,
    trigger: "#container",
    pin: true,
    pinType: "transform",
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + container.scrollWidth,
    invalidateOnRefresh: true
  }
});

// --- Typewriter effect for first section with pinning ---
const milkText = document.querySelector("#milkText");

ScrollTrigger.create({
  scroller,
  trigger: milkText,
  start: "top top",
  end: "+=100%",
  pin: true, 
  scrub: false,
  onEnter: () => {
    gsap.fromTo(
      milkText,
      { text: "" },
      {
        text: milkText.textContent,
        duration: 3,
        ease: "none"
      }
    );
  }
});
// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Custom cursor
const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
  })
})

document.addEventListener("mousedown", () => {
  gsap.to(cursor, {
    width: 15,
    height: 15,
    duration: 0.3,
  })
})

document.addEventListener("mouseup", () => {
  gsap.to(cursor, {
    width: 20,
    height: 20,
    duration: 0.3,
  })
})

// Loader animation
window.addEventListener("load", () => {
  const loaderBar = document.querySelector(".loader-bar")
  const loader = document.querySelector(".loader")

  gsap.to(loaderBar, {
    width: "100%",
    duration: 2,
    ease: "power2.inOut",
    onComplete: () => {
      gsap.to(loader, {
        y: "-100%",
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          loader.style.display = "none"
          animateHero()
        },
      })
    },
  })
})

// Hero section animations
function animateHero() {
  const heroTitle = document.querySelector(".hero-title")
  const heroSubtitle = document.querySelector(".hero-subtitle")
  const imageContainer = document.querySelector(".image-container")
  const scrollIndicator = document.querySelector(".scroll-indicator")

  const tl = gsap.timeline()

  tl.to(heroTitle, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
  })
    .to(
      heroSubtitle,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5",
    )
    .to(
      imageContainer,
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5",
    )
    .to(
      scrollIndicator,
      {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5",
    )
}

// Parallax effect for hero image
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY
  const fatherImage = document.getElementById("father-image")

  if (fatherImage) {
    fatherImage.style.transform = `translateY(${scrollPosition * 0.2}px)`
  }
})

// Timeline animations
const timelineItems = document.querySelectorAll(".timeline-item")

timelineItems.forEach((item) => {
  gsap.to(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  })
})

// Gallery animations
const galleryItems = document.querySelectorAll(".gallery-item")

galleryItems.forEach((item, index) => {
  gsap.to(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: index * 0.2,
    ease: "power3.out",
  })
})

// Tribute cards animations
const tributeCards = document.querySelectorAll(".tribute-card")

tributeCards.forEach((card, index) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: index * 0.2,
    ease: "power3.out",
  })
})

// Letter animation
const letterContent = document.querySelector(".letter-content")

gsap.to(letterContent, {
  scrollTrigger: {
    trigger: letterContent,
    start: "top 70%",
    toggleActions: "play none none none",
  },
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
})

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")

  if (window.scrollY > 100) {
    header.style.padding = "1rem 3rem"
    header.style.backgroundColor = "rgba(34, 34, 34, 0.9)"
  } else {
    header.style.padding = "1.5rem 3rem"
    header.style.backgroundColor = "transparent"
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    })
  })
})

// Text reveal animations
const textElements = document.querySelectorAll(".journey p, .tribute-content p, .letter-content p")

textElements.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power3.out",
  })
})

// Image hover effects
const galleryImages = document.querySelectorAll(".gallery-image img")

galleryImages.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    gsap.to(image, {
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out",
    })
  })

  image.addEventListener("mouseleave", () => {
    gsap.to(image, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    })
  })
})

// Add a subtle floating animation to the hero image
gsap.to(".image-container", {
  y: "-10px",
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
})

// 표지 숨기기
document.getElementById("enterBtn").addEventListener("click", function() {
    gsap.to(".intro", { opacity: 0, duration: 1, onComplete: () => document.querySelector(".intro").style.display = "none" });
});

// Three.js 배경
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("bgCanvas"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 파티클 생성
const particles = new THREE.Group();
scene.add(particles);

// 애니메이션 실행
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// GSAP ScrollTrigger를 사용하여 슬라이드 하나씩 보이게 하기
gsap.utils.toArray(".slide").forEach((slide, i) => {
    gsap.to(slide, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: slide,
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });
});

// 스크롤을 통한 슬라이드 이동
let currentSlide = 0;
window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        currentSlide = Math.min(currentSlide + 1, 8);
    } else {
        currentSlide = Math.max(currentSlide - 1, 0);
    }
    document.querySelector(".container").style.transform = `translateX(-${currentSlide * 100}vw)`;
});

// Three.js 배경
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("bgCanvas"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const particles = new THREE.Group();
scene.add(particles);

// 포인터 따라오는 파티클
window.addEventListener("mousemove", (event) => {
    let x = (event.clientX / window.innerWidth) * 2 - 1;
    let y = -(event.clientY / window.innerHeight) * 2 + 1;
    particles.position.x = x * 2;
    particles.position.y = y * 2;
});

// 애니메이션 실행
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

/* 
    WEirdo Gallery Interaction Core
    Based on WEirdo Art Protocol - Unified Linear Aesthetic
*/

const projects = [
    {
        title: "Exeter Forever",
        date: "PROJECT #09 - 2024",
        svg: `
                <svg viewBox="0 0 200 200" class="character-svg">
                    <!-- Background: Green Hedge Wall -->
                    <rect width="200" height="200" fill="#2d5a1e" />
                    <!-- Hedge Texture (Linear leaf pattern) -->
                    <g opacity="0.5">
                        <path d="M10,10 L18,5 L25,12 L17,17 Z M35,8 L42,2 L50,10 L42,15 Z M60,5 L68,0 L75,8 L67,13 Z M85,10 L93,4 L100,12 L92,17 Z M115,7 L123,1 L130,9 L122,14 Z M140,10 L148,4 L155,12 L147,17 Z M165,5 L173,0 L180,8 L172,13 Z" fill="#3a7a28" />
                        <path d="M5,30 L13,24 L20,32 L12,37 Z M30,28 L38,22 L45,30 L37,35 Z M55,25 L63,20 L70,28 L62,33 Z M80,30 L88,24 L95,32 L87,37 Z M110,27 L118,21 L125,29 L117,34 Z M135,30 L143,24 L150,32 L142,37 Z M160,25 L168,20 L175,28 L167,33 Z M185,30 L193,24 L200,32 L192,37 Z" fill="#3a7a28" />
                        <path d="M10,50 L18,44 L25,52 L17,57 Z M35,48 L42,42 L50,50 L42,55 Z M60,45 L68,40 L75,48 L67,53 Z M85,50 L93,44 L100,52 L92,57 Z M115,47 L123,41 L130,49 L122,54 Z M140,50 L148,44 L155,52 L147,57 Z M165,45 L173,40 L180,48 L172,53 Z" fill="#3a7a28" />
                        <path d="M5,70 L13,64 L20,72 L12,77 Z M30,68 L38,62 L45,70 L37,75 Z M55,65 L63,60 L70,68 L62,73 Z M80,70 L88,64 L95,72 L87,77 Z M110,67 L118,61 L125,69 L117,74 Z M135,70 L143,64 L150,72 L142,77 Z M160,65 L168,60 L175,68 L167,73 Z M185,70 L193,64 L200,72 L192,77 Z" fill="#3a7a28" />
                        <path d="M10,90 L18,84 L25,92 L17,97 Z M35,88 L42,82 L50,90 L42,95 Z M60,85 L68,80 L75,88 L67,93 Z M85,90 L93,84 L100,92 L92,97 Z M115,87 L123,81 L130,89 L122,94 Z M140,90 L148,84 L155,92 L147,97 Z M165,85 L173,80 L180,88 L172,93 Z" fill="#3a7a28" />
                        <path d="M5,110 L13,104 L20,112 L12,117 Z M30,108 L38,102 L45,110 L37,115 Z M55,105 L63,100 L70,108 L62,113 Z M80,110 L88,104 L95,112 L87,117 Z M110,107 L118,101 L125,109 L117,114 Z M135,110 L143,104 L150,112 L142,117 Z M160,105 L168,100 L175,108 L167,113 Z M185,110 L193,104 L200,112 L192,117 Z" fill="#3a7a28" />
                        <path d="M10,130 L18,124 L25,132 L17,137 Z M35,128 L42,122 L50,130 L42,135 Z M60,125 L68,120 L75,128 L67,133 Z M85,130 L93,124 L100,132 L92,137 Z M115,127 L123,121 L130,129 L122,134 Z M140,130 L148,124 L155,132 L147,137 Z M165,125 L173,120 L180,128 L172,133 Z" fill="#3a7a28" />
                        <path d="M5,150 L13,144 L20,152 L12,157 Z M30,148 L38,142 L45,150 L37,155 Z M55,145 L63,140 L70,148 L62,153 Z M80,150 L88,144 L95,152 L87,157 Z M110,147 L118,141 L125,149 L117,154 Z M135,150 L143,144 L150,152 L142,157 Z M160,145 L168,140 L175,148 L167,153 Z M185,150 L193,144 L200,152 L192,157 Z" fill="#3a7a28" />
                    </g>
                    <!-- Floor -->
                    <path d="M0,175 L200,175 L200,200 L0,200 Z" fill="#8b4513" opacity="0.4" />

                    <!-- #ExeterForever Neon Sign -->
                    <g transform="translate(25, 30) rotate(-8)">
                        <text x="0" y="0" fill="none" stroke="#c8e0ff" stroke-width="1.2" font-size="11" font-family="sans-serif" font-style="italic" opacity="0.9">#ExeterForever</text>
                        <text x="0" y="0" fill="#e8f4ff" font-size="11" font-family="sans-serif" font-style="italic" opacity="0.5">#ExeterForever</text>
                    </g>

                    <!-- Character Structure (Full Body) -->
                    <g transform="translate(100, 82)">
                        <!-- Bottom Layer: Rear Hair -->
                        <path d="M-30,10 L-35,-5 L-28,-28 L-15,-42 L0,-46 L15,-42 L28,-28 L35,-5 L30,10 L32,22 L-32,22 Z" fill="#050505" />

                        <!-- Neck -->
                        <path d="M-8,22 L-8,30 L0,34 L8,30 L8,22 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />

                        <!-- Face -->
                        <path d="M-25,-25 L-30,0 L-24,18 L-12,26 L0,28 L12,26 L24,18 L30,0 L25,-25 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />

                        <!-- Eyes (Polygonal) -->
                        <g class="eye-group" onclick="this.closest('.character-svg').classList.toggle('is-closed')">
                            <g class="eye-open">
                                <path d="M-18,2 L-12,-3 L-6,2 L-12,6 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="-12" cy="2" r="3" fill="black" />
                                <path d="M6,2 L12,-3 L18,2 L12,6 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="12" cy="2" r="3" fill="black" />
                            </g>
                            <g class="eye-closed">
                                <path d="M-18,3 L-6,3 M6,3 L18,3" stroke="black" stroke-width="3" fill="none" />
                            </g>
                        </g>

                        <!-- Smile (happy graduation!) -->
                        <path d="M-6,18 L0,22 L6,18" fill="none" stroke="#d07888" stroke-width="3.5" stroke-linecap="round" />

                        <!-- Front Hair (ON TOP) - Short Bob with Side Bangs -->
                        <path d="M-32,-30 L-8,-28 L-25,8 L-32,5 Z" fill="#121212" />
                        <path d="M32,-30 L8,-28 L25,8 L32,5 Z" fill="#121212" />
                        <path d="M-28,-25 L-12,2 L-5,-5 L0,2 L10,-8 L25,-2 L25,-25 Z" fill="#000" opacity="0.18" />

                        <!-- Graduation Cap (Mortarboard) -->
                        <g transform="translate(0, -42)">
                            <!-- Cap base (square top) -->
                            <path d="M-22,-8 L22,-8 L28,0 L-28,0 Z" fill="#1a1a1a" stroke="#000" stroke-width="1" />
                            <!-- Cap band -->
                            <path d="M-20,0 L-20,6 L20,6 L20,0 Z" fill="#0c0c0c" stroke="#000" stroke-width="1" />
                            <!-- Tassel -->
                            <path d="M18,-6 L22,-6 L26,8 L24,12 L20,10" fill="none" stroke="#1a1a1a" stroke-width="1.5" />
                            <circle cx="25" cy="13" r="2" fill="#1a1a1a" />
                        </g>

                        <!-- Graduation Gown (full body) -->
                        <path d="M-40,30 L-25,26 L25,26 L40,30 L50,115 L-50,115 Z" fill="#1a1a1a" stroke="#000" stroke-width="1.8" />
                        <!-- Gown opening (center line) -->
                        <path d="M0,34 L0,115" stroke="#111" stroke-width="1.5" />
                        <!-- Gown sleeves -->
                        <path d="M-25,28 L-48,55 L-45,60 L-28,42" fill="#1a1a1a" stroke="#000" stroke-width="1" />
                        <path d="M25,28 L48,55 L45,60 L28,42" fill="#1a1a1a" stroke="#000" stroke-width="1" />

                        <!-- Hood / White Collar (V-shape) -->
                        <path d="M-20,28 L-15,26 L0,40 L15,26 L20,28 L0,48 Z" fill="#e8e8e8" stroke="#ccc" stroke-width="1" />

                        <!-- Hands -->
                        <path d="M-42,56 L-38,60 L-35,58" fill="#f098a8" stroke="#d07888" stroke-width="1.5" />
                        <path d="M42,56 L38,60 L35,58" fill="#f098a8" stroke="#d07888" stroke-width="1.5" />

                        <!-- Shoes -->
                        <path d="M-18,113 L-22,118 L-10,118 L-8,113 Z" fill="#1a1a1a" stroke="#000" stroke-width="1" />
                        <path d="M8,113 L10,118 L22,118 L18,113 Z" fill="#1a1a1a" stroke="#000" stroke-width="1" />
                    </g>
                </svg>`
    },
    {
        title: "Dusk Pub Mood",
        date: "PROJECT #08 - 2024",
        svg: `
                <svg viewBox="0 0 200 200" class="character-svg">
                    <!-- Background -->
                    <rect width="200" height="200" fill="#141a12" />
                    <!-- Green Brick Wall (Linear) -->
                    <g opacity="0.4">
                        <rect x="0" y="0" width="40" height="200" fill="#2d3a2a" />
                        <path d="M0,20 L40,20 M0,40 L40,40 M0,60 L40,60 M0,80 L40,80 M0,100 L40,100" stroke="#1a1a1a" stroke-width="1" />
                    </g>
                    <!-- Red Pendant Light (Linear) -->
                    <path d="M140,-10 L140,20 L120,40 L160,40 Z" fill="#e74c3c" filter="url(#global-refined-hand)" />
                    <circle cx="140" cy="45" r="5" fill="#f1c40f" opacity="0.6" />

                    <!-- Character Structure -->
                    <g transform="translate(100, 95)">
                        <!-- Bottom Layer: Rear Hair -->
                        <path d="M-65,20 L-70,0 L-50,-35 L-20,-75 L20,-75 L50,-35 L70,0 L65,20 L75,80 L-75,80 Z" fill="#050505" />

                        <!-- Middle Layer: Face & Neck -->
                        <path d="M-12,45 L-12,55 L0,62 L12,55 L12,45 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />
                        <path d="M-45,-45 L-52,10 L-40,48 L0,65 L40,48 L52,10 L45,-45 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />

                        <!-- 1. Eyes (Polygonal) -->
                        <g class="eye-group" onclick="this.closest('.character-svg').classList.toggle('is-closed')">
                            <g class="eye-open">
                                <path d="M-35,6 L-20,-2 L-5,6 L-20,11 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="-20" cy="6" r="4" fill="black" />
                                <path d="M10,8 L25,0 L40,8 L25,13 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="25" cy="8" r="4" fill="black" />
                            </g>
                            <g class="eye-closed">
                                <path d="M-35,8 L-5,8 M10,10 L40,10" stroke="black" stroke-width="3" fill="none" />
                            </g>
                        </g>

                        <!-- Pouty Mouth (Linear) -->
                        <path d="M-10,48 L0,52 L10,48" fill="none" stroke="#d07888" stroke-width="3.5" stroke-linecap="round" />

                        <!-- 2. Front Hair (ON TOP of face) -->
                        <path d="M-55,-60 L-10,-55 L-42,32 L-55,25 Z" fill="#121212" /> 
                        <path d="M55,-60 L10,-55 L42,32 L55,25 Z" fill="#121212" />
                        <path d="M-50,-45 L-20,5 L-10,-10 L0,5 L20,-15 L45,5 L45,-45 Z" fill="#000" opacity="0.18" />

                        <!-- Clothing -->
                        <path d="M-72,55 L-40,50 L40,50 L72,55 L85,130 L-85,130 Z" fill="#0c0c0c" stroke="#000" stroke-width="1.8" />
                        <path d="M-8,65 L8,65 M-8,75 L8,75" stroke="#333" stroke-width="2.5" />
                        <circle cx="0" cy="65" r="2.5" fill="#000" stroke="#333" stroke-width="1" />
                        <circle cx="0" cy="75" r="2.5" fill="#000" stroke="#333" stroke-width="1" />
                    </g>

                    <!-- Foreground: Glass -->
                    <g transform="translate(100, 180)">
                        <path d="M-20,-30 L20,-30 L20,10 L-20,10 Z" fill="rgba(255,255,255,0.15)" stroke="white" opacity="0.4" />
                        <path d="M-18,-10 L18,-10 L18,5 L-18,5 Z" fill="#ccaa88" opacity="0.5" />
                    </g>
                </svg>`
    },
    {
        title: "Gallery Backview Zine",
        date: "PROJECT #07 - 2024",
        svg: `
                <svg viewBox="0 0 200 200" class="character-svg">
                    <!-- Background -->
                    <rect width="200" height="200" fill="#f0f2f5" />
                    <!-- Character Structure (Linear Profile) -->
                    <g transform="translate(80, 100)">
                        <!-- Bottom Layer: Hair -->
                        <path d="M-55,20 L-65,-40 L-40,-75 L10,-80 L50,-75 L60,-40 L55,20 L60,80 L-60,80 Z" fill="#080808" />

                        <!-- Middle Layer: Face -->
                        <path d="M-40,-50 L-48,0 L-35,35 L-10,48 L15,40 L35,-45 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />
                        
                        <!-- 1. Eyes (Polygonal) -->
                        <g class="eye-group" onclick="this.closest('.character-svg').classList.toggle('is-closed')">
                            <g class="eye-open">
                                <path d="M-28,0 L-20,-8 L-10,-2 L-10,8 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="-18" cy="2" r="3.5" fill="black" />
                                <path d="M5,4 L18,-4 L32,4 L18,12 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="20" cy="4" r="3.5" fill="black" />
                            </g>
                            <g class="eye-closed">
                                <path d="M-28,5 L-10,5 M5,8 L32,8" stroke="black" stroke-width="3" fill="none" />
                            </g>
                        </g>

                        <!-- Pouty Mouth (Linear) -->
                        <path d="M-12,32 L-6,36 L2,32" fill="none" stroke="#d07888" stroke-width="3.5" stroke-linecap="round" />

                        <!-- 2. Clothing & Accessories ON TOP -->
                        <path d="M-60,50 L-30,40 L10,50 L30,150 H-70 Z" fill="#2d3436" stroke="#000" stroke-width="2" />
                        <path d="M-50,60 L-20,55 L0,65 L10,80 L-55,80 Z" fill="#636e72" />
                        
                        <!-- Zine -->
                        <g transform="translate(-10, 30) rotate(15)">
                            <path d="M0,0 L40,0 L40,55 L0,55 Z" fill="#f1c40f" stroke="#000" stroke-width="1" />
                            <path d="M5,5 L35,5 L35,35 L5,35 Z" fill="white" />
                            <path d="M8,10 L32,10 M8,20 L32,20" stroke="#000" />
                        </g>

                        <!-- Cap -->
                        <g transform="translate(-10, -78) rotate(-5)">
                            <path d="M-45,15 L-48,-40 L0,-48 L48,-40 L45,15 Z" fill="#c2b280" stroke="#000" stroke-width="2" />
                            <path d="M-5,10 L35,15 L55,25 L35,35 L-10,30 Z" fill="#b19160" stroke="#000" stroke-width="1" />
                        </g>
                    </g>
                </svg>`
    },
    {
        title: "Double Lakeside",
        date: "PROJECT #05 - 2024",
        svg: `
                <svg viewBox="0 0 200 200" class="character-svg">
                    <rect width="200" height="200" fill="#7d9c6a" />
                    <!-- Foreground Man -->
                    <g transform="translate(130, 110)">
                        <path d="M-40,50 L20,30 L100,50 L120,200 L-60,200 Z" fill="#1e2a4a" />
                        <path d="M-55,-15 L-65,-85 L20,-90 L70,-85 L62,0 L65,35 L-60,35 Z" fill="#050505" />

                        <!-- Face & Neck -->
                        <path d="M-12,45 L-12,55 L0,62 L12,55 L12,45 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />
                        <path d="M-50,-50 L-55,0 L-40,40 L0,65 L45,45 L50,-55 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />
                        
                        <!-- Eyes (Polygonal) -->
                        <g class="eye-group" onclick="event.stopPropagation(); this.closest('.character-svg').classList.toggle('is-closed-fg')">
                            <g class="fg-eye-open">
                                <path d="M-35,5 L-20,-3 L-5,5 L-20,11 Z" fill="white" stroke="black" stroke-width="1" />
                                <path d="M10,8 L25,0 L40,8 L25,14 Z" fill="white" stroke="black" stroke-width="1" />
                                <g class="pupil-fg"><circle cx="-20" cy="5" r="4" fill="black" /><circle cx="25" cy="8" r="4" fill="black" /></g>
                            </g>
                            <g class="fg-eye-closed"><path d="M-35,7 L-5,7 M10,10 L40,10" stroke="black" stroke-width="3" fill="none" /></g>
                        </g>

                        <!-- Pouty Mouth -->
                        <path d="M-10,48 L0,52 L10,48" fill="none" stroke="#d07888" stroke-width="3.5" stroke-linecap="round" />
                        
                        <!-- Front Hair ON TOP -->
                        <path d="M-55,-60 L-10,-55 L-42,32 L-55,25 Z" fill="#121212" />
                        <path d="M55,-60 L10,-55 L42,32 L55,25 Z" fill="#121212" />
                        <path d="M-50,-45 L-20,5 L-10,-10 L0,5 L20,-15 L45,5 L45,-45 Z" fill="#000" opacity="0.18" />

                        <!-- Clothing -->
                        <path d="M-72,55 L-40,50 L40,50 L72,55 L85,130 L-85,130 Z" fill="#1e2a4a" stroke="#000" stroke-width="1.8" />
                    </g>

                    <!-- Background Woman -->
                    <g transform="translate(55, 95) rotate(-15) scale(0.65)">
                        <path d="M-30,50 L0,40 L30,50 L40,150 H-40 Z" fill="#1a1a1a" />
                        <path d="M-45,10 L-50,-55 L0,-62 L50,-55 L45,10 L0,35 L-50,45 Z" fill="#0a0a0a" />

                        <!-- Face -->
                        <path d="M-12,35 L-12,42 L0,48 L12,42 L12,35 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />
                        <path d="M-36,-40 L-40,0 L-30,35 L0,50 L30,35 L40,0 L36,-40 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />
                        
                        <!-- Eyes (Polygonal) -->
                        <g class="eye-group" onclick="event.stopPropagation(); this.closest('.character-svg').classList.toggle('is-closed-bg')">
                            <g class="bg-eye-open">
                                <path d="M-25,6 L-13,-2 L-1,6 L-13,11 Z" fill="white" stroke="black" stroke-width="1" />
                                <path d="M1,6 L13,-2 L25,6 L13,11 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil-bg" cx="-13" cy="6" r="4" fill="black" /><circle class="pupil-bg" cx="13" cy="6" r="4" fill="black" />
                            </g>
                            <g class="bg-eye-closed"><path d="M-25,8 L-1,8 M1,8 L25,8" stroke="black" stroke-width="3" fill="none" /></g>
                        </g>

                        <!-- Pouty Mouth -->
                        <path d="M-8,35 L0,39 L8,35" fill="none" stroke="#d07888" stroke-width="3.5" stroke-linecap="round" />
                        
                        <!-- Front Hair ON TOP -->
                        <path d="M-40,-55 L0,-65 L40,-55 L42,-30 L10,-32 L0,-12 L-10,-32 L-42,-30 Z" fill="#151515" />
                    </g>
                </svg>`
    }
];

const container = document.getElementById('main-gallery');

function render() {
    container.innerHTML = projects.map(p => `
        <div class="project-card">
            <div class="svg-container">${p.svg}</div>
            <div class="info">
                <h3>${p.title}</h3>
                <p>${p.date}</p>
            </div>
        </div>
    `).join('');
}

render();

// 核心交互：瞳孔追踪
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.pupil-fg').forEach(p => movePupil(p, e, 4.5));
    document.querySelectorAll('.pupil-bg').forEach(p => movePupil(p, e, 2.5));
    document.querySelectorAll('.pupil').forEach(p => movePupil(p, e, 4));
});

function movePupil(pupil, e, distance) {
    const rect = pupil.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    pupil.style.transform = `translate(${x}px, ${y}px)`;
}

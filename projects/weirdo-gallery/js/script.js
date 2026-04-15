/* 
    WEirdo Gallery Interaction Core
    Based on WEirdo Art Protocol - Unified Linear Aesthetic
*/

const projects = [
    {
        title: "Window Puffer Faux Fur",
        date: "PROJECT #20 - " + new Date().getFullYear(),
        svg: `
                <svg viewBox="0 0 200 200" class="character-svg">
                    <!-- Background Environment (Gallery Window Exterior) -->
                    
                    <!-- Window Frame (Dark wooden structural blocks on Right and Bottom) -->
                    <rect x="160" y="0" width="40" height="200" fill="#36221c" />
                    <!-- Inner frame molding -->
                    <path d="M150,0 L160,0 L160,200 L150,200 Z" fill="#4d3229" stroke="#251612" stroke-width="2" />
                    <!-- Bottom wooden ledge block -->
                    <path d="M0,165 L160,165 L160,200 L0,200 Z" fill="#422921" stroke="#251612" stroke-width="2" />

                    <!-- Inside the Display Window -->
                    <!-- Teal Base Wall -->
                    <rect x="0" y="0" width="150" height="165" fill="#296670" />

                    <!-- Draped Ceiling Curtains (Geometric Sweep abstraction) -->
                    <path d="M0,0 L150,0 L150,55 L80,95 L0,45 Z" fill="#1b4d57" />
                    <path d="M0,0 L60,20 L40,75 L0,30 Z" fill="#153d45" />
                    <path d="M30,0 L100,50 L150,35 L150,0 Z" fill="#2d7785" />
                    <!-- Deep structural shadow lines for curtain folds -->
                    <path d="M0,25 L70,75 L150,35" stroke="#12363d" stroke-width="3" stroke-linejoin="round" fill="none" />
                    <path d="M0,45 L50,85 L85,75" stroke="#12363d" stroke-width="4" stroke-linejoin="round" fill="none" />
                    <path d="M25,10 L80,40 L150,20" stroke="#378c9c" stroke-width="2" stroke-linejoin="round" fill="none" />

                    <!-- Floating Magical Tree Painting (Top Left Gallery Section) -->
                    <g transform="translate(15, 30)">
                        <!-- Wooden Frame Outer -->
                        <path d="M0,0 L65,0 L65,55 L0,55 Z" fill="#5c2411" stroke="#331409" stroke-width="2.5" />
                        <!-- Golden Inner Frame Bevel -->
                        <path d="M5,5 L60,5 L55,10 L10,10 Z" fill="#e0bc53" />
                        <path d="M60,5 L60,50 L55,45 L55,10 Z" fill="#a88934" />
                        <path d="M10,50 L55,50 L60,55 L5,55 Z" fill="#8a6e22" />
                        <path d="M5,5 L10,10 L10,50 L5,55 Z" fill="#ebc967" />
                        
                        <!-- Canvas Base (Night Blue to ground) -->
                        <rect x="10" y="10" width="45" height="40" fill="#183242" />
                        <rect x="10" y="35" width="45" height="15" fill="#10212e" /> <!-- Dark ground layer -->
                        
                        <!-- Abstract Geometric White Tree -->
                        <!-- Trunk -->
                        <polygon points="32,35 30,22 35,22" fill="#84aeb5" />
                        <polygon points="32,35 34,22 38,30" fill="#6a8e94" />
                        <!-- Massive glowing canopy structures -->
                        <path d="M32,10 L18,25 L45,25 Z M25,15 L18,22 L35,22 Z M40,15 L28,28 L50,28 Z" fill="#c4eff5" opacity="0.8" />
                        <polygon points="20,12 12,20 28,20" fill="#a0ced4" />
                        <!-- Central ethereal glow box over the tree -->
                        <rect x="20" y="10" width="25" height="20" fill="#fff" opacity="0.15" />
                    </g>

                    <!-- Ornate Portrait of Goofy (Renaissance Style) -->
                    <!-- This sits lower down on the window display -->
                    <g transform="translate(18, 90)">
                        <!-- Thick Black Ornate Frame (Tapered top/bottom abstraction) -->
                        <path d="M-5,-5 L55,-5 L60,70 L-10,70 Z" fill="#181a18" stroke="#0a0a0a" stroke-width="2" stroke-linejoin="round" />
                        <!-- Carved structural ridge on frame -->
                        <path d="M-2,20 L-2,50 M52,20 L52,50" stroke="#222" stroke-width="4" />
                        <!-- Golden Inner Edge ring -->
                        <path d="M0,0 L50,0 L50,65 L0,65 Z" fill="none" stroke="#ba9234" stroke-width="1.5" />
                        
                        <!-- Canvas Background Base (Muted museum brown) -->
                        <rect x="1" y="1" width="48" height="63" fill="#35373a" />
                        
                        <!-- The Geometric Goofy Architecture! -->
                        <g transform="translate(25, 30)">
                            <!-- Aristocrat Ruffled White Collar Backing -->
                            <path d="M-15,10 L-8,15 L0,12 L8,15 L15,10 L12,0 L-12,0 Z" fill="#d1d6d5" />
                            
                            <!-- Head Base & Features -->
                            <!-- Orange/brown Muzzle (Pointed out left) -->
                            <path d="M-12,-2 L-6,-15 L4,-15 L10,-2 Z" fill="#c4662d" />
                            <!-- Nose (Black shiny poly chunk on end of muzzle) -->
                            <path d="M-15,-2 L-7,-2 L-10,3 Z" fill="#111" />
                            <path d="M-13,-1 L-8,-1 L-10,1 Z" fill="#fff" opacity="0.6" /> <!-- Gloss -->
                            
                            <!-- Black floppy ears and hat enveloping the head -->
                            <!-- Floppy Hat Base -->
                            <path d="M-12,-25 L12,-20 L25,-5 L8,-10 L0,-20 L-8,-5 L-25,-5 Z" fill="#141414" stroke="#0a0a0a" stroke-width="1" stroke-linejoin="round" />
                            <!-- Floppy Ear dropping down right side -->
                            <path d="M10,-5 L22,12 L5,8 Z" fill="#141414" />
                            
                            <!-- Bright White Eye whites -->
                            <rect x="-8" y="-12" width="4" height="6" fill="#fff" transform="rotate(-15)" />
                            <rect x="2" y="-12" width="4" height="6" fill="#fff" transform="rotate(15)" />
                            <!-- Goofy tiny black pupils looking rightwards -->
                            <rect x="-6" y="-10" width="1.5" height="2" fill="#111" />
                            <rect x="4" y="-10" width="1.5" height="2" fill="#111" />
                            
                            <!-- Renaissance Jacket Body (Rich velvet black) -->
                            <path d="M-15,15 L-22,35 L22,35 L15,15 Z" fill="#1a1c1d" />
                            <!-- Golden embroidery stripes down the front -->
                            <path d="M-6,15 L-8,35 M6,15 L8,35 M0,15 L0,35" stroke="#a3780c" stroke-width="1" />
                        </g>
                    </g>

                    <!-- Yellow Gallery Info Placard below Goofy portrait -->
                    <g transform="translate(30, 165)">
                        <!-- Yellow folded stiff card leaning forward (Skewed) -->
                        <polygon points="-5,0 45,0 40,25 -10,25" fill="#e3bc48" stroke="#a6831c" stroke-width="1.5" />
                        <!-- Abstract Heavy Typography Lines (Block text geometry) -->
                        <path d="M-2,5 L15,5 M20,5 L35,5" stroke="#1c1808" stroke-width="2" stroke-linecap="round" fill="none" />
                        <path d="M-4,10 L10,10 M15,10 L30,10 M32,10 L38,10" stroke="#1c1808" stroke-width="1.5" stroke-linecap="round" fill="none" />
                        <path d="M-6,15 L5,15 M8,15 L18,15" stroke="#1c1808" stroke-width="1" stroke-linecap="round" fill="none" />
                    </g>

                    <!-- Window Reflection / Inner Ambient Store Glow -->
                    <polygon points="50,0 200,200 0,200 0,0" fill="#fff" opacity="0.06" pointer-events="none" />
                    <polygon points="100,0 150,0 150,80" fill="#f0db95" opacity="0.15" pointer-events="none" />

                    <!-- Main Character Frame (Zoomed deeply into Puffer Jacket + White Faux Fur Hat) -->
                    <!-- Spatially placed in foreground, slightly to the right to reveal gallery elements -->
                    <g transform="translate(130, 95)">
                        
                        <!-- Neck & Inner Black High Collar layer (Behind everything) -->
                        <!-- Actually, face layers sit first. -->
                        
                        <!-- Rear White Hat Dome (Tucked behind hair and face) -->
                        <path d="M-40,-15 L-55,-60 L-30,-85 L35,-85 L60,-60 L45,-15 Z" fill="#e8eaed" />
                        
                        <!-- Flowing Bob Hair (Framing exactly behind cheeks/face) -->
                        <path d="M-30,-15 L-40,40 L-20,45 L-10,10 Z" fill="#0d0e12" />
                        <path d="M30,-15 L40,40 L20,45 L10,10 Z" fill="#0d0e12" />
                        <!-- Hair crossing forehead gaplessly under the hat -->
                        <path d="M-30,-15 L0,-30 L30,-15 Z" fill="#0d0e12" /> 

                        <!-- Standard Face Base Layer -->
                        <path d="M-28,-25 L-32,5 L-22,25 L-10,35 L0,38 L10,35 L22,25 L32,5 L28,-25 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />

                        <!-- Standard Protocol Eyes -->
                        <g class="eye-group" onclick="this.closest('.character-svg').classList.toggle('is-closed')">
                            <g class="eye-open">
                                <path d="M-23,2 L-13,-3 L-3,2 L-13,7 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="-13" cy="2" r="3.5" fill="black" />
                                <path d="M3,2 L13,-3 L23,2 L13,7 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="13" cy="2" r="3.5" fill="black" />
                            </g>
                            <g class="eye-closed">
                                <path d="M-23,4 L-3,4 M3,4 L23,4" stroke="black" stroke-width="3" fill="none" />
                            </g>
                        </g>

                        <!-- Pouty Mouth w/ Right-sided Smirk (Asymmetrical line matches the photo perfectly) -->
                        <path d="M-8,24 L0,25 L10,21" fill="none" stroke="#d07888" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                        
                        <!-- Neck / Inner Black Shirt Triangle (Drops below jaw line) -->
                        <!-- Actually it's behind the face but let's cover the gap to the jacket -->
                        <path d="M-15,30 L-20,60 L20,60 L15,30 Z" fill="#111" />

                        <!-- Massive Glossy Puffer Jacket Base (Drawn over the neck and hair edges!) -->
                        <!-- Built out of ribbed segmented armor blocks -->
                        
                        <!-- Main Left Body Block -->
                        <path d="M-15,40 L-75,50 L-95,150 L0,150 L0,65 Z" fill="#14151a" />
                        <!-- Main Right Body Block -->
                        <path d="M15,40 L75,50 L95,150 L0,150 L0,65 Z" fill="#14151a" />
                        
                        <!-- Puffer Jacket Zipped High Collar -->
                        <!-- Wrapped perfectly around the neck -->
                        <path d="M-20,35 L-25,60 L0,65 M20,35 L25,60 L0,65" fill="#1a1c24" stroke="#111" stroke-width="2" />
                        <path d="M0,65 L0,150" stroke="#050608" stroke-width="3" /> <!-- Center zipper line -->

                        <!-- Deep Structural Ribbing Lines (The Puffer Rolls!) -->
                        <!-- Viewer Left Highlights / Shadow contours -->
                        <g stroke-linecap="round" fill="none">
                            <path d="M-10,55 L-80,65" stroke="#0a0a0c" stroke-width="5" />
                            <path d="M-8,60 L-70,70" stroke="#25272e" stroke-width="3" /> <!-- Metallic highlight -->
                            
                            <path d="M-6,80 L-85,90" stroke="#0a0a0c" stroke-width="6" />
                            <path d="M-4,86 L-75,96" stroke="#2a2c36" stroke-width="4" />
                            
                            <path d="M-4,105 L-88,115" stroke="#0a0a0c" stroke-width="7" />
                            <path d="M-2,112 L-80,122" stroke="#2d303b" stroke-width="4" />
                            
                            <path d="M-2,130 L-92,137" stroke="#0a0a0c" stroke-width="7" />
                        </g>

                        <!-- Viewer Right Highlights / Shadow contours -->
                        <g stroke-linecap="round" fill="none">
                            <path d="M10,55 L80,65" stroke="#0a0a0c" stroke-width="5" />
                            <path d="M8,60 L70,70" stroke="#25272e" stroke-width="3" /> <!-- Metallic highlight -->
                            
                            <path d="M6,80 L85,90" stroke="#0a0a0c" stroke-width="6" />
                            <path d="M4,86 L75,96" stroke="#2a2c36" stroke-width="4" />
                            
                            <path d="M4,105 L88,115" stroke="#0a0a0c" stroke-width="7" />
                            <path d="M2,112 L80,122" stroke="#2d303b" stroke-width="4" />
                            
                            <path d="M2,130 L92,137" stroke="#0a0a0c" stroke-width="7" />
                        </g>


                        <!-- The Masterpiece: Massive White Faux Fur Animal Hat (Top Layer!) -->
                        <!-- Front thick brim completely enveloping the forehead -->
                        <path d="M-55,-60 L-65,0 L-45,15 L-35,-25 L-25,-35 L0,-40 L25,-35 L35,-25 L45,15 L65,0 L55,-60 Z" fill="#fcfdfe" stroke="#e0e3ea" stroke-width="2" stroke-linejoin="round" />
                        
                        <!-- Fur Texture Detail Highlights (Abstract tiny jagged polygons overlapping the rim) -->
                        <polygon points="-40,-25 -35,-20 -38,-15" fill="#d2d7e0" />
                        <polygon points="40,-25 35,-20 38,-15" fill="#d2d7e0" />
                        <polygon points="-15,-38 -12,-34 -17,-35" fill="#d2d7e0" />
                        <polygon points="15,-38 12,-34 17,-35" fill="#d2d7e0" />
                        
                        <!-- The Pointy Animal Ears (Thick geometric structure atop the hood) -->
                        <!-- Viewer Left Ear Structure -->
                        <path d="M-45,-55 L-55,-90 L-18,-70 Z" fill="#fcfdfe" stroke="#e0e3ea" stroke-width="2" stroke-linejoin="round" />
                        <path d="M-42,-60 L-48,-82 L-26,-68 Z" fill="#d7cccb" /> <!-- Inner pinkish/grey geometry -->
                        
                        <!-- Viewer Right Ear Structure -->
                        <path d="M45,-55 L55,-90 L18,-70 Z" fill="#fcfdfe" stroke="#e0e3ea" stroke-width="2" stroke-linejoin="round" />
                        <path d="M42,-60 L48,-82 L26,-68 Z" fill="#d7cccb" /> <!-- Inner pinkish/grey geometry -->


                        <!-- Long Hanging Faux Fur Tassels dropping from extreme sides! -->
                        <!-- These drop powerfully over the puffy black jacket sections -->
                        
                        <!-- Left String Base -->
                        <path d="M-55,0 L-45,115" stroke="#fcfdfe" stroke-width="12" stroke-linecap="round" />
                        <path d="M-55,0 L-45,115" stroke="#eaecf2" stroke-width="4" stroke-linecap="round" fill="none" /> <!-- Center shadow contour -->
                        
                        <!-- Left Giant Chunky Pom-Pom! -->
                        <path d="M-50,115 L-30,112 L-20,125 L-28,142 L-45,145 L-55,135 Z" fill="#fcfdfe" stroke="#dee1e8" stroke-width="2" stroke-linejoin="round" />
                        <!-- Fur spikes jutting out of left pom-pom -->
                        <polygon points="-20,125 -10,128 -18,132" fill="#eaecf2" />
                        <polygon points="-55,135 -65,135 -52,142" fill="#eaecf2" />

                        <!-- Right String Base -->
                        <path d="M55,0 L45,115" stroke="#fcfdfe" stroke-width="12" stroke-linecap="round" />
                        <path d="M55,0 L45,115" stroke="#eaecf2" stroke-width="4" stroke-linecap="round" fill="none" /> <!-- Center shadow contour -->
                        
                        <!-- Right Giant Chunky Pom-Pom! -->
                        <path d="M50,115 L30,112 L20,125 L28,142 L45,145 L55,135 Z" fill="#fcfdfe" stroke="#dee1e8" stroke-width="2" stroke-linejoin="round" />
                        <!-- Fur spikes jutting out of right pom-pom -->
                        <polygon points="20,125 10,128 18,132" fill="#eaecf2" />
                        <polygon points="55,135 65,135 52,142" fill="#eaecf2" />

                    </g>
                </svg>`
    },
    {
        title: "Salt Lake Train Sign",
        date: "PROJECT #19 - " + new Date().getFullYear(),
        svg: `
                <svg viewBox="0 0 200 200" class="character-svg">
                    <!-- Sky & Salt Lake Background -->
                    <rect width="200" height="90" fill="#ccd8e0" />
                    <!-- Distant Mountain/Sky hue -->
                    <path d="M0,80 L200,80 L200,90 L0,90 Z" fill="#bdcad1" />
                    <!-- Bright white salt flats -->
                    <path d="M0,90 L200,90 L200,105 L0,105 Z" fill="#ebf0f2" />

                    <!-- Gravel & Train Tracks Area -->
                    <path d="M0,105 L200,105 L200,165 L0,165 Z" fill="#58676b" />
                    <!-- Railroad Tracks (Thick sweeping lines) -->
                    <path d="M0,115 L200,115" stroke="#252a2b" stroke-width="3" />
                    <path d="M0,135 L200,135" stroke="#252a2b" stroke-width="4" />
                    <!-- Wooden sleepers under the tracks -->
                    <g fill="#473a32">
                        <polygon points="10,110 20,110 15,140 5,140" />
                        <polygon points="40,110 50,110 45,140 35,140" />
                        <polygon points="70,110 80,110 75,140 65,140" />
                        <polygon points="100,110 110,110 105,140 95,140" />
                        <polygon points="130,110 140,110 135,140 125,140" />
                        <polygon points="160,110 170,110 165,140 155,140" />
                        <polygon points="190,110 200,110 195,140 185,140" />
                    </g>
                    <!-- Scattered rocks in the gravel -->
                    <g fill="#404c4f">
                        <path d="M10,108 L15,106 L18,112 Z M35,120 L40,118 L42,125 Z M60,145 L65,140 L70,148 L62,150 Z M90,112 L95,110 L94,116 Z M115,125 L120,122 L125,128 Z M140,150 L145,145 L150,152 Z M170,110 L175,108 L178,114 Z M185,140 L190,138 L192,145 Z" />
                        <path d="M20,140 L25,138 L22,144 Z M80,155 L85,150 L90,155 Z M120,160 L125,158 L122,164 Z M160,120 L165,118 L162,124 Z M195,155 L200,150 L198,158 Z" fill="#354042" />
                    </g>
                    
                    <!-- White Ground Foreground (Salt shore) -->
                    <path d="M0,165 L200,165 L200,200 L0,200 Z" fill="#e8eced" />

                    <!-- Background Wooden Fence Posts & Geometric Repe -->
                    <g fill="#8f7a63" stroke="#63513e" stroke-width="1">
                        <rect x="25" y="95" width="4" height="15" />
                        <rect x="65" y="95" width="4" height="15" />
                        <rect x="105" y="95" width="4" height="15" />
                        <rect x="145" y="95" width="4" height="15" />
                        <rect x="185" y="95" width="4" height="15" />
                    </g>
                    <path d="M0,105 L12,108 L25,105 L45,108 L65,105 L85,108 L105,105 L125,108 L145,105 L165,108 L185,105 L192,108 L200,105" stroke="#dcdcdc" stroke-width="1.5" stroke-linejoin="round" fill="none" />

                    <!-- Foreground Railway Sign -->
                    <g transform="translate(45, 175)">
                        <!-- Stepped Base -->
                        <path d="M-15,0 L15,0 L10,-10 L-10,-10 Z" fill="#695c52" stroke="#4d4239" stroke-width="2" />
                        <path d="M-10,-10 L10,-10 L5,-20 L-5,-20 Z" fill="#4d4239" />
                        
                        <!-- Striped Warning Pole -->
                        <!-- Full pole in pitch black -->
                        <path d="M-4,-20 L4,-20 L3,-150 L-3,-150 Z" fill="#111" />
                        <!-- Bright Yellow warning stripes (Trapezoids due to pole slight taper) -->
                        <path d="M-3.8,-30 L3.8,-30 L3.5,-45 L-3.5,-45 Z" fill="#ffcc00" />
                        <path d="M-3.3,-65 L3.3,-65 L3,-80 L-3,-80 Z" fill="#ffcc00" />
                        <path d="M-2.8,-100 L2.8,-100 L2.5,-115 L-2.5,-115 Z" fill="#ffcc00" />
                    
                        <!-- Text Plate (Geometric Abstract Chinese "红灯禁止通行") -->
                        <g transform="translate(0, -125)">
                            <rect x="-24" y="-12" width="48" height="24" fill="#ffcc00" stroke="#111" stroke-width="2.5" rx="1" />
                            <rect x="-21" y="-9" width="42" height="18" fill="none" stroke="#111" stroke-width="1" />
                            <!-- Abstract bold lines simulating heavy warning text fonts -->
                            <path d="M-16,-5 L-12,-5 M-14,-2 L-11,4 M-11,-5 L-11,4 M-14,1 L-10,1 M-6,-4 L-2,-4 M-4,-4 L-4,0 M-7,1 L-1,1 M-6,4 L-2,4 M2,-5 L5,-5 M2,-1 L5,-1 M2,1 L5,1 M2,-5 L2,4 M7,-5 L10,-5 M8,-5 L8,4 M13,-5 L16,-5 M13,-1 L16,-1 M13,2 L16,2 M17,-5 L20,-5 M18,-5 L18,-1 M17,-1 L20,-1 M18,-1 L18,4" stroke="#111" stroke-width="1.8" stroke-linecap="square" />
                        </g>

                        <!-- Triangle Steam Train Warning Sign -->
                        <g transform="translate(0, -155)">
                            <!-- Triangle Outer thick border -->
                            <path d="M0,-30 L32,20 L-32,20 Z" fill="#ffcc00" stroke="#111" stroke-width="3" stroke-linejoin="round" />
                            <!-- Triangle Inner border -->
                            <path d="M0,-23 L26,16 L-26,16 Z" fill="none" stroke="#111" stroke-width="1.5" stroke-linejoin="round" />
                            <!-- Steam Train Geometric Silhouette Inside -->
                            <path d="M-15,10 L-15,-2 L-8,-2 L-8,-5 L2,-5 L6,2 L14,2 L14,10 Z" fill="#111" />
                            <path d="M6,6 L18,6 L18,10 Z" fill="#111" /> <!-- Train cowcatcher -->
                            <rect x="-16" y="10" width="34" height="2" fill="#111" />
                            <rect x="0" y="2" width="4" height="4" fill="#ffcc00" /> <!-- Window cutout -->
                            <!-- Wheels -->
                            <circle cx="-10" cy="12" r="3.5" fill="#111" />
                            <circle cx="2" cy="12" r="3.5" fill="#111" />
                            <circle cx="12" cy="12" r="3.5" fill="#111" />
                            <!-- Smoke puffs abstraction -->
                            <path d="M-10,-7 L-15,-10 M-8,-10 L-4,-14 M1,-12 L6,-13 M-12,-15 L-16,-16 L-10,-19 Z" stroke="#111" stroke-width="2.5" stroke-linecap="round" fill="none" />
                        </g>
                    </g>


                    <!-- Main Character Frame -->
                    <!-- Sized perfectly to frame the torso, flared pants, and wide woven hat -->
                    <g transform="translate(130, 95)">
                        
                        <!-- Beige Crossbody Bag Body (Drawn BEHIND the back/shirt) -->
                        <path d="M-5,40 L-35,60 L-45,85 L-10,80 Z" fill="#9e8b78" stroke="#877564" stroke-width="2" stroke-linejoin="round" />

                        <!-- Flared Leopard Pants (Lower Body Layer) -->
                        <!-- Viewer Left Leg -->
                        <path d="M-15,95 L-35,195 L10,195 L0,95 Z" fill="#c4ccd1" stroke="#9da7ab" stroke-width="1.5" stroke-linejoin="round" />
                        <!-- Viewer Right Leg -->
                        <path d="M0,95 L-10,195 L35,195 L15,95 Z" fill="#c4ccd1" stroke="#9da7ab" stroke-width="1.5" stroke-linejoin="round" />
                        
                        <!-- Leopard/Dalmatian Spots Geometric Abstraction -->
                        <g fill="#21262b">
                            <path d="M-10,100 L-6,105 L-10,108 Z M-20,115 L-15,118 L-18,125 L-22,122 Z M-5,130 L5,133 L0,140 Z M-25,145 L-18,150 L-22,155 Z M-10,160 L-5,165 L-10,170 Z M-30,175 L-22,180 L-26,188 Z M0,185 L5,190 L-5,193 Z" />
                            <path d="M10,105 L15,108 L12,112 Z M20,120 L25,123 L22,130 Z M5,140 L10,145 L5,150 Z M25,155 L30,160 L25,165 Z M10,170 L15,175 L10,180 Z M30,185 L35,190 L28,193 Z" />
                        </g>
                        <g fill="#434a50">
                            <!-- Medium grey spots intermingled -->
                            <path d="M-15,110 L-10,113 L-12,118 Z M0,125 L5,128 L2,135 Z M-15,150 L-10,155 L-15,160 Z M5,175 L10,180 L5,185 Z M-15,190 L-20,192 L-10,195 Z" />
                            <path d="M15,115 L20,118 L15,125 Z M5,130 L10,135 L5,140 Z M20,145 L25,150 L20,155 Z M15,165 L20,170 L15,175 Z M25,185 L20,190 L25,195 Z" />
                        </g>
                        
                        <!-- Dark Chunky Shoes -->
                        <!-- Left Foot -->
                        <path d="M-30,195 L-35,210 L5,210 L10,195 Z" fill="#1c1f24" stroke="#111" stroke-width="1.5" stroke-linejoin="round" />
                        <!-- Right Foot -->
                        <path d="M-5,195 L-10,210 L30,210 L35,195 Z" fill="#1c1f24" stroke="#111" stroke-width="1.5" stroke-linejoin="round" />

                        <!-- Torso (Oversized Color-Block Shirt OVER the top of the pants) -->
                        <!-- Viewer Left Flap: Deep Maroon -->
                        <path d="M-30,40 L-40,115 L-5,115 L-5,45 L0,40 Z" fill="#821c35" stroke="#5c1224" stroke-width="1.5" />
                        <!-- Center Button Placket: Deep Green -->
                        <path d="M-5,45 L-5,115 L5,115 L5,45 Z" fill="#1a4734" />
                        <circle cx="0" cy="55" r="1.5" fill="#111" />
                        <circle cx="0" cy="75" r="1.5" fill="#111" />
                        <circle cx="0" cy="95" r="1.5" fill="#111" />
                        <!-- Right Chest Stripe: Bright Yellow -->
                        <path d="M5,45 L5,115 L15,115 L15,42 Z" fill="#dbad35" stroke="#ba922d" stroke-width="1" />
                        <!-- Right Side Flap: Deep Green -->
                        <path d="M15,42 L15,115 L35,110 L25,40 Z" fill="#1a4734" stroke="#113023" stroke-width="1.5" />
                        
                        <!-- Collar Points (Dark Green sticking out) -->
                        <path d="M-10,40 L-20,50 L-5,45 Z" fill="#123027" />
                        <path d="M10,40 L20,50 L5,45 Z" fill="#123027" />

                        <!-- Beige Crossbody Bag Strap (Over the shirt, falling from right shoulder to left hip) -->
                        <path d="M18,42 L-10,95" stroke="#bfab97" stroke-width="4.5" stroke-linecap="round" fill="none" />

                        <!-- Arms Layered Over Shirt -->
                        <!-- Viewer Right Arm (Her Left) - Relaxed down into pocket -->
                        <!-- It crosses over the beige strap! -->
                        <path d="M25,40 L45,95 L25,110 L15,50 Z" fill="#821c35" stroke="#5c1224" stroke-width="2" stroke-linejoin="round" />
                        
                        <!-- Viewer Left Arm (Her Right) - Raised up holding Ice Cream Cone -->
                        <path d="M-30,40 L-45,75 L-30,85 L-15,45 Z" fill="#821c35" stroke="#5c1224" stroke-width="2" stroke-linejoin="round" />
                        
                        <!-- Light Blue Ice Cream Cone -->
                        <g transform="translate(-20, 35)">
                            <!-- Waffle Cone -->
                            <path d="M-10,0 L10,0 L0,22 Z" fill="#d19c4d" stroke="#ad7e39" stroke-width="1.5" stroke-linejoin="round" />
                            <path d="M-5,4 L5,14 M-8,9 L2,19 M5,4 L-5,14 M8,9 L-2,19" stroke="#b5853c" stroke-width="1.5" stroke-linecap="round" fill="none" />
                            <!-- Light Blue/Mint Geometric Scoop -->
                            <path d="M-12,-4 L-8,-14 L8,-14 L12,-4 L8,3 L-8,3 Z" fill="#8fddea" stroke="#6dc1cf" stroke-width="1.5" stroke-linejoin="round" />
                        </g>

                        <!-- Pink Hand holding cone (Overlaps the cone base) -->
                        <path d="M-28,30 L-8,33 L-12,42 L-23,40 Z" fill="#f098a8" stroke="#d07888" stroke-width="1.5" stroke-linejoin="round" />

                        <!-- Hat Back Dome -->
                        <path d="M-30,-15 L-40,-50 L-15,-60 L15,-60 L40,-50 L30,-15 Z" fill="#1b1c20" />
                        <!-- Flowing Bob Hair -->
                        <path d="M-30,-20 L-40,25 L-20,35 L20,35 L40,25 L30,-20 Z" fill="#111" />
                        
                        <!-- Standard Neck -->
                        <path d="M-10,20 L-10,45 L0,50 L10,45 L10,20 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />
                        
                        <!-- Standard Face Base -->
                        <path d="M-28,-25 L-32,5 L-22,25 L-10,35 L0,38 L10,35 L22,25 L32,5 L28,-25 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />
                        
                        <!-- Front Hair (Falling down the sides of the face from under the hat) -->
                        <path d="M-35,-30 L-18,-25 L-25,0 L-34,25 L-40,10 Z" fill="#111" />
                        <path d="M35,-30 L18,-25 L25,0 L34,25 L40,10 Z" fill="#111" />

                        <!-- Hat Front Brim (Sweeps down across upper forehead seamlessly) -->
                        <!-- A huge woven geometry over the entire head! -->
                        <path d="M-45,-40 L-25,-25 L25,-25 L45,-40 L35,-55 L-35,-55 Z" fill="#181a1d" />
                        
                        <!-- Woven Hat Texture (Points of sky/white light poking through) -->
                        <g fill="#edf0f2">
                            <polygon points="-35,-28 -33,-26 -37,-25" />
                            <polygon points="-25,-35 -23,-33 -27,-32" />
                            <polygon points="25,-35 23,-33 27,-32" />
                            <polygon points="35,-28 33,-26 37,-25" />
                            <polygon points="-10,-40 -8,-38 -12,-37" />
                            <polygon points="10,-40 8,-38 12,-37" />
                            <polygon points="0,-45 2,-43 -2,-43" />
                            <!-- Chin strap dropping down to neck -->
                            <path d="M-35,-25 L-10,35 M35,-25 L10,35" stroke="#111" stroke-width="1.5" stroke-linecap="round" fill="none" />
                        </g>

                        <!-- Sunglasses (Large round geometric obscuring the eyes) -->
                        <!-- Left Lens -->
                        <path d="M-24,-5 L-4,-5 L-4,15 L-12,22 L-24,15 Z" fill="#191a1e" stroke="#111" stroke-width="2" stroke-linejoin="round" />
                        <path d="M-22,-2 L-6,-2 L-15,10 Z" fill="#30353b" /> <!-- Specular polygon -->
                        <!-- Right Lens -->
                        <path d="M24,-5 L4,-5 L4,15 L12,22 L24,15 Z" fill="#191a1e" stroke="#111" stroke-width="2" stroke-linejoin="round" />
                        <path d="M22,-2 L6,-2 L15,10 Z" fill="#30353b" /> <!-- Specular polygon -->
                        <!-- Bridge over nose -->
                        <path d="M-4,5 L4,5" stroke="#111" stroke-width="2.5" />

                        <!-- Standard WEirdo Pout (Sitting nicely below the glasses) -->
                        <path d="M-8,24 L0,28 L8,24" fill="none" stroke="#d07888" stroke-width="3" stroke-linecap="round" />

                    </g>
                </svg>`
    },
    {
        title: "Pebble Beach Sun Bag",
        date: "PROJECT #18 - " + new Date().getFullYear(),
        svg: `
                <svg viewBox="0 0 200 200" class="character-svg">
                    <!-- Background Environment (Beach Daytime) -->
                    <!-- Sky -->
                    <rect width="200" height="100" fill="#aec3d1" />
                    <!-- Cloud abstraction -->
                    <path d="M0,30 L60,10 L120,25 L160,5 L200,20 L200,0 L0,0 Z" fill="#d0dce8" />
                    <!-- Sun Glare / Rays -->
                    <path d="M170,-20 L50,100 L90,110 Z" fill="#fff" opacity="0.15" />
                    <path d="M220,-10 L0,150 L40,170 Z" fill="#fff" opacity="0.1" />

                    <!-- Lake (Left) -->
                    <path d="M0,100 L110,100 L90,200 L0,200 Z" fill="#678c85" />
                    
                    <!-- Pebbled Shore (Right) -->
                    <path d="M110,100 L200,100 L200,200 L80,200 Z" fill="#6e6f70" />
                    <!-- Rock details -->
                    <path d="M130,120 L140,115 L145,130 Z M160,150 L175,140 L185,160 M100,165 L120,155 L130,175 L105,185 Z M180,105 L195,110 L185,120 M140,180 L160,175 L165,190 Z" fill="#58595a" />

                    <!-- Character Structure -->
                    <!-- Pulled back slightly (translating from center but Torso reaching bottom) -->
                    <g transform="translate(100, 100)">
                        <!-- Master Dome Rear Hair (Gapless Head covering! Learned from Project 17) -->
                        <path d="M-30,-20 L-40,-50 L-15,-55 L15,-55 L40,-50 L30,-20 Z" fill="#111" />
                        <!-- Flowing Long Rear Hair -->
                        <path d="M-30,-5 L-45,80 L-25,90 L25,90 L45,80 L30,-5 Z" fill="#111" />
                        
                        <!-- Neck -->
                        <path d="M-10,20 L-10,45 L0,50 L10,45 L10,20 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />
                        
                        <!-- Torso Base (White T-shirt sticking out at the bottom) -->
                        <path d="M-35,90 L-40,130 L40,130 L35,90 Z" fill="#e8e9ea" stroke="#d1d2d4" stroke-width="1.5" />
                        
                        <!-- Dark Fleece/Jacket -->
                        <path d="M-35,45 L-42,95 L42,95 L35,45 Z" fill="#15161a" />
                        <path d="M-10,45 L0,95 L10,45 Z" fill="#1e1f24" /> <!-- Zipper / Center line contour -->
                        <path d="M0,45 L0,95" stroke="#0a0a0c" stroke-width="2" /> <!-- Zipper line -->

                        <!-- Arms Raised in V-Pose -->
                        <!-- Viewer Left Arm (Her Right) -->
                        <path d="M-35,45 L-70,-45 L-50,-50 L-20,40 Z" fill="#15161a" stroke="#0e0e12" stroke-width="2" stroke-linejoin="round" />
                        <!-- Subtle Blue/Purple Trim Stripe -->
                        <path d="M-30,45 L-60,-45" stroke="#38437a" stroke-width="2" fill="none" />
                        
                        <!-- Viewer Right Arm (Her Left) -->
                        <path d="M35,45 L70,-45 L50,-50 L20,40 Z" fill="#15161a" stroke="#0e0e12" stroke-width="2" stroke-linejoin="round" />
                        <!-- Subtle Blue/Purple Trim Stripe -->
                        <path d="M30,45 L60,-45" stroke="#38437a" stroke-width="2" fill="none" />

                        <!-- Face -->
                        <path d="M-28,-25 L-32,5 L-22,25 L-10,35 L0,38 L10,35 L22,25 L32,5 L28,-25 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />
                        
                        <!-- Geometric Wireframe Glasses -->
                        <!-- Left Lens (Square-ish) -->
                        <path d="M-25,-5 L-5,-5 L-8,14 L-22,12 Z" fill="#fff" opacity="0.2" />
                        <path d="M-25,-5 L-5,-5 L-8,14 L-22,12 Z" stroke="#333" stroke-width="1.5" fill="none" stroke-linejoin="round" />
                        <!-- Right Lens -->
                        <path d="M25,-5 L5,-5 L8,14 L22,12 Z" fill="#fff" opacity="0.2" />
                        <path d="M25,-5 L5,-5 L8,14 L22,12 Z" stroke="#333" stroke-width="1.5" fill="none" stroke-linejoin="round" />
                        <!-- Bridge over nose -->
                        <path d="M-5,1 L5,1" stroke="#333" stroke-width="1.5" fill="none" />
                        <!-- Temples (Frame connecting to ears) -->
                        <path d="M-25,1 L-29,1 M25,1 L29,1" stroke="#333" stroke-width="1.5" fill="none" />

                        <!-- Standard Protocol Eyes (Hidden behind glasses, but visible!) -->
                        <g class="eye-group" onclick="this.closest('.character-svg').classList.toggle('is-closed')">
                            <g class="eye-open">
                                <path d="M-23,2 L-13,-3 L-3,2 L-13,7 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="-13" cy="2" r="3.5" fill="black" />
                                <path d="M3,2 L13,-3 L23,2 L13,7 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="13" cy="2" r="3.5" fill="black" />
                            </g>
                            <g class="eye-closed">
                                <path d="M-23,4 L-3,4 M3,4 L23,4" stroke="black" stroke-width="3" fill="none" />
                            </g>
                        </g>

                        <!-- Standard WEirdo Pout -->
                        <path d="M-8,21 L0,25 L8,21" fill="none" stroke="#d07888" stroke-width="3.5" stroke-linecap="round" />

                        <!-- Front Hair (Gapless connection to dome) -->
                        <path d="M-30,-50 L-35,35 L-20,40 L-25,-10 L-5,-50 L20,-10 L-5,-25 L-15,-50 Z" fill="#1a1a1a" />
                        <path d="M-5,-50 L30,-15 L22,40 L38,30 L32,-50 L5,-50 Z" fill="#1a1a1a" />

                        <!-- The Upside-Down Black Bag Resting on Head (Highest Z-index overlay squishing hair) -->
                        <path d="M-25,-32 L20,-35 L35,-65 L-15,-75 Z" fill="#1c1c1f" stroke="#111" stroke-width="2" stroke-linejoin="round" />
                        <!-- Bag side details -->
                        <path d="M-25,-32 L-10,-55 L-15,-75 Z" fill="#24252b" />
                        
                        <!-- Bag Straps crossing to hands in massive V shapes -->
                        <path d="M-65,-50 L-15,-70" stroke="#111" stroke-width="2.5" fill="none" />
                        <path d="M-75,-45 L-25,-32" stroke="#111" stroke-width="2.5" fill="none" />
                        <path d="M65,-50 L30,-62" stroke="#111" stroke-width="2.5" fill="none" />
                        <path d="M75,-45 L20,-35" stroke="#111" stroke-width="2.5" fill="none" />

                        <!-- Pink Hands OVER the Bag Straps -->
                        <!-- Viewer Left -->
                        <path d="M-72,-40 L-80,-52 L-65,-60 L-55,-48 Z" fill="#f098a8" stroke="#d07888" stroke-width="1.5" stroke-linejoin="round" />
                        <!-- Viewer Right -->
                        <path d="M72,-40 L80,-52 L65,-60 L55,-48 Z" fill="#f098a8" stroke="#d07888" stroke-width="1.5" stroke-linejoin="round" />

                    </g>
                </svg>`
    },
    {
        title: "Night City Oreo Bag",
        date: "PROJECT #17 - " + new Date().getFullYear(),
        svg: `
                <svg viewBox="0 0 200 200" class="character-svg">
                    <!-- Background Environment (Night City) -->
                    <!-- Upper Night Sky/City -->
                    <rect width="200" height="120" fill="#1f1b21" />
                    <!-- Right Building abstraction -->
                    <path d="M120,0 L200,0 L200,120 L120,120 Z" fill="#2d2629" />
                    <rect x="130" y="20" width="20" height="30" fill="#3d3734" />
                    <rect x="160" y="20" width="20" height="30" fill="#46403d" />
                    <rect x="130" y="60" width="20" height="30" fill="#3d3734" />
                    <rect x="160" y="60" width="20" height="30" fill="#46403d" />
                    <!-- Left distant warm street lights (Bokeh square abstractions) -->
                    <rect x="10" y="60" width="10" height="10" fill="#e8ba46" />
                    <rect x="25" y="70" width="6" height="6" fill="#e8ba46" />
                    <rect x="40" y="40" width="12" height="12" fill="#d99738" />
                    <rect x="60" y="55" width="8" height="8" fill="#e8ba46" />
                    <rect x="5" y="45" width="5" height="5" fill="#f0d381" />
                    
                    <!-- Ground Pavement (Perspective Checkerboard) -->
                    <path d="M0,120 L200,120 L200,200 L0,200 Z" fill="#464144" />
                    <!-- Light paving stones -->
                    <path d="M-20,200 L20,150 L50,150 L0,200 Z" fill="#544f52" />
                    <path d="M60,150 L90,150 L40,200 L-10,200 Z" fill="#544f52" transform="translate(60, 0)" />
                    <path d="M60,150 L90,150 L40,200 L-10,200 Z" fill="#544f52" transform="translate(120, 0)" />
                    <path d="M70,125 L90,125 L70,140 L50,140 Z" fill="#544f52" />
                    <path d="M130,125 L150,125 L130,140 L110,140 Z" fill="#544f52" />
                    <path d="M20,130 L40,130 L20,145 L0,145 Z" fill="#544f52" />

                    <!-- Character Structure -->
                    <g transform="translate(100, 75)">
                        
                        <!-- Torso (Dark Navy Oversized Shirt Layer) -->
                        <path d="M-35,45 L-55,140 L55,140 L35,45 Z" fill="#1b1c26" />
                        
                        <!-- Crisp Collar points sticking out -->
                        <path d="M-10,40 L-25,60 L0,50 L-10,40 Z" fill="#12131a" />
                        <path d="M10,40 L25,60 L0,50 L10,40 Z" fill="#12131a" />

                        <!-- Far Arm (Viewer Left) -->
                        <!-- Connecting from shoulder to the cupped hand in foreground -->
                        <path d="M-30,45 L-60,75 L-35,102 L-10,95 L-5,70 Z" fill="#1b1c26" stroke="#12131a" stroke-width="2" stroke-linejoin="round" />
                        
                        <!-- Near Arm (Viewer Right) -->
                        <path d="M30,45 L60,75 L35,102 L10,95 L5,70 Z" fill="#1b1c26" stroke="#12131a" stroke-width="2" stroke-linejoin="round" />

                        <!-- OREO Box sticking out of the bag (Foreground Layer 1) -->
                        <g transform="translate(-20, 115)">
                            <!-- Box Side -->
                            <path d="M-15,5 L15,10 L25,60 L-5,50 Z" fill="#0062b0" stroke="#004d8a" stroke-width="1.5" />
                            <!-- Box Top -->
                            <path d="M-15,5 L0,-20 L30,-15 L15,10 Z" fill="#f0ebdf" />
                            <!-- Abstract "OREO" Logo line -->
                            <path d="M-8,15 L18,20 M-4,25 L22,30" stroke="#fff" stroke-width="4" stroke-linecap="round" />
                        </g>

                        <!-- White Bag Face (Foreground Layer 2) -->
                        <path d="M-35,130 L30,120 L55,190 L-10,210 Z" fill="#f4f4f4" stroke="#dcdcdc" stroke-width="2" stroke-linejoin="round" />
                        <!-- Bag Side Panel Fold -->
                        <path d="M30,120 L50,105 L55,190 Z" fill="#e8e8e8" />

                        <!-- Bag Handles (Back parts) -->
                        <!-- The handles loop from the bag opening UP, behind the hand, and then... -->
                        <path d="M-10,130 L-5,100 L15,100 L25,120" stroke="#e0e0e0" stroke-width="2.5" fill="none" />
                        <path d="M-5,130 L0,95 L20,95 L30,115" stroke="#e8e8e8" stroke-width="2.5" fill="none" />

                        <!-- The Extended Hands (Foreground Layer 3) -->
                        <!-- Viewer Left Hand (Flat Palm) -->
                        <path d="M-35,100 L-15,115 L-5,105 L-25,90 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" stroke-linejoin="round" />
                        <!-- Fingers lying flat -->
                        <path d="M-15,115 L-5,110 L0,95 M-5,105 L0,100" stroke="#d07888" stroke-width="2" fill="none" /> 
                        
                        <!-- Viewer Right Hand (Flat Palm) -->
                        <path d="M35,100 L15,115 L5,105 L25,90 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" stroke-linejoin="round" />
                        <!-- Fingers lying flat -->
                        <path d="M15,115 L5,110 L0,95 M5,105 L0,100" stroke="#d07888" stroke-width="2" fill="none" />

                        <!-- Bag Handles (Front parts) -->
                        <!-- Looping precisely OVER the thumb/fingers of the right hand -->
                        <path d="M0,100 L-5,130" stroke="#f4f4f4" stroke-width="3" fill="none" />
                        <path d="M5,100 L5,130" stroke="#f4f4f4" stroke-width="3" fill="none" />

                        <!-- Tiny Mini Sushi/Toys resting on the palms (Absolute Foreground) -->
                        <g transform="translate(0, 95)">
                            <!-- Red/White roll -->
                            <rect x="-15" y="-12" width="7" height="7" fill="#f0f0f0" />
                            <path d="M-15,-7 L-8,-12 L-8,-9 Z" fill="#d42637" />
                            
                            <!-- Black/White Sushi roll -->
                            <rect x="-5" y="-5" width="10" height="7" fill="#1c1c1c" />
                            <path d="M-3,-5 L3,-5 L3,-3 L-3,-3 Z" fill="#fcfcfc" />
                            
                            <!-- Yellow/Red clump -->
                            <rect x="5" y="-10" width="8" height="7" fill="#ebd28f" />
                            <rect x="7" y="-10" width="4" height="2" fill="#d42637" />
                        </g>

                        <!-- Head Group (Rotated affectionately to the side) -->
                        <g transform="rotate(7)">
                            <!-- Rear hair (Massive solid dome encasing the full skull up to Y=-50) -->
                            <path d="M-35,0 L-40,40 L-25,50 L25,50 L40,40 L35,0 L25,-50 L-25,-50 Z" fill="#111" />
                            
                            <!-- Neck -->
                            <path d="M-10,20 L-10,45 L0,50 L10,45 L10,20 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />
                            
                            <!-- Face -->
                            <path d="M-28,-25 L-32,5 L-22,25 L-10,35 L0,38 L10,35 L22,25 L32,5 L28,-25 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />
                            
                            <!-- Standard Protocol Eyes -->
                            <g class="eye-group" onclick="this.closest('.character-svg').classList.toggle('is-closed')">
                                <g class="eye-open">
                                    <path d="M-23,2 L-13,-3 L-3,2 L-13,7 Z" fill="white" stroke="black" stroke-width="1" />
                                    <!-- Slightly crossed inward looking at the camera -->
                                    <circle class="pupil" cx="-11" cy="2" r="3.5" fill="black" />
                                    <path d="M3,2 L13,-3 L23,2 L13,7 Z" fill="white" stroke="black" stroke-width="1" />
                                    <circle class="pupil" cx="11" cy="2" r="3.5" fill="black" />
                                </g>
                                <g class="eye-closed">
                                    <path d="M-23,4 L-3,4 M3,4 L23,4" stroke="black" stroke-width="3" fill="none" />
                                </g>
                            </g>

                            <!-- Standard WEirdo Pout (Very prominent in photo) -->
                            <path d="M-8,19 L0,23 L8,19" fill="none" stroke="#d07888" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />

                            <!-- Bob Cut Front Hair (Bounds extended completely to top of dome Y=-45) -->
                            <path d="M-30,-45 L-35,35 L-20,40 L-25,-10 L-5,-35 L20,-10 L-5,-25 L-15,-50 Z" fill="#1a1a1a" />
                            <path d="M-5,-35 L30,-15 L22,40 L38,30 L32,-45 L5,-50 Z" fill="#1a1a1a" />
                        </g>

                    </g>
                </svg>`
    },
    {
        title: "Park Bench Beanie",
        date: "PROJECT #16 - " + new Date().getFullYear(),
        svg: `
                <svg viewBox="0 0 200 200" class="character-svg">
                    <!-- Background Environment -->
                    <!-- Sky -->
                    <rect width="200" height="120" fill="#4d94cc" />
                    <!-- Background Grass Field & Hills -->
                    <path d="M0,80 L200,90 L200,200 L0,200 Z" fill="#699e3a" />
                    <path d="M0,100 L150,95 L200,110 L200,200 L0,200 Z" fill="#75a544" />
                    <!-- Foreground shadowed grass -->
                    <path d="M0,150 L100,140 L200,160 L200,200 L0,200 Z" fill="#588b2a" />
                    
                    <!-- Distant Giant Bare Trees (Silhouettes) -->
                    <path d="M120,95 L125,50 L115,20 M125,50 L140,10 M125,65 L155,25 M123,80 L90,30 M150,97 L160,80 L165,60" stroke="#252525" stroke-width="2" stroke-linejoin="round" fill="none" />
                    <path d="M50,85 L55,45 L45,25 M55,45 L70,15 M60,65 L80,35" stroke="#2b2b2b" stroke-width="1.5" stroke-linejoin="round" fill="none" />

                    <!-- Character & Bench Group -->
                    <!-- Shifted to center composition on the dynamic sprawling pose -->
                    <g transform="translate(100, 90)">
                        
                        <!-- Bench Underneath Base (Shadows & Legs) -->
                        <path d="M-60,70 L40,80 L70,50 L-30,40 Z" fill="#7a654c" stroke="#483b2a" stroke-width="2" />
                        <path d="M-40,60 L-40,130 M40,65 L40,130" stroke="#5a4734" stroke-width="6" />

                        <!-- Far Arm (Viewer Left) draped BEHIND the backrest -->
                        <path d="M-20,-10 L-45,20 L-40,65" stroke="#f098a8" stroke-width="8" stroke-linecap="round" fill="none" />
                        <!-- White T-shirt sleeve popping out -->
                        <path d="M-15,-20 L-35,5 L-20,20 L-5,-10 Z" fill="#e8e8e6" stroke="#ccc" stroke-width="1" />

                        <!-- Bench Diagonal Backrest Plank -->
                        <!-- Slices diagonally over the Far Arm, supporting the back -->
                        <path d="M-120,70 L40,-10 L50,-5 L-110,80 Z" fill="#a48c6e" stroke="#5c4d3b" stroke-width="2" />

                        <!-- Torso (Grey Fleece Vest + White Sleeves) Leaning dynamically -->
                        <path d="M-20,-20 L25,-10 L30,45 L-15,40 Z" fill="#c3c6cb" stroke="#777b82" stroke-width="2" />
                        <!-- Grey Fleece Collar -->
                        <path d="M-10,-25 L15,-15 L20,-5 L-5,-15 Z" fill="#9fa3aa" />
                        <!-- Central Zipper -->
                        <path d="M0,-20 L5,42" stroke="#5c626b" stroke-width="2.5" />
                        <rect x="0" y="0" width="3" height="10" fill="#444" /> <!-- Zipper pull -->
                        <!-- Tiny Blue Patagonia-style Patch -->
                        <rect x="15" y="-5" width="6" height="4" fill="#304a75" />
                        <path d="M15,-3 L21,-3" stroke="#e0e0e0" stroke-width="1" />

                        <!-- Near Arm (Viewer Right) Resting on Lap -->
                        <path d="M25,-10 L45,15 L25,45 L5,45" stroke="#f098a8" stroke-width="10" stroke-linejoin="round" stroke-linecap="round" fill="none" />
                        <path d="M5,42 L5,48 M10,42 L10,48" stroke="#d07888" stroke-width="1.5" fill="none" /> <!-- Fingers -->
                        <!-- Near Sleeve (White T-shirt) -->
                        <path d="M20,-20 L40,0 L30,15 L15,0 Z" fill="#e8e8e6" stroke="#ddd" stroke-width="1" />

                        <!-- Massive Sprawling Legs (White Wide Cargo Pants) -->
                        <!-- Viewer Right Leg (Sprawled towards camera-right) -->
                        <path d="M10,40 L30,35 L80,120 L40,130 Z" fill="#dcdcd9" stroke="#b0b0b0" stroke-width="2" stroke-linejoin="round" />
                        <!-- Viewer Left Leg (Sprawled straight towards camera-left) -->
                        <path d="M-10,35 L-30,30 L-95,110 L-50,130 Z" fill="#e8e8e6" stroke="#b0b0b0" stroke-width="2" stroke-linejoin="round" />
                        <!-- Pants wrinkles -->
                        <path d="M-30,30 L-70,115 M-10,35 L-40,125" stroke="#ccc" stroke-width="1.5" fill="none" />
                        <path d="M30,35 L70,120 M10,40 L45,120" stroke="#cfcfcc" stroke-width="1.5" fill="none" />

                        <!-- Bright Red Converse Shoes -->
                        <!-- Viewer Right Shoe -->
                        <path d="M70,115 L100,105 L110,130 L40,130 Z" fill="#d62235" stroke="#941421" stroke-width="1.5" stroke-linejoin="round" />
                        <path d="M98,105 L115,115 L110,130 L90,130 Z" fill="#fcfcfc" /> <!-- White toe cap -->
                        <path d="M95,108 L110,118" stroke="#ccc" stroke-width="1" /> <!-- Lace line -->
                        <circle cx="75" cy="120" r="4" fill="#fcfcfc" /> <!-- Logo dot -->
                        
                        <!-- Viewer Left Shoe -->
                        <path d="M-85,105 L-110,95 L-100,130 L-50,130 Z" fill="#d62235" stroke="#941421" stroke-width="1.5" stroke-linejoin="round" />
                        <path d="M-110,95 L-120,105 L-100,130 L-80,130 Z" fill="#fcfcfc" /> <!-- White toe cap pointing FAR left -->
                        <path d="M-105,100 L-113,108" stroke="#ccc" stroke-width="1" /> <!-- Lace line -->
                        <circle cx="-80" cy="115" r="4" fill="#fcfcfc" /> <!-- Logo dot -->

                        <!-- Disconnected Head Group -->
                        <!-- Violently Dropped sideways over her right shoulder -->
                        <g transform="translate(-10, -25) rotate(-65)">
                            <!-- Neck -->
                            <path d="M-10,10 L-10,35 L10,35 L10,10 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />
                            
                            <!-- Face -->
                            <path d="M-28,-25 L-32,5 L-22,25 L-10,35 L0,38 L10,35 L22,25 L32,5 L28,-25 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />
                            
                            <!-- No Eyes visible (Beanie covers them entirely) -->
                            <!-- WEirdo Pout Mouth (Calm sleeping expression) -->
                            <path d="M-8,19 L0,22 L8,19" fill="none" stroke="#d07888" stroke-width="3" stroke-linecap="round" />
                            
                            <!-- Hair (Poking out under beanie) -->
                            <!-- Rugged black triangles surrounding the face/cheeks -->
                            <path d="M-30,5 L-35,30 L-20,15 L-22,40 L-10,25 L0,35 L15,15 Z" fill="#111" />
                            <path d="M30,5 L35,35 L15,20 Z" fill="#111" />

                            <!-- Huge Slouched Beanie Hat -->
                            <!-- Sweeps all the way down to Y=12, completely covering the forehead and eyes -->
                            <!-- Mottled Brown/Maroon -->
                            <path d="M-35,15 L-15,10 L0,8 L15,10 L35,15 L32,-30 L15,-45 L-15,-45 L-32,-30 Z" fill="#754b4f" stroke="#4a2c2f" stroke-width="1.5" stroke-linejoin="round" />
                            <!-- Knitted Hat Ribbing (Lines following the shape) -->
                            <path d="M-25,-32 L-27,12 M-15,-42 L-16,10 M-5,-44 L-5,8 M5,-44 L5,8 M15,-42 L16,10 M25,-32 L27,12" stroke="#5c383c" stroke-width="2" stroke-linecap="round" />
                            <!-- Bottom Rolled Hem of Beanie -->
                            <path d="M-37,15 L-15,10 L0,8 L15,10 L37,15 L35,5 L15,0 L0,-2 L-15,0 L-35,5 Z" fill="#633b3f" stroke="#331c1e" stroke-width="1.5" />
                        </g>

                    </g>
                </svg>`
    },
    {
        title: "Lake A Few Good Kids",
        date: "PROJECT #15 - " + new Date().getFullYear(),
        svg: `
                <svg viewBox="0 0 200 200" class="character-svg">
                    <!-- Background Environment -->
                    <!-- Sky -->
                    <rect width="200" height="90" fill="#ced8df" />
                    <!-- Lake (Right) -->
                    <rect x="70" y="80" width="130" height="120" fill="#7192a3" />
                    <!-- Grass Bank (Left and Foreground) -->
                    <path d="M0,80 L80,80 L110,140 L200,160 L200,200 L0,200 Z" fill="#324523" />
                    <path d="M0,130 L50,130 L100,180 Z" fill="#2d3d1e" />
                    <!-- Bare Tree Branches (Top left geometric zigzag) -->
                    <path d="M0,0 L35,15 L70,5 M35,15 L50,45 M65,10 L85,30 M15,-5 L25,12 M0,50 L45,35 L75,55 M45,35 L20,20" stroke="#322923" stroke-width="2" fill="none" />
                    <!-- Wooden Bench (Bottom left) -->
                    <path d="M-10,165 L65,140 L85,160 L0,195 Z" fill="#4d3c2d" stroke="#251a11" stroke-width="2" />
                    <!-- Distant Figures -->
                    <rect x="20" y="65" width="4" height="12" fill="#1c2518" />
                    <rect x="28" y="66" width="3" height="11" fill="#1c2518" />

                    <!-- Character Structure -->
                    <!-- Shifted center, arms reaching up -->
                    <g transform="translate(100, 110)">
                        <!-- Rear Hair -->
                        <path d="M-30,5 L-40,40 L-20,50 L20,50 L40,40 L30,5 Z" fill="#111" />

                        <!-- Neck -->
                        <path d="M-10,20 L-10,45 L0,50 L10,45 L10,20 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />
                        
                        <!-- Maroon Collar -->
                        <path d="M-15,45 L0,55 L15,45 Z" fill="#6d202c" stroke="#48121b" stroke-width="1.5" />

                        <!-- Face -->
                        <path d="M-28,-25 L-32,5 L-22,25 L-10,35 L0,38 L10,35 L22,25 L32,5 L28,-25 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />

                        <!-- Eyes -->
                        <g class="eye-group" onclick="this.closest('.character-svg').classList.toggle('is-closed')">
                            <!-- looking forward -->
                            <g class="eye-open">
                                <path d="M-23,2 L-13,-3 L-3,2 L-13,7 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="-13" cy="2" r="3.5" fill="black" />
                                <path d="M3,2 L13,-3 L23,2 L13,7 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="13" cy="2" r="3.5" fill="black" />
                            </g>
                            <g class="eye-closed">
                                <path d="M-23,4 L-3,4 M3,4 L23,4" stroke="black" stroke-width="3" fill="none" />
                            </g>
                        </g>

                        <!-- Standard WEirdo Pout (Neutral Photo Expression) -->
                        <path d="M-8,21 L0,25 L8,21" fill="none" stroke="#d07888" stroke-width="3.5" stroke-linecap="round" />

                        <!-- Front Hair (Unified Solid Polygonal Mask) -->
                        <!-- Pressed down by hands at the top, hanging straight down the sides -->
                        <path d="M-28,30 L-13,5 L-5,-25 L5,-25 L13,5 L28,30 L38,10 L28,-30 L0,-35 L-28,-30 L-38,10 Z" fill="#1a1a1a" />

                        <!-- Maroon Cuffs (Underneath the hands on the wrist joint) -->
                        <!-- Wrist locations: Left(-18, -35), Right(18, -35) -->
                        <path d="M-12,-38 L-6,-24 L-24,-16 L-28,-30 Z" fill="#6d202c" stroke="#48121b" stroke-width="1.5" />
                        <path d="M12,-38 L6,-24 L24,-16 L28,-30 Z" fill="#6d202c" stroke="#48121b" stroke-width="1.5" />

                        <!-- Pink Hands clasped on the crown of the head -->
                        <path d="M-22,-35 L-5,-45 L5,-45 L22,-35 L5,-25 L-5,-25 Z" fill="#f098a8" stroke="#d07888" stroke-width="1.5" stroke-linejoin="round" />
                        <path d="M-5,-45 L0,-50 L5,-45" stroke="#d07888" stroke-width="1.5" fill="none" />
                        <path d="M-12,-32 L0,-42 M12,-32 L0,-42" stroke="#d07888" stroke-width="1.5" fill="none" /> 

                        <!-- Massive Puffy Jacket Arms Arching Up (Asymmetrical variations) -->
                        <!-- Left Arm Arch (Viewer Left) -->
                        <path d="M-30,50 L-85,8 L-25,-32 L-12,-22 L-42,32 L-25,60 Z" fill="#141414" stroke="#1d1d1d" stroke-width="2" />
                        <!-- Right Arm Arch (Viewer Right) -->
                        <path d="M30,50 L80,14 L15,-35 L8,-25 L38,28 L25,60 Z" fill="#141414" stroke="#1d1d1d" stroke-width="2" />
                        
                        <!-- Jacket Central/Body overlapping elements -->
                        <path d="M-40,55 L-55,120 L55,120 L40,55 Z" fill="#141414" stroke="#0a0a0a" stroke-width="2" />
                        
                        <!-- Red item peaking at the bottom -->
                        <path d="M-5,110 L5,110 L10,120 L-10,120 Z" fill="#dd2e2e" />

                        <!-- Jacket Front Zipper/Snap line -->
                        <path d="M0,55 L0,120" stroke="#0a0a0a" stroke-width="2.5" />
                        <!-- Snap buttons -->
                        <circle cx="0" cy="70" r="2.5" fill="#222" />
                        <circle cx="0" cy="90" r="2.5" fill="#333" />
                        <circle cx="0" cy="110" r="2.5" fill="#222" />

                        <!-- Abstracted Geometric "a few good kids" text graphic -->
                        <g stroke="#e2e2e2" stroke-width="2" fill="none" stroke-linejoin="miter">
                            <!-- a few (top curve arching) -->
                            <path d="M-30,75 L-25,65 L-20,70 L-25,75 M-20,65 L-20,75" /> <!-- a -->
                            <path d="M-10,75 L-10,65 L-5,65 M-10,70 L-7,70" /> <!-- f -->
                            <path d="M5,65 L10,65 L5,70 L10,70" /> <!-- e -->
                            <path d="M15,65 L18,72 L21,68 L24,72 L27,65" /> <!-- w -->
                            
                            <!-- good (middle band) -->
                            <path d="M-40,90 L-45,90 L-45,82 L-35,82 L-35,86 L-40,86" /> <!-- g -->
                            <path d="M-28,90 L-28,82 L-20,82 L-20,90 Z" /> <!-- o -->
                            <path d="M-15,90 L-15,82 L-7,82 L-7,90 Z" /> <!-- o -->
                            <path d="M0,90 L0,82 L8,86 Z" /> <!-- d -->
                            
                            <!-- kids (bottom right) -->
                            <path d="M15,100 L15,90 M24,90 L15,95 L24,100" /> <!-- k -->
                            <path d="M28,100 L28,90" /> <!-- i -->
                            <path d="M33,100 L33,90 L41,95 Z" /> <!-- d -->
                            <path d="M50,90 L45,90 L45,95 L50,95 L50,100 L45,100" /> <!-- s -->
                        </g>
                    </g>
                </svg>`
    },
    {
        title: "Winter Dorm Cap",
        date: "PROJECT #14 - " + new Date().getFullYear(),
        svg: `
                <svg viewBox="0 0 200 200" class="character-svg">
                    <!-- Background -->
                    <rect width="200" height="200" fill="#9c9082" />
                    
                    <!-- Left: TV Screen (Rotated) -->
                    <g transform="rotate(-5 30 60)">
                        <path d="M-10,30 L60,30 L60,80 L-10,80 Z" fill="#2c5a7f" stroke="#112233" stroke-width="2.5" />
                        <!-- TV glow -->
                        <path d="M-5,35 L55,35 L55,75 L-5,75 Z" fill="#3a8cc7" />
                        <!-- White text squiggles -->
                        <path d="M0,45 L30,45 M0,55 L40,55 M0,65 L20,65" stroke="#fff" stroke-width="2" opacity="0.6" stroke-linecap="round" />
                    </g>
                    
                    <!-- Middle: Wood Cabinet -->
                    <rect x="75" y="0" width="60" height="110" fill="#463e36" stroke="#2c2722" stroke-width="2" />
                    <!-- Mykonos poster block -->
                    <rect x="85" y="25" width="40" height="20" fill="#18316c" />
                    <path d="M90,35 L120,35" stroke="#fff" stroke-width="2" opacity="0.8" />
                    
                    <!-- Right: White Kitchen Cabinets -->
                    <rect x="135" y="0" width="65" height="75" fill="#e8e9ea" stroke="#b0b0b0" stroke-width="2" />
                    <rect x="135" y="80" width="65" height="5" fill="#666" />
                    
                    <!-- Left Foreground: Cart / Pink Poster -->
                    <rect x="10" y="120" width="40" height="80" fill="#f0f0f0" />
                    <rect x="5" y="130" width="50" height="5" fill="#ccc" />
                    <rect x="5" y="160" width="50" height="5" fill="#ccc" />
                    <!-- Pink Capri Poster -->
                    <path d="M20,135 L55,135 L55,190 L20,190 Z" fill="#b93348" />
                    <!-- Capri text squiggles -->
                    <path d="M28,150 L47,150" stroke="#f1d06e" stroke-width="3" />

                    <!-- Character (Shifted right) -->
                    <g transform="translate(110, 95)">
                        <!-- Rear Hair -->
                        <path d="M-30,15 L-40,50 L-20,60 L20,60 L40,50 L30,15 Z" fill="#111" />

                        <!-- Neck -->
                        <path d="M-10,20 L-10,45 L0,50 L10,45 L10,20 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />

                        <!-- Over-Ear Headphones (Around neck) -->
                        <path d="M-25,45 L-15,55 L-5,60 L5,60 L15,55 L25,45 L20,35 L-20,35 Z" fill="#1a1a1c" />
                        <!-- Ear cups -->
                        <path d="M-30,40 L-20,35 L-15,50 L-25,55 Z" fill="#222" stroke="#111" stroke-width="2" />
                        <path d="M30,40 L20,35 L15,50 L25,55 Z" fill="#222" stroke="#111" stroke-width="2" />

                        <!-- Face -->
                        <path d="M-28,-25 L-32,5 L-22,25 L-10,35 L0,38 L10,35 L22,25 L32,5 L28,-25 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />

                        <!-- Eyes -->
                        <g class="eye-group" onclick="this.closest('.character-svg').classList.toggle('is-closed')">
                            <!-- looking forward -->
                            <g class="eye-open">
                                <path d="M-23,2 L-13,-3 L-3,2 L-13,7 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="-13" cy="2" r="3.5" fill="black" />
                                <path d="M3,2 L13,-3 L23,2 L13,7 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="13" cy="2" r="3.5" fill="black" />
                            </g>
                            <g class="eye-closed">
                                <path d="M-23,4 L-3,4 M3,4 L23,4" stroke="black" stroke-width="3" fill="none" />
                            </g>
                        </g>

                        <!-- Big Geometric Laugh (Photo Reference - Asymmetrical, Proportioned) -->
                        <path d="M-12,18 L0,20 L14,14 L0,26 Z" fill="#fff" stroke="#d07888" stroke-width="2.5" stroke-linejoin="round" />

                        <!-- Front Hair (Unified Solid Polygonal Mask - Asymmetrical) -->
                        <!-- Left bang hangs straight down, right bang tucks back slightly -->
                        <path d="M-28,35 L-12,5 L-5,-25 L8,-25 L16,0 L24,20 L30,-15 L0,-25 L-30,-15 Z" fill="#1a1a1a" />

                        <!-- Grey Baseball Cap (Compact Asymmetrical Tilt) -->
                        <!-- Cap Dome scaled down to fit head proportions -->
                        <path d="M-28,-8 L-15,-30 L5,-35 L22,-28 L30,-5 Z" fill="#4a5056" stroke="#222" stroke-width="1.5" />
                        <!-- White Logo (NB placeholder) scaled and rotated -->
                        <path d="M-4,-23 L2,-24 L-1,-20 L7,-21 M-3,-20 L5,-21" stroke="#fff" stroke-width="1.5" stroke-linecap="round" fill="none" />
                        <!-- Cap Brim lifted to sit properly above eyes -->
                        <path d="M-36,-2 L-15,-12 L5,-16 L20,-12 L38,0 L20,-8 L5,-11 L-15,-7 Z" fill="#36383c" stroke="#222" stroke-width="1.5" />

                        <!-- Navy Winter Puffer Jacket (Asymmetrical Posture) -->
                        <!-- Left arm (Viewer's left) - drops down low -->
                        <path d="M-15,45 L-40,70 L-60,110 L-50,120 L-30,110 L-20,70 L-5,60 Z" fill="#2c3a4a" stroke="#1d2631" stroke-width="2" />
                        <!-- Right arm (Viewer's right) - leaning heavily, huge puffed mound going up -->
                        <path d="M15,45 L45,50 L85,85 L75,120 L30,110 L25,65 L5,60 Z" fill="#2c3a4a" stroke="#1d2631" stroke-width="2" />
                        <!-- Asymmetrical Central zipper/body sweeping towards bottom left -->
                        <path d="M-20,70 L25,65 L40,120 L-30,120 Z" fill="#324356" stroke="#1d2631" stroke-width="2" />
                        <path d="M5,62 L-10,120" stroke="#1d2631" stroke-width="2.5" />
                        <!-- Asymmetrical collar blocks -->
                        <path d="M-25,45 L-30,70 L5,62 Z" fill="#3e526a" stroke="#1d2631" stroke-width="1" />
                        <path d="M25,45 L45,65 L5,62 Z" fill="#3e526a" stroke="#1d2631" stroke-width="1" />
                    </g>
                </svg>`
    },
    {
        title: "Pub Table Qipao",
        date: "PROJECT #13 - " + new Date().getFullYear(),
        svg: `
                <svg viewBox="0 0 200 200" class="character-svg">
                    <!-- Background -->
                    <rect width="200" height="200" fill="#1b1815" />
                    <!-- Green Brick Wall (Left) -->
                    <g opacity="0.6">
                        <rect x="0" y="0" width="50" height="150" fill="#29392b" />
                        <path d="M0,20 L50,20 M0,40 L50,40 M0,60 L50,60 M0,80 L50,80 M0,100 L50,100" stroke="#101511" stroke-width="1.5" />
                        <path d="M25,0 L25,20 M10,20 L10,40 M35,20 L35,40 M20,40 L20,60 L45,40 L45,60" stroke="#101511" stroke-width="1.5" />
                    </g>
                    <!-- Red Pendant Light (Top) -->
                    <path d="M120,-10 L120,15 L100,35 L160,35 Z" fill="#90262b" />
                    <circle cx="130" cy="40" r="6" fill="#f1c40f" opacity="0.5" />
                    <circle cx="130" cy="40" r="3" fill="#ffffff" opacity="0.8" />
                    
                    <!-- Wooden Table (Bottom) -->
                    <path d="M0,150 L200,150 L200,200 L0,200 Z" fill="#6d4625" />
                    <path d="M0,165 L200,165 M0,185 L200,185" stroke="#4a2e16" stroke-width="3" opacity="0.6" />

                    <!-- Character -->
                    <g transform="translate(100, 85)">
                        <!-- Rear Hair -->
                        <path d="M-25,10 L-35,40 L-20,55 L20,55 L35,40 L25,10 Z" fill="#111" />

                        <!-- Neck -->
                        <path d="M-10,20 L-10,40 L0,45 L10,40 L10,20 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />

                        <!-- Face -->
                        <path d="M-28,-25 L-32,5 L-22,25 L-10,35 L0,38 L10,35 L22,25 L32,5 L28,-25 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />

                        <!-- Eyes -->
                        <g class="eye-group" onclick="this.closest('.character-svg').classList.toggle('is-closed')">
                            <!-- looking slightly left towards the glass -->
                            <g class="eye-open">
                                <path d="M-22,3 L-12,-2 L-2,3 L-12,8 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="-14" cy="3" r="3.5" fill="black" />
                                <path d="M4,3 L14,-2 L24,3 L14,8 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="12" cy="3" r="3.5" fill="black" />
                            </g>
                            <g class="eye-closed">
                                <path d="M-22,4 L-2,4 M4,4 L24,4" stroke="black" stroke-width="3" fill="none" />
                            </g>
                        </g>

                        <!-- Serious Pout -->
                        <path d="M-8,22 L0,26 L8,22" fill="none" stroke="#d07888" stroke-width="3.5" stroke-linecap="round" />

                        <!-- Front Hair (Unified Solid Polygonal Envelope - EXACTLY matching the M-parting photo) -->
                        <path d="M-28,30 L-16,5 L-8,-25 L8,-25 L16,5 L28,30 L45,-15 L25,-45 L10,-35 L0,-45 L-10,-35 L-25,-45 L-45,-15 Z" fill="#1a1a1a" />

                        <!-- Black Qipao Body (Resting on table at y=60) -->
                        <path d="M-15,40 L-45,55 L-55,75 L-20,60 L20,60 L55,75 L45,55 L15,40 Z" fill="#151515" />
                        
                        <!-- Interlocked Arms on table -->
                        <path d="M-55,75 L-40,95 L0,90 L-20,60 Z" fill="#f098a8" stroke="#d07888" stroke-width="1.5" />
                        <path d="M55,75 L40,95 L0,90 L20,60 Z" fill="#f098a8" stroke="#d07888" stroke-width="1.5" />

                        <!-- Qipao Mandarin Collar -->
                        <path d="M-10,35 L0,42 L10,35 L10,39 L0,46 L-10,39 Z" fill="#202020" stroke="#000" stroke-width="1" />
                        <!-- Teardrop Cutout -->
                        <path d="M0,48 L-6,54 L0,62 L6,54 Z" fill="#f098a8" stroke="#d07888" stroke-width="1.5" />
                        <!-- Knot detail -->
                        <path d="M6,54 L12,50" stroke="#222" stroke-width="2" />
                        <circle cx="12" cy="50" r="2" fill="#222" />
                    </g>

                    <!-- Foreground: The Glass of Iced Drink -->
                    <g transform="translate(100, 160)">
                        <!-- Glass shadow -->
                        <ellipse cx="0" cy="30" rx="20" ry="6" fill="#4a2e16" />
                        <!-- Glass base bounding box -->
                        <path d="M-15,30 L15,30 L20,-10 L-20,-10 Z" fill="rgba(255,255,255,0.15)" stroke="white" opacity="0.5" stroke-width="1.5" />
                        <!-- Ice & Drink (Iced tea color) -->
                        <path d="M-17,10 L17,10 L14,25 L-14,25 Z" fill="#cd853f" opacity="0.8" />
                        <!-- Ice cubes -->
                        <rect x="-10" y="-5" width="10" height="10" fill="#fff" opacity="0.4" />
                        <rect x="5" y="0" width="8" height="8" fill="#fff" opacity="0.5" />
                        <!-- Glass rim oval -->
                        <ellipse cx="0" cy="-10" rx="20" ry="5" fill="none" stroke="white" stroke-width="1.5" opacity="0.8" />
                    </g>
                </svg>`
    },
    {
        title: "Exeter Qipao",
        date: "PROJECT #12 - " + new Date().getFullYear(),
        svg: `
                <svg viewBox="0 0 200 200" class="character-svg">
                    <!-- Background: Global Alumni Backdrop -->
                    <rect width="200" height="200" fill="#1b5a5b" />
                    <!-- White banner placeholder -->
                    <path d="M0,20 L200,20 L200,60 L0,60 Z" fill="#e0eaeb" />
                    <!-- Abstract text representation on banner -->
                    <path d="M-10,35 L40,35 M50,35 L90,35 M110,35 L190,35" stroke="#1b5a5b" stroke-width="7" stroke-dasharray="15, 6" opacity="0.8" />
                    <path d="M0,50 L200,50" stroke="#1b5a5b" stroke-width="3" opacity="0.5" />
                    
                    <!-- Vertical panel break -->
                    <path d="M140,60 L140,200" stroke="#113e40" stroke-width="2" />
                    <!-- Photo placeholders on backdrop -->
                    <rect x="20" y="80" width="40" height="50" fill="#2c797a" />
                    <rect x="150" y="70" width="40" height="40" fill="#2c797a" />
                    <rect x="145" y="140" width="55" height="45" fill="#2c797a" />

                    <!-- Character Structure -->
                    <g transform="translate(100, 75)">
                        <!-- Rear Hair -->
                        <path d="M-25,10 L-30,40 L-15,50 L15,50 L30,40 L25,10 Z" fill="#111" />

                        <!-- Neck -->
                        <path d="M-7,15 L-7,35 L0,38 L7,35 L7,15 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />

                        <!-- Face -->
                        <path d="M-24,-20 L-28,5 L-20,22 L-10,30 L0,32 L10,30 L20,22 L28,5 L24,-20 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />

                        <!-- Eyes (Polygonal) -->
                        <g class="eye-group" onclick="this.closest('.character-svg').classList.toggle('is-closed')">
                            <!-- looking straight/slightly right -->
                            <g class="eye-open">
                                <path d="M-20,3 L-12,-1 L-4,3 L-12,8 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="-10" cy="3" r="3.5" fill="black" />
                                <path d="M4,3 L12,-1 L20,3 L12,8 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="14" cy="3" r="3.5" fill="black" />
                            </g>
                            <g class="eye-closed">
                                <path d="M-20,4 L-4,4 M4,4 L20,4" stroke="black" stroke-width="3" fill="none" />
                            </g>
                        </g>

                        <!-- Serious/Neutral Mouth (Linear V-shape) -->
                        <path d="M-6,21 L0,23 L6,21" fill="none" stroke="#d07888" stroke-width="3.5" stroke-linecap="round" />

                        <!-- Front Hair (Unified Solid Polygonal Envelope - Middle Part) -->
                        <path d="M-28,30 L-16,5 L-8,-25 L8,-25 L16,5 L28,30 L45,-15 L20,-45 L0,-45 L-20,-45 L-45,-15 Z" fill="#1a1a1a" />

                        <!-- Black Qipao Top & Body -->
                        <path d="M-15,35 L-40,50 L-35,55 L-20,45 L-20,130 L20,130 L20,45 L35,55 L40,50 L15,35 Z" fill="#151515" />
                        
                        <!-- Qipao Mandarin Collar -->
                        <path d="M-8,30 L0,36 L8,30 L8,34 L0,40 L-8,34 Z" fill="#202020" stroke="#000" stroke-width="1" />
                        
                        <!-- Teardrop Cutout on chest -->
                        <path d="M0,41 L-6,47 L0,55 L6,47 Z" fill="#f098a8" stroke="#d07888" stroke-width="1.5" />
                        
                        <!-- Qipao Frog Fastener Detail (knot) -->
                        <path d="M6,47 L12,45" stroke="#2a2a2a" stroke-width="2" />
                        <circle cx="12" cy="45" r="2" fill="#2a2a2a" />
                        
                    </g>
                </svg>`
    },
    {
        title: "Book Roof",
        date: "PROJECT #11 - " + new Date().getFullYear(),
        svg: `
                <svg viewBox="0 0 200 200" class="character-svg">
                    <!-- Background: Warm Library & Sunlight -->
                    <rect width="200" height="200" fill="#eee5d0" />
                    
                    <!-- Sunlight Polygon (Right side) -->
                    <path d="M120,-20 L220,-20 L220,220 L40,220 Z" fill="#ffd700" opacity="0.15" />

                    <!-- Bookshelves (Background) -->
                    <g opacity="0.6">
                        <!-- Left Bookshelf -->
                        <rect x="10" y="20" width="60" height="180" fill="#6d4c41" />
                        <!-- Shelves -->
                        <path d="M10,60 L70,60 M10,120 L70,120 M10,180 L70,180" stroke="#3e2723" stroke-width="3" />
                        <!-- Books on left shelf -->
                        <rect x="15" y="30" width="8" height="30" fill="#e74c3c" />
                        <rect x="25" y="25" width="10" height="35" fill="#2980b9" />
                        <rect x="37" y="35" width="6" height="25" fill="#f1c40f" />
                        <polygon points="45,60 50,20 60,20 55,60" fill="#2ecc71" />
                        
                        <rect x="12" y="80" width="12" height="40" fill="#8e44ad" />
                        <rect x="26" y="90" width="8" height="30" fill="#d35400" />
                        <rect x="36" y="70" width="14" height="50" fill="#7f8c8d" />
                        
                        <!-- Right Bookshelf -->
                        <rect x="140" y="80" width="50" height="120" fill="#6d4c41" />
                        <path d="M140,140 L190,140" stroke="#3e2723" stroke-width="3" />
                        <rect x="145" y="100" width="10" height="40" fill="#16a085" />
                        <polygon points="158,140 165,95 175,95 168,140" fill="#c0392b" />
                        <rect x="178" y="110" width="8" height="30" fill="#f39c12" />
                    </g>

                    <!-- Character Structure -->
                    <g transform="translate(100, 105)">
                        <!-- Rear Hair -->
                        <path d="M-35,10 L-40,15 L-35,40 L-20,45 L20,45 L35,40 L40,15 L35,10 Z" fill="#181818" />

                        <!-- Scarf (Back loop) -->
                        <path d="M-25,25 L0,35 L25,25 Z" fill="#113629" />

                        <!-- Face -->
                        <path d="M-26,-25 L-32,5 L-22,25 L-12,35 L0,38 L12,35 L22,25 L32,5 L26,-25 Z" fill="#f098a8" stroke="#d07888" stroke-width="2" />

                        <!-- Eyes (Polygonal) - looking left -->
                        <g class="eye-group" onclick="this.closest('.character-svg').classList.toggle('is-closed')">
                            <!-- Sunlight reflection on left eye -->
                            <g class="eye-open">
                                <path d="M-20,4 L-12,-1 L-4,4 L-12,9 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="-14" cy="4" r="3.5" fill="black" />
                                <path d="M4,4 L12,-1 L20,4 L12,9 Z" fill="white" stroke="black" stroke-width="1" />
                                <circle class="pupil" cx="10" cy="4" r="3.5" fill="black" />
                            </g>
                            <g class="eye-closed">
                                <path d="M-20,5 L-4,5 M4,5 L20,5" stroke="black" stroke-width="3" fill="none" />
                            </g>
                        </g>

                        <!-- Pouting Mouth (Linear V-shape, inverted) -->
                        <path d="M-6,28 L0,25 L6,28" fill="none" stroke="#d07888" stroke-width="3.5" stroke-linecap="round" />

                        <!-- Front Hair (Unified Solid Polygonal Envelope) -->
                        <path d="M-28,30 L-18,5 L-5,-15 L10,-8 L18,-15 L28,30 L45,-10 L20,-45 L0,-45 L-20,-45 L-45,-10 Z" fill="#202020" />

                        <!-- Dark Green Scarf (Wrapped thick around neck) -->
                        <path d="M-28,30 L-18,25 L18,25 L28,30 L22,48 L0,55 L-22,48 Z" fill="#1b4c3e" stroke="#12352b" stroke-width="1.5" />
                        <path d="M-15,35 L0,52" stroke="#12352b" stroke-width="1.5" />
                        <path d="M5,32 L15,50" stroke="#12352b" stroke-width="1.5" />
                        
                        <!-- Outer Coat & Arms -->
                        <!-- Dark Inner Layer -->
                        <path d="M-15,48 L15,48 L20,100 L-20,100 Z" fill="#1a1a1a" />

                        <!-- Left Arm (Holding book up) -->
                        <!-- Grey Coat Sleeve -->
                        <path d="M-25,40 L-50,45 L-70,-10 L-50,-20 L-20,25 Z" fill="#888c8d" stroke="#5a5e5f" stroke-width="1.5" />
                        
                        <!-- Left Hand -->
                        <path d="M-60,-15 L-65,-30 L-55,-35 L-48,-20 Z" fill="#f098a8" stroke="#d07888" stroke-width="1.5" />
                        
                        <!-- Right Arm (Holding book up) -->
                        <!-- Right sleeve catches sunlight (lighter grey/yellowish tint) -->
                        <path d="M25,40 L50,45 L70,-10 L50,-20 L20,25 Z" fill="#a0a4a5" stroke="#7a7e7f" stroke-width="1.5" />
                        <path d="M50,45 L70,-10 L60,-5 L45,40 Z" fill="#ffd700" opacity="0.15" />
                        
                        <!-- Right Hand -->
                        <path d="M60,-15 L65,-30 L55,-35 L48,-20 Z" fill="#f098a8" stroke="#d07888" stroke-width="1.5" />

                        <!-- Grey Coat Body -->
                        <!-- Coat falls down, open at the front -->
                        <path d="M-30,45 L-25,100 L-60,100 L-50,45 Z" fill="#888c8d" stroke="#5a5e5f" stroke-width="1.5" />
                        <path d="M30,45 L25,100 L60,100 L50,45 Z" fill="#989c9d" stroke="#7a7e7f" stroke-width="1.5" /> <!-- Lighter for sunlight -->

                        <!-- The Inverted Book (Book Roof) -->
                        <g transform="translate(0, -45)">
                            <!-- Book Cover Outlines -->
                            <!-- Left Cover -->
                            <path d="M0,-10 L-65,10 L-55,25 L0,5 Z" fill="#6d7a5b" stroke="#4a533d" stroke-width="2" />
                            <!-- Right Cover -->
                            <path d="M0,-10 L65,10 L55,25 L0,5 Z" fill="#7d8a6b" stroke="#5a634d" stroke-width="2" /> <!-- Lighter for sunlight -->
                            
                            <!-- Book Pages -->
                            <!-- Left Pages -->
                            <path d="M0,0 L-60,20 L-55,25 L0,5 Z" fill="#f8f4e6" />
                            <path d="M0,2 L-58,22" stroke="#dcd6c3" stroke-width="1" />
                            <!-- Right Pages -->
                            <path d="M0,0 L60,20 L55,25 L0,5 Z" fill="#ffffff" /> <!-- Sunlit -->
                            <path d="M0,2 L58,22" stroke="#e0e0e0" stroke-width="1" />
                            
                            <!-- Text/Graphics on the cover (facing viewer) -->
                            <path d="M-40,12 L-20,6 L-15,15 L-35,21 Z" fill="#e74c3c" opacity="0.7" />
                            <circle cx="30" cy="12" r="5" fill="#f1c40f" opacity="0.8" />
                            <path d="M20,18 L40,12" stroke="#333" stroke-width="2" opacity="0.6" />
                        </g>
                    </g>
                </svg>`
    },
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

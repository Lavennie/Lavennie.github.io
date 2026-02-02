uniform sampler2D map;        // diffuse texture from Blender
uniform sampler2D gradientMap; // optional toon ramp for Blender texture
uniform vec3 color1;           // constant ramp color start
uniform vec3 color2;           // constant ramp color end
uniform vec3 lightDir;         // normalized light direction
uniform float overlayWeight;   // e.g., 0.858

varying vec2 vUv;
varying vec3 vNormal;

vec3 overlay(vec3 base, vec3 blend) {
	//return vec3(base.x < 0.5 ? 2.0 * base.x * blend.x : 1.0 - 2.0 * (1.0 - base.x) * (1.0 - blend.x),
	//			base.y < 0.5 ? 2.0 * base.y * blend.y : 1.0 - 2.0 * (1.0 - base.y) * (1.0 - blend.y),
	//			base.z < 0.5 ? 2.0 * base.z * blend.z : 1.0 - 2.0 * (1.0 - base.z) * (1.0 - blend.z));
    vec3 mask = step(0.5, base); // 1 if base >= 0.5
    vec3 result = 2.0 * base * blend * (1.0 - mask) + (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)) * mask;
    return result;
}

void main() {
    vec3 N = normalize(vNormal);
    vec3 L = normalize(lightDir);

    // --- First shader: texture toon ---
    vec3 texColor = texture2D(map, vUv).rgb;
    float diff1 = (dot(N, L) + 1.0) / 2.0;
    
    // Quantize for toon effect
	vec3 shader1 = mix(texColor * diff1, texColor, 0.0) + (1.0 - diff1) * texColor * vec3(0.5, 0.1, 0.5) * 1.5;

    // --- Second shader: constant color toon ---
    float diff2 = dot(N, L);
    float toonStep2 = diff2 < -0.7 ? 0.0 : 1.0; 
    vec3 shader2 = mix(color1, color2, toonStep2);

    // --- Overlay ---
    vec3 finalColor = mix(shader1, overlay(shader1, shader2) , 1.0);
	//finalColor = shader1;

    gl_FragColor = vec4(finalColor,1.0);
}
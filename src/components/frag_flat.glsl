uniform vec3 colorShade;
uniform vec3 colorMid;
uniform vec3 colorLight;
uniform vec3 lightDir;

varying vec3 vNormal;

void main() {
    vec3 N = normalize(vNormal);
    vec3 L = normalize(lightDir);

    float diff = dot(N, L); // [-1, 1]
    diff = diff * 0.5 + 0.5; // [0, 1]

    // three tones
    vec3 toonColor;
    if (diff < 0.33) {
        toonColor = colorShade;
    } else if (diff < 0.66) {
        toonColor = colorMid;
    } else {
        toonColor = colorLight;
    }
    gl_FragColor = vec4(toonColor, 1.0);
}
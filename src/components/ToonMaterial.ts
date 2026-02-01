import * as THREE from "three"

export function createToonMaterial(
  diffuse: THREE.Texture
) {
  return new THREE.MeshToonMaterial({
    map: diffuse,
  })
}

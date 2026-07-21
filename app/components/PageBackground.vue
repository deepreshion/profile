<script setup lang="ts">
import type { HeroScene } from "~/types/hero-background";
import { createHeroScene } from "~/utils/createGridPoints";

const props = withDefaults(defineProps<{ intensity?: "full" | "reduced" }>(), {
  intensity: "full",
});

const canvas = ref<HTMLCanvasElement | null>(null);
const reducedMotion = useReducedMotion();

let context: CanvasRenderingContext2D | null = null;
let scene: HeroScene | null = null;
let animationFrame = 0;
let startedAt = 0;
let scrollOffset = 0;
let targetPointerX = 0;
let targetPointerY = 0;
let pointerX = 0;
let pointerY = 0;

const clearAnimation = () => {
  if (!animationFrame) return;
  cancelAnimationFrame(animationFrame);
  animationFrame = 0;
};

const drawShape = (shape: HeroScene["shapes"][number], time: number) => {
  if (!context || !scene) return;
  const wobble = Math.sin(time * 0.0011 + shape.phase) * 4;
  context.save();
  context.translate(
    shape.x + pointerX * 0.012,
    shape.y + pointerY * 0.012 + scrollOffset * 0.04,
  );
  context.rotate(shape.rotation + time * 0.00004 + wobble * 0.002);
  context.strokeStyle = `rgba(183,216,75,${shape.opacity})`;
  context.lineWidth = 1;
  context.beginPath();
  for (let index = 0; index < shape.sides; index += 1) {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / shape.sides;
    const x = Math.cos(angle) * (shape.size + wobble);
    const y = Math.sin(angle) * (shape.size + wobble);
    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  }
  context.closePath();
  context.stroke();
  if (shape.sides === 4) {
    context.beginPath();
    context.moveTo(-shape.size, 0);
    context.lineTo(shape.size, 0);
    context.moveTo(0, -shape.size);
    context.lineTo(0, shape.size);
    context.strokeStyle = `rgba(255,255,255,${shape.opacity * 0.45})`;
    context.stroke();
  }
  context.restore();
};

const drawScene = (time = 0) => {
  if (!context || !scene) return;
  const { width, height } = scene;
  const motion = props.intensity === "reduced" || reducedMotion.value ? 0 : 1;
  const scrollPhase = scrollOffset * 0.0015;
  pointerX += (targetPointerX - pointerX) * 0.06 * motion;
  pointerY += (targetPointerY - pointerY) * 0.06 * motion;

  context.clearRect(0, 0, width, height);

  const baseGradient = context.createRadialGradient(
    width * 0.64,
    height * 0.36,
    0,
    width * 0.64,
    height * 0.36,
    width * 0.72,
  );
  baseGradient.addColorStop(0, "rgba(183,216,75,.095)");
  baseGradient.addColorStop(0.36, "rgba(65,78,28,.07)");
  baseGradient.addColorStop(1, "rgba(17,17,17,0)");
  context.fillStyle = baseGradient;
  context.fillRect(0, 0, width, height);

  context.save();
  context.translate(pointerX * 0.018, pointerY * 0.018 + scrollOffset * 0.055);
  scene.terrain.lines.forEach((line) => {
    const from = scene!.terrain.points[line.from];
    const to = scene!.terrain.points[line.to];
    const pulse =
      0.55 + Math.sin(time * 0.001 + from.delay + scrollPhase) * 0.25 * motion;
    context!.strokeStyle = `rgba(183,216,75,${line.opacity * pulse})`;
    context!.lineWidth = 1;
    context!.beginPath();
    context!.moveTo(from.x, from.y);
    context!.lineTo(to.x, to.y);
    context!.stroke();
  });
  scene.terrain.points.forEach((point) => {
    const pulse =
      0.75 +
      Math.sin(time * 0.0014 + point.delay + scrollPhase) * 0.25 * motion;
    context!.fillStyle = `rgba(183,216,75,${(0.1 + point.depth * 0.28) * point.intensity * pulse})`;
    context!.fillRect(point.x - 0.75, point.y - 0.75, 1.5, 1.5);
  });
  context.restore();

  scene.edges.forEach((edge) => {
    const from = scene!.nodes[edge.from];
    const to = scene!.nodes[edge.to];
    const pulse =
      0.68 + Math.sin(time * 0.0012 + from.phase + scrollPhase) * 0.32 * motion;
    context!.strokeStyle = `rgba(230,230,230,${edge.opacity * pulse})`;
    context!.lineWidth = 1;
    context!.beginPath();
    context!.moveTo(
      from.x + pointerX * 0.012 * from.depth,
      from.y + pointerY * 0.012 * from.depth + scrollOffset * 0.025,
    );
    context!.lineTo(
      to.x + pointerX * 0.012 * to.depth,
      to.y + pointerY * 0.012 * to.depth + scrollOffset * 0.025,
    );
    context!.stroke();
  });

  scene.nodes.forEach((node) => {
    const dx = node.x - scene!.width / 2 - pointerX;
    const dy = node.y - scene!.height / 2 - pointerY;
    const attraction = Math.max(0, 1 - Math.hypot(dx, dy) / 360) * motion;
    const yWrap =
      (node.y +
        pointerY * 0.018 * node.depth -
        dy * 0.018 * attraction +
        scrollOffset * 0.035) %
      (height + 80);
    const x = node.x + pointerX * 0.018 * node.depth - dx * 0.018 * attraction;
    const y = yWrap < -40 ? yWrap + height + 80 : yWrap - 40;
    const pulse =
      0.75 + Math.sin(time * 0.0015 + node.phase + scrollPhase) * 0.25 * motion;
    context!.fillStyle = node.accent
      ? `rgba(183,216,75,${(0.35 + attraction * 0.32) * node.intensity * pulse})`
      : `rgba(238,238,238,${(0.18 + attraction * 0.24) * node.intensity * pulse})`;
    context!.beginPath();
    context!.arc(x, y, node.radius + attraction * 1.2, 0, Math.PI * 2);
    context!.fill();
  });

  scene.shapes.forEach((shape) => drawShape(shape, time));

  context.save();
  context.font = "10px SFMono-Regular, Consolas, ui-monospace, monospace";
  context.textBaseline = "top";
  scene.glyphs.forEach((glyph) => {
    const drift =
      Math.sin(time * 0.00055 + glyph.phase + scrollPhase) * 6 * motion;
    const x = glyph.x + pointerX * 0.01;
    const y =
      ((glyph.y + drift + pointerY * 0.006 + scrollOffset * 0.045) %
        (height + 110)) -
      55;
    glyph.lines.forEach((line, index) => {
      context!.fillStyle =
        index === glyph.accentLine
          ? `rgba(183,216,75,${glyph.opacity + 0.1})`
          : `rgba(214,214,214,${glyph.opacity * 0.85})`;
      context!.fillText(line, x, y + index * 15);
    });
  });
  context.restore();

  const shade = context.createLinearGradient(0, 0, width, 0);
  shade.addColorStop(0, "rgba(17,17,17,.66)");
  shade.addColorStop(0.28, "rgba(17,17,17,.44)");
  shade.addColorStop(0.58, "rgba(17,17,17,.18)");
  shade.addColorStop(1, "rgba(17,17,17,.42)");
  context.fillStyle = shade;
  context.fillRect(0, 0, width, height);

  const verticalShade = context.createLinearGradient(0, 0, 0, height);
  verticalShade.addColorStop(0, "rgba(17,17,17,.24)");
  verticalShade.addColorStop(0.5, "rgba(17,17,17,.08)");
  verticalShade.addColorStop(1, "rgba(17,17,17,.62)");
  context.fillStyle = verticalShade;
  context.fillRect(0, 0, width, height);
};

const render = (time: number) => {
  drawScene(time - startedAt);
  if (!reducedMotion.value && props.intensity === "full")
    animationFrame = requestAnimationFrame(render);
};

const resize = () => {
  const element = canvas.value;
  if (!element) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  element.width = Math.max(1, Math.floor(width * pixelRatio));
  element.height = Math.max(1, Math.floor(height * pixelRatio));
  context = element.getContext("2d");
  context?.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  scene = createHeroScene(width, height);
  drawScene();
};

const start = () => {
  clearAnimation();
  startedAt = performance.now();
  if (reducedMotion.value || props.intensity === "reduced") {
    drawScene();
    return;
  }
  animationFrame = requestAnimationFrame(render);
};

const handlePointerMove = (event: PointerEvent) => {
  if (event.pointerType === "touch") return;
  targetPointerX = event.clientX - window.innerWidth / 2;
  targetPointerY = event.clientY - window.innerHeight / 2;
};

const handlePointerLeave = () => {
  targetPointerX = 0;
  targetPointerY = 0;
};

const handleScroll = () => {
  scrollOffset = window.scrollY;
};

onMounted(() => {
  resize();
  start();
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", handlePointerMove, { passive: true });
  window.addEventListener("pointerleave", handlePointerLeave);
  window.addEventListener("scroll", handleScroll, { passive: true });
});

watch(reducedMotion, start);

onBeforeUnmount(() => {
  clearAnimation();
  window.removeEventListener("resize", resize);
  window.removeEventListener("pointermove", handlePointerMove);
  window.removeEventListener("pointerleave", handlePointerLeave);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <canvas ref="canvas" class="page-background" aria-hidden="true" />
</template>

"use client";

import { type RefObject, useEffect, useRef } from "react";

type MarkKind = "dot" | "square" | "bar" | "crop" | "plus" | "grid" | "glyph";

type Mark = {
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  phase: number;
  drift: number;
  kind: MarkKind;
  offsetX: number;
  offsetY: number;
  rotationOffset: number;
  scale: number;
  alpha: number;
};

type Ripple = {
  x: number;
  y: number;
  startedAt: number;
  strength: number;
};

type HeroPatternProps = {
  containerRef: RefObject<HTMLElement | null>;
};

const INTERACTION_QUERY = "(pointer: fine) and (prefers-reduced-motion: no-preference)";

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

function createRandom(seed = 1931) {
  let state = seed;

  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function selectKind(value: number): MarkKind {
  if (value < 0.22) return "dot";
  if (value < 0.4) return "square";
  if (value < 0.58) return "bar";
  if (value < 0.72) return "crop";
  if (value < 0.84) return "plus";
  if (value < 0.93) return "grid";
  return "glyph";
}

function quietZoneOpacity(x: number, y: number, width: number, height: number) {
  const inTitleArea = x < width * 0.8 && y > height * 0.4 && y < height * 0.8;
  const inIdentityCardArea = x > width * 0.58 && y > height * 0.28 && y < height * 0.7;
  const inHeroFooter = y > height * 0.82;

  let opacity = 1;
  if (inTitleArea) opacity = Math.min(opacity, 0.46);
  if (inIdentityCardArea) opacity = Math.min(opacity, 0.58);
  if (inHeroFooter) opacity = Math.min(opacity, 0.52);
  return opacity;
}

function createMarks(width: number, height: number, interactive: boolean) {
  const random = createRandom();
  const densityLimit = interactive ? 3000 : 1600;
  const preferredSpacing = width < 640 ? 18 : width < 1024 ? 20 : 21;
  const densitySpacing = Math.sqrt((width * height) / densityLimit);
  const spacing = Math.max(preferredSpacing, densitySpacing) * (interactive ? 1 : 1.14);
  const columns = Math.ceil(width / spacing) + 2;
  const rows = Math.ceil(height / spacing) + 2;
  const marks: Mark[] = [];

  for (let row = -1; row < rows; row += 1) {
    for (let column = -1; column < columns; column += 1) {
      const contour = Math.sin(column * 0.43 + row * 0.2) + Math.cos(column * 0.17 - row * 0.33);
      const occupancy = 0.68 + ((contour + 2) / 4) * 0.22;

      if (random() > occupancy) continue;

      const kind = selectKind(random());
      const size = kind === "grid" ? 3.2 + random() * 1.8 : 1.8 + random() * 5.3;
      const x = (column + 0.5) * spacing + (random() - 0.5) * spacing * 0.26;
      const y = (row + 0.5) * spacing + (random() - 0.5) * spacing * 0.26;
      const orientation = kind === "bar" || kind === "crop" ? (random() > 0.62 ? Math.PI / 2 : 0) : 0;
      const baseOpacity = (0.15 + random() * 0.13) * quietZoneOpacity(x, y, width, height);

      marks.push({
        x,
        y,
        size,
        rotation: orientation + (random() - 0.5) * 0.12,
        opacity: baseOpacity,
        phase: random() * Math.PI * 2,
        drift: random() * 2 - 1,
        kind,
        offsetX: 0,
        offsetY: 0,
        rotationOffset: 0,
        scale: 1,
        alpha: 0,
      });
    }
  }

  return marks;
}

function drawMark(context: CanvasRenderingContext2D, mark: Mark, ink: string) {
  const size = mark.size * mark.scale;

  context.save();
  context.translate(mark.x + mark.offsetX, mark.y + mark.offsetY);
  context.rotate(mark.rotation + mark.rotationOffset);
  context.globalAlpha = mark.alpha;
  context.fillStyle = ink;
  context.strokeStyle = ink;
  context.lineWidth = 0.65;

  switch (mark.kind) {
    case "dot": {
      context.fillRect(-0.65, -0.65, 1.3, 1.3);
      break;
    }
    case "square": {
      context.strokeRect(-size * 0.45, -size * 0.45, size * 0.9, size * 0.9);
      break;
    }
    case "bar": {
      context.fillRect(-size * 0.72, -0.38, size * 1.44, 0.76);
      break;
    }
    case "crop": {
      const edge = size * 0.58;
      context.beginPath();
      context.moveTo(-edge, -edge * 0.3);
      context.lineTo(-edge, -edge);
      context.lineTo(-edge * 0.3, -edge);
      context.moveTo(edge, edge * 0.3);
      context.lineTo(edge, edge);
      context.lineTo(edge * 0.3, edge);
      context.stroke();
      break;
    }
    case "plus": {
      const arm = size * 0.58;
      context.beginPath();
      context.moveTo(-arm, 0);
      context.lineTo(arm, 0);
      context.moveTo(0, -arm);
      context.lineTo(0, arm);
      context.stroke();
      break;
    }
    case "grid": {
      const edge = size * 0.56;
      context.strokeRect(-edge, -edge, edge * 2, edge * 2);
      context.beginPath();
      context.moveTo(0, -edge);
      context.lineTo(0, edge);
      context.moveTo(-edge, 0);
      context.lineTo(edge, 0);
      context.stroke();
      break;
    }
    case "glyph": {
      const stem = Math.max(0.6, size * 0.24);
      context.fillRect(-size * 0.48, -size * 0.5, stem, size);
      context.fillRect(-size * 0.48, -size * 0.5, size * 0.86, stem);
      context.fillRect(-size * 0.48, -stem * 0.5, size * 0.62, stem);
      break;
    }
  }

  context.restore();
}

export function HeroPattern({ containerRef }: HeroPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const mediaQuery = window.matchMedia(INTERACTION_QUERY);
    const ink = getComputedStyle(container).getPropertyValue("--ink").trim() || "#151515";
    const pointer = { x: 0, y: 0, previousX: 0, previousY: 0, lastMovedAt: 0, hasPosition: false };
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let marks: Mark[] = [];
    let frameId: number | null = null;
    let lastFrameTime = 0;
    let energy = 0;
    let ripples: Ripple[] = [];
    let lastRippleAt = 0;
    let lastRippleX = 0;
    let lastRippleY = 0;
    let isInteractive = mediaQuery.matches;
    let isVisible = true;

    const clearAndDraw = () => {
      if (!width || !height) return;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);
      context.globalAlpha = 1;

      marks.forEach((mark) => drawMark(context, mark, ink));
    };

    const resetMarks = () => {
      marks.forEach((mark) => {
        mark.offsetX = 0;
        mark.offsetY = 0;
        mark.rotationOffset = 0;
        mark.scale = 1;
        mark.alpha = 0;
      });
    };

    const cancelFrame = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    const drawFrame = (time: number) => {
      frameId = null;
      if (!isVisible) return;

      const elapsed = lastFrameTime ? Math.min(time - lastFrameTime, 34) : 16.7;
      const frameFactor = elapsed / 16.7;
      const easing = 1 - Math.pow(0.84, frameFactor);
      const isMoving = isInteractive && time - pointer.lastMovedAt < 120;
      const radius = clamp(Math.min(width, height) * 0.25, 120, 220);
      const waveTime = time * 0.0105;
      let isSettling = false;
      ripples = ripples.filter((ripple) => time - ripple.startedAt < 640);

      if (!isMoving) energy *= Math.pow(0.86, frameFactor);

      marks.forEach((mark) => {
        let targetX = 0;
        let targetY = 0;
        let targetRotation = 0;
        let targetScale = 1;
        let targetAlpha = 0;

        if (isMoving) {
          const deltaX = mark.x - pointer.x;
          const deltaY = mark.y - pointer.y;
          const distance = Math.hypot(deltaX, deltaY);

          if (distance < radius) {
            const normalizedDistance = distance / radius;
            const falloff = Math.pow(1 - normalizedDistance, 1.8);
            const directionX = deltaX / Math.max(distance, 0.001);
            const directionY = deltaY / Math.max(distance, 0.001);
            const ripple = 0.72 + Math.sin(distance / (radius * 0.19) - waveTime + mark.phase * 0.35) * 0.28;
            const strength = 0.56 + energy * 0.44;
            const push = falloff * (4.5 + ripple * 8.5) * strength;
            const curl = falloff * Math.sin(distance / (radius * 0.15) - waveTime + mark.phase) * 3.2 * strength;

            targetX = directionX * push - directionY * curl;
            targetY = directionY * push + directionX * curl;
            targetRotation = falloff * (mark.drift * 0.38 + curl * 0.05);
            targetScale = 1 + falloff * (0.07 + energy * 0.07);
            targetAlpha = mark.opacity * Math.pow(falloff, 0.65);
          }
        }
        ripples.forEach((ripple) => {
          const age = time - ripple.startedAt;
          const deltaX = mark.x - ripple.x;
          const deltaY = mark.y - ripple.y;
          const distance = Math.hypot(deltaX, deltaY);
          const travel = age * 0.34;
          const band = Math.max(0, 1 - Math.abs(distance - travel) / 42);

          if (band === 0) return;

          const decay = Math.pow(1 - age / 640, 1.45);
          const directionX = deltaX / Math.max(distance, 0.001);
          const directionY = deltaY / Math.max(distance, 0.001);
          const pulse = band * decay * ripple.strength;
          const push = pulse * 5.2;

          targetX += directionX * push;
          targetY += directionY * push;
          targetRotation += pulse * mark.drift * 0.16;
          targetScale += pulse * 0.045;
          targetAlpha = Math.max(targetAlpha, mark.opacity * pulse * 0.65);
        });

        mark.offsetX += (targetX - mark.offsetX) * easing;
        mark.offsetY += (targetY - mark.offsetY) * easing;
        mark.rotationOffset += (targetRotation - mark.rotationOffset) * easing;
        mark.scale += (targetScale - mark.scale) * easing;
        mark.alpha += (targetAlpha - mark.alpha) * easing;

        if (
          Math.abs(targetX - mark.offsetX) > 0.025 ||
          Math.abs(targetY - mark.offsetY) > 0.025 ||
          Math.abs(targetRotation - mark.rotationOffset) > 0.002 ||
          Math.abs(targetScale - mark.scale) > 0.002 ||
          Math.abs(targetAlpha - mark.alpha) > 0.002
        ) {
          isSettling = true;
        }
      });

      clearAndDraw();
      lastFrameTime = time;

      if (isMoving || ripples.length > 0 || isSettling || energy > 0.01) {
        frameId = window.requestAnimationFrame(drawFrame);
      }
    };

    const scheduleFrame = () => {
      if (!isVisible || frameId !== null || !isInteractive) return;
      frameId = window.requestAnimationFrame(drawFrame);
    };

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      width = Math.max(1, Math.round(bounds.width));
      height = Math.max(1, Math.round(bounds.height));
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      marks = createMarks(width, height, isInteractive);
      ripples = [];
      lastFrameTime = 0;
      clearAndDraw();
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isInteractive) return;

      const bounds = container.getBoundingClientRect();
      const nextX = event.clientX - bounds.left;
      const nextY = event.clientY - bounds.top;
      const isFirstPointer = !pointer.hasPosition;
      const velocity = isFirstPointer ? 0 : Math.hypot(nextX - pointer.previousX, nextY - pointer.previousY);
      const now = performance.now();

      pointer.x = nextX;
      pointer.y = nextY;
      pointer.previousX = nextX;
      pointer.previousY = nextY;
      pointer.hasPosition = true;
      pointer.lastMovedAt = now;
      energy = clamp(Math.max(0.36, energy * 0.65 + velocity * 0.045), 0, 1);

      const shouldCreateRipple = isFirstPointer || now - lastRippleAt > 46 || Math.hypot(nextX - lastRippleX, nextY - lastRippleY) > 28;
      if (shouldCreateRipple) {
        ripples.push({ x: nextX, y: nextY, startedAt: now, strength: 0.54 + energy * 0.46 });
        if (ripples.length > 7) ripples.shift();
        lastRippleAt = now;
        lastRippleX = nextX;
        lastRippleY = nextY;
      }

      scheduleFrame();
    };

    const handlePointerLeave = () => {
      pointer.lastMovedAt = 0;
      pointer.hasPosition = false;
      scheduleFrame();
    };

    const handleMediaChange = () => {
      const nextInteractiveState = mediaQuery.matches;
      if (nextInteractiveState === isInteractive) return;

      isInteractive = nextInteractiveState;
      pointer.lastMovedAt = 0;
      pointer.hasPosition = false;
      ripples = [];
      energy = 0;
      cancelFrame();
      resize();
      resetMarks();
      clearAndDraw();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        pointer.lastMovedAt = 0;
        pointer.hasPosition = false;
        ripples = [];
        energy = 0;
        cancelFrame();
        return;
      }

      resetMarks();
      clearAndDraw();
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        isVisible = entry.isIntersecting;

        if (!isVisible) {
          pointer.lastMovedAt = 0;
          pointer.hasPosition = false;
          ripples = [];
          energy = 0;
          cancelFrame();
          return;
        }

        resetMarks();
        clearAndDraw();
      },
      { threshold: 0.01 },
    );

    resize();
    resizeObserver.observe(container);
    intersectionObserver.observe(container);
    container.addEventListener("pointermove", handlePointerMove, { passive: true });
    container.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    mediaQuery.addEventListener("change", handleMediaChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelFrame();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      mediaQuery.removeEventListener("change", handleMediaChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [containerRef]);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none absolute inset-0 z-0 h-full w-full" />;
}

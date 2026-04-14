"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue } from "framer-motion";
import { getSequenceFramePath, sequenceConfig } from "@/lib/sequenceConfig";

type SequenceLoadState = "loading" | "ready" | "error";

export default function ScrollyCanvas({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadState, setLoadState] = useState<SequenceLoadState>("loading");
  const [loadError, setLoadError] = useState<string | null>(null);
  const frameCount = sequenceConfig.frameCount;

  useEffect(() => {
    let cancelled = false;
    let hasFailed = false;
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    setLoadState("loading");
    setLoadError(null);
    setImages([]);

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      const src = getSequenceFramePath(i);

      img.onload = () => {
        if (cancelled || hasFailed) {
          return;
        }

        loadedCount++;
        loadedImages[i] = img;

        if (loadedCount === frameCount) {
          setImages(loadedImages);
          setLoadState("ready");
        }
      };

      img.onerror = () => {
        if (cancelled || hasFailed) {
          return;
        }

        hasFailed = true;

        console.error(`Failed to load sequence frame: ${src}`);
        setLoadError(src);
        setLoadState("error");
      };

      img.src = src;
    }

    return () => {
      cancelled = true;
    };
  }, [frameCount]);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderFrame = (index: number) => {
      if (!images[index] || !ctx) return;

      const img = images[index];
      const renderRatio = window.devicePixelRatio || 1;
      
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      
      canvas.width = canvasWidth * renderRatio;
      canvas.height = canvasHeight * renderRatio;
      
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;
      
      const x = (canvas.width - drawWidth) / 2;
      const y = (canvas.height - drawHeight) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#121212";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, drawWidth, drawHeight);
    };

    renderFrame(0);

    const handleResize = () => {
      const latest = scrollProgress.get();
      const frameIndex = Math.min(frameCount - 1, Math.max(0, Math.floor(latest * frameCount)));
      renderFrame(frameIndex);
    };

    window.addEventListener("resize", handleResize);

    const unsubscribe = scrollProgress.on("change", (latest) => {
      const frameIndex = Math.min(frameCount - 1, Math.floor(latest * frameCount));
      requestAnimationFrame(() => renderFrame(frameIndex));
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
    };
  }, [frameCount, images, scrollProgress]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: "100%", height: "100%" }}
      />
      {loadState === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center text-white/50 bg-[#121212]">
          Loading Experience...
        </div>
      )}
      {loadState === "error" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#121212]/95 px-6 text-center">
          <p className="text-lg uppercase tracking-[0.2em] text-[#e0c050]">
            Unable to load the cinematic sequence
          </p>
          <p className="max-w-2xl text-sm text-white/60">
            Check the sequence config and asset filenames. The first missing or invalid
            frame was:
          </p>
          <code className="rounded border border-white/10 bg-black/30 px-4 py-2 text-xs text-white/80">
            {loadError}
          </code>
        </div>
      )}
    </div>
  );
}

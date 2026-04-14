export interface SequenceConfig {
  directory: string;
  frameCount: number;
  padLength: number;
  prefix: string;
  suffix: string;
  extension: string;
}

export const sequenceConfig: SequenceConfig = {
  directory: "/sequence",
  frameCount: 192,
  padLength: 3,
  prefix: "frame_",
  suffix: "_delay-0.041s",
  extension: "webp",
};

export function getSequenceFramePath(
  index: number,
  config: SequenceConfig = sequenceConfig,
): string {
  const frameIndex = index.toString().padStart(config.padLength, "0");

  return `${config.directory}/${config.prefix}${frameIndex}${config.suffix}.${config.extension}`;
}

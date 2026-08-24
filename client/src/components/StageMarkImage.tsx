/** BÐ-Studio visual reminder: shared renderer for the per-stage emblem images, standing in for a generic lucide icon in the same slot. */
export default function StageMarkImage({ src, size = 22 }: { src: string; size?: number; strokeWidth?: number }) {
  return <img src={src} alt="" aria-hidden="true" width={size} height={size} style={{ display: "block", objectFit: "contain" }} />;
}

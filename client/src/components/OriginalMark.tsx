/** BÐ-Studio visual reminder: the 原作 stage's own emblem—crossed hammers over an open book—stands in for a generic stage icon. */
const assetBase = import.meta.env.BASE_URL;

export default function OriginalMark({ size = 22 }: { size?: number; strokeWidth?: number }) {
  return <img src={`${assetBase}assets/original-mark.webp`} alt="" aria-hidden="true" width={size} height={size} style={{ display: "block", objectFit: "contain" }} />;
}

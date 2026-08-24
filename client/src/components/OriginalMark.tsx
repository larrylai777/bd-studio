import StageMarkImage from "@/components/StageMarkImage";

const assetBase = import.meta.env.BASE_URL;

export default function OriginalMark({ size }: { size?: number; strokeWidth?: number }) {
  return <StageMarkImage src={`${assetBase}assets/original-mark.webp`} size={size} />;
}

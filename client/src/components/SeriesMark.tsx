import StageMarkImage from "@/components/StageMarkImage";

const assetBase = import.meta.env.BASE_URL;

export default function SeriesMark({ size }: { size?: number; strokeWidth?: number }) {
  return <StageMarkImage src={`${assetBase}assets/series-mark.webp`} size={size} />;
}

import StageMarkImage from "@/components/StageMarkImage";

const assetBase = import.meta.env.BASE_URL;

export default function PodcastMark({ size }: { size?: number; strokeWidth?: number }) {
  return <StageMarkImage src={`${assetBase}assets/podcast-mark.webp`} size={size} />;
}

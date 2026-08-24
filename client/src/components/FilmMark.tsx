import StageMarkImage from "@/components/StageMarkImage";

const assetBase = import.meta.env.BASE_URL;

export default function FilmMark({ size }: { size?: number; strokeWidth?: number }) {
  return <StageMarkImage src={`${assetBase}assets/film-mark.webp`} size={size} />;
}

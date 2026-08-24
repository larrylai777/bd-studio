import StageMarkImage from "@/components/StageMarkImage";

const assetBase = import.meta.env.BASE_URL;

export default function MerchMark({ size }: { size?: number; strokeWidth?: number }) {
  return <StageMarkImage src={`${assetBase}assets/merch-mark.webp`} size={size} />;
}

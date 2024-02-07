import { Product } from "@/app/lib/definitions";

export default function AddToChartButton({
  btnStyle,
  icon,
  text,
}: {
  btnStyle?: any;
  icon?: any;
  text?: string;
}) {
  return (
    <button className={`${btnStyle}`}>
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
}

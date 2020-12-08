import { NonIdealStateProps } from "./types";

export default function NonIdealState({
  image,
  message,
  subtext,
}: NonIdealStateProps): JSX.Element {
  return (
    <div className="w-full flex items-center justify-center space-x-4">
      {image && <div>{image}</div>}
      <div>
        <h2 className="text-xl font-semibold">{message}</h2>
        {subtext && <div className="text-sm text-gray-700">{subtext}</div>}
      </div>
    </div>
  );
}

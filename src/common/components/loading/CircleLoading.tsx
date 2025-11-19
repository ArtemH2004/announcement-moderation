interface CircleLoadingProps {
  size?: number;
}

export const CircleLoading = ({ size = 32 }: CircleLoadingProps) => {
  return (
    <div
      className="aspect-square rounded-full bg-gray-200 animate-pulse"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

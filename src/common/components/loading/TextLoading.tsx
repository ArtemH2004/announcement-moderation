interface TextLoadingProps {
  sizeClassName: string;
}

export const TextLoading = ({ sizeClassName }: TextLoadingProps) => {
  return <div className={`bg-gray-200 rounded-3xl animate-pulse ${sizeClassName}`} />;
};

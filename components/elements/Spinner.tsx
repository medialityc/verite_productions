import { classNames } from "../../utils/classnames";

type SpinnerProps = {
  className?: string;
};

export const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        `absolute h-28 w-28 animate-spin rounded-full border-4 border-solid border-r-orange-400  align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`,
        className
      )}
      aria-label="Loading..."
    />
  );
};

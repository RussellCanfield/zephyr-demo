export const StopPropagation: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
  <div
    onClick={(e) => {
      e.stopPropagation();
      e.preventDefault();
    }}
  >
    {children}
  </div>
);

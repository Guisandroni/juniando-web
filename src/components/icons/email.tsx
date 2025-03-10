interface EmailProps {
  className?: string;
}

const Email = ({ className }: EmailProps) => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.9602 1.24707H17.0402C18.0082 1.24707 18.8002 1.99551 18.8002 2.91027V12.8895C18.8002 13.8042 18.0082 14.5527 17.0402 14.5527H2.9602C1.9922 14.5527 1.2002 13.8042 1.2002 12.8895V2.91027C1.2002 1.99551 1.9922 1.24707 2.9602 1.24707Z"
        stroke="#C8C8C8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.8002 3.54395L10.0002 9.08795L1.2002 3.54395"
        stroke="#C8C8C8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Email;

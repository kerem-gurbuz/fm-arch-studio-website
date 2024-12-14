export function HamburgerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-label="Open"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="17"
      {...props}
    >
      <g fill="#1B1D23" fillRule="evenodd">
        <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
      </g>
    </svg>
  );
}

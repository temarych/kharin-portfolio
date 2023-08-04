import { HTMLAttributes } from "react";

export const Pexels = (props: HTMLAttributes<SVGElement>) => {
  return (
    <svg width="1.25em" height="1.25em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g>
        <path d="M12 23h5a1 1 0 0 0 1-1v-3a5 5 0 0 0 0-10h-6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm1-12h5a3 3 0 0 1 0 6h-1a1 1 0 0 0-1 1v3h-3Z" />
        <path d="M23.2 3h-9.6a1 1 0 0 0 0 2h9.6A3.8 3.8 0 0 1 27 8.8v14.4a3.8 3.8 0 0 1-3.8 3.8H8.8A3.8 3.8 0 0 1 5 23.2V8.8A3.8 3.8 0 0 1 8.8 5a1 1 0 0 0 0-2A5.8 5.8 0 0 0 3 8.8v14.4A5.8 5.8 0 0 0 8.8 29h14.4a5.8 5.8 0 0 0 5.8-5.8V8.8A5.8 5.8 0 0 0 23.2 3Z" />
      </g>
    </svg>
  );
};
import React from "react";

export default function Dropdown() {
  return (
    <div className="flex flex-col p-4 gap-4 dropdown-content bg-base-200 text-base-content rounded-box top-px h-fit max-h-[calc(100vh-10rem)] w-fit overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16">
      <button
        className="outline-base-content text-start outline-offset-4"
        data-act-class="[&amp;_svg]:visible"
        data-set-theme="light"
      >
        <span
          className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
          data-theme="light"
        >
          <span className="grid grid-cols-5 grid-rows-3">
            <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="invisible h-3 w-3 shrink-0"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
              </svg>{" "}
              <span className="flex-grow text-sm">light</span>{" "}
              <span className="flex h-full shrink-0 flex-wrap gap-1">
                <span className="bg-primary rounded-badge w-2"></span>{" "}
                <span className="bg-secondary rounded-badge w-2"></span>{" "}
                <span className="bg-accent rounded-badge w-2"></span>{" "}
                <span className="bg-neutral rounded-badge w-2"></span>
              </span>
            </span>
          </span>
        </span>
      </button>

      <button
        className="outline-base-content text-start outline-offset-4"
        data-act-class="[&amp;_svg]:visible"
        data-set-theme="dark"
      >
        <span
          className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
          data-theme="dark"
        >
          <span className="grid grid-cols-5 grid-rows-3">
            <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="invisible h-3 w-3 shrink-0"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
              </svg>{" "}
              <span className="flex-grow text-sm">dark</span>{" "}
              <span className="flex h-full shrink-0 flex-wrap gap-1">
                <span className="bg-primary rounded-badge w-2"></span>{" "}
                <span className="bg-secondary rounded-badge w-2"></span>{" "}
                <span className="bg-accent rounded-badge w-2"></span>{" "}
                <span className="bg-neutral rounded-badge w-2"></span>
              </span>
            </span>
          </span>
        </span>
      </button>

      <button
        className="outline-base-content text-start outline-offset-4"
        data-act-class="[&amp;_svg]:visible"
        data-set-theme="cupcake"
      >
        <span
          className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
          data-theme="cupcake"
        >
          <span className="grid grid-cols-5 grid-rows-3">
            <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="invisible h-3 w-3 shrink-0"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
              </svg>{" "}
              <span className="flex-grow text-sm">cupcake</span>{" "}
              <span className="flex h-full shrink-0 flex-wrap gap-1">
                <span className="bg-primary rounded-badge w-2"></span>{" "}
                <span className="bg-secondary rounded-badge w-2"></span>{" "}
                <span className="bg-accent rounded-badge w-2"></span>{" "}
                <span className="bg-neutral rounded-badge w-2"></span>
              </span>
            </span>
          </span>
        </span>
      </button>

      <button
        className="outline-base-content text-start outline-offset-4"
        data-act-class="[&amp;_svg]:visible"
        data-set-theme="dracula"
      >
        <span
          className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
          data-theme="dracula"
        >
          <span className="grid grid-cols-5 grid-rows-3">
            <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="invisible h-3 w-3 shrink-0"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
              </svg>{" "}
              <span className="flex-grow text-sm">dracula</span>{" "}
              <span className="flex h-full shrink-0 flex-wrap gap-1">
                <span className="bg-primary rounded-badge w-2"></span>{" "}
                <span className="bg-secondary rounded-badge w-2"></span>{" "}
                <span className="bg-accent rounded-badge w-2"></span>{" "}
                <span className="bg-neutral rounded-badge w-2"></span>
              </span>
            </span>
          </span>
        </span>
      </button>
    </div>
  );
}

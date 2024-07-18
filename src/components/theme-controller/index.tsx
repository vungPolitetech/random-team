
export function ThemeController() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-200 text-base-content rounded-box z-[1] w-52 p-4 shadow-2xl flex flex-col gap-3"
      >
        <li data-theme="light" className="relative py-2 bg-base-100 rounded">
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block justify-start !bg-base-100 !outline-none outline-base-content border-none shadow-none !text-base-content"
            aria-label="Light"
            value="light"
          />
          <div
            data-set-theme="light"
            className="absolute right-3 bottom-0 h-full w-auto flex gap-2 max-h-5 top-1/2 -translate-y-1/2"
          >
            <span
              data-theme="light"
              className="bg-primary rounded-badge w-2"
            ></span>
            <span
              data-theme="light"
              className="bg-secondary rounded-badge w-2"
            ></span>
            <span
              data-theme="light"
              className="bg-accent rounded-badge w-2"
            ></span>
            <span
              data-theme="light"
              className="bg-neutral rounded-badge w-2"
            ></span>
          </div>
        </li>
        <li data-theme="dark" className="relative py-2 bg-base-100 rounded">
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block justify-start !bg-base-100 !outline-none outline-base-content border-none shadow-none !text-base-content"
            aria-label="Dark"
            value="dark"
          />
          <div
            data-set-theme="dark"
            className="absolute right-3 bottom-0 h-full w-auto flex gap-2 max-h-5 top-1/2 -translate-y-1/2"
          >
            <span
              data-theme="dark"
              className="bg-primary rounded-badge w-2"
            ></span>
            <span
              data-theme="dark"
              className="bg-secondary rounded-badge w-2"
            ></span>
            <span
              data-theme="dark"
              className="bg-accent rounded-badge w-2"
            ></span>
            <span
              data-theme="dark"
              className="bg-neutral rounded-badge w-2"
            ></span>
          </div>
        </li>
        <li data-theme="cupcake" className="relative py-2 bg-base-100 rounded">
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block justify-start !bg-base-100 !outline-none outline-base-content border-none shadow-none !text-base-content"
            aria-label="Cupcake"
            value="cupcake"
          />
          <div
            data-set-theme="cupcake"
            className="absolute right-3 bottom-0 h-full w-auto flex gap-2 max-h-5 top-1/2 -translate-y-1/2"
          >
            <span
              data-theme="cupcake"
              className="bg-primary rounded-badge w-2"
            ></span>
            <span
              data-theme="cupcake"
              className="bg-secondary rounded-badge w-2"
            ></span>
            <span
              data-theme="cupcake"
              className="bg-accent rounded-badge w-2"
            ></span>
            <span
              data-theme="cupcake"
              className="bg-neutral rounded-badge w-2"
            ></span>
          </div>
        </li>
        <li data-theme="dracula" className="relative py-2 bg-base-100 rounded">
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block justify-start !bg-base-100 !outline-none outline-base-content border-none shadow-none !text-base-content"
            aria-label="Dracula"
            value="dracula"
          />
          <div
            data-set-theme="dracula"
            className="absolute right-3 bottom-0 h-full w-auto flex gap-2 max-h-5 top-1/2 -translate-y-1/2"
          >
            <span
              data-theme="dracula"
              className="bg-primary rounded-badge w-2"
            ></span>
            <span
              data-theme="dracula"
              className="bg-secondary rounded-badge w-2"
            ></span>
            <span
              data-theme="dracula"
              className="bg-accent rounded-badge w-2"
            ></span>
            <span
              data-theme="dracula"
              className="bg-neutral rounded-badge w-2"
            ></span>
          </div>
        </li>
        <li data-theme="valentine" className="relative py-2 bg-base-100 rounded">
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block justify-start !bg-base-100 !outline-none outline-base-content border-none shadow-none !text-base-content"
            aria-label="Valentine"
            value="valentine"
          />
          <div
            data-set-theme="valentine"
            className="absolute right-3 bottom-0 h-full w-auto flex gap-2 max-h-5 top-1/2 -translate-y-1/2"
          >
            <span
              data-theme="valentine"
              className="bg-primary rounded-badge w-2"
            ></span>
            <span
              data-theme="valentine"
              className="bg-secondary rounded-badge w-2"
            ></span>
            <span
              data-theme="valentine"
              className="bg-accent rounded-badge w-2"
            ></span>
            <span
              data-theme="valentine"
              className="bg-neutral rounded-badge w-2"
            ></span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export const Nav = () => {
  return (
    <nav className="absolute bottom-4 left-1/2 z-20 w-[90%] -translate-x-1/2 items-center rounded-3xl bg-blue px-8 py-2 dark:bg-orange/50 md:relative md:bottom-0 md:left-0 md:w-auto md:translate-x-0 md:bg-transparent dark:md:bg-transparent">
      <ul className="flex items-center justify-around space-x-6 md:justify-center md:space-x-14">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export function H1({ children, className }) {
  return (
    <h1
      className={`${className} font-system md:leading-tight font-semibold text-transparent bg-clip-text text-4xl md:text-6xl bg-gradient-to-r from-white to-violet-200`}
    >
      {children}
    </h1>
  );
}

export function P({ children, className }) {
  return (
    <p
      className={`${className} font-sans leading-[1.6] text-shadow-xs text-xl font-normal font-inter text-violet-50`}
    >
      {children}
    </p>
  );
}

export function UtilityIcon({ icon, className }) {
  return (
    <div className={`${className} flex items-center justify-center w-16 h-16 mb-4 bg-white rounded-full bg-opacity-10`}>
      <img src={icon} alt="" />
    </div>
  );
}

export function Button({ color = "darkBlue", className, children, icon, href, target }) {
  const colors = {
    darkBlue: "text-white text-opacity-90 from-[#4F69DE] to-[#504DE6]",
    lightBlue: "text-white text-opacity-90 from-[#66AEE1] to-[#5989DF]",
    white: "text-[#3D4F77] from-white text-opacity-90 to-purple-200",
  };

  return (
    <a
      href={href}
      target={target}
      className={`${colors[color]} ${className} block relative overflow-hidden px-8 py-3 md:py-4 rounded-xl md:rounded-xl bg-gradient-to-b w-[250px] cursor-pointer glow-top transition-transform duration-500 hover:translate-y-[-2px] active:translate-y-0 active:duration-300`}
    >
      <div className="flex justify-center gap-3 font-medium">
        <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 bg-white opacity-0 hover:opacity-10"></div>
        {icon && <img src={icon} alt="" className="w-6 color-white" />}
        {children}
      </div>
    </a>
  );
}

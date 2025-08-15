import { useInViewAnimation } from "../hooks/useInViewAnimation";

function Footer() {
  const { ref, isVisible } = useInViewAnimation(200);

  return (
    <footer
      ref={ref}
      className={`bg-slate-200 text-white py-8 mt-20 transition-all duration-2000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-black text-lg">
          © 2025 Razvan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
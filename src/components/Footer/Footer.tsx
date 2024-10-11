import Image from "next/image";
import { inter, poppins, roboto, cabin } from "@/app/ui/fonts";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full py-4 flex justify-center items-center text-center text-gray-700"
      style={{ backgroundColor: "var(--footer-bg-color)" }}
    >
      <div>
        Powered by{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <span className="ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={71} height={16} />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

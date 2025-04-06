import { Road_Rage } from "next/font/google";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const roadRage = Road_Rage({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-road-rage",
});

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-zinc-900 bg-[url(/bg.gif)] bg-cover bg-center flex flex-col items-center gap-24 py-8">
      <h1
        className={`block xl:hidden text-8xl self-center font-bold mt-[14%] text-cyan-400 ${roadRage.className}`}
      >
        Coming Soon on Small Screens
      </h1>
      <div className="hidden xl:flex flex-col items-center justify-center">
        <h1
          className={`text-8xl font-bold mt-[14%] text-cyan-400 ${roadRage.className}`}
        >
          WilliFy
        </h1>
        <h3 className="text-center text-white text-lg mt-4 max-w-[50vh] font-medium">
          The next generation of digital asset inheritance. Secure, automated,
          and decentralized on Ethereum.
        </h3>

        <Link
          href={"/will/claim"}
          className="px-10 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 mt-3 rounded-md cursor-pointer font-bold"
        >
          Start
        </Link>
      </div>

      <div className="hidden xl:flex gap-0 flex-wrap justify-center">
        <div className="flex flex-col lg:border-r py-10 relative group/feature lg:border-l lg:border-b border-white/35">
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500/20 to-transparent pointer-events-none"></div>
          <div className="mb-4 relative z-10 px-10 text-blue-400 [&>svg]:w-8 [&>svg]:h-8 ">
            <img
              alt="Solana Logo"
              loading="lazy"
              width="80"
              height="80"
              decoding="async"
              data-nimg="1"
              className="text-blue-400"
              src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="text-lg font-bold mb-2 relative z-10 px-10">
            <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-zinc-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center"></div>
            <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
              Security First
            </span>
          </div>
          <p className="text-sm text-zinc-300 max-w-xs relative z-10 px-10">
            Built on Ethereum, the most secure blockchain
          </p>
        </div>

        {/* Security Section 2 */}
        <div className="flex flex-col lg:border-r py-10 relative group/feature lg:border-l lg:border-b border-white/35">
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500/20 to-transparent pointer-events-none"></div>
          <div className="mb-4 relative z-10 px-10 text-blue-400 [&>svg]:w-8 [&>svg]:h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-target "
            >
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            </svg>
          </div>
          <div className="text-lg font-bold mb-2 relative z-10 px-10">
            <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-zinc-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center"></div>
            <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
              Full Control
            </span>
          </div>
          <p className="text-sm text-zinc-300 max-w-xs relative z-10 px-10">
            Complete authority over your digital assets
          </p>
        </div>

        {/* Security Section 3 */}
        <div className="flex flex-col lg:border-r py-10 relative group/feature lg:border-l lg:border-b border-white/35">
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500/20 to-transparent pointer-events-none"></div>
          <div className="mb-4 relative z-10 px-10 text-blue-400 [&>svg]:w-8 [&>svg]:h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-clock "
            >
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M12 7v5l3 3"></path>
            </svg>
          </div>
          <div className="text-lg font-bold mb-2 relative z-10 px-10">
            <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-zinc-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center"></div>
            <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
              Flexible Timing
            </span>
          </div>
          <p className="text-sm text-zinc-300 max-w-xs relative z-10 px-10">
            Set custom check-in periods that work for you
          </p>
        </div>

        {/* Security Section 4 */}
        <div className="flex flex-col lg:border-r py-10 relative group/feature lg:border-l lg:border-b border-white/35">
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500/20 to-transparent pointer-events-none"></div>
          <div className="mb-4 relative z-10 px-10 text-blue-400 [&>svg]:w-8 [&>svg]:h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-wallet w-8 h-8"
            >
              <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
              <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
            </svg>
          </div>
          <div className="text-lg font-bold mb-2 relative z-10 px-10">
            <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-zinc-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center"></div>
            <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
              Multi-Wallet Support
            </span>
          </div>
          <p className="text-sm text-zinc-300 max-w-xs relative z-10 px-10">
            Connect and manage multiple beneficiary wallets
          </p>
        </div>
      </div>

      <div className="hidden xl:flex flex-col gap-8 w-[40%]">
        <h2 className="text-white text-3xl">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4 text-white w-full">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="cursor-pointer">
                How does Willify works?
              </AccordionTrigger>
              <AccordionContent>
                Willify uses smart contracts on the Bepolia blockchain to create
                a secure, automated inheritance system. You first set up an
                escrow which stores your assets, and specify the transfer amount
                along with a time period.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="cursor-pointer">
            <AccordionItem value="item-1">
              <AccordionTrigger className="cursor-pointer">
                What happens to my assets?
              </AccordionTrigger>
              <AccordionContent>
                Your assets remain securely locked in the smart contract until
                you choose to cancel the escrow and withdraw them or the
                receiver claims it. You maintain full control over your assets
                while the will is active. Once the time is up, only the
                beneficiary wallet can withdraw the assets.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="cursor-pointer">
            <AccordionItem value="item-1">
              <AccordionTrigger className="cursor-pointer">
                Is this secure?
              </AccordionTrigger>
              <AccordionContent>
                Yes, alot. Willify is built on Bepolia's blockchain, ensuring
                maximum security and transparency. All transactions and rules
                are enforced by smart contracts, making the process completely
                trustless and automated.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

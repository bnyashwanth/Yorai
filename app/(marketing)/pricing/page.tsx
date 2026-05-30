import Hero from "@/components/marketing/pricing/Hero";
import Brokerage from "@/components/marketing/pricing/Brokerage";
import OpenAccount from "@/components/marketing/home/OpenAccout";

export default function Pricing() {
    return (
        <div className="flex flex-col bg-white">
            <Hero />
            <OpenAccount />
            <Brokerage />
        </div>
    );
}
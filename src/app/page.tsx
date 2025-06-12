import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="mt-4">
      <Hero />
      <WhoAreWe />
      <Services />
      <Cases />
    </div>
  );
}

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`p-8 ${className}`}>{children}</div>;
}

function Hero() {
  return (
    <Section className="bg-white min-h-[50vh] flex items-center px-8">
      <p className="w-1/2 text-left">
        The power of AI, Data Engineering, & Cloud Computing Combined.
      </p>
    </Section>
  );
}

function WhoAreWe() {
  return (
    <Section className="bg-black text-white p-8 flex gap-4">
      <h1 className="text-4xl font-bold uppercase">
        We are your partner in Data, Cloud, and AI Product Development
      </h1>
      <Button className="self-end text-black" variant="outline">
        <a href="mailto:contact@branebridge.com">Contact Us</a>
      </Button>
    </Section>
  );
}

function Services() {
  return (
    <Section className="bg-white">
      <p>Services</p>
    </Section>
  );
}

function Cases() {
  return (
    <Section className="bg-black text-white">
      <p>Cases</p>
    </Section>
  );
}

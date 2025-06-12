import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl font-bold uppercase">{children}</h1>;
}

function Hero() {
  return (
    <div className="h-[50vh]">
      <div className="w-full h-full flex items-center justify-left relative px-8">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <p className="w-1/2 text-left text-lg text-black font-bold">
          The power of AI, Data Engineering, & Cloud Computing Combined.
        </p>
      </div>
    </div>
  );
}

function WhoAreWe() {
  return (
    <Section className="bg-black text-white p-8 flex gap-4">
      <SectionTitle>
        We are your partner in Data, Cloud, and AI Product Development
      </SectionTitle>
      <Button className="self-end text-black" variant="outline">
        <a href="mailto:contact@branebridge.com">Contact Us</a>
      </Button>
    </Section>
  );
}

function Services() {
  return (
    <Section className="bg-white">
      <SectionTitle>Services</SectionTitle>

      <Tabs
        defaultValue="agents"
        className="border-2 rounded-lg border-black pb-4"
      >
        <TabsList className="flex h-12 md:gap-4">
          <TabsTrigger
            className="text-sm md:text-base whitespace-normal"
            value="agents"
          >
            AI Agents
          </TabsTrigger>
          <TabsTrigger
            className="text-sm md:text-base whitespace-normal"
            value="rag"
          >
            AI RAG Pipelines
          </TabsTrigger>
          <TabsTrigger
            className="text-sm md:text-base whitespace-normal"
            value="cloud"
          >
            Cloud Engineering
          </TabsTrigger>
          <TabsTrigger
            className="text-sm md:text-base whitespace-normal"
            value="product"
          >
            Product Development
          </TabsTrigger>
        </TabsList>
        <TabsContent value="agents" className="px-8">
          <p>AI Agents</p>
          <Button className="text-black mt-4" variant="outline">
            <a href="mailto:contact@branebridge.com">Learn More</a>
          </Button>
        </TabsContent>
        <TabsContent value="rag" className="px-8">
          <p>AI RAG Pipelines</p>
          <Button className="text-black mt-4" variant="outline">
            <a href="mailto:contact@branebridge.com">Learn More</a>
          </Button>
        </TabsContent>
        <TabsContent value="cloud" className="px-8">
          <p>Cloud Engineering</p>
          <Button className="text-black mt-4" variant="outline">
            <a href="mailto:contact@branebridge.com">Learn More</a>
          </Button>
        </TabsContent>
        <TabsContent value="product" className="px-8">
          <p>Product Development</p>
          <Button className="text-black mt-4" variant="outline">
            <a href="mailto:contact@branebridge.com">Learn More</a>
          </Button>
        </TabsContent>
      </Tabs>
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

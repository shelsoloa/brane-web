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
        <TabsContent value="agents">
          <p>AI Agents</p>
        </TabsContent>
        <TabsContent value="rag">
          <p>AI RAG Pipelines</p>
        </TabsContent>
        <TabsContent value="cloud">
          <p>Cloud Engineering</p>
        </TabsContent>
        <TabsContent value="product">
          <p>Product Development</p>
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

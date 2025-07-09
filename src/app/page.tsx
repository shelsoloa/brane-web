import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BraneBridgeLogo } from "@/components/logo";
import { Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhoAreWe />
      <Services />
      <Industry />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <div className={`p-8 ${className}`} id={id}>
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl font-bold uppercase">{children}</h1>;
}

function Hero() {
  return (
    <div className="h-[50vh]" id="hero">
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
        <p className="w-1/2 text-left text-xl text-primary-foreground font-bold">
          Bring the power of AI, Data Engineering, & Cloud Computing to your
          logistics business.
        </p>
      </div>
    </div>
  );
}

function WhoAreWe() {
  return (
    <Section className="bg-black text-white p-8 flex gap-4" id="agency-about">
      <SectionTitle>
        Your partner in Data Engineering, Cloud Engineering, and AI Agent
        Development.
      </SectionTitle>
      <Button className="self-end text-black" variant="outline">
        <a href="#contact">Contact Us</a>
      </Button>
    </Section>
  );
}

function Services() {
  return (
    <Section className="bg-white" id="services">
      <SectionTitle>Solutions & Services</SectionTitle>

      <ul className="flex flex-col gap-4">
        <li>
          <h2>AI Agents for Load Matching & Dispatching</h2>
          <p>
            We build AI agents that can automate your business processes and
            improve your efficiency.
          </p>
        </li>
        <li>
          <h2>Custom Portal / Workflow Dashboard MVP</h2>
          <p>
            We build a custom portal / workflow dashboard MVP for your business.
          </p>
        </li>
        <li>
          <h2>AI RAG Pipelines for Information Retrieval</h2>
          <p>
            We build AI RAG pipelines that can automate your business processes
            and improve your efficiency. We can also build a custom RAG pipeline
            for your business.
          </p>
        </li>
      </ul>

      {/* 
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
      </Tabs> */}
    </Section>
  );
}

function Industry() {
  return (
    <Section className="bg-black text-white" id="industry">
      <SectionTitle>Who do we serve?</SectionTitle>

      <p>
        We are focused on serving the Canadian{" "}
        <span className="underline">Logistics</span> industry.
      </p>
    </Section>
  );
}
function AboutUs() {
  return (
    <Section className="" id="team">
      <SectionTitle>Who are we?</SectionTitle>
      <p>
        We are a team of experienced Canadian engineers and product managers who
        are passionate about building products that helps the Canadian{" "}
        <span className="underline">Logistics</span> industry grow.
      </p>

      <br />

      <h2 className="text-2xl font-bold">About our Founder</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/images/sheldon-headshot.jpg"
            alt="Founder"
            width={300}
            height={300}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1 text-center">
            <a
              className="text-sm underline"
              href="mailto:sheldon@branebridge.com"
            >
              sheldon@branebridge.com
            </a>
            <Link
              className="text-sm underline"
              href="https://www.linkedin.com/in/shelsoloa/"
            >
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="text-lg font-bold">Sheldon Soloa</h3>
          <p className="text-lg">Founder & CEO, BraneBridge</p>
          <p className="text-sm">
            Sheldon is a Hamilton-born, Toronto-based software engineer and
            technical leader with over a decade of experience architecting
            cloud-native systems and delivering scalable software solutions. He
            has led development teams across early-stage startups and high-scale
            environments, including OtO Inc., where he served as Lead Software
            Engineer through to acquisition.
            <br />
            <br />
            Prior to founding BraneBridge, Sheldon held engineering and
            leadership roles at OtO Inc., Yelp, and GABZEBO Inc., specializing
            in cloud infrastructure, AI-powered backend services, and full-stack
            product development. His work consistently bridges deep technical
            execution with real-world business outcomes; particularly for SMBs
            in traditional sectors.
            <br />
            <br />
            Through BraneBridge, he brings this experience to underserved
            industries like logistics, manufacturing, and construction, helping
            them modernize operations through practical AI integration and cloud
            optimization.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section className="bg-accent text-white" id="contact">
      <SectionTitle>Contact Us</SectionTitle>

      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-4"
            action="mailto:contact@branebridge.com"
          >
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Company" />
            <textarea placeholder="Message" />
            <button type="submit">Send</button>
          </form>
        </CardContent>
        <CardFooter>
          <p>
            Email:{" "}
            <a href="mailto:contact@branebridge.com">contact@branebridge.com</a>
          </p>
        </CardFooter>
      </Card>
    </Section>
  );
}

function Footer() {
  return (
    <Section className="bg-black text-white text-sm" id="footer">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <BraneBridgeLogo />
          <p>
            BraneBridge builds custom software solutions for the logistics
            industry, with an emphasis on AI adoption.
          </p>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="bg-black text-white"
          >
            <Link href="https://www.linkedin.com/in/shelsoloa/">
              <Linkedin />
            </Link>
          </Button>
        </div>
        <div className="hidden lg:block">
          {/* TODO navigation links here */}
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold">Contact Info</h1>
          <div className="flex flex-col">
            <p className="text-muted-foreground">email</p>
            <a href="mailto:contact@branebridge.com">contact@branebridge.com</a>
          </div>
          <div className="flex flex-col">
            <p className="text-muted-foreground">phone</p>
            <a href="tel:+14169999999">+1 (416) 999-9999</a>
          </div>
          <div className="flex flex-col">
            <p className="text-muted-foreground">location</p>
            <p>Toronto, ON, Canada</p>
          </div>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-muted-foreground">
        <p>Copyright © {new Date().getFullYear()} BraneBridge</p>
        <div className="hidden lg:block">&nbsp;</div>
        <div className="flex gap-4">
          {/* TODO: Add privacy policy, terms of service, and cookie policy */}
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </Section>
  );
}

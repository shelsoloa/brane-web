import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Bot, Cloudy, Linkedin, TruckElectric, Workflow } from "lucide-react";
import { ContactForm } from "./forms";

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
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl font-bold uppercase">{children}</h1>;
}

function Hero() {
  return (
    <div className="h-[50vh]" id="hero">
      <div className="w-full h-full flex items-center relative px-8">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="max-w-7xl mx-auto w-full">
          <p className="w-1/2 text-left text-xl text-primary-foreground font-bold">
            Bring the power of AI, Data Engineering, & Cloud Computing to your
            logistics business.
          </p>
        </div>
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
    <Section className="bg-white flex flex-col gap-4 w-full" id="services">
      <SectionTitle>Solutions & Services</SectionTitle>

      <Tabs
        orientation="vertical"
        defaultValue="agents"
        className="w-full flex flex-col sm:flex-row items-start justify-center transition-none duration-0"
      >
        <TabsList className="shrink-0 grid grid-cols-1 h-auto w-full sm:w-fit gap-1 bg-muted sm:rounded-r-none border border-b-0 rounded-b-none sm:border-b sm:rounded-bl sm:border-r-0 border-black">
          <TabsTrigger
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-black data-[state=active]:border-2 justify-start px-3 py-1.5"
            value="agents"
          >
            <Bot className="w-4 h-4 me-2" /> AI Agents
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-black data-[state=active]:border-2 justify-start px-3 py-1.5"
            value="rag"
          >
            <Workflow className="w-4 h-4 me-2" /> AI Tooling & RAG
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-black data-[state=active]:border-2 justify-start px-3 py-1.5"
            value="cloud"
          >
            <Cloudy className="w-4 h-4 me-2" /> Cloud Engineering
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-black data-[state=active]:border-2 justify-start px-3 py-1.5"
            value="product"
          >
            <TruckElectric className="w-4 h-4 me-2" /> MVP Development
          </TabsTrigger>
        </TabsList>

        <div className="min-h-40 flex items-center justify-center w-full border sm:rounded-tl-none rounded-md rounded-t-none sm:rounded-t font-medium px-4 sm:px-8 border-black pb-4">
          <TabsContent key="agents" value="agents" className="h-full">
            <h2 className="text-2xl font-bold">
              AI Agents for Logistics Automation
            </h2>
            <p className="mt-4">
              We design, develop, and deploy custom AI agents purpose-built for
              logistics operations. From <b>automating load matching</b> to{" "}
              <b>intelligent dispatch coordination</b>, our agents{" "}
              <b>reduce manual workflows</b> and{" "}
              <b>drive operational efficiency</b>.
            </p>
            <h3 className="text-lg font-bold mt-4">Use Cases</h3>
            <ul className="list-disc list-inside pl-4">
              <li>Load matching automation</li>
              <li>Dispatch optimization</li>
              <li>ETA prediction and routing support</li>
              <li>Customer communication agents</li>
              <li>Rate negotiation bots</li>
            </ul>
            <h3 className="text-lg font-bold mt-4">Outcome</h3>
            <p>
              Lower operational overhead, faster response times, scalable
              logistics execution.
            </p>
          </TabsContent>
          <TabsContent key="rag" value="rag" className="h-full">
            <h2 className="text-2xl font-bold">AI Tooling & RAG Pipelines</h2>
            <p className="mt-4">
              Build intelligent AI tools that power internal logistics
              workflows. We specialize in Retrieval-Augmented Generation (RAG)
              pipelines to transform unstructured documents into actionable
              insights.
            </p>
            <h3 className="text-lg font-bold mt-4">Use Cases</h3>
            <ul className="list-disc list-inside pl-4">
              <li>
                Instant retrieval from rate sheets, bills of lading, contracts
              </li>
              <li>Document Q&A over SOPs and compliance policies</li>
              <li>AI assistants for onboarding new drivers or customers</li>
            </ul>
            <h3 className="text-lg font-bold mt-4">Outcome</h3>
            <p>
              Knowledge access in seconds, fewer human errors, improved training
              and compliance.
            </p>
          </TabsContent>
          <TabsContent key="cloud" value="cloud" className="h-full">
            <h2 className="text-2xl font-bold">
              Cloud Engineering for Logistics Platforms
            </h2>
            <p className="mt-4">
              Optimize infrastructure for uptime, scale, and cost. Our certified
              engineers bring expertise in cloud-native architecture tailored to
              logistics environments.
            </p>
            <h3 className="text-lg font-bold mt-4">Use Cases</h3>
            <ul className="list-disc list-inside pl-4">
              <li>GCP/AWS cost optimization</li>
              <li>Fleet tracking platform infrastructure</li>
              <li>Event-driven architecture for TMS/ERP systems</li>
              <li>Scalable backend systems for freight marketplaces</li>
            </ul>
            <h3 className="text-lg font-bold mt-4">Outcome</h3>
            <p>
              Faster systems, lower cloud bills, hardened backend for logistics
              uptime.
            </p>
          </TabsContent>
          <TabsContent key="product" value="product" className="h-full">
            <h2 className="text-2xl font-bold">Logistics MVP Development</h2>
            <p className="mt-4">
              Rapidly develop and launch logistics software products. Whether
              you&apos;re validating a marketplace, building a new TMS, or
              prototyping a visibility dashboard—our team delivers.
            </p>
            <h3 className="text-lg font-bold mt-4">Use Cases</h3>
            <ul className="list-disc list-inside pl-4">
              <li>Freight booking MVPs</li>
              <li>Internal dispatch dashboards</li>
              <li>Real-time tracking applications</li>
              <li>Customer portals for rates and delivery updates</li>
            </ul>
            <h3 className="text-lg font-bold mt-4">Outcome</h3>
            <p>
              Get to market faster, iterate on feedback, launch with confidence.
            </p>
          </TabsContent>
        </div>
      </Tabs>
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
      <Card className="max-w-4xl mx-auto border-black border-2">
        <CardHeader>
          <CardTitle>
            <SectionTitle>Contact Us</SectionTitle>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
        <CardFooter>
          <div className="flex w-full">
            <p className="text-sm text-muted-foreground text-right block w-full">
              or email us directly at{" "}
              <a
                className="underline hover:text-primary"
                href="mailto:contact@branebridge.com"
              >
                contact@branebridge.com
              </a>
            </p>
          </div>
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
            {/* TODO: add phone number */}
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

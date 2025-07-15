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
import {
  Bot,
  Cloudy,
  Linkedin,
  Mail,
  ShieldCheck,
  TruckElectric,
  Workflow,
} from "lucide-react";
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

function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`text-4xl font-bold uppercase mb-8 ${className}`}>
      {children}
    </h1>
  );
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
          <div className="flex flex-col gap-4 w-full sm:w-2/3 md:w-1/2">
            <h1 className="text-2xl font-bold mt-4 text-white uppercase">
              BraneBridge is building for Canada&apos;s Industrial Backbone
            </h1>

            <p className="text-lg text-white/90">
              We work with forward-thinking companies across{" "}
              <b>logistics, manufacturing, and industrial operations</b>.
              Whether you&apos;re a growing freight brokerage or a steel plant
              modernizing your systems,{" "}
              <b>we build software to move you forward</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhoAreWe() {
  return (
    <Section className="bg-black text-white py-16 flex gap-4" id="agency-about">
      <SectionTitle className="mb-0">
        Your new partner in <span className="text-primary">AI Integration</span>
        , <span className="text-primary">Data Engineering</span>,{" "}
        <span className="text-primary">Cloud Engineering</span>, and{" "}
        <span className="text-primary">Product Development</span>.
      </SectionTitle>
      <div className="flex justify-end">
        <Button variant="default" size="lg">
          <a href="#contact">Get a Quote</a>
        </Button>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section
      className="bg-white flex flex-col gap-4 w-full py-16"
      id="services"
    >
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
          <TabsTrigger
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-black data-[state=active]:border-2 justify-start px-3 py-1.5"
            value="private"
          >
            <ShieldCheck className="w-4 h-4 me-2" /> Private AI
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
              prototyping a visibility dashboard - our team delivers.
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
          <TabsContent key="private" value="private" className="h-full">
            <h2 className="text-2xl font-bold">
              Private AI Deployments for Logistics
            </h2>
            <p className="mt-4">
              For companies with strict data privacy, compliance, or IT security
              requirements, we offer fully private deployments of AI systems -
              on your cloud, under your control.
            </p>
            <h3 className="text-lg font-bold mt-4">Use Cases</h3>
            <ul className="list-disc list-inside pl-4">
              <li>On-premise or VPC-hosted AI agents</li>
              <li>RAG systems behind company firewall</li>
              <li>
                Sensitive load, client, or routing data never leaves your
                environment
              </li>
              <li>SOC 2-aligned architectural setup</li>
            </ul>
            <h3 className="text-lg font-bold mt-4">Outcome</h3>
            <p>
              Full control over data, compliance-ready AI tools, zero
              third-party exposure.
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
      <SectionTitle>Industries We Serve</SectionTitle>

      <h1 className="text-2xl font-bold mt-4">
        Building for Canada&apos;s Industrial Backbone
      </h1>

      <p>
        We work with forward-thinking companies across logistics, manufacturing,
        and industrial operations. Whether you&apos;re a growing freight
        brokerage or a steel plant modernizing your systems, we build software
        to move you forward.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <Card>
          <CardHeader className="text-xl md:text-lg lg:text-xl font-bold uppercase">
            Logistics & Freight
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1465844880937-7c02addc633b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&&sat=-100"
              alt="Several cargo containers"
              width={800}
              height={600}
              className="rounded-sm shadow-lg"
            />
            <h3 className="text-lg font-bold mt-4">Who we serve:</h3>
            <p>Freight brokerages, 3PLs, carrier networks, dispatch centers.</p>
            <h3 className="text-lg font-bold mt-4">What we build:</h3>
            <p>
              AI agents for load matching, dispatch tools, internal RAG
              assistants, and cloud-native TMS infrastructure.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-xl md:text-lg lg:text-xl font-bold uppercase">
            Warehousing & Distribution
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&sat=-100"
              alt="Warehouse"
              width={800}
              height={600}
              className="rounded-sm shadow-lg"
            />
            <h3 className="text-lg font-bold mt-4">Who we serve:</h3>
            <p>
              Warehousing providers, 3PLs, distribution centers, fulfillment
              teams.
            </p>
            <h3 className="text-lg font-bold mt-4">What we build:</h3>
            <p>
              Scheduling bots, inventory system integrations, cloud scaling for
              WMS platforms, and AI document search for inbound/outbound
              logistics.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-xl md:text-lg lg:text-xl font-bold uppercase">
            Manufacturing & Industrial Operations
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1647343137860-69ccd12a61c6?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&sat=-100"
              alt="Steel production"
              width={800}
              height={600}
              className="rounded-sm shadow-lg"
            />
            <h3 className="text-lg font-bold mt-4">Who we serve:</h3>
            <p>
              Steel producers, component fabricators, supply chain operators.
            </p>
            <h3 className="text-lg font-bold mt-4">What we build:</h3>
            <p>
              AI document systems for SOPs and compliance, internal workflow
              agents, and cloud optimization for MES/ERP integrations.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-xl md:text-lg lg:text-xl font-bold uppercase">
            Construction & Real Estate
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&sat=-100"
              alt="Construction site"
              width={800}
              height={600}
              className="rounded-sm shadow-lg"
            />
            <h3 className="text-lg font-bold mt-4">Who we serve:</h3>
            <p>Contractors, site managers, real estate development teams.</p>
            <h3 className="text-lg font-bold mt-4">What we build:</h3>
            <p>
              AI tools for vendor management, compliance document retrieval,
              permit Q&A agents, and platform backend development.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-xl md:text-lg lg:text-xl font-bold uppercase">
            Special Projects & Tech-Enabled SMBs
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1616386261012-8a328c89d5b6?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&sat=-100"
              alt="Special Projects"
              width={800}
              height={600}
              className="rounded-sm shadow-lg"
            />
            <h3 className="text-lg font-bold mt-4">Who we serve:</h3>
            <p>
              Startups, internal innovation teams, cross-industry operators
              modernizing their stack.
            </p>
            <h3 className="text-lg font-bold mt-4">What we build:</h3>
            <p>
              Custom MVPs, internal data agents, proof-of-concept RAG tools,
              backend systems from zero to launch.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-bold mt-8 text-gray-400 text-center">
        If your business moves goods, coordinates teams, or manages complex
        operations, we can build what you need.
      </h2>
    </Section>
  );
}

function AboutUs() {
  return (
    <Section className="" id="team">
      <SectionTitle>Who are we?</SectionTitle>
      <p>
        We are a team of experienced Canadian engineers and product managers who
        are passionate about building software that helps the Canadian{" "}
        <span className="underline">Logistics</span> industry grow.
      </p>

      <h2 className="text-2xl font-bold mt-8">Meet our Founder</h2>
      <div className="flex flex-col gap-4 mt-4 sm:flex-row-reverse">
        <div className="flex flex-col gap-1 items-center justify-center text-center sm:w-1/3">
          <Image
            src="/images/sheldon-headshot.jpg"
            alt="Founder headshot, Sheldon Soloa"
            width={200}
            height={200}
            className="rounded-md"
          />
          <div className="flex flex-row gap-1">
            <a
              className="text-sm underline"
              href="mailto:sheldon@branebridge.com"
            >
              <Mail className="w-4 h-4 me-2" />
            </a>
            <Link
              className="text-sm underline"
              href="https://www.linkedin.com/in/shelsoloa/"
            >
              <Linkedin className="w-4 h-4 me-2" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:w-2/3">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold">Sheldon Soloa</h3>
            <p className="text-muted-foreground">Founder & CEO</p>
          </div>
          <p className="text-sm">
            Sheldon is a Hamilton-born, Toronto-based software engineer and
            technical leader with over a decade of experience architecting
            cloud-native systems and delivering scalable software solutions.
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
            <SectionTitle className="mb-0">Contact Us</SectionTitle>
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

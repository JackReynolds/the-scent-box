"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Droplet,
  CreditCard,
  Sprout,
  ChevronRight,
  Menu,
  X,
  Tv,
  Facebook,
  Instagram,
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Droplet className="h-6 w-6 text-primary" />
            <span>The Scent Box</span>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium hover:text-primary hover:cursor-pointer hover:text-primary/80"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium hover:text-primary hover:cursor-pointer hover:text-primary/80"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("highlights")}
              className="text-sm font-medium hover:text-primary hover:cursor-pointer hover:text-primary/80"
            >
              Highlights
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="hover:cursor-pointer hover:bg-primary/80"
            >
              Contact Us
            </Button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-6 bg-background border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-sm font-medium hover:text-primary py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-sm font-medium hover:text-primary py-2"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("highlights")}
                className="text-sm font-medium hover:text-primary py-2"
              >
                Highlights
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover:text-primary py-2"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Redefining Fragrance Experiences
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The Scent Box brings premium aftershaves to your location.
                    Select, pay, and spray with our innovative dispenser.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="inline-flex h-10 items-center justify-center hover:cursor-pointer hover:bg-primary/80"
                    onClick={() => scrollToSection("how-it-works")}
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="inline-flex h-10 items-center justify-center hover:cursor-pointer hover:bg-gray-100"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative h-[400px] w-full lg:w-[450px] overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl" />
                  <div className="flex justify-center items-center h-full text-center p-6">
                    <p className="text-lg font-medium">
                      Product Image Placeholder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  How It Works
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Experience premium fragrances with our simple three-step
                  process
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12 justify-items-center max-w-5xl mx-auto">
              <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg w-full">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Sprout className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Select Your Scent</h3>
                <p className="text-muted-foreground text-center">
                  Choose from our curated collection of premium aftershaves on
                  our interactive display
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg w-full">
                <div className="p-3 bg-primary/10 rounded-full">
                  <CreditCard className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Quick Payment</h3>
                <p className="text-muted-foreground text-center">
                  Make a contactless payment with your card or mobile device
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg w-full">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Droplet className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Enjoy Your Spray</h3>
                <p className="text-muted-foreground text-center">
                  Receive the perfect amount of your selected fragrance
                  instantly
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  What People Are Saying
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Hear from businesses and customers who have experienced The
                  Scent Box
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12 max-w-5xl mx-auto">
              <div className="flex flex-col p-6 bg-background rounded-lg shadow-sm h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-secondary" />
                  <div>
                    <h4 className="font-semibold">Sarah Thompson</h4>
                    <p className="text-sm text-muted-foreground">
                      Luxury Hotel Manager
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;The Scent Box has been a game-changer for our hotel
                  lobby. Guests love the premium fragrance experience and it
                  adds a unique touch to our services.&quot;
                </p>
              </div>
              <div className="flex flex-col p-6 bg-background rounded-lg shadow-sm h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-secondary" />
                  <div>
                    <h4 className="font-semibold">James Wilson</h4>
                    <p className="text-sm text-muted-foreground">
                      Regular Customer
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;I love being able to try different aftershaves without
                  committing to buying a full bottle. The selection is fantastic
                  and the process is so simple.&quot;
                </p>
              </div>
              <div className="flex flex-col p-6 bg-background rounded-lg shadow-sm h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-secondary" />
                  <div>
                    <h4 className="font-semibold">Emma Davis</h4>
                    <p className="text-sm text-muted-foreground">
                      Nightclub Owner
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;Our customers appreciate the additional service, and the
                  advertising display has been a great revenue stream for
                  partnerships with fragrance brands.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section id="highlights" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Campaign Highlights
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Featured advertising campaigns from our display screen
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12 max-w-5xl mx-auto">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Summer Collection
                    </h3>
                    <p className="text-white/80">
                      Featured luxury brand campaign
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Limited Edition
                    </h3>
                    <p className="text-white/80">Exclusive fragrance launch</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Holiday Special
                    </h3>
                    <p className="text-white/80">Seasonal promotion campaign</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-muted my-10 py-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              FAQ
            </h2>
            <p className="text-muted-foreground">
              If you can&apos;t find the answer you&apos;re looking for, please
              contact us directly via our form or email info@thescentbox.ie
            </p>
            <div className="max-w-5xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-base md:text-lg">
                    How does the Scent Box work?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-base md:text-lg">
                    How can I get in touch as an advertiser?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-base md:text-lg">
                    How do I get a Scent Box in my establishment?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it
                    if you prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-12 md:py-24 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Get Your Own Scent Box
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Interested in having a Scent Box in your establishment? Fill
                    out the form and we&apos;ll get back to you.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Droplet className="h-5 w-5 text-primary" />
                    <span>Premium Fragrance Selection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tv className="h-5 w-5 text-primary" />
                    <span>40-inch Advertising Display</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <span>Seamless Payment Integration</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company (Optional)
                    </label>
                    <Input id="company" placeholder="Your company" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your needs"
                    />
                  </div>
                </div>
                <Button
                  className="w-full hover:cursor-pointer hover:bg-primary/80"
                  onClick={() => {
                    toast.success("Message sent successfully");
                  }}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Droplet className="h-5 w-5 text-primary" />
              <span>The Scent Box</span>
            </div>
            <div className="flex gap-4 justify-center">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} The Scent Box. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

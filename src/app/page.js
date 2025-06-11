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
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Droplet,
  CreditCard,
  Sprout,
  ChevronRight,
  Menu,
  X,
  Tv,
  Instagram,
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-advance carousel every 3 seconds
    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    // Clean up interval on unmount
    return () => clearInterval(autoplayInterval);
  }, [api]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
      setMobileMenuOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            {/* <Droplet className="h-6 w-6 text-primary" /> */}
            <Image
              src="/images/scentbox-logo.png"
              alt="The ScentBox"
              className="ml-3 md:ml-10"
              width={32}
              height={32}
            />
            <span>The ScentBox</span>
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
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full"
              >
                Contact Us
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
                    The ScentBox brings premium aftershaves to your location.
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
                <div className="relative w-full lg:h-[700px] lg:w-[700px] overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl" />
                  {/* <div className="flex justify-center items-center h-full text-center p-6">
                    <p className="text-lg font-medium">
                      Product Image Placeholder
                    </p>
                  </div> */}
                  {/* <Image
                    src="/images/scentbox-full-wide.jpg"
                    alt="The Scent Box"
                    className="h-full w-full object-cover"
                    width={450}
                    height={400}
                  /> */}
                  <Carousel
                    setApi={setApi}
                    className="w-full h-full"
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                  >
                    <CarouselContent>
                      <CarouselItem>
                        <div className="h-full w-full flex items-center justify-center">
                          <Image
                            src="/images/scentbox-full-long-best.jpg"
                            alt="The ScentBox"
                            className="object-cover w-full h-full"
                            width={450}
                            height={600}
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="h-full w-full flex items-center justify-center">
                          <Image
                            src="/images/scentbox-select-aftershave.jpg"
                            alt="The ScentBox"
                            className="object-cover w-full h-full"
                            width={450}
                            height={600}
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="h-full w-full flex items-center justify-center">
                          <Image
                            src="/images/scentbox-full-long.jpg"
                            alt="The ScentBox"
                            className="object-cover w-full h-full"
                            width={450}
                            height={600}
                          />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>
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
                  ScentBox
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12 max-w-5xl mx-auto">
              <div className="flex flex-col p-6 bg-background rounded-lg shadow-sm h-full">
                <div className="flex items-center gap-4 mb-4">
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
                    className="text-primary/60"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold">Liz Howe</h4>
                    {/* <p className="text-sm text-muted-foreground">
                      Luxury Hotel Manager
                    </p> */}
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;Thank you so much for the amazing ScentBox at our
                  engagement party — everyone loved it! The whole process was
                  seamless. We&apos;ll definitely be recommending you and using
                  you again!&quot;
                </p>
              </div>
              <div className="flex flex-col p-6 bg-background rounded-lg shadow-sm h-full">
                <div className="flex items-center gap-4 mb-4">
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
                    className="text-primary/60"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold">Shona Brown</h4>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;The ScentBox was a huge hit at our beauty show. It added
                  a memorable, interactive touch and drew lots of interest. The
                  screen was great for attracting visitors. We&apos;ll
                  definitely use it again!&quot;
                </p>
              </div>
              <div className="flex flex-col p-6 bg-background rounded-lg shadow-sm h-full">
                <div className="flex items-center gap-4 mb-4">
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
                    className="text-primary/60"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold">Mahon Recovery</h4>
                    {/* <p className="text-sm text-muted-foreground">
                      Nightclub Owner
                    </p> */}
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;Thanks for the ad spot on The ScentBox — we&apos;ve seen
                  a big increase in calls and enquiries since it went live.
                  Looking forward to continuing working with you!&quot;
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
              <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Image
                  src="/images/campaign1.jpg"
                  alt="Summer Collection"
                  className="object-cover w-full h-full"
                  width={450}
                  height={600}
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">Disney+</h3>
                    <p className="text-white/80">
                      Featured streaming service campaign.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Image
                  src="/images/campaign2.jpg"
                  alt="Limited Edition"
                  className="object-cover w-full h-full"
                  width={450}
                  height={600}
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">Quit.ie</h3>
                    <p className="text-white/80">
                      Campaign providing assistance to smokers trying to quit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Image
                  src="/images/campaign3.jpg"
                  alt="Holiday Special"
                  className="object-cover w-full h-full"
                  width={450}
                  height={600}
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">RSA</h3>
                    <p className="text-white/80">
                      Road safety authority campaign for slower speeds on rural
                      roads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-muted my-10 py-20 px-5 md:px-0">
          <div className="flex flex-col items-center justify-center space-y-4">
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
                    How does the ScentBox work?
                  </AccordionTrigger>
                  <AccordionContent>
                    The ScentBox is a pay-per-spray fragrance device that allows
                    customers to select and enjoy their favorite fragrances in a
                    unique and engaging way. The ScentBox also features a 43
                    inch display screen that can be used to display brand
                    advertising campaigns. The ScentBox can be installed for
                    free in permanent locations, or rented for a daily rate. For
                    more information, please contact us at{" "}
                    <a
                      href="mailto:info@thescentbox.ie"
                      className="text-primary hover:underline"
                    >
                      info@thescentbox.ie
                    </a>{" "}
                    to discuss options suited to your needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-base md:text-lg">
                    How can I get in touch as an advertiser?
                  </AccordionTrigger>
                  <AccordionContent>
                    Please email our team at info@thescentbox.ie to discuss your
                    advertising needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-base md:text-lg">
                    How do I get a ScentBox in my establishment?
                  </AccordionTrigger>
                  <AccordionContent>
                    Please email our team at info@thescentbox.ie to discuss next
                    steps.
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
                    Get Your Own ScentBox
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Interested in having a ScentBox in your establishment? Fill
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
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company (Optional)
                    </label>
                    <Input
                      id="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your needs"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <Button
                  className="w-full hover:cursor-pointer hover:bg-primary/80"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
              <Image
                src="/images/scentbox-logo.png"
                alt="The ScentBox"
                className="h-5 w-5"
                width={32}
                height={32}
              />
              <span>The ScentBox</span>
            </div>
            <div className="flex gap-4 justify-center">
              {/* <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button> */}
              <Button
                variant="ghost"
                size="icon"
                aria-label="Instagram"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/thescentbox.ie/",
                    "_blank"
                  )
                }
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} The ScentBox. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

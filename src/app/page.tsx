import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Collections from "@/components/collections";
import OurPromise from "@/components/promise";
import Services from "@/components/services";
import Brands from "@/components/brands";
import Testimonials from "@/components/testimonials";
import BookCta from "@/components/book-cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";
import MobileActionBar from "@/components/mobile-action-bar";
import BookingModal from "@/components/booking-modal";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Collections />
        <OurPromise />
        <Services />
        <Brands />
        <Testimonials />
        <BookCta />
        <Contact />
      </main>
      <Footer />
      {/* Clearance for the mobile sticky action bar (matches footer bg) */}
      <div aria-hidden className="h-[calc(4.75rem+env(safe-area-inset-bottom,0px))] bg-brand-blue-deep lg:hidden" />
      <FloatingActions />
      <MobileActionBar />
      <BookingModal />
    </>
  );
}

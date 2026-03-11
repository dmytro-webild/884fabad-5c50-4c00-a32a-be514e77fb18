"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Sparkles, Zap, Heart, Star, CheckCircle, HelpCircle, Cake, Crown } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="mediumLarge"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Design", id: "features" },
            { name: "Gallery", id: "products" },
            { name: "Reviews", id: "testimonials" },
            { name: "Pricing", id: "pricing" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Order Custom Cake", href: "contact" }}
          brandName="Sweet Layers"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="Design Your Dream Cake"
          description="Create a custom masterpiece with our interactive cake builder. Choose size, flavor, frosting, and decorations—then watch it come to life with delightful animations that celebrate the artistry of baking."
          tag="Premium Custom Cakes"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Order Your Custom Cake", href: "contact" },
            { text: "Explore Gallery", href: "products" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/close-view-pink-cake-background-with-texture-crumpled-paper_1268-19878.jpg"
          imageAlt="Luxury custom cake showcase"
          imagePosition="right"
          testimonials={[
            {
              name: "Sarah Mitchell",              handle: "Event Planner",              testimonial: "Sweet Layers created the most stunning cake for our wedding. The customization options and attention to detail were absolutely exceptional.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-woman-standing-white_114579-77602.jpg?_wi=1"
            },
            {
              name: "James Robertson",              handle: "Corporate Client",              testimonial: "Elegant, intuitive, and delicious. The interactive builder made ordering seamless for our company anniversary celebration.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/male-executive-with-glasses_1098-760.jpg?_wi=1"
            },
            {
              name: "Emma Davis",              handle: "Bride",              testimonial: "My dream cake became reality. Every detail was perfect, and the delivery was impeccable. Highly recommend Sweet Layers.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-young-businesswoman-with-folded-arms_1262-1775.jpg?_wi=1"
            }
          ]}
          testimonialRotationInterval={5000}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          mediaAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          title="Interactive Cake Builder"
          description="Experience the magic of designing your cake in real-time with our intuitive builder interface."
          tag="Featured Innovation"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[{ text: "Start Designing", href: "contact" }]}
          buttonAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Customize Every Layer",              description: "Select from premium flavors, frosting styles, and decorative elements to create your unique masterpiece.",              phoneOne: { imageSrc: "http://img.b2bpic.net/free-vector/mobile-app-concept_52683-5723.jpg?_wi=1" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-vector/crowdfunding-app-concept_52683-43974.jpg?_wi=1" }
            },
            {
              id: 2,
              title: "Real-Time Preview",              description: "Watch your cake design come to life with smooth animations and visualizations of your custom creation.",              phoneOne: { imageSrc: "http://img.b2bpic.net/free-vector/mobile-app-concept_52683-5723.jpg?_wi=2" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-vector/crowdfunding-app-concept_52683-43974.jpg?_wi=2" }
            }
          ]}
          showStepNumbers={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Our Premium Collection"
          description="Explore our signature cakes, each crafted with premium ingredients and artistic excellence."
          tag="Gallery"
          tagIcon={Heart}
          tagAnimation="slide-up"
          buttons={[{ text: "Order Custom Design", href: "contact" }]}
          buttonAnimation="slide-up"
          products={[
            {
              id: "1",              name: "Elegant Ivory Dream",              price: "$85-$185",              imageSrc: "http://img.b2bpic.net/free-photo/delicious-cake-with-fruits_23-2150661079.jpg",              imageAlt: "Elegant white wedding cake",              initialQuantity: 1
            },
            {
              id: "2",              name: "Dark Chocolate Decadence",              price: "$75-$165",              imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-woman-inserting-spoon-ice-cream-sandwich-plate-table_23-2148161744.jpg",              imageAlt: "Luxury chocolate cake with berries",              initialQuantity: 1
            },
            {
              id: "3",              name: "Blush Romance",              price: "$80-$175",              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-desserts-slate-with-cocoa-powder-sieve_23-2148689861.jpg",              imageAlt: "Delicate pink custom cake",              initialQuantity: 1
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Loved by Our Customers"
          description="Discover why event planners, busy professionals, and celebration enthusiasts choose Sweet Layers."
          tag="Customer Stories"
          tagIcon={Star}
          tagAnimation="slide-up"
          buttons={[{ text: "Share Your Story", href: "contact" }]}
          buttonAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Rachel Thompson",              handle: "Wedding Planner",              testimonial: "The customization options are endless, and the quality is outstanding. My clients rave about their cakes.",              imageSrc: "http://img.b2bpic.net/free-photo/confident-woman-standing-white_114579-77602.jpg?_wi=2"
            },
            {
              id: "2",              name: "Michael Chen",              handle: "Corporate Events",              testimonial: "Perfect for our company celebrations. Professional, elegant, and consistently delicious.",              imageSrc: "http://img.b2bpic.net/free-photo/male-executive-with-glasses_1098-760.jpg?_wi=2"
            },
            {
              id: "3",              name: "Jessica Williams",              handle: "Bride",              testimonial: "The interactive builder was so fun to use. Our cake was absolutely stunning and tasted divine.",              imageSrc: "http://img.b2bpic.net/free-photo/confident-young-businesswoman-with-folded-arms_1262-1775.jpg?_wi=2"
            },
            {
              id: "4",              name: "David Martinez",              handle: "Event Host",              testimonial: "Sweet Layers exceeded our expectations. Beautiful presentation and exceptional customer service.",              imageSrc: "http://img.b2bpic.net/free-photo/attractive-businessman-with-crossed-arms_1139-348.jpg"
            },
            {
              id: "5",              name: "Sophie Laurent",              handle: "Fashion Influencer",              testimonial: "Absolutely Instagrammable! Every detail is designed for social media perfection.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-66975.jpg"
            },
            {
              id: "6",              name: "Christopher Blake",              handle: "Restaurant Owner",              testimonial: "We partner with Sweet Layers for special events. Their cakes are works of edible art.",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-serious-businessman-white-shirt-looking-camera-standing-confident_1258-112076.jpg"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          topMarqueeDirection="left"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Celebration Professionals"
          description="Join premium event planners, upscale venues, and discerning clients who choose Sweet Layers."
          tag="Partners"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          names={["Elite Weddings Co", "Luxury Events Studio", "Gourmet Catering Partners", "Premium Event Planning", "Fine Dining Establishments", "Celebrity Event Management", "Boutique Party Design", "Upscale Venue Network"]}
          logos={[
            "http://img.b2bpic.net/free-vector/floral-wedding-stationery-collection_23-2148664593.jpg",            "http://img.b2bpic.net/free-photo/top-view-wedding-menu_23-2149384882.jpg",            "http://img.b2bpic.net/free-vector/hand-drawn-flat-design-law-firm-brochure_23-2149357172.jpg",            "http://img.b2bpic.net/free-vector/bakery-products-vertical-business-card-template_23-2150685660.jpg",            "http://img.b2bpic.net/free-vector/floral-wedding-landing-page-template_23-2148192961.jpg",            "http://img.b2bpic.net/free-photo/woman-with-map_23-2148579545.jpg",            "http://img.b2bpic.net/free-vector/realistic-modern-business-card-template_23-2150364641.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardEight
          title="Transparent Pricing"
          description="Premium quality at every tier. Choose the perfect plan for your celebration."
          tag="Pricing Options"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[{ text: "View All Options", href: "contact" }]}
          buttonAnimation="slide-up"
          plans={[
            {
              id: "classic",              badge: "Perfect Start",              badgeIcon: Heart,
              price: "From $65",              subtitle: "Essential custom cake experience",              buttons: [{ text: "Start Design", href: "contact" }],
              features: [
                "2-3 layer custom cake",                "Premium flavor selection",                "Basic decorations included",                "Local delivery within 5 miles",                "48-hour notice required"
              ]
            },
            {
              id: "premium",              badge: "Most Popular",              badgeIcon: Star,
              price: "From $125",              subtitle: "Premium artistry for special moments",              buttons: [{ text: "Create Masterpiece", href: "contact" }],
              features: [
                "3-4 layer premium cake",                "Unlimited flavor combinations",                "Premium decorative elements",                "Expanded delivery area (10 miles)",                "Custom design consultation",                "36-hour notice required"
              ]
            },
            {
              id: "luxury",              badge: "Ultimate Experience",              badgeIcon: Crown,
              price: "From $200",              subtitle: "Bespoke creations for unforgettable events",              buttons: [{ text: "Schedule Consultation", href: "contact" }],
              features: [
                "4-6 layer bespoke masterpiece",                "Unlimited customization",                "Premium specialty tiers",                "Extended delivery radius",                "Dedicated pastry consultation",                "Tasting session included",                "24-hour notice option"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about ordering your perfect custom cake."
          tag="Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How far in advance should I order?",              content: "We recommend ordering at least 48 hours in advance for standard custom cakes. Premium and luxury tier orders benefit from 2-3 weeks notice to ensure perfect execution. Rush orders (24-hour notice) may be available for premium tiers—contact us for availability."
            },
            {
              id: "2",              title: "Can I use the interactive cake builder on mobile?",              content: "Absolutely! Our cake builder is fully responsive and optimized for mobile devices. You can design your masterpiece on any device and save your design to complete your order whenever you're ready."
            },
            {
              id: "3",              title: "What flavor combinations do you offer?",              content: "We offer a carefully curated selection of premium flavors including classic vanilla, dark chocolate, strawberry, lemon, carrot cake, red velvet, and seasonal specialties. Each tier can feature different flavors, and we accommodate dietary preferences with advance notice."
            },
            {
              id: "4",              title: "Do you offer sugar-free or allergen-free options?",              content: "Yes! We can accommodate most dietary restrictions including sugar-free, gluten-free, vegan, and allergen-conscious options. Please inform us during the consultation so we can recommend the best alternatives and ensure proper handling."
            },
            {
              id: "5",              title: "What's your delivery policy?",              content: "We offer local delivery within specified radius based on your tier. Classic tier: 5 miles, Premium tier: 10 miles, Luxury tier: extended radius available. Delivery is included in the price. We handle setup and ensure your cake arrives in perfect condition."
            },
            {
              id: "6",              title: "Can I see my design before final confirmation?",              content: "Yes! Our interactive builder provides real-time visualization of your cake design. For luxury tiers, we offer a complimentary tasting session where you can finalize flavors and see mockups of your custom decoration designs."
            },
            {
              id: "7",              title: "What if I'm not satisfied with the final product?",              content: "Your satisfaction is our priority. We stand behind our work with a satisfaction guarantee. If anything falls short of expectations, contact us immediately so we can make it right."
            },
            {
              id: "8",              title: "Do you offer custom topper designs?",              content: "Absolutely! We can create custom toppers, personalized messages, and bespoke decorative elements. Luxury tier includes unlimited customization. Premium tier includes standard customizations. Classic tier has basic personalization options."
            }
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Ready to Create?"
          title="Start Your Cake Journey Today"
          description="Join hundreds of satisfied customers who've brought their cake dreams to life. Use our interactive builder, consult with our pastry artists, or explore custom options tailored to your celebration."
          tagIcon={Cake}
          tagAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="your@email.com"
          buttonText="Start Designing"
          termsText="We respect your privacy. Unsubscribe anytime. By signing up, you'll receive exclusive offers and design inspiration from Sweet Layers."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",              items: [
                { label: "Design Builder", href: "features" },
                { label: "Gallery", href: "products" },
                { label: "Pricing", href: "pricing" },
                { label: "Custom Orders", href: "contact" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Sweet Layers", href: "#" },
                { label: "Testimonials", href: "testimonials" },
                { label: "Blog & Inspiration", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact Us", href: "contact" },
                { label: "Delivery Info", href: "#" },
                { label: "Privacy Policy", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Sweet Layers | Premium Custom Cakes"
        />
      </div>
    </ThemeProvider>
  );
}
import { HeroSection } from "@/components/hero-section"
import { MarqueeSection } from "@/components/marquee-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <FeaturedProjects />
      <SiteFooter />
    </main>
  )
}

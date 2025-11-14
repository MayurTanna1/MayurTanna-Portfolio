import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ARShowcase from '@/components/ARShowcase';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />
      <ThemeToggle />
      <Hero />
      <ARShowcase />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/blog', label: 'Blog' },
  { href: '/recommendations', label: 'AI Planner' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive =
      href === '/' ? pathname === href : pathname.startsWith(href);
    return (
      <Link
        href={href}
        className={cn(
          'text-foreground/80 hover:text-foreground transition-colors text-lg md:text-sm',
          isActive && 'text-foreground font-semibold'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-headline font-bold text-lg">
          <Globe className="h-7 w-7 text-primary" />
          <span>Wanderlust Wonders</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw]">
              <SheetHeader>
                <Link href="/" className="flex items-center gap-2 font-headline font-bold text-lg mb-8">
                  <Globe className="h-7 w-7 text-primary" />
                  <span>Wanderlust Wonders</span>
                </Link>
              </SheetHeader>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

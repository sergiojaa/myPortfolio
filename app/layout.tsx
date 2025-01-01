'use client';
import type { Metadata } from 'next';
import React, { useState } from 'react';
import Header from './components/Header';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  // Toggle the hamburger menu state
  const hamburgerOpen = () => {
    setOpen(!open);
  };

  return (
    <html lang="en">
      <body className="bg-[#1c1c22] relative">
        {/* Header Component */}
        <Header open={open} setOpen={setOpen} hamburgerOpen={hamburgerOpen} />

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}

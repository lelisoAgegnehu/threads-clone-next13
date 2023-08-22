"use client";

import { sidebarLinks } from "@/constants";
import { SignOutButton, SignedIn } from "@clerk/clerk-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

export default function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="leftsidebar custom-scrollbar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-6 border-2 pt-2">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className="flex cursor-pointer gap-4 p-4">
              <Image
                src="/assets/Threads.svg"
                alt="logout"
                width={24}
                height={24}
              />
            </div>
            <p className="text-light-1 max-lg:hidden">Logout</p>
          </SignOutButton>
          dddd
        </SignedIn>
      </div>
    </section>
  );
}

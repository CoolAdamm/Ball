import Image from "next/image";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Button, Link } from "@nextui-org/react";
export default function Home() {
  return (
    <NextUIProvider>
      
      <div className="w-screen h-screen bg-black z-0">
        <div className="flex z-1">
          <Button color="danger" href="/startup" as={Link} variant="solid">Danger danger</Button>
        </div>
      </div>
    </NextUIProvider>
  );
}

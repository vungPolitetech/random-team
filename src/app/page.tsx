import { Button, ThemeController } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header><ThemeController /></header>
      <section>
        <Button label="Button" />
      </section>
      <footer>vungbt</footer>
    </main>
  );
}

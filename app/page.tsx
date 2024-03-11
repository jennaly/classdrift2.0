import Description from "./ui/description";
import { Button } from "./ui/button";
import Features from "./ui/features";
import { spaceGrotesk } from "./ui/fonts";
import Icons from "./ui/icons";
import Header from "./ui/header";
import ColorStrip from "./ui/colorStrip";
import BottomBanner from "./ui/bottomBanner";
import Members from "./ui/members";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <div>
      <ColorStrip />
      <div
        className={`${spaceGrotesk} container mx-auto px-8 lg:px-16 flex flex-col gap-4 mt-4 mb-2`}
      >
        <Header />
        <div className="mt-72 gap-4">
          <main className="lg:w-1/2 flex flex-col gap-4 mb-14">
            <Icons />
            <h1 className="text-5xl font-semibold leading-snug">
              The friendly, all-in-one workspace for teachers
            </h1>
            <Description>
              We built a modern workspace that makes your classroom workflow
              simpler, more joyful, and even a little fun. Try it out -
              it&apos;s free!
            </Description>
            <div className="flex gap-4">
              <Button className="bg-classdrift-accent">Try for free</Button>
              <Button className="bg-black flex items-center gap-3">
                Community
                <Members />
              </Button>
            </div>
          </main>
          <Features />
          <BottomBanner />
        </div>
        <Footer />
      </div>
    </div>
  );
}

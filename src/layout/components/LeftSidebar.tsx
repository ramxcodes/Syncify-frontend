import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignedIn } from "@clerk/clerk-react";
import { HomeIcon,  Laptop,  MessageCircle, Search } from "lucide-react";
import { Link } from "react-router-dom";
import PlaylistList from "./PlaylistList";

const LeftSidebar = () => {
  return (
    <div className="h-full flex flex-col gap-2">
      {/* Navigation menu */}
      <div className="rounded-lg bg-zinc-900 p-4">
        <div className="space-y-2">
          <Link
            to={"/"}
            className={cn(
              buttonVariants({
                variant: "ghost",
                className: "w-full justify-start text-white hover:bg-zinc-800",
              })
            )}
          >
            <HomeIcon className="size-5 mr-2" />
            <span className="hidden md:inline">Home</span>
          </Link>

          <Link
            to={"/search"}
            className={cn(
              buttonVariants({
                variant: "ghost",
                className: "w-full justify-start text-white hover:bg-zinc-800",
              })
            )}
          >
            <Search className="size-5 mr-2" />
            <span className="hidden md:inline">Search</span>
          </Link>

          <SignedIn>
            <Link
              to={"/chat"}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  className:
                    "w-full justify-start text-white hover:bg-zinc-800",
                })
              )}
            >
              <MessageCircle className="size-5 mr-2" />
              <span className="hidden md:inline">Messages</span>
            </Link>
          </SignedIn>
          <Link
              to={"/dev"}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  className:
                    "w-full justify-start text-white hover:bg-zinc-800",
                })
              )}
            >
              <Laptop className="size-5 mr-2 text-emerald-600" />
              <span className="hidden md:inline">Developer</span>
            </Link>
        </div>
      </div>

      {/* Library section */}
      <PlaylistList />
      
    </div>
  );
};

export default LeftSidebar;

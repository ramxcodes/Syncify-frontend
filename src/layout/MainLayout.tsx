import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Outlet, Link } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";
import FriendsActivity from "./components/FriendsActivity";
import AudioPlayer from "./components/AudioPlayer";
import { PlaybackControls } from "./components/PlaybackControls";
import { useState } from "react";
import useIsMobile from "./hooks/useIsMobile";
import {
  Home,
  Search,
  MessageCircle,
  Menu,
  X,
  User,
  Library,
} from "lucide-react";
import { SignedIn } from "@clerk/clerk-react";

const MainLayout = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen bg-black text-white flex flex-col relative">
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1 flex h-full overflow-hidden p-2"
      >
        <AudioPlayer />

        {/* Left Sidebar */}
        {!isMobile && (
          <>
            <ResizablePanel defaultSize={20} minSize={10} maxSize={30}>
              <LeftSidebar />
            </ResizablePanel>
            <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />
          </>
        )}

        {/* Main Content */}
        <ResizablePanel defaultSize={isMobile ? 100 : 60}>
          <Outlet />
        </ResizablePanel>

        {/* Right Sidebar */}
        {!isMobile && (
          <>
            <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />
            <ResizablePanel
              defaultSize={20}
              minSize={0}
              maxSize={25}
              collapsedSize={0}
            >
              <FriendsActivity />
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>

      <PlaybackControls />

      {/* Floating Action Button */}
      {isMobile && (
        <>
          <button
            className="fixed bottom-40 right-4 z-50 p-4 bg-emerald-600 rounded-full shadow-lg focus:outline-none cursor-move"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" />
            )}
          </button>

          {/* Pop-up Menu */}
          {menuOpen && (
            <div className="fixed bottom-56 right-4 z-40 flex flex-col items-center space-y-4">
              <Link
                to="/"
                className="p-3 bg-zinc-800 rounded-full hover:bg-emerald-900"
                onClick={() => setMenuOpen(false)}
              >
                <Home size={20} className="text-white" />
              </Link>
              <Link
                to="/search"
                className="p-3 bg-zinc-800 rounded-full hover:bg-emerald-900"
                onClick={() => setMenuOpen(false)}
              >
                <Search size={20} className="text-white" />
              </Link>
              <Link
                to="/playlist"
                className="p-3 bg-zinc-800 rounded-full hover:bg-emerald-900"
                onClick={() => setMenuOpen(false)}
              >
                <Library size={20} className="text-white" />
              </Link>
              <SignedIn>
                <Link
                  to="/chat"
                  className="p-3 bg-zinc-800 rounded-full hover:bg-emerald-900"
                  onClick={() => setMenuOpen(false)}
                >
                  <MessageCircle size={20} className="text-white" />
                </Link>
              </SignedIn>
              <Link
                to="/user-activities"
                className="p-3 bg-zinc-800 rounded-full hover:bg-emerald-900"
                onClick={() => setMenuOpen(false)}
              >
                <User size={20} className="text-white" />
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MainLayout;

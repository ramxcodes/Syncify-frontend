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
  Laptop,
} from "lucide-react";
import { SignedIn } from "@clerk/clerk-react";
import { motion } from "framer-motion";

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

      {isMobile && (
        <>
          <button
            className="fixed bottom-40 right-4 z-50 p-4 bg-emerald-600 rounded-full shadow-lg focus:outline-none cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" />
            )}
          </button>

          <motion.div
            className="fixed bottom-56 right-4 z-40 flex flex-col items-center space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: menuOpen ? 1 : 0,
              y: menuOpen ? 0 : 50,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {menuOpen && (
              <>
                {[
                  { to: "/", icon: <Home size={20} /> },
                  { to: "/search", icon: <Search size={20} /> },
                  { to: "/playlist", icon: <Library size={20} /> },
                  { to: "/user-activities", icon: <User size={20} /> },
                  {
                    to: "/dev",
                    icon: <Laptop className="text-emerald-500" size={20} />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.to}
                    className="p-3 bg-zinc-800 rounded-full hover:bg-emerald-900"
                    initial={{ opacity: 0, y: 50 * (index + 1) }}
                    animate={{
                      opacity: menuOpen ? 1 : 0,
                      y: menuOpen ? 0 : 50 * (index + 1),
                    }}
                    transition={{ delay: 0.1 * index, duration: 0.2 }}
                  >
                    <Link to={item.to} onClick={() => setMenuOpen(false)}>
                      {item.icon}
                    </Link>
                  </motion.div>
                ))}
                <SignedIn>
                  <motion.div
                    className="p-3 bg-zinc-800 rounded-full hover:bg-emerald-900"
                    initial={{ opacity: 0, y: 300 }}
                    animate={{
                      opacity: menuOpen ? 1 : 0,
                      y: menuOpen ? 0 : 300,
                    }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  >
                    <Link to="/chat" onClick={() => setMenuOpen(false)}>
                      <MessageCircle size={20} className="text-white" />
                    </Link>
                  </motion.div>
                </SignedIn>
              </>
            )}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default MainLayout;

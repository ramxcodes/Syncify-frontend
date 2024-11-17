import { Github, Home, Instagram, Linkedin, Music2, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-neutral-900 flex flex-col justify-between">
      <div className="flex items-center justify-center flex-grow">
        <div className="text-center space-y-8 px-4">
          {/* Large animated musical note */}
          <div className="flex justify-center animate-bounce">
            <Music2 className="h-24 w-24 text-emerald-500" />
          </div>

          {/* Error message */}
          <div className="space-y-4">
            <h1 className="text-7xl font-bold text-white">404</h1>
            <h2 className="text-2xl font-semibold text-white">Page not found</h2>
            <p className="text-neutral-400 max-w-md mx-auto">
              Looks like this track got lost in the shuffle. Let's get you back to the music.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              className="bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700 w-full sm:w-auto"
            >
              Go Back
            </Button>
            <Button
              onClick={() => navigate("/")}
              className="bg-emerald-500 hover:bg-emerald-600 text-white w-full sm:w-auto"
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>

          {/* Footer */}
          <footer className="text-neutral-400 py-4 text-center mt-8">
            <p>
              This project is created by <b className="text-emerald-500">Ramkrishna</b> . Follow me on
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://www.linkedin.com/in/ramcodes" target="_blank" rel="noopener noreferrer" className="text-emerald-500">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/ramxcodes" target="_blank" rel="noopener noreferrer" className="text-emerald-500">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/ramxcodes" target="_blank" rel="noopener noreferrer" className="text-emerald-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/__ramfr" target="_blank" rel="noopener noreferrer" className="text-emerald-500">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

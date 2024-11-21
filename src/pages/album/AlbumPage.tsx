/* eslint-disable react-refresh/only-export-components */
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMusicStore } from "@/stores/useMusicStore";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { Clock, Pause, Play, Shuffle } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const formatDuration = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

export const AlbumPage = () => {
  const { albumId } = useParams();
  const { fetchAlbumById, currentAlbum, isLoading } = useMusicStore();
  const { currentSong, isPlaying, togglePlay, playAlbum, shuffleAlbum } =
    usePlayerStore();

  useEffect(() => {
    if (albumId) fetchAlbumById(albumId);
  }, [fetchAlbumById, albumId]);

  if (isLoading) return null;

  const handlePlayAlbum = () => {
    if (!currentAlbum) return;
    const isCurrentAlbumPlaying = currentAlbum?.songs.some(
      (song) => song._id === currentSong?._id
    );

    if (isCurrentAlbumPlaying) togglePlay();
    else {
      playAlbum(currentAlbum?.songs, 0);
    }
  };

  const handlePlaySong = (index: number) => {
    if (!currentAlbum) return;

    playAlbum(currentAlbum?.songs, index);
  };

  const handleShuffleAlbum = () => {
    if (!currentAlbum) return;

    shuffleAlbum(currentAlbum?.songs);
  };

  return (
    <div className="h-full">
      <ScrollArea className="h-full rounded-md">
        {/* Main Content */}
        <div className="relative min-h-full">
          {/* bg gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#5038a0]/80 via-zinc-900/80
           to-zinc-900 pointer-events-none"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row p-6 gap-6 pb-8">
              <img
                src={currentAlbum?.imageUrl}
                alt={currentAlbum?.title}
                className="w-48 h-48 md:w-[240px] md:h-[240px] shadow-xl rounded mx-auto md:mx-0"
              />
              <div className="flex flex-col justify-end text-center md:text-left">
                <p className="text-sm font-medium">Album</p>
                <h1 className="text-4xl md:text-7xl font-bold my-4">
                  {currentAlbum?.title}
                </h1>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 text-sm text-zinc-100">
                  <span className="font-medium text-white">
                    {currentAlbum?.artist}
                  </span>
                  <span>• {currentAlbum?.songs.length} songs</span>
                  <span>• {currentAlbum?.releaseYear}</span>
                </div>
              </div>
            </div>

            {/* Play Button */}
            <div className="px-6 pb-4 flex justify-center md:justify-start items-center gap-6">
              <Button
                onClick={handlePlayAlbum}
                size="icon"
                className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 
              hover:scale-110 transition-all"
              >
                {isPlaying &&
                currentAlbum?.songs.some(
                  (song) => song._id === currentSong?._id
                ) ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="h-7 w-7 text-black" />
                )}
              </Button>
              <Button
                onClick={handleShuffleAlbum}
                size="icon"
                className="w-14 h-14 rounded-full bg-transparent hover:bg-green-400 text-white hover:text-black"
              >
                <Shuffle className="w-6 h-6 " />
              </Button>
            </div>

            {/* Table Section */}
            <div className="bg-black/20 backdrop-blur-sm">
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-10 py-2 text-sm">
                <div>#</div>
                <div>Title</div>
                <div>Released Year</div>
                <div>
                  <Clock className="w-4 h-4" />
                </div>
              </div>

              {/* Songs List */}
              <div className="px-6">
                <div className="space-y-2 py-4">
                  {currentAlbum?.songs.map((song, index) => {
                    const isCurrentSong = currentSong?._id === song._id;

                    return (
                      <div
                        onClick={() => handlePlaySong(index)}
                        key={song._id}
                        className="grid grid-cols-1 md:grid-cols-[16px_4fr_2fr_1fr] gap-4 px-4 py-2 text-sm 
                      text-zinc-400 hover:bg-white/5 rounded-md group cursor-pointer"
                      >
                        <div className="flex items-center justify-left">
                          {isCurrentSong && isPlaying ? (
                            <div className="size-4 text-green-500">♫</div>
                          ) : (
                            <span className="group-hover:hidden">
                              {index + 1}
                            </span>
                          )}
                          {!isCurrentSong && (
                            <Play className="w-4 h-4 hidden group-hover:block" />
                          )}
                        </div>

                        <div className="flex items-center gap-3">
                          <img
                            src={song.imageUrl}
                            alt={song.title}
                            className="size-10 w-10 h-10 md:w-12 md:h-12 rounded"
                          />

                          <div>
                            <div className={`font-medium text-white`}>
                              {song.title}
                            </div>
                            <div className="text-xs md:text-sm">
                              {song.artist}
                            </div>
                          </div>
                        </div>
                        <div className="hidden md:flex items-center">
                          {song.createdAt.split("T")[0]}
                        </div>
                        <div className="hidden md:flex items-center">
                          {formatDuration(song.duration)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

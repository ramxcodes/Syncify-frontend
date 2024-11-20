import PlaylistSkeleton from "@/components/skeletons/PlaylistSkeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMusicStore } from "@/stores/useMusicStore";
import { Library } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const PlaylistList = () => {
    const { albums, fetchAlbums, isLoading } = useMusicStore();
  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);
  console.log({ albums });
  return (
    <div className="flex-1 rounded-lg bg-zinc-900 p-4">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center text-white px-2">
        <Library className="size-5 mr-2" />
        <span className=" md:inline">Playlist's</span>
      </div>
    </div>
    <ScrollArea className="h-[calc(100vh-300px)]">
      <div className="space-y-2">
        {isLoading ? (
          <PlaylistSkeleton />
        ) : (
          albums.map((album) => (
            <Link
              to={`/albums/${album._id}`}
              key={album._id}
              className="p-2 hover:bg-zinc-800 rounded-md flex items-center gap-3 group cursor-pointer"
            >
              <img
                src={album.imageUrl}
                alt="Playlist img"
                className="size-12 rounded-md flex-shrink-0 object-cover"
              />

              <div className="flex-1 min-w-0 md:block">
                <p className="font-medium truncate">{album.title}</p>
                <p className="text-sm text-zinc-400 truncate">
                  Album • {album.artist}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </ScrollArea>
  </div>
  )
}

export default PlaylistList
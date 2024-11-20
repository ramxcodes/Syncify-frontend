import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChatStore } from "@/stores/useChatStore";
import { useUser } from "@clerk/clerk-react";
import { Music } from "lucide-react";
import { useEffect } from "react";

const ChatHeader = () => {
  const { selectedUser, onlineUsers, userActivities, fetchUsers } =
    useChatStore();
  const { user } = useUser();

  useEffect(() => {
    if (user) fetchUsers();
  }, [fetchUsers, user]);

  if (!selectedUser) return null;
  const activity = userActivities.get(selectedUser?.clerkId); // Use selectedUser.clerkId
  const isPlaying = activity && activity !== "Idle";

  return (
    <div className="p-4 border-b border-zinc-800">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={selectedUser.imageUrl} />
          <AvatarFallback>{selectedUser.fullName[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-medium">{selectedUser.fullName}</h2>

          <p className="text-sm text-zinc-400">
            {onlineUsers.has(selectedUser.clerkId) ? "Online" : "Offline"}
          </p>
          {isPlaying ? (
            <div className="flex items-center gap-2 mt-1 text-sm text-white">
              <Music className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="truncate overflow-hidden text-ellipsis whitespace-nowrap max-w-[12rem]">
                {activity.replace("Playing ", "").split(" by ")[0]}
              </span>
            </div>
          ) : (
            <div className="hidden mt-1 text-xs text-zinc-400">Idle</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;

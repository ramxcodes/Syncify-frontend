import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";
import axios, { AxiosError } from "axios";
import { Album, Song } from "@/types";

interface MusicStore {
    songs: Song[];
    albums: Album[];
    isLoading: boolean;
    error: string | null;

    fetchAlbums: () => Promise<void>;
}

export const useMusicStore = create<MusicStore>((set) => ({
    albums: [],
    songs: [],
    isLoading: false,
    error: null,

    fetchAlbums: async () => {
        set({
            isLoading: true,
            error: null
        });

        try {
            const response = await axiosInstance.get("/albums");
            set({
                albums: response.data
            });
        } catch (err) {
            const error = err as AxiosError;
            if (axios.isAxiosError(error) && error.response) {
                set({
                    error: error.response.data?.message || "An error occurred while fetching albums."
                });
            } else {
                set({
                    error: "An unexpected error occurred."
                });
            }
        } finally {
            set({ isLoading: false });
        }
    }
}));

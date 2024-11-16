import { axiosInstance } from "@/lib/axios";
import { isAxiosError } from "axios";
import {create} from "zustand";

interface ChatStore {
    users: unknown[];
    fetchUsers: () => Promise<void>;
    isLoading: boolean;
    error: string | null;
}

export const useChatStore = create<ChatStore>((set) => ({
    users: [],
    isLoading: false,
    error: null,
    fetchUsers: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.get("/users");
            set({ users: response.data });
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                set({ error: error.response?.data.message });
            } else {
                set({ error: (error as Error).message });
            }
        } finally {
            set({ isLoading: false });
        }
    },
}));
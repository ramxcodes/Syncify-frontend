import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import MainLayout from "./layout/MainLayout";
import ChatPage from "./pages/chat/ChatPage";
import { AlbumPage } from "./pages/album/AlbumPage";
import AdminPage from "./pages/admin/AdminPage";
import { Toaster } from "react-hot-toast";
import NotFoundPage from "./pages/404/NotFoundPage";
import Search from "./pages/search/Search";
import UserActivitiesPage from "./pages/user-activities/UserActivitiesPage";
import PlaylistPage from "./pages/playlist/PlaylistPage";
import DeveloperCreditPage from "./pages/dev/DeveloperCreditPage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback
              signUpForceRedirectUrl={"/auth-callback"}
            />
          }
        />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route path="/admin" element={<AdminPage />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/user-activities" element={<UserActivitiesPage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="/albums/:albumId" element={<AlbumPage />} />
          <Route path="/dev" element={<DeveloperCreditPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

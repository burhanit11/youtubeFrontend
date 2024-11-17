"use client";
import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ bgcolor: "white", color: "black", display: "flex" }}
      >
        <div className="flex justify-between items-center mx-5">
          <div>
            <Image width={100} height={100} alt="logo" src="/unnamed.jpg" />
          </div>
          <div className="flex items-center">
            <div className="flex border-2 py-1 border-slate-200 w-[30rem] rounded-full px-5">
              <SearchIcon />{" "}
              <input placeholder="Search" className="outline-none  w-full" />
            </div>
            <span className="bg-slate-200 rounded-full p-2 mx-3">
              <KeyboardVoiceIcon />
            </span>
          </div>
          <div>
            <Button color="black" onClick={() => router.push("/auth/login")}>
              Login
            </Button>
            <Button color="black" onClick={() => router.push("/auth/signup")}>
              Signup
            </Button>
          </div>
        </div>
      </AppBar>
    </>
  );
};

export default Header;

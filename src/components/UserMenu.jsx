import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";

export default function UserMenu() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const handleLogout = () => {
    signOut(auth);
    setIsOpen(false);
  };

  if (!user) return null;

  const menuItems = [
    { icon: "👤", label: "Profiles" },
    { icon: "💬", label: "Discord Link" },
    { icon: "🔒", label: "Account Access" },
    { icon: "✏️", label: "Appearance" },
    { icon: "🛡️", label: "Privacy" },
  ];

  return (
    <div className="relative">
      {/* NÚT AVATAR */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#d2b48c] border-2 border-[#8b4513] p-1 pr-3 rounded shadow-lg hover:bg-[#e9dcc3] transition-all z-50 relative"
      >
        <div className="w-8 h-8 bg-[#8b4513] border border-black/20 overflow-hidden rounded-sm">
          <img
            src={`https://crafatar.com/avatars/${user.email}?size=32&overlay`}
            alt="head"
          />
        </div>
        <span className="text-[#5d2e0a] font-bold text-xs truncate max-w-[100px] uppercase">
          {user.email.split("@")[0]}
        </span>
      </button>

      {/* LỚP PHỦ TRONG SUỐT ĐỂ BẤM RA NGOÀI LÀ ĐÓNG */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 cursor-default"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* MENU THẢ XUỐNG */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-56 bg-[#e9dcc3] border-4 border-[#8b4513] shadow-2xl z-50 overflow-hidden"
            style={{ boxShadow: "10px 10px 0 rgba(0,0,0,0.2)" }}
          >
            {/* Header Menu */}
            <div className="bg-[#d2b48c] p-3 border-b-2 border-[#8b4513] flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-[#8b4513] bg-[#8b4513]">
                <img
                  src={`https://crafatar.com/avatars/${user.email}?size=40&overlay`}
                  alt="head"
                />
              </div>
              <span className="text-[#5d2e0a] font-black text-sm truncate uppercase">
                {user.email.split("@")[0]}
              </span>
            </div>

            {/* List Items */}
            <div className="flex flex-col">
              {menuItems.map((item, i) => (
                <button
                  key={i}
                  className="flex items-center gap-4 px-4 py-3 hover:bg-[#d2b48c] text-[#5d2e0a] font-bold text-xs border-b border-[#8b4513]/10 transition-colors text-left group uppercase"
                >
                  <span className="text-lg opacity-70 group-hover:opacity-100">
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              ))}

              <button
                onClick={handleLogout}
                className="flex items-center gap-4 px-4 py-3 bg-[#8b4513]/10 hover:bg-red-500 hover:text-white text-[#8b4513] font-black text-xs transition-all text-left uppercase"
              >
                <span className="text-lg">↪️</span>
                Log out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

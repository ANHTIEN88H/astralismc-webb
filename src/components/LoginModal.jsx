import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { auth } from "../firebase"; // Sếp nhớ tạo file firebase.js trước nhé
import { sendSignInLinkToEmail } from "firebase/auth";

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1); // Bước 1: Nhập mail, Bước 2: Thông báo check mail
  const [loading, setLoading] = useState(false);

  const handleSendEmail = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      alert("Sếp ơi, vui lòng nhập đúng định dạng Email nhé! 📩");
      return;
    }

    setLoading(true);

    // Cấu hình để sau khi bấm link trong mail sẽ quay lại web của sếp
    const actionCodeSettings = {
      // Đây là link mà người chơi sẽ quay lại sau khi bấm vào mail
      url: "https://astralismc-webb.vercel.app",
      handleCodeInApp: true,
    };
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);

      // Lưu email vào trình duyệt để xác nhận khi người dùng bấm link quay lại
      window.localStorage.setItem("emailForSignIn", email);

      setStep(2); // Chuyển sang màn hình thông báo đã gửi mail
    } catch (error) {
      console.error(error);
      alert("Lỗi rồi sếp ơi: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Lớp nền mờ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Hộp Đăng Nhập phong cách Wynncraft */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className="relative w-full max-w-[450px] bg-[#d2b48c] p-1 border-[6px] border-[#8b4513] shadow-2xl"
            style={{
              boxShadow: "0 0 0 4px #5d2e0a, 20px 20px 50px rgba(0,0,0,0.5)",
            }}
          >
            {/* Logo Server */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#8b4513] p-2 border-4 border-[#5d2e0a] rounded-xl shadow-lg">
              <img
                src="/assets/astralis-logo.png"
                alt="logo"
                className="w-12 h-12"
              />
            </div>

            <div className="bg-[#e9dcc3] border-2 border-[#8b4513]/30 p-8 pt-12 flex flex-col items-center">
              <button
                onClick={() => {
                  setStep(1);
                  onClose();
                }}
                className="absolute top-4 right-4 text-[#8b4513] font-black hover:scale-110 transition-transform uppercase text-xs"
              >
                Đóng X
              </button>

              {step === 1 ? (
                /* BƯỚC 1: NHẬP EMAIL */
                <>
                  <h2 className="pixel-title text-3xl text-[#5d2e0a] mb-2 uppercase">
                    WELCOME
                  </h2>
                  <p className="text-[#8b4513] text-sm font-bold mb-8 text-center leading-tight">
                    Để nạp thẻ hoặc xem lịch sử, <br /> vui lòng nhập Email của
                    bạn
                  </p>

                  <form className="w-full space-y-4" onSubmit={handleSendEmail}>
                    <div className="relative">
                      <label className="block text-[10px] font-black text-[#8b4513] uppercase mb-1">
                        E-Mail Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập email của bạn..."
                        className="w-full bg-[#d2b48c]/30 border-2 border-[#8b4513] p-3 text-[#5d2e0a] font-bold placeholder-[#8b4513]/50 focus:outline-none focus:bg-[#d2b48c]/50 transition-all shadow-inner"
                      />
                    </div>

                    <div className="flex gap-2 pt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 bg-[#2e8b57] hover:bg-[#228b22] text-white font-black py-4 border-b-4 border-black/30 shadow-lg active:border-b-0 active:translate-y-1 transition-all uppercase tracking-widest disabled:opacity-50"
                      >
                        {loading ? "SENDING..." : "GỬI MÃ ĐĂNG NHẬP"}
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          window.open("https://discord.gg/rzBWcVMp", "_blank")
                        }
                        className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-5 border-b-4 border-black/30 shadow-lg active:border-b-0 active:translate-y-1 transition-all"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
                          className="w-6 h-6 invert"
                          alt="discord"
                        />
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                /* BƯỚC 2: THÔNG BÁO CHECK MAIL */
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-center w-full"
                >
                  <h2 className="pixel-title text-2xl text-[#5d2e0a] mb-4 uppercase">
                    CHECK YOUR MAIL
                  </h2>
                  <div className="bg-[#d2b48c]/40 p-6 border-2 border-dashed border-[#8b4513] rounded-lg mb-6">
                    <p className="text-[#8b4513] text-sm font-bold mb-2">
                      Đã gửi link đăng nhập đến:
                    </p>
                    <p className="text-[#5d2e0a] font-black break-all">
                      {email}
                    </p>
                  </div>
                  <p className="text-[#8b4513] text-xs italic mb-6">
                    Vui lòng kiểm tra hộp thư đến (hoặc spam) và bấm vào đường
                    dẫn để đăng nhập.
                  </p>
                  <button
                    onClick={() => setStep(1)}
                    className="text-[#8b4513] text-xs font-black underline uppercase"
                  >
                    {" "}
                    Thử lại với email khác{" "}
                  </button>
                </motion.div>
              )}

              <button className="mt-6 text-[#8b4513] text-[10px] font-black underline uppercase hover:text-[#5d2e0a]">
                Quên Email? Bấm vào đây
              </button>
            </div>

            {/* Hiệu ứng răng cưa chân giấy */}
            <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-6 h-3 bg-[#8b4513]"
                  style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

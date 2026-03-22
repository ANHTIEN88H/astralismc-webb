import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Thêm dòng này để dùng tính năng Đăng nhập

const firebaseConfig = {
  apiKey: "AIzaSyDuXApjPk0I0qpKxIaUcR_IAzahL1Rr__4",
  authDomain: "astralismc-d9bfa.firebaseapp.com",
  projectId: "astralismc-d9bfa",
  storageBucket: "astralismc-d9bfa.firebasestorage.app",
  messagingSenderId: "714281903550",
  appId: "1:714281903550:web:02ec8bf3f6df95904e85ef",
  measurementId: "G-S5FLK19Y3X",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Xuất các dịch vụ để dùng ở các file khác
export const analytics = getAnalytics(app);
export const auth = getAuth(app); // Đây là "chìa khóa" để gửi mail đăng nhập
export default app;

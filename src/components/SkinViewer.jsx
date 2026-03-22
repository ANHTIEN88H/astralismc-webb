import React, { useEffect, useRef } from "react";
import * as skinview3d from "skinview3d";

const SkinViewer = ({ skinUrl, width = 140, height = 210 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !skinUrl) return;

    let viewer;
    let animationId;

    try {
      viewer = new skinview3d.SkinViewer({
        canvas: canvasRef.current,
        width: width,
        height: height,
        skin: skinUrl,
      });

      // 1. Cấu hình xoay và camera
      viewer.autoRotate = true;
      viewer.autoRotateSpeed = 0.8;

      // 2. CHỈNH LẠI CAMERA: Kéo lùi trục Z ra 45 để lấy toàn cảnh, hạ trục Y xuống 10
      viewer.camera.position.set(-10, 10, 45); // Chỉnh góc nhìn hơi chếch xuống một chút để nhìn rõ đầu và vai

      // 3. Hiệu ứng đi bộ
      const walk = viewer.animations.add(skinview3d.WalkingAnimation);
      walk.speed = 0.8;

      // Vòng lặp render để nhân vật tự đi
      const animate = () => {
        viewer.render();
        animationId = requestAnimationFrame(animate);
      };
      animate();
    } catch (error) {
      console.error("Lỗi render 3D Skin:", error);
    }

    return () => {
      if (viewer) viewer.dispose();
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [skinUrl, width, height]);

  return (
    // BỎ thuộc tính "overflow-hidden" để không bị cắt xén bất cứ thứ gì
    <div className="flex justify-center items-center">
      <canvas
        ref={canvasRef}
        className="cursor-grab active:cursor-grabbing drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"
      />
    </div>
  );
};

export default SkinViewer;

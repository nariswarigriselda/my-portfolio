import React, { useEffect, useRef } from 'react';

export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 1. Bintang Latar Belakang (Twinkling Stars)
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.2 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.015 + 0.005,
      color: Math.random() > 0.3 ? '#ffffff' : Math.random() > 0.5 ? '#93c5fd' : '#c084fc',
    }));

    // 2. Bintang Jatuh Mewah (Realistic Shooting Stars)
    const createShootingStar = () => ({
      x: Math.random() * width * 1.2 - width * 0.2,
      y: Math.random() * (height * 0.5) - 50,
      length: Math.random() * 120 + 80,
      speed: Math.random() * 10 + 12,
      angle: (45 * Math.PI) / 180, // Sudut kemiringan sempurna 45 derajat
      size: Math.random() * 1.5 + 1,
      alpha: 1,
      active: true,
      fadeSpeed: Math.random() * 0.012 + 0.008,
    });

    let activeShootingStars = [];

    // Interval memunculkan bintang jatuh secara acak
    const shootingStarInterval = setInterval(() => {
      if (activeShootingStars.length < 3 && Math.random() < 0.7) {
        activeShootingStars.push(createShootingStar());
      }
    }, 1800);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // --- FX: Render Kabut Nebula Kosmik Mewah ---
      const nebulaGlow = ctx.createRadialGradient(
        width * 0.7,
        height * 0.3,
        50,
        width * 0.7,
        height * 0.3,
        width * 0.5
      );
      nebulaGlow.addColorStop(0, 'rgba(59, 130, 246, 0.08)');
      nebulaGlow.addColorStop(0.5, 'rgba(99, 102, 241, 0.04)');
      nebulaGlow.addColorStop(1, 'rgba(2, 6, 23, 0)');
      ctx.fillStyle = nebulaGlow;
      ctx.fillRect(0, 0, width, height);

      // --- Render Bintang Biasa (Twinkle) ---
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed;

        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.abs(star.alpha);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // --- Render Bintang Jatuh Modern ---
      activeShootingStars.forEach((star, index) => {
        if (!star.active) return;

        // Hitung koordinat ekor berdasarkan sudut miring (45 derajat)
        const tailX = star.x - Math.cos(star.angle) * star.length;
        const tailY = star.y - Math.sin(star.angle) * star.length;

        // Gradient Ekor Meluncur Mulus
        const gradient = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.alpha})`);
        gradient.addColorStop(0.2, `rgba(147, 197, 253, ${star.alpha * 0.8})`);
        gradient.addColorStop(0.6, `rgba(99, 102, 241, ${star.alpha * 0.3})`);
        gradient.addColorStop(1, 'rgba(2, 6, 23, 0)');

        // Gambar Ekor Lintasan
        ctx.strokeStyle = gradient;
        ctx.lineWidth = star.size;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Gambar Kepala Bintang Berpijar (Glowing Core)
        const headGlow = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size * 4
        );
        headGlow.addColorStop(0, `rgba(255, 255, 255, ${star.alpha})`);
        headGlow.addColorStop(0.5, `rgba(147, 197, 253, ${star.alpha * 0.5})`);
        headGlow.addColorStop(1, 'rgba(147, 197, 253, 0)');

        ctx.fillStyle = headGlow;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Perbarui Posisi Miring
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.alpha -= star.fadeSpeed;

        // Hapus jika sudah keluar dari batas layar atau memudar
        if (star.alpha <= 0 || star.x > width + 100 || star.y > height + 100) {
          star.active = false;
        }
      });

      // Filter bintang jatuh yang masih aktif
      activeShootingStars = activeShootingStars.filter((s) => s.active);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(shootingStarInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 bg-[#020617]"
    />
  );
}
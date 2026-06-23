"use client";

import { useEffect, useState, useRef } from "react";

const TELEGRAM_LINK = "https://t.me/+aToizXcS17NiMjE1";

export default function Home() {
  const [countdown, setCountdown] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const redirectTriggered = useRef(false);

  // Facebook Pixel Code integration
  useEffect(() => {
    const initFacebookPixel = () => {
      // @ts-ignore
      if (window.fbq) return;
      // @ts-ignore
      const n = (window.fbq = function () {
        // @ts-ignore
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      });
      // @ts-ignore
      if (!window._fbq) window._fbq = n;
      // @ts-ignore
      n.push = n;
      // @ts-ignore
      n.loaded = !0;
      // @ts-ignore
      n.version = "2.0";
      // @ts-ignore
      n.queue = [];
      const t = document.createElement("script");
      t.async = true;
      t.src = "https://connect.facebook.net/en_US/fbevents.js";
      const s = document.getElementsByTagName("script")[0];
      s.parentNode?.insertBefore(t, s);
    };

    initFacebookPixel();
    // @ts-ignore
    window.fbq("init", "1629952101627028");
    // @ts-ignore
    window.fbq("track", "PageView");
  }, []);

  const handleRedirect = () => {
    if (redirectTriggered.current) return;
    redirectTriggered.current = true;
    window.location.href = TELEGRAM_LINK;
  };

  // Timer redirect effect
  useEffect(() => {
    if (isPaused || redirectTriggered.current) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleRedirect();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const pauseCountdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (redirectTriggered.current) return;
    setIsPaused(true);
  };

  const onButtonClick = () => {
    redirectTriggered.current = true;
  };

  return (
    <div className="mobile-card">
      {/* Brand Logo inside a styled badge frame */}
      <div className="logo-badge">
        {!logoFailed ? (
          <img
            src="/logo.png"
            alt="Neha Book Publication Logo"
            className="w-full h-full object-contain"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <i className="fa-solid fa-book-open text-3xl text-[#1A5F7A]"></i>
        )}
      </div>

      {/* Heading */}
      <div className="brand-heading">
        <h1>
          Neha Book <br /> Publication
        </h1>
        <div className="tagline">
          <span>🏠</span> work from home · <span>✍️</span> content writing
        </div>
      </div>

      {/* First Apply Now button */}
      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onButtonClick}
        className="btn-telegram"
      >
        <i className="fab fa-telegram"></i> Apply now
      </a>

      {/* 5 main bullet points with premium styled icon wrappers */}
      <ul className="benefits-list">
        <li>
          <div className="icon-wrapper">
            <i className="fas fa-pen-fancy"></i>
          </div>
          <span>
            <strong>Content writing</strong> – multiple projects available
          </span>
        </li>
        <li>
          <div className="icon-wrapper">
            <i className="fas fa-home"></i>
          </div>
          <span>
            <strong>Work from home</strong> – full flexibility
          </span>
        </li>
        <li>
          <div className="icon-wrapper">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <span>
            <strong>No experience needed</strong> – complete guidance provided
          </span>
        </li>
        <li>
          <div className="icon-wrapper">
            <i className="fas fa-upload"></i>
          </div>
          <span>
            <strong>Content already uploaded</strong> – ready source material
          </span>
        </li>
        <li>
          <div className="icon-wrapper">
            <i className="fas fa-clock"></i>
          </div>
          <span>
            <strong>Choose your own hours</strong> – freelance / part-time
          </span>
        </li>
      </ul>

      {/* Second Apply Now button */}
      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onButtonClick}
        className="btn-telegram btn-telegram-secondary"
      >
        <i className="fab fa-telegram"></i> Apply now
      </a>

      {/* Countdown timer with X pause button */}
      <div className={`countdown-section ${isPaused ? "paused" : ""}`} id="countdownSection">
        <div className="countdown-text">
          <i className="fas fa-hourglass-half"></i>
          Redirecting in{" "}
          <span className="countdown-number" id="countdownTimer">
            {isPaused ? "⏸️" : countdown}
          </span>{" "}
          sec
        </div>
        <button
          onClick={pauseCountdown}
          className={`pause-btn ${isPaused ? "disabled" : ""}`}
          id="pauseCountdownBtn"
          title={isPaused ? "Auto-redirect paused" : "Pause auto-redirect"}
          disabled={isPaused}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="redirect-message" id="redirectMessage">
          {isPaused ? (
            "🔴 Auto-redirect paused. Click the Telegram button above to join manually."
          ) : (
            `⚡ Auto-redirect to Telegram in ${countdown} seconds. Click ✕ to pause.`
          )}
        </div>
      </div>

      {/* Trust badges formatted as capsules */}
      <div className="trust-note">
        <div className="trust-badge">
          <i className="fas fa-check-circle"></i> Genuine hiring
        </div>
        <div className="trust-badge">
          <i className="fas fa-users"></i> Students | Housewives | Jobseekers
        </div>
        <div className="trust-badge">
          <i className="fas fa-shield-alt"></i> No registration fee
        </div>
      </div>
    </div>
  );
}

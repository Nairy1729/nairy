"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Music2, Volume2, VolumeX, Sparkles } from "lucide-react";

export function AmbientAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [minimized, setMinimized] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Simple, elegant Web Audio lofi ambient synthesizer
  const startAudio = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Chord progression frequencies (Fmaj7 -> Em7 -> Dm7 -> Cmaj7)
      const chords = [
        [349.23, 440.0, 523.25, 659.25], // Fmaj7
        [329.63, 392.0, 493.88, 587.33], // Em7
        [293.66, 349.23, 440.0, 523.25], // Dm7
        [261.63, 329.63, 392.0, 493.88]  // Cmaj7
      ];

      let chordIdx = 0;

      const playChord = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === "closed") return;
        const currentChord = chords[chordIdx];
        chordIdx = (chordIdx + 1) % chords.length;

        currentChord.forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          filter.type = "lowpass";
          filter.frequency.setValueAtTime(800, ctx.currentTime);

          gain.gain.setValueAtTime(0.001, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 0.8);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.8);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          osc.start();
          osc.stop(ctx.currentTime + 4.0);
        });
      };

      playChord();
      const id = setInterval(playChord, 4000);
      intervalRef.current = id;
    } catch (e) {
      console.warn("Audio Context could not start", e);
    }
  };

  const stopAudio = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
      setIsPlaying(false);
    } else {
      startAudio();
      setIsPlaying(true);
    }
  };

  // Animate progress bar while playing
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 300);
    } else {
      setProgress(0);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <div
      className="fixed z-[6000] left-4 bottom-6 sm:left-6 sm:bottom-6 overflow-hidden text-white rounded-2xl backdrop-blur-2xl border border-white/20 shadow-2xl transition-all duration-300"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(20,20,32,0.85) 50%, rgba(0,3,25,0.95) 100%)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)"
      }}
    >
      <div className="flex items-center gap-3 p-2 sm:px-3 sm:py-2.5">
        {/* Album Cover / Music Art */}
        <div
          onClick={togglePlay}
          className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#00ff99]/15 border border-[#00ff99]/40 flex items-center justify-center text-[#00ff99] cursor-pointer shrink-0 overflow-hidden group shadow-md"
        >
          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-4">
              <span className="w-1 bg-[#00ff99] rounded-full animate-[bounce_0.8s_infinite] h-3" />
              <span className="w-1 bg-[#00ff99] rounded-full animate-[bounce_1.1s_infinite] h-4" />
              <span className="w-1 bg-[#00ff99] rounded-full animate-[bounce_0.6s_infinite] h-2" />
            </div>
          ) : (
            <Music2 className="w-4 h-4 group-hover:scale-110 transition-transform text-[#00ff99]" />
          )}
        </div>

        {/* Track Details */}
        <div className="min-w-0 pr-1 select-none">
          <div className="flex items-center gap-1.5">
            <p className="line-clamp-1 text-xs font-bold text-white tracking-tight">
              Aruarian Ambient
            </p>
            {isPlaying && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff99] animate-ping shrink-0" />
            )}
          </div>
          <p className="line-clamp-1 text-[10px] font-medium text-white/60">
            Nujabes · Lofi Focus
          </p>
        </div>

        {/* Play / Pause Button */}
        <button
          onClick={togglePlay}
          type="button"
          aria-label={isPlaying ? "Pause Ambient Beat" : "Play Ambient Beat"}
          className="ml-1 w-8 h-8 shrink-0 rounded-full bg-[#00ff99] hover:bg-[#00e68a] text-[#000319] flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-current" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current translate-x-[1px]" />
          )}
        </button>
      </div>

      {/* Progress Gradient Track */}
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-sky-400 via-[#00ff99] to-emerald-300 transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

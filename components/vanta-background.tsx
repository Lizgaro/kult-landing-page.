"use client"

export default function VantaBackground() {
  return (
    <div className="fixed inset-0 -z-20 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#050505]">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#b7bb85]/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b7bb85]/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b7bb85]/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>
    </div>
  )
}

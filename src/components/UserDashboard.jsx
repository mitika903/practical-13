import React, { useState } from 'react';

function UserDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  function toggleAdmin() {
    setIsAdmin(!isAdmin);
  }

  return (
    <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/15 bg-[#111126]/90 text-white shadow-[0_30px_100px_rgba(91,33,182,0.35)] backdrop-blur-2xl">

      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet-600/30 blur-[90px]"></div>
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-[90px]"></div>

      <div className="relative border-b border-white/10 bg-gradient-to-r from-violet-600/20 via-indigo-500/10 to-cyan-400/10 p-7 sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500 to-indigo-700 text-3xl shadow-[0_8px_30px_rgba(139,92,246,0.4)]">
              ◈
            </div>

            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-300">
                Next Generation
              </p>
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                Enterprise<span className="text-violet-400">.</span>
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Portal Control Center
              </p>
            </div>
          </div>

          <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]"></span>
            System Online
          </div>
        </div>

        <div className="mt-9">
          <p className="text-sm text-slate-400">YOUR WORKSPACE</p>
          <h3 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">
            Control your
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              digital universe.
            </span>
          </h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            A smarter space to manage access, explore privileges and stay connected.
          </p>
        </div>
      </div>

      <div className="relative p-6 sm:p-10">
        <div className="mb-7 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 to-transparent p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/20 text-2xl text-violet-300">
              ◉
            </div>
            <p className="text-xs text-slate-400">Authentication</p>
            <h4 className="mt-2 text-lg font-bold">
              {isLoggedIn ? 'Verified' : 'Protected'}
            </h4>
            <p className="mt-1 text-xs text-slate-500">
              {isLoggedIn ? 'Session active' : 'Login required'}
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 to-transparent p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/20 text-2xl text-cyan-300">
              ⬡
            </div>
            <p className="text-xs text-slate-400">Access Level</p>
            <h4 className="mt-2 text-lg font-bold">
              {isLoggedIn ? (isAdmin ? 'Admin' : 'Staff') : 'Restricted'}
            </h4>
            <p className="mt-1 text-xs text-slate-500">
              Permission status
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                Access Management
              </p>
              <h3 className="mt-2 text-xl font-bold">Portal Access</h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
              🔐
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={toggleLogin}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_6px_0_#312e81,0_12px_30px_rgba(99,102,241,0.25)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_8px_0_#312e81,0_18px_35px_rgba(99,102,241,0.35)] active:translate-y-1 active:shadow-none"
            >
              <span className="relative z-10">
                {isLoggedIn ? '↗ Log Out' : '✦ Log In'}
              </span>
            </button>

            {isLoggedIn && (
              <button
                onClick={toggleAdmin}
                className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3.5 text-sm font-bold text-cyan-200 transition duration-200 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-400/20"
              >
                {isAdmin ? 'Switch to Staff' : 'Switch to Admin'}
              </button>
            )}
          </div>

          <div className="mt-7">
            {isLoggedIn ? (
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/[0.07] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-2xl text-emerald-300">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-emerald-300">
                      Welcome Back, Employee!
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      You are securely connected to internal server.
                    </p>
                  </div>
                </div>

                {isAdmin && (
                  <div className="mt-5 rounded-xl border border-amber-400/25 bg-amber-400/10 p-4 text-sm font-semibold leading-6 text-amber-200">
                    ⚡ Admin Privileges Active: Accessing System Diagnostics
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-xl border border-violet-400/15 bg-gradient-to-br from-violet-500/[0.08] to-transparent p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-3xl">
                  ◈
                </div>

                <h3 className="text-xl font-bold text-white">
                  Please Log In
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-400">
                  Access restricted to authorized personnel only.
                </p>

                <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400"></div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          <span>Enterprise Security</span>
          <span>Digital Workspace © 2026</span>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
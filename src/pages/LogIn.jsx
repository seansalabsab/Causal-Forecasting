import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4 relative">
      <div className="w-full max-w-md relative z-10">
        {/* Logo Placeholder */}
        <div className="flex items-center justify-center mb-12 opacity-0 animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">closr</h1>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-600/50 opacity-0 animate-slide-up">
          <div className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email@address.com"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all duration-200 hover:border-slate-500"
                />
                {email && (
                  <div className="absolute inset-y-0 right-3 flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-slate-300">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all duration-200 hover:border-slate-500"
                />
                {password && (
                  <div className="absolute inset-y-0 right-3 flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Connect Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-semibold text-sm uppercase tracking-wide transition-all duration-300 transform ${
                isLoading
                  ? 'bg-emerald-600/50 text-emerald-200 cursor-not-allowed scale-95'
                  : 'bg-emerald-500 text-white hover:bg-emerald-400 hover:scale-105 active:scale-95 shadow-lg hover:shadow-emerald-500/25'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-emerald-200 border-t-transparent rounded-full animate-spin"></div>
                  <span>Connecting...</span>
                </div>
              ) : (
                'CONNECT'
              )}
            </button>
          </div>

          {/* Footer Links */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-600/50">
            <button className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200 hover:underline">
              Forgot your password
            </button>
            <span className="text-slate-600 mx-2">-</span>
            <button className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200 hover:underline">
              Question?
            </button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/5 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/5 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-slate-500/10 rounded-full animate-bounce-slow"></div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.2s forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.4s forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
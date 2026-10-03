import React, { useState } from 'react';
import {
  X,
  User,
  Building,
  Mail,
  Lock,
  CheckCircle2,
  LogIn,
  Sparkles
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; email: string; role: 'seeker' | 'employer' }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [isRegister, setIsRegister] = useState(false);
  const [role, setRole] = useState<'seeker' | 'employer'>('seeker');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const displayName = name || (email.split('@')[0].toUpperCase());
    onLoginSuccess({
      name: displayName,
      email,
      role
    });
    onClose();
  };

  const handleDemoFill = (demoRole: 'seeker' | 'employer') => {
    setRole(demoRole);
    if (demoRole === 'seeker') {
      setName('Hamza Tariq');
      setEmail('hamza.tariq@gmail.com');
      setPassword('demoPass123!');
    } else {
      setName('TCS HR Recruitment');
      setEmail('recruitment@tcs.com.pk');
      setPassword('employerSecure2026!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {isRegister ? 'Create an Account' : 'Welcome Back'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Pakistan Daily Jobs Portal
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Role selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              I am a:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRole('seeker')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  role === 'seeker'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                Job Seeker
              </button>
              <button
                type="button"
                onClick={() => setRole('employer')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  role === 'employer'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Building className="w-3.5 h-3.5" />
                Employer / Recruiter
              </button>
            </div>
          </div>

          {/* Quick Demo Fill Buttons */}
          <div className="p-2.5 bg-blue-50/70 border border-blue-200 rounded-xl flex items-center justify-between text-xs">
            <span className="text-[11px] font-semibold text-blue-900">Test Account?</span>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => handleDemoFill('seeker')}
                className="px-2 py-1 bg-white hover:bg-blue-100 border border-blue-300 rounded text-[11px] font-bold text-blue-700 cursor-pointer"
              >
                Fill Seeker
              </button>
              <button
                type="button"
                onClick={() => handleDemoFill('employer')}
                className="px-2 py-1 bg-white hover:bg-blue-100 border border-blue-300 rounded text-[11px] font-bold text-blue-700 cursor-pointer"
              >
                Fill Employer
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            {isRegister && (
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {role === 'seeker' ? 'Full Name' : 'Company / Organization Name'} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={role === 'seeker' ? 'Hamza Tariq' : 'Systems Ltd Recruitment'}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-xs"
                />
              </div>
            )}

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Email Address *</label>
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus-within:border-blue-600 focus-within:bg-white">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-transparent focus:outline-hidden text-xs text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Password *</label>
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus-within:border-blue-600 focus-within:bg-white">
                <Lock className="w-4 h-4 text-slate-400 shrink-0" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-transparent focus:outline-hidden text-xs text-slate-900"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-md shadow-blue-600/30 transition-all cursor-pointer text-xs"
            >
              {isRegister ? 'Complete Registration' : 'Sign In'}
            </button>
          </form>

          {/* Toggle between Login and Register */}
          <div className="text-center pt-2 text-xs text-slate-600 border-t border-slate-100">
            {isRegister ? (
              <p>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsRegister(false)}
                  className="text-blue-600 font-bold hover:underline cursor-pointer"
                >
                  Sign In
                </button>
              </p>
            ) : (
              <p>
                Don&apos;t have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsRegister(true)}
                  className="text-blue-600 font-bold hover:underline cursor-pointer"
                >
                  Register Now
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

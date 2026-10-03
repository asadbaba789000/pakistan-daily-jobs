import React, { useState } from 'react';
import {
  X,
  Bell,
  CheckCircle2,
  Phone,
  Mail,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { PROVINCES } from '../data/jobsData';

interface AlertsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AlertsModal: React.FC<AlertsModalProps> = ({
  isOpen,
  onClose
}) => {
  const [channel, setChannel] = useState<'whatsapp' | 'email'>('whatsapp');
  const [contactValue, setContactValue] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All Jobs');
  const [isSubscribed, setIsSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactValue) return;

    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-emerald-50/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Daily Pakistan Job Alerts</h3>
              <p className="text-xs text-emerald-800 font-medium">Instant alerts for new verified openings</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        {isSubscribed ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
            <h4 className="text-lg font-bold text-slate-900">Subscribed Successfully!</h4>
            <p className="text-xs text-slate-600">
              You will receive daily curated openings directly to your {channel === 'whatsapp' ? 'WhatsApp' : 'Inbox'}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            {/* Channel Tabs */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setChannel('whatsapp')}
                className={`py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  channel === 'whatsapp'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Alerts
              </button>
              <button
                type="button"
                onClick={() => setChannel('email')}
                className={`py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  channel === 'email'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Mail className="w-4 h-4" />
                Email Digest
              </button>
            </div>

            {/* Input field */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                {channel === 'whatsapp' ? 'WhatsApp Mobile Number (+92)' : 'Email Address'} *
              </label>
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus-within:border-emerald-600 focus-within:bg-white">
                {channel === 'whatsapp' ? (
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                ) : (
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                )}
                <input
                  type={channel === 'whatsapp' ? 'tel' : 'email'}
                  required
                  value={contactValue}
                  onChange={(e) => setContactValue(e.target.value)}
                  placeholder={channel === 'whatsapp' ? '+92 300 1234567' : 'name@example.com'}
                  className="w-full bg-transparent focus:outline-hidden text-xs text-slate-900"
                />
              </div>
            </div>

            {/* Province selection */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Province Preference</label>
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-hidden"
              >
                {PROVINCES.map((p) => (
                  <option key={p} value={p}>{p === 'All' ? 'All Pakistan' : p}</option>
                ))}
              </select>
            </div>

            {/* Category preference */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Job Sector</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-hidden"
              >
                <option value="All Jobs">All Categories (Govt + Private)</option>
                <option value="Government Jobs">Government Jobs Only (FPSC/PPSC/BPS)</option>
                <option value="IT & Software">IT & Software</option>
                <option value="Banking Jobs">Banking & Finance</option>
                <option value="Engineering">Engineering</option>
                <option value="Remote Jobs">Remote / Work from Home</option>
              </select>
            </div>

            <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>We never spam or sell your data. Free instant unsubscribe anytime.</span>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-md shadow-emerald-600/30 transition-all cursor-pointer text-xs"
            >
              Activate Free Daily Alerts
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

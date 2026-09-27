import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { StarDoodle, PaperPlaneDoodle } from '../components/Decorations';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid family email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 400);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FFFCF9] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large orange organic blob card */}
        <div className="relative bg-[#FF7043] rounded-[48px] p-8 sm:p-12 lg:p-16 text-white shadow-soft overflow-hidden">
          {/* Subtle background decorative shapes */}
          <div className="absolute top-6 right-8 text-white/30 animate-subtle-float">
            <StarDoodle size={36} color="rgba(255,255,255,0.35)" />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />
          <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full bg-[#FFB52E]/30 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-white">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB52E]" />
              <span>LittleSprout Parent Digest</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Stay Connected to Their Little Adventures
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xl mx-auto">
              Join our parent newsletter for school updates, activity ideas,
              event announcements, and helpful early-learning resources.
            </p>

            {status === 'success' ? (
              <div className="bg-white text-[#102B49] p-6 rounded-3xl shadow-md animate-in zoom-in-95 duration-200 space-y-2 max-w-md mx-auto">
                <div className="w-12 h-12 rounded-full bg-[#EAF7E3] text-[#72C83E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-display font-bold text-xl text-[#102B49]">
                  You're on the list!
                </h4>
                <p className="text-xs sm:text-sm text-[#69717A]">
                  Thank you for joining us. We look forward to sharing inspiring learning moments with your family!
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-xs font-bold text-[#FF7043] underline hover:text-[#102B49] mt-2 cursor-pointer"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
                <div className="flex flex-col sm:flex-row items-center gap-2.5 bg-white p-2 rounded-2xl sm:rounded-full shadow-lg">
                  <div className="flex items-center gap-2.5 px-3 w-full sm:w-auto flex-1">
                    <Mail className="w-5 h-5 text-[#69717A] shrink-0" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Your email address"
                      className="w-full bg-transparent text-sm text-[#102B49] placeholder:text-[#69717A]/70 focus:outline-none py-2"
                      disabled={status === 'loading'}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto px-6 py-3 bg-[#102B49] text-white hover:bg-[#193F68] font-display font-bold text-sm rounded-xl sm:rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
                  >
                    <span>{status === 'loading' ? 'Joining...' : 'Subscribe'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {status === 'error' && (
                  <p className="text-xs text-[#FFF8E8] font-semibold bg-black/20 py-1.5 px-3 rounded-lg">
                    {errorMessage}
                  </p>
                )}

                <p className="text-xs text-white/80">
                  No spam. Just useful updates for families. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

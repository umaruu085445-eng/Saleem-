import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, ShieldCheck, Car, HelpCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { StarDoodle } from '../components/Decorations';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim() || !formData.email.includes('@'))
      newErrors.email = 'Please provide a valid email.';
    if (!formData.message.trim())
      newErrors.message = 'Please type a brief note or inquiry.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 400);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF8FD] text-xs font-bold text-[#55BFEF] uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#102B49] leading-tight max-w-3xl mx-auto">
          We’d Love to Connect with Your Family
        </h1>
        <p className="text-base sm:text-lg text-[#69717A] max-w-2xl mx-auto leading-relaxed">
          Whether you have a question regarding enrollment timelines, developmental milestones,
          or scheduling an afternoon walk-through, our admissions team is here for you.
        </p>
      </section>

      {/* Main Grid: Details + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Campus Directions */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display font-bold text-2xl text-[#102B49]">
              School Information &amp; Hours
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-soft border border-[#102B49]/5">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF1F3] text-[#FF7043] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#69717A]">Address</h4>
                  <div className="font-display font-bold text-base sm:text-lg text-[#102B49]">
                    24 Garden Lane, Sunnybrook
                  </div>
                  <p className="text-xs text-[#69717A] mt-1">
                    Located in a quiet, child-safe neighborhood with private parking &amp; stroller bays.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-soft border border-[#102B49]/5">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F9ED] text-[#72C83E] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#69717A]">Telephone</h4>
                  <a href="tel:18005550198" className="font-display font-bold text-base sm:text-lg text-[#102B49] hover:text-[#FF7043] transition-colors">
                    +1 (800) 555-0198
                  </a>
                  <p className="text-xs text-[#69717A] mt-1">
                    Live parent inquiries answered Mon–Fri from 8:00 AM to 5:30 PM.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-soft border border-[#102B49]/5">
                <div className="w-12 h-12 rounded-2xl bg-[#EDF8FD] text-[#55BFEF] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#69717A]">Direct Email</h4>
                  <a href="mailto:hello@littlesproutacademy.com" className="font-display font-bold text-base sm:text-lg text-[#102B49] hover:text-[#FF7043] transition-colors">
                    hello@littlesproutacademy.com
                  </a>
                  <p className="text-xs text-[#69717A] mt-1">
                    All messages answered within one business day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-soft border border-[#102B49]/5">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF8E8] text-[#FFB52E] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#69717A]">Hours of Operation</h4>
                  <div className="font-display font-bold text-base sm:text-lg text-[#102B49]">
                    Monday–Friday: 8:00 AM – 5:30 PM
                  </div>
                  <p className="text-xs text-[#69717A] mt-1">
                    Morning drop-off loop open from 8:00 AM to 8:45 AM.
                  </p>
                </div>
              </div>
            </div>

            {/* Parking & Security Note */}
            <div className="p-4 rounded-2xl bg-[#FFF1F3]/60 border border-[#FF7043]/15 text-xs text-[#69717A] space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-[#102B49]">
                <ShieldCheck className="w-4 h-4 text-[#72C83E]" />
                Campus Visitor Protocol
              </div>
              <p>
                For the safety of our children, all visitors must buzz at the main entrance intercom with a valid photo ID before entering school grounds.
              </p>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-[#102B49]/5 relative">
              <h3 className="font-display font-bold text-2xl text-[#102B49] mb-1">
                Send Us a Note
              </h3>
              <p className="text-xs sm:text-sm text-[#69717A] mb-6">
                Fill in the form below and an educator or admissions director will be delighted to reply.
              </p>

              {isSent ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-[#EAF7E3] text-[#72C83E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-[#102B49]">
                    Thank you! We've received your note.
                  </h4>
                  <p className="text-sm text-[#69717A] max-w-md mx-auto">
                    We appreciate you reaching out to LittleSprout Academy. We look forward to connecting with your family shortly.
                  </p>
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => {
                      setIsSent(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Question',
                        message: ''
                      });
                    }}
                  >
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#102B49] mb-1.5">
                        Your Full Name <span className="text-[#FF7043]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Jessica Miller"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#FFFCF9] border text-sm text-[#102B49] focus:outline-none focus:ring-2 focus:ring-[#FF7043] transition-all ${
                          errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#102B49]/15'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#102B49] mb-1.5">
                        Email Address <span className="text-[#FF7043]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="e.g. jessica@example.com"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#FFFCF9] border text-sm text-[#102B49] focus:outline-none focus:ring-2 focus:ring-[#FF7043] transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#102B49]/15'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#102B49] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. (555) 123-4567"
                        className="w-full px-4 py-3 rounded-2xl bg-[#FFFCF9] border border-[#102B49]/15 text-sm text-[#102B49] focus:outline-none focus:ring-2 focus:ring-[#FF7043] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#102B49] mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FFFCF9] border border-[#102B49]/15 text-sm text-[#102B49] focus:outline-none focus:ring-2 focus:ring-[#FF7043] transition-all"
                      >
                        <option value="General Question">General Question</option>
                        <option value="Enrollment Availability">Enrollment Availability</option>
                        <option value="Tuition & Rates">Tuition &amp; Rates</option>
                        <option value="School Tour Scheduling">School Tour Scheduling</option>
                        <option value="Employment Opportunities">Employment Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102B49] mb-1.5">
                      Your Message <span className="text-[#FF7043]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="How can we help your family today?"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#FFFCF9] border text-sm text-[#102B49] focus:outline-none focus:ring-2 focus:ring-[#FF7043] transition-all resize-none ${
                        errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#102B49]/15'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      showArrow
                      disabled={isSubmitting}
                      className="w-full justify-center"
                    >
                      {isSubmitting ? 'Sending Note...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

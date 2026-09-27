import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Calendar, Send, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { StarDoodle } from '../components/Decorations';

export const AdmissionsContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '3',
    programInterest: 'Preschool Explorers',
    visitDate: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Please enter your name.';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    }
    if (!formData.visitDate) {
      newErrors.visitDate = 'Please select a preferred visit date.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFF1F3]/40 relative overflow-hidden" id="admissions">
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#FFF8E8] blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-[#EDF8FD] blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: School Information & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-xs font-bold text-[#FF7043] uppercase tracking-wider shadow-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>Admissions &amp; School Visits</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102B49] leading-tight">
              Let's Start Their Next Adventure
            </h2>

            <p className="text-base sm:text-lg text-[#69717A] leading-relaxed">
              Have questions about programs, schedules, enrollment, or visiting our school?
              We’d love to meet your family, show you around our sunlit classrooms, and introduce you to our educators.
            </p>

            {/* Fictional Demonstration Details */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-xs border border-[#102B49]/5">
                <div className="w-10 h-10 rounded-xl bg-[#FFF1F3] text-[#FF7043] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#69717A] font-bold uppercase tracking-wider">Campus Address</div>
                  <div className="font-display font-bold text-base text-[#102B49]">
                    24 Garden Lane, Sunnybrook
                  </div>
                  <div className="text-xs text-[#69717A]">Safe residential area with private parent drop-off loop</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-xs border border-[#102B49]/5">
                <div className="w-10 h-10 rounded-xl bg-[#F0F9ED] text-[#72C83E] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#69717A] font-bold uppercase tracking-wider">Telephone Desk</div>
                  <a href="tel:18005550198" className="font-display font-bold text-base text-[#102B49] hover:text-[#FF7043] transition-colors">
                    +1 (800) 555-0198
                  </a>
                  <div className="text-xs text-[#69717A]">Warm, knowledgeable admissions team</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-xs border border-[#102B49]/5">
                <div className="w-10 h-10 rounded-xl bg-[#EDF8FD] text-[#55BFEF] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#69717A] font-bold uppercase tracking-wider">Email Inquiries</div>
                  <a href="mailto:hello@littlesproutacademy.com" className="font-display font-bold text-base text-[#102B49] hover:text-[#FF7043] transition-colors">
                    hello@littlesproutacademy.com
                  </a>
                  <div className="text-xs text-[#69717A]">Response guaranteed within 24 business hours</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-xs border border-[#102B49]/5">
                <div className="w-10 h-10 rounded-xl bg-[#FFF8E8] text-[#FFB52E] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#69717A] font-bold uppercase tracking-wider">Operating Hours</div>
                  <div className="font-display font-bold text-base text-[#102B49]">
                    Monday–Friday, 8:00 AM–5:30 PM
                  </div>
                  <div className="text-xs text-[#69717A]">Flexible full-day &amp; half-day enrollment options</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Visit Booking & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-[#102B49]/5 relative">
              <div className="absolute top-4 right-6 text-[#FFB52E]">
                <StarDoodle size={28} color="#FFB52E" />
              </div>

              <h3 className="font-display font-bold text-2xl text-[#102B49] mb-1">
                Schedule a School Visit
              </h3>
              <p className="text-xs sm:text-sm text-[#69717A] mb-6">
                Fill in the details below and we will confirm your personalized tour slot.
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-[#EAF7E3] text-[#72C83E] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-display font-extrabold text-2xl text-[#102B49]">
                    Thank you! We'll be in touch soon.
                  </h4>
                  <p className="text-sm text-[#69717A] max-w-md mx-auto">
                    We have received your visit request for{' '}
                    <strong className="text-[#102B49]">{formData.visitDate}</strong>. Our admissions director will email you the tour confirmation and directions.
                  </p>
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        parentName: '',
                        email: '',
                        phone: '',
                        childAge: '3',
                        programInterest: 'Preschool Explorers',
                        visitDate: '',
                        message: ''
                      });
                    }}
                  >
                    Send Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Parent Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#102B49] mb-1.5">
                        Parent or Guardian Name <span className="text-[#FF7043]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => {
                          setFormData({ ...formData, parentName: e.target.value });
                          if (errors.parentName) setErrors({ ...errors, parentName: '' });
                        }}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#FFFCF9] border text-sm text-[#102B49] focus:outline-none focus:ring-2 focus:ring-[#FF7043] transition-all ${
                          errors.parentName ? 'border-red-400 bg-red-50/20' : 'border-[#102B49]/15'
                        }`}
                      />
                      {errors.parentName && (
                        <p className="text-xs text-red-500 mt-1 font-medium">{errors.parentName}</p>
                      )}
                    </div>

                    {/* Email */}
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
                        placeholder="e.g. sarah@example.com"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#FFFCF9] border text-sm text-[#102B49] focus:outline-none focus:ring-2 focus:ring-[#FF7043] transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#102B49]/15'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-[#102B49] mb-1.5">
                        Phone Number <span className="text-[#FF7043]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="e.g. (555) 234-5678"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#FFFCF9] border text-sm text-[#102B49] focus:outline-none focus:ring-2 focus:ring-[#FF7043] transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#102B49]/15'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>
                      )}
                    </div>

                    {/* Child Age */}
                    <div>
                      <label className="block text-xs font-bold text-[#102B49] mb-1.5">
                        Child Age (Years)
                      </label>
                      <select
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FFFCF9] border border-[#102B49]/15 text-sm text-[#102B49] focus:outline-none focus:ring-2 focus:ring-[#FF7043] transition-all"
                      >
                        <option value="2">2 Years (Toddler Sprouts)</option>
                        <option value="3">3 Years (Preschool Explorers)</option>
                        <option value="4">4 Years (Kindergarten Champions)</option>
                        <option value="5">5–6 Years (Pre-K Scholars)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Program Interest */}
                    <div>
                      <label className="block text-xs font-bold text-[#102B49] mb-1.5">
                        Program of Interest
                      </label>
                      <select
                        value={formData.programInterest}
                        onChange={(e) => setFormData({ ...formData, programInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FFFCF9] border border-[#102B49]/15 text-sm text-[#102B49] focus:outline-none focus:ring-2 focus:ring-[#FF7043] transition-all"
                      >
                        <option value="Toddler Sprouts">Toddler Sprouts (Ages 2–3)</option>
                        <option value="Preschool Explorers">Preschool Explorers (Ages 3–4)</option>
                        <option value="Kindergarten Champions">Kindergarten Champions (Ages 4–5)</option>
                        <option value="Pre-K Scholars">Pre-K Ready Scholars (Ages 5–6)</option>
                      </select>
                    </div>

                    {/* Preferred Visit Date */}
                    <div>
                      <label className="block text-xs font-bold text-[#102B49] mb-1.5">
                        Preferred Visit Date <span className="text-[#FF7043]">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.visitDate}
                        onChange={(e) => {
                          setFormData({ ...formData, visitDate: e.target.value });
                          if (errors.visitDate) setErrors({ ...errors, visitDate: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-2xl bg-[#FFFCF9] border text-sm text-[#102B49] focus:outline-none focus:ring-2 focus:ring-[#FF7043] transition-all ${
                          errors.visitDate ? 'border-red-400 bg-red-50/20' : 'border-[#102B49]/15'
                        }`}
                      />
                      {errors.visitDate && (
                        <p className="text-xs text-red-500 mt-1 font-medium">{errors.visitDate}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#102B49] mb-1.5">
                      Anything specific you’d love to know or share about your child?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. My daughter loves watercolors and we're looking for full-day options starting this autumn."
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFFCF9] border border-[#102B49]/15 text-sm text-[#102B49] focus:outline-none focus:ring-2 focus:ring-[#FF7043] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      showArrow
                      disabled={isSubmitting}
                      className="w-full justify-center"
                    >
                      {isSubmitting ? 'Sending Request...' : 'Request a Visit'}
                    </Button>
                  </div>

                  <p className="text-center text-xs text-[#69717A] pt-1">
                    🔒 We respect your privacy. No spam. Tour schedules are subject to availability.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

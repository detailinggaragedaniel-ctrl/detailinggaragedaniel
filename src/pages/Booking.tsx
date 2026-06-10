import { useState } from 'react';
import { Calendar, Clock, Car, Sparkles, CheckCircle } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    vehicle: '',
    date: '',
    time: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        vehicle: '',
        date: '',
        time: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    'Essential Package - $199',
    'Premium Package - $399',
    'Elite Package - $799',
    'Paint Correction',
    'Ceramic Coating',
    'Custom Service',
  ];

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ];

  return (
    <div className="min-h-screen text-white" style={{ paddingTop: '88px' }}>
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6 inline-block">
              <div className="flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-3">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-accent font-semibold">Book Your Service</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 uppercase text-white">
              Schedule Appointment
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Reserve your spot for premium detailing. We'll transform your vehicle into a masterpiece.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2 uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2 uppercase">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="vehicle" className="block text-sm font-semibold text-white mb-2 uppercase">
                    <Car className="inline w-4 h-4 mr-1" />
                    Vehicle Make & Model
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    required
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="e.g., Tesla Model S"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-white mb-2 uppercase">
                    Select Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  >
                    <option value="">Choose a package</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-white mb-2 uppercase">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-white mb-3 uppercase">
                    <Clock className="inline w-4 h-4 mr-1" />
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {timeSlots.map((slot) => (
                      <label
                        key={slot}
                        className={`relative cursor-pointer group ${
                          formData.time === slot ? 'scale-95' : ''
                        }`}
                      >
                        <input
                          type="radio"
                          name="time"
                          value={slot}
                          checked={formData.time === slot}
                          onChange={handleChange}
                          className="sr-only"
                          required
                        />
                        <div
                          className={`text-center py-3 px-2 rounded-lg border-2 transition-all duration-300 ${
                            formData.time === slot
                              ? 'bg-accent border-accent text-[#1A1A1A] font-bold'
                              : 'bg-surface border-border text-white/70 hover:border-accent hover:text-white'
                          }`}
                        >
                          {slot}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2 uppercase">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  placeholder="Any special requests or concerns about your vehicle?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-[#1A1A1A] text-lg font-bold py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Confirm Booking
              </button>

              <p className="text-center text-white/70 text-sm mt-6">
                You'll receive a confirmation email within 24 hours
              </p>
            </form>
          ) : (
            <div className="bg-card border border-accent rounded-3xl p-12 text-center">
              <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-accent" />
              </div>
              <h2 className="text-4xl font-heading font-bold text-white mb-4">Booking Submitted!</h2>
              <p className="text-xl text-white/70 mb-8">
                Thank you for choosing Elite Detailing. We'll contact you shortly to confirm your appointment.
              </p>
              <div className="inline-block bg-accent/10 border border-accent/30 rounded-2xl px-8 py-4">
                <p className="text-accent font-semibold">Confirmation email sent to:</p>
                <p className="text-white text-lg mt-1">{formData.email}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white uppercase">
              What to Expect
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Confirmation',
                desc: 'Receive booking confirmation and service details via email within 24 hours',
              },
              {
                step: '2',
                title: 'Preparation',
                desc: 'Our team prepares specialized products and equipment for your vehicle',
              },
              {
                step: '3',
                title: 'Transformation',
                desc: 'Experience premium detailing service that exceeds expectations',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-card border border-border rounded-2xl p-8 hover:border-accent transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-accent text-3xl font-heading font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-3xl font-heading font-bold text-white mb-4 uppercase">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

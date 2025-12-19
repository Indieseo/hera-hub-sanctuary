import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Hera Hub gave me the professional environment I needed to scale my business. The community of women entrepreneurs is incredible.",
      author: "Sarah Chen",
      role: "Founder, TechFlow Solutions",
      location: "Hera Hub DC",
      rating: 5,
    },
    {
      quote: "The flexibility and amenities are unmatched. I've grown my team from 2 to 12 people using Hera Hub's private offices.",
      author: "Maria Rodriguez",
      role: "CEO, Bloom Marketing",
      location: "Hera Hub Mission Valley",
      rating: 5,
    },
    {
      quote: "More than just a workspace - it's a sanctuary where I can focus, create, and connect with like-minded women.",
      author: "Jennifer Park",
      role: "Creative Director",
      location: "Hera Hub Carlsbad",
      rating: 5,
    },
  ];

  const stats = [
    { value: "20,000+", label: "Women Empowered" },
    { value: "17", label: "Locations Nationwide" },
    { value: "98%", label: "Member Satisfaction" },
    { value: "10+", label: "Years of Excellence" },
  ];

  return (
    <section className="relative z-10 px-6 md:px-12 py-8 animate-fade-in">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Trusted by <span className="font-semibold gradient-text">Thousands</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join the community of women entrepreneurs who have found their sanctuary
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 glass-card rounded-2xl hover-lift">
              <p className="text-3xl md:text-4xl font-light gradient-text mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-card rounded-2xl p-6 hover-lift relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-rose">
                <Quote className="w-5 h-5 text-white" />
              </div>

              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-primary mt-1">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

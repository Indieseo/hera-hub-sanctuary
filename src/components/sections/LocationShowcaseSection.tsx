import { useState } from "react";
import { MapPin, Users, Clock, Coffee, Wifi, Car } from "lucide-react";

const LocationShowcaseSection = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      name: "Mission Valley",
      city: "San Diego, CA",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format",
      members: 450,
      established: 2011,
      amenities: ["Private Offices", "Conference Rooms", "Cafe", "Parking"],
    },
    {
      name: "Carlsbad",
      city: "San Diego, CA",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format",
      members: 320,
      established: 2013,
      amenities: ["Ocean Views", "Wellness Room", "Kitchen", "Events Space"],
    },
    {
      name: "Sorrento Valley",
      city: "San Diego, CA",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format",
      members: 280,
      established: 2015,
      amenities: ["Tech Hub", "Phone Booths", "Lounge", "24/7 Access"],
    },
    {
      name: "DC Metro",
      city: "Washington, DC",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format",
      members: 520,
      established: 2016,
      amenities: ["Capitol Views", "Board Room", "Podcast Studio", "Nursing Room"],
    },
    {
      name: "Phoenix",
      city: "Phoenix, AZ",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format",
      members: 380,
      established: 2018,
      amenities: ["Desert Patio", "Hot Desks", "Mail Service", "Printing"],
    },
  ];

  const amenityIcons: Record<string, React.ElementType> = {
    "Private Offices": Users,
    "Conference Rooms": Users,
    "Cafe": Coffee,
    "Parking": Car,
    "Ocean Views": MapPin,
    "Wellness Room": Users,
    "Kitchen": Coffee,
    "Events Space": Users,
    "Tech Hub": Wifi,
    "Phone Booths": Users,
    "Lounge": Coffee,
    "24/7 Access": Clock,
    "Capitol Views": MapPin,
    "Board Room": Users,
    "Podcast Studio": Users,
    "Nursing Room": Users,
    "Desert Patio": MapPin,
    "Hot Desks": Users,
    "Mail Service": Users,
    "Printing": Users,
  };

  return (
    <section className="relative z-10 px-6 md:px-12 py-8 animate-fade-in">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Preview Your <span className="font-semibold gradient-text">Locations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how your 17 locations will shine on the new platform
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Location List */}
          <div className="space-y-3">
            {locations.map((location, index) => (
              <button
                key={location.name}
                onClick={() => setActiveLocation(index)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                  activeLocation === index
                    ? "glass-card ring-2 ring-primary shadow-rose"
                    : "hover:bg-muted/50"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  activeLocation === index
                    ? "gradient-bg"
                    : "bg-muted"
                }`}>
                  <MapPin className={`w-5 h-5 ${activeLocation === index ? "text-white" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <p className="font-medium text-foreground">{location.name}</p>
                  <p className="text-sm text-muted-foreground">{location.city}</p>
                </div>
              </button>
            ))}
            
            <div className="p-4 rounded-xl bg-muted/30 border border-dashed border-border">
              <p className="text-sm text-muted-foreground text-center">
                + 12 more locations
              </p>
            </div>
          </div>

          {/* Location Preview */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={locations[activeLocation].image}
                  alt={locations[activeLocation].name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-semibold text-white">Hera Hub {locations[activeLocation].name}</h3>
                  <p className="text-white/80">{locations[activeLocation].city}</p>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-muted/50">
                    <Users className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-light gradient-text">{locations[activeLocation].members}+</p>
                    <p className="text-xs text-muted-foreground">Active Members</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-muted/50">
                    <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-light gradient-text">Since {locations[activeLocation].established}</p>
                    <p className="text-xs text-muted-foreground">Established</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-3">Featured Amenities</p>
                  <div className="flex flex-wrap gap-2">
                    {locations[activeLocation].amenities.map((amenity) => {
                      const Icon = amenityIcons[amenity] || Users;
                      return (
                        <span
                          key={amenity}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-sm text-foreground"
                        >
                          <Icon className="w-3.5 h-3.5 text-primary" />
                          {amenity}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationShowcaseSection;

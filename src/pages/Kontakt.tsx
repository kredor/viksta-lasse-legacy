import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    namn: "",
    epost: "",
    amne: "",
    meddelande: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Här skulle formuläret skickas till backend
    toast({
      title: "Meddelande skickat!",
      description: "Vi återkommer så snart som möjligt.",
    });

    // Återställ formuläret
    setFormData({
      namn: "",
      epost: "",
      amne: "",
      meddelande: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Kontakt</h1>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Skicka ett meddelande</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="namn">Namn *</Label>
                <Input
                  id="namn"
                  name="namn"
                  value={formData.namn}
                  onChange={handleChange}
                  required
                  placeholder="Ditt namn"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="epost">E-post *</Label>
                <Input
                  id="epost"
                  name="epost"
                  type="email"
                  value={formData.epost}
                  onChange={handleChange}
                  required
                  placeholder="din.epost@exempel.se"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amne">Ämne *</Label>
                <Input
                  id="amne"
                  name="amne"
                  value={formData.amne}
                  onChange={handleChange}
                  required
                  placeholder="Vad gäller ditt meddelande?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="meddelande">Meddelande *</Label>
                <Textarea
                  id="meddelande"
                  name="meddelande"
                  value={formData.meddelande}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Skriv ditt meddelande här..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Skicka meddelande
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Kontaktuppgifter</h2>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <MapPin className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Postadress</h3>
                    <p className="text-muted-foreground">
                      Stiftelsen Fonden till Viksta-Lasses minne
                      <br />
                      c/o Ordförande
                      <br />
                      [Adress kommer att fyllas i]
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <Mail className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">E-post</h3>
                    <p className="text-muted-foreground">
                      [E-postadress kommer att fyllas i]
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Organisationsnummer</h3>
                    <p className="text-muted-foreground">XXX XXX-XXXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-muted rounded-lg p-6">
              <h3 className="font-semibold mb-3">Öppettider</h3>
              <p className="text-muted-foreground text-sm">
                Vi svarar på e-post och meddelanden vardagar mellan 09:00-17:00.
                Under evenemang kan svarstiden vara längre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Kontakt;

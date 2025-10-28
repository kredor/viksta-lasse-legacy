import Layout from "@/components/Layout";
import vikstaLasseLogo from "@/assets/viksta-lasse-logo.jpg";
import vikstaLassePhoto from "@/assets/viksta-lasse-photo.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with dark background */}
      <section className="relative bg-viksta-dark min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-12">
              <img 
                src={vikstaLasseLogo} 
                alt="Viksta-Lasse - Stiftelsen Fonden till Viksta-Lasses minne" 
                className="max-w-2xl w-full mx-auto"
              />
            </div>
            
            {/* Photo of Viksta-Lasse */}
            <div className="max-w-3xl mx-auto">
              <img 
                src={vikstaLassePhoto} 
                alt="Viksta-Lasse spelar fiol" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

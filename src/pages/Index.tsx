import Layout from "@/components/Layout";
import vikstaLasseLogo from "@/assets/viksta-lasse-logo.jpg";
import vikstaLassePhoto from "@/assets/viksta-lasse-photo.jpg";

const Index = () => {
  return (
    <Layout showFooter={false}>
      {/* Hero Section with black background */}
      <section className="relative bg-black min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src={vikstaLasseLogo} 
                alt="Viksta-Lasse" 
                className="max-w-2xl w-full mx-auto"
              />
            </div>
            
            {/* Title */}
            <h1 className="text-viksta-gold font-serif text-2xl md:text-3xl mb-12 tracking-wide">
              STIFTELSEN FONDEN TILL VIKSTA-LASSES MINNE
            </h1>
            
            {/* Photo of Viksta-Lasse */}
            <div className="max-w-2xl mx-auto mt-8">
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

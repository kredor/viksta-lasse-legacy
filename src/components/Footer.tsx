const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Stiftelsen Fonden till Viksta-Lasses minne</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bevarar och främjar arvet efter den legendariske spelmannen Viksta-Lasse
              och svensk folkmusiktradition.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Stiftelsen Fonden till Viksta-Lasses minne</p>
              <p>c/o Ordförande</p>
              <p>Org.nr: XXX XXX-XXXX</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Snabblänkar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/om-stiftelsen" className="text-muted-foreground hover:text-primary transition-colors">
                  Om Stiftelsen
                </a>
              </li>
              <li>
                <a href="/stipendier" className="text-muted-foreground hover:text-primary transition-colors">
                  Ansök om stipendium
                </a>
              </li>
              <li>
                <a href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakta oss
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Stiftelsen Fonden till Viksta-Lasses minne. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

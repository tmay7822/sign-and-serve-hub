import { StandardCTAButtons } from '@/components/StandardCTAButtons';

const TopMiniCTA = () => {
  return (
    <div className="bg-card/50 border border-border rounded-lg p-6 my-8">
      <p className="text-center text-muted-foreground mb-6">
        Need a mobile notary in Southwest Ohio? We come to you.
      </p>
      <StandardCTAButtons variant="top" />
    </div>
  );
};

export default TopMiniCTA;
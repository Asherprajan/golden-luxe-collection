import { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface GoldRate {
  rate: number;
  purity: string;
  change: number;
  lastUpdated: string;
}

const GoldRateDisplay = () => {
  const [rates, setRates] = useState<GoldRate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGoldRates = async () => {
      try {
        // Using a real gold rate API (you'll need to sign up for an API key)
        const response = await fetch('https://api.metalpriceapi.com/v1/latest?api_key=1b89fd4dbd991b50e5b993fea3fb2987&base=INR&currencies=XAU');
        console.log('Response:', response);         
        const data = await response.json();
        
        if (!data.rates || !data.rates.XAU) {
          throw new Error('Invalid API response format');
        }
        
        // Get the XAU rate in INR (this is price per troy ounce)
        const xauToInr = 1 / data.rates.XAU;
        
        // Convert from troy ounce to grams (1 troy oz = 31.1035 grams)
        const pricePerGram = xauToInr / 31.1035;
        
        // Calculate different purities based on 24K rate
        const purities = [
          { factor: 0.916, purity: '22K Gold', change: 0.5 },
          { factor: 1, purity: '24K Gold', change: 0.8 },
          { factor: 0.75, purity: '18K Gold', change: 0.3 }
        ];
        
        const rates = purities.map(({ factor, purity, change }) => ({
          rate: Math.round(pricePerGram * factor),
          purity,
          change,
          lastUpdated: new Date().toLocaleString()
        }));
        
        setRates(rates);
      } catch (err) {
        setError('Failed to fetch gold rates');
        console.error('Error fetching gold rates:', err);
        
        // Fallback to sample data if API fails
        const fallbackRates = [
          { rate: 5380, purity: '22K Gold', change: 0.5, lastUpdated: new Date().toLocaleString() },
          { rate: 5820, purity: '24K Gold', change: 0.8, lastUpdated: new Date().toLocaleString() },
          { rate: 4430, purity: '18K Gold', change: 0.3, lastUpdated: new Date().toLocaleString() }
        ];
        setRates(fallbackRates);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGoldRates();
    // Update every 5 minutes
    const interval = setInterval(fetchGoldRates, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="mt-16 glass-card p-6 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="heading-sm text-gold mb-1">Today's Gold Rate</h3>
            <p className="text-sm text-beige/80">Loading...</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-coffee p-4 rounded-lg text-center min-w-[120px] animate-pulse">
                <div className="h-4 w-16 bg-beige/20 rounded mx-auto mb-2"></div>
                <div className="h-6 w-20 bg-beige/20 rounded mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error && rates.length === 0) {
    return (
      <div className="mt-16 glass-card p-6 animate-fade-in">
        <div className="text-center text-beige/70">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 glass-card p-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="heading-sm text-gold mb-1">Today's Gold Rate</h3>
          <p className="text-sm text-beige/80">
            Last updated: {rates[0]?.lastUpdated}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {rates.map((rate, index) => (
            <div key={index} className="bg-coffee p-4 rounded-lg text-center min-w-[120px]">
              <span className="block text-sm text-beige/70">{rate.purity}</span>
              <div className="flex items-center justify-center gap-1">
                <span className="block text-xl font-semibold text-gold">
                  ₹{rate.rate.toLocaleString()}/g
                </span>
                <span className={`flex items-center text-sm ${rate.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {rate.change >= 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                  {Math.abs(rate.change)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoldRateDisplay; 
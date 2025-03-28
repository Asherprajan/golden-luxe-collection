
export type Category = {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export type Product = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string;
  category_id: string;
  material: string | null;
  occasion: string | null;
  created_at: string;
}


export type GoldRate = {
  id: string;
  rate: number;
  created_at: string;
}


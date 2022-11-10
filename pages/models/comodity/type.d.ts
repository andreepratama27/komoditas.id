type ComodityType = {
  id: string;
  value: string;
  name: string;
  display: string;
}

enum Comodity {
  "Beras",
  "Daging Sapi",
  "Daging Ayam",
  "Telur Ayam",
  "Bawang Merah",
  "Bawang Putih",
  "Cabai Merah",
  "Cabai Rawit",
  "Minyak Goreng",
  "Gula Pasir",
}

interface APIResponse {
  national_commodity_price: Record<string, ComodityType[]>,
  updated_at: string,
}

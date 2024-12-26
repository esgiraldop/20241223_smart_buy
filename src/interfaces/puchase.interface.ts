export interface IPurchase {
  id: string;
  name: string;
  amount: number;
  date: string;
  state: string; // Pending | Purchased
  category: string;
}

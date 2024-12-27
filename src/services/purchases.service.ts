import AsyncStorage from '@react-native-async-storage/async-storage';
import {IPurchase} from '../interfaces/puchase.interface';

export class PurchasesService {
  static PURCHASES_KEY = 'purchases';

  static async getAll(): Promise<IPurchase[]> {
    try {
      const jsonValue = await AsyncStorage.getItem(this.PURCHASES_KEY);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.error('Error reading purchases from Async Storage:', e);
      return [];
    }
  }

  static async getSinglePurchase(puchaseId: string): Promise<IPurchase | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(this.PURCHASES_KEY);
      const parsedJson = jsonValue != null ? JSON.parse(jsonValue) : [];
      if (parsedJson.length < 1) {
        console.log('No Purchase could be found');
      }
      return parsedJson.filter(
        (purchase: IPurchase) => purchase.id === puchaseId,
      )[0];
    } catch (e) {
      console.error('Error reading purchases from Async Storage:', e);
      return null;
    }
  }

  static async create(newPurchase: IPurchase): Promise<void> {
    try {
      const purchases = await this.getAll();
      purchases.push(newPurchase);
      await AsyncStorage.setItem(this.PURCHASES_KEY, JSON.stringify(purchases));
    } catch (e) {
      console.error('Error adding purchase to Async Storage:', e);
    }
  }

  static async update(updatedPurchase: IPurchase): Promise<void> {
    try {
      const purchases = await this.getAll();
      const index = purchases.findIndex(p => p.id === updatedPurchase.id);
      if (index !== -1) {
        purchases[index] = updatedPurchase;
        await AsyncStorage.setItem(
          this.PURCHASES_KEY,
          JSON.stringify(purchases),
        );
      }
    } catch (e) {
      console.error('Error editing purchase in Async Storage:', e);
    }
  }

  static async delete(id: string): Promise<void> {
    try {
      const purchases = await this.getAll();
      const updatedPurchases = purchases.filter(p => p.id !== id);
      await AsyncStorage.setItem(
        this.PURCHASES_KEY,
        JSON.stringify(updatedPurchases),
      );
    } catch (e) {
      console.error('Error deleting purchase from Async Storage:', e);
    }
  }
}

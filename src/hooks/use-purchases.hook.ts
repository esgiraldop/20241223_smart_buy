import {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {IPurchase} from '../interfaces/puchase.interface';
import {PurchasesService} from '../services/purchases.service';

export function usePurchases() {
  const [purchases, setPurchases] = useState<IPurchase[]>([]);
  const [errorLoadingPurchases, setErrorLoadingPurchases] = useState<
    boolean | null
  >(null);
  const [isPurchaseLoading, setIsPurchaseLoading] = useState<boolean | null>(
    null,
  );

  useFocusEffect(
    useCallback(() => {
      async function getPurchasesInfo() {
        setIsPurchaseLoading(true);
        const PurchasesResponse = await PurchasesService.getAll();
        if (PurchasesResponse) {
          setPurchases(PurchasesResponse);
          setIsPurchaseLoading(false);
          setErrorLoadingPurchases(false);
        } else {
          setIsPurchaseLoading(false);
          setErrorLoadingPurchases(true);
        }
      }

      getPurchasesInfo();
      return () => getPurchasesInfo();
    }, []),
  );

  return {
    purchases,
    setPurchases,
    errorLoadingPurchases,
    setErrorLoadingPurchases,
    isPurchaseLoading,
    setIsPurchaseLoading,
  };
}

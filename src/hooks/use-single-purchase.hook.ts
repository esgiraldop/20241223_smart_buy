import {useCallback, useState} from 'react';
import {PurchasesService} from '../services/purchases.service';
import {useFocusEffect} from '@react-navigation/native';
import {IPurchase} from '../interfaces/puchase.interface';

export function usePurchaseById(purchaseId: string) {
  const [purchaseInfo, setPurchaseInfo] = useState<IPurchase | null>(null);
  const [isPurchaseLoading, setIsPurchaseLoading] = useState<boolean | null>(
    false,
  );
  const [errorLoadingPurchase, setErrorLoadingPurchase] = useState<
    boolean | null
  >(null);

  useFocusEffect(
    useCallback(() => {
      async function getPurchaseInfo(id: string) {
        setIsPurchaseLoading(true);
        const purchaseInfoResponse = await PurchasesService.getSinglePurchase(
          String(id),
        );
        if (purchaseInfoResponse) {
          setPurchaseInfo(purchaseInfoResponse);
          setIsPurchaseLoading(false);
          setErrorLoadingPurchase(false);
        } else {
          setIsPurchaseLoading(false);
          setErrorLoadingPurchase(true);
        }
      }

      getPurchaseInfo(purchaseId);
      return () => getPurchaseInfo(purchaseId);
    }, [purchaseId]),
  );

  return {
    purchaseInfo,
    setPurchaseInfo,
    isPurchaseLoading,
    setIsPurchaseLoading,
    errorLoadingPurchase,
    setErrorLoadingPurchase,
  };
}

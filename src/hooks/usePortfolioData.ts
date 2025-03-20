import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";

interface PortfolioData {
  id: string; // Document ID
  bio: string;
  image: string;
  projects: any[];
  skills: string[];
}

const usePortfolioData = (): [PortfolioData[] | null, boolean, any] => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData[] | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const dispatch = useDispatch<AppDispatch>();
  // const portfolios = useSelector(
  //   (state: RootState) => state.portfolio.portfolios
  // );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading state
      setError(null); // Reset any previous errors

      try {
        // Fetch all documents in the "portfolio" collection
        const querySnapshot = await getDocs(collection(db, "portfolio"));

        if (!querySnapshot.empty) {
          // Map over the documents and extract their data along with the document ID
          const data: PortfolioData[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as PortfolioData[];

          setPortfolioData(data);

          // dispatch(data);
        } else {
          console.log("No documents found in the portfolio collection.");
          setPortfolioData([]);
        }
      } catch (err) {
        setError(err);
        console.error("Error fetching portfolio data:", err);
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this only runs once on mount

  return [portfolioData, loading, error];
};

export default usePortfolioData;

import { useState, useEffect } from 'react';
import { fetchAllTeas } from '../api/teaApi';

/*
    This hook fetches all the teas from the backend and returns the teas,
    loading state, and error state. The hook uses the fetchAllTeas function
    from the teaApi file to make the API call to the backend. The hook is used
    in the TeaList component to fetch the teas when the component mounts.
*/
export const useTeas = () => {
    const [teas, setTeas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadTeas = async () => {
            try {
                const data = await fetchAllTeas();
                setTeas(data);
            } catch (err) {
                console.error('Error fetching teas:', err);
                setError('Failed to fetch teas.');
            } finally {
                setLoading(false);
            }
        };

        loadTeas();
    }, []);

    return { teas, loading, error };
};
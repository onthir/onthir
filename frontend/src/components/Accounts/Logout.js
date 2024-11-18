import { useEffect } from "react";
import axios from "axios";

export const Logout = () => {
    useEffect(() => {
        (async () => {
            try {
                const refresh_token = localStorage.getItem('refresh_token');
                
                await axios.post(
                    'http://localhost:8000/accounts/logout/',
                    { refresh_token },
                    { headers: { 'Content-Type': 'application/json' } }
                );
                
                // Clear local storage after successfully logging out
                localStorage.clear();
                axios.defaults.headers.common['Authorization'] = null;
                
                // Redirect to login page
                window.location.href = '/login';
            } catch (e) {
                console.log('Logout not working', e);
            }
        })();
    }, []);
    
    return <div></div>;
}

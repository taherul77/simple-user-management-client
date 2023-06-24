import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | User Management `;
    }, [title]);
};
export default useTitle;
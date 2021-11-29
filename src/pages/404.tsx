import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            router.push("/");
        }, 4000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [router]);

    return (
        <div className="not_found-wrapper">
            <div>404: Not Found</div>
            <div>Something is wrong...</div>
        </div>
    );
};

export default NotFound;

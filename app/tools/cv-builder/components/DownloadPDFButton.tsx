"use client";

import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CVDocument from "./CVDocument";

export default function DownloadPDFButton() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Ensure code only runs on the client
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <button
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
                Preparing...
            </button>
        );
    }

    return (
        <PDFDownloadLink document={<CVDocument />} fileName="my-resume.pdf">
            {({ loading }) => (
                <button
                    className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                    {loading ? "Preparing..." : "Download PDF"}
                </button>
            )}
        </PDFDownloadLink>
    );
}

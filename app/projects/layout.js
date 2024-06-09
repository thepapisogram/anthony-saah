import site_info from "@/site_info";

export const metadata = {
    title: site_info.projects.title
};

export default function RootLayout({ children }) {
    return (
        <main>
            {children}
        </main>
    );
}

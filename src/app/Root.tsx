import { Outlet } from "react-router";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./context/ThemeContext";

export default function Root() {
    return (
        <ThemeProvider>
            <div className="min-h-screen">
                <Navigation />
                <main>
                    <Outlet />
                </main>
            </div>
        </ThemeProvider>
    );
}  
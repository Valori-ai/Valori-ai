'use client';
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'

const layout = ({ children }) => {
    return (
        <div>
            <div className="sticky bg-white dark:bg-background top-0 pt-0 z-50">
                <Navbar />
            </div>
            {children}
            <div className="pt-16">
                <Footer />
            </div>
        </div>
    )
}

export default layout

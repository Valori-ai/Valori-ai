import { cookies } from "next/headers"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/shared/AppSidebar"

const layout = async ({children}) => {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"

    return (
        <SidebarProvider defaultOpen={defaultOpen}>
           <AppSidebar />
            <main>
               <div className="m-2">
               <SidebarTrigger />
               </div>
                {children}
            </main>
        </SidebarProvider>
    )
}

export default layout
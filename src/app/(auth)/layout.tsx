interface AuthLayoutProps {
    children: React.ReactNode;
};

const DocumentsLayout = ({ children }: AuthLayoutProps) => {
    return ( 
        <div>
            <nav className="flex gap-x-2 gap-y-4 bg-teal-200">
                Note Sphere Login
            </nav>
            {children}
        </div>
    );
}
 
export default DocumentsLayout;
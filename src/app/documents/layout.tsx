interface DocumentsLayoutProps {
    children: React.ReactNode;
};

const DocumentsLayout = ({ children }: DocumentsLayoutProps) => {
    return ( 
        <div>
            <nav className="flex gap-x-2 gap-y-4 bg-teal-200">
                Note Sphere
            </nav>
            {children}
        </div>
    );
}
 
export default DocumentsLayout;
interface DocumentIdPageProps {
    params: Promise<{ documentId: string}>;
};

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
    const { documentId } = await params;
    return ( 
        <div>
            <h1 className="text-purple-700">Document ID: {documentId}</h1>
        </div>
    );
}
 
export default DocumentIdPage;
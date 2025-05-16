// Add this script to admin.html
function exportToJson() {
    const listings = getListings();
    const jsonContent = {
        listings: listings
    };
    
    // Create a blob with the JSON content
    const blob = new Blob([JSON.stringify(jsonContent, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Create a download link
    const a = document.createElement('a');
    a.href = url;
    a.download = 'listings.json';
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
} 
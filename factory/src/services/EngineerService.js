export async function getAllReports() {
    const response = await fetch('/api/reports');
    return await response.json();
}
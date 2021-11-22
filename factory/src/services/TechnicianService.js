export async function getAllTools() {
    const response = await fetch('/api/tools');
    return await response.json();
}
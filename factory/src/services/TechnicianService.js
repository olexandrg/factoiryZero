export async function getAllTools() {
    const response = await fetch('/api/tools');
    return await response.json();
}

export async function getToolDirections(data) {
    const response = await fetch(`/api/directions`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({report: data})
      })
    return await response.json();
}
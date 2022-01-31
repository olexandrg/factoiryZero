export async function editToolDirections(data) {
    const response = await fetch(`/api/directions`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({report: data})
      })
    return await response.json();
}
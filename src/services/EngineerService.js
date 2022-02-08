export async function getAllReports() {
    const response = await fetch('/api/reports');
    return await response.json();
}

export async function createReport(data) {
    const response = await fetch('/api/reports', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({report: data})
      })
    return await response.json();
}
export async function fetchExample() {
    const res = await fetch("http://127.0.0.1:8001/api/v1/health");
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
}
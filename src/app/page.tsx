export default async function Home() {
    const now = new Date(Date.now()).toISOString()
    console.log("Regenerating", now);
    const data = await fetchData();
    return (
        <main>
            <p>
                {data}
            </p>
            <p>
                {now}
            </p>
        </main>
    )
}

async function fetchData(): Promise<string> {
    return (await (await fetch("https://catfact.ninja/fact")).json()).fact
}

export const revalidate = 5 // revalidate at most every hour

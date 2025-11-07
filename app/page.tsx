export default function HomePage() {
  const time = new Date().toLocaleString();
  return (
    <div className="card">
      <h1>Hi ??</h1>
      <p>Welcome! This app is ready for Vercel.</p>
      <p><strong>Server time:</strong> {time}</p>
      <div className="actions">
        <a className="button" href="/api/hello">Test API route</a>
        <a className="button secondary" href="https://nextjs.org/docs" target="_blank" rel="noreferrer">Next.js Docs</a>
      </div>
    </div>
  );
}

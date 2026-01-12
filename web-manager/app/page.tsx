export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#1f2937'
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: '#10b981'
      }}>
        Xin Chào! 👋
      </h1>
      <p style={{
        fontSize: '1.5rem',
        color: '#9ca3af',
        textAlign: 'center'
      }}>
        Đây là trang quản trị - GoRide Manager
      </p>
      <div style={{
        marginTop: '2rem',
        padding: '1rem 2rem',
        backgroundColor: '#374151',
        borderRadius: '8px',
        border: '1px solid #4b5563'
      }}>
        <p style={{ margin: 0, color: '#d1d5db' }}>🔧 Web Manager Interface (Admin)</p>
      </div>
    </main>
  )
}

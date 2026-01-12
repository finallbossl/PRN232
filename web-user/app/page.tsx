export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: '#2563eb'
      }}>
        Xin Chào! 👋
      </h1>
      <p style={{
        fontSize: '1.5rem',
        color: '#6b7280',
        textAlign: 'center'
      }}>
        Đây là trang web cho người dùng - GoRide
      </p>
      <div style={{
        marginTop: '2rem',
        padding: '1rem 2rem',
        backgroundColor: '#f3f4f6',
        borderRadius: '8px'
      }}>
        <p style={{ margin: 0 }}>🚀 Web User Interface</p>
      </div>
    </main>
  )
}

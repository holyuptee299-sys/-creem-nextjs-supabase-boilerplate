import Link from 'next/link'
export default function Home(){
 return (
  <main style={{minHeight:'100vh', background:'#fff', padding:'32px'}}>
   <div style={{maxWidth:'720px', margin:'0 auto', textAlign:'center', paddingTop:'80px'}}>
    <span style={{background:'#000', color:'#fff', padding:'4px 12px', borderRadius:'999px', fontSize:'12px'}}>For Creem $750 Bounty</span>
    <h1 style={{fontSize:'36px', fontWeight:'bold', marginTop:'24px'}}>Next.js + Supabase + Creem Boilerplate</h1>
    <p style={{color:'#666', marginTop:'16px'}}>Production-ready SaaS starter. Auth, payments, webhooks, subscriptions built-in.</p>
    <div style={{marginTop:'32px', display:'flex', gap:'16px', justifyContent:'center'}}>
     <Link href="/login" style={{background:'#000', color:'#fff', padding:'12px 24px', borderRadius:'8px'}}>Login</Link>
     <Link href="/dashboard" style={{border:'1px solid #ddd', padding:'12px 24px', borderRadius:'8px'}}>Dashboard</Link>
    </div>
    <div style={{marginTop:'48px', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'16px', textAlign:'left'}}>
     <div style={{border:'1px solid #eee', padding:'16px', borderRadius:'8px'}}>🔐 Supabase Auth</div>
     <div style={{border:'1px solid #eee', padding:'16px', borderRadius:'8px'}}>💳 Creem Checkout</div>
     <div style={{border:'1px solid #eee', padding:'16px', borderRadius:'8px'}}>🪝 Webhooks Ready</div>
    </div>
   </div>
  </main>
 )
}

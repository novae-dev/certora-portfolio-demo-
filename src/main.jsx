import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {LayoutDashboard, Award, Plus, ShieldCheck, Search, Settings, LogOut, Menu, X, Copy, CheckCircle2} from 'lucide-react';
import './styles.css';

const certs=[
 {id:'CRT-2026-001',name:'Frontend Development',recipient:'Amara Johnson',issuer:'NOVA Academy',date:'Sep 12, 2026',status:'Verified'},
 {id:'CRT-2026-002',name:'Product Design Foundations',recipient:'Daniel Smith',issuer:'NOVA Academy',date:'Sep 08, 2026',status:'Verified'},
 {id:'CRT-2026-003',name:'JavaScript Engineering',recipient:'Fatima Bello',issuer:'NOVA Academy',date:'Aug 29, 2026',status:'Verified'}
];

function App(){
 const [page,setPage]=useState('dashboard'); const [open,setOpen]=useState(false);
 const nav=[['dashboard','Dashboard',LayoutDashboard],['certificates','Certificates',Award],['create','Create Certificate',Plus],['verify','Verify',ShieldCheck],['settings','Settings',Settings]];
 return <div className="app">
  <aside className={open?'sidebar open':'sidebar'}>
   <div className="brand"><span className="brandmark">C</span><span>certora</span></div>
   <button className="close" onClick={()=>setOpen(false)}><X/></button>
   <nav>{nav.map(([key,label,Icon])=><button className={page===key?'nav active':'nav'} onClick={()=>{setPage(key);setOpen(false)}} key={key}><Icon size={18}/>{label}</button>)}</nav>
   <div className="sideBottom"><button className="nav"><LogOut size={18}/>Sign out</button></div>
  </aside>
  <main>
   <header><button className="menu" onClick={()=>setOpen(true)}><Menu/></button><div><span className="eyebrow">ORGANIZATION</span><strong>NOVA Academy</strong></div><div className="user">AM<span>Abdul Mateen</span></div></header>
   <div className="content">
    {page==='dashboard'&&<Dashboard setPage={setPage}/>}
    {page==='certificates'&&<Certificates/>}
    {page==='create'&&<Create setPage={setPage}/>}
    {page==='verify'&&<Verify/>}
    {page==='settings'&&<SettingsPage/>}
   </div>
  </main>
 </div>
}
function Dashboard({setPage}){
 return <><div className="hero"><div><span className="tag">CERTIFICATE MANAGEMENT</span><h1>Create. Issue. Verify.</h1><p>Build trusted digital credentials for your organization and give recipients a simple way to prove their achievements.</p></div><button className="primary" onClick={()=>setPage('create')}><Plus size={18}/>Create certificate</button></div>
 <div className="stats"><div><span>Total certificates</span><b>248</b><small>↑ 12% this month</small></div><div><span>Verified</span><b>231</b><small>93.1% of all credentials</small></div><div><span>Pending</span><b>17</b><small>Awaiting recipient action</small></div></div>
 <section className="panel"><div className="panelHead"><div><h2>Recent certificates</h2><p>Latest credentials issued by your organization.</p></div><button className="ghost" onClick={()=>setPage('certificates')}>View all</button></div><Table/></section></>
}
function Table(){return <div className="table">{certs.map(c=><div className="row" key={c.id}><div><b>{c.name}</b><span>{c.recipient} · {c.id}</span></div><span>{c.date}</span><em><CheckCircle2 size={15}/>{c.status}</em><button className="dots">•••</button></div>)}</div>}
function Certificates(){return <><div className="pageTitle"><div><span className="tag">CREDENTIALS</span><h1>Certificates</h1><p>Manage every credential issued by your organization.</p></div><button className="primary"><Plus size={18}/>Create certificate</button></div><div className="toolbar"><div className="search"><Search size={17}/><input placeholder="Search certificates..."/></div><button className="ghost">All statuses ▾</button></div><section className="panel"><Table/></section></>}
function Create({setPage}){return <><div className="pageTitle"><div><span className="tag">NEW CREDENTIAL</span><h1>Create certificate</h1><p>Issue a professional digital credential in a few steps.</p></div></div><div className="createGrid"><section className="panel form"><label>Recipient name<input defaultValue="Amara Johnson"/></label><label>Certificate title<input defaultValue="Frontend Development"/></label><label>Issuer<input defaultValue="NOVA Academy"/></label><label>Issue date<input type="date" defaultValue="2026-09-15"/></label><label>Certificate description<textarea defaultValue="Successfully completed the Frontend Development program and demonstrated practical proficiency in modern web development."/></label><div className="actions"><button className="ghost" onClick={()=>setPage('dashboard')}>Cancel</button><button className="primary" onClick={()=>setPage('certificates')}>Issue certificate</button></div></section><div className="preview"><span>PREVIEW</span><div className="certificate"><small>CERTORA</small><h2>Certificate of Achievement</h2><p>This certificate is proudly presented to</p><h3>Amara Johnson</h3><hr/><b>Frontend Development</b><p>Issued by NOVA Academy</p><div className="seal">✓</div></div></div></div></>}
function Verify(){return <div className="verifyPage"><div className="verifyCard"><div className="verifyIcon"><ShieldCheck/></div><span className="tag">PUBLIC VERIFICATION</span><h1>Verify a certificate</h1><p>Enter a certificate ID to verify its authenticity and view the credential details.</p><div className="verifyInput"><input defaultValue="CRT-2026-001"/><button className="primary">Verify</button></div><div className="verified"><CheckCircle2/><div><b>Certificate verified</b><span>Frontend Development · Amara Johnson</span></div></div></div></div>}
function SettingsPage(){return <><div className="pageTitle"><div><span className="tag">WORKSPACE</span><h1>Settings</h1><p>Manage your organization and profile preferences.</p></div></div><section className="panel settings"><label>Organization name<input defaultValue="NOVA Academy"/></label><label>Account email<input defaultValue="novadev248@gmail.com"/></label><label>Public verification URL<input defaultValue="certora.example/verify"/></label><button className="primary">Save changes</button></section></>}
createRoot(document.getElementById('root')).render(<App/>);

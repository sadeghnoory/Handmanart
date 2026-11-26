import {useState} from 'react'; import './Navbar.css';
export default function Navbar({cartCount,onCartClick,onSearch}) { const [open,setOpen]=useState(false); const [search,setSearch]=useState(false); const [searchText,setSearchText]=useState('');
 const links=[['Home','#home'],['Gallery','#gallery'],['Collections','#collections'],['About','#about'],['Contact','#contact']];
 return <header className="navbar"><a className="brand" href="#home"><span className="brand-mark">B</span><span>BLUE ATELIER<small>ART, MADE WITH INTENTION</small></span></a>
 <nav className={open?'nav-links open':'nav-links'}>{links.map(([n,h])=><a key={n} href={h} onClick={()=>setOpen(false)}>{n}</a>)}</nav>
 <div className="nav-actions"><button className="icon-btn" aria-label="Search artwork" onClick={()=>setSearch(!search)}>⌕</button><button className="cart-trigger" onClick={onCartClick} aria-label={`Open cart, ${cartCount} items`}>Bag <span>{cartCount}</span></button><button className="menu-btn" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}><i/><i/><i/></button></div>
 {search&&<form className="nav-search" onSubmit={e=>{e.preventDefault();onSearch(searchText);setSearch(false);}}><input autoFocus placeholder="Search paintings…" onChange={e=>setSearchText(e.target.value)}/><button>Search</button></form>}
 </header> }

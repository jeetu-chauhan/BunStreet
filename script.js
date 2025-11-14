document.addEventListener('DOMContentLoaded', ()=>{
  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  navToggle.addEventListener('click', ()=>{
    const open = siteNav.style.display === 'flex';
    siteNav.style.display = open ? '' : 'flex';
  });

  // menu filters
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.menu-grid .card');
  buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      buttons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(c=>{
        if(f==='all' || c.dataset.type===f) c.style.display = '';
        else c.style.display = 'none';
      })
    })
  })

  // simple contact handler
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.elements['name'].value.trim();
    const message = form.elements['message'].value.trim();
    if(!name || !message){
      alert('Please enter your name and message.');
      return;
    }
    // No backend in this demo — just show a thanks message
    alert('Thanks, ' + name + '! We received your message.');
    form.reset();
  })
})

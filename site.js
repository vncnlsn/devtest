(function(){var t=document.querySelector('.tog'),u=document.querySelector('.nav ul');
if(t)t.addEventListener('click',function(){var o=u.classList.toggle('open');t.setAttribute('aria-expanded',o)});
var r=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});r.forEach(function(el){io.observe(el)})}else r.forEach(function(el){el.classList.add('in')});
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear()})();

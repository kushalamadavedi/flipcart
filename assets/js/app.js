var cl=console.log;

const toggleBtn=document.getElementById('toggleBtn');
const navbar=document.getElementById('navbar');

const onMenuToggle= ()=>{
	let navbarClass=navbar.className;
	if(navbarClass.includes('active')){
		navbar.classList.remove('active');
    }else{
	    navbar.classList.add('active');
    }
};

toggleBtn.addEventListener('click', onMenuToggle);









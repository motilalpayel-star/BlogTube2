const params = new URLSearchParams(window.location.search);
const cat = (params.get('cat') || 'all').toLowerCase();

document.getElementById('current-category').textContent = 
    cat === 'all' ? 'All' : cat.replace(/-/g,' ');

document.querySelectorAll('.feature-box').forEach(box=>{
   const boxCat = box.dataset.category.toLowerCase();
   if (cat === 'all' || boxCat === cat){
       box.style.display = 'block';
   } else {
       box.style.display = 'none';
   }
});

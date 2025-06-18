let link = 'https://jsonplaceholder.typicode.com/posts';

console.log('Tes Github!');

fetch(link).then((res)=>res.json()).then((data)=>{
    let html = document.querySelector('.data');

    let fragment = '';
    let style = ''
    for(let i = 0; i< data.length;i++) {
        if(i%2 == 0) {
             style = 'even';
            fragment += '<span class='+style+'>'+data[i].title.toUpperCase()+'</span><hr>';

        } else {
            style = 'odd';
            fragment += '<span class='+style+'>'+data[i].title.toUpperCase()+'</span><hr>';
        }

    }
    console.log(fragment);
    html.innerHTML = fragment;
});
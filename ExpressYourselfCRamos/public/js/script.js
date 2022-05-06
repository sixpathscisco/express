const hamburger = document.getElementById('menu-icon');

const menu = document.getElementById('menu');

function hamburgerClick() {
    console.log('click');
    const current = menu.className;
    console.log('current: ', current);
    menu.className = (current === 'open') ? 'close' : 'open';
}

hamburger.onclick = hamburgerClick;

const carousel = document.getElementById('carousel');

function populate(n)
{
    for(let i = 0; i < n; i++)
    {
        const frame = document.createElement('div');
        frame.className = 'frame';

        const title = document.createElement('h2');
        title.textContent = `Frame ${i+1}`;
        frame.appendChild(title);
        carousel.appendChild(frame);
    }
}

populate(4);

const lbtn = document.getElementById('lbtn');
const rbtn = document.getElementById('rbtn');

function navigate(dir)
{
    return function() {
        console.log('dir: ', dir);
        const first = Array.from(carousel.getElementsByClassName('frame'))[0];
        let offset = first.style.marginLeft;
        console.log(typeof offset, offset, offset.length);
        if (offset.length === 0 || offset === null)
        {
            offset = Number(offset);
        }
        else
        {
            offset = Number(offset.substring(0, offset.length - 2));
        }
        console.log('offset: ', offset);
        first.style.marginLeft = (dir === 'right') ? offset + 500 : offset - 500;
    }
}

lbtn.onclick = navigate('left');
rbtn.onclick = navigate('right');
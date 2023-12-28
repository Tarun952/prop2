
document.getElementById('proposeBtn').addEventListener('click', () => {
  const proposalAnimation = document.getElementById('proposalAnimation');
  proposalAnimation.innerHTML = '<img src="https://i.pinimg.com/originals/f7/0d/8f/f70d8fb33cd7a4cfae832f8626f8f17c.gif" alt="Ring Animation">';
  document.querySelector('.afterAnimation').style.display='block'
  const container = document.querySelector('.container');
  container.style.display = 'none';

//   setTimeout(() => {
//     proposalAnimation.innerHTML = '<h2>Congratulations! 🎉🥳</h2><p>Will you be my girlfriend?</p>';
//   }, 3000); // Change this value to adjust the animation duration
});


document.querySelector('#yes').addEventListener('click',()=>{
  // const headLine="<h1>Love you 2<h1/>"

// document.querySelector('#yes').innerHTML=''
  document.querySelector('#proposalAnimation').style.display='none';
  document.querySelector('.yes1').style.display='block'
  document.querySelector('#no').style.display='none';
  document.querySelector('#yes').style.display='none';


})

document.querySelector('#no').addEventListener('click',()=>{
  // const headLine="<h1>Love you 2<h1/>"
// document.querySelector('#no').innerHTML='<img src ="https://media.istockphoto.com/id/151557041/photo/baby-crying.jpg?s=612x612&w=0&k=20&c=PR6N_B-8TRjeyBVPzud5Gw_sJZZlf3wOgtg_4-AmGbM=">'
  document.querySelector('#proposalAnimation').style.display='none';
  document.querySelector('.no1').style.display='block'
  document.querySelector('#no').style.display='none';
  document.querySelector('#yes').style.display='none';

})
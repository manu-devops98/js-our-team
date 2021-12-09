const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

// creo funzione per stampare le cards del team 
function printTeam(array, container) {
  container.innerHTML = '';
  // creo ciclo for per ciclare sull'array di oggetti 
  for (let i = 0; i < array.length; i++) {
    const obj = array[i];
// creo variabile dove inserire in modo dinamico immagini,ruolo e nome 
    const teamCard = `
      <div class="team-card">
        <div class="card-image">
            <img
              src="img/${obj.image}"
              alt="${obj.name}"
            />
        </div>
        <div class="card-text">
            <h3>${obj.name}</h3>
            <p>${obj.role}</p>
        </div>
      </div>
    `;
    // inserisco variabile in html 
    container.innerHTML += teamCard; 
  }
}
// creo variabile contenitore
const teamContainer = document.querySelector('.team-container');
// utilizzo funzione per stampare array in html 
printTeam(team, teamContainer);


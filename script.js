// Datos de los dinosaurios
const dinosaurios = {
    't-rex': {
        nombre: 'Tyrannosaurus Rex',
        periodo: 'Cretácico Superior (68-66 millones de años atrás)',
        dieta: 'Carnívoro',
        tamaño: '12-13 m de largo, 3.7-4 m de altura',
        peso: '8-14 toneladas',
        descripcion: 'El Tyrannosaurus rex fue uno de los mayores carnívoros terrestres conocidos. Tenía un cráneo masivo equilibrado por una cola larga y pesada. Sus miembros anteriores eran pequeños pero inusualmente fuertes para su tamaño.',
        imagen: 'imagen/t-rex2.jpg'
    },
    'triceratops': {
        nombre: 'Triceratops',
        periodo: 'Cretácico Superior (68-66 millones de años atrás)',
        dieta: 'Herbívoro',
        tamaño: '8-9 m de largo, 3 m de altura',
        peso: '6-12 toneladas',
        descripcion: 'Triceratops es uno de los dinosaurios más reconocibles por su gran volante óseo y sus tres cuernos faciales. Era un herbívoro que probablemente usaba sus cuernos para defenderse de depredadores como el T-Rex.',
        imagen: 'imagen/triceratops2.jpg'
    },
    'velociraptor': {
        nombre: 'Velociraptor',
        periodo: 'Cretácico Superior (75-71 millones de años atrás)',
        dieta: 'Carnívoro',
        tamaño: '2 m de largo, 0.5 m de altura',
        peso: '15-20 kg',
        descripcion: 'Contrario a su representación en películas, el Velociraptor real era mucho más pequeño, aproximadamente del tamaño de un pavo. Era un depredador ágil con plumas y una gran garra en forma de hoz en cada pata trasera.',
        imagen: 'imagen/velociraptor2.jpg'
    },
    'Brachiosaurus': {
        nombre: 'Brachiosaurus',
        periodo: 'Jurásico Superior (154-153 millones de años atrás)',
        dieta: 'Herbívoro',
        tamaño: '25-26 m de largo, 12-13 m de altura',
        peso: '28-58 toneladas',
        descripcion: 'Gigante del Jurásico con cuello largo y patas delanteras más altas que las traseras. Se alimentaba de las copas de los árboles en bosques jurásicos. Su postura erguida y su tamaño colosal lo convierten en uno de los saurópodos más icónicos de todos los tiempos.',
        imagen: 'imagen/Brachiosaurus2.jpg'
    },
    'Stegosaurus': {
        nombre: 'Stegosaurus',
        periodo: 'Jurásico Superior (155-150 millones de años atrás)',
        dieta: 'Herbívoro',
        tamaño: '9 m de largo, 4 m de altura',
        peso: '5-7 toneladas',
        descripcion: 'Dinosaurio herbívoro reconocido por las grandes placas en su espalda y cola con púas. Con un cuerpo bajo y pesado, este animal recorría lentamente el paisaje jurásico. Su armadura natural y su temible cola hacían de él un herbívoro preparado para resistir ataques.',
        imagen: 'imagen/Stegosaurus2.jpg'
    },
    'Ankylosaurus': {
        nombre: 'Ankylosaurus',
        periodo: 'Cretácico Superior (68-66 millones de años atrás)',
        dieta: 'Herbívoro',
        tamaño: '6-8 m de largo, 1.7 m de altura',
        peso: '4-8 toneladas',
        descripcion: 'Conocido como el "tanque viviente" del Cretácico, este dinosaurio estaba cubierto por una armadura ósea y poseía una poderosa maza en la cola. Su diseño defensivo lo hacía casi invulnerable a los ataques de los depredadores.',
        imagen: 'imagen/Ankylosaurus2.jpg'
    }
};

const curiosidades = [{
        texto: "El dinosaurio más grande conocido es el Patagotitan mayorum, que medía unos 37 metros de largo y pesaba alrededor de 69 toneladas, ¡equivalente a 10 elefantes africanos!",
        imagen: "imagen/curiosidad1.jpg"
    },
    {
        texto: "El Microraptor era un dinosaurio del tamaño de un cuervo que tenía cuatro alas (en las patas delanteras y traseras) y probablemente podía planear.",
        imagen: "imagen/curiosidad2.jpg"
    },
    {
        texto: "El Allosaurus, depredador del Jurásico, tenía mandíbulas extremadamente flexibles, lo que le permitía abrir la boca en un ángulo muy amplio, útil para cazar presas grandes.",
        imagen: "imagen/curiosidad3.jpg"
    },
    {
        texto: "Algunos dinosaurios como el Maiasaura cuidaban de sus crías en nidos comunales, mostrando comportamientos parentales avanzados.",
        imagen: "imagen/curiosidad4.jpg"
    },
    {
        texto: "El Spinosaurus es el único dinosaurio conocido que era semiacuático, con adaptaciones similares a los cocodrilos modernos.",
        imagen: "imagen/curiosidad5.jpg"
    },
    {
        texto: "Los dientes del Tyrannosaurus rex podían llegar a medir más de 30 cm, con raíces incluidas. Estaban diseñados para triturar huesos con facilidad..",
        imagen: "imagen/curiosidad6.jpg"
    },
    {
        texto: "El Quetzalcoatlus fue uno de los mayores reptiles voladores, con una envergadura de hasta 12 metros. A pesar de su tamaño, probablemente caminaba como una garza cuando estaba en tierra.",
        imagen: "imagen/curiosidad7.jpg"
    },
    {
        texto: "Las aves actuales son, técnicamente, dinosaurios, ya que descienden directamente de un grupo de dinosaurios terópodos.",
        imagen: "imagen/curiosidad8.jpg"
    },
    {
        texto: "El Carnotaurus tenía brazos aún más cortos que los del T. rex, y probablemente no los usaba para nada útil.",
        imagen: "imagen/curiosidad9.jpg"
    },
    {
        texto: "El Therizinosaurus tenía unas garras de más de 1 metro de largo, ¡las más largas de cualquier animal terrestre conocido! A pesar de su aspecto aterrador, era herbívoro.",
        imagen: "imagen/curiosidad10.jpg"
    },
    {
        texto: "El Dilophosaurus tenía dos crestas óseas en la cabeza, pero a diferencia de lo que muestra Jurassic Park, no escupía veneno ni tenía un collar extensible.",
        imagen: "imagen/curiosidad11.jpg"
    },
    {
        texto: "Se han encontrado restos de dinosaurios con posibles tumores y enfermedades óseas, lo que demuestra que también sufrían dolencias similares a las humanas.",
        imagen: "imagen/curiosidad12.jpg"
    },
];

// Función para mostrar información en el modal
function mostrarInfo(dinoId) {
    const dino = dinosaurios[dinoId];
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = dino.nombre;
    modalBody.innerHTML = `
        <p><strong>Período:</strong> ${dino.periodo}</p>
        <p><strong>Dieta:</strong> ${dino.dieta}</p>
        <p><strong>Tamaño:</strong> ${dino.tamaño}</p>
        <p><strong>Peso:</strong> ${dino.peso}</p>
        <p>${dino.descripcion}</p>
        <img src="${dino.imagen}" class="img-fluid mb-3" alt="${dino.nombre}">
    `;

    // Mostrar el modal usando Bootstrap
    const modal = new bootstrap.Modal(document.getElementById('dinoModal'));
    modal.show();
}

// Función para mostrar una curiosidad aleatoria
function mostrarCuriosidad() {
    const indice = Math.floor(Math.random() * curiosidades.length);
    const curiosidad = curiosidades[indice];

    document.getElementById('curiosidadTexto').textContent = curiosidad.texto;
    document.getElementById('curiosidadImagen').src = curiosidad.imagen;
    document.getElementById('curiosidadImagen').alt = "Ilustración: " + curiosidad.texto.substring(0, 30) + "...";
}

// Evento para el botón de cambiar curiosidad
document.getElementById('cambiarCuriosidad').addEventListener('click', mostrarCuriosidad);

// Manejar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    this.reset();
});

// Mostrar una curiosidad al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    mostrarCuriosidad();

    // Precargar imágenes para evitar delays al cambiar
    curiosidades.forEach(curiosidad => {
        const img = new Image();
        img.src = curiosidad.imagen;
    });
});
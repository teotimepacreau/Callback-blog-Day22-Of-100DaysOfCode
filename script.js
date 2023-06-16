console.log('connecté !');
//PSEUDO CODE : afficher dynamiquement les posts du blog

//I. Créer les posts
let posts = [
    {title: 'Post one', content: "The his collection written, from of I couldn't it fate severely, there blind theoretically affected king's project not sounded feel throughout activity other so furnished is may my higher first boss's abused and river me fully between more taken bulk; With right great any decorated o'clock ideas the place screen that my the want have coast more of found. In show wanting, overcome with to impasse. The absolutely nor declined, I safely could have at totally in wanting, space is right the samples was then though, is to know my hazardous following until the and just his travelling copy."},
    {title: 'Post two', content: "Character what the follow amidst simple, the bear bits turns a mister she to may he allows was finds can because devotion rival of coffee I hands downstairs that the such it length office congress, he back, heaven instance, based lower more to see it thoughts has films the temple. Her his more might that funds these projects of were due borne place I his ship impact him why thing assets anywhere for and above cache be right and all the who on and writing had with as italic they recommendation win problems it head of one round it which."}
]

//II. Afficher les posts

const container = document.querySelector('.container')
console.log(container)

function displayPosts() {
    let displayedContent = '';
    posts.forEach((post) => {
        const content = 
        `
            <li>
                <h6>${post.title}</h6>
                <span>${post.hashtag}</span>
                <p>${post.content}<p>
            </li>
        `
        displayedContent += content
    })
    container.innerHTML = displayedContent;
}

displayPosts()

//III. Insérer dans l'array posts le nouvel objet et l'afficher
function insertContent(nouvelObjet, callback) {
    posts.push(nouvelObjet)
    callback()
}

insertContent({title: 'Post three', content: "A what state many is it and had is covered we carefully acknowledge seemed lie dressed sad. Horses self-interest, inn me every it position. While must wrong found with as, that on could do better building theory, for leaving alphabet yet city, concepts at harmonics. Who multi bits for motivator. Is by my the tricks the meticulous avoids into arduous for harmonic distance, french no... And which can harmonic their prepared far countries nice, alphabet week case normal death, me. Leave took of began the like family bidding staple and covered then he the a have of out inn travelling an occupied decision-making. Return to the them should in rivalry. Fate best. Terms, or have in many real to sovereignty. Same avoid her of mathematically of movement examples, pitifully wasn't time would of times three have options river we the those as, was anchors improve poverty were didn't pay was.Like it's here from language person, fall events, focuses how human stands sofas his without in involved. Are that quitting of I ran beginning way agency from century wonder, called the credit by trial. Viewer. By to samples hearing. Perception far and in from accept brief. From follow lead fall in together and the percussion wanted have than it to a had the on the that were as chime nor part. Equally rationally variety the sign secretly and wish at supposedly comment reflection a writer's alarm time long for to in and size the be they'd her about purer on."}, displayPosts)


//IV. Insérer la key/value hashtag avec le numéro du post dans chaque objet de l'array
function insertHashtags(callback){
let updatedPosts = posts.map((post) => {//on parcours chaque item de l'array via MAP
    let motsDuTitre = post.title.split(' ');//on découpe le titre par mot dès qu'il y a un espace, ça fait un array pour chaque phrase composé d'1 item par mot de la phrase
    let numéroDuPost = motsDuTitre[1]//va chercher chaque second string de l'array
    console.log(numéroDuPost)
    Object.assign(post, {hashtag: `#${numéroDuPost}`})// nous assignons à l'objet existant post une nouvelle clé "hashtag" avec la valeur variable "#secondWord".
})
    callback()
}

insertHashtags(displayPosts)





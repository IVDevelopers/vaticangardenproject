const estateElements = document.querySelectorAll('.top-estate');
const backdropElement = document.querySelector('.backdrop');
const modalElement = document.querySelector('.modal-estate');
const mobileNavElement = document.querySelector('.mobile-nav-container');
const mobileHandularElement = document.querySelector('.mobile-handular');

const estates = [
    {
        id:'e1',
        eName:'name1',
        eImage:'asset/images/e1.jpg',
        eLocation:'location1',
        eDetails:'dlajldjjflakdjfdlajldjdkajkkdfdsafdgdfd',
        f1:'features1',
        f2:'feature2',
        f3:'feature3',
        f4:'feature4',
        f5:'feature5'
    },
    {
        id:'e2',
        eName:'name2',
        eImage:'asset/images/e2.jpg',
        eLocation:'location1',
        eDetails:'dlajldjjflakdjfdlajldjdkajkkdfdsafdgdfd',
        f1:'features1',
        f2:'feature2',
        f3:'feature3',
        f4:'feature4',
        f5:'feature5'
    },
    {
        id:'e3',
        eName:'name3',
        eImage:'asset/images/e3.jpg',
        eLocation:'location1',
        eDetails:'dlajldjjflakdjfdlajldjdkajkkdfdsafdgdfd',
        f1:'features1',
        f2:'feature2',
        f3:'feature3',
        f4:'feature4',
        f5:'feature5'
    },
    {
        id:'e4',
        eName:'name4',
        eImage:'asset/images/e4.jpg',
        eLocation:'location1',
        eDetails:'dlajldjjflakdjfdlajldjdkajkkdfdsafdgdfd',
        f1:'features1',
        f2:'feature2',
        f3:'feature3',
        f4:'feature4',
        f5:'feature5'
    }
];

for(i = 0; i < estateElements.length; i++){
    estateElements[i].addEventListener('click', function(e){
        const eventId = e.target.dataset.id;
        console.log(eventId);
        for(i = 0; i < estates.length; i++){
            if(eventId === estates[i].id){
                modalElement.innerHTML= `
                <div class="modal-estate__img" id="${estates[i].id}_modal">
                <img src="${estates[i].eImage}">
                </div>
                <div class="modal-estate__text">
                <h2>${estates[i].eName}</h2>
                <h3>${estates[i].eLocation}</h3>
                <p>${estates[i].eDetails}</p>
                <ul class="modal-estate__features">
                <li class="modal-estate__feature">${estates[i].f1}</li>
                <li class="modal-estate__feature">${estates[i].f2}</li>
                <li class="modal-estate__feature">${estates[i].f3}</li>
                <li class="modal-estate__feature">${estates[i].f4}</li>
                <li class="modal-estate__feature">${estates[i].f5}</li>
                </ul>
                </div>
                <div>
                <a href="" class="btn modal-estate__btn">Buy</a>
                <button class="btn btn-orange modal-estate__btn--cancel">Cancel</button>
                </div>
                `;
            }
        }

     
        
            const cancelModalBtn = document.querySelector('.modal-estate__btn--cancel');
            cancelModalBtn.addEventListener('click',function(){
                closeModal();
            });
        
        

        backdropElement.classList.add('open');
        modalElement.classList.add('opengrid');
    });
}


function closeModal(){
    backdropElement.classList.remove('open');
    modalElement.classList.remove('opengrid');
    mobileNavElement.classList.remove('openflex');
}



backdropElement.addEventListener('click',function(){
    closeModal();
});

mobileHandularElement.addEventListener('click',function(){
    mobileNavElement.classList.add('openflex');
    backdropElement.classList.add('open');
})  

function estateModalDetails(){
//  console.log('setting up my modal details')
  

}

function App(){
    estateModalDetails()
}

App();

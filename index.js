 
//create button for profile
//deploy to surge 
var input;
$('#back').on('click', search)
$('input').on('input', e =>{
    input = e.target.value
})
$('input').on('keypress', function(e){
    if (e.key === 'Enter'){
        search()
    }
})
$('#submit').on('click', search)




function search(e){
    $.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input} `, (data) =>{
        $('main').empty()
        var container = $(`<div class= 'container' boarder= '1px solid black'></div>`)
        var row = $(`<div class= 'row'></div>`)
        $(container).append(row)
        $('main').append(container)
        $.each(data.drinks, function(key, value) {
            var name = value.strDrink
            var thumb= value.strDrinkThumb
            var id= value.idDrink
            var col = $(`<div class= 'col-3'></div>`)
            var h2 = $(`<h2 class="result">${name}</h2>`)
            var img = $(`<img class= 'before' id='${id}' src='${thumb}'></ul>`)
            $(col).append(h2).append(img)
            $(row).append(col)
            $(`#${id}`).on('click',e=>{
                $.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,(data) =>{
                    $('main').empty()
                    $.each(data.drinks, function(key, value){
                        var name = value.strDrink
                        var thumb= value.strDrinkThumb
                        var inst = value.strInstructions
                        var h2 = $(`<h2 class="display-5">${name}</h2>`)
                        var img = $(`<img class='after' src='${thumb}'></ul>`)
                        var p = $(`<p class = 'inst'>${inst}<p>`)
                        $('main').append(h2).append(img).append(p)
                    })
                })
                
            })
        })
    })
}

//var ingrid = $(`<div id= 'list'></div>`)
//var ingredientlist= value.strIngredient

// for(var i =0; i <15; i++){
//     var ingredient = $(`<p> value.strIngredient${i}</p>`)
//     console.log(ingredient)
//     $('ingrid').append(ingredient)
// }

// resultCard.append(h3).append(img).append(div).append(a)
// $('#results').append(resultCard)


// var title = value.title
// var source = value.thumbnail
// var ingredients = value.ingredients
// var href = value.href;
// var resultCard = $(`<span class="result-card"></span>`)
// var div = $(`<div class="card-ingredients"><em>Ingredients:</em> ${ingredients}</div>`)
// var a = $(`<a href=${href}>Visit Recipe</a>`)














//js?key=1


// $('#fetch').on('click', run)

// function run (e){
    
//     $.get('https://dog.ceo/api/breeds/image/random', (data)=>{
//    //console.log(data)
//    var source = data.message
//    var img = $(`<img class="col" src='${source}' width=20% height=30%></ul>`)
//    $('#pups').append(img)
//    counter+=1})
//     }else{
       
// }
// $('#clear').on('click', e=>{
//     $('#pups').empty()

// })

window.onload = () =>{
    let resultsContainer = document.getElementById('bestFitResultContainer')
    console.log('Im allllliveeee');
    resultsContainer.style.display = 'none';
}

const bestFitCalc = () =>{
    let height = document.getElementById('heightSelector').value
    let waistSize = document.getElementById('waistSizeSelector').value;
    let inseam = document.getElementById('inseamSelector').value
    let neck = document.getElementById('neckSizeSelector').value
    let arms = document.getElementById('armsSizeSelector').value
    let chest = document.getElementById('ChestSizeSelector').value
    let email = document.getElementById('bestFitEmail').value
    let itemToFit = document.getElementById('clothingItem').value
    let selectContainer = document.getElementById('bestfitSelectContainer')
    let resultsContainer = document.getElementById('bestFitResultContainer')
    console.log('height :' + height);
    console.log('waistSize :' + waistSize);
    console.log('inseam :' + inseam);
    console.log('neck :' + neck);
    console.log('arms :' + arms);
    console.log('chest :' + chest);
    console.log('itemToFit :' + itemToFit);
    console.log('email :' + email);
    // calculate best fit
    // let clothingIdentifier = itemToFit
    // console.log('clothingIdentifier :' + clothingIdentifier);
    let jeansSize;
    // let pants = clothingIdentifier.includes('Bottoms');
    // console.log('pants :' + clothingIdentifier);

 if(itemToFit.includes('Bottoms')){
     console.log("They're bottoms")
     if(height >= 66 && height <= 68 && waistSize >= 38 && waistSize <= 42 && inseam >= 16 && inseam <= 18){
         console.log("Large reqs met")
         jeansSize ="Large"
     }

     if(height >= 69 && height <= 71 && waistSize >= 44 && waistSize <= 48 && inseam >= 20 && inseam <= 22){
        console.log("XL reqs met")
        jeansSize ="XL"
    }

    if(height >= 72 && height <= 73 && waistSize >= 50 && waistSize <= 52 && inseam >= 24 && inseam <= 26){
        console.log("XXL reqs met")
        jeansSize ="XXL"
    }

 } 

 if(itemToFit.includes('Top')){
     console.log('its a top');
 }

 let markup = `
 <h3 class='resultsHeaderText'> You wear a size ${jeansSize} in the ${itemToFit}</h3>
 <h5 class='resultsHeaderText2'> The rest of your best fit sizings for our line have been sent to ${email}</h3> 
 `
 document.getElementById('resultsSubCon').innerHTML = markup;
 // make select container invisible
 selectContainer.style.display = 'none';
 // make results container visible
 resultsContainer.style.display = 'block';


}




//dynamically create new html for results container with best fit data




/*
Large =  height:66-68 waist:38-42 inseam:16-18 neck:14-15 arms:17-18 chest:27-30
XL = height:69-71 waist:44-48 inseam:20-22 neck:16-17 arms:19-20 chest:33-36
XXL = height:72-73 waist:50-52 inseam:24-26 neck:18-20 arms:21-22 chest:39-42
*/
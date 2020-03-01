var request = new XMLHttpRequest();

request.open('GET', "https://dog.ceo/api/breeds/image/random");

request.onload = function () {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);
    
    var originalUrl = parsedData.message;
    console.log(originalUrl);
    
    var image = document.createElement('img');
    image.setAttribute('src', originalUrl);
    document.body.appendChild(image);
    
}
    request.send();


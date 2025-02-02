// Unsplash API
const count = 10;
const apiKey = "mkbunIFGU8cWsJKgqwLuK1XdstUK6lvMVb8quOmojJw";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log("data: ", data);
  } catch (error) {
    // catch error here
  }
}

// On load
getPhotos();

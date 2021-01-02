export const deleteSearchResults = () => {
    const parentElement = document.getElementById("searchResults");
    let child = parentElement.lastElementChild;
    while (child) {
      parentElement.removeChild(child);
      child = parentElement.lastElementChild;
    }
  };
  
  export const buildSearchResults = (resultArray) => {
    resultArray.forEach((result) => {
      const resultItem = createResultItem(result);
      const resultContents = document.createElement("div");
      const resBox = document.createElement('div');
      resultContents.classList.add("content");
      resultContents.classList.add("resultContents");
      
      resultContents.append(resBox);
      resBox.classList.add('contentBx');

      const resultTitle = document.createElement("div");
      resultTitle.classList.add("resultTitle");
      const link = document.createElement("a");
      link.href = `https://en.wikipedia.org/?curid=${result.id}`;
      link.textContent = result.title;
      link.target = "_blank";
      resultTitle.append(link);
resBox.append(resultTitle);
      if (result.img) {
        const resultImage = createResultImage(result);
        resultItem.append(resultImage);
        
      }
      const resultText = createResultText(result);
      resultContents.append(resultText);
      resultItem.append(resultContents);
      const searchResults = document.getElementById("searchResults");
      searchResults.append(resultItem);
    });
  };
  
  const createResultItem = (result) => {
    const resultItem = document.createElement("div");
    
    resultItem.classList.add("cardCopy");
    resultItem.classList.add('col-4');
    resultItem.classList.add('col-sm-4');
    resultItem.classList.add('col-md-4');
    resultItem.classList.add('col-lg-3');

    
   
    return resultItem;
  };
  
  const createResultImage = (result) => {
    const resultImage = document.createElement('div');
    resultImage.classList.add("imgBx");
    resultImage.classList.add("resultImage");
    
    const img = document.createElement("img");
    img.src = result.img;
    img.alt = result.title;
    resultImage.append(img);
    img.classList.add('img-fluid')
    return resultImage;
  };
  
  const createResultText = (result) => {
    const resultText = document.createElement("div");
    resultText.classList.add("resultText");
    const resultDescription = document.createElement("p");
    resultDescription.classList.add("resultDescription");
    resultDescription.textContent = result.text;
    resultText.append(resultDescription);
    return resultText;
  };
  
  export const clearStatsLine = () => {
    document.getElementById("stats").textContent = "";
  };
  
  export const setStatsLine = (numberOfResults) => {
    const statLine = document.getElementById("stats");
    statLine.style.display('none');
    if (numberOfResults) {
      statLine.textContent = `Displaying ${numberOfResults} results.`;
    } else {
      statLine.textContent = "Sorry, no results.";
    }
  };
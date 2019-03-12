const onProgress = (e) => {
  if (e.lengthComputable) {
    let percentComplete = (e.loaded / e.total) * 100;
    console.log(percentComplete);
  }
}

const onLoad = (e) => {
  console.log("The progress has been finished!");
}

const onError = (e) => {
  alert("Error " + e.target.status + " occurred while receiving the document.");
}

const httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "https://jsonplaceholder.typicode.com/posts/", true);
httpRequest.onprogress = onProgress;
httpRequest.onload = onLoad;
httpRequest.onerror = onError;
httpRequest.send();